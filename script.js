const graphicDesign = [
  {title:"India's Most Brutal Serial Killer", src:"assets/01_MAIN_FINAL (1).png"},
  {title:"A’ja Wilson — WNBA Champion", src:"assets/01-FINAL-WILSON (1).jpg"},
  {title:"Virat Kohli — 100 v/s Pakistan", src:"assets/02-KOHLI GRAINED (1).jpg"},
  {title:"Hypocrite — Samay Raina / Ashneer", src:"assets/ART 3 (1).png"}
];
const motionGraphics = [
  {title:"Motion Graphics #01", driveId:""},{title:"Motion Graphics #02", driveId:""},{title:"Motion Graphics #03", driveId:""},{title:"Motion Graphics #04", driveId:""},{title:"Motion Graphics #05", driveId:""},{title:"Motion Graphics #06", driveId:""},{title:"Motion Graphics #07", driveId:""}
];
const longForm = [
  {title:"Long Form #01", driveId:"1VP1E0dTArBwiyP7S0YA7v85yW7Sb767n"},{title:"Long Form #02", driveId:""},{title:"Long Form #03", driveId:""}
];
const shorts = [
  {id:"thgm6CuEBVw", title:"Short #01", type:"REELS / SHORTS · SOCIAL", start:0, label:"00:00"},
  {id:"QxibdIAmiD4", title:"Short #02", type:"REELS / SHORTS · SOCIAL", start:0, label:"00:00"},
  {id:"CM8xiNGodX4", title:"Short #03", type:"REELS / SHORTS · SOCIAL", start:0, label:"00:00"}
];
function thumb(id){return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;}
function drivePreview(id){return `https://drive.google.com/file/d/${id}/preview`;}
function graphicCard(item,index){const n=String(index+1).padStart(2,"0");return `<article class="project graphic-project"><div class="project-media"><img src="${item.src}" alt="${item.title}" loading="lazy"><span class="num">${n}</span><span class="play">↗</span><span class="tag">GRAPHIC DESIGN</span></div><div class="project-meta"><h3>${item.title}</h3><p>DESIGN → VIEW</p></div></article>`;}
function driveCard(item,index,kind){const n=String(index+1).padStart(2,"0"),src=item.driveId?drivePreview(item.driveId):"",tag=kind==="motion"?"MOTION GRAPHICS":"LONG FORM";return `<article class="project drive-project" data-video="drive" data-src="${src}"><div class="project-media drive-media">${src?`<iframe src="${src}" title="${item.title}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`:`<div class="drive-placeholder"><span>DRIVE VIDEO PENDING</span></div>`}<span class="num">${n}</span><span class="play">▶</span><span class="tag">${tag}</span></div><div class="project-meta"><h3>${item.title}</h3><p>${src?"GOOGLE DRIVE → OPEN":"ADD DRIVE FILE ID"}</p></div></article>`;}
function youtubeCard(item,index){const n=String(index+1).padStart(2,"0");return `<article class="project" data-video="youtube" data-id="${item.id}" data-start="${item.start}"><div class="project-media"><img src="${thumb(item.id)}" alt="${item.title}" loading="lazy" onerror="this.src='https://i.ytimg.com/vi/${item.id}/hqdefault.jpg'"><span class="num">${n}</span><span class="play">▶</span><span class="tag">${item.type}</span><span class="time">${item.label} → END</span></div><div class="project-meta"><h3>${item.title}</h3><p>${item.label} → END</p></div></article>`;}
document.getElementById("graphicGrid").innerHTML=graphicDesign.map(graphicCard).join("");
document.getElementById("motionGrid").innerHTML=motionGraphics.map((x,i)=>driveCard(x,i,"motion")).join("");
document.getElementById("longGrid").innerHTML=longForm.map((x,i)=>driveCard(x,i,"long")).join("");
document.getElementById("shortGrid").innerHTML=shorts.map(youtubeCard).join("");
const player=document.getElementById("player"),frame=document.getElementById("playerFrame");
function close(){player.classList.remove("open");player.setAttribute("aria-hidden","true");frame.src="";document.body.style.overflow="";}
document.querySelectorAll(".project").forEach(el=>el.addEventListener("click",()=>{
  if(el.dataset.video==="drive"){
    const src=el.dataset.src;
    if(src) window.open(src,"_blank","noopener,noreferrer");
    return;
  }
  if(el.dataset.video==="youtube"){
    const id=el.dataset.id,start=el.dataset.start||0;
    frame.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&start=${start}`;
    player.classList.add("open");player.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
  }
}));
document.getElementById("playerClose").addEventListener("click",close);
player.addEventListener("click",e=>{if(e.target===player)close()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
