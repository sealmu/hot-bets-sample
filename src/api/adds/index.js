import axios from 'axios'

import {claimBonusList} from './fake'

export const fetchClaimBonus = async() =>{
    return fetchClaimBonusFake()
    var data
    try{
        const response = await axios.get('https://app-job-7a4e0.firebaseio.com/adds-claim-bonus.json')
        data = response.data
    }catch(e){
        throw e
    }
    return data
}

const fetchClaimBonusFake = async () => {
    return (Promise.resolve(claimBonusList))
}