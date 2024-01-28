
//----------
// event mixin:
//----------

/*
    event_mixin
        data: store the handlers:
            eventHandlers["event_name"] = []
            eventHandler["event_name"].push( handler )
        on:    <- add a nandler to event_name
            obj.on("select", value=> console.log(value) );
        off:   <- delete a handler from event_name

        trigger:    <- call all handlers for event_name
            obj.trigger("select", 123);
*/


let eventMixin =
{
    on(eventName, handler)  // subscibe:
    {
        if(!this._eventHandlers) {this._eventHandlers = {};}
        if(!this._eventHandlers[eventName]) {this._eventHandlers[eventName] = [];}

        this._eventHandlers[eventName].push(handler);
    },

    off(eventName, handler)   // unsubscribe:
    {
        let handlers = this._eventHandlers && this._eventHandlers[eventName];
        if(!handlers) {return;}
        for(let i = 0; i < handlers.length; i++)
        {
            if( handlers[i] === handler ) {handlers.splice(i--, 1);}
        }
    },

    // generate message ( this.trigger('select', data1, data2) ):
    trigger(eventName, ...args)
    {
        if(!this._eventHandlers || !this._eventHandlers[eventName]) {return;}
        this.handler(eventName, args);
    },

    handler(eventName, ...args)  // call all seted handlers:
    {
        this._eventHandlers[eventName].forEach(handler => handler.apply(this,args));
    },

}; //mix:EventMixin

class Menu{};
let menu = new Menu();

Object.assign(Menu.prototype, eventMixin);

// subscribe onto event:
menu.on("select", value => console.log(value));

// generate events:
menu.trigger("select", 123);
menu.trigger("select", 555);

