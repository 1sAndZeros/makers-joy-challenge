import { Joy } from 'types';
import { Name } from 'components';
import React from 'react';

interface Props {
  handleClick: (id: number) => void;
  joys: Joy[];
}

const Previous: React.FC<Props> = ({ handleClick, joys }) => {
  return (
    <div className='previous'>
      <h2>Previous Joy Givers</h2>
      <div className='names-container'>
        {joys.map((giver) => {
          return (
            <Name
              key={giver.id}
              handleClick={() => handleClick(giver.id)}
              giver={giver}
            >
              <span className='date'>{giver.date}</span>
            </Name>
          );
        })}
      </div>
    </div>
  );
};

export default Previous;
