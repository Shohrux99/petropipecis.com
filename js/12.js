!function(e){function t(){e(".cwp-close-btn").trigger("click"),e("#cwp-menu-icon-btn-text").focus()}e(document).on("focus","#cwp-header-wrap .cwp-primary-menu-wrapper a",function(t){e(this).parentsUntil(".cwp-primary-menu","li").addClass("cwp-open-submenu")}),e(document).on("blur","#cwp-header-wrap .cwp-primary-menu-wrapper a",function(t){e(".cwp-primary-menu li").removeClass("cwp-open-submenu")}),e(document).on("focus",".cwp-header-menu-sidebar .cwp-primary-menu-wrapper a",function(t){e(this).next(".sub-menu").addClass("open"),e(this).parentsUntil(".cwp-primary-menu","li .sub-menu").addClass("open")}),e(document).on("blur",".cwp-header-menu-sidebar .cwp-primary-menu-wrapper a",function(t){e(".cwp-header-menu-sidebar .cwp-primary-menu li .sub-menu").removeClass("open")}),e(document).on("focus",".cwp-hms-last-focus",function(e){e.preventDefault(),t()}),e(document).on("keydown",".cwp-close-btn",function(e){let s=!1;13===e.which?s=!0:9===e.which&&!0===e.shiftKey&&(s=!0),s&&(e.preventDefault(),t())}),e(document).on("keydown","#cwp-menu-icon-btn-text",function(t){13===t.which&&(t.preventDefault(),e("body").addClass("cwp-show-menu-sidebar"),t.stopPropagation(),e(".cwp-close-btn").focus())}),e(document).on("keydown","#cwp-dropdown-search-form-wrapper",function(t){let s=document.getElementById("cwp-dropdown-search-form-wrapper");9===(t.keyCode||t.which)&&s.addEventListener("focusout",t=>{!s.contains(t.relatedTarget)&&e(".cwp-search-dropdown").removeClass("is-active-dropdown")})})}(jQuery),/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())},!1),jQuery(document).ready(function(e){let t,s=e(window),o=e("body"),c=e(document),n=e(".cwp-banner"),a=e(".cwp-offcanvas-sidebar"),i=e(".cwp-header-menu-sidebar"),l=e(".cwp-search-overlay-wrapper"),r=e(".cwp-offcanvas-body-wrapper"),p=e(".cwp-menu-wrapper"),d=e("#register"),w=e("#login"),u=e(".cwp-footer-wrapper"),h=u.innerHeight(),f=e(".cwp-dynamic-header"),m=f.innerHeight(),g=e(".cwp-body-main-wrap"),v=a.data("submenu-icon"),b=e(".cwp-scroll-to-top");function C(){if(o.hasClass("cwp-sticky-footer")){let o=e(".cwp-dynamic-footer");if(s.width()>768){let s=o.innerHeight(),c=e(".cwp-sticky-footer-wrapper").innerHeight();t=s-c,o.css("bottom",-t)}else o.css("bottom","")}}function y(){let t=.5*s.height();if(o.hasClass("cwp-parallax-footer"))if(s.width()>992){let s=e(".cwp-dynamic-footer").innerHeight();if(g.css("margin-bottom",s),s>t){let s=e(".cwp-scrollbar-inner");g.css("margin-bottom",t),s.css("max-height",t),s.scrollbar()}}else{let e=g.attr("style");void 0!==e&&!1!==e&&g.removeAttr("style")}}function k(){if(s.width()<992)for(let t=1;t<=12;t++)e(".cwp-body-main-wrap .cwp-grid-column.grid-"+t+", .cwp-dynamic-footer .cwp-grid-column.grid-"+t).removeClass("grid-"+t).addClass("grid-md-"+t)}function x(){s.scrollTop()>250?(e(".cosmoswp-sticky").addClass("add-sticky"),e(".scrollup").show(),b.show()):(e(".cosmoswp-sticky").removeClass("add-sticky"),e(".scrollup").hide(),b.hide())}void 0!==e.fn.theiaStickySidebar&&o.hasClass("add-sticky-sidebar")&&e(".cwp-ms-content-grid-column").theiaStickySidebar(),a.find("li").each(function(){let t=e(this);t.children("ul.sub-menu").length&&t.children("a").prepend('<i class="submenu-icon '+v+'"></i>')}),a.find(".widget_nav_menu").each(function(){e(this).addClass("navigation cwp-submenu-onclick")}),c.on("click",".submenu-icon",function(t){t.preventDefault(),e(this).parent("a").siblings(".sub-menu").toggleClass("open")}),c.on("click",".cwp-popup-btn",function(t){t.preventDefault(),e("#cwp-popupModal").show(),o.addClass("open-popup")}),c.on("click","#cwp-popupModal .cwp-close",function(t){t.preventDefault(),e("#cwp-popupModal").hide(),o.removeClass("open-popup")}),e(".cwp-sticky-footer-btn").on("click",function(c){if(c.preventDefault(),!o.hasClass("cwp-sticky-footer"))return;if(s.width()<=768)return;let n=e(".cwp-dynamic-footer");n.toggleClass("open-footer"),h>=s.height()/2&&(u.addClass("scroll-footer"),u.css("max-height",s.height()/2),t=s.height()/2,n.css("bottom",-t),e(".cwp-scrollbar-inner").scrollbar())}),y(),k(),x(),b.click(function(t){e("body,html").animate({scrollTop:0},500),t.preventDefault()}),function(){let e=40;o.hasClass("gutentor-active")&&(e=0),o.hasClass("cwp-overlay-fixed")&&!o.hasClass("home")?n.length&&f.hasClass("cwp-header-sticky")?g.css("padding-top",""):n.length?g.css("padding-top",""):g.css("padding-top",m+e):o.hasClass("cwp-overlay-transparent")&&!o.hasClass("home")&&(n.length?g.css("padding-top",""):g.css("padding-top",m+e))}(),function(){if(o.hasClass("cwp-masonry-blog")){let t=e(".cwp-dynamic-blog-content");t.hide();let s=e(".cwp-blog-grid-row");s.imagesLoaded(function(){t.fadeIn("slow"),s.masonry({itemSelector:".cwp-blog-grid"})}),t.show(),e(window).resize(function(){s.masonry("bindResize")})}}();let D=e("#cwp-header-wrap"),T=e("#cwp-main-wrap"),I=T.data("scrolltype"),_=T.data("height-trigger-sticky"),j=T.data("sticky-color");function E(t){let s=e(t).offset().top;void 0===I&&null===I||(s=e(t).offset().top-D.height()),e("html, body").animate({scrollTop:s},800)}let S=window.location.hash;function z(t,s,o){t.find("."+s).each(function(){e(this).addClass(o)})}""!==S&&document.getElementById(S.substring(1,S.length))&&E(S),s.on("load",function(t){e("a").on("click",function(e){""!==(S=this.hash)&&document.getElementById(S.substring(1,S.length))&&(E(S),e.preventDefault())}),C(),y(),c.on("click","#search-icon",function(t){t.preventDefault(),e(".cwp-search-dropdown").toggleClass("is-active-dropdown")}),c.on("click","#search-fullscreen-icon",function(t){t.preventDefault(),e(".cwp-search-fullscreen-wrapper").addClass("cwp-show-search")}),c.on("click","#search-overlay-icon",function(e){e.preventDefault(),l.addClass("cwp-show-search"),l.closest(".grid-container").addClass("hide-elements")}),c.on("click",".cwp-close-btn",function(t){t.preventDefault(),e(".cwp-search-fullscreen-wrapper").removeClass("cwp-show-search"),l.removeClass("cwp-show-search"),l.closest(".grid-container").removeClass("hide-elements"),o.removeClass("cwp-show-menu-sidebar"),o.removeClass("cwp-show-offcanvas-sidebar"),o.removeClass("cwp-show-menu-slide")}),e(".login").on("click",".login-icon-text",function(t){t.preventDefault(),e(".form-wrapper").toggleClass("show-form")}),d.hide(),e("#register-form").on("click",function(e){e.preventDefault(),w.hide(),$register.show()}),e("#login-form").on("click",function(e){e.preventDefault(),w.show(),d.hide()}),c.on("click",".cwp-toggle-dropdown-btn",function(t){t.preventDefault();let s=e(this);e(".cwp-header-menu-toggle-dropdown").animate({height:"toggle"},500);let o=s.data("clicks");o?(s.find(".cwp-open-icon").show(),s.find(".cwp-close-icon").hide()):(s.find(".cwp-open-icon").hide(),s.find(".cwp-close-icon").show()),s.data("clicks",!o)}),i.hasClass("cwp-left-menu-push")&&p.addClass("cwp-left-push"),i.hasClass("cwp-right-menu-push")&&p.addClass("cwp-right-push"),c.on("click","#cwp-menu-icon-btn-text",function(e){e.preventDefault(),o.addClass("cwp-show-menu-sidebar"),e.stopPropagation()}),a.hasClass("cwp-offcanvas-left")&&r.addClass("cwp-offcanvas-left-push"),a.hasClass("cwp-offcanvas-right")&&r.addClass("cwp-offcanvas-right-push"),c.on("click",".cwp-offcanvas-btn",function(e){e.preventDefault(),o.addClass("cwp-show-offcanvas-sidebar")});let n=0,u=!1,h=!0,f=0;s.scroll(function(){let t=e(this).scrollTop();void 0===I&&null===I||(n>t?(u=!0,h=!1):(h=!0,u=!1,f=t),u&&Math.abs(f-_)>t&&("cwp-scroll-up-sticky"===I&&(D.addClass("cwp-scroll-up-sticky"),"enable"===j&&D.addClass("sticky-color")),0===t&&("cwp-scroll-up-sticky"===I?D.removeClass("cwp-scroll-up-sticky"):"cwp-scroll-down-sticky"===I&&D.removeClass("cwp-scroll-down-sticky"),D.removeClass("sticky-color"))),h&&t>_&&"cwp-scroll-down-sticky"===I&&(D.addClass("cwp-scroll-down-sticky"),"enable"===j&&D.addClass("sticky-color")),n=t),t>=100?"normal"===I&&"enable"===j&&D.addClass("sticky-color"):D.removeClass("sticky-color"),function(){let t=s.scrollTop();o.hasClass("admin-bar")&&s.width()<768&&(t>0?e(".cwp-header-sticky").css("top","0"):e(".cwp-header-sticky").css("top",""))}()});let m=e(".cwp-sidebar"),g=m.data("widget-title"),v=m.data("widget-content");z(m,"widget-title",g),z(m,"widget",v);let b=e(".cwp-footer-sidebar"),k=e(".cwp-top-footer"),x=k.data("widget-title"),T=k.data("widget-content");z(k,"widget-title",x),z(k,"widget",T);let B=e(".cwp-main-footer"),H=B.data("widget-title"),M=B.data("widget-content");z(B,"widget-title",H),z(B,"widget",M);let $=e(".cwp-bottom-footer"),L=$.data("widget-title"),A=$.data("widget-content");z($,"widget-title",L),z($,"widget",A),b.each(function(){let t=e(this);(t.hasClass("cwp-text-left")||t.hasClass("cwp-text-right")||t.hasClass("cwp-text-center"))&&(t.find(".widget").removeClass("cwp-text-left cwp-text-right cwp-text-center"),t.find(".widget-title").removeClass("cwp-text-left cwp-text-right cwp-text-center"))})}),s.resize(function(){y(),C(),k()}),s.on("scroll",function(e){setTimeout(function(){x()},300)}),o.on("click",".navbar-toggle",function(t){t.preventDefault(),e(".main-navigation").slideToggle()}),void 0!==e.fn.webTicker&&e("#webTicker").show().webTicker({startEmpty:!1,hoverpause:!0,direction:"left",transition:"linear"});let B=parseInt(cosmoswp.paged)+1,H=parseInt(cosmoswp.max_num_pages),M=cosmoswp.next_posts;if(c.on("click",".cwp-ajax-show-more",function(t){t.preventDefault();let s=e(this),o=s.attr("data-click"),c=parseInt(s.attr("data-number"));return B-1>=H&&s.html(cosmoswp.no_more_posts),!(0===o||B-1>=H)&&(s.html("<img src="+cosmoswp.loadMoreGif+" alt=â€animatedâ€ />"),s.attr("data-click",0),e("#cwp-ajax-temp-post").load(M+" .cwp-article-ajax",function(){B++,M=M.replace(/(\/?)page(\/|d=)[0-9]+/,"$1page$2"+B);let t=e("#cwp-ajax-temp-post"),o=t.html();t.html("");let n=e(o).filter(".cwp-article-ajax");e(".cwp-blog-grid-row").append(n),s.attr("data-number",c+1),s.attr("data-click",1),s.html(cosmoswp.show_more)}),!1)}),"auto-ajax"===cosmoswp.pagination_option){let t=e("body #cwp-main");s.scroll(function(){let o=t.offset();s.scrollTop()+s.height()>t.scrollTop()+t.height()+o.top&&e(".cwp-ajax-show-more").trigger("click")})}!function(){let t=e(".cwp-woo-view-switcher"),s=e(".cosmoswp-woo-archive-grid-row");t.on("click",".cwp-trigger-grid",function(){s.addClass("cwp-grid"),s.removeClass("cwp-list"),e(this).siblings().removeClass("active"),e(this).addClass("active")}),t.on("click",".cwp-trigger-list",function(){s.addClass("cwp-list"),s.removeClass("cwp-grid"),e(this).siblings().removeClass("active"),e(this).addClass("active")})}(),function(){let t=e(".cwp-edd-view-switcher"),s=e(".cosmoswp-edd-grid-row");s.hasClass("cwp-grid")&&e(".cwp-trigger-grid").addClass("active"),t.on("click load",".cwp-trigger-grid",function(t){t.preventDefault(),s.addClass("cwp-grid"),s.removeClass("cwp-list"),e(this).siblings().removeClass("active"),e(this).addClass("active")}),t.on("click",".cwp-trigger-list",function(t){t.preventDefault(),s.addClass("cwp-list"),s.removeClass("cwp-grid"),e(this).siblings().removeClass("active"),e(this).addClass("active")})}(),c.on("change","#cosmoswp-edd-select-filter",function(t){t.preventDefault();let s="?sortby="+e("#cosmoswp-edd-select-filter").val();s=encodeURI(s),window.history.pushState(null,null,s),location.reload()}),c.on("click",".cwc-archive-psp-sm-toggle",function(t){t.preventDefault(),e(o).toggleClass("cwc-archive-psp-responsive-popup")}),s.resize(function(){s.width()>767&&e(o).removeClass("cwc-archive-psp-responsive-popup")})});
//# sourceMappingURL=cosmoswp.min.js.map