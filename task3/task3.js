(function() {
    var worker = new Worker('worker3.js');
    var array = [ "Mouse", "Frog", "Hare", "Fox", "Wolf", "Bear" ];
    worker.postMessage(array);
    
    worker.onmessage = function(event) {
      //alert(event.data);
      console.log('%o: ', event.data);
    };
    
    worker.onerror = function(error) {
      console.log('error: ', error);
      console.log(error.lineno);
      console.log();
      console.log();
      console.log();
    };
})();