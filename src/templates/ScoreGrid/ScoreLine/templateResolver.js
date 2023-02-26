import templates from './templates';

export default (props) => {
    return templates.names[props.templateName];
}