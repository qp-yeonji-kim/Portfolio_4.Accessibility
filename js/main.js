$(function () {
  $(window).scroll(function () {
    let curTop = $(window).scrollTop();
    let curBottom = curTop + $(window).height();
    let curVal = $(window).scrollTop() + 300;
    let community_articleTop = $('.sc_community_article .sc_press').offset().top;
    let researchTop = $('.sc_research').offset().top;
    let securityTop = $('.sc_security').offset().top;
    let participateTop = $('.sc_participate').offset().top;

    if (curTop > 0) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }

    if (curBottom > researchTop) {
      $('.sc_community_article .sc_sns').addClass('on');
    }

    if (curTop > community_articleTop) {
      $('.research_slider_area').addClass('on');
    }

    if (curTop > researchTop + 300) {
      $('.sc_security .content_area .radiation_live, .radiation_info > *').addClass('on');
    }
    if (curVal > participateTop) {
      $('.sc_participate .participate_list > li').addClass('active');
    }

    if (curVal > researchTop && curVal < securityTop) {
      $('.option_nav_area .menu_nav a').removeClass('on');
      $('.option_nav_area .menu_nav li:nth-child(2) a').addClass('on');

    } else if (curVal > securityTop && curVal < participateTop) {
      $('.option_nav_area .menu_nav a').removeClass('on');
      $('.option_nav_area .menu_nav li:nth-child(3) a').addClass('on');

    } else if (curVal > participateTop) {
      $('.option_nav_area .menu_nav a').removeClass('on');
      $('.option_nav_area .menu_nav li:nth-child(4) a').addClass('on');

    } else {
      $('.option_nav_area .menu_nav a').removeClass('on');
      $('.option_nav_area .menu_nav li:nth-child(1) a').addClass('on');
    }
  });

  $('.header a, .header button').on('focus mouseenter', function () {
    $('.header').addClass('on');
  });
  $('.header').on('mouseleave', function () {
    $('.header').removeClass('on');
  });
  $('.header .logo a, .header .support_link').on('blur', function () {
    $('.header').removeClass('on');
  });

  $('.header .menu_btn').on('click', function(){
    $('.header .menu_area, main').addClass('on');
    $('body').addClass('hidden');
  });

  $('.header .menu_area .close_menu_btn').on('click', function(){
    $('.header .menu_area, main').removeClass('on');
    $('body').removeClass('hidden');
  });

  $('.main_vis .down_btn_wrap .down_btn').click(function () {
    let sc_community_articleTop = $('.sc_community_article').offset().top - 98;
    $('html, body').animate({
      scrollTop: sc_community_articleTop
    }, 500)
  })

  $('.option_nav_area .menu_nav a').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).data('sc')).offset().top - 98
    }, 500)
  })

  $('footer .btn_top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500)
  })

  $('.main_vis .main_vis_wrap').slick({
    autoplay: true,
    infinite: true,
    prevArrow: $('.main_vis .prev_next_control .prev_btn'),
    nextArrow: $('.main_vis .prev_next_control .next_btn'),
    dots: true,
    appendDots: $('.main_vis .control_area .dot_pagination'),
    accessibility: true,
  });

  $('.main_vis .control_area .play_pause_control .play_btn').click(function () {
    $('.main_vis .main_vis_wrap').slick('slickPlay');
    $(this).addClass('on');
    $('.main_vis .control_area .play_pause_control .pause_btn').removeClass('on');
  });

  $('.main_vis .control_area .play_pause_control .pause_btn').click(function () {
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

  $('.main_vis .notice_area .control_area .play_btn').click(function () {
    $('.main_vis .main_vis_wrap').slick('slickPlay');
    $(this).addClass('on');
    $('.main_vis .notice_area .control_area .pause_btn').removeClass('on');
  });

  $('.main_vis .notice_area .control_area .pause_btn').click(function () {
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

  $('.sc_research .research_slider_wrap').on('afterChange', function () {
    let curPage = $('.sc_research .research_slider_wrap').slick('slickCurrentSlide') + 1;
    console.log(curPage);
    $('.research_slider_area .fraction_pagination .cur').text('0' + curPage);
  });

  $('.participate_list .dept2 a').on('focus', function () {
    $(this).parents('.participate_list >li').addClass('on');
  });
  $('.participate_list .dept2 a').on('blur', function () {
    $(this).parents('.participate_list >li').removeClass('on');
  });

  $('.sc_security .safety a').on('keydown', function(e){
    if(e.keyCode === 9){
      $('html, body').animate({
        scrollTop: participateTop
      }, 500)
    }
  });

  $('footer .family_site_wrap > ul > li > a').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.dept2_wrap').toggleClass('on');
  });

  $('footer .family_site_wrap .dept2 li:last-child a').on('blur', function () {
    $(this).parents('.dept2_wrap').removeClass('on');
  });

  $('footer .family_site_wrap .dept2 li:first-child a').on('keydown', function (e) {
    if (e.shiftKey && e.keyCode === 9) {
      $(this).parents('.dept2_wrap').removeClass('on');
    }
  });

  /* end */
})