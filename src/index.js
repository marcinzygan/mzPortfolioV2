import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Page from './Page';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Page />
);
const root1 = document.getElementById("root")
const section = root1.querySelectorAll(".section")
console.log(section)