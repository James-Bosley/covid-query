import React, { useState, useEffect } from "react";
import { getAnnouncement } from '../util/api';

const Footer = () => {
  const [alert, setAlert] = useState();

  useEffect(() => {
    const thunk = async () => {
      setAlert(await getAnnouncement());
    }
    thunk();
  }, []);
  console.log(alert);
  return (
    <div id='footer'>
      <p>All data is supplied by the <a href='https://coronavirus.data.gov.uk/details/developers-guide/main-api'>UK Government Open Data API.</a></p>
      {!alert ? null :
        <div>
          <p><strong>UK Gov Announcement {alert.date}:</strong></p>
          <p>{alert.body}</p>
        </div>}
    </div>
  )
}

export default Footer;
