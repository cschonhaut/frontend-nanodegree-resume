//Click Location Function
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});
//End Click Location Function

//Internationalize Button
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
}
$('#main').append(internationalizeButton);
//End Internationalize Button

//BIO SECTION
var bio = {
	"name": "Chelsea Schonhaut",
	"role": "Designer/Developer",
	"contacts": {
		"mobile": "717-587-6257",
		"email": "cschonhaut@gmail.com",
		"github": "cschonhaut",
		"linkedin": "chelsea-schonhaut",
		"behance": "cschonhaut",
		"location": "Hanover, PA"

	},
	"welcomeMessage": "Graphic Designer and Front-End Developer",
	"skills": [
		"Front-End Development", "Animation", "Graphic Design", "Administration/Management"
	],
	"picture": "images/CS-web.png"
};

var role = "Designer/Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#mapDiv").append(googleMap);

var name = "Chelsea Schonhaut";
var formattedName = HTMLheaderName.replace("%data%", name);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

var formattedContacts = [];
formattedContacts.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContacts.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContacts.push(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
formattedContacts.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContacts.push(HTMLbehance.replace("%data%", bio.contacts.behance));
$("#topContacts").append(formattedContacts);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$ ("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$ ("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$ ("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);

}
// TRYING TO MAKE FOOTER CONTACTS SHOW UP
// for(i in formattedContactInfo) {
// 	$("#topContacts").append(formattedContactInfo[i]);
// 	$("#footerContacts").append(formattedContactInfo[i]);
// }

//END BIO SECTION

//WORK SECTION
var work = {
"jobs": [{
	"employer": "Graphcom Creative",
	"title": "Graphic Design Intern",
	"dates": "January 2014 - May 2014",
	"location": "Gettysburg, PA",
	"description": "As a graphic design intern during my senior year of college, I quickly learned that I was not only in the right field, but also working at the right company. For 5 months I assisted the design and development teams with CMS data entry, branding projects, advertisements, magazine design, and much more. Fortunately I was offered a position at the company before graduation, and I am still there today."
	},
	{
	"employer": "Graphcom Creative",
	"title": "Creative Administrator",
	"dates": "May 2014 - August 2014",
	"location": "Gettysburg, PA",
	"description": "Upon graduating college, there were no Junior Designer positions available at the company. However, Graphcom was looking for a Creative Administrative Assistant, and my knowledge of the company, organization skills, and leadership potential landed me the job. As Creative Administrator I oversaw a team of interns; gained experience in project management, client communication, and organization; and continued to assist the design and development teams while gaining valuable experience. After only 4 months in the job, I was promoted to Junior Designer. "
	},
	{
	"employer": "Graphcom Creative",
	"title": "Junior Graphic Designer",
	"dates": "August 2014 - Present",
	"location": "Gettysburg, PA",
	"description": "My responsibilities as a designer have grown tremendously since my time as an intern. I began as a print-heavy designer, focusing primarily on magazines. I managed up to 4-5 different publications at a time. Today I still oversee some magazine operations, but I am now expanding more into web design and development. My goal is to bridge the gap between the design and development teams, as well as make the company more profitable. In addition to expanding my skillset and responsibilities, my project portfolio has grown vastly as well. In the past 2 years I have worked on signage, branding, advertising, magazines, annual reports, emailers, landing pages, websites, and more."}]
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
//END WORK SECTION

//EDUCATION SECTION
var education = {
"schools": {
	"name": "Shippensburg University",
	"location": "Shippensburg, PA",
	"degree": "BA",
	"major": "Art & Design",
	"minor": "Communications Journalism and Graphic Design",
	"dates": "2010-2014",
	"url": "http://www.ship.edu/"},
"online": {
	"title": "Front-End Web Development - Udacity",
	"school": "Udacity",
	"dates": "2016",
	"url": "https://www.udacity.com/"}
};

var formattedEducation = [];
formattedEducation.push(HTMLschoolName.replace("%data%", education.schools.name).replace("%data_degree%", education.schools.degree));
//formattedEducation.push(HTMLschoolName.replace("%data_degree%", education.schools.degree));
formattedEducation.push(HTMLschoolDates.replace("%data%", education.schools.dates));
formattedEducation.push(HTMLschoolLocation.replace("%data%", education.schools.location));
formattedEducation.push(HTMLschoolMajor.replace("%data%", education.schools.major));
formattedEducation.push(HTMLschoolMinor.replace("%data%", education.schools.minor));
formattedEducation.push(HTMLonlineTitle.replace("%data%", education.online.title));
formattedEducation.push(HTMLschoolDates.replace("%data%", education.online.dates));
//console.log(formattedEducation);
$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedEducation);

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
}

education.display();
r
//END EDUCATION SECTION

//PROJECT SECTION
var projects = {
"projects": [{
	"title": "Portfolio Site",
	"dates": "March 2016",
	"description": "Project 1 in Front-End Developer Nanodegree - HTML/CSS",
	"images": "images/project1"
	},
	{
	"title": "Online Resume",
	"dates": "May 2016",
	"description": "Project 2 in Front-End Developer Nanodegree - JavaScript",
	"images": "images/project2"
	}]
}; // closing:: var projects

 projects.display = function() {

 	for (project in projects.projects) {
 		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		//if (projects.projects[project].images.length > 0) {
			//for (images in projects.projects[project].images) {
				//var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project]).images[image]);
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedImage);
			//}
		//}
	}

 }; // closing:: projects.display = function()
projects.display();
//END PROJECT SECTION
