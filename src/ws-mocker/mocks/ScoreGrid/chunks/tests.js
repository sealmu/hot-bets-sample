import faker from 'faker';


const randomTexts = {};
const getRandomTextOnce = (id) => {
    const text = randomTexts[id];
    if (!text) randomTexts[id] = faker.lorem.words();

    return randomTexts[id];
}


const tests = (init) => ({
    header: {
        name: "TESTS",
        icon: "clock-o"
    },
    groups: [

        {
            config: {
                score: {
                    columns: [
                        {
                            key: '0',
                            header: "1"
                        },
                        {
                            key: '1',
                            header: "over"
                        },
                        {
                            key: '2',
                            header: "under",
                        },
                        {
                            key: '3',
                            header: "profit"
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
                                column: "0",
                                score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                            },
                            {
                                score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                                column: '1'
                            },
                            {
                                score: `${Math.floor(Math.random()*50)}/${Math.floor(Math.random()*50)}`,
                                source: faker.random.arrayElement(['comeon', 'betsafe', 'xbet']),
                                column: '2'
                            },
                            {
                                render: 
                                `<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                                    <span style={{fontSize: '14px'}}>{data.percent}%</span>
                                    <span className='fa fa-calculator'></span>
                                </div>`,
                                column: '3',
                                percent: '1.05',
                                tag: "abc"
                            }
                        ]
                    }
                }, 
            ]
        }

    ]
});


export default tests;