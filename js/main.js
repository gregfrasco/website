bgImageTotal=2;
randomNumber = Math.round(Math.random()*(bgImageTotal-1))+1;
imgPath=('images/homePage/'+ randomNumber +'.JPG');
$('body').css('background-image', ('url("'+imgPath+'")'));
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['home', 'aboutMe','resume','projects','photography','contactMe'],
        paddingTop: '0px',
        paddingBottom: '0px',
        fixedElements: 'nav',
        css3: true,
        onLeave: function(index, nextIndex, direction){
            const menuIds = ['blank','homeNav', 'aboutMeNav', 'resumeNav','projectsNav','photographyNav','contactMeNav'];
            $('#' + menuIds[index]).removeClass('is-active');
            $('#' + menuIds[nextIndex]).addClass('is-active');
        },
    });
    var el = document.querySelector('.name');
    // All the possible options (these are the default values)
    // Remember that every option (except individualDelays) can be defined as single value or array
    var options = {
        size: 32,        // Font size, defined by the height of the letters (pixels)
        weight: 10,     // Font weight (pixels)
        rounded: false, // Rounded letter endings
        color: '#EEE',
        duration: 1,    // Duration of the animation of each letter (seconds)
        delay: 0.10,    // Delay animation among letters (seconds)
        fade: 0.5,      // Fade effect duration (seconds)
        easing: d3_ease.easeBackInOut.ease,
        individualDelays: false
    };

    // Initializing the text (Letters parameters: container-element, options)
    var myText = new Letters(el, options);
    myText.show();
});