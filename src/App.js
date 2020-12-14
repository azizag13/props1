import React from 'react';
import './App.css';
import Fullname from "./profile/profileComp/Fullname";
import Image from "./profile/profileComp/Image"
import HandellAlert from "./profile/profileComp/HandellAlert"
import Bio from "./profile/profileComp/Bio"
import Profession from './profile/profileComp/Profession'



function App() {
  return (
    <div className="App">
      <Fullname name = 'Aubrey "Drake" Graham'/>
      <Profession/>
      <Image/>
      <Bio/>
      <hr/>
      <HandellAlert alert ='hello i m drake '/>
    </div>
  );
}

export default App;
