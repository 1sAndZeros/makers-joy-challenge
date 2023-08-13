function Name({name, setViewDate, date, children}) {
  function clickHandler() {
    date && setViewDate(date)
  }
  return (
    <>
      <button type='button' onClick={clickHandler} className='name'>
        <h3>{name || 'Loading...'}</h3>
        {children}
      </button>
    </>
  );
}

export default Name