$(()=>{const e={leftIndex:0,rightIndex:1};let t=window.matchMedia("screen and (max-width: 1023px)"),n=window.matchMedia("screen and (max-width: 1199px) and (orientation: portrait)");const i=()=>{let e=$(".table"),t=$(window).height(),n=$(".row"),i=n.outerHeight(),s=Math.floor(t/i);(s=s>21?21:s)>13?(e.prev().removeClass().addClass("content-wrapper").addClass(`rows${(s-1).toString()}`),n.each(function(e){e<=s-2?$(this).removeClass("hidden"):$(this).addClass("hidden")})):(e.prev().removeClass().addClass("content-wrapper").addClass("rows13"),n.each(function(e){e<=12?$(this).removeClass("hidden"):$(this).addClass("hidden")}))},s=e=>{const t=$(".image:visible").filter((e,t)=>void 0!==t.dataset.theme).first().data("theme");e.each((e,n)=>{n.dataset.theme===t?$(n).fadeIn(400):$(n).fadeOut(400)})},d=(t,n,i)=>{let d=t;$(".nav-left > .next").on("click",function(){d===t&&$(this).prev().show(),"VIDEO"===$(n[d]).children()[0].tagName&&$(n[d]).children()[0].pause(),$(n[d]).hide(),d+=2,e.leftIndex=d,$(n[d]).show(),"VIDEO"===$(n[d]).children()[0].tagName&&$(n[d]).children()[0].play(),n.length%2||d!==n.length-2?n.length%2&&d===n.length-1&&$(this).hide():$(this).hide(),s(i)}),$(".nav-left > .prev").on("click",function(){n.length%2||d!==n.length-2?n.length%2&&d===n.length-1&&$(this).next().show():$(this).next().show(),"VIDEO"===$(n[d]).children()[0].tagName&&$(n[d]).children()[0].pause(),$(n[d]).hide(),d-=2,e.leftIndex=d,$(n[d]).show(),"VIDEO"===$(n[d]).children()[0].tagName&&$(n[d]).children()[0].play(),d===t&&$(this).hide(),s(i)})},a=(t,n,i)=>{let d=t;$(".nav-right > .next").on("click",function(){d===t&&$(this).prev().show(),"VIDEO"===$(n[d]).children()[0].tagName&&$(n[d]).children()[0].pause(),$(n[d]).hide(),d+=2,e.rightIndex=d,$(n[d]).show(),"VIDEO"===$(n[d]).children()[0].tagName&&$(n[d]).children()[0].play(),n.length%2||d!==n.length-1?n.length%2&&d===n.length-2&&$(this).hide():$(this).hide(),s(i)}),$(".nav-right > .prev").on("click",function(){n.length%2||d!==n.length-1?n.length%2&&d===n.length-2&&$(this).next().show():$(this).next().show(),"VIDEO"===$(n[d]).children()[0].tagName&&$(n[d]).children()[0].pause(),$(n[d]).hide(),d-=2,e.rightIndex=d,$(n[d]).show(),"VIDEO"===$(n[d]).children()[0].tagName&&$(n[d]).children()[0].play(),d===t&&$(this).hide(),s(i)})},h=function(){const e=$(".content-wrapper figure:not(.theme)"),t=e.filter(":visible"),n=t.filter(".even").children()[0],i=t.filter(".odd").children()[0];$(t.filter(".even")).find(".poster").css("display","none"),$(t.filter(".odd")).find(".poster").css("display","flex"),"VIDEO"===n.tagName&&n.paused&&n.play(),"VIDEO"===i.tagName&&!i.paused&&i.pause(),$(window).off("mousemove scroll").on("mousemove",function(t){t=t||window.event;const n=e.filter(":visible"),i=n.filter(".even").children()[0],s=n.filter(".odd").children()[0];t.clientY<document.documentElement.clientHeight/2?($(n.filter(".even")).find(".poster").css("display","none"),$(n.filter(".odd")).find(".poster").css("display","flex"),"VIDEO"===i.tagName&&i.paused&&i.play(),"VIDEO"===s.tagName&&!s.paused&&s.pause()):($(n.filter(".odd")).find(".poster").css("display","none"),$(n.filter(".even")).find(".poster").css("display","flex"),"VIDEO"===s.tagName&&s.paused&&s.play(),"VIDEO"===i.tagName&&!i.paused&&i.pause())})},o=function(){$(".content-wrapper figure:not(.theme,.photos)").find("video")[0].play(),$(window).off("mousemove scroll").on("scroll",function(){const e=$(".content-wrapper figure:not(.theme,.photos)"),t=[...e].filter(e=>e.getBoundingClientRect().top>0).reduce((e,t)=>e.getBoundingClientRect().top<t.getBoundingClientRect().top?e:t);e.each((e,n)=>{const i=n.querySelector("video");n===t?i.paused&&4===i.readyState&&i.play():!i.paused&&i.pause()})})};(()=>{if($("body").hasClass("multimedia")){const i=$(".image"),l=$(".theme img");let r=1;d(0,i,l),a(r,i,l),t.matches||n.matches?o():($(i[0]).show(),$(i[1]).show(),h()),t.addListener(function(t){t.matches?($(i).show(),$(".poster").hide(),o()):($(i).hide(),$(i[e.leftIndex]).show(),$(i[e.rightIndex]).show(),h())}),n.addListener(function(t){t.matches?($(i).show(),$(".poster").hide(),o()):($(i).hide(),$(i[e.leftIndex]).show(),$(i[e.rightIndex]).show(),h())}),s(l)}})(),i(),$(window).on("resize",i)});
//# sourceMappingURL=app.js.map
