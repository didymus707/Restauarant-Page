import '../styles/style.css';
import nav from './components/nav';
import main from './components/main';
import footer from './components/footer';
import menu from './components/menu';

const content = document.querySelector('#content');
content.append(nav().navTag, main().mainContainer, footer());
const tabs = [...document.querySelectorAll('.tabs-item')];
const mainContainer = document.querySelector('.main-container');
const sect1 = document.querySelector('.top-container');
const menuBtn = document.querySelector('.menu-btn');

const showHome = () => {
  const classs = mainContainer.firstChild.className;
  const sect = sect1.classList;
  const child = mainContainer.lastChild;
  if (!sect.contains('top-container')) {
    sect1.classList.replace(classs, 'top-container');
    mainContainer.replaceChild(main().sect2, child);
  }
};

const showMenu = () => {
  const classs = mainContainer.firstChild.className;
  const sect = sect1.classList;
  const par = document.querySelector(`.${classs} .para-1`);
  const head = document.querySelector(`.${classs} .top-head`);
  par.textContent = 'Hmmmn Yummy!';
  head.textContent = 'Menu...';
  const child = mainContainer.lastChild;
  if (!sect.contains('top-container__menu')) {
    sect.replace(classs, 'top-container__menu');
    menuBtn.classList.replace('menu-btn', 'none');
    mainContainer.replaceChild(menu().sect2m, child);
  }
};

const showContact = () => {
  const classs = mainContainer.firstChild.className;
  const sect = sect1.classList;
  const par = document.querySelector(`.${classs} .para-1`);
  const head = document.querySelector(`.${classs} .top-head`);
  par.textContent = 'Say Hi';
  head.textContent = 'Send Us a Message';
  const child = mainContainer.lastChild;
  if (!sect.contains('top-container__contact')) {
    sect.replace(classs, 'top-container__contact');
    menuBtn.classList.replace('menu-btn', 'none');
    mainContainer.replaceChild(menu().sect2m, child);
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