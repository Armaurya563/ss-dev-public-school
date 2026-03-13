// Admission Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("admissionModal");
    const openBtn = document.getElementById("openAdmission");
    const closeBtn = document.getElementById("closeModal");
    const closeFooterBtn = document.getElementById("closeFooterBtn");

    // Open Modal
    if(openBtn) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Scroll band karne ke liye
        });
    }

    // Close Modal Function
    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Scroll wapas chalu karne ke liye
    };

    if(closeBtn) closeBtn.onclick = closeModal;
    if(closeFooterBtn) closeFooterBtn.onclick = closeModal;

    // Window ke bahar click karne par band ho jaye
    window.onclick = (event) => {
        if (event.target == modal) {
            closeModal();
        }
    };
});