import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class DisplayList extends React.Component{
    
    state = {
        cart:[],
        totalPrice:0
    }
    
    render(){
        return(
            

            <div>
            <Container>

                <Row>
                    
                    <Col xs={12} md={8}>
                    <Container>
                    <Row>
                    {this.props.list.map(item =>
                    (<Col>
                        <h3>Name: {item.name}</h3>
                        <img src={item.img} width="300px" height ="200px" />
                        <h3>Gender: {item.gender}</h3>
                        <h3>Role: {item.role}</h3>
                        <h3>Difficulty: {item.difficulty}</h3>
                        <h3>Price: ${item.price}</h3>
                        <button onClick={() => this.addToCart(item)} >Add to Cart</button>
                        <hr/>
                        </Col>
                    
                        )
                    )}
                    </Row>
                    </Container>
                    </Col>
                    
                    <Col xs={6} md={4}>
                    <Container>
                    <h2>Shopping Cart</h2>
                    
                    <Row>
                    {this.state.cart.map(item =>
                    (<Col>
                        <h3>Name: {item.name}</h3>
                        <img src={item.img} width="300px" height ="200px" />
                        <h3>Gender: {item.gender}</h3>
                        <h3>Role: {item.role}</h3>
                        <h3>Difficulty: {item.difficulty}</h3>
                        <h3>Price: ${item.price}</h3>
                        <button onClick={() => this.removeFromCart(item)}>Remove from Cart</button>
                        <hr/>
                        </Col>
                    
                        )
                    )}
                    </Row>
                    <h2>Total Number: {this.state.cart.length}</h2>
                    <h2>Total Price: ${this.state.totalPrice}</h2>
                
                    </Container>
                    </Col>
                    
                </Row>
            </Container>
            </div>

            

            

        )
    }
    // Create a function to aggregate cart item and total price
    addToCart  = (item) => {
        this.setState(({ cart,totalPrice }) => {
            if (!cart.includes(item)) {
                return { cart: [...cart, item], totalPrice:Math.round((totalPrice+item.price)*100)/100 }
            }
        })
    }

    // Create a function to remove cart item and update total price
    removeFromCart = (item) => {
        this.setState(({ cart,totalPrice }) => {
            if (cart.includes(item)) {
                return { cart: cart.filter((i) => i !== item), totalPrice: Math.round((totalPrice-item.price)*100)/100 }
            }
        })
    }

   
    

}

export default DisplayList;


