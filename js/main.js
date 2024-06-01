let navicon = document.querySelector('.navicon');
let container = document.querySelector('.home-nav .container');

navicon.onclick = () => {
  if (!navicon.classList.contains('active')) {
    navicon.classList.add('active');
    container.classList.add('active');
  }
  else {
    navicon.classList.remove('active');
    container.classList.remove('active');
  }
}