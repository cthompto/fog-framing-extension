//

var frameAssettoURL = browser.runtime.getURL("images/fog-frame-front.svg");

document.body.style.cursor = "none";
console.log(frameAssettoURL);

var img = document.createElement('img');
img.src = frameAssettoURL;
img.width = 100;
img.id = "pointer";
img.position = "absolute";
img.margin = "0";
img.padding = "0";
img.zIndex = "1000";
img.left = "0";
img.top = "0";
document.body.append(img);

const fogFrame = document.querySelector('#pointer');

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  //fogFrame.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  fogFrame.style.left = (mouseX - 5) + 'px';
  fogFrame.style.top = (mouseY- 5) + 'px';
}

window.addEventListener('mousemove', moveCursor)
