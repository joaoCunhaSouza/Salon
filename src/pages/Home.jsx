import React from 'react';
import Container from '../container';
import '../main-page.css';

import { Link, Route, Routes } from 'react-router-dom';
import MainSection from "./MainSection"; 

export function Home() {
    return (
        <>
            <div className="background">
                <Container>
                    <div className="align">
                        <div className="content">
                            <h1 className='font'><strong className='letras'>Feel More Beautiful</strong></h1>
                            <p>At Jaque's, our expert stylists and luxurious treatments leave you radiant.</p>

                            <ul>
                                <li>
                                    <Link to="/More" className="more-link">Our Services</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

            <main className='main'>
                <div className="container-info">
                    <MainSection />
                </div>

                <div className="oi"></div>

                <div className="maps-container">
                    <h2 className='find'>Find Us</h2>
                    <iframe 
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.610839382023!2d-48.502721324400454!3d-27.543546919857068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527472bf7e8a7cf%3A0xf372666373c396ab!2sSal%C3%A3o%20da%20jaque!5e0!3m2!1sen!2sbr!4v1729638806982!5m2!1sen!2sbr"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </main>

            <footer>
                <div className="container-footer">
                    <div className="alinha-left">
                        <div className="tit"><h2 className='jaques'> Jaque´s Beauty Salon</h2></div>

                        <div className="alinhamento">
                            <div className="alinha-essa-merda">
                                <div className="contacts"><h1 className='margem'>Contacts</h1></div>
                                <div className="numero">(48) 9991201255</div>
                                <div>jaquesbeautysalon@gmail.com</div>
                            </div>

                            <div className="container2">
                                
                                <div className="container_circulo">
                                    <div className="circulo"></div>
                                    <div className="traco"></div>
                                    <div className="descricao"> Better Hairdresser Florianópolis</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );
}
