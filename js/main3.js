
// Get values of inputs and assign them to vairables

// Assign functions to variables for fillCounter() functions
	// Relate the value of "no" to the saved input value/variable
	// Update the value of the input variable ++/--
	// make the function able to have parameters passed
	// Create a function to update the parameters of the fillCounter() function


// Assign a function to a variable which will count for the countdown timer

var start = document.getElementById('start');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var timeValues = [];

var obj = {
	count: function() {return document.getElementById('sec_count').getContext('2d')},
	no: 0,
	diff: null,
	cw: function() {return this.count().canvas.width},
	ch: function() {return this.count().canvas.height},
	pointToFill: 4.72
}

var obj2 = {
	count: function() {return document.getElementById('min_count').getContext('2d')},
	no: 0,
	diff: null,
	cw: function() {return this.count().canvas.width},
	ch: function() {return this.count().canvas.height},
	pointToFill: 4.72
}

var obj3 = {
	count: function() {return document.getElementById('hour_count').getContext('2d')},
	no: 0,
	diff: null,
	cw: function() {return this.count().canvas.width},
	ch: function() {return this.count().canvas.height},
	pointToFill: 4.72
}

var getValues = function(){
		s = seconds.value;
		m = minutes.value;
		h = hours.value;
		timeValues.push(s);
		timeValues.push(m);
		timeValues.push(h)
		obj.no = s;
		obj2.no = m;
		obj3.no = h;
	}


	var countDown = function(){	
		// Seconds 
		if(obj.no > 0){
			obj.diff = ((obj.no/timeValues[0]) * Math.PI *2 *10);
			obj.count().clearRect(0,0,obj.cw(),obj.ch());
			obj.count().lineWidth = 15;
			obj.count().fillStyle = "#fff";
			obj.count().strokeStyle = "red";
			obj.count().textAlign = "center";
			obj.count().font ="40px serif";
			obj.count().fillText(obj.no, 150, 150);
			obj.count().beginPath();
			obj.count().arc(150, 150, 140, obj.pointToFill, obj.diff/10+obj.pointToFill);
			obj.count().stroke();

			obj.no--;
			console.log(obj.no)
			console.log(obj.diff)

			obj2.diff = ((obj2.no/timeValues[1]) * Math.PI *2 *10);
			obj2.count().clearRect(0,0,obj2.cw(),obj2.ch());
			obj2.count().lineWidth = 8;
			obj2.count().fillStyle = "#fff";
			obj2.count().strokeStyle = "rgb(0, 255, 255)";
			obj2.count().textAlign = "center";
			obj2.count().font ="40px serif";
			obj2.count().fillText(obj2.no, 150, 150);
			obj2.count().beginPath();
			obj2.count().arc(150, 150, 140, obj2.pointToFill, obj2.diff/10+obj.pointToFill);
			obj2.count().stroke();

			console.log(obj2.no + " minutes")
			console.log(obj2.diff)
		}
		// Minutes
		if(obj2.no >= 0 ){
			obj2.diff = ((obj2.no/timeValues[1]) * Math.PI *2 *10);
			obj2.count().clearRect(0,0,obj2.cw(),obj2.ch());
			obj2.count().lineWidth = 15;
			obj2.count().fillStyle = "#fff";
			obj2.count().strokeStyle = "rgb(0, 255, 255)";
			obj2.count().textAlign = "center";
			obj2.count().font ="40px serif";
			obj2.count().fillText(obj2.no, 150, 150);
			obj2.count().beginPath();
			obj2.count().arc(150, 150, 140, obj2.pointToFill, obj2.diff/10+obj.pointToFill);
			obj2.count().stroke();

			console.log(obj2.no + " minutes")
			console.log(obj2.diff)
		}

		// Hours
		if(obj3.no > 0){
			obj3.diff = ((obj3.no/timeValues[2]) * Math.PI *2 *10);
			obj3.count().clearRect(0,0,obj3.cw(),obj3.ch());
			obj3.count().lineWidth = 20;
			obj3.count().fillStyle = "#fff";
			obj3.count().strokeStyle = "yellow";
			obj3.count().textAlign = "center";
			obj3.count().font ="40px serif";
			obj3.count().fillText(obj3.no, 150, 150);
			obj3.count().beginPath();
			obj3.count().arc(150, 150, 140, obj3.pointToFill, obj3.diff/10+obj3.pointToFill);
			obj3.count().stroke();

			console.log(obj3.no)
			console.log(obj3.diff)	
			}

		// Change minutes when seconds hit 0
		if(obj.no <= 0){
			obj.no = 60;
			timeValues[0] = 60
			obj2.no--
		}
		// Change hours when minutes hit 0
		if(obj2.no <= 0 && obj3.no > 0){
			obj2.no = 0;
			timeValues[1] = 0
			obj3.no--
		}

		



		// End Timer
		if(obj.no < 0){
			console.log("WTF!!")
			clearInterval(fills);
		}

	}



start.onclick = function(){
	getValues();
	countDown()
	// fillCounter(obj.diff, obj.no);
	var fills = setInterval(countDown, 1000);

}
