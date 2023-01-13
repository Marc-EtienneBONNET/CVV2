import { useState } from "react";
import {takeOneProfile, takeImgBlob, takeImg, modifText} from './../../../utile/dataProfile'
import { url } from './../../../utile/Variable'



function ComposantPresentation({wichPage ,setwichPage, profile}){
    const [photo, setPhoto]  = useState();

    async function takePhoto(){
        let blob =await takeImgBlob(url + 'theProfile/sendImage' + profile.photo);
        let srcImg = URL.createObjectURL(blob);
        setPhoto(profile.photo);
    }

    function ReturnComptenue(){
        return (
            <div>            
                <div className="DivCommentairePresentation">
                    <h6 className="DivCommentairePresentation">Mon objectif et mes attentes en audio </h6>
                    <i className="fa-solid fa-arrow-right DivCommentaireFlechePresentation "></i>
                </div>
            <div className='presentation'>
            <div className='presentationHaut'>
                <img onMouseOver={() => {document.getElementById('audioPresentation').play()}} onMouseOut={() => {document.getElementById('audioPresentation').pause()}} className='presentationImg' src={'./img/'+photo}></img>
                <img onMouseOver={() => {document.getElementById('audioPresentation').play()}} onMouseOut={() => {document.getElementById('audioPresentation').pause()}} className='divPresentationLogo' src='./song.png' ></img>
                <audio id='audioPresentation' className="divPortfolioAudio" src={'./audio/Moi.mp4'} type="MP3"/>
                <div className="presentationInfoPerso">
                    <div className="presentationInfoPersoInfo">
                        <h3>{profile.prenom}</h3>
                        <h3>{profile.nom}</h3>
                        <h3>{profile.dateNaissance}</h3>
                        <h3>{profile.tel}</h3>
                        <h3>{profile.mail}</h3>
                    </div>
                    <div>
                        <div className="logos">
                            <i onClick={() => {window.open(profile.github)}} className="fa-brands fa-github logo"></i>
                            <i onClick={() => {window.open(profile.linkedin)}} className="fa-brands fa-linkedin logo"></i>
                        </div>
                        <img onClick={() => {window.open(profile.codingGame)}}src="./logo/codingame.jpg" className="logoCodingGame"></img>
                    </div>
                    <h3>Disponibiliter     : {profile.disponibilite}</h3>
                    <h3>Contrat rechercher : {profile.contrat}</h3>
                </div>
            </div>
                <div className="presentionInfoGlobale">
                    <h4 className="presentionInfoGlobaleText">{modifText(profile.textDescriptif)}</h4>
                </div>
            </div>
            </div>

        );
    }
    if (!photo)
        takePhoto()
    return (
        <div className={wichPage==='Presentation'?"accueil":"fermeture"}>
           {wichPage==='Presentation'?ReturnComptenue():<></>}
            <div className='menu'>
                <h4 onClick={() => {setwichPage('Presentation')}}  className='menueTitre'>I<br/>N<br/>F<br/>O<br/>R<br/>M<br/>A<br/>T<br/>I<br/>O<br/>N</h4>
            </div>
        </div>
    );
}

export default ComposantPresentation;