var autoSwap = setInterval( swap,4500);

//pause slideshow and reinstantiate on mouseout
$('ul, span').hover(
  function () {
    clearInterval(autoSwap);
}, 
  function () {
   autoSwap = setInterval( swap,3500);
});

//global variables
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $('.carousel li.items').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('li.items').each(function(index) {
    items[index] = $(this).text();
});

//swap images function
function swap(action) {
  var direction = action;
  
  //moving carousel backwards
  if(direction == 'counter-clockwise') {
    var leftitem = $('.left-pos').attr('id') - 1;
    if(leftitem == 0) {
      leftitem = itemCount;
    }
    
    $('.right-pos').removeClass('right-pos').addClass('back-pos');
    $('.main-pos').removeClass('main-pos').addClass('right-pos');
    $('.left-pos').removeClass('left-pos').addClass('main-pos');
    $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');
    
    startItem--;
    if(startItem < 1) {
      startItem = itemCount;
    }
  }
  
  //moving carousel forward
  if(direction == 'clockwise' || direction == '' || direction == null ) {
    function pos(positionvalue) {
      if(positionvalue != 'leftposition') {
        //increment image list id
        position++;
        
        //if final result is greater than image count, reset position.
        if((startItem+position) > resetCount) {
          position = 1-startItem;
        }
      }
    
      //setting the left positioned item
      if(positionvalue == 'leftposition') {
        //left positioned image should always be one left than main positioned image.
        position = startItem - 1;
      
        //reset last image in list to left position if first image is in main position
        if(position < 1) {
          position = itemCount;
        }
      }
   
      return position;
    }  
  
   $('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
   $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
   $('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
   $('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');

    startItem++;
    position=0;
    if(startItem > itemCount) {
      startItem = 1;
    }
  }
}

//next button click function
$('#next').click(function() {
  swap('clockwise');
});

//prev button click function
$('#prev').click(function() {
  swap('counter-clockwise');
});

//if any visible items are clicked
$('li').click(function() {
  if($(this).attr('class') == 'items left-pos') {
     swap('counter-clockwise'); 
  }
  else {
    swap('clockwise'); 
  }
});

$(document).ready(function(){
    
        $("#menu").on("click","a", function (event) {
    
            //отменяем стандартную обработку нажатия по ссылке
    
            // event.preventDefault();
    
            //забираем идентификатор бока с атрибута href
    
            var id  = $(this).attr('href'),
    
            //узнаем высоту от начала страницы до блока на который ссылается якорь
    
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
    
            $('body,html').animate({scrollTop: top}, 1500);
    
        });
    
    });
    $('.carousel').carousel({
      interval: 2000
    });
    $(document).ready(function(){
      $('.slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="slick__btn slick-prev"><img src="images/prev.png" alt=""></button>',
        nextArrow: '<button class="slick__btn slick-next"><img src="images/next.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.product__item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__slider__info',
        prevArrow: '<button class="slick__btn slick-prev"><img src="images/prev.png" alt=""></button>',
        nextArrow: '<button class="slick__btn slick-next"><img src="images/next.png" alt=""></button>'
      });
      $('.product__slider__info').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.product__item',
        arrows: false
      });
      $('.slider__cake').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        waitForAnimation: false,
        autoplaySpeed: 2000,
        centerMode: true,
        asNavFor: ".sliderBig__cake",
        prevArrow: '<button class="slick__btn slick-prev"><img src="images/prev.png" alt=""></button>',
        nextArrow: '<button class="slick__btn slick-next"><img src="images/next.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      $('.sliderBig__cake').slick({
        arrows: false,
        fade: true,
        asNavFor: ".slider__cake"
      });
    });