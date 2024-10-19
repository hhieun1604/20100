$(function () {
    setTimeout(function () {
        $('.name').animate({
            opacity:"1",
            top:"15%"
        },1000);

    },3000);
    // setTimeout(function () {
    //     $('.happy').animate({
    //         opacity:"1",
    //         top:"15%"
    //     },1000);

    // },2000);
    setTimeout(function () {
        $('.button-style1').animate({
            opacity:"1",
            top:"70%"
        },1500);
        $('.button-style2').animate({
            opacity:"1",
            top:"85%"
        },2000);
    },4000);
	// $(window).click(function(){
	// 	$('audio')[0].play();
	// });
	// window.audio=$('audio')[0].play();
})
const button = document.getElementById('growButton');
let scale = 1; // Initial scale value

button.addEventListener('click', () => {
    scale += 0.1; // Increase the scale by 0.1 with each click
    button.style.transform = `scale(${scale})`;
});
