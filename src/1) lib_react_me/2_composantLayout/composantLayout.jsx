import './../../2) styles/index.scss';
import ComposantListeBtn  from './../btn/2_composantListeBtn/composantListeBtn';


function ComposantLayout(arg)
{
    return (
        <div className="layout">
            <img className='imgLayout' src={arg.logo} onClick={() => {arg.setwichPage('Accueil')}}/>
            <a href="./CV_Marc-Etienne_BONNET.pdf" className='btnCv' download>Télécharger CV .pdf</a>
            <ComposantListeBtn className='db_1' listeBtn={arg.listeBtn} setwichPage={arg.setwichPage}/>
        </div>
    );
}

export default ComposantLayout;