document.addEventListener("DOMContentLoaded", () => {
  const graphicDesign = [
    {title:"India's Most Brutal Serial Killer",src:"assets/01_MAIN_FINAL (1).png",kind:"thumbnail",label:"YOUTUBE THUMBNAIL"},
    {title:"A’ja Wilson — WNBA Champion",src:"assets/01-FINAL-WILSON (1).jpg",kind:"poster",label:"POSTER DESIGN"},
    {title:"Virat Kohli — 100 v/s Pakistan",src:"assets/02-KOHLI GRAINED (1).jpg",kind:"poster",label:"POSTER DESIGN"},
    {title:"Hypocrite — Samay Raina / Ashneer",src:"assets/ART 3 (1).png",kind:"thumbnail",label:"YOUTUBE THUMBNAIL"},
    {title:"5 Free After Effects Plugins",src:"assets/AE_PLUGINS_THUMBNAILS.png",kind:"thumbnail",label:"YOUTUBE THUMBNAIL"},
    {title:"Kinetic Typography in After Effects",src:"assets/KINETIC UPDATED.png",kind:"thumbnail",label:"YOUTUBE THUMBNAIL"}
  ];
  const motionGraphics = [
    {title:"Motion Graphics #01",driveId:""},{title:"Motion Graphics #02",driveId:""},{title:"Motion Graphics #03",driveId:""},{title:"Motion Graphics #04",driveId:""},{title:"Motion Graphics #05",driveId:""},{title:"Motion Graphics #06",driveId:""},{title:"Motion Graphics #07",driveId:""}
  ];
  const longForm = [
    {title:"Long Form #01",driveId:"1VP1E0dTArBwiyP7S0YA7v85yW7Sb767n"},{title:"Long Form #02",driveId:""},{title:"Long Form #03",driveId:""}
  ];
  const shorts = [
    {id:"thgm6CuEBVw",title:"Short #01",type:"REELS / SHORTS · SOCIAL",start:0,label:"00:00"},
    {id:"QxibdIAmiD4",title:"Short #02",type:"REELS / SHORTS · SOCIAL",start:0,label:"00:00"},
    {id:"CM8xiNGodX4",title:"Short #03",type:"REELS / SHORTS · SOCIAL",start:0,label:"00:00"}
  ];

  const $ = id => document.getElementById(id);
  const thumb = id => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  const drivePreview = id => `https://drive.google.com/file/d/${id}/preview`;

  function graphicCard(item,index){
    const n=String(index+1).padStart(2,"0");
    return `<article class="project graphic-project graphic-${item.kind}" data-video="graphic" data-src="${item.src}" data-kind="${item.kind}">
      <div class="project-media"><img src="${item.src}" alt="${item.title}" loading="lazy"><span class="num">${n}</span><span class="tag">${item.label}</span><span class="hover-hint">VIEW</span></div>
      <div class="project-meta"><h3>${item.title}</h3><p>${item.label} → VIEW</p></div>
    </article>`;
  }
  function driveCard(item,index,kind){
    const n=String(index+1).padStart(2,"0"),src=item.driveId?drivePreview(item.driveId):"",tag=kind==="motion"?"MOTION GRAPHICS":"LONG FORM";
    return `<article class="project drive-project" data-video="drive" data-src="${src}">
      <div class="project-media drive-media">${src?`<iframe src="${src}" title="${item.title}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`:`<div class="drive-placeholder"><span>DRIVE VIDEO PENDING</span></div>`}<span class="num">${n}</span><span class="play">▶</span><span class="tag">${tag}</span><span class="hover-hint">HOVER</span></div>
      <div class="project-meta"><h3>${item.title}</h3><p>${src?"GOOGLE DRIVE → PREVIEW":"ADD DRIVE FILE ID"}</p></div>
    </article>`;
  }
  function youtubeCard(item,index){
    const n=String(index+1).padStart(2,"0");
    return `<article class="project" data-video="youtube" data-id="${item.id}" data-start="${item.start}">
      <div class="project-media"><img src="${thumb(item.id)}" alt="${item.title}" loading="lazy" onerror="this.src='https://i.ytimg.com/vi/${item.id}/hqdefault.jpg'"><span class="num">${n}</span><span class="play">▶</span><span class="tag">${item.type}</span><span class="time">${item.label} → END</span><span class="hover-hint">HOVER</span></div>
      <div class="project-meta"><h3>${item.title}</h3><p>${item.label} → END</p></div>
    </article>`;
  }

  const graphicGrid=$("graphicGrid"),motionGrid=$("motionGrid"),longGrid=$("longGrid"),shortGrid=$("shortGrid");
  if(graphicGrid) graphicGrid.innerHTML=graphicDesign.map(graphicCard).join("");
  if(motionGrid) motionGrid.innerHTML=motionGraphics.map((x,i)=>driveCard(x,i,"motion")).join("");
  if(longGrid) longGrid.innerHTML=longForm.map((x,i)=>driveCard(x,i,"long")).join("");
  if(shortGrid) shortGrid.innerHTML=shorts.map(youtubeCard).join("");

  const player=$("player"),frame=$("playerFrame"),playerImage=$("playerImage");
  function closePlayer(){
    if(!player)return;
    player.classList.remove("open","image-mode");
    player.setAttribute("aria-hidden","true");
    if(frame){frame.src="";frame.style.width="";frame.style.height="";frame.style.aspectRatio="";frame.style.maxWidth="";frame.style.maxHeight="";}
    if(playerImage){playerImage.removeAttribute("src");playerImage.style.display="none";playerImage.style.width="";playerImage.style.height="";playerImage.style.maxWidth="";playerImage.style.maxHeight="";}
    if(frame)frame.style.display="grid";
    document.body.style.overflow="";
  }
  function openImage(src){
    if(!player||!playerImage)return;
    frame.src="";
    frame.style.display="grid";
    frame.style.width="auto";
    frame.style.height="auto";
    frame.style.aspectRatio="auto";
    frame.style.maxWidth="90vw";
    frame.style.maxHeight="90vh";
    frame.style.background="#000";
    playerImage.src=src;
    playerImage.style.display="block";
    playerImage.style.width="auto";
    playerImage.style.height="auto";
    playerImage.style.maxWidth="90vw";
    playerImage.style.maxHeight="90vh";
    playerImage.style.objectFit="contain";
    player.classList.add("open","image-mode");
    player.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  }
  function openVideo(src){
    if(!player||!frame)return;
    player.classList.remove("image-mode");
    playerImage.removeAttribute("src");
    playerImage.style.display="none";
    frame.style.display="block";
    frame.style.width="min(1200px,92vw)";
    frame.style.height="auto";
    frame.style.aspectRatio="16/9";
    frame.style.maxWidth="";
    frame.style.maxHeight="";
    frame.src=src;
    player.classList.add("open");
    player.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  }

  const hoverPreview=document.createElement("div");
  hoverPreview.className="hover-preview";
  hoverPreview.innerHTML='<div class="hover-preview-media"></div><div class="hover-preview-label">LIVE PREVIEW · MOVE AWAY TO CLOSE</div>';
  document.body.appendChild(hoverPreview);
  const hoverMedia=hoverPreview.querySelector(".hover-preview-media");
  let activeHover=null;

  function hideHover(){
    activeHover=null;
    hoverPreview.classList.remove("show","poster-preview");
    hoverMedia.innerHTML="";
  }

  function showHover(el){
    if(activeHover===el)return;
    hideHover();
    activeHover=el;
    const isPoster=el.dataset.video==="graphic" && el.dataset.kind==="poster";
    if(el.dataset.video==="graphic"){
      const img=document.createElement("img");
      img.src=el.dataset.src;
      img.alt="Design preview";
      hoverMedia.appendChild(img);
    }else if(el.dataset.video==="youtube"){
      const f=document.createElement("iframe");
      f.src=`https://www.youtube-nocookie.com/embed/${el.dataset.id}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&start=${el.dataset.start||0}`;
      f.allow="autoplay; fullscreen; picture-in-picture";
      f.allowFullscreen=true;
      hoverMedia.appendChild(f);
    }else if(el.dataset.video==="drive"&&el.dataset.src){
      const f=document.createElement("iframe");
      f.src=el.dataset.src+"?autoplay=1";
      f.allow="autoplay; fullscreen; picture-in-picture";
      f.allowFullscreen=true;
      hoverMedia.appendChild(f);
    }else{
      activeHover=null;
      return;
    }
    if(isPoster)hoverPreview.classList.add("poster-preview");
    requestAnimationFrame(()=>hoverPreview.classList.add("show"));
  }

  const cursor=document.createElement("div");
  cursor.className="custom-cursor";
  document.body.appendChild(cursor);
  window.addEventListener("mousemove",e=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";
  });

  document.querySelectorAll(".project").forEach(el=>{
    el.addEventListener("mouseenter",()=>{showHover(el);cursor.classList.add("active");});
    el.addEventListener("mouseleave",()=>{hideHover();cursor.classList.remove("active");});
    el.addEventListener("click",()=>{
      hideHover();
      if(el.dataset.video==="graphic"){
        openImage(el.dataset.src);
        return;
      }
      if(el.dataset.video==="drive"&&el.dataset.src){openVideo(el.dataset.src);return;}
      if(el.dataset.video==="youtube"){
        openVideo(`https://www.youtube-nocookie.com/embed/${el.dataset.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&start=${el.dataset.start||0}`);
      }
    });
  });

  window.addEventListener("scroll",hideHover,{passive:true});
  window.addEventListener("resize",hideHover);
  $("playerClose")?.addEventListener("click",closePlayer);
  player?.addEventListener("click",e=>{if(e.target===player)closePlayer()});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){hideHover();closePlayer()}});
});