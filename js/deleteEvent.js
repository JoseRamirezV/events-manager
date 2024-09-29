const deleteEvent = (id) => {
   const eventId = id.split('_')[1];
   const li = document.getElementById(eventId);

   delete events[eventId];
   li.remove();

   window.localStorage.setItem('events', JSON.stringify(events));
};
