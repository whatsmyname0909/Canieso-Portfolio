const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });

  document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      this.reset();
    } else {
      alert('Please fill out all the fields before submitting.');
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  toggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });

  const navLinks = navbar.querySelectorAll('a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('show');
    });
  });
});


