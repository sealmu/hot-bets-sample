import axios from 'axios'

import {standingTable} from './fake'


export const fetchStandingTable = async( sport, league) =>{
    return fetchStandingTableFake()
    let data
    try{
        const response = await axios.get('https://app-job-7a4e0.firebaseio.com/standing-table.json')
        data = response.data
    }catch(e){
        throw(e)
    }
    return data
}

const fetchStandingTableFake = async ()=>{
    return (Promise.resolve(standingTable))
}