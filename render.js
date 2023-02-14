const Renderer = function () {
  function renderPosts(posts) {
    for (let post of posts) {
      $("#posts").append(
        `<div class="post" id="${post.id}"> ${post.text}</div>`
      );
      for (let comment in post.comments) {
        $(`#${post.id}`).append(
          `<div><span class="delete-comment" data-id="${post.id}" data-commentid="${post.comments[comment].id}" >X</span><div class="comments">${post.comments[comment].text}</div></div>`
        );
      }

      $(`#${post.id}`).append(
        `<input id="commentVal" placeholder= "write a comment... ">`
      );

      $(`#${post.id}`).append(
        `<button class="comments" data-id="${post.id}" >Comment</button> `
      );

      $(`#${post.id}`).append(
        `<div><button class="delete" data-id="${post.id}" >Delete Post</button></div>`
      );
    }
  }
  return {
    renderPosts: renderPosts,
  };
};
