const rootEl = $('#root');
const blogCard = $('<li>')
// This part is pulling the object from local storage to create blog posts
const blogPost = JSON.parse(localStorage.getItem('blogPost'));
// Logs the object from local storage to make sure it's working lol
console.log(blogPost);
// Adds the content from blogPost to the page
blogCard.html(`Username: ${blogPost.username}<br>Subject: ${blogPost.subject}<br>Content: ${blogPost.content}`);
rootEl.append(blogCard);