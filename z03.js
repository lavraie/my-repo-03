<p id="p1">
    
</p>

async function getData(){ fetch('https://pomber.github.io/covid19/timeseries.json')
   .then((response) => {
     return response.json();
   })
   .then((data) => {
     console.log(data);
     document.getElementById("p1").textContent = JSON.stringify(data);
   });
 }

 getData();

 <p id="p1">
    
</p>

async function getData(){ fetch('https://covidtracking.com/api/v1/us/daily.json')
   .then((response) => {
     return response.json();
   })
   .then((data) => {
     console.log(data);
     /* document.getElementById("p1").textContent = JSON.stringify(data) */
          document.getElementById("p1").textContent = data.typeof;

     
   });
 }

 getData();

