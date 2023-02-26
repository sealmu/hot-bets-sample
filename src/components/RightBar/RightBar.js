import React from 'react'

import classes from './RightBar.module.css'
import ClaimBonus from '../ClaimBonus/ClaimBonus'
import ClaimBonus2 from '../ClaimBonus/ClaimBonus2'

const RightBar = () =>{
    return(
        <aside className={classes.RightBar}>     
            <ClaimBonus2 />
        </aside>
    )
}

export default RightBar