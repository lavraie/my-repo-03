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
  