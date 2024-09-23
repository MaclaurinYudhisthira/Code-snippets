const jobCards = document.querySelectorAll('div.job-card');

// Filter the divs that have a child div with an enabled input
const enabledJobCards = Array.from(jobCards).filter(jobCard => {
    // Check for a child div with an input element
    const childInput = jobCard.querySelector('div input');
    if (!childInput || childInput.disabled) {
        return false;  // Skip if input doesn't exist or is disabled
    }

    // Check for the job-title div
    const jobTitleDiv = jobCard.querySelector('div.job-title');
    if (jobTitleDiv) {
        // Get the text inside the job-title div
        const jobTitleText = jobTitleDiv.textContent.toLowerCase();

        // Define the keywords to filter out
        const excludedKeywords = ["quality assurance", "test", "testing", "consultent"];

        // Check if any of the excluded keywords are present in the job title
        if (excludedKeywords.some(keyword => jobTitleText.includes(keyword))) {
            return false; // Skip if the job title contains any excluded keyword
        }
    }

    // Return true if all conditions are met
    return true;
});




function clickJobCardInputs(jobCards) {
    let index = 0; // Start at the first job card

    const intervalId = setInterval(() => {
        // Check if there are still job cards left to process
        if (index < jobCards.length) {
            const inputField = jobCards[index].querySelector('div input');

            if (inputField && !inputField.disabled) {
                inputField.click(); // Click the input field
                console.log(`Clicked input of job card ${index + 1}`);
            }

            index++; // Move to the next job card
        } else {
            clearInterval(intervalId); // Clear the interval when done
            console.log('All job cards processed');
        }
    }, 1000); // 1 second interval (1000 milliseconds)
}


clickJobCardInputs(enabledJobCards);

