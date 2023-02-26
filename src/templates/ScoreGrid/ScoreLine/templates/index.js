import BestOdds from './bestOdds/bestOdds';
import BestOddsLine from './bestOddsLine/bestOddsLine';
import FullLine from './fullLine/fullLine';

const componentNames = {
    BestOdds: 'BestOdds',
    FullLine: 'FullLine',
    BestOddsLine: 'BestOddsLine'
};

const components = {
    [componentNames.BestOdds]: BestOdds,
    [componentNames.BestOddsLine]: BestOddsLine,
    [componentNames.FullLine]: FullLine,
};

const templates = {
    names: componentNames,
    components
}

export default templates;