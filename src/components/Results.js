import React from 'react';

const Results = ({data}) => {
  if (data.length === 0) {
    return <p>Select parameters to view data.</p>;
  }
  const dataPoints = Object.keys(data[0]);
  return (
    <div id='results'>
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>Selection</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {dataPoints.map(x => {
            return (
              <tr key={x}>
                <td className='rowName'>{x}</td>
                <td className='rowData'>{data[0][x] !== null ? data[0][x] : 'Not yet available'}</td>
              </tr>
            )
          })} 
        </tbody>
      </table>
    </div>
  )
}

export default Results;
