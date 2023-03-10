import Homescreen from './pages/Homescreen'
import GlobalStyle from './styles/GlobalStyles'
import Footer from './components/Footer'
import { UserGitStorage } from './hooks/useContext';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserGitStorage>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          {/* <Route path="/userGitPage" element={<ListProjectsGit />} /> */}
        </Routes>
        {/* <Footer /> */}
      </UserGitStorage>
    </BrowserRouter>

  )
}

export default App
