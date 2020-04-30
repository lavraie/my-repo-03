async function getData() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var data1 = [];
        data.forEach(function (item) {
          data1.push(item);
        });
        console.log(data1);
        console.log(typeof data1);
  
        console.log(data1[52]);
        console.log(data1[51]);
        //data1.forEach(function(item){
  
        //JSON.stringify(data1);
        //});
  
        /* data1.push(data) */
  
        /* console.log(data) */
  
        /* console.log(data1) */
  
        /* document.getElementById("p1").textContent = JSON.stringify(data) */
        /* document.getElementById("p1").textContent = JSON.stringify((data), ['name', 'capital']) */
  
        document.getElementById("p1").textContent = JSON.stringify(data1, [
          "name",
          "capital",
        ]);
  
        //});
      });
  
  }
    getData();
  
  