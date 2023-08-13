import SubHeading from "./SubHeading";

function Message({ message }) {
  return (
    <div className='message rounded-lg'>
      <SubHeading text='Message'/>
      <p className='text-md'>{message || 'No Message'}</p>
    </div>
  );
}

export default Message;
