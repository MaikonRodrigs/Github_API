import SearchProject from './pages/SearchProject'
import ListProjectsGit from './pages/ListProjectsGit'
import GlobalStyle from './styles/GlobalStyles'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SearchProject />} />
        <Route path="/userGitPage" element={<ListProjectsGit />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
