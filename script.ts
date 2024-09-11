interface Skills {
    addMoreSkills: string;
}

const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const skillsContainer = document.getElementById('skillsContainer') as HTMLDivElement;
const addSkillsBtn = document.getElementById('addSkillsBtn') as HTMLButtonElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
let isSkillsFieldVisible = false;

// Toggle Skills Input Field
const toggleSkillsField = () => {
    if (isSkillsFieldVisible) {
        const skillsDiv = document.querySelector('.extraSkillDiv') as HTMLDivElement;
        if (skillsDiv) skillsContainer.removeChild(skillsDiv);
    } else {
        const skillsDiv = document.createElement('div');
        skillsDiv.classList.add('extraSkillDiv');
        skillsDiv.innerHTML = `
            <label for="addMoreSkills">Add More Skills:</label>
            <input type="text" name="addMoreSkills" id="addMoreSkills">
        `;
        skillsContainer.appendChild(skillsDiv);
    }
    isSkillsFieldVisible = !isSkillsFieldVisible;
};

const generateResume = (event: Event) => {
    event.preventDefault();
    
    // Fetch Personal Information
    const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).files![0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const profilePictureURL = event.target?.result
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const dateOfBirth = (document.getElementById('dateOfBirth') as HTMLInputElement).value;
    

        // Fetch Experience
        const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
        const company = (document.getElementById('Company') as HTMLInputElement).value;
        const duration = (document.getElementById('Duration') as HTMLInputElement).value;

        // Fetch Education
        const degree = (document.getElementById('Degree') as HTMLInputElement).value;
        const institution = (document.getElementById('Institution') as HTMLInputElement).value;
        const year = (document.getElementById('Year') as HTMLInputElement).value;

        // Fetch Skills
        const professionalSkill = (document.getElementById('ProfessionalSkill') as HTMLInputElement).value;
        const softSkill = (document.getElementById('SoftSkill') as HTMLInputElement).value;
        const additionalSkill = isSkillsFieldVisible
            ? (document.getElementById('addMoreSkills') as HTMLInputElement).value
            : '';

        // Generate Resume
        let resumeHTML = `
        <div class="main" style="border: 2px solid grey; margin: 20px; padding: 10px 30px; box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.19); background-color: rgb(218, 239, 240); border-radius: 8px"> 
          <h1 style="text-decoration: underline; font-family: monospace; font-size:35px;">Resume</h1><br>
          <div class="resume-section">
              <h2>${name}</h2>
              <h5>Email: ${email}</h5>
              <h5>Phone: ${phone}</h5>
              <h5>Date of Birth: ${dateOfBirth}</h5>
              <img src="${profilePictureURL}" alt="Profile Picture" style="width:150px;height:150px;border-radius:50%;"><br><br>
          </div>
          <div class="resume-section">
              <h3>Education</h3>
              <h4>Degree: ${degree}</h4>
              <h5>Institution: ${institution}</h5>
              <h5>Year: ${year}</h5>
          </div>
          <div class="resume-section">
              <h3>Experience</h3>
              <h4>Job Title: ${jobTitle}</h4>
              <h5>Company: ${company}</h5>
              <h5>Duration: ${duration}</h5>
          </div>
          <div class="resume-section">
              <h3>Skills</h3>
              <h4>Professional Skills: ${professionalSkill}</h4>
              <h5>Soft Skills: ${softSkill}</h5>
              ${additionalSkill ? `<h5>Additional Skill: ${additionalSkill}</h5>` : ''}
          </div>
        </div>   
        `;

        resumeOutput.innerHTML = resumeHTML;
    };

    reader.readAsDataURL(profilePicture);
};

addSkillsBtn.addEventListener('click', toggleSkillsField);
resumeForm.addEventListener('submit', generateResume);
