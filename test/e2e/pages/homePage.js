'use strict';

/*global element */
/*global by */


var HomePage = require('./page');
//  this.nameInput = element(by.model('yourName'));
//  this.greeting = element(by.binding('yourName'));
//  this.usTabContent = element(by.css('[module=app-us] .tab-content'));
//  this.tabs = element.all(by.repeater('pane in panes'));


HomePage.prototype.footerAbout = function() { return element(by.id('about-footer')); };

module.exports = new HomePage('/', 'home');