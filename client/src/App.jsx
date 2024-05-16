// App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import CreateGoal from './views/CreateGoal';
import CreateThought from './views/CreateThought';
import EditThought from './views/EditThought';
import EditGoal from './views/EditGoal';
// import PinLogin from './views/PinLogin';
// import Welcome from './views/Welcome';
// import Register from './views/Register';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    {/* <Route path="/" element={<Welcome/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<PinLogin />} /> */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/createthought" element={<CreateThought />} />
                    <Route path="/creategoal" element={<CreateGoal />} />
                    <Route path="/editthought/:id" element={<EditThought />} />
                    <Route path="/editgoal/:id" element={<EditGoal />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

