{
  //accessing projects section
  var proj = document.getElementById("projects");
  var projectsTop = proj.offsetTop;
  var projectsHeight = proj.clientHeight;
  //accessing about section
  var about = document.getElementById("about");
  var aboutTop = about.offsetTop;
  console.log(projectsTop, projectsHeight, aboutTop);
  var wH = window.innerHeight;
  //accessing progressbar
  var progbar = document.getElementById("prog");
  var p = ((pageYOffset + wH - projectsTop) * 100) / projectsHeight;
  progbar.style.width = `${p}%`;
  var bar = document.getElementById("progressbar");
  //accessing projects container
  var projCont = document.getElementById("proj-container");
  projCont.classList.remove("fix");
  // console.log(projectsTop, projectsHeight);
}
//dynamic-navbar-hilighting
{
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav ul li");
  console.log(sections, navLi);
  window.addEventListener("scroll", () => {
    // var off = pageYOffset;
    //sticky scrollbar
    if (pageYOffset >= 16) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
    //progressbar %age
    if (
      pageYOffset + wH >= projectsTop &&
      pageYOffset + wH < projectsTop + projectsHeight
    ) {
      var p = ((pageYOffset + wH - projectsTop) * 100) / projectsHeight;
      progbar.style.width = `${p}%`;
    } else if (pageYOffset + wH > aboutTop) {
      p = 100;
      progbar.style.width = `100%`;
    }
    //fixing the progressbar
    if (pageYOffset + 80 >= projectsTop) {
      bar.classList.add("fix");
      projCont.classList.add("fix");
    } else {
      bar.classList.remove("fix");
      projCont.classList.remove("fix");
    }
    if (aboutTop - pageYOffset < wH) {
      projCont.classList.add("fixbottom");
    } else {
      projCont.classList.remove("fixbottom");
    }
    // if (pageYOffset) {
    //   projCont.classList.remove("fix");
    // }
    //navbar dynamic highlighting
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - wH / 3) {
        current = section.getAttribute("id");
      }
    });
    //removing progressbar if section is not projects
    if (current != "projects") {
      bar.classList.remove("fix");
    }
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  });
}
