(function ($) {
  "use strict";
    // mobile-menu

	$('.mobile-menu-btn').on("click",function(){
		$('.main-nav').addClass('show-menu');
	  });
	
	  $('.menu-close-btn').on("click",function(){
		$('.main-nav').removeClass('show-menu');
	  });
	
	  // mobile-drop-down
	
	  $(".main-nav .bi").on('click', function (event) {
		var $fl = $(this);
		$(this).parent().siblings().find('.sub-menu').slideUp();
		$(this).parent().siblings().find('.bi').addClass('bi-chevron-down');
		if ($fl.hasClass('bi-chevron-down')) {
			$fl.removeClass('bi-chevron-down').addClass('bi-chevron-up');
		} else {
			$fl.removeClass('bi-chevron-up').addClass('bi-chevron-down');
		}
		$fl.next(".sub-menu").slideToggle();
	  });
 

  // preloader
  function counter_num() {
    var count = setInterval(function () {
      var c = parseInt($(".counter").text());
      $(".counter").text((++c).toString());
      if (c === 100) {
        clearInterval(count);
        $(".counter").addClass("hide");
        $(".preloader").addClass("active");
      }
    });
  }
  counter_num();

  // sticky header
window.addEventListener('scroll',function(){
	const header = document.querySelector('header.style-1,header.style-2, header.style-3,header.style-4,header.style-5,header.style-6');
	header.classList.toggle("sticky",window.scrollY > 0);
  });

// Menu Toggle button sidebar
var toggleIcon = document.querySelectorAll('.sidebar-button')
var closeIcon = document.querySelectorAll('.cross-icon')
var searchWrap = document.querySelectorAll('.menu-toggle-btn-full-shape')

toggleIcon.forEach((element)=>{
    element.addEventListener('click', ()=>{
        document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
            el.classList.add('show-sidebar')
        })
    })
})
closeIcon.forEach((element)=>{
    element.addEventListener('click', ()=>{
        document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
            el.classList.remove('show-sidebar')
        })
    })
})

 window.onclick = function(event){
    // Menu Toggle button sidebar
    searchWrap.forEach((el)=>{
      if(event.target === el){
        el.classList.remove('show-sidebar')
      }
    })
}


var $grid = $('.grid-two').masonry({
});





  /* ---------------------------------------------
     Mobile-search-area
     --------------------------------------------- */

