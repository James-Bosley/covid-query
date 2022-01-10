import React, { useState } from 'react';
import Results from './Results';
import { formattedDate } from '../util/dateFormat';
import { getData } from '../util/api'
import { nations, dataPoints } from '../util/areaArrays';

const Form = () => {
  const [data, setData] = useState([]);
  const [areaType, setAreaType] = useState('overview');
  const [areaName, setAreaName] = useState('');
  const [date, setDate] = useState(formattedDate());
  const [fields, setFields] = useState([])

  const handleChange = ({target}) => {
    switch (target.name) {
      case 'areaType': 
        setAreaType(target.value);
        setAreaName('');
        break;
      case 'areaName': 
        if (target.value !== 'default') {
          setAreaName(target.value);
        } 
        break;
      case 'date': setDate(target.value); break;
      case 'fields': 
        setFields(prev => {
          const value = JSON.parse(target.value);
          return target.checked ? [...prev, value] : prev.filter(x => x.id !== value.id);
        });
        break;
      default: throw new Error('Input not recognised.');
    }
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const filters = { areaType:areaType, areaName: areaName, date: date };
    const response = await getData(filters, fields);
    setData(response);
  }

  return (
    <div id='dataSet'>
      <h2>Filters</h2>
      <form id='form' onSubmit={handleSubmit}>
        <label>Geographic Filter: 
          <select value={areaType} onChange={handleChange} name='areaType'>
            <option value='overview'>Overview - UK Totals</option>
            <option value='nation'>Country</option>
            <option value='utla'>Region</option>
          </select>
        </label>
        {areaType !== 'nation' ? null :
          <label>Options:
            <select value={areaName} onChange={handleChange} name='areaName'>
              <option selected value='default'> -- select an option -- </option>
              {areaType !== 'nation' ? null : nations.map(option => {
                return <option key={option.id} value={option.filterTerm}>{option.name}</option>
              })}
            </select>
          </label>}
        {areaType !== 'utla' ? null : 
          <label>Search: 
            <input id='regionSelect' type='text' value={areaName} onChange={handleChange} name='areaName'></input>
          </label>}
        <label>Date: 
          <input id='dateSelect' type='date' value={date} onChange={handleChange} min='2020-01-01' max={formattedDate()} name='date' />
        </label>
        <h2>Data Required</h2>
        <div id='dataReq'>
          {dataPoints.map(dataPoint => {
            return (
              <div key={dataPoint.id} className='dataPoint'>
                <label>
                  <input value={JSON.stringify(dataPoint)} onChange={handleChange} type='checkbox' name='fields' />
                {dataPoint.name}</label>
              </div>
            )
          })}
        </div>
        <button type='submit'>Get Data</button>
      </form>
      <Results data={data} />
      <button onClick={() => window.location.reload()}>Reset Form</button>
    </div>
  );
};

export default Form;
