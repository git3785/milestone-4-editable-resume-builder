var _a;
// Select the form and attach a submit event listener
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Get form input elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('Experience');
    var skillsElement = document.getElementById('skills');
    // Ensure all elements are present
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        // Extract values from elements
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create a resume preview section
        var resumeResult = "\n            <h2>Resume Preview</h2>\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ".concat(name_1, "</span></p>\n            <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, "</span></p>\n            <p><strong>Phone:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span></p>\n\n            <h3>Education</h3>\n            <p><span id=\"edit-education\" class=\"editable\">").concat(education, "</span></p>\n\n            <h3>Experience</h3>\n            <p><span id=\"edit-experience\" class=\"editable\">").concat(experience, "</span></p>\n\n            <h3>Skills</h3>\n            <p><span id=\"edit-skills\" class=\"editable\">").concat(skills, "</span></p>\n        ");
        // Get the resume result element and display the preview
        var resumeResultElement = document.getElementById('resumeResult');
        if (resumeResultElement) {
            resumeResultElement.innerHTML = resumeResult;
            makeEditable();
        }
        else {
            console.error('Some form fields are missing');
        }
        function makeEditable() {
            var editableElements = document.querySelectorAll('.editable');
            editableElements.forEach(function (element) {
                element.addEventListener('click', function () {
                    var _a;
                    var currentElement = element;
                    var currentValue = currentElement.textContent || '';
                    // Replace content with an input field
                    if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                        var input_1 = document.createElement('input'); // Corrected method to create input
                        input_1.type = 'text';
                        input_1.value = currentValue;
                        input_1.classList.add('editing-input'); // Corrected class name
                        currentElement.style.display = 'none'; // Hide the current element
                        (_a = currentElement.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement); // Insert input before current element
                        input_1.focus(); // Focus the input field
                        // When input loses focus, update the text content
                        input_1.addEventListener('blur', function () {
                            currentElement.textContent = input_1.value;
                            input_1.remove(); // Remove the input field
                            currentElement.style.display = 'inline'; // Make the current element visible again
                        });
                    }
                });
            });
        }
    }
});
