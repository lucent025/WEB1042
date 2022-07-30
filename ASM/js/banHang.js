var sum = 0;
var products = document.querySelector("#products");
var checkBoxes = products.querySelectorAll("input[type=checkbox]");
var masterCheck = document.querySelector("#masterCheck");
var checkBoxesList = transformToArray(checkBoxes);
var quan = document.querySelectorAll("input[type=text]");


checkBoxesList.map((key) => {
  sum += +(checkBoxes[key].value * quan[key].value);
  checkBoxes[key].addEventListener("change", function () {
    let checkedLength = transformToArray(
      products.querySelectorAll("input:checked")
    ).length;
    masterCheck.checked = checkedLength === checkBoxesList.length;
  });
});

masterCheck.addEventListener("change", function () {
  checkBoxesList.map((key) => (checkBoxes[key].checked = this.checked));
});

function transformToArray(element) {
  return Object.keys(element);
}