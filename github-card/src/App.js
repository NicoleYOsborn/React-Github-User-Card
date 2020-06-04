import React from 'react';
import UserCard from './components/Card';
import Followers from './components/Followers'
import axios from 'axios';
import {Container, Row, Col} from 'reactstrap';



class App extends React.Component {
    
    constructor() {
        super();
        console.log("constructing")
        this.state={ 
            UserCard: [],
            Followers: []

        }
    } 
    

    componentDidMount(){
        console.log('cdm is fetching data')
        axios.get('https://api.github.com/users/NicoleYOsborn')
            .then(res =>{
                console.log(res.data)
                this.setState({UserCard: res.data})
            })
            .catch(error=>console.log(error))
        axios.get(`https://api.github.com/users/NicoleYOsborn/followers`)  
            .then(res=>{
                this.setState({Followers: res.data})
            })
    };

    render(){
        console.log('rendering app');
        return(
            <Container>
            <Col sm='4'>
                <Row>
                    <UserCard user = {this.state.UserCard}/>
                </Row>
                <Row>
                    <Followers followers = {this.state.Followers}/>
                </Row>
            </Col>
            </Container>
        )
    };
}

export default App;