import React from 'react';
import { formatData } from '../util/valueFormat';

const Results = ({data}) => {
  if (data.length === 0) {
    return <p>Select parameters to view data.</p>;
  }
  const dataPoints = Object.keys(data[0]);
  
  return (
    <div id='results'>
      {typeof data === 'string' ? <p>{data}</p> : 
      <div>
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
                  <td className='rowData'>{data[0][x] !== null ? formatData(data[0][x]) : 'Not yet available'}</td>
                </tr>
              )
            })} 
          </tbody>
        </table>
      </div>}
    </div>
  )
}

export default Results;
