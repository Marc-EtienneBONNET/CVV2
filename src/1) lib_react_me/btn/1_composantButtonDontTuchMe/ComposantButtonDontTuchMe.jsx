import { useState } from 'react';
import './../../../2) styles/index.scss';

function ComposantButtonDontTuchMe(arg) {
  const [borderLeft, setBorderLeft] = useState(0);
  const [borderLeftActualy, setBorderLeftActualy] = useState(0);
  const [width, setWidth] = useState(100);
  const [btnText, setBtnText] = useState('Don\'t tuch me !');
  let time = howTime(borderLeftActualy,borderLeft);
  const [ActualColor, setActualColor] = useState('--primary_2');
  const [opacity, setOpacity] = useState(100);

  function handleMouseEnter()
  {
    if (borderLeft === 0)
      setBorderLeft(60);
    else if (borderLeft === 60)
      setBorderLeft(0);
  }
  function howTime(a, b)
  {
    let tmp = a - b;
    if (tmp < 0)
      tmp *= -1;
    if (tmp < 30)
      return (30 - tmp);
    else
      return (2);
  }
  function createMouve()
  {
    if (arg.bool === false)
    {
      if (borderLeft > borderLeftActualy)
        setBorderLeftActualy(borderLeftActualy + 1);
      else if (borderLeft < borderLeftActualy)
        setBorderLeftActualy(borderLeftActualy - 1);
      if (width <= 100 && width > 40)
        setWidth(width - 2);
      if (opacity === 0 && ActualColor !== '--primary_err')
      {
        setActualColor('--primary_err');
        setBtnText('Don\'t tuch me !');
      }
      else if (ActualColor !== '--primary_err' && opacity > 0) 
        setOpacity(opacity < 10? 0:opacity - 10);
      else if (ActualColor === '--primary_err' && opacity < 100)
        setOpacity(opacity > 90? 100 :opacity + 10);
    }
    else
    {
      if (width < 100)
        setWidth(width + 2);
      if (borderLeftActualy > 0)
        setBorderLeftActualy(borderLeftActualy -2);
      if (opacity === 0 && ActualColor !== '--primary_2')
      {
        setActualColor('--primary_2');
        setBtnText('Lets go !')
      }
      else if (ActualColor !== '--primary_2' && opacity > 0) 
        setOpacity(opacity < 10? 0:opacity - 10);
      else if (ActualColor === '--primary_2' && opacity < 100)
        setOpacity(opacity > 90? 100 :opacity + 10);
    }
  }
  function makeStyle(){
    let tmp; 

    if (ActualColor === '--primary_err')
      tmp = {
        marginLeft:borderLeftActualy + '%', width:width+'%',
        backgroundColor: ActualColor === '--primary_err'?'var('+ ActualColor +')':'white',
        color: ActualColor === '--primary_err'?'white':'var(--primary_2)',
        border:'2px solid var('+ ActualColor +')',
        opacity:opacity + '%'
      }
    else
      tmp = {
        marginLeft:borderLeftActualy + '%', width:width+'%',
        border:'2px solid var('+ ActualColor +')',
        opacity:opacity + '%'
      }
    return (tmp);
  }
  setTimeout(createMouve, time);
  return (
      <input onClick={(e) => {arg.ftOnClick(e);}} onMouseEnter={() => {handleMouseEnter()}} type='submit' value={btnText} className='btn' style={makeStyle()}/>
  );
}

export default ComposantButtonDontTuchMe;
