// Presentation start
var popupViews = document.querySelectorAll(".popup-view");
var popupBtns = document.querySelectorAll(".popup-btn");
var closeBtns = document.querySelectorAll(".close-btn");

var popup = function (popupClick) {
  popupViews[popupClick].classList.add("active");
};

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove("active");
    });
  });
});

//for image slider section
let currentIndex = 0;
const banners = document.querySelectorAll(".banner");
const totalBanners = banners.length;

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalBanners - 1;
  } else if (index >= totalBanners) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + "%";
  document.querySelector(".slider").style.transform =
    "translateX(" + translateValue + ")";
}

function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

function autoChangeSlide() {
  setInterval(() => {
    changeSlide(1);
  }, 3000);
}

showSlide(currentIndex);
autoChangeSlide();

//for about us section

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".circle").forEach((circle) => {
    circle.classList.add("show");
  });

  // Image and content data
  const imageSources = [
    "/images/demo.jpeg",
    "/images/demo2.jpg",
    "/images/demo3.jpeg",
  ];
  const contentData = [
    {
      h2: "About Us",
      h1: "We create Awesome Contents and Branding",
      p: "We at Dialogues Media strive to create a distinctive content for each brand that we handle. We understand that each brand is different and incomparable. Therefore, the brand message should merit the product or service we are selling.",
    },
    {
      h2: "About Us",
      h1: "We create Awesome Contents and Branding",
      p: "We begin by holding a thorough discussion with the client to know understand the product or the service. Once the brand image is clear, a theme is built around it and marketing strategies for your action plan are drawn up. The visual style, the message and the ‘tone and voice’ of the brand are set.",
    },
    {
      h2: "About Us",
      h1: "We create Awesome Contents and Branding",
      p: "We have been around since 2015 and its been quite a ride! Dialogues Media began with small scale accounts and gradually grew into a dynamic outpost employing a team of best marketing professionals. Our astute insights and clear foresight have lead to gain a good reputation from our clients.",
    },
    // Add more content data as needed
  ];

  let currentIndexes = 0;

  // Function to update content and image with animation
  const updateContentAndImage = () => {
    const imageContainer = document.querySelector(".circle-image");
    const contentH2 = document.querySelector(".custom-font-h2");
    const contentH1 = document.querySelector(".custom-font-h1");
    const contentP = document.querySelector(".custom-font-p");

    // Animate the switch from left to right
    imageContainer.style.transform = "translateX(-100%)";
    contentH2.style.transform = "translateX(-100%)";
    contentH1.style.transform = "translateX(-100%)";
    contentP.style.transform = "translateX(-100%)";

    setTimeout(() => {
      // Change image source
      imageContainer.src = imageSources[currentIndexes];

      // Change content
      contentH2.textContent = contentData[currentIndexes].h2;
      contentH1.textContent = contentData[currentIndexes].h1;
      contentP.textContent = contentData[currentIndexes].p;

      // Reset the animation
      imageContainer.style.transform = "translateX(0)";
      contentH2.style.transform = "translateX(0)";
      contentH1.style.transform = "translateX(0)";
      contentP.style.transform = "translateX(0)";
    }); // Adjust the delay based on the desired animation time

    // Increment index for the next iteration
    currentIndexes = (currentIndexes + 1) % imageSources.length;
  };

  // Set interval to update content and image every 3 seconds
  setInterval(updateContentAndImage, 4000);
});

// vertical nav bar

$(document).ready(function () {
  $(window).on("scroll", function () {
    var link = $(".vnavbar a.dot");
    var top = $(window).scrollTop();

    $(".sec").each(function () {
      var id = $(this).attr("id");
      var height = $(this).height();
      var offset = $(this).offset().top - 150;
      if (top >= offset && top < offset + height) {
        link.removeClass("active");
        $(".vnavbar")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  });
});

// end

//Client gallery
//getting all required elements
const gallery = document.querySelectorAll(".image"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  currentImg = previewBox.querySelector(".current-img"),
  totalImg = previewBox.querySelector(".total-img"),
  shadow = document.querySelector(".shadow");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    // totalImg.textContent = gallery.length; //passing total img length to totalImg variable
    let newIndex = i; //passing i value to newIndex variable
    let clickedImgIndex; //creating new variable

    gallery[i].onclick = () => {
      clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
      function preview() {
        //currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
        let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
        previewImg.src = imageURL; //passing user clicked img url in previewImg src
      }
      preview(); //calling above function

      const prevBtn = document.querySelector(".cprev");
      const nextBtn = document.querySelector(".cnext");
      if (newIndex == 0) {
        //if index value is equal to 0 then hide prevBtn
        prevBtn.style.display = "none";
      }
      if (newIndex >= gallery.length - 1) {
        //if index value is greater and equal to gallery length by -1 then hide nextBtn
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = () => {
        newIndex--; //decrement index
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      };
      nextBtn.onclick = () => {
        newIndex++; //increment index
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      };
      document.querySelector("body").style.overflow = "hidden";
      previewBox.classList.add("show");
      shadow.style.display = "block";
      closeIcon.onclick = () => {
        newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
      };
    };
  }
};

// Moveing objects
// para with image move
let draggableElemeoth = document.getElementById("draggable-elem-oth");
let initialothX = 0,
  initialothY = 0;
let moveElementoth = false;
let eventsoth = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceTypeoth = "";
const isTouchDeviceoth = () => {
  try {
    document.createEvent("TouchEvent");
    deviceTypeoth = "touch";
    return true;
  } catch (e) {
    deviceTypeoth = "mouse";
    return false;
  }
};

isTouchDeviceoth();
draggableElemeoth.addEventListener(eventsoth[deviceTypeoth].down, (e) => {
  e.preventDefault();
  initialothX = !isTouchDeviceoth() ? e.clientX : e.touches[0].clientX;
  initialothY = !isTouchDeviceoth() ? e.clientY : e.touches[0].clientY;
  moveElementoth = true;
});
draggableElemeoth.addEventListener(eventsoth[deviceTypeoth].move, (e) => {
  if (moveElementoth) {
    e.preventDefault();
    let newX = !isTouchDeviceoth() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDeviceoth() ? e.clientY : e.touches[0].clientY;
    draggableElemeoth.style.top =
      draggableElemeoth.offsetTop - (initialothY - newY) + "px";
    draggableElemeoth.style.left =
      draggableElemeoth.offsetLeft - (initialothX - newX) + "px";
    initialothX = newX;
    initialothY = newY;
  }
});
draggableElemeoth.addEventListener(
  eventsoth[deviceTypeoth].up,
  (stopMovement = (e) => {
    moveElementoth = false;
  })
);
draggableElemeoth.addEventListener("mouseleave", stopMovement);
draggableElemeoth.addEventListener(eventsoth[deviceTypeoth].up, (e) => {
  moveElementoth = false;
});

// js box
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".animal-item");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((image) => {
      image.classList.remove("active");
      image.style.transform = "translateY(100%)";
    });
    images[index].classList.add("active");
    images[index].style.transform = "translateY(0)";
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  images.forEach((image, index) => {
    image.addEventListener("click", function () {
      nextImage();
    });
  });

  // Optionally, you can add navigation buttons or other controls
  // to manually navigate between images
  // Example:
  // document.getElementById('nextBtn').addEventListener('click', nextImage);
  // document.getElementById('prevBtn').addEventListener('click', prevImage);
});
