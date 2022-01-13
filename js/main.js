$(function () {
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


  /* 코드 끝 하루 끝 */
})