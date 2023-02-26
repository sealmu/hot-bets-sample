import React from 'react';
import css from './ScoreLineTeams.module.css';
import templates from '../../../../../templates/ScoreGrid/ScoreLineTeams/templates';
import resolver from '../../../../../templates/ScoreGrid/ScoreLineTeams/templateResolver';

const ScoreLineTeams = (props) =>{
    const Template = templates.components[props.templateName || resolver(props.data)];
    const data = props.data;

    return(
        <div className={css.wrapper}>
             <Template data={data}></Template>
        </div>
    )
}

export default ScoreLineTeams;