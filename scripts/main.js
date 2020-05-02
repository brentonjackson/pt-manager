(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-training-session="form"]';
    var App = window.App;
    var Gym = App.Gym;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myGym = new Gym('midtown', new DataStore());
    window.myGym = myGym;
    var formHandler = new FormHandler(FORM_SELECTOR);
    
    formHandler.addSubmitHandler(myGym.createSession.bind(myGym));
    console.log(formHandler);
})(window);

