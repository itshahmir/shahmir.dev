import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectKickoffChecklist from './pages/ProjectKickoffChecklist'
import SprintPlanningChecklist from './pages/SprintPlanningChecklist'
import WordPressTaskEstimation from './pages/WordPressTaskEstimation'
import PluginDevelopmentSOP from './pages/PluginDevelopmentSOP'
import SiteDevelopmentSOP from './pages/SiteDevelopmentSOP'
import BlogArchive from './pages/BlogArchive'
import BlogPost from './pages/BlogPost'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources/project-kickoff-checklist" element={<ProjectKickoffChecklist />} />
        <Route path="/resources/sprint-planning-checklist" element={<SprintPlanningChecklist />} />
        <Route path="/resources/wordpress-task-estimation" element={<WordPressTaskEstimation />} />
        <Route path="/resources/plugin-development-sop" element={<PluginDevelopmentSOP />} />
        <Route path="/resources/site-development-sop" element={<SiteDevelopmentSOP />} />
        <Route path="/blog" element={<BlogArchive />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
