
//----------
// пользовательские события:
//----------

event_mine = new Event("click");
elem.dispatchEvent(event_mine);

event_mine = new Event("hello", {bubbles:true});
elem.dispatchEvent(event_mine);

event_mine = new
MouseEvent
(
  "click",    // not an Event!
  {
    bubbles:true, cancelable:true, clientX:100, clientY:100,
  }
);

