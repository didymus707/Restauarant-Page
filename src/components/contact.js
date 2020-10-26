const contact = () => {
  const section = document.createElement('section');
  section.classList.add('bottom-container_contact');
  section.innerHTML = `
  <div class="bottom-content">
    <h2 class="about">Talk To Us</h2>
    <div class="about-content">
      <p class="abt-content-pg">Say Hi!</p>
    </div>
    <form action="#" method="post">
      <div class="name-con">
        <input type="text" name="name" id="name" placeholder="Name">
      </div>
      <div class="email-con">
        <input type="email" name="email" id="email" placeholder="Email">
      </div>
      <div class="msg-con">
        <input type="text" name="msg" id="msg" placeholder="Message">
      </div>
      <input type="button" value="Send Message">
    </form>
  </div>
  `;
  return section;
};

export default contact;