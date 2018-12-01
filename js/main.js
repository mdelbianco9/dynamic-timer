

var start = document.getElementById('start');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

// Start Function
start.addEventListener('click', function(){
	s = seconds.value;
	m = minutes.value;
	h = hours.value;

	// var myInterval = setInterval(countDown, 1000)
	// var fill = setInterval(fillCounter, 1000);

	// Rules for the timer 
	function countDown(){
		if(h > 0){
				document.getElementById('show_hours').innerHTML = h;

			}else{
				document.getElementById('show_hours').innerHTML = 0;
			}

		if(m > 0){
				document.getElementById('show_min').innerHTML = m;
			}else{
				document.getElementById('show_min').innerHTML = 0;
			}

		if(s > 0){
				document.getElementById('show_sec').innerHTML = s;
			}else{
				document.getElementById('show_sec').innerHTML = 0;
			}
		if(m <= 0 && h <= 0 && s <= 0){
			console.log("WTF!!")
			s = 0
			clearInterval(myInterval);
		}
		if(s <= 0){
			s = 60;
			m--
		}
		if(m <= 0 && h > 0){
			m = 59
			h--
		}
	s--
	}

	
	var sec_count = document.getElementById('sec_count').getContext("2d");
	var min_count = document.getElementById('min_count').getContext("2d");
	var hour_count = document.getElementById('hour_count').getContext("2d");

	var soo = s;
	var nos = 0;
	var diffs;
	var cws = sec_count.canvas.width;
	var chs = sec_count.canvas.height;

	var moo = m;
	var nom = 0;
	var diffm;
	var cwm = min_count.canvas.width;
	var chm = min_count.canvas.height;

	var hoo = h;
	var noh = 0;
	var diffh;
	var cwh = hour_count.canvas.width;
	var chh = hour_count.canvas.height;

	// Constants
	var pointToFill = 4.72;

	function fillCounterS(){
		diffs = ((nos/soo) * Math.PI *2 *10);
		sec_count.clearRect(0,0,cws,chs);
		sec_count.lineWidth = 15;
		sec_count.fillStyle = "#fff";
		sec_count.strokeStyle = "red";
		sec_count.textAlign = "center";
		sec_count.font ="40px serif";
		sec_count.fillText((soo-nos), 150, 150);
		sec_count.beginPath();
		sec_count.arc(150, 150, 140, pointToFill, diffs/10+pointToFill);
		sec_count.stroke();

		if(nos >= soo){
		  clearTimeout(fills);
		}
		nos++;
	}
	var fills = setInterval(fillCounterS, 1000);

	function fillCounterM(){
		diffm = ((nom/moo) * Math.PI *2 *10);
		min_count.clearRect(0,0,cws,chs);
		min_count.lineWidth = 15;
		min_count.fillStyle = "#fff";
		min_count.strokeStyle = "rgb(0, 255, 255)";
		min_count.textAlign = "center";
		min_count.font ="40px serif";
		min_count.fillText((moo-nom), 150, 150);
		min_count.beginPath();
		min_count.arc(150, 150, 140, pointToFill, diffm/10+pointToFill);
		min_count.stroke();

		if(nom >= moo){
		  clearTimeout(fillm);
		}
		nom++;
	}
	var fillm = setInterval(fillCounterM, 1000);

	function fillCounterH(){
		diffh = ((noh/hoo) * Math.PI *2 *10);
		hour_count.clearRect(0,0,cwh,chh);
		hour_count.lineWidth = 15;
		hour_count.fillStyle = "#fff";
		hour_count.strokeStyle = "yellow";
		hour_count.textAlign = "center";
		hour_count.font ="40px serif";
		hour_count.fillText((hoo-noh), 150, 150);
		hour_count.beginPath();
		hour_count.arc(150, 150, 140, pointToFill, diffh/10+pointToFill);
		hour_count.stroke();

		if(noh >= hoo){
		  clearTimeout(fillh);
		}
		noh++;
	}
	var fillh = setInterval(fillCounterH, 1000);
	

// End of addEventListener
})






// Get values of inputs and assign them to vairables

// Assign functions to variables for fillCounter() functions
	// Relate the value of "no" to the saved input value/variable
	// Update the value of the input variable ++/--
	// make the function able to have parameters passed
	// Create a function to update the parameters of the fillCounter() function


// Assign a function to a variable which will count for the countdown timer























	