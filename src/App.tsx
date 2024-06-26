import './App.css'
import { BottomNav, JobHeader, AboutJob, TopNavbar, Requirements, AboutCompany } from './components'
import Layout from './components/Layout'
import './fonts.css'
function App() {
  return (
    <div>
      <TopNavbar />
      <BottomNav />
      <Layout>
        <JobHeader />
        <Requirements />
        <AboutJob />
        <AboutCompany />
      </Layout>
    </div>
  )
}

export default App
