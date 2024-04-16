// Function to create card HTML for each roommate
var roommates = JSON.parse('{{ preferences | tojson | safe }}');
function createCard(roommate) {
    return `<article class="card" onclick="openModal(${JSON.stringify(roommate).replace(/"/g, '&quot;')})">
        <div class="profile-pic"></div>
        <div class="info">
            <p><strong>Name:</strong> ${roommate.name}</p>
            <p><strong>Contact Details:</strong> ${roommate.contactDetails}</p>
            <p><strong>Branch:</strong> ${roommate.branch}</p>
            <p><strong>Preference:</strong> ${roommate.special}</p>
        </div>
    </article>`;
}

// Function to display roommates on the page
function displayRoommates(roommatesList) {
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = ''; // Clear the container
    roommatesList.forEach(roommate => {
        cardsContainer.innerHTML += createCard(roommate); // Add filtered roommates
    });
}

// Function to open the modal with detailed information
function openModal(roommate) {
    document.getElementById('modalName').textContent = `Name: ${roommate.name}`;
    document.getElementById('modalPhone').textContent = `Phone: ${roommate.contactDetails}`;
    document.getElementById('modalEmail').textContent = `Email: ${roommate.email}`;
    document.getElementById('modalNote').textContent = `Special Note: ${roommate.note}`;
    document.getElementById('contactModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Function to filter roommates based on the search query and checkboxes
function filterRoommates() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const isVeg = document.getElementById('veg').checked;
    const is9ptr = document.getElementById('9ptr').checked;
    const isMorning = document.getElementById('morning').checked;

    // Apply filter conditions
    const filteredRoommates = roommates.filter(roommate => {
        const matchesSearchQuery = roommate.name.toLowerCase().includes(searchQuery) ||
                                   roommate.branch.toLowerCase().includes(searchQuery) ||
                                   roommate.special.toLowerCase().includes(searchQuery);
        const matchesVeg = !isVeg || roommate.special.toLowerCase().includes('veg');
        const matches9ptr = !is9ptr || roommate.special.toLowerCase().includes('9');
        const matchesMorning = !isMorning || roommate.special.toLowerCase().includes('morning');

        return matchesSearchQuery && matchesVeg && matches9ptr && matchesMorning;
    });

    displayRoommates(filteredRoommates);
}

// Setup event listeners and initial display
document.addEventListener('DOMContentLoaded', function () {
    // Toggle mobile menu
    document.getElementById('mobileMenuToggle').addEventListener('click', function() {
        var navLinks = document.getElementById('navLinks');
        navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
    });

    // Initialize the display with all roommates
    displayRoommates(roommates);

    // Setup the close button for the modal
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        closeModal();
    };
});
