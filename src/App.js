import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import FeaturedProductsPage from './pages/FeaturedProductsPage';
import KitchenPage from './pages/KitchenPage';
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
                    <Route path='/FeaturedProductsPage'>
                        <FeaturedProductsPage />
                    </Route>
                    <Route path='/ContactPage'>
                        <ContactPage />
                    </Route>
                    <Route path='/KitchenPage'>
                        <KitchenPage />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
