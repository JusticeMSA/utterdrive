import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './navbar/Navbar'
import './app.scss'
import Hero from './hero/Hero'
import StickySides from './sticky-sides/StickySides';
import SectionOne from './section-one/SectionOne';
import SectionTwo from './section-two/SectionTwo';


function App() {

  return (
    <Router>
      <div className='app'>
        <div className="app-container">
          <StickySides/>
          <Navbar/>
          <Hero/>
          <SectionOne/>
          <SectionTwo/>
        </div>
      </div>
    </Router>
  );
}

export default App;
