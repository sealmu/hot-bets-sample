import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
//import 'font-awesome/css/font-awesome.min.css';
//import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, {history } from './store'
import mock from './ws-mocker';
import ws from './ws';

//import Routes from './Routes'


const store = configureStore();
ws(store);


render(
   
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <> { /* your usual react-router v4/v5 routing */ }
        <App/>
      </>
    </ConnectedRouter>
  </Provider>,

    document.getElementById('root')
)
