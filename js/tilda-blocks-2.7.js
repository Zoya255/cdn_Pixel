function t228__init(recid){var el=$('#rec'+recid);var mobile=el.find('.t228__mobile');var fixedBlock=mobile.css('position')==='fixed'&&mobile.css('display')==='block';setTimeout(function(){el.find('.t-menu__link-item:not(.t-menusub__target-link):not(.tooltipstered):not(.t794__tm-link)').on('click',function(){if($(this).is(".t-menu__link-item.tooltipstered, .t-menu__link-item.t-menusub__target-link, .t-menu__link-item.t794__tm-link")){return}
if(fixedBlock){mobile.trigger('click')}});el.find('.t-menusub__link-item').on('click',function(){if(fixedBlock){mobile.trigger('click')}});el.find('.t228__right_buttons_but .t-btn').on('click',function(){if(fixedBlock){mobile.trigger('click')}})},500)}
function t228_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t228__list_item a[href='"+url+"']").addClass("t-active");$(".t228__list_item a[href='"+url+"/']").addClass("t-active");$(".t228__list_item a[href='"+pathname+"']").addClass("t-active");$(".t228__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t228__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t228__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t228_checkAnchorLinks(recid){var el=$('#rec'+recid);if($(window).width()>980){var t228_navLinks=el.find(".t228__list_item a:not(.tooltipstered)[href*='#']");if(t228_navLinks.length>0){setTimeout(function(){t228_catchScroll(t228_navLinks)},500)}}}
function t228_catchScroll(t228_navLinks){var t228_clickedSectionId=null,t228_sections=[],t228_sectionIdTonavigationLink=[],t228_interval=100,t228_lastCall,t228_timeoutId;t228_navLinks=$(t228_navLinks.get().reverse());t228_navLinks.each(function(){var t228_cursection=t228_getSectionByHref($(this));if(typeof t228_cursection.attr("id")!="undefined"){t228_sections.push(t228_cursection)}
t228_sectionIdTonavigationLink[t228_cursection.attr("id")]=$(this)});t228_updateSectionsOffsets(t228_sections);t228_sections.sort(function(a,b){return b.attr("data-offset-top")-a.attr("data-offset-top")});$(window).bind('resize',t_throttle(function(){t228_updateSectionsOffsets(t228_sections)},200));$('.t228').bind('displayChanged',function(){t228_updateSectionsOffsets(t228_sections)});t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId);t228_navLinks.click(function(){var clickedSection=t228_getSectionByHref($(this));if(!$(this).hasClass("tooltipstered")&&typeof clickedSection.attr("id")!="undefined"){t228_navLinks.removeClass('t-active');$(this).addClass('t-active');t228_clickedSectionId=t228_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t228_now=new Date().getTime();if(t228_lastCall&&t228_now<(t228_lastCall+t228_interval)){clearTimeout(t228_timeoutId);t228_timeoutId=setTimeout(function(){t228_lastCall=t228_now;t228_clickedSectionId=t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId)},t228_interval-(t228_now-t228_lastCall))}else{t228_lastCall=t228_now;t228_clickedSectionId=t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId)}})}
function t228_updateSectionsOffsets(sections){$(sections).each(function(){var t228_curSection=$(this);t228_curSection.attr("data-offset-top",t228_curSection.offset().top)})}
function t228_getSectionByHref(curlink){var curLinkValue=curlink.attr('href').replace(/\s+/g,'').replace(/.*#/,'');if(curlink.is('[href*="#rec"]')){return $(".r[id='"+curLinkValue+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+curLinkValue+"']")}}
function t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId){var t228_scrollPosition=$(window).scrollTop();var t228_valueToReturn=t228_clickedSectionId;if(t228_sections.length!==0&&t228_clickedSectionId===null&&t228_sections[t228_sections.length-1].attr("data-offset-top")>(t228_scrollPosition+300)){t228_navLinks.removeClass('t-active');return null}
$(t228_sections).each(function(e){var t228_curSection=$(this),t228_sectionTop=t228_curSection.attr("data-offset-top"),t228_id=t228_curSection.attr('id'),t228_navLink=t228_sectionIdTonavigationLink[t228_id];if(((t228_scrollPosition+300)>=t228_sectionTop)||(t228_sections[0].attr("id")==t228_id&&t228_scrollPosition>=$(document).height()-$(window).height())){if(t228_clickedSectionId==null&&!t228_navLink.hasClass('t-active')){t228_navLinks.removeClass('t-active');t228_navLink.addClass('t-active');t228_valueToReturn=null}else{if(t228_clickedSectionId!=null&&t228_id==t228_clickedSectionId){t228_valueToReturn=null}}
return!1}});return t228_valueToReturn}
function t228_setWidth(recid){var el=$('#rec'+recid);if($(window).width()>980){el.find(".t228").each(function(){var el=$(this);var left_exist=el.find('.t228__leftcontainer').length;var left_w=el.find('.t228__leftcontainer').outerWidth(!0);var max_w=left_w;var right_exist=el.find('.t228__rightcontainer').length;var right_w=el.find('.t228__rightcontainer').outerWidth(!0);var items_align=el.attr('data-menu-items-align');if(left_w<right_w)max_w=right_w;max_w=Math.ceil(max_w);var center_w=0;el.find('.t228__centercontainer').find('li').each(function(){center_w+=$(this).outerWidth(!0)});var padd_w=40;var maincontainer_width=el.find(".t228__maincontainer").outerWidth();if(maincontainer_width-max_w*2-padd_w*2>center_w+20){if(items_align=="center"||typeof items_align==="undefined"){el.find(".t228__leftside").css("min-width",max_w+"px");el.find(".t228__rightside").css("min-width",max_w+"px");el.find(".t228__list").removeClass("t228__list_hidden")}}else{el.find(".t228__leftside").css("min-width","");el.find(".t228__rightside").css("min-width","")}})}}
function t228_setBg(recid){var el=$('#rec'+recid);if($(window).width()>980){el.find(".t228").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{el.find(".t228").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t228_appearMenu(recid){var el=$('#rec'+recid);if($(window).width()>980){el.find(".t228").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("top","-50px");el.css("visibility","visible");var topoffset=el.data('top-offset');if(topoffset&&parseInt(topoffset)>0){el.animate({"opacity":"1","top":topoffset+"px"},200,function(){})}else{el.animate({"opacity":"1","top":"0px"},200,function(){})}}}else{el.stop();el.css("visibility","hidden");el.css("opacity","0")}}})}}
function t228_changebgopacitymenu(recid){var el=$('#rec'+recid);if($(window).width()>980){el.find(".t228").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacityone=el.attr("data-bgopacity");var bgopacitytwo=el.attr("data-bgopacity-two");var menushadow=el.attr("data-menushadow");if(menushadow=='100'){var menushadowvalue=menushadow}else{var menushadowvalue='0.'+menushadow}
if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacitytwo=='0'||(typeof menushadow=="undefined"&&menushadow==!1)){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}else{el.css("background-color",bgcolor);if(bgopacityone=='0.0'||(typeof menushadow=="undefined"&&menushadow==!1)){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}})}}
function t228_createMobileMenu(recid){var el=$("#rec"+recid);var menu=el.find(".t228");var burger=el.find(".t228__mobile");burger.on('click',function(e){menu.fadeToggle(300);burger.toggleClass("t228_opened")});$(window).bind('resize',t_throttle(function(){if($(window).width()>980){menu.fadeIn(0)}}))}
t422_setHeight=function(recid){if($(window).width()>960){t422_checkEqualHeight(recid)}else{$('#rec'+recid+' .t422__img-mobile').height(200);$('#rec'+recid+' .t422__text').height('auto')}};t422_checkEqualHeight=function(recid){var t422__txtel=$('#rec'+recid+' .t422__text');var t422__imgel=$('#rec'+recid+' .t422__img');var t422__textwrapperel=$('#rec'+recid+' .t422__textwrapper');var t422__borderwidth=0;if(t422__txtel.css("border-top-width")&&t422__txtel.css("border-top-width")[1]!='p'){t422__borderwidth=+(t422__txtel.css("border-top-width")[0]+t422__txtel.css('border-top-width')[1])}else{if(t422__txtel.css("border-top-width"))
t422__borderwidth=+(t422__txtel.css("border-top-width")[0])}
if(t422__imgel.height()<(t422__textwrapperel.outerHeight()+t422__borderwidth*2)){t422__imgel.height(t422__textwrapperel.outerHeight()+t422__borderwidth*2)}else{if((t422__imgel.height()-t422__borderwidth*2)>t422__textwrapperel.outerHeight()){t422__textwrapperel.outerHeight(t422__imgel.height()-t422__borderwidth*2)}}};function t451_showMenu(recid){var el=$('#rec'+recid);$('body').addClass('t451__body_menushowed');el.find('.t451m').addClass('t451m__menu_show');el.find('.t451m__overlay').addClass('t451m__menu_show');el.find('.t451m__overlay, .t451m__close, a[href*=#]').click(function(){if($(this).is(".tooltipstered, .t794__tm-link")){return}
t451_closeMenu()});$(document).keydown(function(e){if(e.keyCode==27){$('body').removeClass('t451__body_menushowed');$('.t451m').removeClass('t451m__menu_show');$('.t451m__overlay').removeClass('t451m__menu_show')}})}
function t451_closeMenu(){$('body').removeClass('t451__body_menushowed');$('.t451m').removeClass('t451m__menu_show');$('.t451m__overlay').removeClass('t451m__menu_show')}
function t451_checkSize(recid){var el=$('#rec'+recid).find('.t451m');var windowheight=$(window).height()-80;var contentheight=el.find(".t451m__top").height()+el.find(".t451m__rightside").height();if(contentheight>windowheight){el.addClass('t451m__overflowed');el.find(".t451m__container").css('height','auto')}}
function t451_initMenu(recid){var el=$('#rec'+recid);var obj=el.find('.t451__burger');obj.click(function(e){t451_closeMenu();t451_showMenu(recid);t451_checkSize(recid);e.preventDefault()});$('.t451').bind('clickedAnchorInTooltipMenu',function(){t451_closeMenu()});if(isMobile){$('#rec'+recid).find('.t-menu__link-item').each(function(){var $this=$(this);if($this.hasClass('t451__link-item_submenu')){$this.on('click',function(){setTimeout(function(){t451_checkSize(recid)},100)})}})}
var navLinks=el.find('.t451 a.t-menusub__link-item:not(.tooltipstered)[href*="#"]');if(navLinks.length>0){t451_catchScroll(navLinks)}
t451_highlight()}
function t451_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t451m__menu a[href='"+url+"']").addClass("t-active");$(".t451m__menu a[href='"+url+"/']").addClass("t-active");$(".t451m__menu a[href='"+pathname+"']").addClass("t-active");$(".t451m__menu a[href='/"+pathname+"']").addClass("t-active");$(".t451m__menu a[href='"+pathname+"/']").addClass("t-active");$(".t451m__menu a[href='/"+pathname+"/']").addClass("t-active")}
function t451_changeBgOpacityMenu(recid){var window_width=$(window).width();var record=$("#rec"+recid);record.find(".t451__container__bg").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacity=el.attr("data-bgopacity");var bgopacity_afterscroll=el.attr("data-bgopacity2");var menu_shadow=el.attr("data-menu-shadow");if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacity_afterscroll!="0"&&bgopacity_afterscroll!="0.0"){el.css('box-shadow',menu_shadow)}else{el.css('box-shadow','none')}}else{el.css("background-color",bgcolor);if(bgopacity!="0"&&bgopacity!="0.0"){el.css('box-shadow',menu_shadow)}else{el.css('box-shadow','none')}}})}
function t451_appearMenu(recid){var window_width=$(window).width();var record=$("#rec"+recid);record.find(".t451__panel").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");console.log(appearoffset)
if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.hasClass('t451__beforeready')){el.removeClass('t451__beforeready')}}else{el.addClass('t451__beforeready')}}})}
function t451_catchScroll(navLinks){var clickedSectionId=null;var sections=new Array();var sectionIdTonavigationLink=[];var interval=100;var lastCall;var timeoutId;navLinks=$(navLinks.get().reverse());navLinks.each(function(){var cursection=t451_getSectionByHref($(this));if(typeof cursection.attr("id")!="undefined"){sections.push(cursection)}
sectionIdTonavigationLink[cursection.attr("id")]=$(this)});$(window).bind('resize',t_throttle(function(){t451_updateSectionsOffsets(sections)},200));$('.t451').bind('displayChanged',function(){t451_updateSectionsOffsets(sections)});setInterval(function(){t451_updateSectionsOffsets(sections)},5000);setTimeout(function(){t451_updateSectionsOffsets(sections);t451_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId)},1000);navLinks.click(function(){if(!$(this).hasClass("tooltipstered")){navLinks.removeClass('t-active');sectionIdTonavigationLink[t451_getSectionByHref($(this)).attr("id")].addClass('t-active');clickedSectionId=t451_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var now=new Date().getTime();if(lastCall&&now<(lastCall+interval)){clearTimeout(timeoutId);timeoutId=setTimeout(function(){lastCall=now;clickedSectionId=t451_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId)},interval-(now-lastCall))}else{lastCall=now;clickedSectionId=t451_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId)}})}
function t451_updateSectionsOffsets(sections){$(sections).each(function(){var curSection=$(this);curSection.attr("data-offset-top",curSection.offset().top)})}
function t451_getSectionByHref(curlink){var curLinkValue=curlink.attr("href").replace(/\s+/g,'');if(curlink.is('[href*="#rec"]')){return $(".r[id='"+curLinkValue.substring(1)+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+curLinkValue.substring(1)+"']")}}
function t451_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId){var scrollPosition=$(window).scrollTop();var valueToReturn=clickedSectionId;if(sections.length!=0&&clickedSectionId==null&&sections[sections.length-1].attr("data-offset-top")>(scrollPosition+300)){navLinks.removeClass('t-active');return null}
$(sections).each(function(e){var curSection=$(this);var sectionTop=curSection.attr("data-offset-top");var id=curSection.attr('id');var navLink=sectionIdTonavigationLink[id];if(((scrollPosition+300)>=sectionTop)||(sections[0].attr("id")==id&&scrollPosition>=$(document).height()-$(window).height())){if(clickedSectionId==null&&!navLink.hasClass('t-active')){navLinks.removeClass('t-active');navLink.addClass('t-active');valueToReturn=null}else{if(clickedSectionId!=null&&id==clickedSectionId){valueToReturn=null}}
return!1}});return valueToReturn}
function t486_setHeight(recid){var el=$('#rec'+recid);var window_width=$(window).width();if(window_width>980){el.find('.t486__blockimg').css('height',el.find('.t486__blockimg').innerWidth());var textwrapper=el.find('.t486__textwrapper');var blockimg=el.find('.t486__imgcontainer');textwrapper.css('height',blockimg.innerHeight())}else{el.find('.t486__blockimg').css('height',el.find('.t486__blockimg').width());el.find('.t486__textwrapper').css('height','auto')}}
function t552_init(recid,ratio){var t552__el=$("#rec"+recid),t552__image=t552__el.find(".t552__blockimg:first");t552__setHeight(recid,t552__image,ratio);var t552__doResize;$(window).resize(function(){clearTimeout(t552__doResize);t552__doResize=setTimeout(function(){t552__setHeight(recid,t552__image,ratio)},200)})}
function t552__setHeight(recid,image,ratio){$("#rec"+recid+" .t552__blockimg").css("height",Math.round(image.innerWidth()*ratio))}
function t570_init(recid){if($(window).width()>750){t570_setMapHeight(recid);$(window).load(function(){t570_setMapHeight(recid)});$(window).resize(function(){t570_setMapHeight(recid)})}}
function t570_setMapHeight(recid){var t570__el=$('#rec'+recid),t570__map=t570__el.find('.t-map');var t570__textwrapper=t570__el.find('.t570__col_text').height();t570__map.css('height',t570__textwrapper).trigger('sizechange')}
function t585_init(recid){var el=$('#rec'+recid);var toggler=el.find(".t585__header");var accordion=el.find('.t585__accordion');if(accordion){accordion=accordion.attr('data-accordion')}else{accordion="false"}
toggler.click(function(){if(accordion==="true"){toggler.not(this).removeClass("t585__opened").next().slideUp()}
$(this).toggleClass("t585__opened");$(this).next().slideToggle();if(window.lazy==='y'){t_lazyload_update()}})}
function t678_onSuccess(t678_form){var t678_inputsWrapper=t678_form.find('.t-form__inputsbox');var t678_inputsHeight=t678_inputsWrapper.height();var t678_inputsOffset=t678_inputsWrapper.offset().top;var t678_inputsBottom=t678_inputsHeight+t678_inputsOffset;var t678_targetOffset=t678_form.find('.t-form__successbox').offset().top;if($(window).width()>960){var t678_target=t678_targetOffset-200}else{var t678_target=t678_targetOffset-100}
if(t678_targetOffset>$(window).scrollTop()||($(document).height()-t678_inputsBottom)<($(window).height()-100)){t678_inputsWrapper.addClass('t678__inputsbox_hidden');setTimeout(function(){if($(window).height()>$('.t-body').height()){$('.t-tildalabel').animate({opacity:0},50)}},300)}else{$('html, body').animate({scrollTop:t678_target},400);setTimeout(function(){t678_inputsWrapper.addClass('t678__inputsbox_hidden')},400)}
var successurl=t678_form.data('success-url');if(successurl&&successurl.length>0){setTimeout(function(){window.location.href=successurl},500)}}
function t696_onSuccess(t696_form){var t696_inputsWrapper=t696_form.find('.t-form__inputsbox');var t696_inputsHeight=t696_inputsWrapper.height();var t696_inputsOffset=t696_inputsWrapper.offset().top;var t696_inputsBottom=t696_inputsHeight+t696_inputsOffset;var t696_targetOffset=t696_form.find('.t-form__successbox').offset().top;if($(window).width()>960){var t696_target=t696_targetOffset-200}else{var t696_target=t696_targetOffset-100}
if(t696_targetOffset>$(window).scrollTop()||($(document).height()-t696_inputsBottom)<($(window).height()-100)){t696_inputsWrapper.addClass('t696__inputsbox_hidden');setTimeout(function(){if($(window).height()>$('.t-body').height()){$('.t-tildalabel').animate({opacity:0},50)}},300)}else{$('html, body').animate({scrollTop:t696_target},400);setTimeout(function(){t696_inputsWrapper.addClass('t696__inputsbox_hidden')},400)}
var successurl=t696_form.data('success-url');if(successurl&&successurl.length>0){setTimeout(function(){window.location.href=successurl},500)}}
function t734_init(recid){var rec=$('#rec'+recid);if($('body').find('.t830').length>0){if(rec.find('.t-slds__items-wrapper').hasClass('t-slds_animated-none')){t_sldsInit(recid)}else{setTimeout(function(){t_sldsInit(recid)},500)}}else{t_sldsInit(recid)}
rec.find('.t734').bind('displayChanged',function(){t_slds_updateSlider(recid)})}
function t843_init(recid){var rec=$('#rec'+recid);var container=rec.find('.t843');t843_setHeight(rec);$(window).bind('resize',t_throttle(function(){if(typeof window.noAdaptive!="undefined"&&window.noAdaptive==!0&&$isMobile){return}
t843_setHeight(rec)},200));$('.t843').bind('displayChanged',function(){t843_setHeight(rec)});if(container.hasClass('t843__previewmode')){setInterval(function(){t843_setHeight(rec)},5000)}}
function t843_setHeight(rec){var image=rec.find('.t843__blockimg');image.each(function(){var width=$(this).attr('data-image-width');var height=$(this).attr('data-image-height');var ratio=height/width;var padding=ratio*100;$(this).css('padding-bottom',padding+'%')});if($(window).width()>960){var textwr=rec.find('.t843__textwrapper');var deskimg=rec.find('.t843__desktopimg');textwr.each(function(i){$(this).css('height',$(deskimg[i]).innerHeight())})}}