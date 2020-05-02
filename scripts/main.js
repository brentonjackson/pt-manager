(function (window) {
    'use strict';
    var App = window.App;
    var Gym = App.Gym;
    var DataStore = App.DataStore;
    var myGym = new Gym('midtown', new DataStore());
    window.myGym = myGym;
})(window);

