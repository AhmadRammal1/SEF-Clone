// Reload When Clicking On The Logo
document.getElementById('headLogo').addEventListener('click' , ()=>{
  window.location.reload();
})

// Menu Modal

document.getElementById('closeModal').addEventListener('click' , () => {
  document.getElementsByClassName('menu-modal')[0].style.display = 'none'
})

document.getElementById('openModal').addEventListener('click' , () => {
  document.getElementsByClassName('menu-modal')[0].style.display = 'block'
})

document.querySelectorAll('.nav').forEach(nav => {
  nav.addEventListener('click' , () => {
    document.getElementsByClassName('menu-modal')[0].style.display = 'none'
  })
})

// Typing Effect

const typingText = document.getElementById("typingText");
const cursor = document.getElementsByClassName("cursor")[0];
const title = document.getElementsByClassName("intro-subtitle")[0];
const description = document.getElementsByClassName("intro-desc")[0];
const afterElement = document.getElementsByClassName("after-element")[0];

const textArray = ["SOFTWARE ENGINEER?", "DATA ENGINEER?", "UI/UX DESIGNER?"];

const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    changeTextColor(textArrayIndex);
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typingText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursor.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

const changeBackground = (index) => {
  if (index === 0) section.style.backgroundColor = "yellow";
};

const changeTextColor = (index) => {
  switch (index) {
    case 0:
      title.style.color = "#1e1e1f";
      description.style.color = "#1e1e1f";
      afterElement.style.backgroundColor = "#2ae29ee3";
      break;
    case 1:
      title.style.color = "white";
      description.style.color = "white";
      afterElement.style.backgroundColor = "#9764dad5";
      break;
    case 2:
      title.style.color = "white";
      description.style.color = "white";
      afterElement.style.backgroundColor = "#fb508fdc";
      break;
  }
};

