
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

  <html>
  <head></head>
  <body>
  <p id="p1">
  
  </p>
    <script type="text/javascript">
      (async () => {
        const response = await fetch(
          'https://parseapi.back4app.com/classes/City?order=name',
          {
            headers: {
              'X-Parse-Application-Id': 'mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja', // This is the fake app's application id
              'X-Parse-Master-Key': 'TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH', // This is the fake app's readonly master key
            }
          }
        );
        const data = await response.json(); // Here you have the data that you need
        console.log(JSON.stringify(data, null, 2));
              document.getElementById("p1").textContent = JSON.stringify(data);

      
      })();
    </script>
  </body>
</html>

<input name="country" list="countries" >
<datalist id="countries" >
</datalist>

<p id="p1">
    
</p>

@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: #ccc;
  }
}

async function getData() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          var data1 = [];
          var data2 = [];
          //var data1 = data.map((item) => item.name && item.capital));

          data.forEach(function(item) {
            //data1.push(item.name, item.capital);
                   data1.push(item.name);

          });
          console.log(data1);
          var data2 = data.map(({
            name,
            area
          }) => ({
            name,
            area
          }));
          console.log(data2);

          //console.log(data1);
          console.log('typeof data1: ' + typeof data1);
          console.log('typeof data2: ' + typeof data2);
          var list = document.getElementById('countries');

          data1.forEach(function(item) {
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

            document.getElementById("p1").textContent = JSON.stringify(data1, [
              "name",
              "capital",
            ]);

            //});
          });
        }; getData();


<input name="country" list="countries" >
<datalist id="countries" >
</datalist>

<p id="p1">
    
</p>

@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: #ccc;
  }
}

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


