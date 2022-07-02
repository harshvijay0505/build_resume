import './App.css';
import Buttonsgrp from './components/TabsBar';
import Headerr from './components/Headerr';
import Names from './components/TopPane';
import { UserProvider } from './context/CodeContext';

function App() {
  return (
    <>
    <UserProvider>
    <Headerr/>
    <Names/>
    <Buttonsgrp/>
    </UserProvider>
    </>
  );
}

export default App;
