// awemuze.one — no tracking, no analytics, no external calls.
(() => {
  // Optional: pause animation when tab is hidden (silence-friendly, saves energy).
  const root = document.documentElement;
  const styleId = "awemuze-pause-style";
  const pauseCSS = `
    .ring { animation-play-state: paused !important; }
  `;

  function setPaused(paused){
    let style = document.getElementById(styleId);
    if(paused){
      if(!style){
        style = document.createElement("style");
        style.id = styleId;
        style.textContent = pauseCSS;
        document.head.appendChild(style);
      }
    }else{
      if(style) style.remove();
    }
  }

  document.addEventListener("visibilitychange", () => {
    setPaused(document.hidden);
  });
})();
