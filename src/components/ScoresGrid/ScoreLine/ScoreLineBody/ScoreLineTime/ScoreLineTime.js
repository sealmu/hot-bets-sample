import React from 'react';
import css from './ScoreLineTime.module.css';
import templates from '../../../../../templates/ScoreGrid/ScoreLineTime/templates';
import resolver from '../../../../../templates/ScoreGrid/ScoreLineTime/templateResolver';

const ScoreLineTime = (props) =>{
    const Template = templates.components[props.templateName || resolver(props.data)];
    const data = props.data;

    return(
        <div className={css.wrapper}>
            <Template data={data}></Template>
        </div>
    )
}

export default ScoreLineTime;