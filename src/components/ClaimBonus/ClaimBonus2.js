import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import classes from './ClaimBonus2.module.css'
import {getClaimBonusList} from '../../store/actions/adds'

class ClaimBonus2 extends Component{

    renderCol1 = (item) =>{
        return(
           <div className={classes.col1}>
               <div className={classes.row1}>
                   <span className={classes.square}>
                       {item.score}
                   </span>
               </div>
               <div className={classes.row2}>
                   {this.renderCode(item.code)}
               </div>
           </div>
        )
    }
    renderCol2 = (item) => {
        return(
            <div className={classes.col2}>
                <div className={classes.row1}>
                    <Link to={item.link}>
                        { item.icon ? <span className={classes.icon} style={ { background: 'url('+item.icon+')' } }></span> : null}
                        { item.text ? <span className={classes.text}>{item.text}</span> : null}
                        <span className={classes.img} style={ { backgroundImage: "url("+item.bg+")" } }></span>
                    </Link>
                </div>
                <div className={classes.row2}>
                    <Link to={item.link}>
                        <div className={classes.btn}>CLAIM BONUS</div>
                    </Link>                  
                </div>
            </div>
        )
    }

    renderCode = (code) => {
        
    var res
    if(code){
        res = <div className={classes.withcode}>
                <span>{code}</span>
                <span>copy bonuscode</span> 
            </div>
    }else{
        res = <div className={classes.nocode}>
                <span>NO CODE REQUIRED</span>
             </div>
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
                    <div className={classes.block} key={item.bookmaker}>
                        {this.renderCol1(item)}                    
                        {this.renderCol2(item)}                
                   
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
            <div className={classes.ClaimBonus2}>
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

export default connect(mapStateToProps,mapDispatchToProps) (ClaimBonus2)