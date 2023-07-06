import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greekheader from './greekheader';
import Greek from './greekheader';
import Education from './education';
import Terms from './terms';
import Teaching from './teaching';
import { title } from 'process';
import Reviews from './reviews';
import { demo } from './academ';
import Customer from './customer';
import dbservice from './services/dbservice';

const topbar = {
  logo: "https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg",
  category: "Category",
  landing: "Landings",
  page: "Pages",
  account: "Accounts",
  megamenu: "Mega Menu",
  light: "https://geeks-react.netlify.app/static/media/sun.b75d9ae1f8dafcf0365aa12aeb1e0362.svg",
  dark: "/static/media/moon.751c9cf11dba1e41f3f9ea7b232d6b50.svg",
  signin: "Sign in",
  signup: "Sign up"
}

const skills = {
  platform: "Most trusted education platform",
  header: "Grow your skills and advance career",
  para: "Start, switch, or advance your career with more than 5,000 courses,\n Professional Certificates, and degrees from world-class universities \n and companies.",
  join: "Join Free Now",
  vediologo: "https://geeks-react.netlify.app/static/media/play-btn.6d9c876694a0fc0f743209a4058b5815.svg",
  demo: "Watch Demo",
  image: "https://geeks-react.netlify.app/static/media/girl-image.4cef0f73b3900c512313.png"
}

// const count = {
//   people: "316,000+",
//   instruct: "Qualified Instructor"
// }

// const count1 = {
//   people: "1.8 Billion+",
//   instruct: "Course enrolments"
// }

// const count2 = {
//   people: "41,000+",
//   instruct: "Courses in 42 languages"
// }

// const count3 = {
//   people: "179,000+",
//   instruct: "Online Videos"
// }

// const counts = [count, count1, count2, count3];

//const counts: any[] = []

const teach = {
  student: "https://geeks-react.netlify.app/static/media/cta-instructor-1.9eaf2da7d7fa11cd0bbf.png",
  atom: "https://geeks-react.netlify.app/static/media/dollor.d1aa1a5bd93e6991edbb23c2df2dfcb1.svg",
  graph: "https://geeks-react.netlify.app/static/media/graph.7b7ac4e66a9f81a21c6868fdf10ba7ff.svg",
  header: "Becomes an instructor today",
  start: "Start Teaching Today"
}

const user = {
  
  imageUrl: 'https://geeks-react.netlify.app/static/media/avatar-1.d2fd9642fd3628734b27.jpg', 
  header: "What out customers say",
  para: "The generated lorem Ipsum is therefore always free from repetition, injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable.",
  name: "Barry Watson",
  role: "Web Developer,UK"
}

const user1 = {
  
  imageUrl: "https://geeks-react.netlify.app/static/media/avatar-2.397cdd4b772a83b9166e.jpg", 
  para: "Lorem ipsum dolor sit amet, consectetur adipi scing elit. Sed vel felis imperdiet, lacinia metus malesuada diamamus rutrum turpis leo, id tincidunt magna sodales.",
  name: "Linda Shenoy",
  role: "Developer and Bootcamp Instructor"
}

const user2 = {
  
  imageUrl: "https://geeks-react.netlify.app/static/media/avatar-3.d3ce7f20113e7d124501.jpg", 
  para: "Sed pretium risus magna, ac efficitur nunc rutrum imperdiet. Vivamus sed ante sed mi fermentum tempus. Nullam finibus augue eget felis efficitur semper.",
  name: "Jean Watson",
  role: "Engineering Architect"
}
const users =[user, user1, user2];

const foot = {
  name: "© 2023 Geeks-UI, Inc. All Rights Reserved",
  privacy: "Privacy Policy",
  cookie: "Cookie Notice",
  info: "Do Not Sell My Personal Information",
  terms: "Terms of Use"
}

function App() {


  return (
    <div className="App">
      
      <Greek topbar={topbar}></Greek>
        
      
      <Education skills={skills}></Education>
      <Customer ></Customer>
      <Teaching teach={teach}></Teaching>
       <Reviews users={users} user={user} user1={user1} user2={user2}></Reviews>
      
       <Terms foot={foot}></Terms> 
      {/* <header className="App-header">
        <Greekheader></Greekheader>
      </header> */}
    </div>
  );
} 
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */}

export default App;
