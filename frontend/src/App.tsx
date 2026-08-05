import {BrowserRouter, Navigate, Route, Routes} from "react-router";

import TasksPage from "./pages/TasksPage.tsx"
import CalendarPage from "./pages/CalendarPage.tsx"
import LoginPage from "./pages/LoginPage.tsx"
import './App.css'

function App() {

  return (

    <BrowserRouter>

    <Routes>

        <Route path="/" element={<Navigate to="/tasks"/>}/>

        <Route path="/tasks" element={<TasksPage/>}/>

        <Route path="/calendar" element={<CalendarPage/>}/>

        <Route path="/login" element={<LoginPage/>}/>

    </Routes>

</BrowserRouter>
  )
}

export default App
