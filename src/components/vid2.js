import Video from '../vids/2.mp4'

export const Vid2=function(){
  return(
    <div className='video'>
      <video autoPlay muted loop src={Video} type='video/mp4'/>
    </div>
  );
};