// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Link, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// 공통 css : reset, common, font
import './assets/css/tokens.css';
import './assets/css/common.css';

// 컴포넌트
import MainComponent from './pages/MainComponent';
import Pay from './pages/Pay';
import AppLayout from './layouts/AppLayout';
import Login from './pages/Login';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <MainContainer>

      {/* <MainComponent /> */}
      
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MainComponent />}/>
          <Route path="/pay" element={<Pay />}/>
          <Route path="/login" element={<Login />}/>
        </Route>
      </Routes>
    
    </MainContainer>
  )
}

const MainContainer = styled.div`
  background: #fff;
`

export default App
