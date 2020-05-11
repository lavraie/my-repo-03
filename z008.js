#mapid { height: 480px; }



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
      #mapid { height: 480px; }
  </style>

</head>
<body>
    <!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
   
   <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
   integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
   crossorigin=""></script>

  <title>The HTML5 Herald</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="css/styles.css?v=1.0">

</head>

<body>
  <script src="js/scripts.js"></script>
  
  <div id="mapid"></div>
  <datalist id="datalist">
  
  </datalist>
</body>
</html>

  <!-- TODO: Missing CoffeeScript 2 -->

  <script type="text/javascript">//<![CDATA[


var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);
  
  L.marker([50.5, 0.5]).addTo(mymap);
  
  mymap.flyTo([50, 13, 10]);
  L.marker([50, 13]).addTo(mymap);
  
  
  var littleton = L.marker([50, 13]).bindPopup('This is London, CO.')
  
  var cities = L.layerGroup([littleton]);


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

---------------------------------------------------------------------------

<label for="countrySelect">Choose a country:</label>

<select id="countrySelect" onChange="countrySelected()" ></select>

<label for="citySelect">Choose a city:</label>

<select id="citySelect" onChange="citySelected()" ></select>


#countrySelect{
 width: 150px;   
}

#countrySelect option{
 width: 150px;   
}

#citySelect{
 width: 150px;   
}

#cityySelect option{
 width: 150px;   
}

async function getData() {
  fetch("https://restcountries.eu/rest/v2/all")
    .then(response => {
      return response.json();
    })
    .then(data => {
      var data1 = [];
      var data2 = [];

      var data2 = data.map(({ name }) => ({
        name,
      }));

      data2.forEach(function (item) {
        var option = document.createElement("option");
        option.text = item.name.valueOf();
        document.getElementById("countrySelect").add(option);
      });
    });
}

getData();

function countrySelected() {
  var el = document.getElementById("countrySelect").value;
  console.log(el);
}


----------------------------------------------------------------------------

<label for="countrySelect">Choose a country:</label>
<select id="countrySelect" onselect="countrySelected()" ></select>

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
console.log(getElementById(countrySelect).value);
}


--------------------------------------------------------------------

<label for="anrede">Choose a car:</label>
<select id="anrede" name="car" list="anrede" onchange="inputChanged(event)"></select>

<!-- <input id="inputCityID" name="inputCityN" list="cityList" onchange="inputCityChanged(event)"></input>

<datalist id="cityList"></dli --></head>

#anrede{
 width: 150px;   
}

#anrede option{
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
  
  function myReset(){document.getElementById('cityList').length = 0;
    };
    myReset();
    }

  
  
  -------------------------------------------------------------------------

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

  
  -------------------------------------------------------------------------------


  var posts, users;

fetch('https://restcountries.eu/rest/v2/all')
	.then(function (response) {
		// Get a JSON object from the response
		// This is a weird quirk of Fetch
		return response.json();
	}).then(function (data) {

		// Log the data to the console
 		//console.log(data);

 		// Cache the data to a variable
 		posts = data;
      var data2 = [];
      

      var data2 = data.map(({ name }) => ({ name }));

        data2.forEach(function (item) {
        var option = [];
        option.push(item.name.valueOf());
  
   		console.log(option);
});
 		// Make another API call and pass it into the stream
 		//return fetch('https://jsonplaceholder.typicode.com/users');
 		return fetch('https://datahub.io/core/world-cities/r/world-cities.json');



	}).then(function (response) {
		// Get a JSON object from the response
		return response.json();
	}).then(function (data) {

		// Log the data to the console
		console.log(data);

		// Cache the data to a variable
		users = data;

		// Now that you have both APIs back, you can do something with the data

	}).catch(function (error) {
		// if there's an error, log it
		console.log(error);
	});

    ------------------------------------------------------------------------

    var posts, users;

fetch('https://restcountries.eu/rest/v2/all')
	.then(function (response) {
		// Get a JSON object from the response
		// This is a weird quirk of Fetch
		return response.json();
	}).then(function (data) {

		// Log the data to the console
 		//console.log(data);

 		// Cache the data to a variable
 		posts = data;
      var data1 = [];
      

      var data2 = data.map(({ name }) => ({ name }));

        data2.forEach(function (item) {
        var option = [];
        option.push(item.name.toString());
  
   		console.log(option);

 		// Make another API call and pass it into the stream
 		return fetch('https://jsonplaceholder.typicode.com/users');

	}).then(function (response) {
		// Get a JSON object from the response
		return response.json();
	}).then(function (data) {

		// Log the data to the console
		//console.log(data);

		// Cache the data to a variable
		users = data;

		// Now that you have both APIs back, you can do something with the data

	}).catch(function (error) {
		// if there's an error, log it
		console.log(error);
    });
    
    ----------------------------------------------------------------------------

    let urls = [
        'https://jsonplaceholder.typicode.com/posts'
        //'https://jsonplaceholder.typicode.com/users',
      ];
      
      // map every url to the promise of the fetch
      let requests = urls.map(url => fetch(url));
      
      // Promise.all waits until all jobs are resolved
      Promise.all(requests)
        .then(responses => responses.map(response => {
             console.log('ok');
             return response.json();
      
             }))
              
          .then(function (data) {
              // Log the data to the console
              // You would do something with both sets of data here
               console.log(data);
          })
        .catch(function (error) {
              // if there's an error, log it
              console.log(error);
          })

          -------------------------------------------------------------------

          Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/users')
        ])
            .then(function (responses) {
                // Get a JSON object from each of the responses
                return responses.map(function (response) {
                    return response.json();
                });
            }).then(function (data) {
                // Log the data to the console
                // You would do something with both sets of data here
                 console.log(data);
            }).catch(function (error) {
                // if there's an error, log it
                console.log(error);
            });

            ------------------------------------------------------------------
