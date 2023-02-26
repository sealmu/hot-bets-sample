import React from 'react'

import classes from './locationPage.module.css'
import LeftBar from '../../components/LeftBar/LeftBar'
import RightBar from '../../components/RightBar/RightBar'

import ScoreGrid from '../../components/ScoresGrid/ScoresGrid';

const locationPage = () =>
{
    return(
    <main className={classes.locationPage}>
        <LeftBar />
        <div className={classes.main}>   
            <ScoreGrid></ScoreGrid>
        </div>
        <RightBar />
    </main>
    )
}

export default locationPage