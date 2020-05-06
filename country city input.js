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

  
  