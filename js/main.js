$(document).ready(function() {
    $('#fullpage').fullpage({
        lockAnchors: true,
        anchors:['home', 'aboutMe'],
        paddingTop: '0px',
        paddingBottom: '0px',
        fixedElements: 'nav',
        //Scrolling
        /*
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: false,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

    //Custom selectors
    sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
    afterResize: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    */
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