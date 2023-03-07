import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoSvg from './cherry.png';

function Brand() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logoSvg}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Fruits
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Brand;