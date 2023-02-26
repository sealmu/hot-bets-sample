import React from 'react';
import css from './default.module.css';
import Graph from '../../../../../components/ScoresGrid/ScoreLine/ScoreLineBody/ScoreLineTeams/components/Graph/Graph';

const time = (props) =>{
    const { teams, graph } = props.data;

    return(
        <div className={css.wrapper}>
            <div className={css.teamsPart}>
            {
                teams.map( (team,i) => (
                <div key={i}>
                    {team.name}
                </div>))
            }
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
            {
                graph && <Graph></Graph>
            }
            </div>
        </div>
    )
}

export default time;