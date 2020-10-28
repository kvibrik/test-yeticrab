// стили и js бутстрап, библиотека moment
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

// корень приложения, куда рендерим
const root = document.querySelector('#root');

ReactDOM.render(<App />, root);
