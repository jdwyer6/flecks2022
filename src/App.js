import Navigation from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import KitchenPage from './pages/KitchenPage';
import LaundryPage from './pages/LaundryPage';
import ACPage from './pages/ACPage';
import PopularPage from './pages/PopularPage';
import Footer from './components/Footer';
import './App.css';
import { Route, Routes } from "react-router-dom";


function App() {

    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path='/' element={<HomePage />} ></Route>
                <Route path='/KitchenPage' element={<KitchenPage />} ></Route>
                <Route path='/LaundryPage' element={<LaundryPage />} ></Route>
                <Route path='/ACPage' element={<ACPage />} ></Route>
                <Route path='/PopularPage' element={<PopularPage />} ></Route>
                <Route path='/ContactPage' element={<ContactPage />} ></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
