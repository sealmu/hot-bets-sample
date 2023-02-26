import React from 'react';
import css from './ScoreLineBody.module.css';
import ScoreLineTime from './ScoreLineTime/ScoreLineTime';
import ScoreLineTeams from './ScoreLineTeams/ScoreLineTeams';

const LeagueTimeScoreSetBody = (props) =>{
    const { templateName , data} = props.data;

    return(
        <div className={css.wrapper}>
            <div className={css.timeBlock}>
                <ScoreLineTime templateName={templateName} data={data}></ScoreLineTime>
            </div>
            <div className={css.teamsBlock}>
                <ScoreLineTeams templateName={templateName} data={data}></ScoreLineTeams>
            </div>
        </div>
    )
}

export default LeagueTimeScoreSetBody