import { useState } from 'react';
import './../../../2) styles/index.scss';

function ComposantListeBtn(arg) {

  let nb_btn = arg.listeBtn.length;
  return (
    <div className='btnlist' style={{display:'grid', gridTemplateColumns:'repeat('+ nb_btn +','+ 100/nb_btn +'%)'}}>
      {arg.listeBtn.map((element) => {
        return (
          <input onClick={()=>{arg.setwichPage(element)}} onChange={()=>{}} type='button' value={element} key={element} className='btnInListe'/>
        );
      })}
    </div>
  );
}

export default ComposantListeBtn;
