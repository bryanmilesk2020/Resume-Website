/*document.addEventListener('DOMContentLoaded', function () {
    // Check if dark mode is enabled in localStorage on page load
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
*/

document.getElementById('mode-toggle').addEventListener('click', function() {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');
});

// Update localStorage based on the current mode
/*   if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
*/
 