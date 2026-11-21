import Header from '../assets/components/header'
import Footer from '../assets/components/footer'


export default function Agenda(){
    return(
        <>
            <Header />
        
            {/* CONTEÚDO DA PÁGINA */}
            
            <main>
                {/* SALAS */}
                <div className="container pt-4">
                    <div className="room-selector">

                        <div className=" flex flex-wrap gap-3 justify-content-center">
                            <button className="btn btn-success room-btn active-room"
                                data-room="1"
                                data-doctor="Agenda da Dra. Lívia">
                                Sala 1
                            </button>

                            <button className="btn btn-outline-success room-btn"
                                data-room="2"
                                data-doctor="Agenda do Dr. Clara">
                                Sala 2
                            </button>

                            <button className="btn btn-outline-success room-btn"
                                data-room="3"
                                data-doctor="Agenda da Dra. Antônio">
                                Sala 3
                            </button>

                            <button className="btn btn-outline-success room-btn"
                                data-room="4"
                                data-doctor="Sala Vazia">
                                Sala 4
                            </button>
                        </div>

                        <h3 id="selectedDoctor" className="text-center mt-3 doctor-title">
                            Agenda da Dra. Ana
                        </h3>

                    </div>
                </div>

                {/* CALENDÁRIO */}
                <div className="container py-4">

                    <div className="calendar-container">

                        <div className="calendar">

                            {/* HEADER ANO */}
                            <div className="year-header text-center">

                                <button className="btn btn-outline-success btn-sm left-button">
                                    <i className="fa fa-chevron-left"></i>
                                </button>

                                <span className="year"></span>

                                <button className="btn btn-outline-success btn-sm right-button">
                                    <i className="fa fa-chevron-right"></i>
                                </button>

                            </div>

                            {/* MESES */}
                            <table className="table table-borderless text-center months-table">

                                <tbody>
                                    <tr className="months-row">

                                        <td className="month">Jan</td>
                                        <td className="month">Fev</td>
                                        <td className="month">Mar</td>
                                        <td className="month">Abr</td>
                                        <td className="month">Mai</td>
                                        <td className="month">Jun</td>
                                        <td className="month">Jul</td>
                                        <td className="month">Ago</td>
                                        <td className="month">Set</td>
                                        <td className="month">Out</td>
                                        <td className="month">Nov</td>
                                        <td className="month">Dez</td>

                                    </tr>
                                </tbody>

                            </table>

                            {/* DIAS SEMANA */}
                            <table className="table table-borderless text-center days-table">

                                <tr>
                                    <td className="day">Dom</td>
                                    <td className="day">Seg</td>
                                    <td className="day">Ter</td>
                                    <td className="day">Qua</td>
                                    <td className="day">Qui</td>
                                    <td className="day">Sex</td>
                                    <td className="day">Sab</td>
                                </tr>

                            </table>

                            {/* DIAS DO CALENDÁRIO */}
                            <div className="frame">

                                <table className="table table-borderless text-center dates-table">
                                    <tbody className="tbody"></tbody>
                                </table>

                            </div>

                        </div>

                    </div>

                </div>

                {/* MODAL AGENDA DO DIA */}
                <div className="modal fade" id="eventModal" tabIndex={-1}>

                    <div className="modal-dialog modal-lg modal-dialog-scrollable">

                        <div className="modal-content">

                            <div className="modal-header bg-green-el text-white">

                                <h5 className="modal-title" id="eventModalLabel">
                                    Agenda
                                </h5>

                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>

                            </div>

                            <div className="modal-body">

                                <div id="timeline-container"></div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* MODAL CRUD EVENTO */}
                <div className="modal fade" id="crudModal" tabIndex={-1}>

                    <div className="modal-dialog">

                        <div className="modal-content">

                            <div className="modal-header bg-green-el text-white">

                                <h5 className="modal-title" id="crudTitle">
                                    Evento
                                </h5>

                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>

                            </div>

                            <div className="modal-body">

                                <input type="hidden" id="eventId" />

                                {/* DATA */}
                                <div className="mb-3">
                                    <label className="form-label">Data</label>
                                    <input type="date" className="form-control" id="eventDate" />
                                </div>

                                {/* PACIENTE */}
                                <div className="mb-3">
                                    <label className="form-label">Paciente</label>
                                    <input type="text" className="form-control" id="eventTitle" />
                                </div>

                                {/* TRATAMENTO */}
                                <div className="mb-3">
                                    <label className="form-label">Tratamento</label>
                                    <input type="text" className="form-control" id="eventTreatment" />
                                </div>

                                {/* HORÁRIO INÍCIO */}
                                <div className="mb-3">
                                    <label className="form-label">Horário Início</label>
                                    <input type="time" className="form-control" id="eventTime" />
                                </div>

                                {/* HORÁRIO FIM */}
                                <div className="mb-3">
                                    <label className="form-label">Horário Final</label>
                                    <input type="time" className="form-control" id="eventEndTime" />
                                </div>

                            </div>

                            <div className="modal-footer">

                                <button className="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancelar
                                </button>

                                <button className="btn btn-danger" id="deleteBtn">
                                    Excluir
                                </button>

                                <button className="btn btn-success" id="saveBtn">
                                    Salvar
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </main>
            
            <Footer />
        </>
    )
}