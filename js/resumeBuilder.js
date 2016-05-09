//JSON object with my biographical information used on the header

var bio = {
	"name" : "Gil Roman",
	"role" : "Front End Developer",
	"contacts" : {
		"mobile" : "123-456-7890",
		"email" : "gil@digitalgil.com",
		"github" : "gilroman",
		"location" : "Brooklyn"
	},
	"welcomeMessage" : "Hi! I'm Gil, a front end developer based in Brooklyn, NY.  I enjoy working in teams, communicating clearly and taking on projects with meaning.",
	"skills" : ["HTML", "CSS", "Bootstrap", "Javascript", "JQuery"],
	"biopic" : "images/haleakala.png",
	"display" : function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMessage);
		$("#header").append(HTMLskillsStart);

//Display array of skills
		bio.skills.forEach(function(val){
			var formattedSkills = HTMLskills.replace("%data%", val);
			$("#skills:last").append(formattedSkills);
		});

//Display footer contacts
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);
	}
};


//JSON object with my work history

var work = {
	"jobs" : [
		{
		"employer" : "Donald Kaufman Color",
		"title" : "Studio Director",
		"location" : "New York",
		"dates" : "2003 - Present",
		"description" : "Managed the technical and daily business needs of the studio. Implemented an hourly billing solution and other solutions to spreadsheet and paper based processes."
		},
		{
		"employer" : "Sullivan and Cromwell",
		"title" : "Paralegal",
		"location" : "New York",
		"dates" : "2002-2003",
		"description" : "Assisted attorneys in the discovery process and the management of legal case exhibits of various legal cases."
		},
		{
		"employer" : "Bear Stearns",
		"title" : "Junior Analyst",
		"location" : "New York",
		"dates" : "1998-2001",
		"description" : "Mantained the internal trading system's data set of national payment data."
		}],
		"display" : function(){
			for (job in work.jobs){
    		if (work.hasOwnProperty("jobs")) {
    			var formatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    			var formatedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    			var formatedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    			var formatedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    			var formatedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    			$("#workExperience").append(HTMLworkStart);
    			$(".work-entry:last").append(formatedEmployer+formatedWorkTitle);
    			$(".work-entry:last").append(formatedDates);
    			$(".work-entry:last").append(formatedWorkLocation);
    			$(".work-entry:last").append(formatedWorkDescription);
    		}
    	}
		}
};


//JSON object featuring projects I have completed

var projects = {
	"projects" : [
	{
		"title" : "Sample Project 1",
		"dates" : "2015",
		"description" : "loreimpsu",
		"pictures" : ["images/197x148.gif","images/197x148.gif"]
	},
	{
		"title" : "Sample Project 2",
		"dates" : "2016",
		"description" : "loreimpsu",
		"pictures" : ["images/197x148.gif","images/197x148.gif"]
	}],
		"display" : function(){
			for (project in projects.projects){
				if (projects.hasOwnProperty("projects")){
				$("#projects").append(HTMLprojectStart);
  			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
  			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
  			var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  			var formattedProjectPic = HTMLprojectImage.replace("%data%", projects.projects[project].pictures);
  			$(".project-entry:last").append(formattedProjectTitle);
  			$(".project-entry:last").append(formattedProjectDates);
  			$(".project-entry:last").append(formattedProjectDesc);

				//Display array of project images
				projects.projects[project].pictures.forEach(function(val){
				var formattedProjectPic = HTMLprojectImage.replace("%data%", val);
				$(".project-entry:last").append(formattedProjectPic);
				});
  			}
  		}
  	}
};


//JSON object with my education information

var education = {
	"schools" : [
	{
	"name" : "CUNY Baruch College",
	"location" : "New York",
	"dates" : 2001,
	"degree" : "BBA",
	"majors" : ["Computer Information Systems"],
	"url" : "http://www.cuny.edu"
	}],
	"onlineCourses" : [
	{
		"title" : "Front End Developer Nanodegree" ,
		"school" : "Udacity",
		"dates" : 2016,
		"url" : "http://www.udacity.com"
	}],
	"display" : function(){
		for (school in education.schools){
			if (education.hasOwnProperty("schools")){
				$("#education").append(HTMLschoolStart);
				var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
				$(".education-entry:last").append(formattedSchoolDates);
				$(".education-entry:last").append(formattedSchoolLocation);
				var numberOfMajors = education.schools[school].majors.length;
				for (var i = 0; i < numberOfMajors; i++){
					var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[i]);
					$(".education-entry:last").append(formattedSchoolMajor);
				}
			}
		}

		for (onlineCourse in education.onlineCourses){
			if (education.hasOwnProperty("onlineCourses")) {
				$("#education").append(HTMLonlineClasses);
				$("#education").append(HTMLschoolStart)
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
				var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
				$(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineUrl);
			}
		}
	}
};


/* Adds a google map of all locations I have worked and studied at */

$("#mapDiv").append(googleMap);


/* Calls to all of the display function of each object */

bio.display();
work.display();
projects.display();
education.display();
