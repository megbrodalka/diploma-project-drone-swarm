import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navigation from './components/small-components/Navigation'

import Dashboard from "./components/page-components/Dashboard";
import Missions from "./components/page-components/Missions";
import Settings from "./components/page-components/Settings";
import {ThemeProvider} from "./components/small-components/Theme";

const App = () => {
    return (
        <ThemeProvider>
            <Router>
              <div className="w-screen h-screen dark:bg-[#111827]">
                  <Navigation />
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/missions" element={<Missions />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
            </Router>
        </ThemeProvider>
    )
}

export default App