$('.search-btn').on("click", function(){
	$('.mobile-search').addClass('slide');
  });
  
  $('.search-cross-btn').on("click", function(){
	$('.mobile-search').removeClass('slide');
  });
  
  /* ---------------------------------------------
     Sliders
     --------------------------------------------- */
	 var swiper = new Swiper(".banner-two-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 0,
		loop: true,
		navigation: {
		nextEl: ".banner-three-next",
		prevEl: ".banner-three-prev",
	  },
	  pagination: {
		el: ".banner-two-pagination",
		clickable: 'true',

	},
	autoplay: {
	  delay: 3000, // Autoplay duration in milliseconds
	},
	  effect: 'fade',
	  fadeEffect: {
		crossFade: true,
	  },
	});

	//  banner-three-slider
	
	var swiper = new Swiper(".banner-three-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 0,
		loop: true,
		navigation: {
		nextEl: ".banner-three-next",
		prevEl: ".banner-three-prev",
	},
	pagination: {
		el: ".banner-three-pagination",
		type: "fraction",
		formatFractionCurrent: function (number) {
			if (number < 10) {
				return '0' + number;
			} else {
				return number;
			}
		},
		formatFractionTotal: function (number) {
			if (number < 10) {
				return '0' + number;
			} else {
				return number;
			}
		}
	},
	    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	});

	//  banner-six-slider
	
	var swiper = new Swiper(".banner-six-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 0,
		loop: true,
		navigation: {
		nextEl: ".banner-three-next",
		prevEl: ".banner-three-prev",
	},
	    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	});

	// Banner-Five-Slider

	var swiper = new Swiper(".banner-five-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 0,
		loop: true,
		navigation: {
		nextEl: ".banner-five-next",
		prevEl: ".banner-five-prev",
	},
	    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	});

	// achievement-slider
	var swiper = new Swiper(".achievement-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 10,
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
		  },
		breakpoints: {
			280: {
				slidesPerView: 2,
			},
			386: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 4
			},
			1400: {
				slidesPerView: 4
			},
		}
	});

	// casestudy-two-slider
	var swiper = new Swiper(".casestudy-two-sldier", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 10,
		slidesPerView: 1,
		centerSlides: true,
		loop: true,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
		  },
		navigation: {
			nextEl: ".case-two-next",
			prevEl: ".case-two-prev",
		},
		pagination: {
			el: ".case-two-pagination",
			clickable: 'true',
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2
			},
			1200: {
				slidesPerView: 3
			},
			1400: {
				slidesPerView: 3
			},
		}
	});
	// casestudy-five-slider
	var swiper = new Swiper(".casestudy-five-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 10,
		slidesPerView: 1,
		centerSlides: true,
		loop: true,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
		  },
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2
			},
			1200: {
				slidesPerView: 3
			},
			1400: {
				slidesPerView: 3
			},
		}
	});

		// casestudy-six-slider
		var swiper = new Swiper(".casestudy-six-slider", {
			slidesPerView: 1,
			speed: 1500,
			spaceBetween: 10,
			slidesPerView: 1,
			// centerSlides: true,
			mousewheel: {
				releaseOnEdges: false,
			  },
			loop: true,
			autoplay: {
				delay: 3000, // Autoplay duration in milliseconds
			  },
			breakpoints: {
				280: {
					slidesPerView: 1,
				},
				386: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 2
				},
				1200: {
					slidesPerView: 2
				},
				1400: {
					slidesPerView: 2
				},
			}
		});


     var swiper = new Swiper(".banner-one-slider-small", {
      spaceBetween: 10,
      slidesPerView: 3,
	  speed: 1500,
      freeMode: true,
      watchSlidesProgress: true,
	      autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        },
        1400: {
          slidesPerView: 3
        },
      }
      
    });
    var swiper2 = new Swiper(".banner-one-slider-big", {
      spaceBetween: 0,
      speed: 1500,
	  effect:'fade',
	  fadeEffect:{
		crossFade:true,
	  },
	      autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
      navigation: {
        nextEl: ".banner-one-next",
        prevEl: ".banner-one-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

// Casestudy-slider
var swiper = new Swiper(".recent-casestudy-slider-one", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 10,
	slidesPerView: 8,
	loop: true,
	autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
	pagination: {
		el: ".swiper-pagination",
		clickable: 'true',
	},
  navigation: {
    nextEl: ".casestudy-one-next",
    prevEl: ".casestudy-one-prev",
  },
	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		386: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2
		},
		1200: {
			slidesPerView: 2
		},
		1400: {
			slidesPerView: 2
		},
	}
});

// team-one-slider

// team-one

var swiper = new Swiper(".team-one", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 10,
	slidesPerView: 8,
	loop: true,
	    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
	pagination: {
		el: ".swiper-pagination",
		clickable: 'true',
	},
  navigation: {
    nextEl: ".casestudy-one-next",
    prevEl: ".casestudy-one-prev",
  },
	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		386: {
			slidesPerView: 1,
		},
		540: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3
		},
		1200: {
			slidesPerView: 4
		},
		1400: {
			slidesPerView: 4
		},
	}
});

// team-one

var swiper = new Swiper(".team-two-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 30,
	slidesPerView: 8,
	loop: true,
	    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
	pagination: {
		el: ".swiper-pagination",
		clickable: 'true',
	},
  navigation: {
    nextEl: ".team-two-next",
    prevEl: ".team-two-prev",
  },
	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		386: {
			slidesPerView: 1,
		},
		540: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3
		},
		1200: {
			slidesPerView: 4
		},
		1400: {
			slidesPerView: 4
		},
	}
});

