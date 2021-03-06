import '../styles/style.css';
import nav from './components/nav';
import main from './components/main';
import footer from './components/footer';
import menu from './components/menu';
import contact from './components/contact';

const content = document.querySelector('#content');
content.append(nav().navTag, main().mainContainer, footer());
const tabs = [...document.querySelectorAll('.tabs-item')];
const bag = document.querySelector('.main-bag');
const sect1 = document.querySelector('.top-container');
const menuBtn = document.querySelector('.menu-btn');
const par = document.querySelector('.main-container .para-1');
const head = document.querySelector('.main-container .top-head');
const btn = main().menuBtn;


const home = () => {
  const csname = par.className;
  par.textContent = 'Welcome To';
  head.innerHTML = `
    <span class="pri">Naija's</span>Delicacies
  `;
  par.parentElement.classList.remove('top-content__contact');
  par.classList.remove(csname);
};

const menus = () => {
  par.textContent = 'Menu';
  head.textContent = '';
  par.parentElement.classList.remove('top-content__contact');
  par.className = 'par-style__menu';
};

const contacts = () => {
  par.textContent = 'Say Hi!';
  head.textContent = '';
  par.parentElement.classList.add('top-content__contact');
  par.className = 'par-style__contact';
};

const showHome = () => {
  const sect = sect1.classList;
  const child = bag.lastChild;
  if (!sect.contains('top-container')) {
    home();
    sect1.className = 'top-container';
    menuBtn.className = 'menu-btn';
    bag.replaceChild(main().sect2, child);
  }
};

const showMenu = () => {
  const sect = sect1.classList;
  const child = bag.lastChild;
  if (!sect.contains('top-container__menu')) {
    menus();
    sect1.className = 'top-container__menu';
    menuBtn.className = 'none';
    bag.replaceChild(menu().sect2m, child);
  }
};

const showContact = () => {
  const sect = sect1.classList;
  const child = bag.lastChild;
  if (!sect.contains('top-container__contact')) {
    contacts();
    sect1.className = 'top-container__contact';
    menuBtn.className = 'none';
    bag.replaceChild(contact(), child);
  }
};

tabs.forEach(el => {
  el.addEventListener('click', e => {
    const { target } = e;
    if (el.textContent === 'Home' && target.textContent === 'Home') {
      showHome();
    } else if ((el.textContent === 'Menu' && target.textContent === 'Menu') || target.textContent === 'Choose your favorite delicacy') {
      showMenu();
    } else {
      showContact();
    }
    return el;
  });
});

btn.onclick = showMenu();