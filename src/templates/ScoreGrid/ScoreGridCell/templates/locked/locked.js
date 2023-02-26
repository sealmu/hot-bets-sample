import React from 'react';
import css from './locked.module.css';

const locked = (props) =>{

    return(
        <div className={css.wrapper}>
             <i style={{fontSize: '30px'}} className='fa fa-lock' /> 
        </div>
    )
}

export default locked;