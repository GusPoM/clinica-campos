(function ($) {

"use strict";

let selectedDay = null;
let selectedMonth = null;
let selectedYear = null;

let editingEventId = null;

let currentDate = new Date();

let currentRoom = 1;

let event_data = {

    1: {
        events: []
    },

    2: {
        events: []
    },

    3: {
        events: []
    },

    4: {
        events: []
    }
};

$(document).ready(function () {

    $(".right-button").click(() => {

        currentDate.setFullYear(
            currentDate.getFullYear() + 1
        );

        init_calendar(currentDate);
    });

    $(".left-button").click(() => {

        currentDate.setFullYear(
            currentDate.getFullYear() - 1
        );

        init_calendar(currentDate);
    });

    $(".month").click(function () {

        $(".active-month")
            .removeClass("active-month");

        $(this).addClass("active-month");

        currentDate.setMonth(
            $(".month").index(this)
        );

        init_calendar(currentDate);
    });

    $(".room-btn").click(function(){

        $(".room-btn")
            .removeClass("btn-success active-room")
            .addClass("btn-outline-success");

        $(this)
            .removeClass("btn-outline-success")
            .addClass("btn-success active-room");

        currentRoom = parseInt(
            $(this).data("room")
        );

        init_calendar(currentDate);
    });

    $("#saveBtn").click(saveEvent);

    $("#deleteBtn").click(deleteEvent);

    init_calendar(currentDate);
});

function updateActiveMonth(monthIndex){

    $(".month")
        .removeClass("active-month");

    $(".month")
        .eq(monthIndex)
        .addClass("active-month");
}

function init_calendar(date) {

    updateActiveMonth(date.getMonth());

    $(".tbody").empty();

    const month = date.getMonth();
    const year = date.getFullYear();

    const today = new Date();

    const days = new Date(
        year,
        month + 1,
        0
    ).getDate();

    let row = $("<tr></tr>");

    date.setDate(1);

    const firstDay = date.getDay();

    for (let i = 0; i < 42; i++) {

        const day = i - firstDay + 1;

        if (i % 7 === 0 && i !== 0) {

            $(".tbody").append(row);

            row = $("<tr></tr>");
        }

        if (i < firstDay || day > days) {

            row.append(
                "<td class='table-date nil'></td>"
            );

            continue;
        }

        const events = check_events(
            day,
            month + 1,
            year
        );

        const cell = $(`
            <td class="table-date">
                <div class="day-number">
                    ${day}
                </div>

                <div class="day-events"></div>
            </td>
        `);

        // DIA ATUAL
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {

            cell.addClass("active-date");
        }

        // EVENTOS
        if (events.length > 0) {

            const container =
                cell.find(".day-events");

            for (
                let i = 0;
                i < Math.min(events.length, 3);
                i++
            ) {

                container.append(`
                    <span class="event-dot"></span>
                `);
            }

            cell.addClass("event-date");
        }

        // DIA LOTADO
        if (events.length >= 10) {

            cell.addClass("full-date");
        }

        cell.click({

            day,
            month: month + 1,
            year

        }, openDay);

        row.append(cell);
    }

    $(".tbody").append(row);

    $(".year").text(year);
}

function openDay(event) {

    selectedDay = event.data.day;

    selectedMonth = event.data.month;

    selectedYear = event.data.year;

    $("#eventModalLabel").text(
        `Agenda - ${selectedDay}/${selectedMonth}/${selectedYear}`
    );

    renderDay();

    new bootstrap.Modal(
        document.getElementById("eventModal")
    ).show();
}

function isValidTime(time) {

    const start = "08:00";
    const end = "17:00";

    return time >= start && time <= end;
}

function renderDay() {

    const container =
        $("#timeline-container");

    container.empty();

    container.append(`
        <div class="mb-3 text-end">

            <button class="btn btn-success"
                onclick="openCreate('08:00')">

                + Novo agendamento

            </button>

        </div>
    `);

    const events = check_events(
        selectedDay,
        selectedMonth,
        selectedYear
    );

    if (events.length === 0) {

        container.append(`
            <div class="text-muted text-center p-4">

                Nenhum evento neste dia

            </div>
        `);

        return;
    }

    // ordenar por horário
    events.sort((a, b) =>
        a.time.localeCompare(b.time)
    );

    events.forEach(ev => {

        container.append(`
            <div class="event-card card p-4 mb-3">

                <h5 class="text-success">

                    Paciente: ${ev.patient}

                </h5>

                <div>
                    <strong>Tratamento:</strong>
                    ${ev.treatment}
                </div>

                <div class="text-muted mt-2">

                    ${ev.time}
                    →
                    ${ev.endTime}
                    |
                    ${ev.duration} min

                </div>

                <div class="mt-3  flex gap-2">

                    <button class="btn btn-warning btn-sm"
                        onclick="openEdit(${ev.id})">

                        Reagendar

                    </button>

                    <button class="btn btn-danger btn-sm"
                        onclick="deleteEvent(${ev.id})">

                        Cancelar

                    </button>

                </div>

            </div>
        `);
    });
}

window.openCreate = function (hour) {

    editingEventId = null;

    $("#crudTitle").text("Novo Evento");

    $("#eventTitle").val("");
    $("#eventTreatment").val("");
    $("#eventTime").val(hour);
    $("#eventEndTime").val("");

    // 👇 NOVO: preencher data atual do calendário
    const dateStr =
        `${selectedYear}-${String(selectedMonth).padStart(2,'0')}-${String(selectedDay).padStart(2,'0')}`;

    $("#eventDate").val(dateStr);

    $("#deleteBtn").hide();

    new bootstrap.Modal(
        document.getElementById("crudModal")
    ).show();
};

window.openEdit = function (id) {

    const ev =
        event_data[currentRoom]
        .events
        .find(e => e.id === id);

    if (!ev) return;

    editingEventId = id;

    $("#crudTitle").text("Editar Evento");

    $("#eventTitle").val(ev.patient);
    $("#eventTreatment").val(ev.treatment);
    $("#eventTime").val(ev.time);
    $("#eventEndTime").val(ev.endTime);

    // 👇 NOVO: preencher data do evento
    const dateStr =
        `${ev.year}-${String(ev.month).padStart(2,'0')}-${String(ev.day).padStart(2,'0')}`;

    $("#eventDate").val(dateStr);

    $("#deleteBtn").show();

    new bootstrap.Modal(
        document.getElementById("crudModal")
    ).show();
};

function saveEvent() {

    const patient =
        $("#eventTitle").val();

    const treatment =
        $("#eventTreatment").val();

    const time =
        $("#eventTime").val();

    const endTime =
        $("#eventEndTime").val();

    const dateValue = $("#eventDate").val();

    if (!dateValue) {
        alert("Selecione a data");
        return;
    }

    const [year, month, day] = dateValue.split("-").map(Number);

    if (
        !patient ||
        !treatment ||
        !time ||
        !endTime
    ) {

        alert("Preencha todos os campos");

        return;
    }

    if (
        !isValidTime(time) ||
        !isValidTime(endTime)
    ) {

        alert(
            "Horário fora do funcionamento (08:00 - 17:00)"
        );

        return;
    }

    const start = new Date(
        `2000-01-01T${time}`
    );

    const end = new Date(
        `2000-01-01T${endTime}`
    );

    const duration =
        (end - start) / 60000;

    if (duration < 10) {

        alert(
            "Tempo mínimo de 10 minutos"
        );

        return;
    }

    if (duration <= 0) {

        alert("Horário final inválido");

        return;
    }

    const hasConflict =
        event_data[currentRoom]
        .events
        .some(ev => {

            if (
                editingEventId &&
                ev.id === editingEventId
            ) {

                return false;
            }

            if (
                ev.day !== day ||
                ev.month !== month ||
                ev.year !== year
            ) {

                return false;
            }

            return (

                (time >= ev.time &&
                 time < ev.endTime)

                ||

                (endTime > ev.time &&
                 endTime <= ev.endTime)

                ||

                (time <= ev.time &&
                 endTime >= ev.endTime)
            );
        });

    if (hasConflict) {

        alert(
            "Já existe um agendamento neste horário"
        );

        return;
    }

    if (editingEventId) {

        const ev =
            event_data[currentRoom]
            .events
            .find(
                e => e.id === editingEventId
            );

        ev.patient = patient;
        ev.treatment = treatment;
        ev.time = time;
        ev.endTime = endTime;
        ev.duration = duration;

    } else {

        event_data[currentRoom].events.push({

            id: Date.now(),

            patient,
            treatment,
            time,
            endTime,
            duration,

            day,
            month,
            year
        });
    }

    bootstrap.Modal
        .getInstance(
            document.getElementById("crudModal")
        )
        .hide();

    renderDay();

    init_calendar(currentDate);
}

function deleteEvent(id = editingEventId) {

    event_data[currentRoom]
    .events =
        event_data[currentRoom]
        .events
        .filter(e => e.id !== id);

    bootstrap.Modal
        .getInstance(
            document.getElementById("crudModal")
        )
        ?.hide();

    renderDay();

    init_calendar(currentDate);
}

function check_events(day, month, year) {

    return event_data[currentRoom]
        .events
        .filter(e =>

            e.day === day &&
            e.month === month &&
            e.year === year
        );
}

const roomButtons =
    document.querySelectorAll(".room-btn");

const selectedDoctor =
    document.getElementById("selectedDoctor");

roomButtons.forEach(button => {

    button.addEventListener("click", () => {

        roomButtons.forEach(btn => {

            btn.classList.remove(
                "active-room",
                "btn-success"
            );

            btn.classList.add(
                "btn-outline-success"
            );
        });

        button.classList.remove(
            "btn-outline-success"
        );

        button.classList.add(
            "active-room",
            "btn-success"
        );

        selectedDoctor.textContent =
            button.dataset.doctor;
    });
});

})(jQuery);