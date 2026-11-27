import Header from '../assets/components/header'
import Footer from '../assets/components/footer'
import Input from '../assets/components/input'

export default function Login() {
    return (
        <>
            <Header />

            {/* CONTEÚDO DA PÁGINA */}
            <main>
                <section className="flex justify-content-center">
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
                                    <p className="text-faint-d mb-0 hidden md:block">Caso já tenha uma conta, acesse-a aqui</p>
                                    <small className="text-faint-d">Caso não tenha uma conta, é necessário assistenca pra criá-la <a className="medium-link m-0" href="#">Aqui</a>.</small>
                                </div>
                                {/* CPF */}
                                <Input label='CPF' placeholder='000.000.000-00' minLenght={11} maxLenght={11} obrigatory />

                                {/* Senha */}
                                <Input label='Senha' placeholder='Senha (preferivelmente) segura aqui' minLenght={6} maxLenght={18} password obrigatory
                                    obs='Caso seja seu primeiro acesso, use a senha gerada que foi enviada ao seu e-mail.' />

                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="lembrar"
                                                    name="lembre de mim" value="lembrar" />
                                                <label className="form-check-label">Lembre de mim</label>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-success w-100 mb-1 rounded-pill">Entrar</button>
                                    <div className="row text-center">
                                        <div className="col-12">
                                            <a className="dark-link" href="#">Esqueci minha senha</a>
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