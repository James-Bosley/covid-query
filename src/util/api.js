const requestFormatter = (filters, dataPoints) => {
  const endpoint = `https://api.coronavirus.data.gov.uk/v1/data`;
  let filter;
  if (filters.areaName) {
    filter = `?filters=areaType=${filters.areaType};areaName=${filters.areaName};date=${filters.date}`;
  } else {
    filter = `?filters=areaType=${filters.areaType};date=${filters.date}`;
  }
  let returnStructure = { Date: 'date' };
  dataPoints.forEach(x => {
    returnStructure[x.name] = x.filterTerm;
  })
  return endpoint + filter + '&structure=' + JSON.stringify(returnStructure);
}

const getData = async (filters, dataPoints) => {
  const response = await fetch(requestFormatter(filters, dataPoints), {
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }});
  if (response.ok) {
    const jsonResponse = await response.json();
    return jsonResponse.data;
  } else {
    return 'Error: Data not available.'
  }
}

export { getData };
