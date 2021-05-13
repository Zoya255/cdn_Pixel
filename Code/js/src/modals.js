let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

function modal_dior() {
    // $('main').toggleClass("display");
    $('.modal-wrapper-dior').toggleClass("modal-display").css('padding', '0px').css('padding-top', window.pageYOffset + 'px').css('padding-bottom', ( scrollHeight - ( window.pageYOffset + $('.modal-wrapper-dior').height() ) ) + 'px');
}

function modal_hein() {
    // $('main').toggleClass("display");
    $('.modal-wrapper-hein').toggleClass("modal-display").css('padding', '0px').css('padding-top', window.pageYOffset + 'px').css('padding-bottom', ( scrollHeight - ( window.pageYOffset + $('.modal-wrapper-hein').height() ) ) + 'px');
}

function modal_leonardo() {
    // $('main').toggleClass("display");
    $('.modal-wrapper-leonardo').toggleClass("modal-display").css('padding', '0px').css('padding-top', window.pageYOffset + 'px').css('padding-bottom', ( scrollHeight - ( window.pageYOffset + $('.modal-wrapper-leonardo').height() ) ) + 'px');
}

function modal_leran() {
    // $('main').toggleClass("display");
    $('.modal-wrapper-leran').toggleClass("modal-display").css('padding', '0px').css('padding-top', window.pageYOffset + 'px').css('padding-bottom', ( scrollHeight - ( window.pageYOffset + $('.modal-wrapper-leran').height() ) ) + 'px');
}

function modal_rbt() {
    // $('main').toggleClass("display");
    $('.modal-wrapper-rbt').toggleClass("modal-display").css('padding', '0px').css('padding-top', window.pageYOffset + 'px').css('padding-bottom', ( scrollHeight - ( window.pageYOffset + $('.modal-wrapper-rbt').height() ) ) + 'px');
}

function modal_exit() {
    $('.modal-display').toggleClass("modal-display");
    // $('main').toggleClass("display");
}
