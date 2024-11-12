// Select the form and attach a submit event listener
document.getElementById('resumeform')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get form input elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('Experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    // Ensure all elements are present
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        // Extract values from elements
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create a resume preview section
        const resumeResult = `
            <h2>Resume Preview</h2>
            <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name}</span></p>
            <p><strong>Email:</strong><span id="edit-email" class="editable"> ${email}</span></p>
            <p><strong>Phone:</strong><span id="edit-phone" class="editable"> ${phone}</span></p>

            <h3>Education</h3>
            <p><span id="edit-education" class="editable">${education}</span></p>

            <h3>Experience</h3>
            <p><span id="edit-experience" class="editable">${experience}</span></p>

            <h3>Skills</h3>
            <p><span id="edit-skills" class="editable">${skills}</span></p>
        `;

        // Get the resume result element and display the preview
        const resumeResultElement = document.getElementById('resumeResult');
        if (resumeResultElement) {
            resumeResultElement.innerHTML = resumeResult;
            makeEditable();
        }
        else {
            console.error('Some form fields are missing');
        }

        function makeEditable() {
            const editableElements = document.querySelectorAll('.editable');
            editableElements.forEach(element => {
                element.addEventListener('click', function () {
                    const currentElement = element as HTMLElement;
                    const currentValue = currentElement.textContent || '';

                    // Replace content with an input field
                    if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                        const input = document.createElement('input'); // Corrected method to create input
                        input.type = 'text';
                        input.value = currentValue;
                        input.classList.add('editing-input'); // Corrected class name
                        currentElement.style.display = 'none'; // Hide the current element
                        currentElement.parentElement?.insertBefore(input, currentElement); // Insert input before current element
                        input.focus(); // Focus the input field

                        // When input loses focus, update the text content
                        input.addEventListener('blur', function () {
                            currentElement.textContent = input.value;
                            input.remove(); // Remove the input field
                            currentElement.style.display = 'inline'; // Make the current element visible again
                        });
                    }
                });
            });
        }
    } 
});