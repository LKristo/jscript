// J2 app.js

// J2 greetr.jr
(function(global, $) { // funktsioon mis viitab jquery objektile as $.

}(window, jQuery));

//
//
//

// J3 app.js
var g = G$('John', 'Doe'); // uus objekt mis kasutab greetr raamistikku
console.log(g); // väljastab g

// J3 greetr.jr
(function(global, $) {

    var Greetr = function(firstName, lastName, language) { // uus muutuja mille funktsioonil on kolm parameetrit: eesnimi, perenimi, keel
        return new Greetr.init(firstName, lastName, language);   // toob välja greetr objekti
    }

    Greetr.prototype = {}; // Greetri prototüüp

    Greetr.init = function(firstName, lastName, language) { // funktsiooni käivitamine

        var self = this; // selle faili muutuja
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));

//
//
//

// J4 app.js
var g = G$('John', 'Doe');
g.greet().setLang('es').greet(true); // kutsub välja greetr.js funktsiooni millel on vastav keel ja tervitus on pantud trueks

// J4 greetr.js
(function(global, $) {

    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    var supportedLangs = ['en', 'es'];

    var greetings = { // võtmesõnaga array,
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    Greetr.prototype = { // funktsioonide scope chain

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) { // funktsioon mis tervitab formaalselt, kui on formaalne väljakutsuja
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() { // väljastab täisnime ja kontrollib keelt
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function(lang) { // keele valiku funktsioon
            this.language = lang;

            this.validate();

            return this;
        }

    };

    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr; // globaalse greetr funktsiooni avalikustamine (ei ole peidetud)

}(window, jQuery));

//
//
//

// J5 app.js
var g = G$('John', 'Doe');

g.greet().setLang('es').greet(true).log(); // nüüd logib selle ka

// j5 Greetr.js
(function(global, $) {

    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    Greetr.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language)  === -1) { // testib kas kasutusel on õige keel en/es
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal) { // Väike test kui midagy peaks juhtuma jQuery-ga
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }

    };

    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));

//
//
//

// J6 app.js
var g = G$('John', 'Doe');

g.greet().setLang('es').greet(true).log();

// J6 greetr.js
(function(global, $) {

    // 'new' an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en', 'es'];

    // informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    // prototype holds methods (to save memory space)
    Greetr.prototype = {

        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
            if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";
            }
        },

        // retrieve messages from object by referring to properties using [] syntax
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // chainable methods return their own containing object
        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            // make chainable
            return this;
        },

        setLang: function(lang) {

            // set the language
            this.language = lang;

            // validate
            this.validate();

            // make chainable
            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            // determine the message
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            // inject the message in the chosen place in the DOM
            $(selector).html(msg);

            // make chainable
            return this;
        }

    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();

    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));

//
//
//

// J7 app.js
// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('John', 'Doe');

// use our chainable methods
g.greet().setLang('es').greet(true).log();

// let's use our object on the click of the login button
$('#login').click(function() { // funktsioon mis käivitub klikiga

    // create a new 'Greetr' object (let's pretend we know the name from the login)
    var loginGrtr = G$('John', 'Doe');

    // hide the login on the screen
    $('#logindiv').hide(); // peidab elemendi

    // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});

// J7 Greetr.js
;(function(global, $) {

    // 'new' an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en', 'es'];

    // informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    // prototype holds methods (to save memory space)
    Greetr.prototype = {

        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
            if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";
            }
        },

        // retrieve messages from object by referring to properties using [] syntax
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // chainable methods return their own containing object
        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            // make chainable
            return this;
        },

        setLang: function(lang) {

            // set the language
            this.language = lang;

            // validate
            this.validate();

            // make chainable
            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            // determine the message
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            // inject the message in the chosen place in the DOM
            $(selector).html(msg);

            // make chainable
            return this;
        }

    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();

    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));

// the end