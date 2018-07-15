import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider} from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import reducers from './reducers'


import App from './App';
import Search from './components/Search/Search'
import Collection from './components/Collection/Collection'


const store = createStore(
    reducers,
    window.devToolsExtension && window.devToolsExtension(),
    applyMiddleware(thunk)
  );




ReactDOM.render(<Provider store={store}>
<Router>
    <Switch>
    <Route  exact path="/" component={App} />
    <Route path="/search" component={Search} />
    <Route path="/collection" component={Collection} />

    </Switch>
      </Router>
      </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
