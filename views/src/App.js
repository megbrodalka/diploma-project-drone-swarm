import React from 'react'
import Navigation from './components/Navigation'
import ViewAllDrones from './components/ViewAllDrones'

const App = () => {
    return (
        <>
            <Navigation/>
            <ViewAllDrones/>
            <div className="bg-gray-200 w-full h-screen hidden"></div>
        </>
    )
}

export default App