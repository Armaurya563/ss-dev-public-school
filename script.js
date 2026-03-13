/* ===== MOBILE MENU ===== */
const menuToggle = document.getElementById("menuToggle");
const navList = document.getElementById("navList");

menuToggle.onclick = () => {
  navList.classList.toggle("active");
};


/* ===== ERP CLICK ===== */
const erpBtn = document.getElementById("erpBtn");
const erpMenu = document.querySelector(".erp-menu");

erpBtn.onclick = (e) => {
  e.stopPropagation();
  erpMenu.classList.toggle("active");
};

document.onclick = () => {
  erpMenu.classList.remove("active");
};

/* ===== TYPEWRITER ===== */
const thoughts = [
  "Education is the passport to the future.",
  "Learning today, leading tomorrow.",
  "Smart Education for Smart India.",
  "Dream • Learn • Achieve"
];

let t = 0, c = 0, del = false;

function typeEffect(){
  const text = thoughts[t];
  const output = document.getElementById("typingText");

  output.innerHTML = text.substring(0, c);

  if(!del && c < text.length){
    c++;
  }else if(del && c > 0){
    c--;
  }else{
    del = !del;
    if(!del) t = (t+1) % thoughts.length;
  }

  setTimeout(typeEffect, del ? 60 : 120);
}

typeEffect();

// --- Hero Slider Logic ---
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function nextSlide() {
    // Remove active class from current
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Increment slide
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add active class to next
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Auto change every 5 seconds
setInterval(nextSlide, 5000);

// Typing Effect (Jo aapne pehle manga tha)
const text = "Excellence in Education For Future Leaders";
let index = 0;
function typing() {
    if (index < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typing, 100);
    }
}
window.onload = typing;


// admission_policy
// Modal elements
const modal = document.getElementById("admissionModal");
const openBtn = document.getElementById("openAdmission");
const closeBtn = document.querySelector(".close-modal");
const closeBtnLower = document.querySelector(".close-btn");

// Open modal
openBtn.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling
}

// Close functions
const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

closeBtn.onclick = closeModal;
closeBtnLower.onclick = closeModal;

// Close if click outside modal
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// privacy and policy
document.addEventListener('DOMContentLoaded', () => {
    const privacyModal = document.getElementById("privacyAutoModal");
    const acceptBtn = document.getElementById("acceptPrivacyBtn");
    const closeBtnTop = document.getElementById("closePrivacyTop");

    // 1. Website load hote hi popup show karein
    if (privacyModal) {
        privacyModal.style.display = "flex";
        document.body.classList.add("modal-open");
    }

    // 2. Popup band karne ka function
    const closePrivacy = () => {
        privacyModal.style.display = "none";
        document.body.classList.remove("modal-open");
    };

    if (acceptBtn) acceptBtn.onclick = closePrivacy;
    if (closeBtnTop) closeBtnTop.onclick = closePrivacy;

    // Window ke bahar click karne par band ho jaye
    window.onclick = (event) => {
        if (event.target == privacyModal) {
            closePrivacy();
        }
    };
});

// examination
document.addEventListener('DOMContentLoaded', () => {
    const examModal = document.getElementById("examModal");
    const closeExamX = document.getElementById("closeExamX");
    const closeExamBtn = document.getElementById("closeExamBtn");

    // 1. Footer ke "Examination" link ko target karna
    // Hum text dhund rahe hain kyunki aapne link ko "Examination" likha hai
    const allLinks = document.querySelectorAll('a');
    let examLink = null;

    allLinks.forEach(link => {
        if (link.textContent.trim() === "Examination") {
            examLink = link;
        }
    });
    // 🤣

    // 2. Click hone par open karein
    if (examLink) {
        examLink.addEventListener('click', (e) => {
            e.preventDefault(); // Page reload hone se rokein
            examModal.style.display = "flex";
            document.body.style.overflow = "hidden"; // Background scroll band
        });
    }

    // 3. Close karne ke functions
    const hideExam = () => {
        examModal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    if (closeExamX) closeExamX.onclick = hideExam;
    if (closeExamBtn) closeExamBtn.onclick = hideExam;

    // Bahar click karne par band karein
    window.onclick = (event) => {
        if (event.target == examModal) {
            hideExam();
        }
    };
});

// fee payment
document.addEventListener('DOMContentLoaded', () => {
    const feeModal = document.getElementById("feeModal");
    const closeFeeX = document.getElementById("closeFeeX");
    const closeFeeBtn = document.getElementById("closeFeeBtn");

    // Fee Payment link dhundna (Footer se)
    const feeLink = [...document.querySelectorAll('a')].find(link => link.textContent.trim() === "Fee Payment");

    if (feeLink) {
        feeLink.addEventListener('click', (e) => {
            e.preventDefault();
            feeModal.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    }

    // Close logic
    const hideFee = () => {
        feeModal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    if (closeFeeX) closeFeeX.onclick = hideFee;
    if (closeFeeBtn) closeFeeBtn.onclick = hideFee;

    window.addEventListener('click', (e) => {
        if (e.target == feeModal) hideFee();
    });
});