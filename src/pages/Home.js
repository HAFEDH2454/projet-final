import React from 'react';
import Navigation from '../Components/Navigation';
import SocialNetwork from '../Components/SocialNetwork';
import DynamicText from '../Components/DynamicText';
import ButtonsBottom from '../Components/ButtonsBottom';
 
const Home = () => {
        return (
      
            <div className="home">
                <Navigation   />
                <SocialNetwork />
                <div className="home-main" >
                    <div className="main-content">
                        <h1>Developpeur Web</h1>
                        <h2><DynamicText /></h2>
                    </div>
                </div>
                <ButtonsBottom right={'/project-1'} />
            </div>
        );

};

export default Home;
