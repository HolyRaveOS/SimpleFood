
$(function () {
	var mixer = mixitup('.popular__list');

	$(document).ready(function () {
		$('.header__user-form').hide();
		$('.header__user-btn-cart').click(function () {
			$('.header__cart-content').slideToggle('fast');
		});
		$('.header__user-form').css('display', 'flex').hide();
		$('.header__user-btn').click(function () {
			$('.header__user-form').slideToggle('fast');
		});
	});
});








