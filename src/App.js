import React from 'react';
import NavBar from './components/navbar'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/sidebar';
import Women from './components/pages/women';
import Youth from './components/pages/youth';
import Men from './components/pages/men';
import Testimony from './components/pages/testimony';
import Teen from './components/pages/teens';
import SundaySchool from './components/pages/sundayschool';
import Sermons from './components/pages/sermons';
import PrayerRequest from './components/pages/prayerRequest';
import Prayer from './components/pages/prayer';
import Motivation from './components/pages/motivation';
import Marriage from './components/pages/marriage';
import Help from './components/pages/help';
import Health from './components/pages/health';
import General from './components/pages/general';
import Devotional from './components/pages/devotional';
import Comments from './components/pages/comments';
import ChristianLife from './components/pages/christianlife';
import Children from './components/pages/children';
import About from './components/pages/about';
import Home from './components/pages/home';
import { FooterContainer } from './containers/footer'
import Announcement from './components/pages/announcement';
import Others from './components/pages/others';
import Books from './components/pages/book';



function App() {
  return (
    <>
      <Router>
        {window.innerWidth < 1300 ? <SideBar /> : <NavBar />} 
        <Routes>
          <Route path='/announcement/children' element={<Children />} />
          <Route path='/book/christian-life' element={<ChristianLife />} />
          <Route path='others/comments' element={<Comments />} />
          <Route path='/devotional' element={<Devotional />} />
          <Route path='/announcement/general' element={<General />} />
          <Route path='/book/health' element={<Health />} />
          <Route path='/others/help' element={<Help />} />
          <Route path='/' element={<Home />} />
          <Route path='/others' element={<Others />} />
          <Route path='/book' element={<Books />} />
          <Route path='/book/marriage' element={<Marriage />} />
          <Route path='/announcement/men' element={<Men />} />
          <Route path='/book/motivation' element={<Motivation />} />
          <Route path='/book/prayer' element={<Prayer />} />
          <Route path='/book/prayer' element={<Prayer />} />
          <Route path='/prayer-request' element={<PrayerRequest />} />
          <Route path='/sermons' element={<Sermons />} />
          <Route path='/book/sundayschool' element={<SundaySchool />} />
          <Route path='/announcement/teen' element={<Teen />} />
          <Route path='/testimony' element={<Testimony />} />
          <Route path='/announcement/men' element={<Men />} />
          <Route path='/announcement' element={<Announcement />} />
          <Route path='/announcement/women' element={<Women />} />
          <Route path='/announcement/youth' element={<Youth />} />
          <Route path='/others/about-us'  element={<About />} />
        </Routes>
      </Router>

      <FooterContainer />

    </>
  );
}

export default App;
