import Container from '../container';
import '../main-page.css';
import { More } from "./More";
import { Link, Route, Routes } from 'react-router-dom';
import images from "../img/images.jsx"; // Caminho correto para o arquivo de imagens

export function Home() {
    return (
        <>
            <div className="background">
                <Container>
                    <div className="align">
                        <div className="content">
                            <h1 className='font'><strong>Feel More Beautiful</strong></h1>
                            <p>At Jaque's, our expert stylists and luxurious treatments leave you radiant.</p>

                            <ul>
                                <li className="no-list-style">

                                    

                                    <Link to="/More" className="more-link">Register</Link>
                                </li>
                            </ul>
                        </div>

                      
                    </div>
                </Container>
            </div>







         
            
            


<footer>
    <div className="container-footer"> 
<div className="alinha-left">
   <div className="tit"><h1> Jaque´s Beauty Salon</h1></div> 
   
   <div className="alinhamento">

        <div className="alinha-essa-merda">
   <div className="contacts"><h1 className='margem'>Contacts</h1></div>
    <div className="numero">(48) 9991201255</div>
    </div>
    

    <div className="container2">
        <div className="premios"><h1>Our Awards</h1></div>
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

<Routes>
                <Route path="/More" element={<More />} />
            </Routes>
        


        </>
    );
}