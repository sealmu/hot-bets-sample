import ScoreSource from './scoreSource/scoreSource';
import Locked from './locked/locked';
import DataColumn from './dataColumn/dataColumn';
import BestOddsColumn from './bestOddsColumn/bestOddsColumn';
import BestOddsColumnPercent from './bestOddsColumnPercent/bestOddsColumnPercent';
import Direction from './direction/direction';

const componentNames = {
    ScoreSource: 'ScoreSource',
    Locked: 'Locked',
    DataColumn: 'DataColumn',
    BestOddsColumn: 'BestOddsColumn',
    BestOddsColumnPercent: 'BestOddsColumnPercent',
    Direction: 'Direction',
};

const components = {
    [componentNames.ScoreSource]: ScoreSource,
    [componentNames.Locked]: Locked,
    [componentNames.DataColumn]: DataColumn,
    [componentNames.BestOddsColumn]: BestOddsColumn,
    [componentNames.BestOddsColumnPercent]: BestOddsColumnPercent,
    [componentNames.Direction]: Direction
};

const templates = {
    names: componentNames,
    components
}

export default templates;