// team-two

var swiper = new Swiper(".team-two-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 30,
	slidesPerView: 8,
	loop: true,
	    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
	pagination: {
		el: ".swiper-pagination",
		clickable: 'true',
	},
  navigation: {
    nextEl: ".team-two-next",
    prevEl: ".team-two-prev",
  },
	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		386: {
			slidesPerView: 1,
		},
		540: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3
		},
		1200: {
			slidesPerView: 4
		},
		1400: {
			slidesPerView: 4
		},
	}
});

// team-six

var swiper = new Swiper(".team-six-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 30,
	slidesPerView: 8,
	loop: true,
	    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
	pagination: {
		el: ".swiper-pagination",
		clickable: 'true',
	},
  navigation: {
    nextEl: ".team-six-next",
    prevEl: ".team-six-prev",
  },
	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		386: {
			slidesPerView: 1,
		},
		540: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3
		},
		1200: {
			slidesPerView: 4
		},
		1400: {
			slidesPerView: 4
		},
	}
});

// testimonail-slider

var swiper = new Swiper(".testi-image-slider", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  speed: 1500,
  freeMode: true,
  effect:'fade',
  fadeEffect:{
    crossFade:true,
  },
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".testi-content-slider", {
  loop: true,
  spaceBetween: 10,
  speed: 1500,
  navigation: {
    nextEl: ".testi-one-next",
    prevEl: ".testi-one-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// testimonail-three-slider
var swiper = new Swiper(".testi-image-slider3", {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 1,
	freeMode: true,
	speed: 1500,
	effect:'fade',
	fadeEffect:{
	  crossFade:true,
	},
	watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".testi-content-slider3", {
	loop: true,
	spaceBetween: 10,
	speed: 1500,
	navigation: {
	  nextEl: ".testi-three-next",
	  prevEl: ".testi-three-prev",
	},
	thumbs: {
	  swiper: swiper,
	},
  });

// testimonail-five-slider

var swiper = new Swiper(".testi-five-image-slider", {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 1,
	freeMode: true,
	speed: 1500,
	effect:'fade',
	fadeEffect:{
	  crossFade:true,
	},
	watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".testi-five-content-slider", {
	loop: true,
	spaceBetween: 10,
	speed: 1500,
	navigation: {
	  nextEl: ".testi-five-next",
	  prevEl: ".testi-five-prev",
	},
	thumbs: {
	  swiper: swiper,
	},
  });

//   testi-six-slider
  var swiper = new Swiper(".testi-six-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 10,
	loop: true,
  	autoplay: false,
	pagination: false,
	navigation: {
		nextEl: ".testi-six-next",
		prevEl: ".testi-six-prev",
	}
});

// about-six-slider
var swiper = new Swiper(".about-six-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 10,
	loop: true,
	    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
	  effect:'fade',
	  fadeEffect:{
		crossFade:true,
	  },
	pagination: false,
	pagination: {
		el: ".about-six-pagination",
		clickable: 'true',
	}
});

// Customer slider

var swiper = new Swiper(".customer-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 20,
	loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true
    },
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,
	pagination: {
		el: ".swiper-pagination",
		clickable: 'true',
	},
  navigation: {
    nextEl: ".casestudy-one-next",
    prevEl: ".casestudy-one-prev",
  },
	breakpoints: {
		280: {
			slidesPerView: 2,
		},
		386: {
			slidesPerView: 2,
		},
		540: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 4,
		},
		1400: {
			slidesPerView: 5,
		},
    1600: {
			slidesPerView: 6,
		},
	}
});

// swiper blog-four-slider
var swiper = new Swiper(".blog-four-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 10,
	slidesPerView: 1,
  centerSlides: true,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: true
	  },
  navigation: {
    nextEl: ".blog-three-next",
    prevEl: ".blog-three-prev",
  },
	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		386: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2
		},
		1200: {
			slidesPerView: 2
		},
		1400: {
			slidesPerView: 2.3
		},
		1600: {
			slidesPerView: 2.6
		},
	}
});

