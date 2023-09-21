(function ($) {
    "use strict"; // Start of use strict

// Preloader Start
    $(window).on('load',function () {
        $('#preloader_status').fadeOut();
        $('#preloader')
            .delay(350)
            .fadeOut('slow');
        $('body')
            .delay(350)
    });
// Preloader End

/// MAIN MENU SCRIPT START

    // Multilevel Dropdown Menu Script Start
    document.addEventListener("DOMContentLoaded", function(){

        /////// Prevent closing from click inside dropdown
        document.querySelectorAll('.dropdown-menu').forEach(function(element){
            element.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        })

        // make it as accordion for smaller screens
        if (window.innerWidth < 992) {

            // close all inner dropdowns when parent is closed
            document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
                everydropdown.addEventListener('hidden.bs.dropdown', function () {
                    // after dropdown is hidden, then find all submenus
                    this.querySelectorAll('.submenu').forEach(function(everysubmenu){
                        // hide every submenu as well
                        everysubmenu.style.display = 'none';
                    });
                })
            });

            document.querySelectorAll('.dropdown-menu a').forEach(function(element){
                element.addEventListener('click', function (e) {

                    let nextEl = this.nextElementSibling;
                    if(nextEl && nextEl.classList.contains('submenu')) {
                        // prevent opening link if link needs to open dropdown
                        e.preventDefault();
                        console.log(nextEl);
                        if(nextEl.style.display == 'block'){
                            nextEl.style.display = 'none';
                        } else {
                            nextEl.style.display = 'block';
                        }

                    }
                });
            })
        }
        // end if innerWidth

    });
    // DOMContentLoaded  end
    // Multilevel Dropdown Menu Script End

    // Dropdown 991 width fixed start
    if($(window).width() <= 991) {
        var language = $(".languageMenu");
        var flag = $(".menu-language-btn");
        var notification = $(".menu-notification-btn");
        var userBtn = $(".menu-user-btn");

        language.find("> a").addClass("dropdown-toggle").attr("data-bs-toggle", "dropdown");
        flag.find("> a").addClass("dropdown-toggle").attr("data-bs-toggle", "dropdown");
        notification.find("> a").addClass("dropdown-toggle").attr("data-bs-toggle", "dropdown");
        userBtn.find("> a").addClass("dropdown-toggle").attr("data-bs-toggle", "dropdown");
    }
    // Dropdown 991 width fixed end

    /*---------------------------------
    Brand Logo Slider
   -----------------------------------*/
  $('.brand-carousel').owlCarousel({
        items: 5,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        margin: 10,
        nav: false,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        smartSpeed: 3000,
        autoplayTimeout:3000,
        responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        991:{
            items:3
        },
        1199:{
          items:4
        },
        1200:{
          items:5
        }
      }
    })
    /*---------------------------------
    Operating Brand Logo Slider
   -----------------------------------*/
  $('.operating-brand-carousel').owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        margin: 20,
        nav: false,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        smartSpeed: 3000,
        autoplayTimeout:3000,
        responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        991:{
            items:3
        },
        1199:{
          items:4
        },
        1200:{
          items:6
        }
      }
    })

    /*---------------------------------
    Wordpress Brand Logo Slider
   -----------------------------------*/
  $('.wordpress-brand-carousel').owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        margin: 20,
        nav: false,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        smartSpeed: 3000,
        autoplayTimeout:3000,
        responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        991:{
            items:3
        },
        1199:{
          items:4
        },
        1200:{
          items:6
        }
      }
    })

    /*---------------------------------
    Customer Testimonial JS
   -----------------------------------*/
   var sync1 = $("#sync1");
   var sync2 = $("#sync2");
   var slidesPerPage = 4; //globaly define number of elements per page
   var syncedSecondary = true;
 
   sync1.owlCarousel({
     items: 1,
     nav: false,
     dots: false,
     margin: 10,
     
     animateIn: 'fadeIn',
     animateOut: 'fadeOut',
     smartSpeed: 3000,
     autoplayTimeout:3000,
     
     responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);
 
   sync2
     .on('initialized.owl.carousel', function () {
       sync2.find(".owl-item").eq(0).addClass("current");
     })
 
     .owlCarousel({
       items: slidesPerPage,
       dots: false,
       margin: 10,
       nav: true,
       navText: [
        "<span class=\"iconify\" data-icon=\"akar-icons:arrow-left\"></span>",
        "<span class=\"iconify\" data-icon=\"akar-icons:arrow-right\"></span>",
      ],
       URLhashListener: true,
       startPosition: 'URLHash',

       animateIn: 'fadeIn',
       animateOut: 'fadeOut',
       smartSpeed: 3000,
       autoplayTimeout:3000,

       slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
       responsiveRefreshRate: 100,
       responsive: {
         0: {
           items: 1,
         },
 
         600: {
           items: 1,
         },
 
         1000: {
           items: 1,
         }
       }
     }).on('changed.owl.carousel', syncPosition2);
 
   function syncPosition(el) {
     //if you set loop to false, you have to restore this next line
     var current = el.item.index;
 
     sync2
       .find(".owl-item")
       .removeClass("current")
       .eq(current)
       .addClass("current");
 
     var onscreen = sync2.find('.owl-item.active').length - 1;
     var start = sync2.find('.owl-item.active').first().index();
     var end = sync2.find('.owl-item.active').last().index();
 
     if (current > end) {
       sync2.data('owl.carousel').to(current, 100, true);
     }
 
     if (current < start) {
       sync2.data('owl.carousel').to(current - onscreen, 100, true);
     }
   }
 
   function syncPosition2(el) {
     if (syncedSecondary) {
       var number = el.item.index;
       
       sync1.data('owl.carousel').to(number, 100, true);
     }
   }
 
   sync2.on("click", ".owl-item", function (e) {
     e.preventDefault();
     var number = $(this).index();
     sync1.data('owl.carousel').to(number, 300, true);
   });

    /*---------------------------------
    Parallax Js
   -----------------------------------*/
    var $layer_2 = $(".layer-2"),
    $container = $("body"),
    container_w = $container.width(),
    container_h = $container.height();

    $(window).on("mousemove.parallax", function(event) {
      var pos_x = event.pageX,
        pos_y = event.pageY,
        left = 0,
        top = 0;

      left = container_w / 2 - pos_x;
      top = container_h / 2 - pos_y;


      TweenMax.to($layer_2, 1, {
      css: {
        transform:
            "translateX(" + left / 24 + "px) translateY(" + top / 12 + "px)"
      },
      ease: Expo.easeOut,
      overwrite: "all"
      });

    });

  /*---------------------------------
    Search Typing Effect
  -----------------------------------*/

  $(".domain-search-input-wrap").mouseover(function(){
    $(".domain-search-custom-placeholder").css("visibility", "hidden");
  });
  $(".domain-search-input-wrap").mouseout(function(e){
    if(e.target.value === "") {
      $(".domain-search-custom-placeholder").css("visibility", "visible");
    }
  });

    /*---------------------------------
    Feather Icon JS
   -----------------------------------*/
    feather.replace();

    /*---------------------------------
    venobox
   -----------------------------------*/
    new VenoBox({
     selector: '.venobox',
    });
    
    /*---------------------------------
    Geekbench score Progress-Bar
   -----------------------------------*/
   $('.progress-bar-inner').each(function() {
    var ayshaProgressInner = $(this).data('nivel');
    $(this).animate({
        width: ayshaProgressInner
    });
  });

  /*---------------------------------
    VPS Hosting Customize plan range slider
  -----------------------------------*/
  const elements = document.querySelectorAll(['.range-section range-slider']);

  elements.forEach(element => {
    element.insertAdjacentHTML('afterend', `
      <output>${element.value}</output>
    `);
  });
  
  document.addEventListener('.range-section input', e => {
    const aysha_input = e.target;
    const output = aysha_input.nextElementSibling;
    if (output) {
      output.textContent = aysha_input.value;
    }
  });

  /*---------------------------------
    Map Country View Script
  -----------------------------------*/
  // Map
  $(".data_center_location-map").find(".l_info")
  .on("mouseenter", function () {
    $(".data_center_location-map").find(".l_info").removeClass("active"),
      $(this).addClass("active");
  });

})(jQuery); // End of use strict