// Toggle menu display on menu icon click





// Toggle search box on search icon click
document.getElementById("search-icon").addEventListener("click", function() {
    document.querySelector(".search-box").classList.toggle("active");
});

// Scroll to the searched element
document.getElementById("searchButton").addEventListener("click", function() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var targetElement = document.getElementById(searchTerm);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        alert("Element not found.");
    }
});

// Cart functionality
document.getElementById("cart-icon").addEventListener("click", function() {
    // Add your cart functionality here
    alert("Cart functionality will be implemented here.");
});
