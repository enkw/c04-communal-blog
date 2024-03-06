const rootEl = $('#root');
const blogCard = $('<li>')
const blogPost = JSON.parse(localStorage.getItem('blogPost'));

console.log(blogPost);

blogCard.html(`Username: ${blogPost.username}<br>Subject: ${blogPost.subject}<br>Content: ${blogPost.content}`);
rootEl.append(blogCard);