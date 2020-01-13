/* List current Day */
function currentDay() {
	var today = moment().format("dddd, Do MMMM YYYY");    
	$(".mt-5").text(today);
}

/* List the Hours in the Day and append to page */
function plannerHours () {
	var startTime = 9;
	var endTime = 17;
	var now = moment().format("H");    

	for (i=startTime; i <= endTime;i++) {
		console.log(i + "th hour");
		var cellColour = "";
		if (now > i) {
			cellColour = "background-color:blue;color:#fff;"
		} else if (now == i) {
			cellColour = "background-color:gray;color:#fff;"
		} else {
			cellColour = "background-color:red;color:#fff;"
		}

		$(".col-12").append(
			$("<div class='row' style='" + cellColour + "'" + "id=hour-" + i + ">")
			.append(i)
			.append("<input type='text'/>")
			.append("<button class='btn btn-primary'>Save")
		);

		// need to re work this to get the sibling id of the class button
		$(".btn-primary").click(function(){
			var parent = $(this).parent();
			console.log(parent);
		});
	}
}

/*
function getSavedDetails {
	var input = document.querySelector("#hour-9");
	var input = document.querySelector("#hour-10");
	var input = document.querySelector("#hour-11");
	var input = document.querySelector("#hour-12");
	var input = document.querySelector("#hour-13");
	var input = document.querySelector("#hour-14");
	var input = document.querySelector("#hour-15");
	var input = document.querySelector("#hour-16");
	var input = document.querySelector("#hour-17");
}
*/

// https://stackoverflow.com/questions/27273444/save-and-load-hour-values-using-local-storage/27273657