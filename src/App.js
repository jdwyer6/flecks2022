import './App.css';
import Navigation from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import FeaturedProductsPage from './pages/FeaturedProductsPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
                </Switch>
            </div>
        </Router>

    );
}

export default App;
