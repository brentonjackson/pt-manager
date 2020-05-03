(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-training-session="form"]';
    var CHECKLIST_SELECTOR = '[data-training-session="checklist"]';
    var App = window.App;
    var Gym = App.Gym;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;
    var myGym = new Gym('midtown', new DataStore());
    window.myGym = myGym;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    var formHandler = new FormHandler(FORM_SELECTOR);
    
    formHandler.addSubmitHandler( function (data) {
        myGym.createSession.call(myGym, data);
        checkList.addRow.call(checkList, data);
    });
})(window);

