// تحديث سنة الفوتر تلقائياً
document.getElementById('year').textContent = new Date().getFullYear();

// هنا تضيفي التيبي تاعك
const projects = [
  {
    title: "TPI 1 - واجهة بسيطة",
    desc: "مشروع بسيط HTML و CSS.",
    img: "assets/img/tpi1.jpg",
    link: "assets/pdf/tpi1.pdf"
  },
  {
    title: "TPI 2 - مشروع تفاعلي",
    desc: "باستعمال JavaScript.",
    img: "assets/img/tpi2.jpg",
    link: "assets/pdf/tpi2.pdf"
  }
];

// عرض المشاريع
const grid = document.getElementById('projects-grid');
projects.forEach(p => {
  const el = document.createElement('div');
  el.className = 'project';
  el.innerHTML = `
    <img src="${p.img}" alt="${p.title}">
    <div class="p-body">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags"><a href="${p.link}" target="_blank">📂 عرض المشروع</a></div>
    </div>`;
  grid.appendChild(el);
});

// فورم التواصل (mailto)
function sendMail(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent(`رسالة من ${name} - Portfolio`);
  const body = encodeURIComponent(message);
  window.location.href = `mailto:samahmameche@gmail.com?subject=${subject}&body=${body}`;
}
