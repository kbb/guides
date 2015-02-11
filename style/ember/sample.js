test("checks the box", function() {
  visit("/");
  click(".check-box");

  andThen(function() {
    var checkBox = find(".check-box");

    ok(checkBox.prop("checked"), "box is checked");
  });
});
