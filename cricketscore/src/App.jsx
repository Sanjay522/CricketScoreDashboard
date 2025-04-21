import React from 'react';
import './index.css';
import Nav from './component/Nav';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './Contex';
import Routess from './component/Routes/Routess';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="bg-background min-h-screen">
          <div className="w-[80vw] m-auto">
            <Nav />
            <Routess/>
          </div>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
