const readmoreBtn = document.querySelectorAll(".toggleVisibility");

function toggleVisibility(id) {
  let elementId = id.replace(/(rm|cl)-btn$/, '');
  document.getElementById(elementId + "card").classList.toggle("visible");
  document.getElementById(elementId + "card").classList.toggle("hidden");
  document.getElementById(elementId + "page").classList.toggle("hidden");
  document.getElementById(elementId + "page").classList.toggle("visible");
}


for (let i = 0; i < readmoreBtn.length; i++) {
  readmoreBtn[i].addEventListener('click', (e) => {
    let elementId = e.target.id;
    if (elementId !== '') {
      toggleVisibility(elementId);
    } else { 
      console.log("An element without an id was clicked.");
    }
  });
}


const thumbnails = document.querySelectorAll('.thumbnail');
const fullscreenImgContainer = document.createElement('div');
fullscreenImgContainer.classList.add('fullscreen-img');

const closeButton = document.createElement('span');
closeButton.classList.add('close-button');
closeButton.innerHTML = '&times;';

const fullscreenImg = document.createElement('img');
fullscreenImgContainer.appendChild(fullscreenImg);
fullscreenImgContainer.appendChild(closeButton);

for (const thumbnail of thumbnails) {
  thumbnail.addEventListener('click', function () {
    let imgsrc = this.src.replace('-sm', '');
    fullscreenImg.src = imgsrc;
    document.body.appendChild(fullscreenImgContainer);
    document.body.classList.add('no-scroll');
  });
}

closeButton.addEventListener('click', function () {
  fullscreenImgContainer.remove();
  document.body.classList.remove('no-scroll');
  fullscreenImg.src = '';
});








var r = document.querySelector(':root');
var toggle = document.getElementById('toggle');

toggle.checked = false;

function toggleTheme() {
  var skyContainer = document.getElementById('header-container');
  if (skyContainer.classList.contains('night-gradient')){
    skyContainer.classList.add('day-gradient');
    skyContainer.classList.remove('night-gradient');

    
  }else{
    skyContainer.classList.add('night-gradient');
    skyContainer.classList.remove('day-gradient');
    
    
  }
  const currentBodyColor = r.style.getPropertyValue('--body-color');
  const newBodyColor = currentBodyColor === 'white' ? '#043959' : 'white';
  r.style.setProperty('--body-color', newBodyColor);
}
toggle.addEventListener('change', toggleTheme);