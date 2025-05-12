// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // Function to trigger fade-in effect for page load
  function fadeInOnLoad() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("fade-in");
    });
  }

  // Function to trigger slide-up effect when elements come into view during scroll
  function slideUpOnScroll() {
    const slideUpElements = document.querySelectorAll(".slide-up");
    
    // Function to check if the element is in view
    function checkVisibility() {
      slideUpElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          element.classList.add("slide-up");
        }
      });
    }

    // Listen for scroll events to trigger animations
    window.addEventListener("scroll", checkVisibility);

    // Trigger visibility check when the page loads
    checkVisibility();
  }

  // Function for smooth scrolling when clicking on internal links (anchors)
  function smoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Function to highlight active navigation link when scrolling
  function highlightActiveLink() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
          link.classList.add("active");
        }
      });
    });
  }

  // Call functions to initialize the behaviors
  fadeInOnLoad();  // Fade-in effect for page load
  slideUpOnScroll(); // Scroll-triggered slide-up effect
  smoothScrolling(); // Smooth scrolling for anchor links
  highlightActiveLink(); // Highlight active link in the nav as user scrolls

});