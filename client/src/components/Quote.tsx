import SubHeading from './SubHeading';

function Quote({ quote }) {
  return (
    <blockquote className='rounded-lg text-3xl'>
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
}

export default Quote;
