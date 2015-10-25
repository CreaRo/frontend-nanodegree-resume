var bio = {
	"name" : "Rishabh Bhardwaj",
	"role" : "Developer",
	"contacts" : {
		"email" : "bhardwaj.rish@gmail.com",
		"mobile" : "+919904773407",
		"github" : "crearo",
		"linkedin" : "linkedin",
		"location" : "Gandhinagar"
	},
	"welcomeMessage" : "Hallelujah man!",
	"skills":[
	"being awesome", "being human", "saving the universe"
	],
	"bioPic" : "images/fry.jpg"
}

var education = {
	"schools": [
		{
			"name" : "DA-IICT",
			"gradyear" : "2017",
			"degree" : "Bachelors in Technology",
			"majors" : ["ICT"],
			"location" : "Gandhinagar"
		},
		{
			"name" : "DAV",
			"gradyear" : "2013",
			"degree" : "+2",
			"majors" : ["Science"],
			"location" : "Pune"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Javascripting",
			"website" : "udacity.com",
			"date" : 2015
		}
	]
}

var work = {
	"companies" : [
		{
			"company":"Tesseract",
			"position" : "Android Developer",
			"location" : "Mumbai",
			"date" : "May - July '15",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
		},{
			"company":"Google",
			"position" : "Full Stack Developer",
			"location": "Bangalore",
			"date" : "May - July '16",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
		}
	]
}

var projects = {
	"Android" : [
		{
			"name" : "DAWebmail",
			"link" : "link to playstore",
			"date" : "Dec 14",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
			"images" : ["images/fry.jpg"]
		},
		{
			"name" : "MoneyKeep",
			"link" : "link to playstore",
			"date" : "Jun 15",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
			"images" : ["images/fry.jpg"]
		}
	]
}


displayHeader();
displayFooter();
displayWork();
projectsdisplay();
$("#mapDiv").append(googleMap);


function displayHeader(){
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedWelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var myImage = HTMLbioPic.replace("%data%", bio.bioPic);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedLinkedIn);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedEmail);
	$("#header").append(myImage);
	$("#header").append(formattedWelcomemsg);
	displaySkills();
}

function displayFooter(){
	var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(formattedLinkedIn);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedEmail);

}

function displaySkills(){
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

function displayWork(){
	for(job in work.companies){
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.companies[job].company);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.companies[job].position);
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.companies[job].date);	
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.companies[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.companies[job].description);	
		$(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkDate);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);

		console.log(formattedWorkEmployer+formattedWorkTitle);
	}
}

function projectsdisplay(){
	console.log("in project display")
	for(project in projects.Android){
		$("#projects").append(HTMLprojectStart);
		var formattedName = HTMLprojectTitle.replace("%data%", projects.Android[project].name);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.Android[project].date);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.Android[project].description);
		$(".project-entry:last").append(formattedName);
		$(".project-entry:last").append(formattedDate);
		$(".project-entry:last").append(formattedDescription);
		for(image in projects.Android[project].images){
			var formattedImage = HTMLprojectImage.replace("%data%", projects.Android[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
}


$(document).click(function(loc){
	logClicks(loc.pageX, loc.pageY);
});

function logClicks(x,y){
	console.log("x,y = " + x + " " + y);
}