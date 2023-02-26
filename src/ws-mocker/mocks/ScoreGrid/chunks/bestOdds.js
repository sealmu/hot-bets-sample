import faker from 'faker';


const randomTexts = {};
const getRandomTextOnce = (id) => {
    const text = randomTexts[id];
    if (!text) randomTexts[id] = faker.lorem.words();

    return randomTexts[id];
}


const bestOdds = (init) => (            {
    header: {
        name: "BEST ODDS",
        icon: "signal"
    },
    groups: [

        {
            config: {
                score: {
                    columns: [
                        {
                            key: '0',
                            header: "1",
                            style: { padding: '0 40px' },
                            sorted: true
                        },
                        {
                            key: '1',
                            header: "X",
                            style: { padding: '0 40px' },
                            sorted: true
                        },
                        {
                            key: '2',
                            header: "2",
                            style: { padding: '0 40px' },
                            sorted: true
                        },
                        {
                            key: '3',
                            header: "Payouts",
                            style: { padding: '0 40px' },
                            sorted: true
                        }
                    ],
                    subColumns: { 
                        templates: [
                            {
                                template: {
                                    style: {height: '60px', color: 'white', background: '#016299'},
                                    templateName: 'BestOdds',
                                    title: 'Best odds',
                                    icon: 'signal'
                                }
                            },
                            {
                                template: {
                                    style: {height: '40px', color: 'white', background: '#016299', idth: '100%'},
                                    templateName: 'FullLine',
                                    height: '40px',
                                    component: 'BookmakersBar',
                                    counter: 13
                                }
                            }
                        ],
                        lists: [
                            {
                                list: {
                                    columns: [
                                        {
                                            key: '0',
                                            header: "1",
                                            templateName: 'BestOddsColumn',
                                            score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                            source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                                            style: {height: '60px', color: 'white', background: '#016299'},
                                        },
                                        {
                                            key: '1',
                                            header: "X",
                                            templateName: 'BestOddsColumn',
                                            score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                            source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                                            style: {height: '60px', color: 'white', background: '#016299'},
                                        },
                                        {
                                            key: '2',
                                            header: "2",
                                            templateName: 'BestOddsColumn',
                                            score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                            source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                                            style: {height: '60px', color: 'white', background: '#016299'},
                                        },
                                        {
                                            key: '3',
                                            header: "Payouts",
                                            templateName: 'BestOddsColumnPercent',
                                            percent: 97.37,
                                            style: {height: '60px', color: 'white', background: '#016299'},
                                        }
                                    ]
                                }
                            },
                            {
                                list: {
                                    columns: [
                                        {
                                            key: '0',
                                            //templateName: 'BestOddsColumn',
                                            style: {height: '40px'},
                                        },
                                        {
                                            key: '1',
                                            //templateName: 'BestOddsColumn',
                                            style: {height: '40px'},
                                        },
                                        {
                                            key: '2',
                                            //templateName: 'BestOddsColumn',
                                            style: {height: '40px'},
                                        },
                                        {
                                            key: '3',
                                            //templateName: 'BestOddsColumn',
                                            style: {height: '40px'},
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            },
            breadcrumbs: {
                list: [
                    {
                        text: '1X2',
                        link: ''
                    }
                ]
            },
            list: [
                {
                    templateName: 'BestOddsLine',
                    source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                    title: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                    isUpdated: faker.random.arrayElement([true, false]),
                    data: {
                        scores: [
                            {
                                column: "0",
                                score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                direction: 1,
                                templateName: 'Direction',
                                style: {height: '40px'}
                            },
                            {
                                score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                column: '1',
                                direction: 1,
                                templateName: 'Direction',
                                style: {height: '40px'},
                                bold: true
                            },
                            {
                                score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                column: '2',
                                direction: -1,
                                templateName: 'Direction',
                                style: {height: '40px'}
                            },
                            {
                                render: 
                                `<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                                    <span style={{fontSize: '14px'}}>{data.percent}%</span>
                                </div>`,
                                column: '3',
                                percent: '71.05',
                                direction: 1,
                                style: {height: '40px'}
                            }
                        ]
                    }
                }, 

                {
                    templateName: 'BestOddsLine',
                    source: 'betsafe',
                    title: 'betsafe',
                    data: {
                        scores: [
                            {
                                column: "0",
                                score: `12/17`,
                                direction: 1,
                                templateName: 'Direction',
                                style: {height: '40px'}
                            },
                            {
                                score: '19/1',
                                column: '1',
                                direction: 1,
                                templateName: 'Direction',
                                style: {height: '40px'},
                            },
                            {
                                score: '12/21',
                                column: '2',
                                direction: -1,
                                templateName: 'Direction',
                                style: {height: '40px'}
                            },
                            {
                                render: 
                                `<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                                    <span style={{fontSize: '14px'}}>{data.percent}%</span>
                                </div>`,
                                column: '3',
                                percent: '21.57',
                                direction: 1,
                                style: {height: '40px'}
                            }
                        ]
                    }
                }, 


                {
                    templateName: 'BestOddsLine',
                    source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                    title: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                    isUpdated: faker.random.arrayElement([true, false]),
                    data: {
                        scores: [
                            {
                                column: "0",
                                score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                                direction: 1,
                                templateName: 'Direction',
                                style: {height: '40px'}
                            },
                            {
                                score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                                column: '1',
                                direction: 1,
                                templateName: 'Direction',
                                style: {height: '40px'},
                            },
                            {
                                score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                                column: '2',
                                direction: -1,
                                templateName: 'Direction',
                                style: {height: '40px'}
                            },
                            {
                                render: 
                                `<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                                    <span style={{fontSize: '14px'}}>{data.percent}%</span>
                                </div>`,
                                column: '3',
                                percent: '21.57',
                                direction: 1,
                                style: {height: '40px'}
                            }
                        ]
                    }
                }, 

            ]
        }

    ]
});


export default bestOdds;