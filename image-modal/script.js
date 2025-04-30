// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

function openModal(img) {
  modal.style.display = "flex";
  modalImg.src = img.dataset.enlarged;
  captionText.innerHTML = img.alt; // Use the thumbnail's alt as caption (optional)
}

// Get the close button
var closeBtn = document.querySelector(".close-button");

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Close the modal if the user clicks outside the image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}