/* ---------------------------------------------
     mobile-menu
--------------------------------------------- */
const navSlide = () => {
    const burger = document.querySelector(".mobile-menu-btn");
    const nav = document.querySelector(".main-nav-js");
    const navLinks = document.querySelectorAll(".main-nav-js .menu-list .menu-item");
    
    const menuClose = document.querySelector(".menu-close-btn");
  
    burger.addEventListener("click", () => {
      nav.classList.add("show-menu");
      
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.4s ease forwards ${
            index / 10 + 0.5
          }s `;
        }
      });
      // burger.classList.toggle("toggle");
    });

    menuClose.addEventListener("click", () => {
      nav.classList.remove("show-menu");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.4s ease forwards ${
            index / 10 + 0.5
          }s `;
        }
      });
      
      // burger.classList.toggle("toggle");
    });

    document.addEventListener("DOMContentLoaded", function () {
      const menuItems = document.querySelectorAll(".menu-item-has-children");
      const currentPage = window.location.pathname;
      let splitArray=currentPage.split("/");
      let currentValue=splitArray[splitArray.length-1]; // Get the current page URL
      menuItems.forEach((menuItem) => {
        const link = menuItem.querySelector("a");
        if (link.getAttribute("href") === currentValue) {
            console.log(currentValue);
            link.classList.add("active");
        }
      });
    });
    
      document.body.addEventListener("click", function(event) {
      let menuClass= event.target.classList.contains("main-nav");
      if(!event.target.classList.contains("main-nav") && !event.target.classList.contains("bi-list")){
       document.getElementById("menu").classList.remove("show-menu");
      }
    });

  };
  
  navSlide();

  /* ---------------------------------------------
     mobile-drop-down
--------------------------------------------- */

$(".main-nav-js .bi").on('click', function (event) {
  var $fl = $(this);
  $(this).parent().siblings().find('.sub-menu').slideUp();

  $(this).parent().siblings().find('.bi').addClass('bi-plus');
  if ($fl.hasClass('bi-plus')) {
      $fl.removeClass('bi-plus').addClass('bi-dash');
  } else {
      $fl.removeClass('bi-dash').addClass('bi-plus');
  }

  $fl.next(".sub-menu").slideToggle();
});


// FIXED SIDEBAR


// $(".fixed-sidebar .bi").on('click', function (event) {
//   var $fl = $(this);
//   $(this).parent().siblings().find('.sub-menu').slideUp();

//   $(this).parent().siblings().find('.bi').addClass('bi-plus');

//   if ($fl.hasClass('bi-plus')) {
//       $fl.removeClass('bi-plus').addClass('bi-dash');
//   } else {
//       $fl.removeClass('bi-dash').addClass('bi-plus');
//   }
//   var siblings = $(this).parent().siblings().find('.bi');
//   if( siblings.hasClass('bi-dash') ) {
//     siblings.removeClass('bi-dash');
//   }

//   $fl.next(".sub-menu").slideToggle();
// });



