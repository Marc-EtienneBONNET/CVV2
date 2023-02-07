import { useState } from "react";
import {takeOneProfile, takeImgBlob, takeImg, modifText} from './../../../utile/dataProfile'
import { url } from './../../../utile/Variable'




function ComposantFormations({wichPage ,setwichPage, profile}){
    let tabFormations = profile.formations
    const [formations, setFormation] = useState();

    async function createTabFormation(){
        for (let i = 0; tabFormations[i]; i++)
        { 
            let blob =await takeImgBlob(url + 'theProfile/sendImage' + tabFormations[i].photo);
            let srcImg = URL.createObjectURL(blob);
            tabFormations[i].photo = tabFormations[i].photo;
        }
        setFormation(tabFormations);
    }
    function createDivFormatons()
    {
        let res = formations.map((element) => {
            return (
                <div className="Formation" key={element.name}>
                    <img onClick={(e) => {window.open(element.lien)}} className='FormationsImg' src={'./img/'+element.photo}></img>
                    <div className='FormationsInfo'>
                        <h4 className="FormationsInfoNom">Nom               : {element.name}</h4>
                        <h4 className="FormationsInfoNiveau">Niveau d'étude : {element.niveau}</h4>
                        <h4 className="FormationsInfoDeb">Date début        : {element.debut}</h4>
                        <h4 className="FormationsInfoFin">Date fin          : {element.fin}</h4>
                        {modifText(element.text)}
                    </div>
                </div>
            );

        })
        return (<div className="LesFormation">{res}</div>);
    }
    function ReturnComptenue(){
        return (<div className="Formations">
            <div className="DivGrandTitre">
                    <h6 className="GrandTitre">Ici, vous trouverez<br/>mon parcours scolaire</h6>
                </div>
            {createDivFormatons()}
        </div>);
    }
    if (!formations)
        createTabFormation();
    console.log();
    return (
        <div className={wichPage==='Formations'?"accueil":"fermeture"}>
            {wichPage==='Formations' && formations ?ReturnComptenue():<></>}
            <div className='menu'>
                <h4 onClick={() => {setwichPage('Formations')}}  className='menueTitre'>F<br/>O<br/>R<br/>M<br/>A<br/>T<br/>I<br/>O<br/>N<br/>S</h4>
            </div>
        </div>
    );
}

export default ComposantFormations;