import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import classes from './ClaimBonus.module.css'
import {getClaimBonusList} from '../../store/actions/adds'

class ClaimBonus extends Component{

    renderHeader = (item) =>{
        return(
             item.title ? <div className={classes.btitle}>{item.title} </div>
              : null 
        )
    }
    renderBody = (item,index) => {
        return(
            <div className={classes.bbody}>
                <div class={classes.bwraper}>
                    <div className={classes.brow1}>
                        <span className={classes.cnum}>{index}</span>
                        <span className={classes.xbet}>{item.icon}</span>                   
                    </div>
                </div>

                <div className={classes.brow2}>
                    <span className={classes.score}>{item.score}</span>
                    <span>{item.text}</span>
                </div> 
            </div>
        )
    }

    renderCode = (code) => {
        
    var res
    if(code){
        res = <div className={classes.withcode}> <span>{code}</span><span>copy bonuscode</span> </div>
    }else{
        res = <div className={classes.nocode}><span>NO CODE REQUIRED</span></div>
    }
                
        return(
            res
        )
    }

    renderFooter = (item) =>{
        return(
            <div className={classes.bfooter}>               
               {this.renderCode(item.code)}
               <div className={classes.right}><Link to={item.link} >CLAIM BONUS</Link></div>
            
            </div>
         
        )
    }

    renderBonusList = () => {
        return(
            this.props.claimBonusList.map((item,index) =>{
                return(
                    <div className={classes.bblock} key={item.bookmaker}>
                        {this.renderHeader(item)}                    
                        {this.renderBody(item,index+1)}                 
                        {this.renderFooter(item)}
                    </div>
                )
            })
        )
    }

    componentDidMount(){
        this.props.getClaimBonusList()
    }

    render(){
        return(
            <div className={classes.ClaimBonus}>
                <div className={classes.title}>Bookmakers we suggest to use</div>
                { this.props.claimBonusList ? this.renderBonusList() : null}
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        claimBonusList: state.adds.claimBonusList
    }
}
function mapDispatchToProps(dispatch){
    return {
        getClaimBonusList: () => {
            dispatch( getClaimBonusList())
        }        
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ClaimBonus)