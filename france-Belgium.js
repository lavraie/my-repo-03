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
  