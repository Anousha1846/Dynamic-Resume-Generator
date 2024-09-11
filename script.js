var resumeForm = document.getElementById('resumeForm');
var skillsContainer = document.getElementById('skillsContainer');
var addSkillsBtn = document.getElementById('addSkillsBtn');
var resumeOutput = document.getElementById('resumeOutput');
var isSkillsFieldVisible = false;
// Toggle Skills Input Field
var toggleSkillsField = function () {
    if (isSkillsFieldVisible) {
        var skillsDiv = document.querySelector('.extraSkillDiv');
        if (skillsDiv)
            skillsContainer.removeChild(skillsDiv);
    }
    else {
        var skillsDiv = document.createElement('div');
        skillsDiv.classList.add('extraSkillDiv');
        skillsDiv.innerHTML = "\n            <label for=\"addMoreSkills\">Add More Skills:</label>\n            <input type=\"text\" name=\"addMoreSkills\" id=\"addMoreSkills\">\n        ";
        skillsContainer.appendChild(skillsDiv);
    }
    isSkillsFieldVisible = !isSkillsFieldVisible;
};
var generateResume = function (event) {
    event.preventDefault();
    // Fetch Personal Information
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var dateOfBirth = document.getElementById('dateOfBirth').value;
    var profilePicture = document.getElementById('profilePicture').files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var _a;
        var profilePictureURL = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        // Fetch Experience
        var jobTitle = document.getElementById('jobTitle').value;
        var company = document.getElementById('Company').value;
        var duration = document.getElementById('Duration').value;
        // Fetch Education
        var degree = document.getElementById('Degree').value;
        var institution = document.getElementById('Institution').value;
        var year = document.getElementById('Year').value;
        // Fetch Skills
        var professionalSkill = document.getElementById('ProfessionalSkill').value;
        var softSkill = document.getElementById('SoftSkill').value;
        var additionalSkill = isSkillsFieldVisible
            ? document.getElementById('addMoreSkills').value
            : '';
        // Generate Resume
        var resumeHTML = "\n        <div class=\"main\" style=\"border: 2px solid grey; margin: 20px; padding: 10px 30px; box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.19); background-color: rgb(218, 239, 240); border-radius: 8px\"> \n          <h1 style=\"text-decoration: underline; font-family: monospace; font-size:35px;\">Resume</h1><br>\n          <div class=\"resume-section\">\n              <h2>".concat(name, "</h2>\n              <h5>Email: ").concat(email, "</h5>\n              <h5>Phone: ").concat(phone, "</h5>\n              <h5>Date of Birth: ").concat(dateOfBirth, "</h5>\n              <img src=\"").concat(profilePictureURL, "\" alt=\"Profile Picture\" style=\"width:150px;height:150px;border-radius:50%;\"><br><br>\n          </div>\n          <div class=\"resume-section\">\n              <h3>Education</h3>\n              <h4>Degree: ").concat(degree, "</h4>\n              <h5>Institution: ").concat(institution, "</h5>\n              <h5>Year: ").concat(year, "</h5>\n          </div>\n          <div class=\"resume-section\">\n              <h3>Experience</h3>\n              <h4>Job Title: ").concat(jobTitle, "</h4>\n              <h5>Company: ").concat(company, "</h5>\n              <h5>Duration: ").concat(duration, "</h5>\n          </div>\n          <div class=\"resume-section\">\n              <h3>Skills</h3>\n              <h4>Professional Skills: ").concat(professionalSkill, "</h4>\n              <h5>Soft Skills: ").concat(softSkill, "</h5>\n              ").concat(additionalSkill ? "<h5>Additional Skill: ".concat(additionalSkill, "</h5>") : '', "\n          </div>\n        </div>   \n        ");
        resumeOutput.innerHTML = resumeHTML;
    };
    reader.readAsDataURL(profilePicture);
};
addSkillsBtn.addEventListener('click', toggleSkillsField);
resumeForm.addEventListener('submit', generateResume);
