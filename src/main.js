import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { loadGA } from '@/lib/ga';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
// Initialize GA after mount
loadGA();
