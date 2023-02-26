import React, {Component} from 'react'
import {Link}  from 'react-router-dom'
import {connect} from 'react-redux' 

import 'font-awesome/css/font-awesome.min.css'

import classes from './SportLocationEvents.module.css'
import {getSportLocationEvents,changeSportLocationEventsType} from '../../store/actions/events'
import ItemList from './ItemList'


class SportLocationEvents extends Component{


    generateLeagueLink = (item,league) => `/${this.state.sport}/${item.locationName.toLowerCase().replace(' ','-')}/${league.leagueName.toLowerCase().replace(' ','-')}`

    state ={
        sport: '',
        openStates : []
    }
    componentDidMount(){        
        this.props.changeSportLocationEventsType('All')
        this.props.getSportLocationEvents()

        const path = this.removeLastSlesh(this.props.path) + '/'
        const sport = path.split("/")[1]   
        this.setState({
                sport
            }
        )

        /*
        setInterval(() => {
            this.props.getSportLocationEvents()
        }, 10000);*/
     
    }

    clickMenuHandler = (buttonType) =>{
        this.props.changeSportLocationEventsType(buttonType)
        this.props.getSportLocationEvents()
    }


     renderHeaderMenu = () =>{

        return(
            <ul className={classes.menuHeader}>             
               <li className={this.props.sportLocationEventType === 'All'? classes.on: null}
                onClick={ () => this.clickMenuHandler('All')}
               >
                   <div>                     
                       <span>All</span>
                   </div>
               </li>
               <li className={this.props.sportLocationEventType === 'Live'? classes.on: null}
               onClick={ () => this.clickMenuHandler('Live')}
               >
                   <div>
                       <span>Live</span> 
                   </div>                 
               </li>
          </ul>
        )
     }
    
     removeLastSlesh = (str) =>{   
        return str.replace(/\/$/, "")
    }
    headerClickHandler = (event,locationId) =>{
        event.preventDefault()
        let locations = [...this.state.openStates]
        if(this.arrayIsExist(locations,locationId)){
            locations = this.arrayFilter(locations,locationId)
        }
        else{
            locations.push(locationId)
        }

        this.setState({
            openStates : locations
        })
    }
    arrayFilter = (arr, value) =>{ return arr.filter(item => item !== value)}
    arrayIsExist = (arr, value) =>{ return arr.indexOf(value) !== -1}  

    render(){
        let sportLocationEventList = []
        if(this.props.sportLocationEventList){
            if(this.props.sportLocationEventType === 'All'){
                sportLocationEventList = this.props.sportLocationEventList
            }
            else{
                this.props.sportLocationEventList.forEach(element => {
                    if(this.props.sportLocationEventType === 'Live' && element.inplay){
                        sportLocationEventList.push(element)
                    }                   
                })
        }
        }
        return(
        <div className={classes.SportLocationEvents}>
            <div className={classes.title}>{this.state.sport}</div>
            {
                this.renderHeaderMenu()
            }
            <ul className={classes.menu}>
               
                {
                    this.props.sportLocationEventList &&  this.props.sportLocationEventList.length 
                    ?   
                    sportLocationEventList.map((item) => {        
                        let games = item.games
                        if(this.props.sportLocationEventType === 'Live'){
                            games = item.inplay
                        }      
                        const open = (this.arrayIsExist(this.state.openStates,item.locationId))
                        return (
                            <li 
                                key={item.locationId}
                                className={open ? null : classes.collapsed}
                                onClick = {(event) => this.headerClickHandler(event,item.locationId)}
                                >
                                <Link to='#' >
                                    <i className='fa fa-flag' /> 
                                    <span>{item.locationName} </span>
                                    <span>{ games >0 ? games : null }</span>
                                 
                                </Link>
                                <span className={classes.hr}></span>
                                <ItemList 
                                    leagues= {item.leagues}
                                    sport = {this.state.sport}
                                    open = {open}
                                    type = {this.props.sportLocationEventType}
                                    location = {item.locationName}
                                />
                            </li>
                        )
                    } )
                    : null
                    
                }
            </ul>
        </div>
        )
    }
}

function mapStateToProps(state){
    return{
        sportLocationEventList: state.events.sportLocationEventList,
        sportLocationEventType: state.events.sportLocationEventType,
        path: state.router.location.pathname
    }
}

function mapDispathToProps(dispatch){
    return {
        getSportLocationEvents:  () => dispatch( getSportLocationEvents()),
        changeSportLocationEventsType: (sportLocationEventType) => dispatch( changeSportLocationEventsType(sportLocationEventType) )
    }
}

export default connect( mapStateToProps, mapDispathToProps)(SportLocationEvents)