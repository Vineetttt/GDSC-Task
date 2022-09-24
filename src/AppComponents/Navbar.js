import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function NavbarTop() {
  return (
    <Navbar bg="light" expand="lg" className ="Navbar sticky">
      <div className="contain">
        <Navbar.Brand className="nav-name">VINEET CHOTALIYA</Navbar.Brand>
        <span className='github'>
          <a href="https://github.com/Vineetttt">
            <img
              alt="Github"
              src="./images/github.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </a>
        </span>
        <span className='linkedin'>
          <a href="https://www.linkedin.com/in/vineet-chotaliya-015238246/">
            <img
              alt="linkedin"
              src="./images/linkedin.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </a>
        </span>
        <span className='webpage'>
          <a href="./index.js">
            <img
              alt=""
              src="./images/login.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </a>
        </span>
      </div>
      </Navbar>
  );
}
export default NavbarTop;