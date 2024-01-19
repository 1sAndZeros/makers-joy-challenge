import { useState, useEffect } from 'react';
import { Previous, Nominate, JoyDetails } from 'components';
import { Joy } from 'types';
import fetchJoys from 'utils/fetchJoys';

function App() {
  const [joys, setJoys] = useState<Joy[]>([]);
  const [activeJoy, setActiveJoy] = useState<Joy | null>(null);

  useEffect(() => {
    setTimeout(() => {
      fetchJoys(setJoys);
    }, 2000);
  }, []);

  useEffect(() => {
    const todays = joys.sort((a: Joy, b: Joy) => b.id - a.id)[0];
    if (todays) setActiveJoy(todays);
  }, [joys]);

  const changeGiver = (id: number) => {
    const giver = joys.find((joy) => {
      console.log('joy.id', joy.id);
      return joy.id === id;
    });
    if (giver) setActiveJoy(giver);
  };

  return (
    <>
      <h1 className='title text-center'>✨ Makers Joy Challenge ✨</h1>
      <main>
        <Previous joys={joys} handleClick={changeGiver} />
        <JoyDetails joy={activeJoy} />
        <Nominate joys={joys} />
      </main>
    </>
  );
}

export default App;
