import { useState } from 'react';
import {takeOneProfile, takeImgBlob, takeImg} from './../../../utile/dataProfile'
import { url } from './../../../utile/Variable'
  // "homepage": "https://marc-etiennebonnet.github.io/CVV2/",



function ComposantAccueil({wichPage ,setwichPage, profile}){

    const [img, setImg] = useState();

    function telechargeCv(){
        window.open('./CV_Marc-Etienne_BONNET.pdf',"_blank", null);
    }

    function ReturnComptenue(){
        return (
            <div className='accueilComptenue'>
                <div className="accueilComptenueImgs">
                    <img className="accueilComptenueImg" src={'./img/'+profile.photo}></img>
                    <img className="accueilComptenueLogo" src='./logo/42.jpg'></img>
                </div>
                <h1 className="accueilComptenueText">Bonjour !<br/> Bien venue sur mon CV</h1>
                <button onClick={(e) => {telechargeCv()}} type='button' className='AccueilbtnCv'>téléchargez CV</button>
                <div className="divCommentaireFlecheAccueil">
                    <h6 className="CommentaireTextAccueil">Le logo ci-dessous indique une interaction vocale, pensez à vos écouteur :D</h6>
                    <img className='LogoSong' src='./song.png' ></img>
                </div>
            </div>
        );
    }
    takeImg(img, setImg, url + 'theProfile/sendImage' + profile.photo, profile);
    return (
        <div className={wichPage==='Accueil'?"accueil":"fermeture"}>
           {wichPage==='Accueil'?ReturnComptenue():<></>}
            <div className='menu'>
                <h4 onClick={() => {setwichPage('Accueil')}}  className='menueTitre'>A<br/>C<br/>C<br/>U<br/>E<br/>I<br/>L</h4>
            </div>
        </div>
    );
}

export default ComposantAccueil;