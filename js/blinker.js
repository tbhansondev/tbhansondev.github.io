var blinker = (function() {
    var els = document.getElementsByClassName('js--cursor');
    var delay = 700;
    return {
        init: function() {
            for (var i = 0; i < els.length; i++) {
                els[i].classList.toggle('js--cursor--hide');
            };          
            setTimeout(blinker.init, delay);
        }
    }
})();
window.addEventListener('load', blinker.init);