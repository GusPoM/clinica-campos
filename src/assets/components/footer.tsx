export default function Footer(){
    return(
        <footer className="p-3 flex flex-col items-center">
            <div className="w-full sm:w-7/8 flex sm:flex-row flex-col">
                <div className="md:w-1/3 w-full">
                    <p>Links úteis</p>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="associados">Associados</a></li>
                        <li><a href="sobre">Sobre Nós</a></li>
                        <li><a href="perfil">Minha Conta</a></li>
                        <li><a href="login">Login</a></li>
                        <li><a href="agenda">Agenda</a></li>
                        <li><a href="cadastro">Cadastro</a></li>
                    </ul>
                </div>
                <div className="md:w-1/3 w-full">
                    <p>Canais de comunicação</p>
                    <ul>
                        <li><a href="https://mail.google.com/mail/">E-mail LiviaCC@algomail.com</a></li>
                        <li><a href="https://web.whatsapp.com/">Whatsapp 15 99999 9999</a></li>
                        <li><a href="https://br.linkedin.com/">linkedin Clinica.Campos</a></li>
                    </ul>
                </div>
                <div className="md:w-1/3 w-full">
                    <p>Sobre o Site</p>
                    <ul>
                        <li><a href="#">Manejamento de Cookies</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Termos de Uso</a></li>
                    </ul>
                </div>
            </div>
            
            <h5 className="mt-5 mb-0 text-center">© 2025. Todos os direitos reservados.</h5>
            <img src="src/assets/img/TD_Logo_2.png" className="mt-0 size-30 "/>
        
            {/* Icone do Whatsapp */}
            <div id="Wapp-div">
                <a href="#"><img src="src/assets/img/Wapp_logo.svg" width="100%" className="rounded-full shadow-md shadow-green-ed" /></a>
            </div>
            
        </footer>
    )
}