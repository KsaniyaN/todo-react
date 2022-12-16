import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const INITDATA = [
    { id: "todo-0", name: "dream", completed: true },
    { id: "todo-1", name: "care", completed: true },
    { id: "todo-2", name: "develop", completed: false }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App subject="Coding task" tasks={INITDATA} />
);
