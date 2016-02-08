importScripts('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js');
//importScripts('../vendor/underscore/underscore-min.js');

onmessage = function(event) {
    var teremok = event.data;
    
    postMessage(_.first(teremok));
    postMessage(_.last(teremok));
    postMessage(_.initial(teremok, 2)); // except 2 last
    postMessage(_.rest(teremok, 3)); //except 3 first
    postMessage(_.without(teremok, 'Frog')); // except Frog
    
    var age = [2, 3, 5, 10, 5, 12];
    
    postMessage(_.object(teremok, age));
    postMessage(_.indexOf(teremok, 'Wolf') + 1);
};