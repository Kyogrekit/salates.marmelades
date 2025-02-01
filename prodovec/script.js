
const loadComments = async () => {
    const response = await fetch('http://localhost:5000/comments');
    const comments = await response.json();
    commentsList.innerHTML = comments.map(comment => `
        <div class="comment">${comment.text}</div>
    `).join('');
};


loadComments();