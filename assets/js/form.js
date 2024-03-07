const usernameInput = document.querySelector('#username-input');
const subjectInput = document.querySelector('#subject-input');
const contentInput = document.querySelector('#content-input');
const submit = document.querySelector('#submit');

// This section is for pulling any existing blog posts from localStorage
let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// This section is for storing the three required fields from the form locally
submit.addEventListener('click', function (event) {
    event.preventDefault();

    const newBlogPost = {
        username: usernameInput.value,
        subject: subjectInput.value,
        content: contentInput.value
    };
// This section is to check if all fields have been filled out, triggering an alert if not
    if (!newBlogPost.username.trim() || !newBlogPost.subject.trim() || !newBlogPost.content.trim()) {
        alert('Please make sure all fields are filled out before submitting');
        return;
    }
// This section is for adding the newBlogPost to the beginning of the existing array
// Note: Oh lord I hate that the requirements for this have me using a .push for this, .unshift is RIGHT there, ugh
    blogPosts.push(newBlogPost);

// Saves the updated array to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

// This causes posting to redirect you to the blog.html
    window.location.href = 'blog.html';

// This portion clears the text boxes. Unsure if needed due to page swapping, need to ask Dan or investigate further.
    usernameInput.value = '';
    subjectInput.value = '';
    contentInput.value = '';
});

// This portion is the jQuery that controls the dark mode
$(document).ready(function() {
// This checks localStorage for if a mode has been stored previously
const mode = localStorage.getItem('mode');
if (mode === 'dark') {
    $('body').addClass('dark-mode');
    $('.switch input').prop('checked', true);
}
// This portion handles the dark mode toggle
$('.switch input').change(function() {
    $('body').toggleClass('dark-mode');
    const currentMode = $('body').hasClass('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('mode', currentMode);
});
});