export interface itf{
    label: string;
    largura?: number;
    placeholder: string;
    minLenght?: number;
    maxLenght?: number;
    obrigatory?: boolean;
    obs?: string;

    date?: boolean;
    email?: boolean;
    tel?: boolean;
    file?: boolean;
    password?: boolean;
}

export default function Input({
    label, largura, placeholder, minLenght, maxLenght, obrigatory, obs, //Base
    date, email, tel, file, password //Tipos de input
}:itf){
    // EDIÇÕES
    let tipo: string;
    if(date) tipo = "date";
    else if(email) tipo = "email";
    else if(tel) tipo = "tel";
    else if(file) tipo = "file";
    else if(password) tipo = "password";
    else tipo = "text";

    if(obrigatory) label += "*";

    let l: string = ""
    if (largura !=  undefined)
        l = "col-md-"+largura;

    // COMPONENTE
    return(
        <div className={`mb-4 ${l}`}>
            <label className="text-green-el mb-2 font-semibold">{label}</label>

            <input type={tipo}
                className="w-full outline-1 outline-green-l text-green-ed rounded-pill px-3 py-2
                    transition duration-200 ease-in-out
                    focus:outline-green-m focus:outline-2
                    focus:shadow-md shadow-green-l"
                maxLength={maxLenght}  minLength={minLenght}
                placeholder={placeholder}
                required
            />
            {obs ? <div className="px-2 text-faint-d"><small>{obs}</small></div> : null}
        </div>
    )
}