// casestudy-three-slider
var swiper = new Swiper(".casestudy-three-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 10,
	slidesPerView: 1,
  centerSlides: true,
	loop: true,
    autoplay: {
		delay: 3000,
		disableOnInteraction: true
	  },
  navigation: {
    nextEl: ".casestudy-three-next",
    prevEl: ".casestudy-three-prev",
  },
	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		386: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1.3,
		},
		992: {
			slidesPerView: 1.2
		},
		1200: {
			slidesPerView: 1.3
		},
		1400: {
			slidesPerView: 1.4
		},
		1600: {
			slidesPerView: 1.5
		},
	}
});


// service-three-slider
var swiper = new Swiper(".service-three-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 10,
	slidesPerView: 1,
  	centerSlides: true,
	loop: true,
    autoplay: {
		delay: 3000,
		disableOnInteraction: true
	  },
  navigation: {
    nextEl: ".blog-three-next",
    prevEl: ".blog-three-prev",
  },
  breakpoints: {
	280: {
		slidesPerView: 1,
	},
	386: {
		slidesPerView: 1,
	},
	540: {
		slidesPerView: 1,
	},
	769: {
		slidesPerView: 2,
	},
	992: {
		slidesPerView: 2,
	},
	1200: {
		slidesPerView: 3,
	},
	1400: {
		slidesPerView: 3,
	},
1600: {
		slidesPerView: 4,
	},
}
});

// testimonial-two
var swiper = new Swiper(".testi-two-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 10,
	slidesPerView: 1,
	centeredSlides: true,
	loop: true,
    autoplay: {
		delay: 3000,
		disableOnInteraction: true
	  },
	pagination: {
		el: ".testi-two-pagination",
		clickable: 'true',
	},
 
  navigation: false,
  breakpoints: {
	280: {
		slidesPerView: 1,
	},
	386: {
		slidesPerView: 1,
	},
	540: {
		slidesPerView: 1,
	},
	769: {
		slidesPerView: 2,
	},
	992: {
		slidesPerView: 2,
	},
	1200: {
		slidesPerView: 3,
	},
	1400: {
		slidesPerView: 3,
	},
1600: {
		slidesPerView: 3,
	},
}
});

// .testi-four-slider
var swiper = new Swiper(".testi-four-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 30,
	slidesPerView: 1,
  centerSlides: true,
	loop: true,
    // autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: true
	//   },
  pagination: {
	el: ".testi-four-pagination",
	clickable: 'true',
},
  
  breakpoints: {
	280: {
		slidesPerView: 1,
	},
	386: {
		slidesPerView: 1,
	},
	540: {
		slidesPerView: 1,
	},
	769: {
		slidesPerView: 2,
	},
	992: {
		slidesPerView: 2,
	},
	1200: {
		slidesPerView: 2,
	},
	1400: {
		slidesPerView: 2,
	},
}
});

// casestudy-four-slider
var swiper = new Swiper(".casestudy-four-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 30,
	slidesPerView: 1,
  centerSlides: true,
	loop: true,
    autoplay: {
		delay: 3000,
		disableOnInteraction: true
	  },
  pagination: {
	el: ".casestudy-four-pagination",
	clickable: 'true',
},
  
  breakpoints: {
	280: {
		slidesPerView: 1,
	},
	386: {
		slidesPerView: 1,
	},
	540: {
		slidesPerView: 1,
	},
	769: {
		slidesPerView: 1,
	},
	992: {
		slidesPerView: 2,
	},
	1200: {
		slidesPerView: 2,
	},
	1400: {
		slidesPerView: 2,
	},
}
});

