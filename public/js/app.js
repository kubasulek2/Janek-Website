$(()=>{const e={leftIndex:0,rightIndex:1};let t=window.matchMedia("screen and (max-width: 1023px)"),n=window.matchMedia("screen and (max-width: 1199px) and (orientation: portrait)");const h=()=>{let e=$(".table"),t=$(window).height(),n=$(".row"),h=n.outerHeight(),s=Math.floor(t/h);(s=s>21?21:s)>13?(e.prev().removeClass().addClass("content-wrapper").addClass(`rows${(s-1).toString()}`),n.each(function(e){e<=s-2?$(this).removeClass("hidden"):$(this).addClass("hidden")})):(e.prev().removeClass().addClass("content-wrapper").addClass("rows13"),n.each(function(e){e<=12?$(this).removeClass("hidden"):$(this).addClass("hidden")}))};let s=-1,i=0;const d=e=>{let t=Math.floor(Math.random()*e.length);t===s||1===t?d(e):(i%3&&0!==i||(0===s?(s=1,e.each(function(e,t){1===e?$(t).fadeIn(1e3):$(t).css("display","none")})):(s=t,e.each(function(e,n){e===t?$(n).fadeIn(1e3):$(n).css("display","none")}))),i++)},o=(t,n,h)=>{let s=t;$(".nav-left > .next").on("click",function(){d(h),s===t&&$(this).prev().show(),$(n[s]).hide(),s+=2,e.leftIndex=s,$(n[s]).show(),n.length%2||s!==n.length-2?n.length%2&&s===n.length-1&&$(this).hide():$(this).hide()}),$(".nav-left > .prev").on("click",function(){d(h),n.length%2||s!==n.length-2?n.length%2&&s===n.length-1&&$(this).next().show():$(this).next().show(),$(n[s]).hide(),s-=2,e.leftIndex=s,$(n[s]).show(),s===t&&$(this).hide()})},a=(t,n,h)=>{let s=t;$(".nav-right > .next").on("click",function(){d(h),s===t&&$(this).prev().show(),$(n[s]).hide(),s+=2,e.rightIndex=s,$(n[s]).show(),n.length%2||s!==n.length-1?n.length%2&&s===n.length-2&&$(this).hide():$(this).hide()}),$(".nav-right > .prev").on("click",function(){d(h),n.length%2||s!==n.length-1?n.length%2&&s===n.length-2&&$(this).next().show():$(this).next().show(),$(n[s]).hide(),s-=2,e.rightIndex=s,$(n[s]).show(),s===t&&$(this).hide()})};(()=>{const h=$(".image"),s=$(".theme img");d(s),o(0,h,s),a(1,h,s),t.matches||n.matches||($(h[0]).show(),$(h[1]).show()),t.addListener(function(t){t.matches?$(h).show():($(h).hide(),$(h[e.leftIndex]).show(),$(h[e.rightIndex]).show())}),n.addListener(function(t){t.matches?$(h).show():($(h).hide(),$(h[e.leftIndex]).show(),$(h[e.rightIndex]).show())})})(),h(),$(window).on("resize",h)});
//# sourceMappingURL=app.js.map
