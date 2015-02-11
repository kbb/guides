JavaScript
==========

[Sample](sample.js)

* Prefer ES6 classes over library provided classes.
* Use strict equality checks (`===` and `!==`) except when comparing against
  (`null` or `undefined`).
* Prefer [arrow functions] `=>`, over the `function` keyword except when
  defining classes or methods.
* Use semicolons at the end of each statement.
* Prefer double quotes.
* Use `PascalCase` for classes, `lowerCamelCase` for variables and functions,
  `SCREAMING_SNAKE_CASE` for constants, `_singleLeadingUnderscore` for private
  variables and functions.
* Prefer [template strings] over string concatenation.
* Prefer promises over callbacks.
* Prefer array functions like `map` and `forEach` over `for` loops.
* Use `const` to declare variables.
* Use `let` if you have to rebind variables.
* Avoid `var` when declaring variables.

[template strings]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
[arrow functions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
