(function(){

	var results = [],
		list = document.querySelector("#list"),
		btn = document.querySelector("#generateButton"),
		seriesNumber = document.querySelector("#seriesLength");

	btn.addEventListener("click", function() {
		// удалить список
		while (list.hasChildNodes()) {
			list.removeChild(list.firstChild);
		}

		// создать числа
		var n = parseInt(seriesNumber.value);
		generateFibocciSeries(n);

		// добавить в список
		var i, l=results.length;
		for(i=0; i<l; i++) {
			addToList(results[i]);
		}

	}, false);

	

	function calculateFibonacciValue(n) {
		var s = 0;

		if(n === 0) {
			return s;
		}
		if (n === 1) {
			s += 1;
			return s;
		}
		else {
			return calculateFibonacciValue(n-1) + calculateFibonacciValue(n-2);
		}
	}

	function generateFibocciSeries(n) {
		var i;

		results.length = 0;
		for(i=0; i<=n-1; i++) {
			results.push(calculateFibonacciValue(i));
		}
	}

	function addToList(msg) {
		var node = document.createElement("li"),
			textnode = document.createTextNode(msg);

		node.appendChild(textnode); 
		list.appendChild(node);
	}

})();