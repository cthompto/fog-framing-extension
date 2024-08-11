//

var frameAssettoURL = browser.runtime.getURL("images/fog-frame-front.svg");

document.body.style.cursor = "none";
console.log(frameAssettoURL);

var fog =  document.createElement('div');
fog.style.width = "280px";
fog.style.height = "190px";
fog.id = "fog";
fog.style.position = "fixed";
fog.style.margin = "0";
fog.style.padding = "0";
fog.style.zIndex = "999";
fog.style.left = "5";
fog.style.top = "0";
fog.style.backgroundColor = "white";
fog.style.opacity = "0.3";
document.body.append(fog);

var blur = document.createElement('div');
blur.style.width = "280px";
blur.style.height = "190px";
blur.id = "blur";
blur.style.position = "fixed";
blur.style.margin = "0";
blur.style.padding = "0";
blur.style.zIndex = "998";
blur.style.left = "5";
blur.style.top = "0";
//blur.style.backgroundColor = "white";
//blur.style.opacity = "0.9";
//blur.style.filter = "blur(5px)";
blur.style.backdropFilter = "blur(5px)";
document.body.append(blur);

var img = document.createElement('img');
img.src = frameAssettoURL;
img.style.width = "300px";
img.id = "pointer";
img.style.position = "fixed";
img.style.margin = "0";
img.style.padding = "0";
img.style.zIndex = "1000";
img.style.left = "0";
img.style.top = "0";



document.body.append(img);

const fogFrame = document.querySelector('#pointer');
const divBlur = document.querySelector('#blur');
const divFog = document.querySelector('#fog');

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  
  //divHolder.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  //fogFrame.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  fogFrame.style.left = (mouseX - 5) + 'px';
  fogFrame.style.top = (mouseY - 5) + 'px';
  divBlur.style.left = (mouseX + 5) + 'px';
  divBlur.style.top = (mouseY + 5) + 'px';
  divFog.style.left = (mouseX + 5) + 'px';
  divFog.style.top = (mouseY + 5) + 'px';

}

window.addEventListener('mousemove', moveCursor)
