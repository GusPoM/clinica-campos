import Header from '../assets/components/header'
import Footer from '../assets/components/footer'
import LinkButton from '../assets/components/linkButton'

export default function Perfil(){
    return(
        <>
            <Header />
        
            {/* CONTEÚDO DA PÁGINA */}
            <main>
            <section className="p-3  flex justify-content-center">
                <div className="row m-1 sm:w-3/4 bg-light rounded-5 light-border overflow-hidden">

                    {/* Conteúdo Principal */}
                    <div className="col-12 p-5">

                        {/* Cabeçalho */}
                        <div className="flex justify-between items-center mb-4 flex-wrap">
                            <div>
                                <p className="text-green-el font-bold text-3xl">Meu Perfil</p>
                                <p className="text-faint-d mb-0">Informações pessoais do paciente</p>
                            </div>
                            
                            <LinkButton href="#" texto="Editar Perfil" roudedPill outline />
                        </div>

                        {/* Card Perfil */}
                        <div className="border-0 shadow-sm rounded-4 p-4 mb-4">
                            <div className="flex flex-col lg:flex-row items-center">

                                {/* Foto do Usuário */}
                                <figure className="max-w-full text-center mb-3 mb-md-0">
                                    <img src="src/assets/img/user-missing.jpg"
                                        className="rounded-circle img-fluid border-3 border-success"
                                        style={{width: '140px', height: '140px', objectFit: 'cover', margin: 'auto'}} />
                                </figure>

                                {/* Informações */}
                                <div className="w-full md:w-3/4 text-center">
                                    <h3 className="fw-bold mb-1">Maria Silva</h3>

                                    <span className="badge bg-success mb-3">
                                        Paciente Premium
                                    </span>

                                    <div className="flex flex-col sm:flex-row">
                                        <div className="sm:w-1/2 mb-3">
                                            <label className="text-green-el font-semibold">E-mail</label>
                                            <p className="text-green-d mb-0">
                                                maria@email.com
                                            </p>
                                        </div>

                                        <div className="sm:w-1/2 mb-3">
                                            <label className="text-green-el font-semibold">Telefone</label>
                                            <p className="text-green-d mb-0">
                                                (11) 98765-4321
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row">
                                        <div className="sm:w-1/2 mb-3">
                                            <label className="text-green-el font-semibold">Data de nascimento</label>
                                            <p className="text-green-d mb-0">
                                                15/08/1998
                                            </p>
                                        </div>
                                        <div className="sm:w-1/2 mb-3">
                                            <label className="text-green-el font-semibold">Cidade</label>
                                            <p className="text-green-d mb-0">
                                                São Paulo - SP
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cards Informativos */}
                        <div className="flex flex-col md:flex-row">

                            {/* Consultas */}
                            <div className="sm:w-1/3 m-3">
                                <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
                                    <label className="text-green-el font-bold text-4xl sm:text-3xl lg:text-5xl">5</label>
                                    <p className="text-muted mb-0">
                                        Consultas realizadas
                                    </p>
                                </div>
                            </div>

                            {/* Próxima Consulta */}
                            <div className="sm:w-1/3 m-3">
                                <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
                                    <label className="text-green-el font-bold text-4xl sm:text-3xl lg:text-5xl">28/05</label>
                                    <p className="text-muted mb-0">
                                        Próxima consulta
                                    </p>
                                </div>
                            </div>

                            {/* Tratamentos */}
                            <div className="sm:w-1/3 m-3">
                                <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
                                    <label className="text-green-el font-bold text-4xl sm:text-3xl lg:text-5xl">2</label>
                                    <p className="text-muted mb-0">
                                        Tratamentos ativos
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Próximo Agendamento */}
                        <div className="card border-0 shadow-sm rounded-4 p-4 mt-4">
                            <p className="text-green-el font-bold text-3xl mb-3">
                                Próximo Agendamento
                            </p>

                            <div className=" flex justify-content-between align-items-center flex-wrap">
                                <div>
                                    <p className="mb-1 fw-semibold">
                                        Consulta de rotina
                                    </p>

                                    <p className="text-muted mb-1">
                                        Dra. Juliana Costa
                                    </p>

                                    <p className="text-muted mb-0">
                                        28/05/2026 às 14:30
                                    </p>
                                </div>

                                <LinkButton href="#" texto="Ver detalhes" roudedPill outline />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
            
            <Footer />
        </>
    )
}