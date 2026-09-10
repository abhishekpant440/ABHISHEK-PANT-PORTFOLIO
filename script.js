const longForm = [
  {id:"oWkbkVqzJXA", title:"Who Cheats More? GEN Z vs BOOMERS", type:"DOCUMENTARY · LONG FORM", start:0, label:"00:00"},
  {id:"bo0RCXxKv0M", title:"Is Being ‘GAY’ Brainwashing or Biology?", type:"DOCUMENTARY · LONG FORM", start:455, label:"07:35"},
  {id:"yKVrPG0KDGw", title:"What America Actually Did to Michael Jackson?", type:"HISTORY · LONG FORM", start:0, label:"00:00"},
  {id:"EG3IRKcneBY", title:"The Crazy Case Of Mamata Didi (Unfiltered)", type:"GEOPOLITICS · LONG FORM", start:691, label:"11:31"},
  {id:"eMUdID_jGFk", title:"Allure Avani", type:"BRAND · LONG FORM", start:174, label:"02:54"},
  {id:"abVpswkdsSY", title:"Video #06", type:"SOCIAL · LONG FORM", start:82, label:"01:22"}
];

// Motion Graphics: 7 Google Drive embeds.
// Replace the empty driveId values with the FILE IDs from the seven Drive videos.
const motionGraphics = [
  {title:"Motion Graphics #01", driveId:""},
  {title:"Motion Graphics #02", driveId:""},
  {title:"Motion Graphics #03", driveId:""},
  {title:"Motion Graphics #04", driveId:""},
  {title:"Motion Graphics #05", driveId:""},
  {title:"Motion Graphics #06", driveId:""},
  {title:"Motion Graphics #07", driveId:""}
];

const shorts = [
  {id:"thgm6CuEBVw", title:"Short #01", type:"SHORT FORM · SOCIAL", start:0, label:"00:00"},
  {id:"QxibdIAmiD4", title:"Short #02", type:"SHORT FORM · SOCIAL", start:0, label:"00:00"},
  {id:"CM8xiNGodX4", title:"Short #03", type:"SHORT FORM · SOCIAL", start:0, label:"00:00"}
];

function thumb(id){ return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`; }
function drivePreview(id){ return `https://drive.google.com/file/d/${id}/preview`; }

function youtubeCard(item, index){
  const n=String(index+1).padStart(2,"0");
  return `<article class="project" data-video="youtube" data-id="${item.id}" data-start="${item.start}">
    <div class="project-media">
      <img src="${thumb(item.id)}" alt="${item.title}" loading="lazy" onerror="this.src='https://i.ytimg.com/vi/${item.id}/hqdefault.jpg'">
      <span class="num">${n}</span><span class="play">▶</span><span class="tag">${item.type}</span><span class="time">${item.label} → END</span>
    </div><div class="project-meta"><h3>${item.title}</h3><p>${item.label} → END</p></div></article>`;
}

function driveCard(item,index){
  const n=String(index+1).padStart(2,"0");
  const src=item.driveId?drivePreview(item.driveId):"";
  return `<article class="project drive-project" data-video="drive" data-src="${src}">
    <div class="project-media drive-media">
      ${src?`<iframe src="${src}" title="${item.title}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`:`<div class="drive-placeholder"><span>Add Drive file ID</span></div>`}
      <span class="num">${n}</span><span class="play">▶</span><span class="tag">MOTION GRAPHICS</span>
    </div><div class="project-meta"><h3>${item.title}</h3><p>GOOGLE DRIVE → OPEN</p></div></article>`;
}

document.getElementById("longGrid").innerHTML=longForm.map(youtubeCard).join("");
const motionHost=document.getElementById("motionGrid");
if(motionHost) motionHost.innerHTML=motionGraphics.map(driveCard).join("");
document.getElementById("shortGrid").innerHTML=shorts.map(youtubeCard).join("");

const player=document.getElementById("player"),frame=document.getElementById("playerFrame");
function close(){player.classList.remove("open");player.setAttribute("aria-hidden","true");frame.src="";document.body.style.overflow="";}
document.querySelectorAll(".project").forEach(el=>el.addEventListener("click",()=>{
  if(el.dataset.video==="drive"){
    const src=el.dataset.src;
    if(src) window.open(src,"_blank","noopener,noreferrer");
    return;
  }
  const id=el.dataset.id,start=el.dataset.start||0;
  frame.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&start=${start}`;
  player.classList.add("open");player.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}));
document.getElementById("playerClose").addEventListener("click",close);
player.addEventListener("click",e=>{if(e.target===player)close()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
