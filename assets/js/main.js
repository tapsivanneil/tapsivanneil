const name1 = "Backend Developer";
const name2 = "Student Leader";
const name3 = "Freelancer";
const name4 = "Aspiring Software Engineer";

let val = 0;
let currentName = name1;

function typeEffect() {
  const homeWorkElement = document.getElementsByClassName("home__work")[0];

  if (val <= currentName.length) {
    const typedText = currentName.substring(0, val);
    homeWorkElement.innerHTML = typedText + "█";
    val++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(function () {
      val = 0;
      if (currentName === name1) {
        currentName = name2;
      } else if (currentName === name2) {
        currentName = name3;
      } else if (currentName === name3) {
        currentName = name4;           
      } else {
        currentName = name1;
      }
      homeWorkElement.innerHTML = "";
      typeEffect();
    }, 2000);
  }
}

function work() {
  setTimeout(typeEffect, 1000);
}

work();







/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    // Add show-menu class
    navMenu.classList.add("show-menu");

    // Add animation class
    navMenu.classList.add("animate__animated", "animate__fadeIn", "animate__faster");

    // Remove animation class after a delay
    setTimeout(() => {
      navMenu.classList.remove("animate__animated", "animate__fadeIn", "animate__faster");
    }, 1000); // Adjust the delay as needed
  });
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));



/*==================== QUALIFICATION TABS ====================*/
/*
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});
*/


/*==================== CONTACT TABS ====================*/

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-target]");
  const tabContents = document.querySelectorAll("[data-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach((tabContent) => {
        tabContent.style.display = "none";
      });
      target.style.display = "block";

      tabs.forEach((tab) => {
        tab.classList.remove("contactinfo__active");
      });
      tab.classList.add("contactinfo__active");
    });
  });
});







/*==================== DISABLE SAVING OF THIS IMAGES ====================*/

document.addEventListener('contextmenu', function (event) {
  var targetElement = event.target;
  if (
    (targetElement.tagName === 'IMG' && targetElement.classList.contains('about__img')) ||
    (targetElement.tagName === 'IMG' && targetElement.classList.contains('footer__logo_image'))
  ) {
    event.preventDefault();
    return false;
  }
});




/*==================== SERVICES MODAL ====================*/

// Select all the modal views, modal buttons, and modal close buttons
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns_ReadMore = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");


// Function to open a modal view WITH ANIMATION
let modal = function (modalClick) {
  // Remove active-modal class from all modal views
  for (var val = 0; val < modalViews.length; val++) {
    modalViews[val].classList.remove("active-modal", "animate__animated", "animate__fadeIn", "animate__faster");
  }

  // Delay adding the animation classes to ensure animation triggers consistently
  setTimeout(function () {
    // Add active-modal class to the clicked modal view and animate it
    modalViews[modalClick].classList.add("active-modal", "animate__animated", "animate__fadeIn", "animate__faster");
  }, 10);

  // Add a class to disable scrolling on the body
  document.body.classList.add("disable-scroll");
};


// Attach click event listeners to the modal buttons
modalBtns_ReadMore.forEach((modalBtn1, val) => {
  modalBtn1.addEventListener("click", () => {
    modal(val); // Open the corresponding modal view
  });
});


// Attach click event listeners to the modal close buttons
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", closeModal);
});


// Function to close the modal view WITH ANIMATION
function closeModal() {
  const activeModal = document.querySelector(".active-modal");
  if (activeModal) {
    // Add fade-out animation class to the active modal view
    activeModal.classList.add("animate__animated", "animate__fadeOut", "animate__faster");

    // Remove the modal and animation classes after the animation finishes
    setTimeout(function () {
      activeModal.classList.remove("active-modal", "animate__animated", "animate__fadeOut", "animate__faster");
      document.body.classList.remove("disable-scroll");
    }, 500); // Adjust the delay as needed
  }
}


// Add a keydown event listener to the document
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal(); // Close the modal view when the ESC key is pressed
  }
});


