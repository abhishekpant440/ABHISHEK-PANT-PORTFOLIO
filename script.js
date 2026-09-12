const graphicDesign = [
  {title:"India's Most Brutal Serial Killer", src:"assets/01_MAIN_FINAL (1).png", kind:"thumbnail", label:"YOUTUBE THUMBNAIL"},
  {title:"A’ja Wilson — WNBA Champion", src:"assets/01-FINAL-WILSON (1).jpg", kind:"poster", label:"POSTER DESIGN"},
  {title:"Virat Kohli — 100 v/s Pakistan", src:"assets/02-KOHLI GRAINED (1).jpg", kind:"poster", label:"POSTER DESIGN"},
  {title:"Hypocrite — Samay Raina / Ashneer", src:"assets/ART 3 (1).png", kind:"thumbnail", label:"YOUTUBE THUMBNAIL"},
  {title:"5 Free After Effects Plugins", src:"assets/AE_PLUGINS_THUMBNAILS.png", kind:"thumbnail", label:"YOUTUBE THUMBNAIL"},
  {title:"Kinetic Typography in After Effects", src:"assets/KINETIC UPDATED.png", kind:"thumbnail", label:"YOUTUBE THUMBNAIL"}
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
function graphicCard(item,index){const n=String(index+1).padStart(2,"0");return `<article class="project graphic-project graphic-${item.kind}" data-video="graphic" data-src="${item.src}"><div class="project-media"><img src="${item.src}" alt="${item.title}" loading="lazy"><span class="num">${n}</span><span class="tag">${item.label}</span><span class="hover-hint">HOVER TO PREVIEW</span></div><div class="project-meta"><h3>${item.title}</h3><p>${item.kind==="poster"?"POSTER DESIGN → HOVER":"YOUTUBE THUMBNAIL → HOVER"}</p></div></article>`;}
function driveCard(item,index,kind){const n=String(index+1).padStart(2,"0"),src=item.driveId?drivePreview(item.driveId):"",tag=kind==="motion"?"MOTION GRAPHICS":"LONG FORM";return `<article class="project drive-project" data-video="drive" data-src="${src}"><div class="project-media drive-media">${src?`<iframe src="${src}" title="${item.title}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`:`<div class="drive-placeholder"><span>DRIVE VIDEO PENDING</span></div>`}<span class="num">${n}</span><span class="play">▶</span><span class="tag">${tag}</span><span class="hover-hint">HOVER TO PREVIEW</span></div><div class="project-meta"><h3>${item.title}</h3><p>${src?"GOOGLE DRIVE → HOVER":"ADD DRIVE FILE ID"}</p></div></article>`;}
function youtubeCard(item,index){const n=String(index+1).padStart(2,"0");return `<article class="project" data-video="youtube" data-id="${item.id}" data-start="${item.start}"><div class="project-media"><img src="${thumb(item.id)}" alt="${item.title}" loading="lazy" onerror="this.src='https://i.ytimg.com/vi/${item.id}/hqdefault.jpg'"><span class="num">${n}</span><span class="play">▶</span><span class="tag">${item.type}</span><span class="time">${item.label} → END</span><span class="hover-hint">HOVER TO PREVIEW</span></div><div class="project-meta"><h3>${item.title}</h3><p>${item.label} · ${item.label} → END</p></div></article>`;}
document.getElementById("graphicGrid").innerHTML=graphicDesign.map(graphicCard).join("");
document.getElementById("motionGrid").innerHTML=motionGraphics.map((x,i)=>driveCard(x,i,"motion")).join("");
document.getElementById("longGrid").innerHTML=longForm.map((x,i)=>driveCard(x,i,"long")).join("");
document.getElementById("shortGrid").innerHTML=shorts.map(youtubeCard).join("");

const player=document.getElementById("player"),frame=document.getElementById("playerFrame"),playerImage=document.getElementById("playerImage");
function close(){player.classList.remove("open");player.setAttribute("aria-hidden","true");frame.src="";if(playerImage){playerImage.removeAttribute("src");playerImage.style.display="none";}frame.style.display="block";document.body.style.overflow="";}
function openImage(src){frame.src="";frame.style.display="none";if(playerImage){playerImage.src=src;playerImage.style.display="block";}player.classList.add("open");player.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}
function openVideo(src){if(playerImage){playerImage.removeAttribute("src");playerImage.style.display="none";}frame.style.display="block";frame.src=src;player.classList.add("open");player.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}

const hoverPreview=document.createElement("div");
hoverPreview.className="hover-preview";
hoverPreview.innerHTML=`<button class="hover-preview-close" aria-label="Close preview">×</button><div class="hover-preview-media"></div><div class="hover-preview-label">LIVE PREVIEW · MOVE AWAY TO CLOSE</div>`;
document.body.appendChild(hoverPreview);
const hoverMedia=hoverPreview.querySelector(".hover-preview-media"),hoverClose=hoverPreview.querySelector(".hover-preview-close");
let hoverTimer;
function hideHover(){clearTimeout(hoverTimer);hoverPreview.classList.remove("show");hoverMedia.innerHTML="";}
function placeHover(el){const r=el.getBoundingClientRect();const w=Math.min(380,window.innerWidth*0.30);const h=w*0.625;let left=r.right+18;if(left+w>window.innerWidth-18)left=r.left-w-18;if(left<18)left=Math.max(18,(window.innerWidth-w)/2);let top=r.top;if(top+h>window.innerHeight-18)top=window.innerHeight-h-18;if(top<18)top=18;hoverPreview.style.width=`${w}px`;hoverPreview.style.left=`${left}px`;hoverPreview.style.top=`${top}px`;hoverPreview.style.right="auto";hoverPreview.style.bottom="auto";}
function showHover(el){clearTimeout(hoverTimer);const media=el.querySelector(".project-media");if(!media)return;hoverMedia.innerHTML="";if(el.dataset.video==="graphic"){const img=document.createElement("img");img.src=el.dataset.src;img.alt="Preview";hoverMedia.appendChild(img);}else if(el.dataset.video==="drive"&&el.dataset.src){const f=document.createElement("iframe");f.src=el.dataset.src;f.allow="autoplay; fullscreen; picture-in-picture";f.allowFullscreen=true;hoverMedia.appendChild(f);}else if(el.dataset.video==="youtube"){const f=document.createElement("iframe");f.src=`https://www.youtube-nocookie.com/embed/${el.dataset.id}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1&start=${el.dataset.start||0}`;f.allow="autoplay; fullscreen; picture-in-picture";f.allowFullscreen=true;hoverMedia.appendChild(f);}else{return;}placeHover(el);hoverPreview.classList.add("show");}
document.querySelectorAll(".project").forEach(el=>{el.addEventListener("mouseenter",()=>showHover(el));el.addEventListener("mouseleave",()=>{hoverTimer=setTimeout(hideHover,220)});el.addEventListener("click",()=>{if(el.dataset.video==="graphic")return;if(el.dataset.video==="drive"){if(el.dataset.src)openVideo(el.dataset.src);return;}if(el.dataset.video==="youtube"){const id=el.dataset.id,start=el.dataset.start||0;openVideo(`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&start=${start}`);}});});
hoverPreview.addEventListener("mouseenter",()=>clearTimeout(hoverTimer));hoverPreview.addEventListener("mouseleave",()=>{hoverTimer=setTimeout(hideHover,120)});hoverClose.addEventListener("click",hideHover);
window.addEventListener("scroll",hideHover,{passive:true});window.addEventListener("resize",hideHover);
document.getElementById("playerClose").addEventListener("click",close);player.addEventListener("click",e=>{if(e.target===player)close()});document.addEventListener("keydown",e=>{if(e.key==="Escape"){hideHover();close()}});
