import { Link } from "react-router-dom"
import LinkButton from "./linkButton"

export default function Header(){
    return(
      <header className="w-full p-3">
          <div className="row">
              {/* Logomarca */}
              <div className="col-8 w-8/12 col-lg-4  flex justify-content-start align-items-center">
                  <Link to="/" id="name"><h1 className="text-red-500">Clínica Campos</h1></Link>
              </div>

              {/* Menu de acesso (navbar) */}
              <div className="col-4 col-lg-8  flex justify-content-end align-items-center">

                  {/*  PC */}
                  <div className="d-none d-lg-flex justify-content-end">
                      {/* Bloco de links de navegação */}
                      <div className="btn-group me-2" role="group" aria-label="Navegação">
                        <LinkButton href="/" texto="Home" first/>
                        <LinkButton href="/associados" texto="Associados" mid/>
                        <LinkButton href="/sobre" texto="Sobre Nós" mid/>
                        <LinkButton href="/perfil" texto="Meu Perfil" last/>
                      </div>
                      
                      <div className="btn-group me-2" role="group" aria-label="Navegação">
                        <LinkButton href="/agenda" texto="Agenda" first/>
                        <LinkButton href="/cadastro" texto="Cadastro" last/>
                      </div>

                      {/* Bloco de login */}
                        <LinkButton href="/login" texto="Login" />
                  </div>
                  

                  {/* Celular */}
                  <div className=" flex d-lg-none justify-content-end">
                      <div className="dropdown open">
                          <button className="btn btn-success dropdown-toggle" type="button"
                              id="triggerId" data-bs-toggle="dropdown"
                              aria-haspopup="true" aria-expanded="false">
                          Menu
                          </button>
                          <div className="dropdown-menu" aria-labelledby="triggerId">
                              <a className="dropdown-item" href="/">Home</a>
                              <a className="dropdown-item" href="/associados">Associados</a>
                              <a className="dropdown-item" href="/sobre">Sobre Nós</a>
                              <a className="dropdown-item" href="/perfil">Meu Perfil</a>
                              <a className="dropdown-item" href="/login">Login</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    )
}