// Store the initial URL hash
const initialHash = window.location.hash;

// Add a popstate event listener to the window
window.addEventListener("popstate", () => {
  const currentHash = window.location.hash;

  // Check if the hash has changed from the initial value
  if (currentHash !== initialHash) {
    closeModal(); // Close the modal view when the back button is pressed on mobile
  }
});




/*==================== PROJECTS SWIPER ====================*/

var swiper = new Swiper(".plang__btn_swiper", {
  direction: 'horizontal',
  cssMode: true,
  slidesPerView: 2,
  spaceBetween: 1,
  mousewheel: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {

    // When window width is <= 767px (mobile phone)
    767: {
      slidesPerView: 2,
    },
    // When window width is > 767px 
    768: {
      slidesPerView: 3,
    },
    // When window width is > 767px and <= 1023px (tablet)
    1023: {
      slidesPerView: 3,
    },
    // When window width is > 1023px (desktop)
    1024: {
      slidesPerView: 3,
    },
  },
});


/*==================== PROJECTS CONTAINER ====================*/

var swiper = new Swiper(".projects__container", {
  direction: 'horizontal',
  cssMode: true,
  loop: true,
  mousewheel: true,
  keyboard: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


/*==================== GALLERY CONTAINER ====================*/

var gallerySwiper = new Swiper('.gallery__container', {
  effect: "cards",
  mousewheel: false,
  grabCursor: false,
  cardsEffect: {
    slideShadows: false,
    perSlideOffset: 7,
    perSlideRotate: 1,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Update Swiper options on window resize
function updateSwiperOptions() {
  if (window.innerWidth >= 1024) { // Desktop devices
    gallerySwiper.mousewheel.enable();
    gallerySwiper.grabCursor = true;
  } else { // Tablet and mobile devices
    gallerySwiper.mousewheel.disable();
    gallerySwiper.grabCursor = false;
  }
}

// Initialize Swiper options on page load
updateSwiperOptions();

// Update Swiper options on window resize
window.addEventListener('resize', updateSwiperOptions);

// Update description text based on active slide
gallerySwiper.on('slideChange', function () {
  const activeSlide = gallerySwiper.slides[gallerySwiper.activeIndex];
  const description = activeSlide.getAttribute('data-description');
  document.getElementById('certificate-description-text').textContent = description;
});

// Set initial description text
document.getElementById('certificate-description-text').textContent = gallerySwiper.slides[gallerySwiper.activeIndex].getAttribute('data-description');



/*
GET SWIPER
https://unpkg.com/browse/swiper@9.3.2/
https://swiperjs.com/get-started
*/





/*==================== CONTACT AVAILABILITY ====================*/

// Get the element(s) with the class
let elements = document.getElementsByClassName("contact-availability__subtitle");
let icons = document.getElementsByClassName("contact-availability__icon");

//get the icon
for (let val = 0; val < elements.length; val++) {

  // Check if the text content contains the exact word "Available"
  if (elements[val].textContent.trim() === "Available") {
    icons[val].classList.add("uil-check"); // Replace with the desired Unicons line icon class for "Available"
    icons[val].classList.add("active"); //set color
    icons[val].classList.remove("inactive"); // Remove the "inactive" class
    icons[val].classList.remove("busy"); // Remove the "busy" class

    // Check if the text content contains the exact phrase "Not Available"
  } else if (elements[val].textContent.trim() === "Not Available") {
    icons[val].classList.add("uil-times"); // Replace with the desired Unicons line icon class for "Not Available"
    icons[val].classList.add("inactive"); //set color
    icons[val].classList.remove("active");
    icons[val].classList.remove("busy");

    // Check if the text content contains the exact phrase "Busy"
  } else if (elements[val].textContent.trim() === "Busy") {
    icons[val].classList.add("uil-pen"); // Replace with the desired Unicons line icon class for "Not Available"
    icons[val].classList.add("busy"); //set color
    icons[val].classList.remove("active");
    icons[val].classList.remove("inactive");
  }

}





/*==================== PROGRAMMING LANGUAGE TABS ====================*/

function showTab(tabId, button) {
  // Remove active class from all buttons
  var buttons = document.getElementsByClassName('plang__button_link');
  for (var val = 0; val < buttons.length; val++) {
    buttons[val].classList.remove('active');
  }

  // Add active class to the clicked button
  button.classList.add('active');

  // Hide all tab contents
  var tabContents = document.getElementsByClassName('plang__tab_content');
  for (var val = 0; val < tabContents.length; val++) {
    tabContents[val].classList.remove('active');
  }

  // Show the selected tab content
  var tab = document.getElementById(tabId);
  tab.classList.add('active', 'animate__animated', 'animate__fadeIn', 'animate__faster');
}


/*==================== projects__background LANGUAGE ====================*/

function changeBackgroundImage(imageSrc) {
  var projectsBackground = document.querySelector('.projects__background');

  // Apply a fade-out animation using animate.css
  projectsBackground.classList.add('animate__animated', 'animate__fadeOut');

  // Set the new image source
  projectsBackground.src = imageSrc;

  // Remove the fade-out animation class and apply the fade-in animation class
  setTimeout(function () {
    projectsBackground.classList.remove('animate__fadeOut');
    projectsBackground.classList.add('animate__fadeIn');
  }, 500); // Adjust the delay as needed

  // Set the opacity of the image
  projectsBackground.style.opacity = '0.8';

  // Image SRC Opacity
  projectsBackground.style.filter = 'opacity(0.06)';

  console.log(imageSrc);
}









/*==================== GET YEAR AND CURRENT AGE ====================*/
//update copyright year automatically and age

//USAGE: <span current-year></span>
//USAGE: <span my-age></span>

// Function to update the year and age
function updateYearAndAge() {
  // Get all elements with the current-year and my-age attributes
  let yearElements = document.querySelectorAll("[current-year]");
  let ageElements = document.querySelectorAll("[my-age]");

  // Get the current date and time in Asia/Manila time zone
  let currentDate = new Date();
  let options = { year: 'numeric', timeZone: 'Asia/Manila' };
  let currentYear = new Intl.DateTimeFormat('en-US', options).format(currentDate);
  /* console.log("Year: " +currentYear); */

  // Calculate the age
  let birthdate = new Date("April 16, 2003");  // Set the birthdate to July 28, 2001
  let ageInMilliseconds = currentDate - birthdate;  // Calculate the difference between current date and birthdate in milliseconds
  let ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));  // Calculate the age in years, accounting for leap years
  /* console.log("Age: " +ageInYears); */

  // Iterate over each element and update the year
  yearElements.forEach((element) => {
    element.textContent = currentYear; // Replace content with current year
  });

  // Iterate over each element and update the age
  ageElements.forEach((element) => {
    element.textContent = ageInYears; // Replace content with the calculated age
  });
}

// Call the updateYearAndAge function initially
updateYearAndAge();

// Schedule the updateYearAndAge function to be called every minute
setInterval(updateYearAndAge, 60000); // 60000 milliseconds = 1 minute







/*==================== ANIMATION ====================*/
//https://animate.style/

/*================ CONTACT DETAILS ANIMATION ================*/
function animateContactInfo() {
  const contactinfo__elements = document.querySelectorAll('.contactinfo__content');
  contactinfo__elements.forEach((element) => {
    element.classList.add('animate__animated', 'animate__fadeIn', 'animate__faster');
  });
}

const contactinfo__buttons = document.querySelectorAll('.contactinfo__button');
contactinfo__buttons.forEach((button) => {
  button.addEventListener('click', animateContactInfo);
});


/*==================== SWIPER READ MORE BUTTON ANIMATION ====================*/

/*================ NEXT PROJECT ================*/
/*
function animateProjectsNext() {
  const projects__elements_next = document.querySelectorAll('.projects__data');
  projects__elements_next.forEach((element) => {
    setTimeout(() => {
      element.classList.add('animate__animated', 'animate__fadeInRight');
    }, 50); // Adjust the delay as needed
  });
}

const projects__buttons_next = document.querySelectorAll('.swiper-button-next');
projects__buttons_next.forEach((button) => {
  button.addEventListener('click', animateProjectsNext);
});

/*================ PREV PROJECT ================*/
/*
function animateProjectsPrevious() {
  const projects__elements_previous = document.querySelectorAll('.projects__data');
  projects__elements_previous.forEach((element) => {
    setTimeout(() => {
      element.classList.add('animate__animated', 'animate__fadeInLeft');
    }, 50); // Adjust the delay as needed
  });
}

const projects__buttons_previous = document.querySelectorAll('.swiper-button-prev');
projects__buttons_previous.forEach((button) => {
  button.addEventListener('click', animateProjectsPrevious);
});










/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);






/*==================== ANIMATION WHILE SCROLLING ON WHOLE SITE ====================*/

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var val = 0; val < reveals.length; val++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[val].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[val].classList.add("active");
    } else {
      reveals[val].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);





/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);



/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// Add animation to scroll-up button
const scrollUpButton = document.getElementById("scroll-up");

scrollUpButton.addEventListener("click", () => {
  // Add animate__fadeInUp class
  scrollUpButton.classList.add("animate__animated", "animate__slideInUp");

  // Remove animate__fadeInUp class after the animation finishes
  setTimeout(() => {
    scrollUpButton.classList.remove("animate__animated", "animate__slideInUp");
  }, 1000); // Adjust the delay as needed
});


/*==================== SHOW SCROLL DOWN ====================*/
function scrollDown() {
  const scrollDown = document.getElementById("scroll-down");
  // When the scroll is higher than 560 viewport height, add the show-scrolldown class to the a tag with the scroll-top class
  if (this.scrollY < 500) scrollDown.classList.add("show-scrolldown");
  else scrollDown.classList.remove("show-scrolldown");
}
window.addEventListener("scroll", scrollDown);

// Add animation to scroll-down button
const scrollDownButton = document.getElementById("scroll-down");

scrollDownButton.addEventListener("click", () => {
  // Add animate__fadeInUp class
  scrollDownButton.classList.add("animate__animated", "animate__slideInDown");

  // Remove animate__fadeInUp class after the animation finishes
  setTimeout(() => {
    scrollDownButton.classList.remove("animate__animated", "animate__slideInDown");
  }, 1000); // Adjust the delay as needed
});





/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Validate if user previously chose a theme
if (selectedTheme) {
  // If theme selected by user previously then we add/remove classes again based on localStorage
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}
// If initially there is no local storage, val.e., user has not made a choice and this is the first time loading
// Then we check if browser/OS is in dark mode and then add dark theme if required by default
else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  console.log("found dark mode for browser/OS");
  // Add dark theme by setting dark theme flags in localStorage
  localStorage.setItem("selected-theme", "dark");
  localStorage.setItem("selected-icon", "uil-moon");
  // Add classes for dark theme in DOM
  document.body.classList.add(darkTheme);
  themeButton.classList.add(iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // Add animation classes using Animate.css
  document.body.classList.add("animate__animated", "animate__fadeIn", "animate__fast");
  themeButton.classList.add("animate__animated", "animate__fadeIn", "animate__fast");

  // Remove animation classes after the animation finishes
  setTimeout(() => {
    document.body.classList.remove("animate__animated", "animate__fadeIn", "animate__fast");
    themeButton.classList.remove("animate__animated", "animate__fadeIn", "animate__fast");
  }, 500);

  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});




