;
(() => {
    'use strict';

    /*variables*/
    /*animation*/
    const arrAnimation = document.querySelectorAll('.animation');


    /*parallax all*/
    if (document.querySelector('.parallax') !== null) {
        let Parallax = require('scroll-parallax');
        let p = new Parallax('.parallax', {
            intensity: 60,
        }).init();
    }


    /*animation*/
    let addAnimation = null;
    if (arrAnimation.length > 0) {
        addAnimation = require('./modules/animation');
    }

    window.addEventListener('load', () => {
        /*animation*/
        if (addAnimation !== null) {
            addAnimation(arrAnimation);
        }
    });


    window.addEventListener('scroll', () => {
        /*animation*/
        if (addAnimation !== null) {
            addAnimation(arrAnimation);
        }
    });

})();
