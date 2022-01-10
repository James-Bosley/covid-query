import React, { useState, useEffect } from "react";
import { getAnnouncement } from '../util/api';

const Footer = () => {
  const [alert, setAlert] = useState([]);

  useEffect(() => {
    const thunk = async () => {
      setAlert(await getAnnouncement());
    }
    thunk();
  }, []);

  return (
    <div id='footer'>
      <p>All data is supplied by the <a href='https://coronavirus.data.gov.uk/details/developers-guide/main-api'>UK Government Open Data API.</a></p>
      {alert.length === 0 ? null :
        <div>
          <p>Latest announcement from the :<br/> {alert[0].body}</p>
        </div>}
    </div>
  )
}

export default Footer;
