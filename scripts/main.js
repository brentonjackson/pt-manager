(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-training-session="form"]';
    var CHECKLIST_SELECTOR = '[data-training-session="checklist"]';
    var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
    var App = window.App;
    var Gym = App.Gym;
    var DataStore = App.DataStore;
    var RemoteDataStore = App.RemoteDataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;
    var remoteDS = new RemoteDataStore(SERVER_URL);
    var myGym = new Gym('midtown', remoteDS);
    window.myGym = myGym;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myGym.completeSession.bind(myGym));
    var formHandler = new FormHandler(FORM_SELECTOR);
    
    formHandler.addSubmitHandler( function (data) {
        myGym.createSession.call(myGym, data);
        checkList.addRow.call(checkList, data);
    });
    formHandler.addInputHandler(Validation.isCompanyEmail);
})(window);

