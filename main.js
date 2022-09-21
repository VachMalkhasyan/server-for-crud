const express = require("express");

const app = express();

// CREATE
app.post("/events", (req, res) => {
    const id = `event_${Date.now()}_${Math.random()}`;
    const newEvent = {
        id,
        ...req.body
    };

    events[id] = newEvent;
    res.send(newEvent);
});





// SEARCH
app.get("/events", (req, res) => {
    const {type, q} = req.query;
    const results = Object.values(events).filter(event => {
        if(type !== undefined && type !== event.type) {
            return false;
        }
        if(q !== undefined && event.name.search(new RegExp(q, 'i')) === -1) {
            return false;
        }
        return true;
    });
    res.send(results);
});





app.listen(3000);