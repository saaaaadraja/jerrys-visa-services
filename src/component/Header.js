import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'
import consultIcon from '../assets/images/consult-icon.png'

// images

import logo from '../assets/images/logo1.png'

function activeNavItem(path) {
  var ele = document.querySelectorAll('.nav-link');
  ele.forEach((element) => {
   element.classList.remove('active');
  });
  if (path == '/') {
   ele[0].classList.add('active');
  }else if(path == '/about'){
   ele[1].classList.add('active');
  }else if(path == '/products'){
   ele[2].classList.add('active');
  }else if(path == '/contact'){
   ele[3].classList.add('active');
  } else if(path == '/appointment,'){
    ele[3].classList.add('active');
   }

}

const Header=()=>{
  const navigate = useNavigate();
  const clickHandler=(id)=>{
    if (id == '/appointment') { 
       window.open(`${id}`,'_blank','noreferrer');
    }else{
      activeNavItem(`${id}`);
      navigate(`${id}`);
      window.location.reload();
    }
    
  }
  
  React.useEffect(()=>{
    console.log(window.location);
    var path = window.location.pathname;
    // activeNavItem(path);
    // let returnData = localStorage.getItem("cartData");
    // let retData = JSON.parse(returnData);
    // if (retData && retData.length>0) {
    //   window.document.getElementById('cart-count-bg').style.display= 'block';
    // }else{
    //   window.document.getElementById('cart-count-bg').style.display= 'none';
    // }
  },[])
    return(<>
        {window?.location?.pathname !== '/appointment' && <div>
             <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{width:'95%'}}>
        <Navbar.Brand onClick={(e)=>clickHandler('/')}><img style={{    width: '75%',marginLeft: '-2vw',marginTop:'1vw'}} src={logo} alt=''/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0 gap-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={(e)=>clickHandler('/')}>Home</Nav.Link>
            <Nav.Link href='#services'>Services</Nav.Link>
            <Nav.Link href='#testimonials'>Testimonials</Nav.Link>
            <Nav.Link href='#aboutUs'>About us</Nav.Link>
            <Nav.Link href='#sendMessage'>Contact</Nav.Link>
          </Nav>
          <Form className="d-flex gap-3 consult-button">
            <div className='position-relative w-100'>
          <Button variant="outline-success consultation-btn w-100" onClick={(e)=>clickHandler('/appointment')} ><span><img className='consult-icon' src={consultIcon} alt="" /></span>BOOK YOUR APPOINTMENT</Button>
          </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        }
    </>)
}

export default Header;