import React from 'react';
import { cohort } from 'data/joys.json';
import { Joy } from 'types';
import { Name } from 'components';

interface Props {
  joys: Joy[];
}

const Nominate: React.FC<Props> = ({ joys }) => {
  const cohortNames = cohort.names.sort();
  const previousNames = joys.map((joy) => joy.name);
    return (
      <div className='next'>
        <h2>Nominate Next Joy Giver</h2>
        <div className='names-container'>
          {cohortNames
            .filter((name) => {
              return !previousNames.includes(name);
            })
            .map((name) => {
              return <Name key={name} giver={name} />;
            })}
          <Name giver='Someone Else...' />
        </div>
      </div>
    );
};

export default Nominate;
