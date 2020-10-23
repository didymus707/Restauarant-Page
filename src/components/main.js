
const main = () => {
  // main section
  const mainContainer = document.createElement('main');
  mainContainer.classList.add('main-container');
  const sect1 = document.createElement('section');
  sect1.classList.add('top-container');
  const topContent = document.createElement('div');
  topContent.classList.add('top-content');
  const para = document.createElement('p');
  para.classList.add('para-1');
  para.textContent = 'Welcome To';
  const topHd = document.createElement('h1');
  topHd.classList.add('top-head', 'logo-item');
  const topSpan = document.createElement('span');
  topSpan.classList.add('pri');
  topSpan.textContent = 'Naija\'s';
  topHd.append(topSpan, 'Delicacies');
  const menuBtn = document.createElement('button');
  menuBtn.classList.add('menu-btn');
  menuBtn.textContent = 'Choose your Favorite Delicacy';
  topContent.append(para, topHd, menuBtn);
  sect1.appendChild(topContent);

  // section 2
  const sect2 = document.createElement('section');
  sect2.classList.add('bottom-container');
  const bottomContent = document.createElement('div');
  bottomContent.classList.add('bottom-content');
  const about = document.createElement('h2');
  about.classList.add('about');
  about.textContent = 'About';
  const aboutContent = document.createElement('div');
  aboutContent.classList.add('about-content');
  const abtConPg = document.createElement('p');
  abtConPg.classList.add('abt-content-pg');
  abtConPg.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sit earum. Quae voluptate voluptas distinctio eos dolores, illum placeat perferendis ex aperiam laudantium repellat, autem obcaecati sequi harum omnis et?
  Exercitationem recusandae totam aspernatur, possimus illo assumenda libero, asperiores, beatae ullam aliquid nisi minima similique ipsum magnam aut odit vitae dicta et porro inventore animi autem cum molestiae. Quae, iste.
  Nihil officiis itaque veniam blanditiis odio dolorem maxime iusto. Nam, voluptatem quaerat itaque ea suscipit expedita fugiat eos nisi doloribus vero animi, voluptas veritatis porro hic delectus quod est debitis.
  Sit necessitatibus adipisci, iusto sint quia sequi. Cupiditate suscipit voluptatum ratione harum provident, labore sapiente vero quo quasi exercitationem laudantium iure distinctio officia tempore architecto. Culpa nihil nesciunt ratione odio.
  Vero minus repudiandae minima, nobis quidem suscipit nihil in fuga provident! Eum debitis non culpa, quos quod libero cupiditate fugit iure sequi! Quis commodi accusamus quae nulla ut tenetur voluptatibus!`;
  aboutContent.appendChild(abtConPg);
  bottomContent.append(about, aboutContent);
  sect2.appendChild(bottomContent);
  mainContainer.append(sect1, sect2);

  return mainContainer;
};

export default main;
