import Video from '../vids/1.mp4'

export const Vid1=function(){
  const test=function(){
    let element=document.getElementById('v1').style;
    //let viz=element.visibility='hidden'
    //window.getComputedStyle(document.getElementById('v1')).visibility
    const viz=window.getComputedStyle(document.getElementById('v1'));
    
    console.log(viz.getPropertyValue('visibility'))
    element.visibility='hidden';
    console.log(viz.getPropertyValue('visibility'))
    element.visibility='visible';
    console.log(viz.getPropertyValue('visibility'))
  };

  return(
    <div id='v1'>
      <video autoPlay muted loop src={Video} type='video/mp4' onMouseOver={()=>test()}/>
    </div>
  );
};