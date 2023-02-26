import faker from 'faker';
import React from 'react';
import liveOddsJson from './chunks/liveOdds';
import startingSoonJson from './chunks/startingSoon';
import testsJson from './chunks/tests';
import bestOddsJson from './chunks/bestOdds';
import { enums } from '../../../consts'; 

const Pages = enums.pages;

const randomTexts = {};
const getRandomTextOnce = (id) => {
    const text = randomTexts[id];
    if (!text) randomTexts[id] = faker.lorem.words();

    return randomTexts[id];
}

const persistedData = {

};


const getBlocks = ({currentPage, init}) => {
    switch (currentPage) {
        case  Pages.game:
            return [bestOddsJson({init})];
        case  Pages.sport:
                return [ liveOddsJson({init}) ];
            case  Pages.location:
                return [ liveOddsJson({init}) ];
            case  Pages.league:
                return [ startingSoonJson({init}) ];
            case  Pages.main:
                return [ liveOddsJson({init}), startingSoonJson({init}), testsJson({init}) ];
        default:
             return [ liveOddsJson({init}), startingSoonJson({init}), testsJson({init}) ];
    }
}


const getData = ({init, page, params} = {}) => { 

    persistedData.page = page || persistedData.page ;
    persistedData.params = params || persistedData.params;

    const currentPage = persistedData.page;
    const currentPageParams = persistedData.params;

    return {
        blocks: getBlocks({currentPage, init})
        // [

        //     liveOddsJson({init}),

        //     startingSoonJson({init}),

        //     testsJson({init}),

        //     bestOddsJson({init})
        // ]
    }
};


export default getData;