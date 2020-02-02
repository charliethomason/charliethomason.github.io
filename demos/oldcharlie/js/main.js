var charlie=charlie||{};charlie.init=function(){function hamburger(){var burger=document.getElementById("hamburger"),menu=document.querySelector("#main-nav ul");burger.addEventListener("click",function(e){e.preventDefault(),"true"===menu.getAttribute("data-show")?menu.setAttribute("data-show","false"):menu.setAttribute("data-show","true")})}function basics(){hamburger()}function gridLightbox(){function createLightbox(el,img){var imgUrl=img.getAttribute("data-img"),imgAlt=img.getAttribute("alt");el.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),lightboxImg.setAttribute("src",imgUrl),lightboxImg.setAttribute("alt",imgAlt),lightbox.style.display=""})}function closeLightbox(){lightboxImg.setAttribute("src","javascript:void(0)"),lightboxImg.setAttribute("alt",""),lightbox.style.display="none"}var gridThumbs=document.querySelectorAll(".grid-thumb"),magnifiers=document.querySelectorAll(".magnify"),lightbox=document.getElementById("lightbox-viewer"),lightboxContent=lightbox.querySelector(".lightbox-content"),lightboxImg=lightbox.querySelector("img"),closeBtn=lightbox.querySelector(".lightbox-close");gridThumbs.forEach(function(thumb){createLightbox(thumb,thumb.querySelector("img"))}),magnifiers.forEach(function(btn){createLightbox(btn,btn.previousElementSibling)}),closeBtn.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),closeLightbox()}),lightboxContent.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),closeLightbox()}),lightboxImg.addEventListener("click",function(e){e.stopPropagation()})}function filters(){var select=document.getElementById("filters"),listEls=document.querySelectorAll(".gallery-grid li, .birds-link");if(select.addEventListener("change",function(e){e.preventDefault();var value=(select.options[select.selectedIndex],select.value);listEls.forEach(function(el){var elFilters=el.getAttribute("data-filters");"all"===value||elFilters.indexOf(value)>-1?el.style.display="":el.style.display="none"}),window.location.search&&window.location.search.substring(1).split("=")[1]!==value&&(window.location.search="?filter="+value)}),window.location.search){var searchValue=window.location.search.substring(1).split("=")[1];select.value=searchValue}var event=new Event("change");select.dispatchEvent(event)}function grid(){gridLightbox(),filters()}function albumLightbox(){function loadPrevImg(){var currImg=document.querySelector(".fixed-lightbox");toggleLightbox(currImg===firstImg?lastImg:currImg.parentNode.previousElementSibling.children[0])}function loadNextImg(){var currImg=document.querySelector(".fixed-lightbox");toggleLightbox(currImg===lastImg?firstImg:currImg.parentNode.nextElementSibling.children[0])}function toggleLightbox(target){var hasLightbox="img-inpage fixed-lightbox",noLightbox="img-inpage";allImages.forEach(function(img){(void 0!==target&&img!==target||void 0===target)&&(img.className=noLightbox)}),void 0!==target&&(target.className=target.className===hasLightbox?noLightbox:hasLightbox)}var triggerLightbox=document.querySelector(".trigger-lightbox"),allImages=document.querySelectorAll(".img-inpage"),firstImg=allImages[0],lastImg=allImages[allImages.length-1],closeLightbox=document.querySelectorAll(".img-close"),nextBtn=document.querySelectorAll(".img-next"),prevBtn=document.querySelectorAll(".img-prev");allImages.forEach(function(img){img.addEventListener("click",function(e){e.preventDefault(),toggleLightbox(img)})}),null!==triggerLightbox&&triggerLightbox.addEventListener("click",function(e){e.preventDefault(),toggleLightbox(firstImg)}),null!==closeLightbox&&closeLightbox.forEach(function(btn){btn.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),toggleLightbox()})}),null!==nextBtn&&nextBtn.forEach(function(btn){btn.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),loadNextImg()})}),null!==prevBtn&&prevBtn.forEach(function(btn){btn.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),loadPrevImg()})}),document.addEventListener("keyup",function(e){null!==document.querySelector(".fixed-lightbox")&&(27==e.keyCode&&(e.preventDefault(),e.stopPropagation(),toggleLightbox()),null===document.getElementById("page-birds")&&(37==e.keyCode&&(e.preventDefault(),e.stopPropagation(),loadPrevImg()),39==e.keyCode&&(e.preventDefault(),e.stopPropagation(),loadNextImg())))})}function album(){albumLightbox()}function singleLightbox(){var single=document.querySelector(".single-img");single.addEventListener("click",function(e){e.preventDefault(),"true"===single.getAttribute("data-lightbox")?single.setAttribute("data-lightbox","false"):single.setAttribute("data-lightbox","true")})}function single(){singleLightbox()}function init(){basics(),null!==document.getElementById("page-gallery")&&grid(),null===document.getElementById("page-album")&&null===document.getElementById("page-birds")||album(),null!==document.getElementById("page-single")&&single()}init()},charlie.isReady=function(){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?charlie.init():document.addEventListener("DOMContentLoaded",charlie.init)},charlie.isReady();