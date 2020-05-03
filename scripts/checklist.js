(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }
    
    CheckList.prototype.addRow = function (trainingSession) {
        var rowElement = new Row(trainingSession);
        
        this.$element.append(rowElement.$element);
    };
    
    function Row(trainingSession) {
        var $div = $('<div></div>', {
            'data-training-session': 'checkbox',
            'class': 'checkbox'
        });
        
        var $label = $('<label></label>');
        
        var $checkbox = $('<input></input>',  {
            type: 'checkbox',
            value: trainingSession.emailAddress
        });
        
        var description = trainingSession.duration + ' ';
        if (trainingSession.sessionType) {
            description += trainingSession.sessionType + ' ';
        }
        
        description += trainingSession.training + ', ';
        description += ' (' + trainingSession.emailAddress + ')';
        description += ' [' + trainingSession.fitnessLevel + ']';
        
        $label.append($checkbox);
        $label.append(description);
        $div.append($label);
        
        this.$element = $div;
    }
    
    App.CheckList = CheckList;
    window.App = App;
})(window);
