# ContactManager Demo

## Description

SinglePageApp Demo with

* [AngularJS](http://angularjs.org/) 
* [JQuery](http://jquery.com/) 
* [Bootstrap](http://twitter.github.com/bootstrap/)
* [ASP.NET MVC](http://www.asp.net/mvc)

## How to execute UnitTests?

To execute UnitTests with [testacular](http://vojtajina.github.com/testacular/) (preferred):

    cd ContactManager.Web
    testacular start testacular-unit.conf.js

You can also use [Chuzpah](http://chutzpah.codeplex.com/) to execute UnitTests within Visual Studio.

INFO: It is currently not possible to exclude tests in Chuzpah, 
so the Plugin tries to executes the e2e tests which fails.

## How to execute e2e Tests?

The only way (currently) is to start the Website within INTEGRATION Configuration
and open the runner.html page.

    http://localhost:20943/Scripts/tests/e2e/runner.html

INFO: executing e2e tests with [testacular](http://vojtajina.github.com/testacular/) is work in process
