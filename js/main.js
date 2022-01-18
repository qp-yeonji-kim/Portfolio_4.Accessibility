$(function () {
  $(window).scroll(function(){
    let curTop = $(window).scrollTop();
    let curVal = $(window).scrollTop() + 300;
    let researchTop = $('.sc_research').offset().top;
    let securityTop = $('.sc_security').offset().top;
    let participateTop = $('.sc_participate').offset().top;

    if(curTop > 0){
      $('.header').addClass('active');
    } else{
      $('.header').removeClass('active');
    }

    if(curVal > researchTop && curVal < securityTop){
      $('.option_nav_area .menu_nav a').removeClass('on');
      $('.option_nav_area .menu_nav li:nth-child(2) a').addClass('on');

    } else if(curVal > securityTop && curVal < participateTop){
      $('.option_nav_area .menu_nav a').removeClass('on');
      $('.option_nav_area .menu_nav li:nth-child(3) a').addClass('on');

    } else if(curVal > participateTop){
      $('.option_nav_area .menu_nav a').removeClass('on');
      $('.option_nav_area .menu_nav li:nth-child(4) a').addClass('on');

    } else{
      $('.option_nav_area .menu_nav a').removeClass('on');
      $('.option_nav_area .menu_nav li:nth-child(1) a').addClass('on');
    }
  });

  $('.header a, .header button').on('focus mouseenter', function(){
    $('.header').addClass('on');
  });
  $('.header').on('mouseleave', function(){
    $('.header').removeClass('on');
  });
  $('.header .logo a, .header .support_link').on('blur', function(){
    $('.header').removeClass('on');
  });





  $('.main_vis .main_vis_wrap').slick({
    autoplay: true,
    infinite: true,
    prevArrow: $('.main_vis .prev_next_control .prev_btn'),
    nextArrow: $('.main_vis .prev_next_control .next_btn'),
    dots: true,
    appendDots: $('.main_vis .control_area .dot_pagination'),
    accessibility: true,
  });

  $('.main_vis .control_area .play_pause_control .play_btn').click(function(){
    $('.main_vis .main_vis_wrap').slick('slickPlay');
    $(this).addClass('on');
    $('.main_vis .control_area .play_pause_control .pause_btn').removeClass('on');
  });

  $('.main_vis .control_area .play_pause_control .pause_btn').click(function(){
      $('.main_vis .main_vis_wrap').slick('slickPause');
      $(this).addClass('on');
      $('.main_vis .control_area .play_pause_control .play_btn').removeClass('on');
  });

  $('.main_vis .notice_area .content_wrap').slick({
    vertical: true,
    autoplay: true,
    prevArrow: $('.main_vis .notice_area .control_area .prev_btn'),
    nextArrow: $('.main_vis .notice_area .control_area .next_btn'),
    accessibility: true,
  });

  $('.main_vis .notice_area .control_area .play_btn').click(function(){
    $('.main_vis .main_vis_wrap').slick('slickPlay');
    $(this).addClass('on');
    $('.main_vis .notice_area .control_area .pause_btn').removeClass('on');
  });

  $('.main_vis .notice_area .control_area .pause_btn').click(function(){
      $('.main_vis .main_vis_wrap').slick('slickPause');
      $(this).addClass('on');
      $('.main_vis .notice_area .control_area .play_btn').removeClass('on');
  });

  $('.sc_research .research_slider_wrap').slick({
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '284px',
    arrows: true,
    prevArrow: $('.sc_research .prev_btn'),
    nextArrow: $('.sc_research .next_btn'),
    dots: true,
    appendDots: $('.sc_research .dot_pagination'),
    accessibility: true,
  });

  $('.sc_research .research_slider_wrap').on('afterChange', function(){
    let curPage = $('.sc_research .research_slider_wrap').slick('slickCurrentSlide') + 1;
    console.log(curPage);
    $('.research_slider_area .fraction_pagination .cur').text('0' + curPage);
  });

  $('.participate_list .dept2 a').on('focus', function(){
    $(this).parents('.participate_list >li').addClass('on');
  });
  $('.participate_list .dept2 a').on('blur', function(){
    $(this).parents('.participate_list >li').removeClass('on');
  });

  /* end */
})