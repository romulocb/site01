var currentImageIndex = 0;
var carouselImages = document.querySelectorAll('.carousel-image');
var currentImageIndex2 = 0;
var carouselImages2 = document.querySelectorAll('.carousel-image2');
var currentImageIndex3 = 0;
var carouselImages3 = document.querySelectorAll('.carousel-image3');
var currentImageIndex4 = 0;
var carouselImages4 = document.querySelectorAll('.carousel-image4');
var currentImageIndex5 = 0;
var carouselImages5 = document.querySelectorAll('.carousel-image5');
var currentImageIndex6 = 0;
var carouselImages6 = document.querySelectorAll('.carousel-image6');

function openFullscreenImage() {
  var fullscreenImageModal = document.getElementById('fullscreen-image-modal');
  fullscreenImageModal.style.display = 'flex';
  showImage(currentImageIndex);
}

function openFullscreenImage2() {
  var fullscreenImageModal2 = document.getElementById('fullscreen-image-modal-2');
  fullscreenImageModal2.style.display = 'flex';
  showImage2(currentImageIndex2);
}

function openFullscreenImage3() {
  var fullscreenImageModal3 = document.getElementById('fullscreen-image-modal-3');
  fullscreenImageModal3.style.display = 'flex';
  showImage3(currentImageIndex3);
}

function openFullscreenImage4() {
  var fullscreenImageModal4 = document.getElementById('fullscreen-image-modal-4');
  fullscreenImageModal4.style.display = 'flex';
  showImage4(currentImageIndex4);
}

function openFullscreenImage5() {
  var fullscreenImageModal5 = document.getElementById('fullscreen-image-modal-5');
  fullscreenImageModal5.style.display = 'flex';
  showImage5(currentImageIndex5);
}

function openFullscreenImage6() {
  var fullscreenImageModal6 = document.getElementById('fullscreen-image-modal-6');
  fullscreenImageModal6.style.display = 'flex';
  showImage6(currentImageIndex6);
}

function closeFullscreenImage() {
  var fullscreenImageModal = document.getElementById('fullscreen-image-modal');
  fullscreenImageModal.style.display = 'none';
}

function closeFullscreenImage2() {
  var fullscreenImageModal2 = document.getElementById('fullscreen-image-modal-2');
  fullscreenImageModal2.style.display = 'none';
}

function closeFullscreenImage3() {
  var fullscreenImageModal3 = document.getElementById('fullscreen-image-modal-3');
  fullscreenImageModal3.style.display = 'none';
}

function closeFullscreenImage4() {
  var fullscreenImageModal4 = document.getElementById('fullscreen-image-modal-4');
  fullscreenImageModal4.style.display = 'none';
}

function closeFullscreenImage5() {
  var fullscreenImageModal5 = document.getElementById('fullscreen-image-modal-5');
  fullscreenImageModal5.style.display = 'none';
}

function closeFullscreenImage6() {
  var fullscreenImageModal6 = document.getElementById('fullscreen-image-modal-6');
  fullscreenImageModal6.style.display = 'none';
}

function showImage(index) {
  currentImageIndex = index;

  for (var i = 0; i < carouselImages.length; i++) {
    if (i === index) {
      carouselImages[i].style.display = 'block';
    } else {
      carouselImages[i].style.display = 'none';
    }
  }
}

function showImage2(index) {
  currentImageIndex2 = index;

  for (var i = 0; i < carouselImages2.length; i++) {
    if (i === index) {
      carouselImages2[i].style.display = 'block';
    } else {
      carouselImages2[i].style.display = 'none';
    }
  }
}

function showImage3(index) {
  currentImageIndex3 = index;

  for (var i = 0; i < carouselImages3.length; i++) {
    if (i === index) {
      carouselImages3[i].style.display = 'block';
    } else {
      carouselImages3[i].style.display = 'none';
    }
  }
}

function showImage4(index) {
  currentImageIndex4 = index;

  for (var i = 0; i < carouselImages4.length; i++) {
    if (i === index) {
      carouselImages4[i].style.display = 'block';
    } else {
      carouselImages4[i].style.display = 'none';
    }
  }
}

function showImage5(index) {
  currentImageIndex5 = index;

  for (var i = 0; i < carouselImages5.length; i++) {
    if (i === index) {
      carouselImages5[i].style.display = 'block';
    } else {
      carouselImages5[i].style.display = 'none';
    }
  }
}

function showImage6(index) {
  currentImageIndex6 = index;

  for (var i = 0; i < carouselImages6.length; i++) {
    if (i === index) {
      carouselImages6[i].style.display = 'block';
    } else {
      carouselImages6[i].style.display = 'none';
    }
  }
}

