const menu = () => {
  // section 2
  const sect2m = document.createElement('section');
  sect2m.classList.add('bottom-container');
  const bottomContent = document.createElement('div');
  bottomContent.classList.add('bottom-content');
  const menus = document.createElement('h2');
  menus.classList.add('menu');
  menus.textContent = 'What would you like to eat';
  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');
  const foods = document.createElement('img');
  foods.classList.add('food');
  foods.textContent = 'Planning to change you';
  menuContent.appendChild(foods);
  bottomContent.append(menu, menuContent);
  sect2m.appendChild(bottomContent);

  return {
    sect2m,
  };
};

export default menu;