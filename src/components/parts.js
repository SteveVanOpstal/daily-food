import React from 'react';
import Part from './part';

const Parts = (props) => {
  return (
    <React.Fragment>
      {props.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </React.Fragment>
  );
};

export default Parts;
