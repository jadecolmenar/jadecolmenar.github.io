document.getElementById('nameButton').addEventListener('click', function() {
    let userName = prompt('Please enter your name:');
    document.getElementById('displayName').textContent = "Hello, " + userName + "!";
});

document.getElementById('profileImage').addEventListener('click', function() {
    if (this.style.width === "200px") {
        this.style.width = "400px";  // Enlarge
    } else {
        this.style.width = "200px";  // Restore original size
    }
});

document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.color = 'red'; // Change text color on hover
    });
    item.addEventListener('mouseout', function() {
        this.style.color = ''; // Reset to default color when mouse leaves
    });
});