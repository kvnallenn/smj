import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Login } from './components/LoginPage/Login';
import { Home } from './components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
    <Route component={Home} path="/" exact/>
    <Route component={Login} path="/masuk" />
    </Switch>
    </BrowserRouter>
    
    
      
  </>
  );
}

export default App;
