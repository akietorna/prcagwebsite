import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminNavBar from '../src/components/adminNav';
import PostSermon from '../src/components/pages/postSermon';
import ReadPrayerRequest from '../src/components/pages/readPrayerRequest';
import Posts from '../src/components/pages/Posts';
import LogIn from '../src/components/signin';
import NavBar from './components/navbar'
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
import AdminSideBar from './components/adminSidebar';
import PostDevotional from './components/pages/postDevotional';
import ReadTestimony from './components/pages/readtestimony';
import PostAnnouncement from './components/pages/postAnnouncement';
import PostGeneral from './components/pages/postGeneral';
import PostYouth from './components/pages/postYouth';
import PostMen from './components/pages/postMen';
import PostWomen from './components/pages/postWomen';
import PostTeen from './components/pages/postTeen';
import PostChildren from './components/pages/postChildren';
import PostBooks from './components/pages/postBooks';
import PostSundaySchool from './components/pages/postSundaySchool';
import PostMarriage from './components/pages/postMarriage';
import PostHealth from './components/pages/postHealth';
import PostMotivation from './components/pages/postMotivation';
import PostChristianLife from './components/pages/postChristianLife';
import OthersPosts from './components/pages/postOthers';
import ReadComment from './components/pages/readComment';
import UpdateAboutUs from './components/pages/updateAboutUs';
import PostPrayer from './components/pages/postPrayer';


function App() {

  const pathname = window.location.pathname;

  var myPath = pathname.includes('/admin') ? true :false

  if (myPath){
    return(
        <Router>
          {window.innerWidth <1100 ? <AdminSideBar />  : <AdminNavBar /> }
          <Routes>
            <Route exact path='/admin'  element={<LogIn />}/>    
            <Route exact path='/admin/posts' element={<Posts />} />
            <Route exact path='/admin/postsermons' element={<PostSermon />} />
            <Route exact path='/admin/post-devotional' element={<PostDevotional />} />
            <Route exact path='/admin/postannouncement' element={<PostAnnouncement />} />
            <Route exact path='/admin/postannouncement/general' element={<PostGeneral />} />
            <Route exact path='/admin/postannouncement/youth' element={<PostYouth />} />
            <Route exact path='/admin/postannouncement/men' element={<PostMen />} />
            <Route exact path='/admin/postannouncement/women' element={<PostWomen />} />
            <Route exact path='/admin/postannouncement/teen' element={<PostTeen />} />
            <Route exact path='/admin/postannouncement/children' element={<PostChildren />} />
            <Route exact path='/admin/postbook' element={<PostBooks />} />
            <Route exact path='/admin/postbook/sundayschool' element={<PostSundaySchool />} />
            <Route exact path='/admin/postbook/prayer' element={<PostPrayer/>} />
            <Route exact path='/admin/postbook/marriage' element={<PostMarriage/>} />
            <Route exact path='/admin/postbook/health' element={<PostHealth/>} />
            <Route exact path='/admin/postbook/motivation' element={<PostMotivation/>} />
            <Route exact path='/admin/postbook/christian-life' element={<PostChristianLife/>} />
            <Route exact path='/admin/read-testimony' element={<ReadTestimony />} />
            <Route exact path='/admin/readothers' element={<OthersPosts />} />
            <Route exact path='/admin/readothers/comments' element={<ReadComment />} />
            <Route exact path='/admin/readothers/updateaboutus' element={<UpdateAboutUs />} />
            <Route exact path='/admin/read-prayer-request' element={<ReadPrayerRequest />} />
          </Routes>
        </Router>
    )
  } 

  else{

    return (
        <Router>
          {window.innerWidth <1100 ? <SideBar />  : <NavBar /> }
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
          <FooterContainer />
        </Router>
  
        
  
    );
  }
}

export default App;
