// ==UserScript==
// @name         NudliScript
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Pár változtatás just for fun
// @author       boglarkla
// @match        *://elearning.uni-obuda.hu/main/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(
  //*://elearning.uni-obuda.hu/main/*

    function TextChanger() {
    'use strict';
     var header = document.getElementsByClassName('site-name')[0]; 
      header.innerHTML+="NUDLI - OE";
    }

      
}
)();