/*==================== SHOW TOAST ALERT ====================*/
/*CSS:   .toast {   */

function showAlertToast(text1, text2, iconClass) {
  // Create toast element
  const toast = document.createElement('div');
  toast.classList.add('toast');

  // Create toast content
  const toastContent = document.createElement('div');
  toastContent.classList.add('toast-content');

  // Create check icon
  const checkIcon = document.createElement('val');
  checkIcon.classList.add('uil', iconClass, 'check');

  // Create message container
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message');

  // Create text elements
  const textElement1 = document.createElement('span');
  textElement1.classList.add('text', 'text-1');
  textElement1.textContent = text1;

  const textElement2 = document.createElement('span');
  textElement2.classList.add('text', 'text-2');
  textElement2.textContent = text2;

  // Append elements to the toast
  messageContainer.appendChild(textElement1);
  messageContainer.appendChild(textElement2);
  toastContent.appendChild(checkIcon);
  toastContent.appendChild(messageContainer);
  toast.appendChild(toastContent);

  // Create close icon
  const closeIcon = document.createElement('val');
  closeIcon.classList.add('uil', 'uil-times', 'close');
  closeIcon.addEventListener('click', () => {
    toast.classList.remove('active');
    setTimeout(() => {
      toast.remove();
    }, 300); //close animation
    clearTimeout(timer1);
    clearTimeout(timer2);
  });
  toast.appendChild(closeIcon);

  // Create progress element
  const progress = document.createElement('div');
  progress.classList.add('progress');

  // Append progress to the toast
  toast.appendChild(progress);

  // Add toast to the document
  document.body.appendChild(toast);

  // Play sound
  const audio = new Audio('assets/mp3/notification-sound-7062.mp3');
  audio.play();

  // Show and remove toast after a delay
  setTimeout(() => {
    toast.classList.add('active');
    progress.classList.add('active');
  }, 100);

  const timer1 = setTimeout(() => {
    toast.classList.remove('active');
  }, 3000); //1s = 1000 milliseconds

  const timer2 = setTimeout(() => {
    progress.classList.remove('active');
  }, 3300); //1s = 1000 milliseconds
}



