

$(document).ready(function () {
  //jquery for toggle sub menus
  $(".sub-btn-large").click(function () {
    $(this).next(".sub-menu-large").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  //jquery for expand and collapse the sidebar
  $(".menu-btn-large").click(function () {
    $(".side-bar-large").addClass("active");
    $(".menu-btn-large").css("visibility", "hidden");
  });

  $(".close-btn-large").click(function () {
    $(".side-bar-large").removeClass("active");
    $(".menu-btn-large").css("visibility", "visible");
  });
});
// menu mobile end

$(document).ready(function () {
  //jquery for toggle sub menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  //jquery for expand and collapse the sidebar
  $(".menu-btn").click(function () {
    $(".side-bar").addClass("active");
    $(".menu-btn").css("visibility", "hidden");
  });

  $(".close-btn").click(function () {
    $(".side-bar").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
  });
});
// menu mobile end


$(".testimonial_wrapp").slick({
  dots: false,
  arrow: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
});
// testimonial end


var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// slide up end
$(".slider_home").slick({
  dots: false,
  arrow: true,
  infinite: true,
  autoplay: true,
  fade: true,
  speed: 800,
  slidesToShow: 1,
});
// slider home end
$(".slider").slick({
  dots: false,
  arrow: false,
  infinite: true,
  autoplay: true,
  fade: true,
  speed: 300,
  slidesToShow: 1,
});
//  slider end
$(".sidebar_job-slider").slick({
  dots: false,
  arrow: false,
  infinite: true,
  autoplay: true,
  fade: false,
  speed: 400,
  slidesToShow: 1,
 
});
//  sidebar job slider end
$(document).ready(function () {
  window.addEventListener("scroll", function () {
    var nav = document.querySelector(".nav");
    nav.classList.toggle("sticky-bar", window.scrollY > 50);
  });
});

// NAVE scroll end
$(".map_slider").slick({
  dots: false,
  arrow: true,
  infinite: true,
  autoplay: true,

  speed: 300,
  slidesToShow: 1,
});
//  map_slider end

$(document).ready(function () {
  $(".item--social-icon").hide();
  $(".item--social-btn").click(function () {
    $(".item--social-icon").toggle();
  });
});
// team end

$(".job_slider").slick({
  dots: false,
  arrow: false,
  infinite: true,
  autoplay: true,
  fade: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// job slider end
$(".partner_logo").slick({
  dots: false,
  arrow: false,
  infinite: true,
  autoplay: true,
  fade: false,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// partner_logo slider end

// read more start
class readMore {
  constructor() {
    this.content = ".readmore__content";
    this.buttonToggle = ".readmore__toggle";
  }

  bootstrap() {
    this.setNodes();
    this.init();
    this.addEventListeners();
  }

  setNodes() {
    this.nodes = {
      contentToggle: document.querySelector(this.content),
    };

    this.buttonToggle = this.nodes.contentToggle.parentElement.querySelector(
      this.buttonToggle
    );
  }

  init() {
    const { contentToggle } = this.nodes;

    this.stateContent = contentToggle.innerHTML;

    contentToggle.innerHTML = `${this.stateContent.substring(0, 1100)}...`;
  }

  addEventListeners() {
    this.buttonToggle.addEventListener("click", this.onClick.bind(this));
  }

  onClick(event) {
    const targetEvent = event.currentTarget;
    const { contentToggle } = this.nodes;

    if (targetEvent.getAttribute("aria-checked") === "true") {
      targetEvent.setAttribute("aria-checked", "false");
      contentToggle.innerHTML = this.stateContent;
      this.buttonToggle.innerHTML = "Show Less";
    } else {
      targetEvent.setAttribute("aria-checked", "true");
      contentToggle.innerHTML = `${this.stateContent.substring(0, 1100)}...`;
      this.buttonToggle.innerHTML = "Show more";
    }
  }
}

const initReadMore = new readMore();
initReadMore.bootstrap();
//about read more end

var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter-box").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-number");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 850,
          easing: "swing",
          step: function () {
            //$this.text(Math.ceil(this.countNum));
            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
          },
          complete: function () {
            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});

// counter end

$(document).ready(function () {
  $(".youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    autoplay: true,
  });
});
// youtube video end
