import Header from '../assets/components/header'
import Footer from '../assets/components/footer'

export default function Login() {
    return (
        <>
            <Header />

            {/* CONTEÚDO DA PÁGINA */}
            <main>
                <section className="p-3  flex justify-content-center">
                    <div className="row w-75 bg-light rounded-5 light-border">

                        {/* Lado Esquerdo: Imagem */}
                        <div className="col-lg-6 col-sm-12" style={{ padding: 0 }}>
                            <img src="src/assets/img/CC 1-1.png" className="img-fluid dborder d-none d-lg-block h-100" alt="..." />
                            <img src="src/assets/img/CC 16-9.png" className="img-fluid dborder d-lg-none" alt="..." />
                        </div>

                        {/* Lado Direito: Formulário de Login */}
                        <div className="col-12 col-lg-6  flex justify-content-center align-items-center">
                            <form className="w-100 p-3">
                                <div className="text-center mb-4">
                                    <h2 className="fw-bold">Bem-vindo</h2>
                                    <p className="text-muted">Faça login para acessar sua conta</p>
                                </div>
                                {/* Campo: Nome do usuario */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nome De Usuario</label>
                                    <input type="text" className="form-control" id="name" placeholder="Insira o nome de usuario"
                                        required />
                                </div>

                                {/* Campo: Senha */}
                                <div className="mb-2">
                                    <label htmlFor="password" className="form-label">Senha</label>
                                    <input type="password" className="form-control" id="password" placeholder="Sua senha" required />
                                </div>

                                <div className="container-fluid">

                                    <div className="row">
                                        <div className="col-11">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="termos"
                                                    name="termos de servicos" value="aceito" />
                                                <label className="form-check-label">Li e aceito os <a href="#">termos de
                                                    serviço</a></label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-7">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="lembrar"
                                                    name="lembre de mim" value="lembrar" />
                                                <label className="form-check-label">Lembre de mim</label>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-success w-100 mb-1">Entrar</button>
                                    <div className="row text-center">
                                        <div className="col-12">
                                            <a href="#">
                                                Esqueci minha senha</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Botão de Login */}

                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}