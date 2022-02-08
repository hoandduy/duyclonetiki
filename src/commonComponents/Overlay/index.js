import clsx from 'clsx';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { boolChange } from '../../redux';
import './overlay.css'

function Overlay() {

  const boolValue = useSelector(state => state.overLay)
  const dispatch = useDispatch()
  
  return <div 
    className={clsx('overlay', {
      'isFocus': boolValue
    })}
    onClick={() => dispatch(boolChange(false))}
  >

  </div>;
}

export default Overlay;
