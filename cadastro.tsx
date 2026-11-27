import Header from '../assets/components/header'
import Footer from '../assets/components/footer'
import Input from '../assets/components/input'


export default function Cadastro(){
    return(
        <>
            <Header/>
            <main>
                <section className="flex justify-content-center">
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
                            {
                                /*
                                 * Itens a se ter: ID!, email', senha!, perms, nome', dataNasc, endereço', telefone*, cpf', foto*
                                 */
                            }
                            <form>

                                <div className="row">

                                    {/* Nome */}
                                    <Input label='Nome Completo' largura={6} placeholder='Digite seu nome completo' obrigatory/>

                                    {/* CPF */}
                                    <Input label='CPF' largura={3} placeholder='000.000.000-00' minLenght={11} maxLenght={11} obrigatory/>

                                    {/* Endereço */}
                                    <Input label='Data de Nascimento' largura={3} placeholder='Digite sua senha' date obrigatory/>



                                    {/* E-mail */}
                                    <Input label='E-mail' largura={6} placeholder='nome@email.com' email obrigatory/>

                                    {/* Telefone */}
                                    <Input label='Telefone' largura={6} placeholder='(11) 99999-9999' minLenght={11} maxLenght={11} tel/>



                                    {/* Endereço */}
                                    <Input label='Endereço' largura={6} placeholder='Confirme sua senha' obrigatory/>

                                    {/* Upload Foto */}
                                    <Input label='Foto de Perfil' largura={6} placeholder='fotinha UwU' file />

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
