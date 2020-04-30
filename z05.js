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



// benchmark test
var start = Date.now(); // milliseconds
var x = 0;
console.log("started");
for (var i = 0; i < 200000000; i++){
 x = x + i;
}
console.log('ended in : ', -(start - Date.now())/1000, ' seconds');
// ended in :  9.867  seconds


<!DOCTYPE html>
<html>
<!--
  Copyright 2011 Google Inc.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<body>

<script type="javascript/worker">
  self['onmessage'] = function(event) {
    postMessage('Hello, ' + event.data.name + '!');
  };
</script>

<script>
  /**
   * Helper method for running inline Web Workers, if the browser can support
   * them. If the browser doesn't support inline Web Workers, run the script
   * on the main thread, with this function body's scope, using eval. Browsers
   * must provide BlobBuilder, URL.createObjectURL, and Worker support to use
   * inline Web Workers. Most features such as importScripts() are not
   * currently supported, so this only works for basic workers.
   * @param {String} js The inline Web Worker Javascript code to run. This code
   *     must use 'self' and not 'this' as the global context variable.
   * @param {Object} params The parameters object to pass to the worker.
   *     Equivalent to calling Worker.postMessage(params);
   * @param {Function} callback The callback to run when the worker calls
   *     postMessage. Equivalent to adding a 'message' event listener on a
   *     Worker object and running callback(event.data);
   */
  function runWorkerJs(js, params, callback) {
    var BlobBuilder = (window.BlobBuilder || window.WebKitBlobBuilder);
    var URL = (window.URL || window.webkitURL);
    var Worker = window.Worker;

    if (URL && BlobBuilder && Worker) {
      // BlobBuilder, Worker, and window.URL.createObjectURL are all available,
      // so we can use inline workers.
      var bb = new BlobBuilder();
      bb.append(js);
      var worker = new Worker(URL.createObjectURL(bb.getBlob()));
      worker.onmessage = function(event) {
        callback(event.data);
      };
      worker.postMessage(params);

    } else {
      // We can't use inline workers, so run the worker JS on the main thread.
      (function() {
        var __DUMMY_OBJECT__ = {};
        // Proxy to Worker.onmessage
        var postMessage = function(result) {
          callback(result);
        };
        // Bind the worker to this dummy object. The worker will run
        // in this scope.
        eval('var self=__DUMMY_OBJECT__;\n' + js);
        // Proxy to Worker.postMessage
        __DUMMY_OBJECT__.onmessage({
          data: params
        });
      })();
    }
  }

  runWorkerJs(
      document.querySelector('[type="javascript/worker"]').textContent,
      { name: 'Bob' },
      function(result) {
        document.body.innerHTML = result;
      });
</script>

</body>
</html>

<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8" />
  </head>

  <body>

    <div id="log"></div>

    <script id="worker1" type="javascript/worker">
      // This script won't be parsed by JS engines
    // because its type is javascript/worker.
    
    self.onmessage = function(e) {
      self.postMessage('msg from worker');
    };
    // Rest of your worker code goes here.
  </script>

    <script>
      function log(msg) {
        // Use a fragment: browser will only render/reflow once.
        var fragment = document.createDocumentFragment();
        fragment.appendChild(document.createTextNode(msg));
        fragment.appendChild(document.createElement('br'));

        document.querySelector("#log").appendChild(fragment);
      }

      var blob = new Blob([document.querySelector('#worker1').textContent]);

      var worker = new Worker(window.URL.createObjectURL(blob));
      worker.onmessage = function(e) {
        log("Received: " + e.data);
      }
      worker.postMessage(); // Start the worker.

    </script>
  </body>

</html>


<!DOCTYPE html>
<html>

  <head>
    <title>Web Worker Demo App</title>
    <script type="text/javascript">
      function start() {

        worker.postMessage({
          'cmd': 'start',
          'msg': 'Hi this is Web Worker Demo App'
        });

      }

      function stop() {

        worker.postMessage({
          'cmd': 'stop',
          'msg': 'Thank You'
        });

      }

      var worker = new Worker('Worker');



      worker.addEventListener('message', function(e) {

        document.getElementById('Message').textContent = e.data;

      }, false);

    </script>
    <script>


    </script>
  </head>

  <body>
    <div>
      <button id="Start" onclick="start()">Start Worker and Send Message</button>
      <button id="Stop" onclick="stop()">Stop Worker</button><br />
      <br />
      <output id="Message"></output>
    </div>
  </body>

</html>

function Worker() {
    self.addEventListener('message', function(e) {
      var data = e.data;
      switch (data.cmd) {
        case 'start':
          self.postMessage('Worker Started :' + data.msg);
          break;
        case 'stop':
          self.postMessage('Worker Stopped :' + data.msg);
          self.close();
          break;
      };
    }, false);
  };
  
