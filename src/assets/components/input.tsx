export interface itf{
    nome: string;
    largura?: number;
    placeholder: string;
    minLenght?: number;
    maxLenght?: number;
}

export default function Input({nome, largura, placeholder, minLenght, maxLenght}:itf){
    return(
        <div className={`col-md-${largura} mb-4`}>
            <label className="text-green-el mb-2 font-semibold">
                {nome}
            </label>

            <input type="text" maxLength={maxLenght}  minLength={minLenght}
                className="w-full outline-1 outline-green-l focus:outline-green-m focus:outline-2 text-green-ed rounded-pill px-3 py-2"
                placeholder={placeholder}
                required/>
        </div>
    )
}