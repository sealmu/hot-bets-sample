import React from 'react'

import classes from './sportPage.module.css'
import LeftBar from '../../components/LeftBar/LeftBar'
import ScoreGrid from '../../components/ScoresGrid/ScoresGrid';
import RightBar from '../../components/RightBar/RightBar'

const sportPage = () =>
{
    return(
        
    <main className={classes.sportPage}>
        <LeftBar />
        <div className={classes.main}>
            {/* <div>SPORT PAGE</div>     */}
            <ScoreGrid></ScoreGrid>
        </div>  
        <RightBar />
    </main>
    )
}

export default sportPage