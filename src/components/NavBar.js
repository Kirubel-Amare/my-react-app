import { useState ,useEffect} from "react";
import { Navbar, Nav, Container,  } from "react-bootstrap";
import logo from "../assets/img/image.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg";



export const NavBar = () => {
    const [activeLink, setAciveLink]= useState('home');
    const [scolled, seScolled] = useState(false);

    useEffect(() =>{
        const onScroll = () =>{
            if(window.scrolly > 50){
                seScolled(true);
            }else{
                seScolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);


    }, [])

    const onUpdateActiveLink = (value) =>{
        setAciveLink(value);
    }


    return (

        <Navbar expand="lg" className={scolled ? "scrolled" : " "} >
            <Container>
                <Navbar.Brand href="#home">
                    <img  src={logo} alt="logo" />
                </Navbar.Brand>
              
               
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="nav-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link':'navbar-link'} onClick={() =>onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link':'navbar-link'} onClick={() =>onUpdateActiveLink('skills')}>Skill</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link':'navbar-link'}  onClick={() =>onUpdateActiveLink('project')}>project</Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"> <img src={navIcon1} alt="" /></a>
                            <a href="#"> <img src={navIcon2} alt="" /></a>
                            <a href="#"> <img src={navIcon3} alt="" /></a>
                        </div>
                        
                        <button className="vvd" onClick={() => console.log("connect")}><span> let`s Connect </span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}