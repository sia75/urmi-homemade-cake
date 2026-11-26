// আপনার ব্যবসার তথ্য এখানে পরিবর্তন করতে পারবেন
const BUSINESS = {
  whatsapp: "8801785235997", // আন্তর্জাতিক ফরম্যাট: 880 দিয়ে শুরু, + বা 0 নয়
  facebook: "https://www.facebook.com/profile.php?id=61596398871537"
};

function whatsappLink(message) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

document.getElementById("whatsappMain").href = whatsappLink("Assalamu Alaikum, Urmi Homemade Cake থেকে কেক অর্ডার করতে চাই।");
document.getElementById("floatingWhatsApp").href = whatsappLink("Assalamu Alaikum, কেক সম্পর্কে জানতে চাই।");
document.getElementById("customWhatsApp").href = whatsappLink("Assalamu Alaikum, আমি একটি কাস্টম ডিজাইনের কেক অর্ডার করতে চাই।");
document.getElementById("facebookMain").href = BUSINESS.facebook;
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".order-card").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    window.open(whatsappLink(`Assalamu Alaikum, আমি "${product}" অর্ডার করতে চাই। দয়া করে দাম ও বিস্তারিত জানাবেন।`), "_blank", "noopener");
  });
});

document.getElementById("filters").addEventListener("click", event => {
  const button = event.target.closest(".filter");
  if (!button) return;
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const category = button.dataset.filter;
  document.querySelectorAll(".cake-card").forEach(card => {
    card.classList.toggle("hidden", category !== "all" && card.dataset.category !== category);
  });
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
navMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navMenu.classList.remove("open")));
