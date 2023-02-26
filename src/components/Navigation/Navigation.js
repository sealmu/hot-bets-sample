import React,{Component, createRef} from 'react'
import {connect} from 'react-redux' 
import {Link} from 'react-router-dom'

import classes from './Navigation.module.css'
import {updateNavigationSelected} from '../../store/actions/general'
import {removeLastSlesh,spaceTo} from '../../common'



class Navigation extends Component {

    constructor(){
        super()
        this.leftMenuRef = createRef()
    }
   
    createLeftMenuRef = () =>{
        var refs ={}
        if(this.state.itemRefs.length == 0){
            this.props.items.map((item,index) => {
                refs[item] = {
                    isVisible: true,
                    ref: null,
                    index: index,
                    side: 'left'
                }
            } )
            this.state.setState({
                itemRefs: refs
            })
        } 
    }

    displayResize = () => {  
        const menuUl = this.leftMenuRef.current
        const top = menuUl.getBoundingClientRect().top       
        const refs = {...this.state.itemRefs}
        this.props.items.forEach((item,index) => {
            if(top == refs[item].ref.getBoundingClientRect().top){
                refs[item].isVisible = true
            }
            else{
                refs[item].isVisible = false
            }
        })
      
        this.setState({
            itemRefs: refs
        })
    }
                 

    generateIcon = (item) => { return  <i className='fa fa-futbol-o'></i>}
    
    
    generateLeftSide = () =>  {         
        const refs = this.state.itemRefs
        const list = this.props.items.filter( x=> {
            return refs[x].isVisible
        })
        return (
    <ul className={classes.menuLeft} ref={ this.leftMenuRef }>
        <li className={ '' === this.props.current? classes.active : null}>
            <Link to='/'> <i class="fa fa-home" aria-hidden="true"></i>
            </Link>  
            <span className={classes.hr}></span>      
        </li>
        {   
        this.props.items.map( (item, index) => {
                                    var cls = []
                                    if( spaceTo(item) === this.props.current){
                                        cls.push(classes.active)
                                    }
                                    if(!list.includes(item)){
                                        cls.push(classes.notvisible)
                                    }


                    return (
                        <li key={item} className={ cls.join(' ')}  ref={(ref)=> this.state.itemRefs[item].ref = ref }>
                            <Link to={`/${spaceTo(item)}`}>
                            { this.generateIcon(item)}
                                <span>{item ?item : 'HOME'}</span>
                            </Link>
                            <span className={classes.hr}></span>
                        </li>  
                    )
                })
    }
    </ul>
    )
    
}

      
    generateRightSide = () =>
    <ul className={classes.menuLeft} >{
        this.props.items.map( (item, index) => {
                    return (
                        <li key={item} className={ spaceTo(item) === this.props.current? classes.active : null} >
                            <Link to={`/${spaceTo(item)}`}>
                                <span>{item ?item : 'HOME'}</span>
                            </Link>
                        </li>  
                    )
                })
    }
    </ul>

    generateDropdown = () =>{
    //const list = [...this.props.items]
    //list.splice(0,this.props.showItemLeft)
    const refs = this.state.itemRefs
    const list = this.props.items.filter( x=> {
        return refs[x].isVisible == false
    })
    return(
    <ul className={classes.dropdownMenuBody}>
        {
            list.map( (item, index) => {
                    return (
                        <li key={item} className={ spaceTo(item) === this.props.current? classes.active : null} >
                            <Link to={`/${spaceTo(item)}`} key={index}>
                         
                                <span>{item  ?item : 'HOME'}</span>
                                { this.generateIcon(item)}
                                <span className={classes.del}></span>
                            </Link>
                            <span className={classes.hr}></span>
                        </li>  
                    )
                })              
    }
    {
          (list.length%2 != 0)? <li> </li> : null
    }
    </ul>)
    }


generateMenu = () =>{
    return(
        <nav className={classes.Navigation}>
            <div className={classes.panel}>
                <div className={classes.wraperMenuLeft}>
                    { this.generateLeftSide() }
                    <div className={classes.dropdownMenu}>
                        <div className={classes.dropdownMenuTitle}>
                            <span className="fa fa-angle-down"></span>
                            { this.generateDropdown() }
                        </div>
                    </div>
                </div>
                <div className={classes.wraperMenuRight}>
                {/* this.generateRightSide(data) */}
                </div>
            </div> 
         </nav>
    )

}
static getDerivedStateFromProps(nextProps, prevState){
    
    if(prevState == null && nextProps.items.length >0){
        var refs ={}
        nextProps.items.forEach((item,index) => {
            refs[item] = {
                isVisible: true,
                ref: null,
                index: index,
                side: 'left'
            }
        } )
        return{
            itemRefs: refs
        }
    } 
    return null
}
/*
    static getDerivedStateFromProps(nextProps, prevState){
        const path = (nextProps.path.replace(/\/$/, "")) + '/'
        const sport = path.split("/")[1]  
        if (sport !== prevState.sport) {
            return {
                sport
            }
        }
        return null
    }
    */
   
   shouldComponentUpdate(nextProps, nextState){

       var isNeedUpdate = true
       /*
       const visibleNew = Object.values(nextState.itemRefs).filter(x=> { return x.isVisible == true})
       const visibleOld = Object.values(this.state.itemRefs).filter(x=> {return x.isVisible == true})
 
       if(visibleOld.length != visibleNew.length){
        isNeedUpdate = true
       }
       console.log('shouldComponentUpdate',visibleNew.length,visibleOld.length)
       */
    const correctPath = removeLastSlesh(nextProps.path) + '/'
    const current = correctPath.split("/")[1]
    if(current !== this.props.current){
        this.props.updateNavigationSelected(nextProps.path)
        isNeedUpdate = true
    }  
   
    return isNeedUpdate

   }
 
    componentDidMount(){
        this.props.updateNavigationSelected(this.props.path)
        window.addEventListener("resize", this.displayResize)
        this.displayResize()
    }

    
    componentWillUnmount(){
        window.removeEventListener("resize",this.displayResize)
    }
    render(){ 
        return(
            this.props.items ? this.generateMenu() : null
        )
    }
}

function mapStateToProps(state) {

    return{
        path: state.router.location.pathname,
        current: state.general.navigationMenu.current,
        items: state.general.navigationMenu.items,
        showItemLeft: state.general.navigationMenu.showItemLeft
    }
}

function mapDispatchToProps(dispatch){
    return {
        updateNavigationSelected: (path) => dispatch( updateNavigationSelected(path) )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation)

  