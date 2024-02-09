import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)

// This is potentially null therefore typescript adds the ! mark at the end of the getElementbyId