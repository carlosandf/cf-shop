import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import ErrorPage from '@components/ErrorPage.jsx';

import dropdownMenu from '@utils/dropdownMenu.js';

const app = document.getElementById('render');


ReactDOM.render(<App />, app)

dropdownMenu();





