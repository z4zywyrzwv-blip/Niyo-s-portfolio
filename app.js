function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

 {
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("Wrong login");
  }
}

function addPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const post = document.createElement("div");
  post.className = "post";
  post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;

  document.getElementById("posts").prepend(post);
}
