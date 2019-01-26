
var user = {
        name: "Evan Winston",
        image: "img/evan.jpg",
        progress: 0.66
    }

    var courseArr = [{
            header: "My Courses:",
            title: "Readings in World Literature",
            subject: "Social Studies"
        }, {
            title: "Theory of Numbers",
            subject: "Mathematics"
        }, {
            title: "Farsi 301",
            subject: "Languages"
        }];



    var activityArr = [{
    		header: "My Recent Activity:",
            title: "Completed SOSC 503 Module 7 Quiz",
            subject: "Submitted for review 6/11/18 at 10:39PM"
        }, {
            title: "Commented in MATH104 Tuesday Discussion Group",
            subject: "Lorem ipsum dolores sit..."
        }, {
            title: "Enrolled in FARS301",
            subject: "Cohort begins 9/08/18"
        }];

    var accountArr = [{
    		header: "My Account:",
            title: "Enrolled since: ",
            subject: "9/06/2017"
        }, {
            title: "Enrollment Status: ",
            subject: "Active Student"
        }, {
            title: "Department",
            subject: "Computer Science"
        }];


$("#progressbar").css("width", user.progress * 100 + "%");

$(".percent")[0].innerHTML= user.progress * 100 +"%";


// /generate random Numbers

var num = 
Math.floor((Math.random()*10000)+1);
document.getElementById("userid").innerHTML = "user id #:" + num;

// generate functioning clock
var h;
setInterval(function showTime() {
	var today = new Date();
	var year = today.getFullYear();
	var month = checkTime(today.getMonth()+1);
	var day = today.getDate ();
	h = checkTime(standardTime(today.getHours()));
  	var m = checkTime(today.getMinutes());
 	var s = checkTime(today.getSeconds());
 	document.getElementById("timer").innerHTML = month+ "/" + day + "/" + year + " | " + h + ":" + m + ":" + s;
 	m = checkTime(m);
  	s = checkTime(s);

}, 1000);
function checkTime(i) {
  if (i<12) {
    i = "0" + i;
  }
  return i;
};
function standardTime(h){
if (h>12) {
	h = h-12;
	return h;
} else {
	return h;
}
};

// change the content in dashboard
// make the buttons change the content using jquery and click event
// use a for loop to run through the arrays

function changeInfo(arr) {
	var show = $(".active")[0];
	// good way to reset content (see below)
	show.innerHTML = "";
	var list = document.createElement("ul");
	var header = document.createElement("h2");
	show.appendChild(header);
	header.innerHTML = arr[0].header
	show.appendChild(list);
	
	for (var i = 0; i < arr.length; i++) {
		var item = document.createElement("li");
		var title = document.createElement("h4");
		var subject = document.createElement("p");
		item.appendChild(subject);
		item.appendChild(title);
		list.appendChild(item);
		title.innerHTML = arr[i].title
		subject.innerHTML = arr[i].subject 

		
	}
	
}

