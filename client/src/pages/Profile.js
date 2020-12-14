import React, { Component } from 'react';
import axios from 'axios';
import { getUserInfo } from '../util';
import ProfileDetails from '../components/ProfileDetails/ProfileDetails';



class Profile extends Component {

    state = ({ 
        currentUser: null,
    })
    
    componentDidMount() {
        const rummageLoggedIn = JSON.parse(sessionStorage.getItem("rummageLoggedIn"));
        console.log(getUserInfo(rummageLoggedIn.userLoggedIn));
        axios
            .get(getUserInfo(rummageLoggedIn.userLoggedIn))
            .then(response => {
                this.setState({
                    currentUser: response.data,
                })
            })
    }

    render() {
        if (!this.state.currentUser) {
            return (
                <h1>Profile Loading...</h1>
            )
        }
        return (
            <section className="section">
                <div className="section__header">
                    <h1 className="section__title">
                        Profile
                    </h1>
                </div>
                <ProfileDetails currentUser={this.state.currentUser}/>
            </section>
        );
    }
}

export default Profile;