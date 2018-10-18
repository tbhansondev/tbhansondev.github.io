var fullPageSetup = function() {
    var myFullpage = new fullpage('#fullpage', {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        navigation: true,
        anchors: ['home', 'aboutme', 'tech', 'projects', 'contact'],
        sectionsColor: ['#1d2225', 'snow', '#1d2225', '#e66d63', 'snow'],
        loopHorizontal: false,
        touchSensitivity: 10
    });
};
window.addEventListener('load', fullPageSetup);