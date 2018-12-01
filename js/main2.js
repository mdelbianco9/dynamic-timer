

var start = document.getElementById('start');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

	var s;
	var m;
	var h;

	// Gets the values of the inputs & adds them to a variable
	var getValues = function(){
		s = seconds.value;
		m = minutes.value;
		h = hours.value;
	}

	// Start Function
start.addEventListener('click', function(){
	getValues();
	countDown();
	var myInterval = setInterval(countDown, 1000)
	fillCounter()
	var fill = setInterval(fillCounter, 1000);
})


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
			alert("Timer is Done!!")

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
	

start.onclick = foo = function(){
	return seconds.value;
}
var min_count = document.getElementById('min_count').getContext("2d");
var foo = s;
var no = 0;
var pointToFill = 4.72;
var cw = min_count.canvas.width;
var ch = min_count.canvas.height;
var diff;

function fillCounter(){
diff = ((no/foo) * Math.PI *2 *10);
min_count.clearRect(0,0,cw,ch);
min_count.lineWidth = 15;
min_count.fillStyle = "#fff";
min_count.strokeStyle = "rgb(0, 255, 255)";
min_count.textAlign = "center";
min_count.font ="40px serif";
min_count.fillText(no, 150, 150);
min_count.beginPath();
min_count.arc(150, 150, 140, pointToFill, diff/10+pointToFill);
min_count.stroke();

if(no >= foo){
  clearTimeout(fill);
}
no++;

}



