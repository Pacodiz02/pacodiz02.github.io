const categories = { windows: [{ url: `/posts/the-purpose-of-education/`, date: `07 Oct 2022`, title: `Windows | 2019 Server`},],server: [{ url: `/posts/the-purpose-of-education/`, date: `07 Oct 2022`, title: `Windows | 2019 Server`},],linux: [{ url: `/posts/jekyll-markdown/`, date: `07 Oct 2022`, title: `Linux | Debian 11 Bullseye`},],debian: [{ url: `/posts/jekyll-markdown/`, date: `07 Oct 2022`, title: `Linux | Debian 11 Bullseye`},],bullseye: [{ url: `/posts/jekyll-markdown/`, date: `07 Oct 2022`, title: `Linux | Debian 11 Bullseye`},], }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};