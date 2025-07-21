/** Event emitter class to handle events. */
export default class EventEmitter {
    constructor() {
        this.eventHandlers = {};
    }

   /**
    * Add an event handler.
    * @param {string} eventName - the event to handle.
    * @param {Function} eventHandler - the event handler function.
    */
    on(eventName, eventHandler) {
        this.eventHandlers[eventName] = eventHandler;
    }

   /**
    * Emit an event. 
    * @param {string} eventName - the event to emit.
    * @param ...params - parameters to pass to the event handler. 
    */
    emit(eventName, ...params) {
        this.eventHandlers[eventName]?.call(this, ...params);
    }
}
