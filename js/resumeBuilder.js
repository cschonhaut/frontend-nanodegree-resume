$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

var bio = {
	"name": "Chelsea Schonhaut",
	"role": "Designer/Developer",
	"contacts": {
		"email": "cschonhaut@gmail.com",
		"phone": "717-587-6257",
		"linkedin": "chelsea-schonhaut",
		"github": "cschonhaut",
		"behance": "cschonhaut"
	},
	"welcomeMessage": "I am a Graphic Designer and Front-End Developer in training",
	"skills": [
		"Front-End Development", "Animation", "Graphic Design", "Administration/Management"
	],
	"picture": "images/me.jpg"
};

var work = {
"jobs": [{
	"employer": "Graphcom Creative",
	"title": "Graphic Design Intern",
	"dates": "January 2014 - May 2014",
	"location": "Gettysburg",
	"description": "As a graphic design intern during my senior year of college, I quickly learned that I was not only in the right field, but also working at the right company. For 5 months I assisted the design and development teams with CMS data entry, branding projects, advertisements, magazine design, and much more. Fortunately I was offered a position at the company before graduation, and I am still there today."
	},
	{
	"employer": "Graphcom Creative",
	"title": "Creative Administrator",
	"dates": "May 2014 - August 2014",
	"location": "Gettysburg",
	"description": "Upon graduating college, there were no Junior Designer positions available at the company. However, Graphcom was looking for a Creative Administrative Assistant, and my knowledge of the company, organization skills, and leadership potential landed me the job. As Creative Administrator I oversaw a team of interns; gained experience in project management, client communication, and organization; and continued to assist the design and development teams while gaining valuable experience. After only 4 months in the job, I was promoted to Junior Designer. "
	},
	{
	"employer": "Graphcom Creative",
	"title": "Junior Graphic Designer",
	"dates": "August 2014 - Present",
	"location": "Gettysburg",
	"description": "My responsibilities as a designer have grown tremendously since my time as an intern. I began as a print-heavy designer, focusing primarily on magazines. I managed up to 4-5 different publications at a time. Today I still oversee some magazine operations, but I am now expanding more into web design and development. My goal is to bridge the gap between the design and development teams, as well as make the company more profitable. In addition to expanding my skillset and responsibilities, my project portfolio has grown vastly as well. In the past 2 years I have worked on signage, branding, advertising, magazines, annual reports, emialers, landing pages, websites, and more."}]
};
function displayWork(){
	for (job in work.jobs) {
		//create new div for work experience
		$("#workExperience").append(HTMLworkStart);
		//concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();
var education = {
"schools": [{
	"name": "Shippensburg University",
	"city": "Shippensburg",
	"degree": "BA",
	"cerifications": "Graphic Design",
	"major": "Art & Design",
	"minor": "Communications Journalism",
	"years": "2010-2014"},

	{"name": "Udacity",
	"type": "Online Course",
	"program": "Front-End Web Development",
	"degree": "Nano"}
]};

var projects = {
	"project 1": "Portfolio Site",
	"project 2": "Online Resume"
};

/*bio.display = function () {
	'use strict';
	//var github = HTMLgithub.replace("%data%", <a class=\)

if (bio.contacts.length > 0) {
	$("#header").append(HTMLcontactsStart);*/

var role = "Designer/Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var name = "Chelsea";
var formattedName = HTMLheaderName.replace("%data%", name);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

//attempt 1 to make contacts show
//var formattedContacts = [];
//formattedContacts.push(HTMLemail.replace("%data%", bio.contacts.email));
//formattedContacts.push(HTMLphone.replace("%data%", bio.contacts.phone));
//formattedContacts.push(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
//formattedContacts.push(HTMLgithub.replace("%data%", bio.contacts.github));
//formattedContacts.push(HTMLbehance.replace("%data%", bio.contacts.behance));
//more attempts
/*var contacts = "Contacts";
var formattedContacts = HTMLcontacts.replace("%data%", bio.contacts[0]);
$ ("#contacts").append(formattedContacts);
formattedSkill = HTMLcontacts.replace("%data%", bio.contacts[1]);
$ ("#contacts").append(formattedContacts);
formattedSkill = HTMLcontacts.replace("%data%", bio.contacts[2]);
$ ("#contacts").append(formattedContacts);
formattedSkill = HTMLcontacts.replace("%data%", bio.contacts[3]);
$("#contacts").append(formattedContacts)
formattedSkill = HTMLcontacts.replace("%data%", bio.contacts[4]);
$("#contacts").append(formattedContacts);
formattedSkill = HTMLcontacts.replace("%data%", bio.contacts[5]);
$("#contacts").append(formattedContacts);*/

//NUmber 3
if (bio.contacts.length > 0) {
	$("#header").append(HTMLcontactsStart);

var formattedContacts = HTMLcontacts.replace("%data%", bio.contacts[0]);
$ ("#contacts").append(formattedContacts);
formattedSkill = HTMLcontacts.replace("%data%", bio.contacts[1]);
$ ("#contacts").append(formattedContacts);
formattedSkill = HTMLcontacts.replace("%data%", bio.contacts[2]);
$ ("#contacts").append(formattedContacts);
formattedSkill = HTMLcontacts.replace("%data%", bio.contacts[3]);
$("#contacts").append(formattedContacts)
formattedSkill = HTMLcontacts.replace("%data%", bio.contacts[4]);
$("#contacts").append(formattedContacts);
formattedSkill = HTMLcontacts.replace("%data%", bio.contacts[5]);
$("#contacts").append(formattedContacts);}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$ ("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$ ("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$ ("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);}

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