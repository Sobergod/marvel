$(document).ready(function () {
    var body = $("body")
    body.css("overflow", "hidden")
    var docHeight = document.documentElement.clientHeight,
        docWidth = document.body.scrollWidth,
        videoItem = document.getElementById("myVideo"),// 使用原生方法才能控制视频播放
        playBtn = $("#playBtn"),
        playBtnItem = $(".pbtn");
    // 初始化videojs
    var player = videojs('myVideo', {
        muted: false,
        controls: false,
        height: docHeight,
        width: docWidth,
        loop: false,
        controls: false,
        autoplay: false,
    });
    // 播放完隐藏
    videoItem.addEventListener("ended", function () {
        videoFinish();
    })
    // 播放按钮
    playBtn.on("click", function () {
        if (videoItem.paused) {
            playBtnItem.addClass("pbtn-active");
            videoItem.play();
        } else {
            playBtnItem.removeClass("pbtn-active");
            videoItem.pause();
        }

    })
    // // 测试用, 完成后删除
    // setTimeout(() => {
    //     videoFinish()
    // }, 500);
    // 播放完成执行
    function videoFinish() {
        body.css("overflow", "auto")
        window.location.href = "../marvel/index.html";
    }
})
