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
  const newBodyColor = currentBodyColor === '#92C4BF' ? '#043959' : '#92C4BF';
  r.style.setProperty('--body-color', newBodyColor);



  const currentLS1Color = r.style.getPropertyValue('--landscape-1-color');
  const newLS1Color = currentLS1Color === '#C8E4E5' ? '#9ec2e6' : '#C8E4E5';
  r.style.setProperty('--landscape-1-color', newLS1Color);

  const currentLS2Color = r.style.getPropertyValue('--landscape-2-color');
  const newLS2Color = currentLS2Color === '#BCE1E1' ? '#72aee6' : '#BCE1E1';
  r.style.setProperty('--landscape-2-color', newLS2Color);

  const currentLS3Color = r.style.getPropertyValue('--landscape-3-color');
  const newLS3Color = currentLS3Color === '#AED6D5' ? '#4f94d4' : '#AED6D5';
  r.style.setProperty('--landscape-3-color', newLS3Color);

  const currentLS4Color = r.style.getPropertyValue('--landscape-4-color');
  const newLS4Color = currentLS4Color === '#A3D0C8' ? '#135e96' : '#A3D0C8';
  r.style.setProperty('--landscape-4-color', newLS4Color);



  const currentD1Color = r.style.getPropertyValue('--disk-1-color');
  const newD1Color = currentD1Color === '#FFFCE6' ? '#72aee6' : '#FFFCE6';
  r.style.setProperty('--disk-1-color', newD1Color);

  const currentD2Color = r.style.getPropertyValue('--disk-2-color');
  const newD2Color = currentD2Color === '#FFF9CC' ? '#9ec2e6' : '#FFF9CC';
  r.style.setProperty('--disk-2-color', newD2Color);

  const currentD3Color = r.style.getPropertyValue('--disk-3-color');
  const newD3Color = currentD3Color === '#FFD700' ? '#f0f6fc' : '#FFD700';
  r.style.setProperty('--disk-3-color', newD3Color);


}
toggle.addEventListener('change', toggleTheme);