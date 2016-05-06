/*var awesomeThoughts = "I am Chelsea and I am awesome!";
var funThoughts =
	awesomeThoughts.replace("awesome", "fun");

console.log(awesomeThoughts);
console.log(funThoughts);*/

/*var role = "Designer/Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var name = "Chelsea";
var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var education = {}
	"education[school]" = "Shippensburg University",
	"education[city]" = "Shippensburg";*/

var bio = {
	"name": "Chelsea",
	"role": "Designer/Developer",
	"contacts": {
		"email": "cschonhaut@gmail.com",
		"phone": "717-587-6257",
		"linkedin": "chelsea-schonhaut",
		"twitter": "@cschonhaut",
		"github": "cschonhaut",
		"behance": "cschonhaut"
	},
	"welcome": "Welcome message goes here",
	"skills": [
		"front-end development", "animation", "graphic design"
	],
	"picture": "images/me.jpg"
};

var work = {
	"work.position": "junior graphic designer",
	"work.employer": "Graphcom",
	"work.years": "2",
	"work.city": "Gettysburg"};

var education = {
	"schools": [
	{
		"name": "Shippensburg University",
		"city": "Shippensburg",
		"degree": "BA",
		"cerifications": "Graphic Design",
		"major": "Art & Design",
		"minor": "Communications Journalism",
		"years": "2010-2014"
},
	{
		"name": "Udacity",
		"type": "Online Course",
		"program": "Front-End Web Development",
		"degree": "Nano"
	}
]};

var projects = {
	"project 1": "Portfolio Site",
	"project 2": "Online Resume"
};

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("
	%data%, bio.skills [0]");
var formattedSkill = HTMLskills.replace("
	%data%, bio.skills [1]");
var formattedSkill = HTMLskills.replace("
	%data%, bio.skills [2]");
}

for()

/*
$(document).ready = function(){
$("#main").append("Hi there");
}
*/
/*
$("#main").append(work["position"]);
$("#main").append(education.name);
*/
/*
$(document).ready(function(){
$("#main").prepend("<p>"+work["work.position"]+"</p>");
$("#main").prepend("<p>"+education["schools"][1].name+"</p>");
});
*/