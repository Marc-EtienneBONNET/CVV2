import axios from 'axios';
import { url } from './Variable.jsx'

/*
select * from profile;
select * from formations;
select * from competances;
select * from portfolio;
select * from my_event;
drop table profile;
drop table formations;
drop table competances;
drop table portfolio;
drop table my_event;

$2b$08$Lj7e5Mladk/zlvaRCcjIUe/OgVsK/RF/rFgghh3dQPLGmtOX48mYW
*/

export async function takeOneProfile(source, res){
    let retour = (await axios.post(url + 'theProfile/takeOneProfile', {source:source, res:res})).data;
    return (retour);
}

//mouvProfileAll
export async function addNewConnection(id){
    await axios.post(url + 'theProfile/addNewConnection', {id:id});
    console.log('coucou');
}


export async function takeImgBlob(url){
    try{
        let blob = await axios.get(url, {responseType:'blob'});
        return blob.data;
    }
    catch(e){
    }
}

export async function takeImg(img, setImg, url, profile){
    console.log('test ici :D1');
    if (!img && profile && profile.photo)
    {
        let tmp = await takeImgBlob(url);
        console.log('test ici :D2');
        let srcImg = URL.createObjectURL(tmp);
        setImg(srcImg);
    }
}

export function modifText(myText){
    let text = "";
    let res = [];
    for (let i = 0;myText[i]; i++){
        if (myText[i] === '#'){
            res.push(text);
            text = "";
        }
        else
            text += myText[i];
    }
    res.push(text);
    return (res.map((element) => { return (<h4 style={{fontSize:'1.3vh'}}>{element}</h4>)}))
}
