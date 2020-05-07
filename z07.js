async function getData() {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var data1 = [];
      var data2 = [];

      var data2 = data.map(({ name }) => ({
        name,
      }));

      data2.forEach(function (item) {
        var option = document.createElement("option");
        option.text = item.name.toString();
        document.getElementById("countrySelect").add(option);
      });
    });
}

getData();

function countrySelected() {
  var el = document.getElementById("countrySelect").value;
  console.log(el);
}
