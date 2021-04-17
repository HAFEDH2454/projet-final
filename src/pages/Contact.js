import React from 'react';
import ButtonsBottom from '../Components/ButtonsBottom';
import Logo from '../Components/Logo';
import Navigation from '../Components/Navigation';
import SocialNetwork from '../Components/SocialNetwork';
import ContactForm from '../Components/ContactForm';
 const Contact=()=>{
        return (
        <main>
                <div className="contact">
                        <Navigation />
                        <Logo />
                        <ContactForm />
                        <div className="contact-infos">
                                <div className="address">
                                        <div className="content">
                                                <h4>adresse</h4>
                                                <p>07 avenue des jeunes</p>
                                                <p>Gafsa Tunisie</p>
                                        
                                </div>
                        </div>
                        <div className="phone">
                        <div className="content">
                                <h4>téléphone</h4>
                                <div text="0021629221402" className="hover">
                                        <p  className="clipboard"  >00216 29 221 402</p>
                               </div> </div>
                        </div>
                        <div className="email">
                                <div className="content">
                                        <h4>email </h4>
                                        <p className="clipboard">bouz.hafedh@yahoo.com</p>
                                </div>
                        </div>
                        <SocialNetwork/>
                        <div className="credits">
                                <p>copyright © 2021 all rights reserved </p>
                        </div>
                        </div>
                <ButtonsBottom left={'/project-4'} />
                </div>
        </main>
        );

};

export default Contact;
