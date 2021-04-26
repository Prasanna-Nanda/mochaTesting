const assert = require('chai').assert;

const Utility = require('../Utility_user');

var firstnameregex = new RegExp("(^[A-Z]{1})[a-z]{2,}");
var lastnameregex = new RegExp("(^[A-Z]{1})[a-z]{2,}");
var MailIdregex = new RegExp("(^[a-z]{3,}.)|([a-z]{3,})@([a-z]{2,}.[a-z]{2})|(.[a-z]{2})");
var Mobilenumberregex = new RegExp("^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$");
var Passwordregex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

describe('registration', function(){
    it ('firstnameregex', function(){
        assert.equal(Utility.testregex('Prasanna', firstnameregex), true);
    });

        it ('lastnameregex', function(){
            assert.equal(Utility.testregex('Nanda', lastnameregex), true);
        
        });
        it ('MailIdregex', function(){
            assert.equal(Utility.testregex('pras.123@gmail.co.in', MailIdregex), true);
        
        });
        it ('Mobilenumberregex', function(){
            assert.equal(Utility.testregex(9789322924, Mobilenumberregex), true);
        
        });
        it ('Passwordregex', function(){
            assert.equal(Utility.testregex('pRasa12345@&', Passwordregex), true);
        
        });
});