// achivement-slider
var swiper = new Swiper(".achivement-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 10,
	slidesPerView: 8,
	loop: true,
    autoplay: {
		delay: 3000,
		disableOnInteraction: true
	  },
	pagination: false,
  	navigation: false,
	breakpoints: {
		280: {
			slidesPerView: 2,
		},
		386: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 4
		},
		1200: {
			slidesPerView: 3
		},
		1400: {
			slidesPerView: 4
		},
		1600: {
			slidesPerView: 5
		}
	}
});

// footer-award-slider
var swiper = new Swiper(".footer-award-slider", {
	slidesPerView: 1,
	spaceBetween: 10,
	slidesPerView: 8,
	loop: true,
	speed: 1500,
    autoplay: {
		delay: 3000,
		disableOnInteraction: true
	  },
	pagination: false,
  	navigation: false,
	breakpoints: {
		280: {
			slidesPerView: 2,
		},
		386: {
			slidesPerView: 3,
		},
		576: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 4
		},
		1200: {
			slidesPerView: 3
		},
		1400: {
			slidesPerView: 4
		},
		1600: {
			slidesPerView: 5
		}
	}
});

	// portfolio-sldier
	var swiper = new Swiper(".portfolio-sldier", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 10,
		slidesPerView: 1,
		centerSlides: true,
		loop: true,
		autoplay: true,
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2
			},
			1200: {
				slidesPerView: 2
			},
			1400: {
				slidesPerView: 2
			},
		}
	});

	
// choose-slider
var swiper = new Swiper(".choose-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 10,
	slidesPerView: 8,
	loop: true,
	speed: 1500,
    autoplay: {
		delay: 3000,
		disableOnInteraction: true
	  },
	pagination: false,
  	navigation: false,
	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		386: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2
		},
		1200: {
			slidesPerView: 2
		},
		1400: {
			slidesPerView: 2.5
		},
		1600: {
			slidesPerView: 2.7
		}
	}
});

   // insta-feed-slider
   var swiper = new Swiper(".insta-feed-slider", { 
    slidesPerView: 1,
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 7,
    loop: true,
	speed: 1500,
    autoplay: {
		delay: 3000,
		disableOnInteraction: true
	  },
    freeMode: true,
    freeModeMomentum: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    breakpoints: {
        280:{
            slidesPerView: 1,
          navigation: false,
          },
          386:{
            slidesPerView: 2,
            navigation: false,
          },
      576:{
        slidesPerView: 2,
        navigation: false,
      },
      768:{
        slidesPerView: 3,
        navigation: false,
      },
      992:{ 
        slidesPerView: 4
      },
      1200:{
        slidesPerView: 5
      },
      1400:{
        slidesPerView: 5
      },
    }
  });

  // Odometer Counter

  $(".coundown").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (
          var i = 0;
          i < document.querySelectorAll(".odometer").length;
          i++
        ) {
          var el = document.querySelectorAll(".odometer")[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });


    /* ---------------------------------------------
     Isotope 
--------------------------------------------- */

// Progress bar
var lang = {
  "html": "80%",
  "css": "88%",
  "javascript": "70%",
  "development": "90%",
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  multiply++;
});

// gsap scroll trigger
// gsap.to(".work-process-curve", {rotation: 800, duration: 330});
// gsap.to(".work-process-curve", {
// 	scrollTrigger: {
// 		trigger: ".transform-bubbles",
// 		scrub: 1,
// 		start: 'center center',
// 		end: '+=5000',
// 	},
// 	rotation: 800,
// 	duration: 1,
// 	ease: "none",
// });


  // datepicker
  jQuery('#datepicker').datepicker({
    format: 'dd-mm-yyyy',
    startDate: '+1d'
  });

//   facncy-box
  $(".popup-youtube").fancybox();


  // Magnific Popup video

  $(document).ready(function() {
	$('.video-popup').magnificPopup({
		type: 'iframe'
	  });
  });

  $grid.imagesLoaded().progress( function() {
	$grid.masonry('layout');
  });


})(jQuery);



