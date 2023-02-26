import {topEventList, sportEventList, sportLocationEventList} from './fake'

export const fetchTopEvents = async () =>{   
    return fetchTopEventsFake()
/*
    let data

    try{
        const response = await axios.get('https://app-job-7a4e0.firebaseio.com/top-events.json')
        data = response.data
       // console.log('response api fetchTopEvents:',response.data)        
    }catch(e){
         console.log('error fetchTopEvents:', e)
        throw e
    }
    return (
        data
    )*/
 }

 export const fetchSportEvents = async () =>{   
    return fetchSportEventsFake()
/*
    let data

    try{
        const response = await axios.get('https://app-job-7a4e0.firebaseio.com/sport-events.json')
        data = response.data
       // console.log('response api fetchSportEvents:',response.data)        
    }catch(e){
         console.log('error fetchSportEvents:', e)
        throw e
    }
    return (
        data
    )*/
 }

 export const fetchSportLocationEvents = async () => {
     return fetchSportLocationEventsFake()
     /*
     let data

    try{
        const response = await axios.get('https://app-job-7a4e0.firebaseio.com/sport-location-events.json')
        data = response.data
       // console.log('response api fetchSportLocationEvents:',response.data)        
    }catch(e){
         console.log('error fetchSportLocationEvents:', e)
        throw e
    }
    return (
        data
    )*/
 }

 const fetchTopEventsFake = async () =>
 {
        let fakeData = [...topEventList]
        fakeData[0].games = Math.floor(Math.random() * 1000)
        fakeData[1].games = Math.floor(Math.random() * 100)
        fakeData[2].games = Math.floor(Math.random() * 100)
        fakeData[2].games = Math.floor(Math.random() * 100)
        return(
            Promise.resolve(        
                fakeData
                )
        )
    }
    const fetchSportEventsFake = async () =>
    {
           let fakeData = [...sportEventList]
           fakeData.forEach(item =>{
               const inplay =  (Math.floor(Math.random() * 10 ))
               const today = (Math.floor(Math.random() * 10))
               item.games = Math.floor(Math.random() * 1000)
               item.inplay =  inplay >5 ? inplay : 0 
               item.today =   today >8 ? today : 0 
           })

           return(
               Promise.resolve(        
                   fakeData
                   )
           )
       }

       const fetchSportLocationEventsFake = async () =>
       {
              let fakeData = [...sportLocationEventList]
              fakeData.forEach(item =>{
                  const inplay =  (Math.floor(Math.random() * 10 ))
                 
                  item.games = Math.floor(Math.random() * 1000)
                  item.inplay =  inplay >5 ? inplay : 0 
                 
              })
   
              return(
                  Promise.resolve(        
                      fakeData
                      )
              )
          }