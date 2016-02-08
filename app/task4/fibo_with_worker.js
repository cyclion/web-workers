(function () {
    var worker = new Worker('worker4.js');

    worker.onmessage = function (event) {
        console.log('event.data: ', event.data);
        var results = event.data;
      
        // add to DOM
        for (var i = 0, l = results.length; i < l; i++) {
            addToList(results[i]);
        }
        onfinally();
    };

    worker.onerror = function (error) {
        console.log('error: ', error);
        console.log(error.lineno);
        onfinally();
    };

    var list = document.querySelector("#list2"),
        btn = document.querySelector("#generateButton2"),
        seriesNumber = document.querySelector("#seriesLength2");

    btn.addEventListener("click", function () {
        console.time('fibo');

        btn.setAttribute('disabled', 'disabled');
        
        // clear()
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }

        // create numbers
        worker.postMessage(parseInt(seriesNumber.value));
    }, false);
    
    function onfinally() {
        btn.removeAttribute('disabled');
        console.timeEnd('fibo');
    }

    function addToList(msg) {
        var node = document.createElement("li"),
            textnode = document.createTextNode(msg);

        node.appendChild(textnode);
        list.appendChild(node);
    }
})();