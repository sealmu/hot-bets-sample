import React from 'react'

import classes from './leaguePage.module.css'
import LeftBar from '../../components/LeftBar/LeftBar'
import RightBar from '../../components/RightBar/RightBar'

import ScoreGrid from '../../components/ScoresGrid/ScoresGrid';
import Standing from '../../components/Standing/Standing'

const leaguePage = () =>
{
    return(
    <main className={classes.leaguePage}>
        <LeftBar />
        <div className={classes.main}>
            <ScoreGrid></ScoreGrid>
            <Standing />
        </div>
        <RightBar />
    </main>
    )
}

export default leaguePage