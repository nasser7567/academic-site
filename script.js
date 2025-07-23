// AOS animation
AOS.init();

// زر العودة إلى الأعلى
window.addEventListener("scroll", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// نافذة منبثقة لاستشارة مجانية
window.addEventListener("load", () => {
  setTimeout(() => {
    const popup = document.createElement("div");
    popup.innerHTML = `
      <div style="position: fixed; bottom: 20px; right: 20px; background: white; border: 2px solid #004080; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.2); max-width: 300px; z-index: 9999;">
        <strong>استشارة مجانية؟</strong>
        <p>احجز الآن أول استشارة مجانية لمساعدتك في بحثك العلمي!</p>
        <a href='https://wa.me/dronlineservicew015' class='button' style='background:#25D366;'>تواصل الآن</a>
      </div>`;
    document.body.appendChild(popup);
  }, 15000);
});