var dropdownBtn = $('.dropdown-btn');
var dropdownItem = $('.dropdown a');
var dropdownCloseBtn = $('.icon-angle-up');
var dropdownClose = null;
var menu = $('.menu');
var item = $('.menu-item:not(.sitemap)');
var subMenuItem = $('.sub-menu a');
var menuClose = null;

// 공통 dropdown을 제어하는 스크립트
dropdownBtn.on('click keyup', function(e) {
  e.preventDefault();
  if (e.type === 'click' && $(this).hasClass('icon-angle-up')) {
    $(this).parents('.dropdown').removeClass('dropdown-act');
    $(this).prev().removeClass('icon-angle-up');
    $(this).prev().addClass('icon-angle-down');
  } else if (e.keyCode === 13 || e.keyCode === 32 || e.type === 'click') {
    $(this).parent().addClass('dropdown-act');
    $(this).removeClass('icon-angle-down');
    $(this).addClass('icon-angle-up');
    $(this).next().find("li:first-child a").focus();
  }
});
dropdownItem.on('click', function() {
  if ($(this).parents('.dropdown').hasClass('change-text')) {
    $(this).parents('.dropdown-list').prev().text($(this).text()).removeClass('icon-angle-up').addClass('icon-angle-down');
  }
  $(this).parents('.dropdown').removeClass('dropdown-act');
});
dropdownItem.focusin(function() {
  clearTimeout(dropdownClose);
  dropdownClose = null;
}).focusout(function(){
  var thisEl = $(this);
  dropdownClose = setTimeout(function () {
    thisEl.parents('.dropdown').removeClass('dropdown-act');
    thisEl.parents('.dropdown-list').prev().removeClass('icon-angle-up');
    thisEl.parents('.dropdown-list').prev().addClass('icon-angle-down');
  }, 100)
});

// 네이게이션을 제어하는 스크립트
menu.on('mouseout', function() {
  item.removeClass('menu-act');
});
item.on('mouseover focusin', function() {
  item.removeClass('menu-act');
  $(this).addClass('menu-act');
});
subMenuItem.focusin(function() {
  clearTimeout(menuClose);
  menuClose = null;
}).focusout(function(){
  menuClose = setTimeout(function () {
    item.removeClass('menu-act');
  }, 100)
});
