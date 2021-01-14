var fullPageSetup = function() {
    var myFullpage = new fullpage('#fullpage', {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        navigation: true,
        anchors: ['home', 'aboutme', 'tech', 'projects', 'contact'],
        sectionsColor: ['#1d2225', 'snow', '#1d2225', '#1e90ff', 'snow'],
        loopHorizontal: false,
        touchSensitivity: 10,
        responsiveWidth: 750,
        responsiveHeight: 750
    });
};
window.addEventListener('load', fullPageSetup);