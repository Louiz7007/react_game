import React from 'react';
import './App.css';
import {Title} from "./components/Title";
import {LoginForm} from './components/LoginForm';

function App() {
    return (
        <div className="App">
            <Title text={'Willkommen'}/>
            <LoginForm/>
        </div>
    );
}

export default App;
