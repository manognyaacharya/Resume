/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
        "name":"Manognya",
        "role":"front end web developer",
        "contact":{
            "email":"manognyaacharya95@gmail.com",
            "mobile":"8197888280",
            "github":"ce",
            "location":"mumbai"
        },
        "welcome message":"hello",
        "skills":["dance","music"],
        "picture": "images/fry.jpg"
    }

var work ={
        "jobs":[
        {
            "employer":"James Bond",
            "title":"HR",
            "location":"Texas",
            "dates":2013,
            "description":"Communication Skills, Leadership"
        },
        {
             "employer":"James Bond",
            "title":"HR",
            "location":"Texas",
            "dates":2013,
            "description":"Communication Skills, Leadership"
        }]
    }
var education={

    "school": [{
        "name": "KVM",
        "location": "Bengaluru",
        "majors": ["12th"],
        "year": ["2011", "2012"],
        "url": "http://example.com"
    }, {
        "name": "DSCE",
        "location": "Bengaluru",
        "majors": "Engg",
        "year": ["2012", "2016"],
        "url": "http://example.com"
    }],
    "onlineCourses":[
    {
        "title":"JavaScript Syntax",
        "school":"Udacity",
        "dates":2014,
        "url":"http;//www.udacity.com/course/ud804"
    }]
}

var projects={
        "projects":[
        {
            "title":"Solar Powered Wheel",
            "dates":2012,
            "description":"Solar powered Wheel is used top clean all the water bodies",
            "images":["im/fry.jpg"]
        }]
    }
function displayWork(){

    if (bio.skills.length>0){
        $("#header").append(HTMLskillsStart);
        var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
         $("#skills").append(formattedSkill);
        formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
        $("#skills").append(formattedSkill);
    }

    for (job in work.jobs){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle=formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();

$(document).click(function(loc){
    var x=loc.pageX;
    var y=loc.pageY;
    logClicks(x,y);
});


function inName(name){
    name=name.trim().split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
    return name[0]+" "+name[1];
}
$('#main').append(internationalizeButton);


projects.display=function(){
    for(project in projects.projects){
         $("#projects").append(HTMLprojectStart);

         var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
         $(".project-entry:last").append(formattedTitle);

         var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
         $(".project-entry:last").append(formattedDates);

          var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
     $(".project-entry:last").append(formattedDescription);

     if (projects.projects[project].images.length > 0) {
       for (image in projects.projects[project].images) {
         var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
         $(".project-entry:last").append(formattedImage);
       }
     }
}
}
projects.display();

$("#mapDiv").append(googleMap);