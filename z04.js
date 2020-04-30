async function getData() {
    fetch('https://datahub.io/core/s-and-p-500-companies/r/constituents.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
  
        data.forEach(function(item) {
          
                  const newElement = document.createElement("li");
    const eventList = document.getElementById("ul1");
  
    newElement.innerHTML = "message: " + new Date().getMinutes() + " " +  Math.random();
    eventList.appendChild(newElement);
  
        
      });
  })
};
  
  getData();
  