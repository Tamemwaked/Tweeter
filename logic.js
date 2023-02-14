const Tweeter = function () {
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  let postIdCounter = 3;

  let commentIdCounter = 7;

  const getPosts = () => _posts;

  function addPost(newText) {
    let newPost = {
      text: newText,
      id: "p" + postIdCounter,
      comments: [],
    };
    postIdCounter++;
    _posts.push(newPost);
  }

  function removePost(postID) {
    for (const post in _posts) {
      if (_posts[post].id === postID) {
        _posts.splice(post, 1);
      }
    }
  }

  function addComment(postID, comment) {
    let newComment = {
      id: "c" + commentIdCounter,
      text: comment,
    };

    for (const post in _posts) {
      if (_posts[post].id === postID) {
        _posts[post].comments.push(newComment);
      }
    }
    commentIdCounter++;
  }
  function removeComment(postID, commentID) {
    for (let post of _posts) {
      if (post.id === postID) {
        for (let index in post.comments) {
          if (post.comments[index].id == commentID) {
            post.comments.splice(index, 1);
          }
        }
      }
    }
  }

  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  };
};
