document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function toggleAbstract(index) {
  const abstract = document.getElementById(`abstract-${index}`);
  if (abstract.style.display === "none" || abstract.style.display === "") {
    abstract.style.display = "block";
  } else {
    abstract.style.display = "none";
  }
}