import { useState } from "react";
import {takeOneProfile, takeImgBlob, takeImg} from './../../../utile/dataProfile'
import { url } from './../../../utile/Variable'



function ComposantCompetances({wichPage ,setwichPage, profile}){
    let [img, setImg] = useState();
    let tabTmpCompetances = profile.competances;
    const [finaleTabCompetances, setFinaleTabCompetances]= useState([]);

    async function initTabCompetance(){
        for (let i = 0; tabTmpCompetances[i]; i++)
        {
            let pointeur = false;
            for (let x = 0; finaleTabCompetances[x]; x++)
            {
                if (finaleTabCompetances[x][0] && finaleTabCompetances[x][0].category === tabTmpCompetances[i].category)
                {
                    let blob =await takeImgBlob(url + 'theProfile/sendImage' + tabTmpCompetances[i].photo);
                    let srcImg = URL.createObjectURL(blob);
                    let tmp = finaleTabCompetances;
                    tmp[x].push({
                        ...tabTmpCompetances[i],
                        photo:srcImg,
                    })
                    pointeur = true;
                    setFinaleTabCompetances(tmp);
                }
            }
            if (pointeur === false)
            {
                let blob =await takeImgBlob(url + 'theProfile/sendImage' + tabTmpCompetances[i].photo);
                let srcImg = URL.createObjectURL(blob);
                let tmp = finaleTabCompetances;
                tmp.push([{
                    ...tabTmpCompetances[i],
                    photo:srcImg,
                }])
            }
        }
    }

    function createDivCompetances()
    {
        let res = finaleTabCompetances.map((element) => {
            return (
                <div className="CategorysCompetances" key={element[0].category}>
                    <h4 className="CategorysCompetancesTitre" >{element[0].category}</h4>
                    <div className="CategoryCompetances">
                        {element.map((element) => {
                            return (
                                <div className="Competance" key={element.name}>
                                        <img className='CompetanceImg' src={element.photo}></img>
                                </div>
                                );
                            })}
                    </div>
                </div>
            );

        })
        return (res);
    }
    if (!finaleTabCompetances[0])
        initTabCompetance();
    function ReturnComptenue(){
        return (
            <div className='Competances1'>
                <div className="divTitreCompetance">
                    <h6 className="TitreCompetance">Mes competance technique</h6>
                </div>
                <div className='Competances'>
                    {createDivCompetances()}
                </div>
                <div className="divCommentaireCompetance">
                    <h6 className="CommentaireCompetance">Et bientot<br/>le developpement mobile<br/>s'ajoutera a la liste</h6>
                </div>
            </div>
        );
    }
    return (
        <div className={wichPage==='Competances'?"accueil":""}>
           {wichPage==='Competances'?ReturnComptenue():<></>}
            <div className='menu'>
                <h4 onClick={() => {setwichPage('Competances')}}  className='menueTitre'>C<br/>O<br/>M<br/>P<br/>E<br/>T<br/>A<br/>N<br/>C<br/>E<br/>S</h4>
            </div>
        </div>
    );
}

export default ComposantCompetances;