const longForm = [
  {id:"oWkbkVqzJXA", title:"Who Cheats More? GEN Z vs BOOMERS", type:"DOCUMENTARY · LONG FORM", start:0, label:"00:00"},
  {id:"bo0RCXxKv0M", title:"Is Being ‘GAY’ Brainwashing or Biology?", type:"DOCUMENTARY · LONG FORM", start:455, label:"07:35"},
  {id:"yKVrPG0KDGw", title:"What America Actually Did to Michael Jackson?", type:"HISTORY · LONG FORM", start:0, label:"00:00"},
  {id:"EG3IRKcneBY", title:"The Crazy Case Of Mamata Didi (Unfiltered)", type:"GEOPOLITICS · LONG FORM", start:691, label:"11:31"},
  {id:"eMUdID_jGFk", title:"Allure Avani", type:"BRAND · LONG FORM", start:174, label:"02:54"},
  {id:"abVpswkdsSY", title:"Video #06", type:"SOCIAL · LONG FORM", start:82, label:"01:22"}
];

const shorts = [
  {id:"thgm6CuEBVw", title:"Short #01", type:"SHORT FORM · SOCIAL", start:0, label:"00:00"},
  {id:"QxibdIAmiD4", title:"Short #02", type:"SHORT FORM · SOCIAL", start:0, label:"00:00"},
  {id:"CM8xiNGodX4", title:"Short #03", type:"SHORT FORM · SOCIAL", start:0, label:"00:00"}
];

function thumb(id){
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
}
function card(item, index){
  const n = String(index+1).padStart(2,"0");
  const encoded = encodeURIComponent(item.title);
  return `<article class="project" data-id="${item.id}" data-start="${item.start}" data-title="${encoded}">
    <div class="project-media">
      <img src="${thumb(item.id)}" alt="${item.title}" loading="lazy"
           onerror="this.src='https://i.ytimg.com/vi/${item.id}/hqdefault.jpg'">
      <span class="num">${n}</span>
      <span class="play">▶</span>
      <span class="tag">${item.type}</span>
      <span class="time">${item.label} → END</span>
    </div>
    <div class="project-meta"><h3>${item.title}</h3><p>${item.label} → END</p></div>
  </article>`;
}
document.getElementById("longGrid").innerHTML = longForm.map(card).join("");
document.getElementById("shortGrid").innerHTML = shorts.map(card).join("");

const player = document.getElementById("player");
const frame = document.getElementById("playerFrame");
const close = () => {
  player.classList.remove("open");
  player.setAttribute("aria-hidden","true");
  frame.src = "";
  document.body.style.overflow = "";
};
document.querySelectorAll(".project").forEach(el=>{
  el.addEventListener("click",()=>{
    const id = el.dataset.id;
    const start = el.dataset.start || 0;
    frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&start=${start}`;
    player.classList.add("open");
    player.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
  });
});
document.getElementById("playerClose").addEventListener("click",close);
player.addEventListener("click",e=>{if(e.target===player) close()});
document.addEventListener("keydown",e=>{if(e.key==="Escape") close()});
