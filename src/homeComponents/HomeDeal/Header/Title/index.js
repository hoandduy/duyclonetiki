import clsx from 'clsx';
import React from 'react';
import './title.scss'

function Title() {
  return (
    <div>
      <img src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg" alt="flash deal" />
      <img 
        width="21" 
        src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg" 
        alt="flash deal"
        className={clsx('titleIcon')}
      />
      <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg" alt="flash deal" />
    </div>
  )
}

export default Title;
