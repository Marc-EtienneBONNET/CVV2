import { useState } from "react";
import {takeOneProfile, takeImgBlob, takeImg} from './../../../utile/dataProfile'
import { url } from './../../../utile/Variable'



function ComposantPortfolio({wichPage ,setwichPage, profile}){
    let tabPortfolio = profile.portfolio;
    const [tabProtfolioFinal, setTabPortfolioFinal] = useState();

    async function createTabFinale(){
        for (let i = 0; tabPortfolio[i]; i++){
            let blob =await takeImgBlob(url + 'theProfile/sendImage' + tabPortfolio[i].photo);
            let srcImg = URL.createObjectURL(blob);
            tabPortfolio[i].photo = tabPortfolio[i].photo;
            let blob2 = await takeImgBlob(url + 'theProfile/sendImage' + tabPortfolio[i].audio);
            if (blob2){
                let srcImg2 = URL.createObjectURL(blob2);
                //tabPortfolio[i].audio = srcImg2;
                //tabPortfolio[i].audio = tabPortfolio[i].name;
            }

        }
        setTabPortfolioFinal(tabPortfolio);
    }

    function createDivPortfolio()
    {
        let res = tabProtfolioFinal.map((element) => {
            console.log(element.audio);
            return (
                <div className="divPortfolio" key={element.name}>
                    <img className='divPortfolioImg' src={'./img/'+element.photo} ></img>
                    <img onClick={() => {window.open(element.lien)}} onMouseOver={() => {document.getElementById(element.name).play()}} onMouseOut={() => {document.getElementById(element.name).pause()}} onClick={() => {window.open(element.lien)}} className='divPortfolioLogo' src='./song.png' ></img>
                    <audio id={element.name} className="divPortfolioAudio" src={'./audio/' + element.audio + '.mp4'} type="MP3"/>
                </div>
            );

        })
        return (res);
    }
    function ReturnComptenue(){
        return (
            <div >
                <div className="DivTitrePortfolio">
                    <h6 className="TitrePortfolio">Voici quelques projets demonstatifs de mes compétences</h6>
                </div>
                <div className='portfolio'>
                    {createDivPortfolio()}
                </div>
                <div className="DivComentairePortfolio">
                    <i className="fa-solid fa-arrow-up-long CommentaireFlechePortfolio"></i>
                    <h6 className="CommentairePortfolio">Mettez votre sourrie sur une bulle pour entendre les explications vocales !</h6>
                </div>
            </div>
        );
    }
    if (!tabProtfolioFinal)
        createTabFinale()
    return (
        <div className={wichPage==='Portfolio'?"accueil":"fermeture"}>
           {wichPage==='Portfolio' && tabProtfolioFinal?ReturnComptenue():<></>}
            <div className='menu'>
                <h4 onClick={() => {setwichPage('Portfolio')}}  className='menueTitre'>P<br/>O<br/>R<br/>T<br/>F<br/>O<br/>L<br/>I<br/>O</h4>
            </div>
        </div>
    );
}

export default ComposantPortfolio;