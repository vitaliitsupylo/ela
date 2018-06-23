;
(() => {
  'use strict';

  /*variables*/





    /*parallax all*/
    if (document.querySelector('.parallax') !== null) {
        let Parallax = require('scroll-parallax');
        let p = new Parallax('.parallax').init();
    }


})();
