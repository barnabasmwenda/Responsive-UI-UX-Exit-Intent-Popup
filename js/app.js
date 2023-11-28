const overlay = document.getElementById("exitIntentOverlay");
const popup = document.getElementById("exitIntentPopup");
const closeIntentPopup = document.getElementById("closePopup");
const dontShowAgainCheckbox = document.getElementById("dontShowAgain");

const displayExitIntentPopup = () => {
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";
};

const closeExitIntentPopup = () => {
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
};

const handleDontShowAgain = () => {
  if (dontShowAgainCheckbox.checked) {
    localStorage.setItem("exitIntentPopupShown", "false");
  }
};

document.addEventListener("mouseleave", (event) => {
  if (event.clientY < 0) {
    const popupShown = localStorage.getItem("exitIntentPopupShown");
    if (popupShown !== "false") {
      displayExitIntentPopup();
    }
  }
});

const dismissModal = document.getElementById("dismissModal");
dismissModal.addEventListener("click", closeExitIntentPopup);

closeIntentPopup.addEventListener("click", closeExitIntentPopup);
overlay.addEventListener("click", closeExitIntentPopup);

dontShowAgainCheckbox.addEventListener("change", handleDontShowAgain);

const popupShown = localStorage.getItem("exitIntentPopupShown");
if (popupShown === "false") {
  dontShowAgainCheckbox.checked = true;
}
