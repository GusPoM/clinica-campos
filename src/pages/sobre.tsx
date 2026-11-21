import Header from '../assets/components/header'
import Footer from '../assets/components/footer'
import TripleShow from '../assets/components/tripleShow'


export default function Sobre(){
    return(
        <>
            <Header />
        
            {/* CONTEÚDO DA PÁGINA */}
            <main>
                <section className="w-full p-3 flex justify-center">
                    <div className="flex flex-col lg:flex-row box-white rounded-5 dsize">
                        <div className="lg:w-1/2 w-full" style={{padding:0}}>
                            <img src="src/assets/img/placeholder-livia.jpg" className="h-auto max-w-full dborder w-full" alt="" />
                        </div>
                        <div className="lg:w-1/2 w-full p-3 div-texto-lascado-que-odio">
                            <h2><b>Clínica Campos</b></h2>
                            <p>O cuidado vai muito além de apenas estética, é a expressão da nossa confiança. Cuidar de si mesmo é mais do que tratar os seus dentes ou sua pele: é devolver conforto, bem-estar e segurança para viver cada momento.</p>
                        </div>
                    </div>
                </section>

                <TripleShow />

                <section className="p-3 text-center flex flex-col justify-center items-center">
                    <h3>Onde Estamos</h3>
                    <figure className="mb-3 inline-block">
                        <img src="src/assets/img/CC 1-1.png" className="h-auto max-w-full rounded-2xl w-75 mx-auto mb-0.5" alt="" />
                    </figure>
                    <h5>Rua Albertina Nascimento 220, em frente ao PROCON</h5>
                    <a className="text-white p-1 px-3 rounded-pill bg-green-el" href="https://www.google.com/maps">Endereço pelo Google Maps</a>
                </section>
            </main>
            
            <Footer />
        </>
    )
}