// $(document).ready(function(){
//     $(window).on('scroll',function(){
//         var scroll = $(window).scrollTop();
//         if(scroll > 80){
//             $('nav').css({
//                  'position':'sticky',
//                  'top':'0px'
//                 })
//         }else{
//             $('.navbar').css({
//                 'position':'absolute',
//                 'top':'47px'
//             })
//         }
//     })
// })

$(document).ready(function(){
    // video
    $(document).on('click','.play',function(){
        $('.popup').css({
            'visibility': 'visible'
        })
        var src =$(this).data('src');
        $('iframe').attr('src',src);
       
    });
    $('.fa-times').click(function(){
        $('iframe').attr('src'," ");
        $('.popup').css({'visibility':'hidden'})
    });
    // video


    // slider1
    
$('.slider1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

    // slider1

    // slider2
    $('.slider2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots:true,
        arrows:false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    // slider3
    $('.slider3').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        dots:false,
        arrows:false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    // slider3
})