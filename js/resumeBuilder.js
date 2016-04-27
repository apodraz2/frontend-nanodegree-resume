/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name": "Adam Podraza",
  "role": "Software Engineer",
  "contacts": {
    "mobile": "773-304-8111",
    "email": "adamjpodraza@gmail.com",
    "twitter": "@paranoidandroid",
    "location": "Denver"
  },
  "welcome-message": "Welcome! I am Adam Podraza and I have been a software engineer for four years.",
  "skills": ["Android", "Core Java", "JavaScript", "Ruby on Rails", "HTML", "CSS", "JavaScript", "Web Development"],
  "bioPic": "images/denver_shelter.png"
}

var work = {
  "jobs": [{
    "position": "Developer",
    "employer": "Puppy Transit",
    "years": "2015-2016",
    "location": "Denver",
    "description": "As a developer with Puppy Transit, I created and maintained the primary web portal using Ruby on Rails. I also developed a complete Android application using Android Studio and deployed it to the Play store."
  },
  {
    "position": "Market Researcher",
    "employer": "Integrity Electronics",
    "years": "2011-2015",
    "location": "Chicago",
    "description": "With Integrity Electronics, my focus was business development. I helped identify new product categories for which Integrity could carry, as well as contacted suppliers."
  },
  {
    "position": "Development Coordinator",
    "employer": "Aquinas Literacy Center",
    "years": "2009-2011",
    "location": "Chicago",
    "description": "As the Development Coordinator, I was responsible for authoring grant proposals and soliciting partners for donations. Additionally, I handled new volunteer recruitment."
}]
}

var education = {
  "schools": [{
    "name": "DePaul University",
    "degree": "MS",
    "years": "2013-2015",
    "location": "Chicago",
    "major": "Software Engineering"
  },
  {
    "name": "University of Illinois at Chicago",
    "years": "2006-2008",
    "location": "Chicago",
    "degree": "BA",
    "major": "Anthropology"
  }
]
}

var projects = {
  "projects": [
    {
      "name": "GaoGao",
      "dates": "2016",
      "description": "Care and Todo tracking Android app for dogs."
    },
    {
      "name": "Puppy Transit Main Portal",
      "dates": "2015-2016",
      "description": "Home site for Puppy Transit. Written with Ruby on Rails."
    },
    {
      "name": "Go Ubiquitous",
      "dates": "2015-2016",
      "description": "Android watch face and watch app."
    },
    {
      "name": "Make it Material",
      "dates": "2015",
      "description": "Android app that displays news items to users."
    },
    {
      "name": "Build it Bigger",
      "dates": "2015",
      "description": "Android client and Google App Engine server. Displays jokes to user."
    }
  ]
}



var displayHeader = function() {

  $("#header").append(HTMLskillsStart);
  for(skill in bio.skills) {

    formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);

    $("#skills:last").append(formattedSkill);
  }

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").prepend(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").prepend(formattedEmail);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").prepend(formattedTwitter);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").prepend(formattedLocation);

  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio["welcome-message"]);
  $("#topContacts").append(formattedMessage);

  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").prepend(formattedPic);




}

displayHeader();


var displayWork = function() {
for(job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);

  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);

  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

  $(".work-entry:last").append(formattedDescription);
}
}

displayWork();

$("#main").append(internationalizeButton);

var inName = function(name) {
  var names = name.split(" ");

  var firstName = names[0];

  var secondName = names[1];

  firstName = firstName.toLowerCase();

  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

  secondName = secondName.toUpperCase();

  return firstName + " " + secondName;

}

projects.display = function() {

  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var projectName = HTMLprojectTitle.replace("%data%", projects.projects[project].name);

    var projectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);

    var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

    $(".project-entry:last").append(projectName);
    $(".project-entry:last").append(projectDates);
    $(".project-entry:last").append(projectDescription);
  }

}

education.display = function() {
  for(school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
    var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

    $(".education-entry:last").append(schoolName);
    $(".education-entry:last").append(schoolDates);
    $(".education-entry:last").append(schoolDegree);
    $(".education-entry:last").append(schoolLocation);
    $(".education-entry:last").append(schoolMajor);
  }
}
education.display();

projects.display();


$("#mapDiv").append(googleMap);
