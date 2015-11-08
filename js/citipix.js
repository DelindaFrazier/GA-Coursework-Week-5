// Goal: when user enters name, change background picture

//user input ID = #city-type
//submit button it = #submit-btn
//target css body tag. attribute = background: url(images/austin.jpg) 

//store user input in var = cityName

//if var cityName == Austin - background: url(images/austin.jpg)
//if var cityName == Los Angeles - background: url(images/la.jpg)
//if var cityName == New York - background: url(images/nyc.jpg)
//if var cityName == San Francisco - background: url(images/sf.jpg)
//if var cityName == Sydney - background: url(images/sydney.jpg)

$(document).ready(function() {

//Create the function

	function buttonClicked() {
		event.preventDefault(); //prevent the submit button from refreshing the page

		var cityName = $("#city-type").val(); //.val() method gets the value from the form
			cityName = cityName.toLowerCase().trim(); //changes input to lowercase letters
	
			if (cityName === "austin" || cityName === "atx") {
			  $("body").css("background","url(images/austin.jpg)");
			} else

			if (cityName === "los angeles" || cityName === "la" || cityName === "l.a.") {
			  $("body").css("background","url(images/la.jpg)");
			} else

			if (cityName === "new york" || cityName === "nyc" || cityName === "new york city") {
			  $("body").css("background","url(images/nyc.jpg)");
			} else

			if (cityName === "san francisco" || cityName === "san fran" || cityName === "bay area") {
			  $("body").css("background","url(images/sf.jpg)");
			} else

			if (cityName === "sydney" || cityName === "syd") {
			  $("body").css("background","url(images/sydney.jpg)");
			}

	} //end function buttonClicked

	$("#city-type").attr("placeholder", "Enter city name in lowercase letters");

	$("#submit-btn").click(buttonClicked); // execute function when button is clicked

}); //end document.ready

//Problems I had making this script work. Check for these issues next time.

//1. Did not close all of the {}. Missing semicolons.
//2. In if statment, typed city name as capital letter (Austin). Can't do this if using .toLowerCase().
//3. Missing semicolons.
//4. Could not uses ../ in the url within if statement
//5. Use.css to change atributes in the css. Use .attr to change attributes in the html.
//6. Triple = is equal to, not double =.