function changeImage(offset) {
  var newIndex = currentImageIndex + offset;

  if (newIndex < 0) {
    newIndex = carouselImages.length - 1;
  } else if (newIndex >= carouselImages.length) {
    newIndex = 0;
  }
  showImage(newIndex);
}

function changeImage2(offset) {
  var newIndex = currentImageIndex2 + offset;

  if (newIndex < 0) {
    newIndex = carouselImages2.length - 1;
  } else if (newIndex >= carouselImages2.length) {
    newIndex = 0;
  }
  showImage2(newIndex);
}

function changeImage3(offset) {
  var newIndex = currentImageIndex3 + offset;

  if (newIndex < 0) {
    newIndex = carouselImages3.length - 1;
  } else if (newIndex >= carouselImages3.length) {
    newIndex = 0;
  }
  showImage3(newIndex);
}

function changeImage4(offset) {
  var newIndex = currentImageIndex4 + offset;

  if (newIndex < 0) {
    newIndex = carouselImages4.length - 1;
  } else if (newIndex >= carouselImages4.length) {
    newIndex = 0;
  }
  showImage4(newIndex);
}

function changeImage5(offset) {
  var newIndex = currentImageIndex5 + offset;

  if (newIndex < 0) {
    newIndex = carouselImages5.length - 1;
  } else if (newIndex >= carouselImages5.length) {
    newIndex = 0;
  }
  showImage5(newIndex);
}

function changeImage6(offset) {
  var newIndex = currentImageIndex6 + offset;

  if (newIndex < 0) {
    newIndex = carouselImages6.length - 1;
  } else if (newIndex >= carouselImages6.length) {
    newIndex = 0;
  }
  showImage6(newIndex);
}

// Attach click event handler to open the full-screen image viewer when clicking on the image
var openImage = document.getElementById('openFullscreenImage');
openImage.addEventListener('click', function () {
  openFullscreenImage();
});

// Attach click event handler to close the full-screen image viewer when clicking outside the image
var fullscreenImageModal = document.getElementById('fullscreen-image-modal');
fullscreenImageModal.addEventListener('click', function (event) {
  if (event.target === fullscreenImageModal) {
    closeFullscreenImage();
  }
});


var openImage2 = document.getElementById('openFullscreenImage2');
openImage2.addEventListener('click', function () {
  openFullscreenImage2();
});

var fullscreenImageModal2 = document.getElementById('fullscreen-image-modal-2');
fullscreenImageModal2.addEventListener('click', function (event) {
  if (event.target === fullscreenImageModal2) {
    closeFullscreenImage2();
  }
});

var openImage3 = document.getElementById('openFullscreenImage3');
openImage3.addEventListener('click', function () {
  openFullscreenImage3();
});

var fullscreenImageModal3 = document.getElementById('fullscreen-image-modal-3');
fullscreenImageModal3.addEventListener('click', function (event) {
  if (event.target === fullscreenImageModal3) {
    closeFullscreenImage3();
  }
});

var openImage4 = document.getElementById('openFullscreenImage4');
openImage4.addEventListener('click', function () {
  openFullscreenImage4();
});

var fullscreenImageModal4 = document.getElementById('fullscreen-image-modal-4');
fullscreenImageModal4.addEventListener('click', function (event) {
  if (event.target === fullscreenImageModal4) {
    closeFullscreenImage4();
  }
});

var openImage5 = document.getElementById('openFullscreenImage5');
openImage5.addEventListener('click', function () {
  openFullscreenImage5();
});

var fullscreenImageModal5 = document.getElementById('fullscreen-image-modal-5');
fullscreenImageModal5.addEventListener('click', function (event) {
  if (event.target === fullscreenImageModal5) {
    closeFullscreenImage5();
  }
});

var openImage6 = document.getElementById('openFullscreenImage6');
openImage6.addEventListener('click', function () {
  openFullscreenImage6();
});

var fullscreenImageModal6 = document.getElementById('fullscreen-image-modal-6');
fullscreenImageModal6.addEventListener('click', function (event) {
  if (event.target === fullscreenImageModal6) {
    closeFullscreenImage6();
  }
});

// contato
  function sendMessage(){
    (function(){
      emailjs.init("X3ttW_c5Wi0zm3rHR"); // Account Public Key
    })();

    let serviceID = "service_l1m2umf"; // Email Service ID
    let templateID = "template_lnwcc5x"; // Email Template ID

    let params = {
      sendername: document.querySelector("#name").value,
      senderemail: document.querySelector("#email").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("message").value
    };
    
    emailjs.send(serviceID, templateID, params)
    .then( res => {
      alert('Obrigado, ' + params['sendername'] + '! Sua mensagem foi enviada.' );
    })
    .catch();
  }
