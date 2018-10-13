
var codeList = (function() {
    var el;
    var elNext;
    var text;
    var count = 1;
    var markup = {
        prefix: '<div class="number-prefix">%count%</div>',
        heading: '<span class="blue">var</span> <span class="yellow">%text%</span> = <span class="red">[</span>',
        listItem: '\'%text%\',',
        listItemEnd: '\'%text%\'',
        listSectionEnd: '<li class="technology__technology technology__technology--spacer"><div class="number-prefix">%count%</div><span class="red">]</span>;</li>',
        cursor: '<span class="js--cursor js--cursor--hide white">&#124;</span>'
    };
    var headingClass = 'technology__technology--heading';
    var count = 1;

    function styleHeading() {
        el.innerHTML = el.innerHTML.replace('%replace%', markup.heading.replace('%text%', text));
    };

    function styleListItem() {
        el.innerHTML = el.innerHTML.replace('%replace%', el.innerHTML = markup.listItem.replace('%text%', text));
    };

    function styleSectionEnd() {
        count++;
        el.innerHTML = el.innerHTML.replace('%replace%', markup.listItemEnd.replace('%text%', text));
        el.insertAdjacentHTML('beforeend', markup.listSectionEnd.replace('%count%', count));
    };

    function styleListEnd() {
        el.className += ' ' + 'highlight-row';
        el.insertAdjacentHTML('beforeend', markup.cursor);
        styleSectionEnd();
    }

    function prefixHTML() {
        el.innerHTML = '%replace%';
        el.insertAdjacentHTML('afterbegin', markup.prefix.replace('%count%', count));
    };

    function styleHTML() {
        if (el.classList.contains(headingClass)) {
            styleHeading();
        } else if (!elNext) {
            styleListEnd();
        } else {
            if (elNext.classList.contains(headingClass)) {
                styleSectionEnd();
            } else {
                styleListItem();
            };
        };
    }
    
    return {
        init: function() {
            var techList = document.querySelector('.technology__list');
            var childs = techList.children;
            for (var i = 0; i < childs.length; i++) {
                el = childs[i];
                elNext = childs[i + 1] ? childs[i + 1] : false;
                text = el.innerHTML;
                prefixHTML();
                styleHTML();                
                count++;
            };
        }
    }
})();

window.addEventListener('load', codeList.init);