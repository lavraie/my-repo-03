function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}

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
          return item.country == "Belgium";
        });
        console.log(data3);
  
  
        data3.forEach(function(item) {
  
          const newElement = document.createElement("li");
          const eventList = document.getElementById("ul1");
  
          newElement.innerHTML = JSON.stringify(item.name + " " + item.country);
          eventList.appendChild(newElement);
  
  
        });
      })
  };
  
  getData();

  <p id="p1">
    
</p>

<ol id="ul1">

</ol>

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


  <p id="p1">
    
</p>

<ol id="ul1">

</ol>

async function getData() {
    fetch('https://datahub.io/core/s-and-p-500-companies/r/constituents.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
      console.log(data);
          console.log(data[0]);
  
      var newArray = data.filter(function (el) {
    return el.Sector === 'Financials';
  });
  console.log(newArray);
  console.log(newArray.length);
  
      
      
      
                    //var newArray1 = newArray.reverse();
              //var newArray = newArray.sort();
  
  
        data.reverse().forEach(function(item) {
  
          const newElement = document.createElement("li");
          const eventList = document.getElementById("ul1");
  
          newElement.innerHTML = item.Name + "--- " + item.Sector;
          eventList.appendChild(newElement);
  
  
        });
      })
  };
  
  getData();
  
  <button onclick="clicked()">
Click
</button>
<p id="p1">
    
</p>

<ul id="ul1">

</ul>


function clicked(){
    const newElement = document.createElement("li");
      const eventList = document.getElementById("ul1");
    
      newElement.innerHTML = "message: " + new Date().getMinutes() + " " +  Math.random();
      eventList.appendChild(newElement);
      };


      
