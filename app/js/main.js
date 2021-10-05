document.addEventListener("DOMContentLoaded", function () {

  function hrefs(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  }

  var menuLink = document.querySelectorAll('.menu__list-link[href*="#"]');
  var menuLinkContact = document.querySelectorAll('.header--contact .menu__list-link[href*="#"]');

  menuLink.forEach(menuLink => { menuLink.addEventListener('click', hrefs) });
  menuLinkContact.forEach(menuLinkContact => { menuLinkContact.removeEventListener('click', hrefs) });

  // When the user scrolls the page, execute myFunction
  window.onscroll = function () { fixedHeader() };

  // Get the header
  var header = document.querySelector('.menu');
  var headerScroll = 'menu--scroll';

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  var headerBtn = document.querySelector('.header__btn');
  var headerBtnScroll = 'header__btn--scroll';
  function fixedHeader() {
    if (window.pageYOffset >= sticky) {
      header.classList.add(headerScroll);
      headerBtn.classList.add(headerBtnScroll);
    } else {
      header.classList.remove(headerScroll);
      headerBtn.classList.remove(headerBtnScroll);
    }
  }


  var scrollX = window.innerWidth - document.body.clientWidth;
  var calc = 'width: calc(100vw - ';
  var px = 'px';
  var rightBracket = ');'
  var modalWidth = calc + scrollX + px + rightBracket;
  document.querySelectorAll('.modal').forEach(modal => { modal.setAttribute('style', modalWidth) });

  if (window.innerWidth < 1221) {
    var careerItem = document.querySelectorAll('.career__item');
    var careerInner = document.querySelector('.career__inner');

    if (careerInner) {
      careerInner.appendChild(careerItem[0]);
      careerInner.appendChild(careerItem[2]);
      careerInner.appendChild(careerItem[1]);
      careerInner.appendChild(careerItem[3]);
    }
  }

  if (window.innerWidth < 769) {
    document.querySelector('.modal').appendChild(document.querySelector('.menu'));

    var menu = document.querySelectorAll('.header__btn, .menu__list-link');

    function menuFunc() {
      document.querySelector('.header__btn').classList.toggle('header__btn--active');
      document.querySelector('.modal').classList.toggle('open');
      document.querySelector('.menu').classList.toggle('menu--active');
      document.querySelector('.header__btn-wrap').classList.toggle('header__btn-wrap--active');
    };

    menu.forEach(menu => { menu.addEventListener('click', menuFunc) });



    var header = document.querySelector('.header__btn-wrap');
    var headerScroll = 'header__btn-wrap--scroll';
    var headerBtn = document.querySelector('.header__btn');
    var headerBtnScroll = 'header__btn--scroll';
  }

});