import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Logo } from './components/index';
import { Sidebar } from './components/index';
import { Main } from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

const App = () => {
  // All checkboxes status
  const [filter, setFilter] = useState({
    all: true,
    without: true,
    one: true,
    two: true,
    three: true
  });

  return (
    <BrowserRouter>
      <Container>
        <Logo />
        <Row>
          <Sidebar filter={filter} setFilter={setFilter} />
          <Main filter={filter} setFilter={setFilter} />
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
