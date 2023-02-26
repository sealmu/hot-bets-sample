import React from 'react'

import classes from './homePage.module.css'
import LeftBar from '../../components/LeftBar/LeftBar'
import RightBar from '../../components/RightBar/RightBar'

import ScoreGrid from '../../components/ScoresGrid/ScoresGrid';
import MainSlider from '../../components/MainSlider/MainSleder'

const homePage = () =>
{
    return(
    <main className={classes.homePage}>
        <LeftBar />
        <div className={classes.main}>
            <MainSlider />
            <ScoreGrid></ScoreGrid>

        </div>
        <RightBar />
    </main>
    )
}

export default homePage