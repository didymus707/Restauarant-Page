const nav = () => {
  // for nav
  const navTag = document.createElement('nav');
  navTag.classList.add('nav-container', 'pg-bg');
  // for logo
  const logoContainer = document.createElement('div');
  const logoItems = document.createElement('div');
  const logo = document.createElement('p');
  const logoSpan = document.createElement('span');
  logoContainer.classList.add('logo-container');
  logoItems.classList.add('logo-items');
  logo.classList.add('logo-item');
  logoSpan.classList.add('pri');
  logoSpan.textContent = 'Naija\'s';
  logo.append(logoSpan, 'Delicacies');
  // for tabs
  const tabsContainer = document.createElement('ul');
  const items = ['Home', 'Menu', 'Contact'];
  tabsContainer.classList.add('tabs-container');
  items.forEach(el => {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    li.classList.add('tabs-items');
    anchor.classList.add('tabs-item');
    anchor.textContent = el;
    li.appendChild(anchor);
    tabsContainer.appendChild(li);
  });
  // appending elements to nav
  logoItems.appendChild(logo);
  logoContainer.appendChild(logoItems);
  navTag.append(logoContainer, tabsContainer);
  return {
    navTag,
    logoContainer,
  };
};

export default nav;
