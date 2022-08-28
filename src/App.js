import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import KitchenPage from './pages/KitchenPage';
import LaundryPage from './pages/LaundryPage';
import ACPage from './pages/ACPage';
import PopularPage from './pages/PopularPage';
import './App.css';


function App() {

    return (
        <Router>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route path='/KitchenPage'>
                        <KitchenPage />
                    </Route>
                    <Route path='/LaundryPage'>
                        <LaundryPage />
                    </Route>
                    <Route path='/ACPage'>
                        <ACPage />
                    </Route>
                    <Route path='/PopularPage'>
                        <PopularPage />
                    </Route>
                    <Route path='/ContactPage'>
                        <ContactPage />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
