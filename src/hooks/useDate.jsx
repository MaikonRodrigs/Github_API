import React, { useRef, useEffect } from 'react';
import * as dateFns from 'date-fns';

function UseDate({ since = '2023-03-01T04:20:58Z' }) {
  const date = since;
  const parsedDate = dateFns.parseISO(date);

  const formattedDate = dateFns.format(
    parsedDate,
    "MMMM' 'y' "
  );
  return (
    <div style={{ color: 'var(--black)', fontSize: 12, marginLeft: 2 }}>
      {formattedDate}
    </div>
  );
}

export default UseDate;