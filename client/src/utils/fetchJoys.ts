import { Joy } from '../types/Joy';
import { Dispatch, SetStateAction } from 'react';

const fetchJoys = async (
  setJoys: Dispatch<SetStateAction<Joy[]>>
) => {
  try {
    const res = await fetch('../src/assets/joys.json', {
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
