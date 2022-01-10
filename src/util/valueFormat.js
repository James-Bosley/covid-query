const formatData = data => {
  if (typeof data !== 'number') {
    return data;
  } else {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

export { formatData };
