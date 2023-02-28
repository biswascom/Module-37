function callback(event, name){
    event(name);
};

function events(name){
    console.log('Hello', name);
};

callback(events, 'Alamin');