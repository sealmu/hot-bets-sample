export const topEventList = [
    {  
       
        sportId: 1,
        sportName: 'football',
        games: 25,
        //for sportEvents only
        inplay: 1,
        today: 1,
        //for topEvents only
        leagueId: 222,
        leagueName: 'Euro 2019',
        locationId: 10,
        locationName: 'Europe',
    },
    {          
        sportId: 1,
        sportName: 'football',
        games: 10,
        //for sportEvents only
        inplay: 1,
        today: 1,
        //for topEvents only
        leagueId: 444,
        leagueName: 'Primera Division',
        locationId: 20,
        locationName: 'spain',
    },
    {  
        sportId: 1,
        sportName: 'football',
        games: 0,
        //for sportEvents only
        inplay: 1,
        today: 1,
        //for topEvents only
        leagueId: 333,
        leagueName: 'Europa League',
        locationId: 10,
        locationName: 'europe',
    },
    {         
        sportId: 2,
        sportName: 'basketball',
       
        games: 2,
        //for sportEvents only
        inplay: 1,
        today: 1,
        //for topEvents only
        leagueId: 666,
        leagueName: 'NBA',
        locationId: 23,
        locationName: 'usa',
    },
    {          
        sportId: 3,
        sportName: 'ce-hockey',
        games: 0,
         //for sportEvents only
        inplay: 1,
        today: 1,
        //for topEvents only
        leagueId: 555,
        leagueName: 'NHL',
        locationId: 23,
        locationName: 'usa',
    },
]

export const sportEventList = [
    {  
       
        sportId: 1,
        sportName: 'football',
        games: 25,
        //for sportEvents only
        inplay: 1,
        today: 1,
    },
    {          
        sportId: 2,
        sportName: 'Tennis',
        games: 10,
        //for sportEvents only
        inplay: 1,
        today: 1,
    },
    {  
        sportId: 3,
        sportName: 'basketball',
        games: 0,
        //for sportEvents only
        inplay: 1,
        today: 1,
    },
    {         
        sportId: 4,
        sportName: 'eSports',
       
        games: 2,
        //for sportEvents only
        inplay: 1,
        today: 1,
    },
    {          
        sportId: 5,
        sportName: 'Ice Hockey',
        games: 0,
         //for sportEvents only
        inplay: 1,
        today: 1,
    },
    {          
        sportId: 6,
        sportName: 'Handball',
        games: 10,
         //for sportEvents only
        inplay: 1,
        today: 1,
    },
    {          
        sportId: 7,
        sportName: 'Volleyball',
        games: 20,
         //for sportEvents only
        inplay: 1,
        today: 1,
    },
    {          
        sportId: 8,
        sportName: 'American Football',
        games: 210,
         //for sportEvents only
        inplay: 1,
        today: 1,
    },
]


export const sportLocationEventList= [
    {  
        sportId: 1,
        sportName: 'football',
        locationId: 111,
        locationName: 'Belarus',
        games: 25,
        inplay: 1,
        leagues: [
            {
                leagueId: 1111,
                leagueName: 'Primier League',
                games: 8,
                inplay: 0
            },
            {
                leagueId: 2222,
                leagueName: 'Belarus cup',
                games: 2,
                inplay: 1
            }
        ]
    },
    
    {  
        sportId: 1,
        sportName: 'football',
        locationId: 222,
        locationName: 'Europe',
        games: 27,
        inplay: 0,
        leagues: [
            {
                leagueId: 3333,
                leagueName: 'UEFA National League',
                games: 27,
                inplay: 0
            },
            
        ]
    },

]
