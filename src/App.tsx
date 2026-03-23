import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import { ChatBot } from './components/ChatBot'
import { CursorProvider } from './systems/cursor/CursorProvider'
import {
  HomePage,
  AboutPage,
  TimelinePage,
  StoryPage,
  LeadersPage,
  VideosPage,
  GroupPage
} from './pages'

function App() {
  return (
    <CursorProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/map" element={<StoryPage />} />
          <Route path="/leaders" element={<LeadersPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/group" element={<GroupPage />} />
        </Routes>
      </main>
      <Footer />
      <ChatBot />
    </CursorProvider>
  )
}

export default App
