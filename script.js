const promptInput = document.querySelector("#tripPrompt");
const plannerForm = document.querySelector("#planner");
const quickPromptButtons = document.querySelectorAll("[data-prompt]");
const outputTitle = document.querySelector("#output-title");
const outputText = document.querySelector("#outputText");
const miniItinerary = document.querySelector("#miniItinerary");

const sampleDays = [
  ["Day 1", "Arrival, easy check-in, local dinner, sunset viewpoint"],
  ["Day 2", "Signature experience, cafe stop, beach or city walk"],
  ["Day 3", "Flexible adventure, shopping window, relaxed farewell"],
];

function updatePreview(prompt) {
  const cleanPrompt = prompt.trim();

  if (!cleanPrompt) {
    promptInput.focus();
    return;
  }

  outputTitle.textContent = "Your smart trip preview is ready.";
  outputText.textContent = `TripWise will turn “${cleanPrompt}” into a budget-aware plan with live-price checkpoints, weather notes, and bookable next steps.`;
  miniItinerary.innerHTML = sampleDays
    .map(([day, plan]) => `<li><strong>${day}</strong><span>${plan}</span></li>`)
    .join("");
  document.querySelector("#deals").scrollIntoView({ behavior: "smooth", block: "center" });
}

quickPromptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    promptInput.value = button.dataset.prompt;
    updatePreview(promptInput.value);
  });
});

plannerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updatePreview(promptInput.value);
});

document.querySelectorAll("[data-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    button.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(0.94)" },
        { transform: "scale(1)" },
      ],
      { duration: 180, easing: "ease-out" }
    );
  });
});
