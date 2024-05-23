const postForm = document.getElementById('new-post-form');
const postsContainer = document.getElementById('posts');

postForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // Create a new post element
  const post = document.createElement('div');
  post.classList.add('post');

  // Add title and content to the post
  const postTitle = document.createElement('h3');
  postTitle.classList.add('post-title');
  postTitle.textContent = title;
  post.appendChild(postTitle);

  const postContent = document.createElement('p');
  postContent.textContent = content;
  post.appendChild(postContent);

  // Add timestamp
  const timestamp = new Date().toLocaleString();
  const postTimestamp = document.createElement('span');
  postTimestamp.classList.add('post-timestamp');
  postTimestamp.textContent = timestamp;
  post.appendChild(postTimestamp);

  // Add the new post to the container (prepend for latest on top)
  postsContainer.prepend(post);

  // Clear the form after submission
  postForm.reset();
});
