import Header from '../assets/components/header'
import Footer from '../assets/components/footer'
import Card from '../assets/components/card'

function Linha(){
    return(
        <div className="w-1/12 hidden md:flex justify-content-center">
            {/* SVG de linha vertical reta */}
            <svg width="10" height="250">
                <line x1="5" y1="0" x2="5" y2="250" stroke="var(--color-lightG)" stroke-width="9" stroke-linecap="round" />
            </svg>
        </div>
    )
}
export default function Associados(){
    return(
        <>
            <Header />
            {/* CONTEÚDO DA PÁGINA */}
            <main>
            {/* Cards */}
                <section className="w-full p-3 flex flex-wrap justify-center items-center">
                        
                    {/* CARD 1 */}
                    <Card image="placeholder-livia.jpg" titulo="Dra. Clara"
                        texto="Dentista prestativa, atenciosa e experiente, que já tem a confiança de mais de uma dúzia de pacientes." />
                    
                    <Linha />

                    {/* CARD 2 */}
                    <Card image="placeholder-clara.jpg" titulo="Clara"
                        texto="Estilista focada na plástica facial, atenciosa e curativa." />

                    <Linha />

                    {/* CARD 3 */}
                    <Card image="placeholder-antonio.jpg" titulo="Dr. Antônio"
                        texto="Com mais de três decadas de carreira, o senhor Antônio não tem muitas dificuldades mais." />
                        
                </section>
            </main>
            
            <Footer />
        </>
    )
}