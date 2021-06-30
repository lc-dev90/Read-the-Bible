import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import BiblePage from "./pages/BiblePage";
import BookPage from "./pages/BookPage";
import ChapterPage from "./pages/ChapterPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Container>
          <Switch>
            {/* HomePage  -> initial page, menu and versiculo do dia */}
            <Route path="/" exact component={HomePage} />
            {/* Bible -> mostra todos os livros da biblia mostrando antigo e novo testamento */}
            <Route path="/:bibleVersion" component={BiblePage} />
            {/* Book -> mostra todos os capitulos do livro */}
            <Route path="/:bibleVersion/:book" component={BookPage} />
            {/* Search -> mostra todos os resultados da busca */}
            <Route path="/:bibleVersion/:searchTerm" component={SearchPage} />
            {/* Chapter -> Acessa o capitulo versiculo por versiculo */}
            <Route
              path="/:bibleVersion/:book/:chapter"
              component={ChapterPage}
            />
          </Switch>
        </Container>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  height: calc(100vh - 105px);
`;