/*==================== Function for reCAPTCHA v3 ====================*/
//https://dirask.com/posts/reCAPTCHA-v3-simple-example-how-to-use-in-JavaScript-and-Spring-Framework-prw0zj

var ReCAPTCHAv3Utils = (function () {
  // reCaptcha v3 key to get on https://www.google.com/recaptcha/admin#list
  var PUBLIC_KEY = '6LdUccImAAAAALa1N3ue9L4t8SVRdA3adp2aziIF';

  // Requests Google reCAPTCHAv3 API to get token.
  // Arguments:
  //   action - we can use our own label that describes our action
  //   Look at "Use case" on https://developers.google.com/recaptcha/docs/v3
  //   e.g. homepage, login, social, e-commerce
  //   onSuccess and onError - callback functions
  var request = function (action, onSuccess, onError) {

    // Display toast message here
    showAlertToast('Verifying reCAPTCHA', 'reCAPTCHA verification in progress...', 'uil-spinner');

    if (window.grecaptcha) {
      window.grecaptcha.ready(function () {
        var config = {
          action: action
        };
        try {
          var query = window.grecaptcha.execute(PUBLIC_KEY, config);
          if (onSuccess) {
            console.log("reCAPTCHA verification successful");
            query.then(onSuccess);
          }
        } catch (e) {
          var message = e && e.message || 'Captcha request error.';
          if (onError) {
            onError(message);
          }
        }
      });
    } else {
      if (onError) {
        onError('reCAPTCHA v3 is not loaded correctly.');
      }
    }
  };

  return {
    request: request
  };
})();




