var bio = {
  name: 'Brian Bister',
  role: 'Software Engineer',
  contacts: {
    mobile: '(909)263-5928',
    email: 'brianbister@gmail.com',
    github: 'https://github.com/brianbister',
    location: 'Los Angeles, CA'
  },
  welcomeMessage: 'Hello!',
  skills: [
    'C++',
    'Python',
    'Databases',
    'HTML/CSS/JavaScript',
    'Machine Learning',
  ],
  biopic: 'images/me.png'
};

bio.display = function() {
  var headerSelector = $('#header');
  headerSelector.prepend(HTMLheaderRole.replace('%data%', this.role));
  headerSelector.prepend(HTMLheaderName.replace('%data%', this.name));
  headerSelector.append(HTMLbioPic.replace('%data%', this.biopic));
  headerSelector.append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));
  headerSelector.append(HTMLskillsStart);
  for (var i = 0; i < this.skills.length; i++) {
    $('#skills').append(HTMLskills.replace('%data%', this.skills[i]));
  }

  var topContactsSelector = $('#topContacts');
  topContactsSelector.append(HTMLmobile.replace('%data%', this.contacts.mobile));
  topContactsSelector.append(HTMLemail.replace('%data%', this.contacts.email));
  topContactsSelector.append(HTMLgithub.replace('%data%', this.contacts.github));
  topContactsSelector.append(HTMLlocation.replace('%data%', this.contacts.location));

  var footerContactsSelector = $('#footerContacts');
  footerContactsSelector.append(HTMLmobile.replace('%data%', this.contacts.mobile));
  footerContactsSelector.append(HTMLemail.replace('%data%', this.contacts.email));
  footerContactsSelector.append(HTMLgithub.replace('%data%', this.contacts.github));
  footerContactsSelector.append(HTMLlocation.replace('%data%', this.contacts.location));
};

var education = {
  schools: [{
    name: 'UCLA',
    location: 'Los Angeles, CA',
    degree: 'B.S.',
    majors: ['Computer Science and Engineering'],
    dates: '2009 - 2013',
    url: 'www.ucla.edu'
  }],
  onlineCourses: [{
    title: 'Front-End Nanodegree',
    school: 'Udacity',
    date: '2016',
    url: 'https://www.udacity.com/',
  }, {
    title: 'Machine Learning',
    school: 'Coursera - Stanford',
    date: '2016',
    url: 'https://www.coursera.org/'
  }],
};

education.display = function() {
  var educationSelector = $('#education');
  for (var i = 0; i < this.schools.length; i++) {
    var schoolText = HTMLschoolName.replace('%data%', this.schools[i].name) +
      HTMLschoolDegree.replace('%data%', this.schools[i].degree) +
      HTMLschoolDates.replace('%data%', this.schools[i].dates) +
      HTMLschoolLocation.replace('%data%', this.schools[i].location);
    for (var j = 0; j < this.schools[i].majors.length; j++) {
      schoolText +=
        HTMLschoolMajor.replace('%data%', this.schools[i].majors[j]);
    }
    educationSelector.append(HTMLschoolStart);
    $('.education-entry:last').html(schoolText);
  }
  educationSelector.append(HTMLonlineClasses);
  for (i = 0; i < this.onlineCourses.length; i++) {
    var onlineCourseText =
      HTMLonlineTitle.replace('%data%', this.onlineCourses[i].title) +
      HTMLonlineSchool.replace('%data%', this.onlineCourses[i].school) +
      HTMLonlineDates.replace('%data%', this.onlineCourses[i].date) +
      HTMLonlineURL.replace('%data%', this.onlineCourses[i].url);
    educationSelector.append(HTMLschoolStart);
    $('.education-entry:last').html(onlineCourseText);
  }
};

var work = {
  jobs: [{
    employer: 'Google',
    title: 'Software Engineer',
    location: 'Venice, CA',
    dates: 'March 2016 - Present',
    description: 'Works on infrastructure to aid in the development of ' +
      'several machine learning and machine perception ' +
      'projects. Develops a pipeline to ease measuring the ' +
      'efficiency of machine learning algorithms and generation ' +
      'of ground truth data in C++.',
  }, {
    employer: 'Omaze',
    title: 'Senior Software Engineer',
    location: 'Culver City, CA',
    dates: 'June 2014 - March 2016',
    description: 'Worked as a back-end engineer on a site focussed around ' +
      'charitable giving.  Developed a highly distributed RESTful API ' +
      'built in Python using Flask.'
  }, {
    employer: 'Symantec',
    title: 'Software Quality Assurance Engineer',
    location: 'Culver City, CA',
    dates: 'July 2013 - June 2014',
    description: 'Worked as a test engineer for a team which used machine ' +
      'learning techniques to classify malware.'
  }, {
    employer: 'Symantec',
    title: 'Software Quality Assurance Engineer - Intern',
    location: 'Culver City, CA',
    dates: 'November 2011 - September 2012',
    description: 'Worked as a test engineer for a team that developed a ' +
      'Windows driver.'
  }, {
    employer: 'Live Entertainment Network',
    title: 'Web Developer - Intern',
    location: 'Los Angeles, CA',
    dates: 'June 2011 - September 2011',
    description: 'Worked as a back-end engineer for a social-networking site ' +
      'using PHP and Apache.'
  }],
};

work.display = function() {
  var workExperienceSelector = $('#workExperience');
  for (var i = 0; i < this.jobs.length; i++) {
    var workText = HTMLworkEmployer.replace('%data%', this.jobs[i].employer) +
      HTMLworkTitle.replace('%data%', this.jobs[i].title) +
      HTMLworkDates.replace('%data%', this.jobs[i].dates) +
      HTMLworkLocation.replace('%data%', this.jobs[i].location) +
      HTMLworkDescription.replace('%data%', this.jobs[i].description);
    workExperienceSelector.append(HTMLworkStart);
    $('.work-entry:last').html(workText);
  }
};

var projects = {
  projects: [{
    title: 'Portfolio Site',
    dates: 'May 2016',
    description: 'A website showcasing my projects.',
    images: ['images/portfolio.png']
  }]
};

projects.display = function() {
  var projectsSelector = $('#projects');
  for (var i = 0; i < this.projects.length; i++) {
    var projectText =
      HTMLprojectTitle.replace('%data%', this.projects[i].title) +
      HTMLprojectDates.replace('%data%', this.projects[i].dates) +
      HTMLprojectDescription.replace('%data%', this.projects[i].description);
    for (var j = 0; j < this.projects[i].images.length; j++) {
      projectText += HTMLprojectImage.replace('%data%', this.projects[i].images[i]);
    }
    projectsSelector.append(HTMLprojectStart);
    $('.project-entry:last').html(projectText);
  }
};

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
