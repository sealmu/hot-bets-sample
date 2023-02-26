import templates from './templates';
import JsxParser from 'react-jsx-parser';
import React from 'react';
import { Component } from 'react';

function generateHash(string) {
    var hash = 0;
    if (string.length == 0)
        return hash;
    for (let i = 0; i < string.length; i++) {
        var charCode = string.charCodeAt(i);
        hash = ((hash << 7) - hash) + charCode;
        hash = hash & hash;
    }
    return hash;
}

const componentsCache = {}

export default (props) => {
    if (!props) return "";

    if (props.render) {
        const hash = generateHash(props.render);

        let component;

        if (componentsCache[hash]) {
            component = componentsCache[hash];
        }
        else {
            const jsx = componentsCache[hash] || (
            <JsxParser
                bindings={{
                    data: {}
                    //myEventHandler: () => { /* ... do stuff ... */ },
                }}
                //components={{ InjectableComponent, Library }}
                jsx={props.render}
            />);
    
            component = (props) => {
                jsx.props.bindings.data =  props.data;
                return jsx;
            }

            componentsCache[hash] = component;
        }

        return component;
    }

    if (props.locked) return templates.names.Locked;
    if (props.data) return templates.names.DataColumn;

    // if (props.template) return templates.names[props.template];

    return templates.names.ScoreSource;
}