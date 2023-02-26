import templates from './templates';

export default (props) => {
    if (props.timing) return templates.names.Custom;

    if (props.date) return templates.names.DateTime;
    return templates.names.Time;
}