// Get the modals
let healthModal = document.getElementById("healthModal");
let trainingModal = document.getElementById("trainingModal");
let generalModal = document.getElementById("generalModal");
let ownerModal = document.getElementById("ownerModal");

// Get the button that opens the modal
let healthBtn = document.getElementById("healthBtn");
let trainingBtn = document.getElementById("trainingBtn");
let generalBtn = document.getElementById("generalBtn");
let ownerBtn = document.getElementById("ownerBtn");

// Get the <span> element that closes the modals
let spanHealth = document.getElementsByClassName("close")[0];
let spanTraining = document.getElementsByClassName("close")[1];
let spanGeneral = document.getElementsByClassName("close")[2];
let spanOwner = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
healthBtn.onclick = function () {
    healthModal.style.display = "block";
}

trainingBtn.onclick = function () {
    trainingModal.style.display = "block";
}

generalBtn.onclick = function () {
    generalModal.style.display = "block";
}

ownerBtn.onclick = function () {
    ownerModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanHealth.onclick = function () {
    healthModal.style.display = "none";
}
spanTraining.onclick = function () {
    trainingModal.style.display = "none";
}
spanGeneral.onclick = function () {
    generalModal.style.display = "none";
}
spanOwner.onclick = function () {
    ownerModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == healthModal) {
        healthModal.style.display = "none";
    }
    else if (event.target == trainingModal) {
        trainingModal.style.display = "none";
    }

    else if (event.target == generalModal) {
        generalModal.style.display = "none";
    }
    else if (event.target == ownerModal) {
        ownerModal.style.display = "none";
    }
}

// window.onclick = function (event) {
//     if (event.target == trainingModal) {
//         trainingModal.style.display = "none";
//     }
// }
// window.onclick = function (event) {
//     if (event.target == generalModal) {
//         generalModal.style.display = "none";
//     }
// }
// window.onclick = function (event) {
//     if (event.target == ownerModal) {
//         ownerModal.style.display = "none";
//     }
// }