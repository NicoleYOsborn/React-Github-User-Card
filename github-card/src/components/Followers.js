import React from 'react';
import UserCard from './Card'

 const Followers= props =>{
   return (
    <div >
        {props.followers.map(follower=>{
        return <UserCard key = {follower.id} user = {follower}/>
        })}
    </div>)

}

export default Followers;