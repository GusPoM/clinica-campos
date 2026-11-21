// Biblioteca
import { Link } from 'react-router-dom'

interface itf {
    texto: string;
    href: string;
    roudedPill?: boolean;
    outline?: boolean;
    first?: boolean;
    mid?: boolean;
    last?: boolean;
}

export default function LinkButton({ texto, href, roudedPill, outline, first, mid, last }: itf){
    let boxClass = "p-2.5 text-nowrap";

    if(outline)
        boxClass += " text-success border-1 border-green-el hover:bg-green-l/50";
    else boxClass += " text-light bg-green-el hover:bg-green-ed";

    if(roudedPill) boxClass += " rounded-pill px-4";
    else boxClass += " rounded-4";

    if(first)
        boxClass += " rounded-end-0";
    else if(mid)
        boxClass += " rounded-start-0 rounded-end-0";
    else if(last) boxClass += " rounded-start-0";

    return(
        <Link to={href} className={boxClass}>
            {texto}
        </Link>
    )
}
// 