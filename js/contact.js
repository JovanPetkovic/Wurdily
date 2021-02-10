var input = document.getElementsByTagName("input");
var submitButton = document.getElementsByClassName("btn").item(0);
var textArea = document.getElementsByTagName("textarea").item(0);

var closeOpen = document.getElementsByClassName('close-open').item(0);
console.log(closeOpen);

submitButton.onclick = function(){
	if(textArea.value.trim()==""){
		alert("Message is empty");
	}
	if(textArea.value.trim().charAt(30)===""){
		alert("Message needs to be longer than 30 characters");
	}
	for (var i = input.length - 1; i >= 0; i--) {
		if(input[i].value == ""){
			alert("Some of the input field are empty");
			break;
		}
	}
}

var today = new Date();

function openClosed(){
	if(today.getHours()<=17&& today.getHours()>=9){
		closeOpen.innerHTML = "Open  9AM - 5PM";
	}
	else{
		closeOpen.innerHTML = "Currently Closed";
	}
}

if(today.getDay()!=0&&today.getDay()!=6){
	openClosed();
}

var showButton = document.getElementsByClassName("hoursShow").item(0);
var hoursTable = document.getElementsByClassName("hoursTable").item(0);


showButton.addEventListener("click",function(){
	console.log(1);
	if(showButton.style.transform == ""){
		showButton.style.transform = "rotate(180deg)";
		hoursTable.style.height = "auto";
		hoursTable.style.opacity = "1";
	}
	else{
		showButton.style.transform = "";
		hoursTable.style.opacity = "0";
		hoursTable.style.height = "0";
	}
})


function initMap() {
  // The location of Uluru
  const wordily = { lat: 44.77277262610805, lng: 20.47567820850375 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: wordily,
  });
  // The marker, positioned at wordily
  const marker = new google.maps.Marker({
    position: wordily,
    map: map,
  });
}

initMap();

