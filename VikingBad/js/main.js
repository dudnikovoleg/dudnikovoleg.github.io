$(document).ready(function(){

    var btn          = $('.play-btn'),
        overlay      = $('.overlay'),
        videoFrame   = $('.video-frame'),
        closeBtn     = $('.close',videoFrame),
        videoWrapper = $('.videoWrapper',videoFrame);

    btn.on('click',function(e){

    e.preventDefault();
        videoFrame.add(overlay).addClass('active');
        videoWrapper.append('<iframe frameborder="0" src="'+ $(this).attr('href') +'"/>')

    });

    closeBtn.on('click',function(e){
        videoFrame.add(overlay).removeClass('active');
        videoWrapper.find('iframe').remove();
    });


})