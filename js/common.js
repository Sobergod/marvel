var header = $("#header")

// 滚动换头
window.document.onscroll = function () {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 90) {
        header.addClass("header-active")
    } else {
        header.removeClass("header-active")
    }
}