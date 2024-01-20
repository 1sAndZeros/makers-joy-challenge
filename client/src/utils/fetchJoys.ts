import { Joy } from 'types';
import { Dispatch, SetStateAction } from 'react';

const fetchJoys = async (setJoys: Dispatch<SetStateAction<Joy[]>>) => {
  try {
    // ../src/assets/joys.json
    const res = await fetch('/api/joys', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const data: { joys: Joy[] } = await res.json();
    setJoys(data.joys);
  } catch (err) {
    console.error(err);
    if (typeof err === 'object' && err && 'message' in err) {
      alert(err.message);
    }
  }
};

export default fetchJoys;
