import Time from './time/time';
import DateTime from './dateTime/dateTime';
import Custom from './custom/custom';

const componentNames = {
    Time: 'Time',
    DateTime: 'DateTime',
    Custom: 'Custom'
};

const components = {
    [componentNames.Time]: Time,
    [componentNames.DateTime]: DateTime,
    [componentNames.Custom]: Custom
};

const templates = {
    names: componentNames,
    components
}

export default templates;