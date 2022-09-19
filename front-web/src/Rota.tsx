
import Records from './pages/Records';
import Header from './components/Header';
//import { Switch } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Charts from './pages/Charts';

function Rota() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/records' element={<Records />} />
                <Route path='/charts' element={<Charts />} />
            </Routes>

        </BrowserRouter>
    );
}

export default Rota;