import SubHeading from './SubHeading';

function Video({ giver, embedId }) {
  return (
    // Code taken from
    // https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
    <div className='video-container'>
      <SubHeading
        text={`Song Choice : ${giver.youtube.title} by ${giver.youtube.artist}`}
      />
      <div className='video-responsive'>
        <iframe
          width='853'
          height='480'
          src={`https://www.youtube.com/embed/${embedId}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      </div>
    </div>
  );
}

export default Video;
