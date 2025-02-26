/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */
$(document).ready(function() {

// color Vedio
if ($("button.video-toggle-button").length > 0) {
    $("button.video-toggle-button").on("click", function(){
        $(this).parents(".col-md-4.cstm-installation-video").find(".youtube-video-section").show();
        $(this).parents(".col-md-4.cstm-installation-video").find(".overlay-video-yt").hide();
        $(this).parents(".col-md-4.cstm-installation-video").find(".youtube-video-section video").get(0).play();
    });
}

// Product Video & Text
if ($("button.ov-btn").length > 0) {
    $("button.ov-btn").on("click", function(){
        $(this).parents('.video-section-in-rght').find(".overlay-banner-v").hide();
        $(this).parents('.video-section-in-rght').find(".video-container-v-t").show();
        $(this).parents('.video-section-in-rght').find('.video-container-v-t video').get(0).play();
    });
}
// Product Video & Text
$(document).on("click",'.v-t-items button.ov-button', function() {
    var $parent = $(this).parents('.v-t-item');
    $parent.find('.v-t-img .overlay-banner-v').hide();
    $parent.find('.v-t-img .video-container-v-t').show();
    $parent.find('.v-t-img .video-container-v-t video').get(0).play();
});

$(".installation-section .col-md-4.cstm-installation-video").wrapAll("<div class='video-installation'/>");

});



const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

if(circlePlayButton != null){
circlePlayButton.addEventListener("click", togglePlay);
}
if(video != null){
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});
}
  