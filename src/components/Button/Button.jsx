import React from 'react';
import ButtonStyle from './Button.module.scss';

function Button(props) {
    return (
     <>
     <button type='button' className={ButtonStyle.button}>
       {props.nameButton}
     </button>
     </>
    );
  }

  export default Button;
