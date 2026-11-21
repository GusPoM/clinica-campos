interface itf{
    titulo: string;
    texto: String;
    image: string;
}

export default function Card({titulo, texto, image}: itf){

    let imageHref = "src/assets/img/" + image;
    return(
        <div className="w-full md:w-1/4 p-3 flex justify-center">
            <div className="flex md:flex-col box-white rounded-5 w-100">
                <div className="flex-1 p-0">
                    <img src={imageHref} className="w-100 h-auto dborder-reverse" alt=""/>
                </div>
                <div className="flex-1 p-3 min-h-40">
                    <h4 className="mb-3">{titulo}</h4>
                    <p>{texto}</p>
                </div>
            </div>
        </div>
    )
}