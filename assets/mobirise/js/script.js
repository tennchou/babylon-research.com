
(function(a){a.extend(a.easing,{easeInOutCubic:function(a,b,d,k,f){return 1>(b/=f/2)?k/2*b*b*b+d:k/2*((b-=2)*b*b+2)+d}});a.fn.outerFind=function(a){return this.find(a).addBack(a)};(function(a,b){var d=function(a,b,e){var d;return function(){var c=this,g=arguments;d?clearTimeout(d):e&&a.apply(c,g);d=setTimeout(function(){e||a.apply(c,g);d=null},b||100)}};jQuery.fn[b]=function(a){return a?this.bind("resize",d(a)):this.trigger(b)}})(jQuery,"smartresize");a.isMobile=function(e){var b=[],d={blackberry:"BlackBerry",
android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};e="undefined"==a.type(e)?"*":e.toLowerCase();"*"==e?b=a.map(d,function(a){return a}):e in d&&b.push(d[e]);return!(!b.length||!navigator.userAgent.match(new RegExp(b.join("|"),"i")))};var n=function(){var e=a('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),b=e[0],d=parseInt(window.innerHeight/2,10),b=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).height,
10);e.remove();return b==d}();a(function(){function e(){a(this).css("height",9*a(this).parent().width()/16)}a("html").addClass(a.isMobile()?"mobile":"desktop");a(window).scroll(function(){a(".mbr-navbar--sticky").each(function(){var c=10<a(window).scrollTop()?"addClass":"removeClass";a(this)[c]("mbr-navbar--stuck").not(".mbr-navbar--open")[c]("mbr-navbar--short")})});a(document).on("add.cards change.cards",function(c){a(c.target).outerFind(".mbr-hamburger:not(.mbr-added)").each(function(){a(this).addClass("mbr-added").click(function(){a(this).toggleClass("mbr-hamburger--open").parents(".mbr-navbar").toggleClass("mbr-navbar--open").removeClass("mbr-navbar--short")}).parents(".mbr-navbar").find("a:not(.mbr-hamburger)").click(function(){a(".mbr-hamburger--open").click()})})});
a(window).smartresize(function(){991<a(window).width()&&a(".mbr-navbar--auto-collapse .mbr-hamburger--open").click()}).keydown(function(c){27==c.which&&a(".mbr-hamburger--open").click()});a.isMobile()&&navigator.userAgent.match(/Chrome/i)?function(c,g){var b=[c,c];b[g>c?0:1]=g;a(window).smartresize(function(){var c=a(window).height();0>a.inArray(c,b)&&(c=b[a(window).width()>c?1:0]);a(".mbr-section--full-height").css("height",c+"px")})}(a(window).width(),a(window).height()):n||(a(window).smartresize(function(){a(".mbr-section--full-height").css("height",
a(window).height()+"px")}),a(document).on("add.cards",function(c){a("html").hasClass("mbr-site-loaded")&&a(c.target).outerFind(".mbr-section--full-height").length&&a(window).resize()}));a(window).smartresize(function(){a(".mbr-section--16by9").each(e)});a(document).on("add.cards change.cards",function(c){var b=a(c.target).outerFind(".mbr-section--16by9");b.length?b.attr("data-16by9","true").each(e):a(c.target).outerFind("[data-16by9]").css("height","").removeAttr("data-16by9")});a.fn.jarallax&&!a.isMobile()&&
(a(document).on("destroy.parallax",function(c){a(c.target).outerFind(".mbr-parallax-background").jarallax("destroy").css("position","")}),a(document).on("add.cards change.cards",function(c){a(c.target).outerFind(".mbr-parallax-background").jarallax().css("position","relative")}));if(a.fn.socialLikes)a(document).on("add.cards",function(c){a(c.target).outerFind(".mbr-social-likes:not(.mbr-added)").on("counter.social-likes",function(c,b,d){999<d&&a(".social-likes__counter",c.target).html(Math.floor(d/
1E3)+"k")}).socialLikes({initHtml:!1})});var b,d,k=0,f=null,l=!a.isMobile();a(window).scroll(function(){d&&clearTimeout(d);var c=a(window).scrollTop(),b=c<=k||l;k=c;if(f){var e=c>f.breakPoint;b?e!=f.fixed&&(l?(f.fixed=e,a(f.elm).toggleClass("is-fixed")):d=setTimeout(function(){f.fixed=e;a(f.elm).toggleClass("is-fixed")},40)):(f.fixed=!1,a(f.elm).removeClass("is-fixed"))}});a(document).on("add.cards delete.cards",function(c){b&&clearTimeout(b);b=setTimeout(function(){f&&(f.fixed=!1,a(f.elm).removeClass("is-fixed"));
a(".mbr-fixed-top:first").each(function(){f={breakPoint:a(this).offset().top+3*a(this).height(),fixed:!1,elm:this};a(window).scroll()})},650)});var m=function(){var c=a(this),b=[],e=function(a){return new google.maps.LatLng(a[0],a[1])},d=a.extend({zoom:14,type:"ROADMAP",center:null,markerIcon:null,showInfo:!0},eval("("+(c.data("google-map-params")||"{}")+")"));c.find(".mbr-google-map__marker").each(function(){var c=a(this).data("coordinates");c&&b.push({coord:c.split(/\s*,\s*/),icon:a(this).data("icon")||
d.markerIcon,content:a(this).html(),template:a(this).html("{{content}}").removeAttr("data-coordinates data-icon")[0].outerHTML})}).end().html("").addClass("mbr-google-map--loaded");if(b.length){var h=this.Map=new google.maps.Map(this,{scrollwheel:!1,draggable:!a.isMobile(),zoom:d.zoom,mapTypeId:google.maps.MapTypeId[d.type],center:e(d.center||b[0].coord)});a(window).smartresize(function(){var a=h.getCenter();google.maps.event.trigger(h,"resize");h.setCenter(a)});h.Geocoder=new google.maps.Geocoder;
h.Markers=[];a.each(b,function(a,c){var b=new google.maps.Marker({map:h,position:e(c.coord),icon:c.icon,animation:google.maps.Animation.DROP}),g=b.InfoWindow=new google.maps.InfoWindow;g._setContent=g.setContent;g.setContent=function(a){return this._setContent(a?c.template.replace("{{content}}",a):"")};g.setContent(c.content);google.maps.event.addListener(b,"click",function(){g.anchor&&g.anchor.visible?g.close():g.getContent()&&g.open(h,b)});c.content&&d.showInfo&&google.maps.event.addListenerOnce(b,
"animation_changed",function(){setTimeout(function(){g.open(h,b)},350)});h.Markers.push(b)})}};a(document).on("add.cards",function(c){window.google&&google.maps&&a(c.target).outerFind(".mbr-google-map").each(function(){m.call(this)})});a(window).smartresize(function(){a(".mbr-embedded-video").each(function(){a(this).height(a(this).width()*parseInt(a(this).attr("height")||315)/parseInt(a(this).attr("width")||560))})});a(document).on("add.cards",function(c){a("html").hasClass("mbr-site-loaded")&&a(c.target).outerFind("iframe").length&&
a(window).resize()});a(document).on("add.cards",function(c){a(c.target).outerFind("[data-bg-video]").each(function(){for(var c,b=a(this).data("bg-video"),d=[/\?v=([^&]+)/,/(?:embed|\.be)\/([-a-z0-9_]+)/i,/^([-a-z0-9_]+)$/i],e=0;e<d.length;e++)if(c=d[e].exec(b)){var b="http"+("https:"==location.protocol?"s":"")+":",b=b+("//img.youtube.com/vi/"+c[1]+"/maxresdefault.jpg"),f=a('<div class="mbr-background-video-preview">').hide().css({backgroundSize:"cover",backgroundPosition:"center"});a(".container:eq(0)",
this).before(f);a("<img>").on("load",function(){if(120==(this.naturalWidth||this.width)){var a=this.src.split("/").pop();switch(a){case "maxresdefault.jpg":this.src=this.src.replace(a,"sddefault.jpg");break;case "sddefault.jpg":this.src=this.src.replace(a,"hqdefault.jpg")}}else f.css("background-image",'url("'+this.src+'")').show()}).attr("src",b);a.fn.YTPlayer&&!a.isMobile()&&(b=eval("("+(a(this).data("bg-video-params")||"{}")+")"),a(".container:eq(0)",this).before('<div class="mbr-background-video"></div>').prev().YTPlayer(a.extend({videoURL:c[1],
containment:"self",showControls:!1,mute:!0},b)));break}})});a("body > *:not(style, script)").trigger("add.cards");a("html").addClass("mbr-site-loaded");a(window).resize().scroll();a("html").hasClass("is-builder")||a(document).click(function(c){try{var b=c.target;if(!a(b).parents().hasClass("mbr-gallery")||!a(b).parents().hasClass("carousel")&&!a(b).parent().is("a")){do if(b.hash){var d=/#bottom|#top/g.test(b.hash);a(d?"body":b.hash).each(function(){c.preventDefault();var d=a(".mbr-navbar--sticky").length?
64:0,d="#bottom"==b.hash?a(this).height()-a(window).height():a(this).offset().top-d;a("html, body").stop().animate({scrollTop:d},800,"easeInOutCubic")});break}while(b=b.parentNode)}}catch(e){}})});a(document).on("change",'input[type="range"]',function(e){a(e.target).parents(".form-group").find(".value")[0].innerHTML=e.target.value})})(jQuery);
!function(){try{document.getElementsById("top-1")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.style="display: none";a.innerHTML='<a href="https://mobirise.in">Mobirise Website Software</a> Mobirise v5.2.0';document.body.insertBefore(a,document.body.childNodes[0])}}();