Ember
=====

* Don't put a space between the opening handlebars braces and the variable.

Testing
-------

* Visually separate the setup, exercise and assertion phases by:
  * Preferring sequential calls to asynchronous helpers ([sample][helpers])
  * Nesting assertions within an `andThen` block instead of a chained `.then` block ([sample][assertions])

[helpers]: sample.js#L2-L3
[assertions]: sample.js#L5-L9