function erase() {
  if (charIndex > 0) {
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typingText.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursor.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

document.getElementById('btnGoToPrograms').addEventListener('click' , () => {
  smoothScroll("programsSection")
})

document.getElementById('btnGoToHire').addEventListener('click' , () => {
  smoothScroll("hireSection")
})

function smoothScroll(targetId) {
  document.getElementById(`${targetId}`).scrollIntoView({behavior:'smooth'})
}

// Programs Section

const fcsFilter = document.getElementById("fcs");
const fswFilter = document.getElementById("fsw");
const fsdFilter = document.getElementById("fsd");
const uixFilter = document.getElementById("uix");
const coloredText = document.getElementById("colored-text");
const progImg = document.getElementById("progImg");

fcsFilter.addEventListener("click", () => {
  changeProgramsInfo("fcs");
  fcsFilter.classList.add("selected-filter");
  removeClass([fswFilter, fsdFilter, uixFilter]);
  fcsFilter.style.color = "#ffc635";
  addBlackColor([fswFilter, uixFilter, fsdFilter]);
  coloredText.style.color = "#ffc635";
  progImg.setAttribute("src", "./assets/fcs.png");
});

fswFilter.addEventListener("click", () => {
  changeProgramsInfo("fsw");
  fswFilter.classList.add("selected-filter");
  removeClass([fcsFilter, fsdFilter, uixFilter]);
  fswFilter.style.color = "#28eea7";
  addBlackColor([fcsFilter, uixFilter, fsdFilter]);
  coloredText.style.color = "#28eea7";
  progImg.setAttribute("src", "./assets/fsw.png");
});

fsdFilter.addEventListener("click", () => {
  changeProgramsInfo("fsd");
  fsdFilter.classList.add("selected-filter");
  removeClass([fswFilter, fcsFilter, uixFilter]);
  addBlackColor([fcsFilter, fswFilter, uixFilter]);
  fsdFilter.style.color = "#9864da";
  coloredText.style.color = "#9864da";
  progImg.setAttribute("src", "./assets/fsd.png");
});

uixFilter.addEventListener("click", () => {
  changeProgramsInfo("uix");
  uixFilter.classList.add("selected-filter");
  removeClass([fswFilter, fsdFilter, fcsFilter]);
  uixFilter.style.color = "#fb508e";
  addBlackColor([fcsFilter, fswFilter, fsdFilter]);
  coloredText.style.color = "#fb508e";
  progImg.setAttribute("src", "./assets/uix.png");
});

const removeClass = (arr) => {
  arr.forEach((element) => {
    element.classList.remove("selected-filter");
  });
};

const addBlackColor = (arr) => {
  arr.forEach((element) => {
    element.style.color = "#000";
  });
};

const changeProgramsInfo = (id) => {
  const section = document.getElementsByClassName("programs-section")[0];
  const title = document.getElementsByClassName("prog-title")[0];
  const description = document.getElementsByClassName("prog-desc")[0];
  switch (id) {
    case "fcs":
      title.innerHTML =
        '<span class="yellow-text">> FCS: </span>Foundations of Computer Science';
      description.textContent =
        "// This 9-week course covers fundamental topics in computer science, including data structures, algorithms, and foundational concepts. It is suitable for coding enthusiasts, former computer science students, and beginners who wish to learn Python programming, object-oriented programming, file systems, and more. The course includes online video materials, assignments, and instructor-led sessions.";
      section.setAttribute("class", "programs-section yellow-background");
      break;
    case "fsw":
      title.innerHTML =
        '<span class="green-text">> FSW: </span>Full-Stack Web Development';
      description.textContent =
        "// Our 14-week bootcamp is designed to equip aspiring developers with the technical and interpersonal skills needed to become professional software engineers. Participants will learn essential concepts such as Version Control, Object-Oriented Programming, Database Management Systems, MVC Design Patterns, Dependency Management, modern Web Frameworks, and AWS. The program also includes a soft-skills curriculum covering Communication & Interpersonal Skills, Professional Writing, Technical Presentations, Negotiation, and Interviewing, which will be taught through lectures, weekly projects, tech talks, and a final project to showcase their learning.";
      section.setAttribute("class", "programs-section green-background");
      break;
    case "fsd":
      title.innerHTML =
        '<span class="purple-text">> FSD: </span>Full-Stack Data';
      description.textContent =
        "// SE Factory's 12-week Full-Stack Data course offers robust training in data analysis and engineering. Participants learn to handle large data sets with Python and use libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization. The course also delves into cloud orchestration, distributed computing, relational databases, and SQL basics. Hands-on projects provide real-world data analysis experience. Upon completion, students gain proficiency in Python for analytics, understand data warehousing, and can effectively visualize and present data insights.";
      section.setAttribute("class", "programs-section purple-background");
      break;
    case "uix":
      title.innerHTML =
        '<span class="pink-text">> UIX: </span>UI/UX Design Bootcamp';
      description.textContent =
        "// SE Factory's 6-week UI/UX course offers immersive learning in UI/UX design. It encompasses the essentials of UI/UX, from mastering Figma, color psychology, typography to UX heuristics, prototyping and WCAG guidelines. Learners work on projects, transforming wireframes into mockups, and creating responsive interfaces. The course culminates in a final project, enabling students to conduct a thorough UX audit, revamp a website, and create a well-documented case study. Graduates leave equipped with a polished portfolio and market-ready skills in UI/UX design.";
      section.setAttribute("class", "programs-section pink-background");
      break;

    default:
      break;
  }
};

// FAQs Section

document.getElementById("q-1").addEventListener("click", () => {
  showAndHideElement("answer-1");
});

document.getElementById("q-2").addEventListener("click", () => {
  showAndHideElement("answer-2");
});

document.getElementById("q-3").addEventListener("click", () => {
  showAndHideElement("answer-3");
});

const showAndHideElement = (element) => {
  document.getElementById(`${element}`).classList.toggle("hidden");
  document.getElementById(`${element}`).classList.toggle("visible");
};

// Slider

document.addEventListener('DOMContentLoaded', function () {
  const testimonialsContainer = document.getElementsByClassName('slider')[0];
  const testimonials = document.querySelectorAll('.testimonial-container');
  const navDots = document.querySelectorAll('.nav-dot');

  let currentIndex = 0;
  let repeatTime = 5000;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSlider();
  }, repeatTime);

  function goToTestimonial(index) {
    currentIndex = index;
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * 100 + '%';
    testimonialsContainer.style.transform = 'translateX(' + translateValue + ')';
  }

  navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToTestimonial(index);
    });
  });
});