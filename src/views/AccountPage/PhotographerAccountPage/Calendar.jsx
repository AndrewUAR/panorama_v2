import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import './Calendar.css';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import styles from '../../../assets/jss/views/AccountPageStyle/calendarStyle.js';

const useStyles = makeStyles(styles);

const Calendar = () => {
  useEffect(() => {
    let draggableEl = document.getElementById('external-events');
    new Draggable(draggableEl, {
      itemSelector: '.fc-event',
      eventData: function (eventEl) {
        let title = eventEl.getAttribute('title');
        let id = eventEl.getAttribute('data');
        let color = eventEl.getAttribute('color');
        let display = eventEl.getAttribute('display');
        return {
          title: title,
          id: id,
          display: display,
          color: color
        };
      }
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(new Date().getDay());
    // eslint-disable-next-line
  }, []);

  const classes = useStyles();

  const events = [
    {
      id: 1,
      title: 'Available hours +Studio',
      color: '#ffab91',
      display: 'block'
    },
    {
      id: 2,
      title: 'Available hours',
      color: '#ffff00',
      display: 'block'
    },
    {
      id: 3,
      title: 'Whole Day Event',
      color: '#76ff03',
      display: 'block'
    }
  ];

  const handleEventClick = (info) => {
    // const event = events.find(e => e.id === parseInt(info.event.id, 10));
    // selected(event);
    info.el.setAttribute('data-toggle', 'modal');
    info.el.setAttribute('data-target', '#selection-modal');
  };

  const oneDay = 60 * 60 * 24 * 1000;

  return (
    <GridContainer className={classes.container}>
      <GridItem xs={12} sm={3} md={3}>
        <div
          className={classes.events}
          id="external-events"
          style={{
            padding: '10px',
            width: '80%',
            height: 'auto',
            maxHeight: '-webkit-fill-available'
          }}
        >
          <p align="center" className={classes.title}>
            <strong>Drag and drop into calendar</strong>
          </p>
          {events.map((event, index) => (
            <div key={index} className="fc-event" title="" color={event.color}>
              <div
                className={classes.event}
                style={{ backgroundColor: event.color }}
              >
                {event.title}
              </div>
            </div>
          ))}
        </div>
      </GridItem>
      <GridItem xs={12} sm={9} md={9} className={classes.calender}>
        <FullCalendar
          initialView="timeGridWeek"
          plugins={[timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            right: 'prev,next',
            center: 'title',
            left: 'timeGridWeek,timeGridDay'
          }}
          events={[]}
          firstDay={new Date().getDay() + oneDay}
          eventClick={handleEventClick}
          eventLimit="true"
          slotMinTime="01:00:00"
          initialDate={Date.now() + oneDay}
          validRange={{ start: Date.now() + oneDay }}
          now={Date.now() + oneDay}
          nowIndicator={true}
          droppable={true}
          editable={true}
          eventOverlap={false}
          forceEventDuration={true}
          eventConstraint={{
            startTime: '00:00', // a start time (10am in this example)
            endTime: '24:00'
          }}
          eventReceive={function (info) {
            console.log(info);
          }}
          eventResize={function (info) {
            console.log(info);
          }}
          eventResizableFromStart={true}
          // eventColor='#378006'
        />
      </GridItem>
    </GridContainer>
  );
};

export default Calendar;