/*==================== SEND EMAIL BUTTON ACTION ====================*/
//tutorial from https://www.youtube.com/watch?v=E4SL1ymKz00

// Event listener for sending email
var btn = document.getElementById('btn__SendEmail');
btn.addEventListener('click', function (e) {
  e.preventDefault();

  // Get current date and time
  var now = new Date();
  var options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };
  var formattedDateTime = now.toLocaleString('en-US', options);


  // Get data from form
  var name = document.getElementById('name__SendEmail').value;
  var email = document.getElementById('email__SendEmail').value;
  var project = document.getElementById('project__SendEmail').value;
  var message = document.getElementById('message__SendEmail').value;

  var body =
    '<h2><b>Email from emmanpbarrameda.github.io Portfolio</b></h2></b></b> <b>Name:</b> ' + name +
    '<br/><b>Email of Sender:</b> ' + email +
    '<br/><b>Project:</b> ' + project +
    '<br/><b>Current Date and Time:</b> ' + formattedDateTime +
    '<br/><br/><b>Message:</b><br/>' + message;
  var subject = 'Email from ' + email;


  // Check if required fields have data
  if (name.trim() === '' || email.trim() === '' || project.trim() === '' || message.trim() === '') {
    showAlertToast('Error', 'Please fill in all required fields', 'uil-exclamation');
    return; // Stop further execution
  }

  // Check reCAPTCHA before sending email
  ReCAPTCHAv3Utils.request('btn__SendEmail', function (token) {
    // reCAPTCHA success callback

    // Send email
    Email.send({
      SecureToken: '1f65e506-47fb-4a9e-be61-7672897dc243',
      To: 'emmanuelbarrameda1@gmail.com',
      From: 'emmanuelbarrameda2@gmail.com',
      Subject: subject,
      Body: body
    })
      .then(function (message) {
        showAlertToast(message + ' Success', 'Your message was sent successfully!', 'uil-check');

        // Clear input fields
        document.getElementById('name__SendEmail').value = '';
        document.getElementById('email__SendEmail').value = '';
        document.getElementById('project__SendEmail').value = '';
        document.getElementById('message__SendEmail').value = '';

      })
      .catch(function (error) {
        showAlertToast('Something went wrong', error, 'uil-times');
      });


  }, function (error) {
    // reCAPTCHA error callback
    showAlertToast('reCAPTCHA Error', error, 'uil-times');
  });
});





