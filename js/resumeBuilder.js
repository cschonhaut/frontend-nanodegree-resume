//Click Location Function
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});
//End Click Location Function

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
	"biopic": "images/CS-web.png"
};

bio.display = function() {

var headerRole = "Designer/Developer";
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#mapDiv").append(googleMap);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
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
$("#footerContacts").append(formattedContacts);

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
};
bio.display();

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
	"description": "My responsibilities as a designer have grown tremendously since beginning with the company. I began as a print-heavy designer, focusing primarily on magazines. I managed up to 4-5 different publications at a time. Today I still oversee some magazine operations, but I am now expanding more into web design and development. My goal is to bridge the gap between the design and development teams, as well as make the company more profitable. In addition to expanding my skillset and responsibilities, my project portfolio has grown vastly as well. In the past 2 years I have worked on signage, branding, advertising, magazines, annual reports, emailers, landing pages, websites, and more."}]
};

work.display = function(){
	work_count = Object.keys(work.jobs).length;
	//console.log(work_count);
	if(work_count > 0) {

		for (i = 0; i < work_count; i++) {

	//for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		//concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
	$(".work-entry:last").append(formattedDescription);
	}
	}
};
work.display();
//END WORK SECTION


//EDUCATION SECTION
var education = {
"schools": [
		{
			"name": "Shippensburg University",
			"location": "Shippensburg, PA",
			"degree": "BA",
			"majors": ["Art & Design"],
			"minor": "Communications Journalism and Graphic Design",
			"dates": "2010-2014",
			"url": "http://www.ship.edu/"
		},
		 {
			"name": "AIY",
			"location": "York, PA",
			"degree": "BA",
			"majors": ["Interactive & Web"],
			"minor": "Business",
			"dates": "2014-2016",
			"url": "http://www.aiy.edu/"
		}
	],
"onlineCourses": [
		{
			"title": "Front-End Web Development",
			"school": "Udacity",
			"date": "2016",
			"url": "https://www.udacity.com/"
		},
		{
			"title": "Full Stack Web Development",
			"school": "Udacity",
			"date": "2017",
			"url": "https://www.udacity.com/"
		}
	]
};

education.display = function() {


	school_count = Object.keys(education.schools).length;
	online_course_count = Object.keys(education.onlineCourses).length;


	if(school_count > 0) {
		var formattedEducation = [];

		for (i = 0; i < school_count; i++) {

			$("#education").append(HTMLschoolStart);

			formattedEducation.push(HTMLschoolName.replace("%data%", education.schools[i].name).replace("%data_degree%", education.schools[i].degree));
			 formattedEducation.push(HTMLschoolLocation.replace("%data%", education.schools[i].location));
			 //formattedEducation.push(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
			 formattedEducation.push(HTMLschoolDates.replace("%data%", education.schools[i].dates));
			 formattedEducation.push(HTMLschoolMajors.replace("%data%", education.schools[i].majors));
			 formattedEducation.push(HTMLschoolMinor.replace("%data%", education.schools[i].minor));
			 formattedEducation.push(HTMLschoolURL.replace("#", education.schools[i].url).replace("%data%", education.schools[i].url));
		}
		$(".education-entry:last").append(formattedEducation);
	}

	if(online_course_count > 0) {
		var formattedOnlineCourses = [];

		$("#education").append(HTMLonlineClasses);

		for (i = 0; i < online_course_count; i++) {

			$("#education").append(HTMLschoolStart);

			 formattedOnlineCourses.push(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("%data_school%", education.onlineCourses[i].school));
			 //formattedOnlineCourses.push(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
			 formattedOnlineCourses.push(HTMLonlineDate.replace("%data%", education.onlineCourses[i].date));
			 formattedOnlineCourses.push(HTMLonlineURL.replace("#", education.onlineCourses[i].url).replace("%data%", education.onlineCourses[i].url));

		}

		$(".education-entry:last").append(formattedOnlineCourses);

	}

}; // END education.display

education.display();
//END EDUCATION SECTION

//PROJECT SECTION
var projects = {
"projects": [{
	"title": "Portfolio Site",
	"dates": "March 2016",
	"description": "Project 1 in Front-End Developer Nanodegree - HTML/CSS",
	"images": ["images/project1.png"]
	},
	{
	"title": "Online Resume",
	"dates": "May 2016",
	"description": "Project 2 in Front-End Developer Nanodegree - JavaScript",
	"images": ["images/project2.png"]
	}]
}; // closing:: var projects

 projects.display = function() {
	projects_count = Object.keys(projects.projects).length;
	console.log(projects_count);
	if(projects_count > 0) {

		for (i = 0; i < projects_count; i++) {

 		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);
		//if (projects.projects[project].images.length > 0) {
			//for (images in projects.projects[project].images) {
				//var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project]).images[image]);
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
				$(".project-entry:last").append(formattedImage);
			//}
		}//}
	}

 }; // closing:: projects.display = function()
projects.display();
//END PROJECT SECTION
