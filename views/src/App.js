import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navigation from './components/small-components/Navigation'

import Dashboard from "./components/page-components/Dashboard";
import Control from "./components/page-components/Control";
import LiveFeed from "./components/page-components/LiveFeed";
import Settings from "./components/page-components/Settings";
import {ThemeProvider} from "./components/small-components/Theme";


const App = () => {
    return (
        <ThemeProvider>
            <Router>
              <div className="w-screen h-screen dark:bg-neutral-700">
                <Navigation />
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/control" element={<Control />} />
                  <Route path="/livefeed" element={<LiveFeed />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
            </Router>
        </ThemeProvider>
    )
}

export default App