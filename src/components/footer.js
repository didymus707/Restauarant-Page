import nav from './nav';

const footer = () => {
  const footerCon = document.createElement('footer');
  footerCon.classList.add('footer-container', 'pg-bg');
  const contacts = document.createElement('div');
  contacts.classList.add('contacts-container');
  const contactsItem = document.createElement('ul');
  contactsItem.classList.add('contacts-items');
  const items = ['address', 'phone', 'email'];
  items.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('contact');
    const faws = document.createElement('i');
    faws.classList.add('fas');
    if (el === 'address') faws.classList.add('fa-map-marker-alt');
    li.appendChild(faws);
    contactsItem.appendChild(li);
  });
  contacts.appendChild(contactsItem);
  footerCon.append(nav().logoContainer, contacts);
  return footerCon;
};

export default footer;