/*==================== PREVENT USERS FROM EXITING THE WEBSITE IF NOT EMPTY (DESKTOP ONLY) ====================*/

// Check if the device is a desktop
function isDesktopDevice() {
  const userAgent = navigator.userAgent.toLowerCase();
  return /windows nt|macintosh/.test(userAgent);
}

// Attach the event listener only on desktop devices
if (isDesktopDevice()) {
  // Get the form and inputs
  const form = document.querySelector('.contact__form');
  const inputs = form.querySelectorAll('input, textarea');

  // Check if any input or textarea is filled
  function isFormNotEmpty() {
    for (let val = 0; val < inputs.length; val++) {
      if (inputs[val].value.trim() !== '') {
        return true;
      }
    }
    return false;
  }

  // Prompt a confirmation dialog when leaving the page
  function confirmExit(event) {
    if (isFormNotEmpty()) {
      event.preventDefault();
      event.returnValue = ''; // For older browsers
      return 'Are you sure you want to leave this page? Your unsaved changes will be lost.';
    }
  }

  // Attach the event listener to the window
  window.addEventListener('beforeunload', confirmExit);
}



/*==================== DISABLE RIGHT CLICK EVENTS ON WEBSITE ====================*/

// Capture the right-click event on the whole page
document.addEventListener('contextmenu', function(event) {
  // Check if the right mouse button was clicked
  if (event.button === 2) {
    // Check if the right-click occurred outside of an <a> tag
    const isLinkClicked = event.target.tagName.toLowerCase() === 'a';
    if (!isLinkClicked) {
      // Prevent the default behavior for right-click
      event.preventDefault();
    }
  }
});

// Add hover event listeners to all 'a' tags
const links = document.getElementsByTagName('a');
for (let val = 0; val < links.length; val++) {
  const link = links[val];
  link.addEventListener('contextmenu', function(event) {
    // Allow right-clicking on the hovered <a> tag
    event.stopPropagation();
  });
  link.addEventListener('mouseenter', function() {
    // Add a CSS class to the hovered link for styling
    this.classList.add('hovered-link');
  });
  link.addEventListener('mouseleave', function() {
    // Remove the CSS class from the link when no longer hovered
    this.classList.remove('hovered-link');
  });
}