
//----------
// копирование объектов по значению:
//----------

let user = {name:"John", age:30,};
let perm = {canView:true, canEdit:true,};

// a:
let clone = {};
for(let key in user) {clone[key] = user[key];}
for(let key in perm) {clone[key] = perm[key];}

// b:
Object.assign(clone, user, perm);


// c:
const calendarEvent = {
      title: "some title",
      date: new Date(123),
      attendees: ["Steve"],
};
const copied = structuredClone(calendarEvent);
