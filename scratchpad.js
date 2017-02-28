"use strict";
var create_event_component_1 = require('./app/events/create-event.component');
exports.appRoutes = [
    { path: 'events/new', component: create_event_component_1.CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
];
function checkDirtyState() {
    return true;
}
//# sourceMappingURL=scratchpad.js.map