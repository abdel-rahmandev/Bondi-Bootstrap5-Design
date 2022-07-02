// Select Elements
let catLis = document.querySelectorAll(".cats li");
let projects = document.querySelectorAll(".project-container");
catLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    catLis.forEach((el) => {
      el.classList.remove("active");
      e.currentTarget.classList.add("active");
      if (e.currentTarget.dataset.cat === "all") {
        showAllProjects();
      } else {
        showCatProjects(e.currentTarget.dataset.cat);
      }
    });
  });
});

function showAllProjects() {
  projects.forEach((proj) => {
    proj.style.display = "block";
  });
}
function showCatProjects(cat) {
  projects.forEach((proj) => {
    if (cat === proj.dataset.proj) {
      proj.style.display = "block";
    } else {
      proj.style.display = "none";
    }
  });
}
