import asun from '../images/asun.jpg';
import efo from '../images/efo.jpg';
import efoo from '../images/efo1.jpg';
import egusi from '../images/egusi1.jpg';
import fish from '../images/fisherman.jpg';
import jollof from '../images/jollof.jpg';
import okro from '../images/okro1.jpg';
import semo from '../images/semovita.jpg';

const menu = () => {
  // section 2
  const sect2m = document.createElement('section');
  sect2m.classList.add('bottom-container__menu');
  const bottomContent = document.createElement('div');
  bottomContent.classList.add('bottom-content');
  const menus = document.createElement('h2');
  menus.classList.add('menu');
  menus.textContent = 'What would you like to eat?';
  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');
  menuContent.innerHTML = `
  <div class="foods-container">
    <figure class="food-item">
      <img src=${asun} alt="Asun" class="food"/>
      <figcaption class="food-caption">Asun 1$</figcaption>
    </figure>
    <figure class="food-item">
      <img src=${efo} alt="Asun" class="food"/>
      <figcaption class="food-caption">Efo 1$</figcaption>
    </figure>
    <figure class="food-item">
      <img src=${efoo} alt="Asun" class="food"/>
      <figcaption class="food-caption">Efoo 1$</figcaption>
    </figure>
    <figure class="food-item">
      <img src=${egusi} alt="Asun" class="food"/>
      <figcaption class="food-caption">Melon Soup 1$</figcaption>
    </figure>
    <figure class="food-item">
      <img src=${fish} alt="Asun" class="food"/>
      <figcaption class="food-caption">Fisherman Soup 1$</figcaption>
    </figure>
    <figure class="food-item">
      <img src=${jollof} alt="Asun" class="food"/>
      <figcaption class="food-caption">Jollof 1$</figcaption>
    </figure>
    <figure class="food-item">
      <img src=${okro} alt="Asun" class="food"/>
      <figcaption class="food-caption">Okro 1$</figcaption>
    </figure>
    <figure class="food-item">
      <img src=${semo} alt="Asun" class="food"/>
      <figcaption class="food-caption">Semo 1$</figcaption>
    </figure>
  </div>`;

  bottomContent.append(menus, menuContent);
  sect2m.appendChild(bottomContent);

  return {
    sect2m,
  };
};

export default menu;