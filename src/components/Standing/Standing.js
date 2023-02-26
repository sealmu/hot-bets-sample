import React,{Component} from 'react'
import {connect} from 'react-redux'

import classes from './Standing.module.css'
import {removeLastSlesh} from '../../common'
import {getStandingTable} from '../../store/actions/league'


class Standing extends Component{

    state = {
    tab: 'Total'
    }

    clickTabHandler = (tab) =>{
        this.setState({
            tab
        })
    }

    renderWDL = (row) => {
        return (
            <div classes={classes.blockwdl}>
                <span className={classes.blockw} style={{width:'20%'}}></span>
                <span className={classes.blockd} style={{width:'20%'}}></span>
                <span className={classes.blockl} style={{width:'20%'}}></span>
            </div>
        )
    }

    renderTop5 = (top5) =>{
        const splited = top5.split(',')   
        return(
            splited.map((top,index) =>{
                var classTop = [classes.top5]
                switch('top5'+ top){
                    case 'top5d':
                        classTop.push(classes.top5d)
                    break
                    case 'top5l':
                        classTop.push(classes.top5l)
                        break
                    default :
                    classTop.push(classes.top5w)
                }
             
                return <span className={classTop.join(' ') } key={top+ index}>
                    {top}
                       </span>
            } ) 

        )
    }
    renderRow = (team,row) => {

        return(
            <div className={classes.row}>
                <div className={classes.col}>
                    <span> {row.q}</span>
                </div>
                <div className={classes.col}>
                    {<i className='fa fa-slideshare'/>}
        <span>{team}</span>
                </div>
        <div className={classes.col}>{row.p}</div>
        <div className={classes.col}>
            <span>{row.w}</span>
            <span>{row.d}</span>
            <span>{row.l}</span>
        </div>
        <div className={classes.col}>{row.goals}</div>
        <div className={classes.col}>{ this.renderTop5( row.last5)}</div>
                 <div className={classes.col}>{row.pts}</div>
            </div>
        )
    }

    renderTableHeader = () =>(
        <div className={classes.tableHeader}>
            <div></div>
            <div></div>
            <div><span>P</span></div>
            <div>
                <span className={classes.blockwdl}>W</span>
                <span className={classes.blockwdl}>D</span>
                <span className={classes.blockwdl}>L</span>
            </div>
            <div><span>GOALS</span></div>
            <div><span>LASTS</span></div>
            <div><span>PTS</span></div>
        </div>
    )
    renderTable = () =>{
        const tab = this.state.tab.toLowerCase()
        const table =  this.props.standingTable
        return(
            <div className={classes.table}>
                {this.renderTableHeader()}
                {                 
                 table.map( (fullrow,index)=>{
                        const team = fullrow.team
                        var row = fullrow.total
                        if(tab === "home")
                            row = fullrow.home
                        if(tab === "away")
                            row = fullrow.away
                        
                        return (
                            <React.Fragment key={team}>
                                {this.renderRow(team, row)}
                            </React.Fragment>                             
                            )
                        }
                    )
                }
            </div>
        )
    }

    renderTabs = () => {
        return(
            this.props.standingTable && this.props.standingTable.length >0 ?
                <div className={classes.tabs}>
                    <div></div>
                    <div></div>
                    <div className={ this.state.tab === 'Total' ? classes.active : null }
                        onClick={ () => this.clickTabHandler('Total')  }
                    >Total</div>
                    <div className={classes.tabline}></div>
                    <div
                        className={ this.state.tab === 'Home' ? classes.active : null }
                        onClick={ () => this.clickTabHandler ('Home') }
                        >Home</div>
                                  <div className={classes.tabline}></div>
                    <div 
                        onClick={ () => this.clickTabHandler('Away') }
                        className={ this.state.tab === 'Away' ? classes.active : null }>Away</div>
                                  <div></div>
                                  <div></div>
                </div>
                : null
        )
    } 

    componentDidMount(){
        let path =removeLastSlesh(this.props.path)
        if(path === '')
            path = '/'        
        const splited = removeLastSlesh(path).split('/')
        if(splited.length >=3)
            this.props.getStandingTable(splited[1],splited[3])
    }

    render(){
        return(

            <div className={classes.Standing}>           
                <div className={classes.title}>standings</div>        
                {this.renderTabs()}
                {this.renderTable()}               
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        standingTable : state.league.standingTable,
        path: state.router.location.pathname
    }
}

function mapDispatchToProps(dispatch){
    return {
        getStandingTable : ( sport,league ) => {
            dispatch(getStandingTable(sport,league))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Standing)

