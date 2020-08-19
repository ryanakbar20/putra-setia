import React from 'react';
import './App.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/scss/style.scss';
import './assets/fa/fontawesome.scss';
import './assets/fa/regular.scss';
import './assets/fa/solid.scss';
import './assets/fa/brands.scss';
// import './assets/fa/_icons.scss';
import { Landing } from './pages';

function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
