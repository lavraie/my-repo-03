
<input name="car" list="anrede" />
<datalist id="anrede"></datalist>



async function getData() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var data1 = [];
        var data2 = [];
        //var data1 = data.map((item) => item.name && item.capital));
  
        data.forEach(function (item) {
          //data1.push(item.name, item.capital);
            data1.push(item.name);
  
        });
        console.log(data1);
        var data2 = data.map(({ name, area }) => ({ name, area }));
        console.log(data2);
  
        //console.log(data1);
        console.log("typeof data1: " + typeof data1);
        console.log("typeof data2: " + typeof data2);
  var mycars = ['Herr','Frau'];
  var list = document.getElementById('anrede');
  
  data1.forEach(function(item){
     var option = document.createElement('option');
     option.value = item;
     list.appendChild(option);
  });
  
        //console.log(data1[52]);
        //console.log(data1[51]);
        //data1.forEach(function(item){
  
        //JSON.stringify(data1);
        //});
  
        /* data1.push(data) */
  
        /* console.log(data) */
  
        /* console.log(data1) */
  
        /* document.getElementById("p1").textContent = JSON.stringify(data) */
        /* document.getElementById("p1").textContent = JSON.stringify((data), ['name', 'capital']) */
  
        //document.getElementById("p1").textContent = JSON.stringify(data1, [
         // "name",
         // "capital",
       // ]);
  
        //});
      });
  }
  getData();