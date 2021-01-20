import { BrowserRouter } from 'react-router-dom';
import Logo from './components/Logo';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Logo />
        <Row>
          <Sidebar />
          <Main />
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
