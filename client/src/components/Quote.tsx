import { FC } from 'react';
import { SubHeading } from 'components';

interface Props {
  quote: {
    message: string;
    name?: string;
  };
}

const Quote: FC<Props> = ({ quote }) => {
  return (
    <blockquote className='rounded-lg'>
      <SubHeading text='Quote' />
      <p className='italic'>
        <span>“ </span>
        {quote.message}
        <span> ”</span>
      </p>
      <p className='text-2xl'>
        <span>- </span>
        {quote.name || 'Unknown'}
      </p>
    </blockquote>
  );
};

export default Quote;
