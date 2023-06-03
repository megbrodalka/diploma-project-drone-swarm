import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navigation from './components/small-components/Navigation'

import Dashboard from "./components/page-components/Dashboard";
import Control from "./components/page-components/Control";
import LiveFeed from "./components/page-components/LiveFeed";
import Settings from "./components/page-components/Settings";


const App = () => {
    return (
        <Router>
          <div>
            <Navigation />
            <div className="bg-gray-200 w-full h-screen hidden"></div>

            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/control" element={<Control />} />
              <Route path="/livefeed" element={<LiveFeed />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
    </Router>
    )
}

export default App