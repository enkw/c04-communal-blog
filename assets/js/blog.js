const rootEl = $('#root');
// This part is pulling the object from local storage to create blog posts
const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

blogPosts.forEach(blogPosts => {
    const blogCard = $('<li class="card">')
    const cardContent = `
    <h3>${blogPosts.subject}</h3>
    <p>${blogPosts.content}</p>
    <p>Posted by ${blogPosts.username}</p>`;

    blogCard.html(cardContent);
    rootEl.append(blogCard);
});

localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

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