// store urls to fetch in an array
const urls = [
    //'https://dog.ceo/api/breeds/list',
    //'https://dog.ceo/api/breeds/image/random',
    //'https://restcountries.eu/rest/v2/all'
    //'https://datahub.io/core/world-cities/r/world-cities.json'
    //'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json'
    'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
  ];
  
  // use map() to perform a fetch and handle the response for each url
  Promise.all(urls.map(url =>
      fetch(url)
      .then(parseJSON)
    ))
    .then(data => {
      console.log(data);
      // do something with the data
    })
  
  function parseJSON(response) {
    return response.json();
  }

  
  ----------------------------------------------------------------------------

  // store urls to fetch in an array
const urls = [
    'https://dog.ceo/api/breeds/list',
    'https://dog.ceo/api/breeds/image/random',
    //'https://restcountries.eu/rest/v2/all'
    'https://datahub.io/core/world-cities/r/world-cities.json'
  ];
  
  // use map() to perform a fetch and handle the response for each url
  Promise.all(urls.map(url =>
      fetch(url)
      .then(parseJSON)
    ))
    .then(data => {
      console.log(data);
      // do something with the data
    })
  
  function parseJSON(response) {
    return response.json();
  }

  
  ---------------------------------------------------------------------

  // store urls to fetch in an array
const urls = [
    'https://dog.ceo/api/breeds/list',
    'https://dog.ceo/api/breeds/image/random',
    'https://restcountries.eu/rest/v2/all'
    //'https://datahub.io/core/world-cities/r/world-cities.json'
  ];
  
  // use map() to perform a fetch and handle the response for each url
  Promise.all(urls.map(url =>
      fetch(url)
      .then(parseJSON)
    ))
    .then(data => {
      console.log(data);
      // do something with the data
    })
  
  function parseJSON(response) {
    return response.json();
  }

  -----------------------------------------------------------------------------

  // store urls to fetch in an array
const urls = [
    'https://dog.ceo/api/breeds/list',
    'https://dog.ceo/api/breeds/image/random',
    'https://restcountries.eu/rest/v2/all'
    //'https://datahub.io/core/world-cities/r/world-cities.json'
    //'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json'
    //'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
  ];
  
  // use map() to perform a fetch and handle the response for each url
  Promise.all(urls.map(url =>
      fetch(url)
      .then(parseJSON)
    ))
    .then(data => {
      console.log(data);
      // do something with the data
    })
  
  function parseJSON(response) {
    return response.json();
  }

  -----------------------------------------------------------------------------

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

  ---------------------------------------------------------------------------

  
  <script>
// store urls to fetch in an array
const urls = [
  'https://dog.ceo/api/breeds/list',
  'https://dog.ceo/api/breeds/image/random',
 // 'https://restcountries.eu/rest/v2/all',
  //'https://datahub.io/core/world-cities/r/world-cities.json',
  //'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json',
  //'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
];

// use map() to perform a fetch and handle the response for each url

Promise.all(urls.map(url =>
    fetch(url)
    .then(parseJSON)
  ))
  .then(data => {
    //console.log(data);
   // var data1 = data;
    /* console.log('data1' + JSON.stringify(data1[1]));
    console.log(data1[1]);
    console.log(data1[0]); */
return {data};
  })
  .then((data,data1) => {
    console.log(data);
    //console.log(data[0]);
    console.log(data);

    // do something with the data
  })
  
function parseJSON(response) {
  return response.json();
}

</script>

------------------------------------------------------------------------------

<script>
// store urls to fetch in an array
const urls = [
  'https://dog.ceo/api/breeds/list',
  'https://dog.ceo/api/breeds/image/random',
  'https://restcountries.eu/rest/v2/all',
  //'https://datahub.io/core/world-cities/r/world-cities.json',
  //'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json',
  //'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
];

// use map() to perform a fetch and handle the response for each url
Promise.all(urls.map(url =>
    fetch(url)
    .then(parseJSON)
  ))
  .then(data => {
    //console.log(data);
  const data1 = JSON.parse(JSON.stringify(data));
  console.log(data1[1]);
  return  data1;
    // do something with the data
  })
  .then(data1 => {
    //console.log(data1[0]);
    console.log(data1);
    //console.log(data);
  
  
    // do something with the data
  })
        
function parseJSON(response) {
  return response.json();
}

</script>

-------------------------------------------------------------------------------




