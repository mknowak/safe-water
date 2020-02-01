$(document).on('scroll', function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue);

    const $par1 = $('.paragraph1');
    const par1FromTop = $par1.offset().top;
    const par1Height = $par1.outerHeight();

    // console.log(par1FromTop, par1Height)
    const $par2 = $('.paragraph2');
    const par2FromTop = $par2.offset().top;
    const par2Height = $par2.outerHeight();

    const $par3 = $('.paragraph3');
    const par3FromTop = $par3.offset().top;
    const par3Height = $par3.outerHeight();

    const $advices = $('.advices');
    const adFromTop = $advices.offset().top;
    const adHeight = $advices.outerHeight();

    const $header = $('header');
    const headFromTop = $header.offset().top;
    const headHeight = $header.outerHeight();
    const $burger = $('.burger')



    if (scrollValue > par1FromTop + par1Height - windowHeight) {
        console.log('jestem wyświetlony w całości')
        $par1.addClass('active');
    }

    if (scrollValue > par2FromTop + par2Height - windowHeight) {
        console.log('jestem wyświetlony w całości')
        $par2.addClass('active');
    }

    if (scrollValue > par3FromTop + par3Height - windowHeight) {
        console.log('jestem wyświetlony w całości')
        $par3.addClass('active');
    }

    if (scrollValue > adFromTop + adHeight - windowHeight) {
        console.log('jestem wyświetlony w całości')
        $advices.addClass('active');
    }

    if (scrollValue > headFromTop + headHeight) {
        console.log('jestem wyświetlony w całości')
        $burger.addClass('dark');
    }

    if (scrollValue < headFromTop + headHeight) {
        $burger.removeClass('dark');
    }



    const $art1 = $('.art1');
    const $art2 = $('.art2');
    const $art3 = $('.art3');
    const $art4 = $('.art4');

    const art1Height = $art1.height();
    const art2Height = $art2.height();
    const art3Height = $art3.height();
    const art4Height = $art4.height();

    const art1FromTop = $art1.offset().top;
    const art2FromTop = $art2.offset().top;
    const art3FromTop = $art3.offset().top;
    const art4FromTop = $art4.offset().top;

    if (scrollValue > art1FromTop + art1Height / 2 - windowHeight) {
        $art1.addClass('active');
    }

    if (scrollValue > art2FromTop + art2Height / 2 - windowHeight) {
        $art2.addClass('active');
    }

    if (scrollValue > art3FromTop + art3Height / 2 - windowHeight) {
        $art3.addClass('active');
    }

    if (scrollValue > art4FromTop + art4Height / 2 - windowHeight) {
        $art4.addClass('active');
    }
});

const $btn = $('.burger');

$btn.on('click', function () {
    const $nav = $('nav');

    $btn.toggleClass('show');
    $nav.toggleClass('show');




});