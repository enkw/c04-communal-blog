const rootEl = $('#root');
// This part is pulling the object from local storage to create blog posts
const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

blogPosts.forEach(blogPosts => {
    const blogCard = $('<li>')
    const cardContent = `
    <h3>${blogPosts.subject}</h3>
    <p>${blogPosts.content}</p>
    <p>Posted by ${blogPosts.username}</p>`;

    blogCard.html(cardContent);
    rootEl.append(blogCard);
});

localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
// Logs the object from local storage to make sure it's working lol
// console.log(blogPosts);
// Adds the content from blogPost to the page
// blogCard.html(`Username: ${blogPosts[0].username}<br>Subject: ${blogPosts[0].subject}<br>Content: ${blogPosts[0].content}`);

