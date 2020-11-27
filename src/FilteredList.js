import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js';
import DisplayList from './DisplayList.js';
// import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';



class FilteredList extends React.Component{

  // Set the state 
    constructor(){
      super();
      this.state = {
        gender: "All",
        role: "All",
        sorted: "Default"
      };
    
    }

    

    render(){
        return(
          
          <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Filter on Gender</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1"><Nav.Link eventKey="All" onSelect={this.onSelectFilterSize}>All</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"><Nav.Link eventKey="Male" onSelect={this.onSelectFilterSize}>Male</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3"><Nav.Link eventKey="Female" onSelect={this.onSelectFilterSize}>Female</Nav.Link></NavDropdown.Item>
                  
                </NavDropdown>
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>


          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Filter on Role</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1"><Nav.Link eventKey="All" onSelect={this.onSelectFilterRole}>All</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"><Nav.Link eventKey="Support" onSelect={this.onSelectFilterRole}>Support</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3"><Nav.Link eventKey="Mage" onSelect={this.onSelectFilterRole}>Mage</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4"><Nav.Link eventKey="Fighter" onSelect={this.onSelectFilterRole}>Fighter</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5"><Nav.Link eventKey="Shooter" onSelect={this.onSelectFilterRole}>Shooter</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6"><Nav.Link eventKey="Jungler" onSelect={this.onSelectFilterRole}>Jungler</Nav.Link></NavDropdown.Item>
                  
                </NavDropdown>
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>
          


          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Sort by</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1"><Nav.Link eventKey="Default" onSelect={this.onSelectSort}>Default</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"><Nav.Link eventKey="Difficulty" onSelect={this.onSelectSort}>Difficulty</Nav.Link></NavDropdown.Item>
                  
                  
                </NavDropdown>
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>

          <DisplayList list={this.props.list.filter(this.matchesFilter).sort(this.sortResultList)}/>
          </div>
        
        )
    }

    // Create a function for clicking - gender
    onSelectFilterSize = event => {
      this.setState({
        gender: event
      })
    };

    
    // Create a function for clicking - role
    onSelectFilterRole = event => {
      this.setState({
        role: event
      })
    };

    
    // Create a conditional function for filtering
    matchesFilter = item => {
      // all items should be shown when no filter is selected
      if((this.state.gender === 'All') && (this.state.role === 'All')) { 
        return true
      } else if ((this.state.role === item.role) && (this.state.gender === item.gender)) {
        return true
      } else if ((this.state.role === "All") && (this.state.gender === item.gender)) {
          return true
      } else if ((this.state.role === item.role) && (this.state.gender === "All")) {
        return true
      } else {
        return false
      }
    }

    // Create a function for clicking - difficulty
    onSelectSort = event => {
      this.setState({
        sorted: event
      })
    };
    
    
    // Create a conditional function for sorting  
    sortResultList = (item1, item2) =>{
      if (this.state.sorted === "Default"){
        return 0
      }
      if (this.state.sorted === "Difficulty"){
        if (item1.difficulty > item2.difficulty){
          return -1
        }
        if (item1.difficulty < item2.difficulty){
          return 1
        }
      }
    }
    
}


export default FilteredList;