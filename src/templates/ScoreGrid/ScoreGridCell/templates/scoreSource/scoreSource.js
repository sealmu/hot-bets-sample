import React from 'react';
import css from './scoreSource.module.css';
import classnames from 'classnames';

const scoreSource = (props) =>{
    const { score, source } = props.data;

    return(
        <div className={css.wrapper}>
            <div style={{textAlign: 'center', fontSize: '14px'}}>
                { score }
            </div>
            <div>
                <div className={ classnames( css.sourcemage, css[source] ) } ></div>
            </div>
        </div>
    )
}

export default scoreSource