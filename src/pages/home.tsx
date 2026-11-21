import Header from '../assets/components/header'
import Footer from '../assets/components/footer'
import LinkButton from '../assets/components/linkButton'
import TripleShow from '../assets/components/tripleShow'

interface itf{
    titulo: string;
    texto: string;
    image: string;
    active?: boolean;
}
function CarrosselItem ({titulo, texto, image, active}: itf){
    let topClasses = "carousel-item"
    if(active)
        topClasses += " active"

    return(
        <div className={topClasses}>
            <img src={`src/assets/img/${image}`} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block opacity-75 rounded-5 box-light-green" >
                <h5><b>{titulo}</b></h5>
                <p>{texto}</p>
            </div>
        </div>
    )
}


export default function Home(){
    return(
        <>
            <Header />
        
            {/* CONTEÚDO DA PÁGINA */}
            <main>
                <section className="flex justify-center" id="landing-screen">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center">
                        <div className="md:w-1/2 md:me-3 w-full">
                            <figure className="figure flex justify-end items-center h-100">
                                <img src="src/assets/img/CC 1-1.png" className="figure-img img-fluid rounded-5 w-full d-none d-md-block" alt="..." />
                                <img src="src/assets/img/CC 16-9.png" className="figure-img img-fluid rounded-3 w-full d-md-none" alt="..." />
                            </figure>
                        </div>

                        <div className="md:w-1/2 md:ms-3 w-full flex flex-col justify-center">
                            <div className="mb-3 p-3 text-center text-md-start">
                                <h1>Cuidado que marca</h1>
                                <p>A clínica Campos sempre estará disponível para o que você precisar com profissionais preocupados com você.</p>
                            </div>
                            <div className="bg-green-m p-3 rounded-5 w-100">
                                <div className="row text-center">
                                    <div className="col-lg-4 col-md-12 col-sm-4 mb-3">
                                        <p>Conheça nossos<br />associados</p>
                                        <LinkButton href="associados" texto="Associados" roudedPill />
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-4 mb-3">
                                        <p>Entenda quem<br />somos</p>
                                        <LinkButton href="sobre" texto="Sobre Nós" roudedPill />
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-4">
                                        <p>Agende via<br />Whatsapp</p>
                                        <LinkButton href="#" texto="Whatsapp" roudedPill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="tratamentos">
                    {/* Carrossel */}
                    <div className="row justify-center mb-3">
                        <div id="crs-showcase" className="carousel carousel-dark slide col-lg-9 col-sm-12" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <CarrosselItem image="crs-1.jpg" titulo="Tratamentos Odontológicos" active
                                    texto="Clareamento, remoção de cáries e muito mais com Lívia e Antônio" />
                                
                                <CarrosselItem image="crs-2.jpg" titulo="Tratamentos Estéticos"
                                    texto="Limpeza facial, preenchimento labial e sombras por Clara" />
                                
                                <CarrosselItem image="crs-3.jpg" titulo="Equipamento de Qualidade"
                                    texto="Não apenas temos incríveis profissionais, mas tembém equipamento em dia" />
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#crs-showcase" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Slide anterior</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#crs-showcase" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Próximo slide</span>
                            </button>
                        </div>
                    </div>
                </section>
                
                <TripleShow titulo="Clínica Campos" subTitulo="Rua Albertina Nascimento 220, em frente ao PROCON"/>
            </main>
            
            <Footer />
        </>
    )
}