document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,listWeek'
      },
      events: [
        { title: 'Project Review', start: '2024-03-05', end: '2024-03-06', priority: 'medium' },
        { title: 'Team Meeting', start: '2024-03-12T11:00:00', priority: 'high' },
        { title: 'Important Client Demo', start: '2024-03-21T14:30:00', priority: 'high'},
        { title: 'Website Launch', start: '2024-03-27', priority: 'low' },
        { title: 'Quarterly Planning', start: '2024-03-09', end: '2024-03-10', priority: 'medium' },
        { title: 'Conference', start: '2024-03-16', end: '2024-03-18', priority: 'low' },
        { title: 'Doctor Appointment', start: '2024-03-14T10:30:00' },
        { title: 'Birthday Party', start: '2024-03-29T18:00:00'}
      ],
      eventDidMount: function (info) { 
        if (info.event.extendedProps.priority) {
          info.el.classList.add(
            `fc-event-priority-${info.event.extendedProps.priority}`
          );
        }
      }
    });
  
    calendar.render();
  });
  