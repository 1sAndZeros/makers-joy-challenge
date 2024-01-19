import { FC } from 'react';
import { SubHeading } from 'components';

const Message: FC<{ message: string }> = ({ message }) => {
  return (
    <div className='message rounded-lg'>
      <SubHeading text='Message' />
      <p className='text-md'>{message}</p>
    </div>
  );
};

export default Message;
