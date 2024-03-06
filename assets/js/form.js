const usernameInput = document.querySelector('#username-input');
const subjectInput = document.querySelector('#subject-input');
const contentInput = document.querySelector('#content-input');
const submit = document.querySelector('#submit');

// This section is for storing the three required fields from the form locally
submit.addEventListener('click', function (event) {
    event.preventDefault();

    const blogPost = {
        username: usernameInput.value,
        subject: subjectInput.value,
        content: contentInput.value
    }
// This section is to check if all fields have been filled out, triggering an alert if not
    if (!usernameInput.value.trim() || !subjectInput.value.trim() || !contentInput.value.trim()) {
        alert('Please make sure all fields are filled out before submitting');
        return;
    }
    localStorage.setItem('blogPost', JSON.stringify(blogPost));

    window.location.href = 'blog.html';

    usernameInput.value = '';
    subjectInput.value = '';
    contentInput.value = '';
});