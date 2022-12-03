import React from 'react';
import Action from './action';

const Part = ({part}) => {
  return (
    <React.Fragment>
      <h2>{part.title}</h2>
      {part.actions
        .filter((a) => !!a)
        .map((action) => (
          <Action key={action.id} action={action} />
        ))}
    </React.Fragment>
  );
};

export default Part;
