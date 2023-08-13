const issueSelect = document.getElementById("issue");
const stepsContainer = document.getElementById("steps-container");

const steps = {
    internet: [
        "Check if the router is plugged in and powered on.",
        "Restart the router.",
        "Verify the Wi-Fi password is correct.",
        // Add more steps as needed
    ],
    software: [
        "Close and reopen the software application.",
        "Check for updates for the software.",
        "Restart your computer.",
        // Add more steps as needed
    ],
    // Add more issues and their steps here
};

issueSelect.addEventListener("change", () => {
    const selectedIssue = issueSelect.value;
    const issueSteps = steps[selectedIssue];
    
    if (issueSteps) {
        const stepsHTML = issueSteps.map((step, index) => {
            return `<div class="step"><span class="step-number">${index + 1}.</span>${step}</div>`;
        }).join("");
        
        stepsContainer.innerHTML = stepsHTML;
    } else {
        stepsContainer.innerHTML = "";
    }
});
