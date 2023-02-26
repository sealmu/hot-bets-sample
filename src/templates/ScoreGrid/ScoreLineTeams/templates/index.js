import Default from './default/default';

const componentNames = {
    Default: 'Default'
};

const components = {
    [componentNames.Default]: Default
};

const templates = {
    names: componentNames,
    components
}

export default templates;