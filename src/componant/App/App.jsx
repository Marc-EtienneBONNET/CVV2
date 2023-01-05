import './App.scss';
import './../../2) styles/index.scss'
import { useState } from 'react';
import ComposantAccueil from '../allPage/accueil/accueil'
import ComposantFormations from '../allPage/formations/formations'
import ComposantCompetances from '../allPage/competances/competances'
import ComposantPortfolio from '../allPage/portfolio/portfolio'
import ComposantPresentation from '../allPage/presentation/presentation'
import {takeOneProfile, takeImgBlob, addNewConnection} from './../../utile/dataProfile'
import axios from 'axios'





function App() {
  const [wichPage, setwichPage] = useState('Accueil');
  const [profile, setProfile] = useState();

  async function takeProfile() {
    let tmp = await takeOneProfile('mail', 'webbonnet@gmail.com');
    setProfile(tmp);
  }

  function StyleForChoosePage(){
    if (wichPage === 'Accueil')
        return ('2vw 2vw 2vw 2vw 92vw');
    else if (wichPage === 'Formations')
      return ('2vw 2vw 2vw 92vw 2vw');
    else if (wichPage === 'Competances')
      return ('2vw 2vw 92vw 2vw 2vw');
    else if (wichPage === 'Portfolio')
      return ('2vw 92vw 2vw 2vw 2vw');
    else if (wichPage === 'Presentation')
      return ('92vw 2vw 2vw 2vw 2vw');
  }

  if (!profile){
    addNewConnection(1);
    takeProfile();
  }
  return (
    <div className="App" style={{gridTemplateColumns:StyleForChoosePage()}}>
      {profile?<ComposantPresentation wichPage={wichPage} setwichPage={setwichPage} profile={profile}/>:<></>}
      {profile?<ComposantPortfolio wichPage={wichPage} setwichPage={setwichPage} profile={profile}/>:<></>}
      {profile?<ComposantCompetances wichPage={wichPage} setwichPage={setwichPage} profile={profile}/>:<></>}
      {profile?<ComposantFormations wichPage={wichPage} setwichPage={setwichPage} profile={profile}/>:<></>}
      {profile?<ComposantAccueil wichPage={wichPage} setwichPage={setwichPage} profile={profile}/>:<></>}
    </div>
  );
}

export default App;
