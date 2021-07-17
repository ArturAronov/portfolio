import {Algorithms} from './algorithms';
import {About} from './about';
import {Contact} from './contact';
import {Projects} from './projects';

export const App=function(){
/*   const grid=document.querySelector('.grid');
  const masonry=new Masonry(grid, {
    itemSelector: '.grid-item',
    gutter: 10,
  }); */

  return(
    <div id='container'>
      
      <Algorithms/>
      <About/>
      <Contact/>
      <Projects/>
    </div>
  )
}