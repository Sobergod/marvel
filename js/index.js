$(document).ready(function () {
    $(".mygallery").chromaGallery
        ({
            color: '#000',
            gridMargin: 15,
            maxColumns: 5,
            dof: true,
            screenOpacity: 0.8
        });
    new WOW().init();

})
