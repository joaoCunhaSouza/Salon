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
                    <section className="quad">
                        <div className="grid-item">1</div>
                        <div className="grid-item">2</div>
                        <div className="grid-item">3</div>
                        <div className="grid-item">4</div>
                        <div className="grid-item">5</div>
                        <div className="grid-item">6</div>
                    </section>
                    <div className="info">1</div>
                </div>

                 <div className='oi'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae alias velit quam facilis natus doloribus reprehenderit. Rerum, tenetur omnis maiores harum, laborum itaque nobis quod libero ullam perferendis molestias possimus pariatur nihil, cupiditate dolorum voluptas rem iure quaerat beatae ab. Qui iure quisquam earum sint modi. Minima dolores, velit aspernatur quam distinctio cupiditate consectetur tempore corrupti at quisquam perferendis nostrum et est, mollitia repudiandae numquam. Voluptatibus recusandae architecto asperiores unde minima quibusdam vel, odio earum impedit nisi et tempora, modi accusantium voluptates! Expedita exercitationem optio magnam, voluptates quae similique iusto tenetur dignissimos quia, dolor quis laboriosam deleniti fugit ea porro voluptatum. Quidem nostrum excepturi sequi facere laudantium, magnam, aliquam aspernatur autem earum sint quis placeat animi suscipit soluta ab eveniet tenetur debitis impedit molestiae necessitatibus temporibus eos fuga! Unde perspiciatis exercitationem cum. Nulla et, vel ut voluptate cupiditate quis dolor sapiente sunt dolore omnis veritatis, error placeat dignissimos! Aliquid est dolor nihil iste, nulla repudiandae consequuntur officia fuga eaque quibusdam maiores harum ea cupiditate quidem dolores at. Ipsa explicabo a nihil fuga similique sed suscipit ut quod vel, quos quae debitis itaque sint quo sapiente corporis dolorem voluptates. Quos debitis cupiditate incidunt architecto maiores, quibusdam asperiores recusandae eos harum rem? Sapiente, rem totam eveniet cupiditate impedit eum quod repellat facilis, iure nemo accusamus officiis optio ullam maxime in eaque et iste? Similique dolore placeat quas minima labore animi quis! Illum suscipit, assumenda sint repellendus eveniet eum distinctio asperiores excepturi repudiandae, possimus aspernatur saepe quasi architecto animi facere magni molestias, laboriosam esse dolore nostrum! Dignissimos quia dolorem iure? Omnis vitae voluptate eligendi culpa cumque dolorum consequatur ipsa consectetur id, numquam, atque cum natus sequi optio quos laborum praesentium magnam est accusamus suscipit impedit quaerat! Facere ipsam unde dolore explicabo! Error numquam non, modi cum architecto quas recusandae quaerat consectetur expedita ab incidunt? Nostrum, pariatur labore repellat aspernatur cupiditate quasi amet culpa aliquam doloremque. Ratione nulla ex recusandae enim sunt nihil at culpa! Accusamus aliquid accusantium fugiat molestiae laborum ratione dolore porro atque, architecto ducimus saepe commodi cupiditate dolorem ipsum delectus modi dicta tempore quidem? Explicabo consectetur quisquam voluptatem ipsum ipsam vel dolores nulla, similique, aliquid odit, quam culpa ipsa provident recusandae minima optio? Non at esse cumque numquam voluptate consectetur autem, officiis similique molestias unde, ullam illum id asperiores assumenda consequatur incidunt, aliquid provident quod mollitia minus! Eos quasi nemo, iure repellat culpa aut aliquam porro quis reiciendis nobis odio ipsa molestias numquam doloribus itaque voluptatem saepe recusandae, tempora unde similique! Delectus culpa nesciunt ex, impedit totam dolores cupiditate recusandae, nihil quos nostrum quidem fugiat praesentium pariatur dignissimos ipsa provident architecto corrupti reprehenderit consectetur maiores unde? Ex voluptas nesciunt obcaecati delectus quae quam nostrum dolorum numquam maiores, ratione repudiandae! Laudantium aliquid rerum obcaecati eaque voluptatum blanditiis cumque molestiae doloribus harum ut aliquam repellendus, id voluptates earum minus dolores? Corrupti veniam a officia corporis culpa ab pariatur doloribus provident laudantium explicabo quaerat nulla debitis ipsam vero dolor, ratione labore temporibus sed unde recusandae! Ipsum et voluptatum, error earum voluptatem quisquam eveniet!</div>

                <div className="maps-container">
                    <h2>Find Us</h2>
                    <iframe 
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.610839382023!2d-48.502721324400454!3d-27.543546919857068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527472bf7e8a7cf%3A0xf372666373c396ab!2sSal%C3%A3o%20da%20jaque!5e0!3m2!1sen!2sbr!4v1729638806982!5m2!1sen!2sbr"
                        width="100%"  // Ajuste para 100% para ocupar toda a largura
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
