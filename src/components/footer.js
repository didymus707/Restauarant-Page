import nav from './nav';

const footer = () => {
  const footerCon = document.createElement('footer');
  footerCon.classList.add('footer-container', 'pg-bg');
  const footerContents = document.createElement('footer');
  footerContents.classList.add('footer-contents');
  const contacts = document.createElement('div');
  contacts.classList.add('contacts-container');
  const contactsItem = document.createElement('ul');
  contactsItem.classList.add('contacts-items');
  const items = ['address', 'phone', 'email'];
  // enumerating items
  items.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('contact');
    const faws = document.createElement('i');
    faws.classList.add('fas');
    if (el === 'address') {
      faws.classList.add('fa-map-marker-alt');
      const address = document.createElement('address');
      address.textContent = 'Jurgen Kloop Way, Estate Osogbo';
      li.append(faws, address);
    }
    if (el === 'phone') {
      faws.classList.add('fa-mobile');
      const phone = document.createElement('object');
      phone.textContent = '+234-8031170480';
      li.append(faws, phone);
    }
    if (el === 'email') {
      faws.classList.add('fa-envelope');
      const email = document.createElement('object');
      email.textContent = 'didymus7007@gmail.com';
      li.append(faws, email);
    }
    contactsItem.appendChild(li);
  });
  // for social container
  const socialCon = document.createElement('div');
  socialCon.classList.add('socials');
  const socials = ['facebook', 'instagram', 'twitter'];
  socials.forEach(el => {
    const fa = document.createElement('i');
    if (el === 'facebook') {
      fa.classList.add('fab', 'fa-facebook-f');
      socialCon.append(fa);
    }
    if (el === 'instagram') {
      fa.classList.add('fab', 'fa-instagram');
      socialCon.append(fa);
    }
    if (el === 'twitter') {
      fa.classList.add('fab', 'fa-twitter');
      socialCon.append(fa);
    }
  });
  contacts.appendChild(contactsItem);
  footerContents.append(nav().logoContainer, contacts, socialCon);
  footerCon.appendChild(footerContents);
  return footerCon;
};

export default footer;