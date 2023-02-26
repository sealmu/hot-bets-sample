import React from 'react'
import {Link}  from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import classes from './ItemList.module.css'

const ItemList = props => {
    let cls = [classes.ItemList ]
    if(!props.open){
        cls.push(classes.closed)

    }
    const generateLeagueLink = (sport,location,league) => `/${sport}/${location.toLowerCase().replace(' ','-')}/${league.toLowerCase().replace(' ','-').replace(' ','-').trim()}`
    
    return (
        <span className={cls.join(' ')}> {                                 
            props.leagues.map( (league) => {                                                            
                let leagueGames = league.games
                if(props.type === 'Live'){
                    leagueGames = league.inplay
                }                                      

                return(
                    <React.Fragment>
                        <Link key={league.leagueId} to={ generateLeagueLink(props.sport,props.location,league.leagueName) } >
                            <i className='fa fa-angle-right' /> 
                            <span>{league.leagueName} </span>q21
                            <span>{ leagueGames >0 ? leagueGames : null }</span>
                        </Link>
                         <span className={classes.hr}></span>
                    </React.Fragment>

                )
            })            
        }
        </span>
    )
}

export default ItemList