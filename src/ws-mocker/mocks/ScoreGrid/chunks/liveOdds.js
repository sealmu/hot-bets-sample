import faker from 'faker';


let randomTexts = {};
const getRandomTextOnce = (id) => {
    const text = randomTexts[id];
    if (!text) randomTexts[id] = faker.lorem.words();

    return randomTexts[id];
}


const liveOdds = ({init}) => {

    if (init)  randomTexts = {};

    return {
        header: {
            name: "LIVE ODDS",
            icon: "clock-o"
        },
        groups: [
            {
                config: {
                    score: {
                        columns: [
                            {
                                key: '0',
                                header: ""
                            },
                            {
                                key: '1',
                                header: "1"
                            },
                            {
                                key: 'x',
                                header: "X",
                            },
                            {
                                key: '2',
                                header: "2"
                            }
                        ]
                    }
                },
                breadcrumbs: {
                    list: [
                        {
                            icon: 'footbal',
                            text: 'Footbal',
                            link: ''
                        },
                        {
                            icon: 'world',
                            text: 'World',
                            link: ''
                        },
                        {
                            icon: '',
                            text: 'FIFA Pro Player Cup',
                            link: ''
                        }
                    ]
                },
                list: [
                    {
                        //templateName: "Time",
                        data: {
                            time: "12:41",
                            teams: [
                                {
                                    name: getRandomTextOnce(1),
                                },
                                {
                                    name: getRandomTextOnce(2)
                                }
                            ],
                            scores: [
                                {
                                    column: "0",
                                    data: [{
                                        score: '0',
                                        level: 1
                                    }, {
                                        score: '1',
                                        level: 1
                                    }]
                                },
                                {
                                    score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                    source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                                    column: '1'
                                },
                                {
                                    score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                    source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                                    column: 'x'
                                },
                                {
                                    score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                    source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                                    column: '2'
                                }
                            ]
                        }
                    }, 
                    {
                        //templateName: "DateTime",
                        data: {
                            time: "11:35",
                            date: "11 April",
                            teams: [
                                {
                                    name: 'Team Liquid'
                                },
                                {
                                    name: 'eStar Gaming'
                                }
                            ],
                            scores: [
                                {
                                    column: "1",
                                    // score: "23/1",
                                    // source: "xbet"
                                    locked: true
                                },
                                {
                                    column: "x",
                                    score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                    source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet'])
                                },
                                {
                                    column: "2",
                                    // score: "3/10",
                                    // source: "betsafe"
                                    data: [{
                                        score: '7',
                                        level: 2
                                    }, {
                                        score: '15',
                                        level: 3
                                    }]
                                }
                            ],
                            graph: true
                        }
                    },
                    {
                        //templateName: "Time",
                        data: {
                            timing: {
                                rows: [
                                    {
                                        text: "69`",
                                        color: 'red'
                                    },
                                    {
                                        text: "2nd Half",
                                        color: 'red'
                                    }
                                ]
                            },
                            // time: "12:41",
                            teams: [
                                {
                                    name: 'World Elite',
                                },
                                {
                                    name: getRandomTextOnce(3)
                                }
                            ],
                            scores: [
                                {
                                    column: "1",
                                    data: [{
                                        score: '700',
                                        level: 1
                                    }, {
                                        score: '105',
                                        level: 1
                                    }]
                                },
                                {
                                    score: `${Math.floor(Math.random()*500)}/${Math.floor(Math.random()*500)}`,
                                    source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                                    column: 'x'
                                },
                                {
                                    score: `${Math.floor(Math.random()*500)}/${Math.floor(Math.random()*500)}`,
                                    source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                                    column: '2'
                                }
                            ]
                        }
                    }, 
                ]
            },
            {
                config: {
                    score: {
                        columns: [
                            {
                                key: '0',
                                header: ""
                            },
                            {
                                key: '1',
                                header: "1"
                            },
                            {
                                key: 'x',
                                header: "X",
                            },
                            {
                                key: '2',
                                header: "2"
                            }
                        ]
                    }
                },
                breadcrumbs: {
                    list: [
                        {
                            icon: 'footbal',
                            text: 'Footbal',
                            link: ''
                        },
                        {
                            icon: 'world',
                            text: 'World',
                            link: ''
                        },
                        {
                            icon: '',
                            text: 'FIFA Pro Player Cup',
                            link: ''
                        }
                    ]
                },
                list: [
                    {
                        //templateName: "Time",
                        data: {
                            time: "12:41",
                            teams: [
                                {
                                    name: 'World Elite',
                                },
                                {
                                    name: 'eStar Gaming'
                                }
                            ],
                            scores: [
                                {
                                    column: "0",
                                    data: [{
                                        score: `${Math.floor(Math.random()*3)}`,
                                        level: faker.random.arrayElement([1, 2, 3])
                                    }, {
                                        score: `${Math.floor(Math.random()*5)}`,
                                        level: faker.random.arrayElement([1, 2, 3])
                                    }]
                                },
                                {
                                    score: "23/1",
                                    source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                                    column: '1'
                                },
                                {
                                    score: "301/10",
                                    source: "comeon",
                                    column: 'x'
                                },
                                {
                                    score: "3/10",
                                    source: "betsafe",
                                    column: '2'
                                }
                            ]
                        }
                    }, 
                    {
                        //templateName: "DateTime",
                        data: {
                            time: "11:35",
                            date: "11 April",
                            teams: [
                                {
                                    name: getRandomTextOnce(5)
                                },
                                {
                                    name: 'eStar Gaming'
                                }
                            ],
                            scores: [
                                {
                                    column: "1",
                                    // score: "23/1",
                                    // source: "xbet"
                                    locked: true
                                },
                                {
                                    column: "x",
                                    score: "1/100",
                                    source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet'])
                                },
                                {
                                    column: "2",
                                    // score: "3/10",
                                    // source: "betsafe"
                                    data: [{
                                        score: `${Math.floor(Math.random()*8)}`,
                                        level: 2
                                    }, {
                                        score: `${Math.floor(Math.random()*16)}`,
                                        level: 3
                                    }]
                                }
                            ],
                            graph: true
                        }
                    },
                    {
                        //templateName: "Time",
                        data: {
                            timing: {
                                rows: [
                                    {
                                        text: "69`",
                                        color: 'red'
                                    },
                                    {
                                        text: "2nd Half",
                                        color: 'red'
                                    }
                                ]
                            },
                            // time: "12:41",
                            teams: [
                                {
                                    name: 'World Elite',
                                },
                                {
                                    name: 'eStar Gaming'
                                }
                            ],
                            scores: [
                                {
                                    column: "1",
                                    data: [{
                                        score: '700',
                                        level: 1
                                    }, {
                                        score: '105',
                                        level: 1
                                    }]
                                },
                                {
                                    score: "301/10",
                                    source: "comeon",
                                    column: 'x'
                                },
                                {
                                    score: "3/10",
                                    source: "betsafe",
                                    column: '2'
                                }
                            ]
                        }
                    }, 
                ]
            }
        ]
    }
};

export default liveOdds;