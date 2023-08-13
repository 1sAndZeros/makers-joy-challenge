import { useState, useEffect } from 'react';
import Video from './components/Video';
import Name from './components/Name';
import Quote from './components/Quote';
import data from '../src/data/data.json';
import Message from './components/Message';

function App() {
  const today = new Date();
  let currentDay = String(today.getDate()).padStart(2, '0');
  let currentMonth = String(today.getMonth() + 1).padStart(2, '0');
  let currentYear = today.getFullYear();
  let currentDate = `${currentDay}/${currentMonth}/${currentYear}`;
  const [prevGivers, setPrevGivers] = useState(
    data.joys.sort((a, b) => (a.id > b.id ? -1 : 1)),
  );
  const [todaysGiver, setTodaysGiver] = useState(data.joys.at(0));
  const [viewDate, setViewDate] = useState(currentDate);
  const cohortNames = data.cohort.names.sort();
  const previousNames = data.joys.map((joy) => joy.name);

  useEffect(() => {
    getToday();
  }, [viewDate]);

  const getToday = () => {
    const giver = prevGivers.find((joy) => {
      return joy.date === viewDate;
    });
    giver && setTodaysGiver(giver);
  };

  return (
    <>
      <h1 className='title text-center'>✨ Makers Joy Challenge ✨</h1>
      <main>
        <div className='previous'>
          <h2>Previous Joy Givers</h2>
          <div className='names-container'>
            {prevGivers.map((giver) => {
              return (
                <Name
                  key={giver.id}
                  setViewDate={setViewDate}
                  date={giver.date}
                  name={giver.name}
                >
                  <span className='date'>{giver.date}</span>
                </Name>
              );
            })}
          </div>
        </div>
        <div className='joy'>
          <h2 className='mb-1'>
            {viewDate === currentDate ? 'Todays Joy' : `Joy from ${viewDate}`}
          </h2>
          <p className='mb-1'>
            Brought to you by{' '}
            <span>{todaysGiver ? todaysGiver.name : 'Someone'}</span>
          </p>
          <Video
            giver={todaysGiver}
            embedId={todaysGiver ? todaysGiver.youtube.id : ''}
          />
          <Quote quote={todaysGiver.quote} />
          <Message message={todaysGiver.message} />
        </div>
        <div className='next'>
          <h2>Nominate Next Joy Giver</h2>
          <div className='names-container'>
            {cohortNames
              .filter((name) => {
                return !previousNames.includes(name);
              })
              .map((name) => {
                return (
                  <Name
                    key={name}
                    name={name}
                    setViewDate={undefined}
                    date={undefined}
                    children={undefined}
                  />
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
