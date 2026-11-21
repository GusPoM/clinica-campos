interface itf{
    titulo?: string;
    subTitulo?: string;
}

function Titulo(c?: string){
    if(c != undefined)
        return <h3 className="text-center mb-3">{c}</h3>
    return
}
function Subtitulo(c?: string){
    if(c != undefined)
        return <h5 className="text-center">{c}</h5>
    return
}



export default function TripleShow({titulo, subTitulo}: itf){
    const imgClass = "rounded-full shadow-md shadow-green-ed"
    return(
        <section className="p-3 bg-green-l" id="contato">
            {Titulo(titulo)}
            <div className="flex">
                <div className="w-1/3 text-center flex justify-center">
                    <figure className="justify-self-center" style={{width: "60%"}}>
                        <img src="src/assets/img/placeholder-livia.jpg" className={imgClass} alt="..." />
                        <figcaption>Lívia Campos</figcaption>
                    </figure>
                </div>
                <div className="w-1/3 text-center flex justify-center">
                    <figure className="justify-self-center" style={{width: "60%"}}>
                        <img src="src/assets/img/placeholder-clara.jpg" className={imgClass} alt="..." />
                        <figcaption>Clara</figcaption>
                    </figure>
                </div>
                <div className="w-1/3 text-center flex justify-center">
                    <figure className="justify-self-center" style={{width: "60%"}}>
                        <img src="src/assets/img/placeholder-antonio.jpg" className={imgClass} alt="..." />
                        <figcaption>Antônio</figcaption>
                    </figure>
                </div>
            </div>
            {Subtitulo(subTitulo)}
        </section>
    )
}