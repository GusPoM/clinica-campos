import Header from '../assets/components/header'
import Footer from '../assets/components/footer'
import Input from '../assets/components/input'


export default function Cadastro(){
    return(
        <>
            <Header/>
            <main>
                <section className="p-3  flex justify-content-center">
                    <div className="row w-75 bg-light rounded-5 light-border overflow-hidden">

                        {/* Conteúdo Principal */}
                        <div className="col-12 p-5">

                            {/* Cabeçalho */}
                            <div className="text-center mb-5">
                                <h2 className="fw-bold text-success">
                                    Cadastro de Perfil
                                </h2>

                                <p className="text-muted">
                                    Preencha suas informações para criar sua conta
                                </p>
                            </div>

                            {/* Formulário */}
                            <form>

                                <div className="row">

                                    {/* Nome */}
                                    <Input nome='Nome Completo' largura={6} placeholder='Digite seu nome completo'/>

                                    {/* CPF */}
                                    <Input nome='CPF' largura={6} placeholder='000.000.000-00' minLenght={11} maxLenght={11} />
                                    
                                    {/* E-mail */}
                                    <Input nome='E-mail' largura={6} placeholder='nome@email.com'/>

                                    {/* Telefone */}
                                    <Input nome='Telefone' largura={6} placeholder='(11) 99999-9999' minLenght={11} maxLenght={11}/>
                                    
                                    {/* Senha */}
                                    <Input nome='Senha' largura={6} placeholder='Digite sua senha'/>

                                    {/* Confirmar Senha */}
                                    <Input nome='Confirmar Senha' largura={6} placeholder='Confirme sua senha'/>

                                    {/* Upload Foto */}
                                    <div className="col-12 mb-4">
                                        <label className="form-label fw-semibold">
                                            Foto de Perfil
                                        </label>

                                        <input type="file"
                                            className="form-control rounded-4 py-2"/>
                                    </div>

                                </div>

                                {/* Botões */}
                                <div className=" flex justify-content-center gap-3 mt-4 flex-wrap">

                                    <button type="reset"
                                            className="btn btn-outline-secondary rounded-pill px-5 py-2">
                                        Limpar
                                    </button>

                                    <button type="submit"
                                            className="btn btn-success rounded-pill px-5 py-2">
                                        Criar Conta
                                    </button>

                                </div>

                            </form>

                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </> 
    )
}
