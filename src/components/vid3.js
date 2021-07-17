import Video from '../vids/3.mp4'

export const Vid3=function(){
  return(
    <div className='video'>
      <video autoPlay muted loop src={Video} type='video/mp4'/>
    </div>
  );
};