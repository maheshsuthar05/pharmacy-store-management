import './App.css';
import ManagerLogin from './Components/managerLogin'
import ExecutiveLogin from './Components/executiveLogin';
import Manager from './Components/manager'
import Executive from './Components/executive';
import Login from './Components/login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/managerLogin' component={ManagerLogin} />
        <Route path='/executiveLogin' component={ExecutiveLogin} />
        <Route path='/manager' component={Manager} />
        <Route path='/executive' component={Executive} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
