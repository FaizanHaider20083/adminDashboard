import './App.css';
import React,{useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi'; 
import { TooltipComponent} from '@syncfusion/ej2-react-popups'

import {Navbar, Footer, ThemeSettigns, Sidebar} from './components'
import {useStateContext} from './context/contextProvider';
import {Orders,ECommerce, Calendar,Employees, Stacked,Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor} from './pages';
function App() {
  const {activeMenu,setActiveMenu, themeSettings, setThemeSettings,currentColor,currentMode } = useStateContext();
  return (
   <div className={currentMode === 'Dark' ? 'dark':''}>
     <BrowserRouter>
       <div className= "flex relative dark:bg-main-dark-bg ">
         <div className ="fixed right-4 bottom-4" style={{zIndex:'1000'}}>
           <TooltipComponent content="Settings" position="Top">
           <button type="button" onClick={() => {
             console.log('button clicked');
             setThemeSettings(true);
           }} className="text-3xl p-3 hover:drop-shadow hover:bg-light-gray text-white " style={{background:currentColor , borderRadius:'50%'}}>
             <FiSettings/>
           </button>

           </TooltipComponent>
         </div>
         {activeMenu ?
          <div className= "sidebar w-72 fixed bg-white dark:bg-secondary-dark-bg"> <Sidebar /></div>:
          <div className ="w-0 dark:bg-secondary-dark-bg "> <Sidebar /></div>}
          <div className={activeMenu?"dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full":"dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2  "}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          

          <div>
            {themeSettings && <ThemeSettigns/>}
            <Routes>
              {/* Dashboard */}
              <Route path="/" element= { <ECommerce /> }/>
              <Route path="/ECommerce" element= { <ECommerce /> }/>
              {/* Pages */}
              <Route path="/orders" element= { <Orders /> }/>
              <Route path="/employees" element= { <Employees /> }/>
              <Route path="/customers" element= { <Customers /> }/>
              {/* Apps */}
              <Route path="/kanban" element= { <Kanban /> }/>
              <Route path="/editor" element= { <Editor /> }/>
              <Route path="/calendar" element= { <Calendar /> }/>
              <Route path="/color-picker" element= { <ColorPicker /> }/>
              {/* Graphs */}
              <Route path="/line" element= { <Line /> }/>
              <Route path="/area" element= { <Area /> }/>
              <Route path="/bar" element= { <Bar /> }/>
              <Route path="/pie" element= { <Pie /> }/>
              <Route path="/financial" element= { <Financial /> }/>
              <Route path="/color-mapping" element= { <ColorMapping /> }/>
              <Route path="/pyramid" element= { <Pyramid  /> }/>
              <Route path="/stacked" element= { <Stacked /> }/>
            </Routes>
            </div>
          </div>
       </div>
     </BrowserRouter>
   </div>
  );
}

export default App;
 