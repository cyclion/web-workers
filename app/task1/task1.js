(function() {
    var worker = new Worker('worker1.js');
    worker.postMessage('Wake up');
    
    worker.onmessage = function(event) {
      alert(event.data);  
    };
})();