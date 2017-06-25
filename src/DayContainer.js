import React from 'react';
import DayHeader from './DayHeader';

const DayContainer = (props) => {
  return (
    <div>
      <DayHeader
        {...props}
      />
    </div>
  );
};

export default DayContainer;
