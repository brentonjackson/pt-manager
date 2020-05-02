// module for managing gym's personal training
// using es5 syntax for widespread support


(function (window) {
    'use strict';
    var App = window.App || {};
    
    // gym constructor
    function Gym(gymId, db) {
        this.gymId = gymId;
        this.db = db;
    }
    
    // adding methods to constructor
    Gym.prototype.createSession = function (session) {
        console.log('Adding session for ' + session.emailAddress);
        this.db.add(session.emailAddress, session);
    };
    // client Id will be their emails from here on out
    Gym.prototype.completeSession = function (clientId) {
        console.log('Completing session for ' + clientId);
        this.db.remove(clientId);
    };
    Gym.prototype.printSessions = function() {
        var clientIdArray = Object.keys(this.db.getAll());
        
        console.log('Gym #' + this.gymId + ' has pending sessions:');
        // need to bind this (Gym instance) to the foreach f'n to use value of 'this'
        clientIdArray.forEach(function(id) {
            console.log(this.db.get(id));
        }.bind(this));
    };
    
    App.Gym = Gym;
    window.App = App;
})(window);

