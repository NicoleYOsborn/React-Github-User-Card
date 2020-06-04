import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';

function UserCard(props) {

    console.log(props);
    

    return(
        <div>
            <Card key ={props.user.id} >
                <CardImg  top width="50%" src={props.user.avatar_url} alt='user avatar'/>
            
                <CardBody>
                    <CardTitle>{props.user.login}</CardTitle>
                    
                    <CardText>Followers: {props.user.followers}</CardText>
                    <CardText>Following: {props.user.following}</CardText>
                   
                </CardBody>
            </Card>  
            
        </div>
    )
}

export default UserCard;