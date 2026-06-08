const promptInput = document.querySelector("#tripPrompt");
const plannerForm = document.querySelector(".planner-card");
const quickPromptButtons = document.querySelectorAll("[data-prompt]");
const outputTitle = document.querySelector("#outputTitle");
const outputText = document.querySelector("#outputText");
const miniItinerary = document.querySelector("#miniItinerary");

const sampleSteps = [
  ["1", "Route"],
  ["2", "Budget"],
  ["3", "Book"],
];

function updatePreview(prompt) {
  const cleanPrompt = prompt.trim();

  if (!cleanPrompt) {
    promptInput.focus();
    return;
  }

  outputTitle.textContent = "Smart plan generated.";
  outputText.textContent = `TripWise will turn “${cleanPrompt}” into a route, budget, weather check, and booking shortlist — all on this screen.`;
  miniItinerary.innerHTML = sampleSteps
    .map(([step, label]) => `<li><strong>${step}</strong><span>${label}</span></li>`)
    .join("");
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
