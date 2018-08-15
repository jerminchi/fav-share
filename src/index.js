import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import loadable from 'react-loadable'

import { Provider} from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import reducers from './reducers'

const LoadingComponent = ({isLoading, error})=>{

  if(isLoading){

    return<div>Sorry, unable to load the page..</div>
  }

  else{

    return null;
  }
}

const App = loadable({

  loader: ()=>import('./App'),
  loading: LoadingComponent
})

const Search = loadable({

  loader: ()=>import('./components/Search/Search'),
  loading: LoadingComponent
})

const Collection = loadable({

  loader: ()=>import('./components/Collection/Collection'),
  loading: LoadingComponent
})



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
