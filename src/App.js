import './App.css';
import Buttonsgrp from './components/TabsBar';
import Headerr from './components/Headerr';
import Names from './components/TopPane';
import { UserProvider } from './context/CodeContext';
import { Demoo } from './components/Demoo';

function App() {
  return (
    <>
    <UserProvider>
    <Headerr/>
    {/* <Demoo/> */}
    <Names/>
    <Buttonsgrp/>
    </UserProvider>
    </>
  );
}

export default App;
