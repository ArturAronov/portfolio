import {Algorithms} from './algorithms';
import {About} from './about';
import {Contact} from './contact';
import {Projects} from './projects';
import {Vid1} from './vid1';
import {Vid2} from './vid2';
import {Vid3} from './vid3';

export const App=function(){

  return(
    <div id='container'>
      
      <Algorithms/>
      <Vid1/>
      <About/>
      <Vid2/>
      <Contact/>
      <Vid3/>
      <Projects/>
    </div>
  )
}