$(function() {
    // input mask
    $.datepicker.setDefaults(
        $.extend( $.datepicker.regional[ '' ] )
    );
    if ($('#from')) {
        $('#from').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            }
        });
        $('#from').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('MM.DD.YYYY') + ' - ' + picker.endDate.format('MM.DD.YYYY'));
            $(this).siblings('label').addClass('active');
        });
        $('#from').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
            $(this).siblings('label').removeClass('active');
        });
    }
    $('#birthday').datepicker({dateFormat: "dd.mm.yy", autoUpdateInput: false,});
    $('.header__menu img').on('click', function() {
        $('.main__aside').toggleClass('active');
    });
    $("#phone").mask("+7 (999) 999-9999");

    // label floating
    $('.search__row input').on('focus', function() {
        $(this).siblings('label').addClass('active');
    });
    $('.search__row input').on('blur', function() {
        if (!$(this).val()) {
            $(this).siblings('label').removeClass('active');
        }
    });
    $('.search__row select').on('click', function() {
        if ($(this).siblings('label').hasClass('active')) {
            if (!$(this).val()) {
                $(this).siblings('label').removeClass('active');
            }
        } else {
            $(this).siblings('label').addClass('active');
        }
    });
    // reset form
    $('.search__reset').on('click', function() {
        $('label').removeClass('active');
        $(this).children('img').css('transform', 'rotate(360deg)');
        setTimeout(() => {
            $(this).children('img').css('transform', '');
        }, 1000);
    });
    $('.checkbox').on('click', function() {
        $(this).toggleClass('active');
    });

    // plus partner
    $('.plus-partner').on('click', function() {
        $('body').addClass('popup-active');
        $('.popup-partner').addClass('active');
    });
    $('.popup-partner__header img').on('click', function() {
        $(this).parent().parent().removeClass('active');
        $('body').removeClass('popup-active');
    });
    $('.popup-partner__controls span').on('click', function() {
        $(this).parent().parent().removeClass('active');
        $('body').removeClass('popup-active');
    });
});