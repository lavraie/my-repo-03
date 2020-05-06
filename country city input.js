<input id="input01" name="car" list="anrede" onchange="inputChanged(event)"></input>
<datalist id="anrede"></datalist>

<input id="inputCityID" name="inputCityN" list="cityList" onchange="inputCityChanged(event)"></input>

<datalist id="cityList"></datalist>


async function getData() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var data1 = [];
        var data2 = [];
  
        data.forEach(function (item) {
            data1.push(item.name);
  
        });
        var data2 = data.map(({ name, area }) => ({ name, area }));
  //console.log(data2);
  var result = data2.filter((x)=>x.name.match(/[TM]/));
    //console.log('result ' + JSON.stringify(result));

  
  
  var list = document.getElementById('anrede');
  
  data1.forEach(function(item){
     var option = document.createElement('option');
     option.value = item;
     list.appendChild(option);
  });
  
        });

  
  }
  
  function inputChanged(event){
  var data4 = document.getElementById("input01");
  console.log(data4.value);
      getData1();

  }
  
  getData();
  
  async function getData1() {
      var data4 = document.getElementById("input01");
  console.log(data4.value);

    fetch('https://datahub.io/core/world-cities/r/world-cities.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        var data2 = data.map(({
          country, name
        }) => ({
          country, name
  
        }));
        var data3 = data2.filter(function(item) {
          return item.country == data4.value;
        });
        var data5 = data3.reverse().map(({name} )=>({name}))
        console.log(data5);
        
        var list = document.getElementById('cityList');
  var data6=[];
  data5.forEach(function (item) {
            data6.push(item.name);
  data6.forEach(function(item){
     var option = document.createElement('option');
     option.value = item;
     list.appendChild(option);
  });
  
  
  
        
  
  
        });
      
  });
  };
  
    function inputCityChanged(){ var data4 = document.getElementById("inputCityID");
  console.log(data4.value);
    
    
    }

  
    
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title></title>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta name="robots" content="noindex, nofollow">
  <meta name="googlebot" content="noindex, nofollow">
  <meta name="viewport" content="width=device-width, initial-scale=1">


  <script
    type="text/javascript"
    src="/js/lib/dummy.js"
    
  ></script>

    <link rel="stylesheet" type="text/css" href="/css/result-light.css">


  <style id="compiled-css" type="text/css">
      
  </style>

</head>
<body>
    <p id="p1">
    
</p>

<ol id="ul1">

</ol>

  <!-- TODO: Missing CoffeeScript 2 -->

  <script type="text/javascript">//<![CDATA[


async function getData() {
    fetch('https://datahub.io/core/world-cities/r/world-cities.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        var data2 = data.map(({
          name
        }) => ({
          name
  
        }));
        var data3 = data.filter(function(item) {
          return item.country == "Belgium" || item.country == "France";
        });
        console.log(data3);
        console.log(typeof data3);
  
  
  
        data3.reverse().forEach(function(item) {
  
          const newElement = document.createElement("li");
          const eventList = document.getElementById("ul1");
  
          newElement.innerHTML = JSON.stringify(item.name + " " + item.country);
          eventList.appendChild(newElement);
  
  
        });
      })
  };
  
  getData();
  


  //]]></script>

  <script>
    // tell the embed parent frame the height of the content
    if (window.parent && window.parent.parent){
      window.parent.parent.postMessage(["resultsFrame", {
        height: document.body.getBoundingClientRect().height,
        slug: ""
      }], "*")
    }

    // always overwrite window.name, in case users try to set it manually
    window.name = "result"
  </script>
</body>
</html>

  
function removeOptions(selectElement) {
   var i, L = selectElement.options.length - 1;
   for(i = L; i >= 0; i--) {
      selectElement.remove(i);
   }
}

// using the function:
removeOptions(document.getElementById('DropList'));


async function getData() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var data1 = [];
        var data2 = [];
  
        data.forEach(function (item) {
            data1.push(item.name);
  
        });
        var data2 = data.map(({ name, area }) => ({ name, area }));
  //console.log(data2);
  var result = data2.filter((x)=>x.name.match(/[TM]/));
    //console.log('result ' + JSON.stringify(result));

  
  
  var list = document.getElementById('anrede');
  
  data1.forEach(function(item){
     var option = document.createElement('option');
     option.value = item;
     list.appendChild(option);
  });
  
        });

  
  }
  
  function inputChanged(event){
  var data4 = document.getElementById("input01");
  console.log(data4.value);
      getData1();

  }
  
  getData();
  
  async function getData1() {
      var data4 = document.getElementById("input01");
  console.log(data4.value);

    fetch('https://datahub.io/core/world-cities/r/world-cities.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        var data2 = data.map(({
          country, name
        }) => ({
          country, name
  
        }));
        var data3 = data2.filter(function(item) {
          return item.country === data4.value;
        });
        var data5 = data3.reverse().map(({name} )=>({name}))
        console.log(data5);
        
        var list1 = document.getElementById('cityList');
  var data6=[];
  data5.forEach(function (item) {
            data6.push(item.name);
  data6.forEach(function(item){
     var option = document.createElement('option');
     option.value = item;
     list1.appendChild(option);
  });
  
  
  
        
  
  
        });
      
  });
  };
  
    function inputCityChanged(){ var data4 = document.getElementById("inputCityID");
  console.log(data4.value);
  
  document.getElementById('cityList').length = 0;
    
    }

  
<label for="countrySelect">Choose a country:</label>
<select id="countrySelect" onChange="countrySelected()" ></select>

#countrySelect{
 width: 150px;   
}

#countrySelect option{
 width: 150px;   
}

async function getData() {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var data1 = [];
      var data2 = [];

      var data2 = data.map(({
       name

      }) => ({
        name

      }));



      data2.forEach(function(item) {
        var option = document.createElement('option');
        option.text = item.name.toString();
         document.getElementById('countrySelect').add(option);
      });

    });





}

getData();

function countrySelected(){
var el = document.getElementById('countrySelect').value;
console.log(el);
}