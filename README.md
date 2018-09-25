# ContactManager Demo

## Description

SinglePageApp Demo with

* [AngularJS](http://angularjs.org/) 
* [JQuery](http://jquery.com/) 
* [Jasmine](https://jasmine.github.io/) 
* [Bootstrap](http://twitter.github.com/bootstrap/)
* [ASP.NET MVC](http://www.asp.net/mvc)

## How to execute UnitTests?

To execute UnitTests with [testacular](http://vojtajina.github.com/testacular/) (preferred):

    cd ContactManager.Web
    testacular start testacular-unit.conf.js

You can also use [Chuzpah](http://chutzpah.codeplex.com/) to execute UnitTests within Visual Studio.

INFO: It is currently not possible to exclude tests in Chuzpah, 
so the Plugin tries to executes the e2e tests which will fail.

## What about Code Coverage?

Done with [testacular](http://vojtajina.github.com/testacular/) and [istanbul](https://github.com/yahoo/istanbul) integration. When ever you execute the UnitTests with testacular you get Code Coverage in html Format in the "coverage" folder.

## How to execute e2e Tests?

More on e2e testing can be found [here](http://docs.angularjs.org/guide/dev_guide.e2e-testing)

Build the Web Application in "Integration" Configuration and start the WebServer (CTRL-F5 / F5)

    cd ContactManager.Web
    testacular start testacular-e2e.conf.js

To run e2e Tests in your browser open your favorite browser and open http://localhost:20943/Scripts/tests/e2e/runner.html




