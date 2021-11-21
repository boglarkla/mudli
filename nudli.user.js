// ==UserScript==
// @name         NudliScript
// @namespace    http://tampermonkey.net/
// @version      0.6.2
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
      header.innerHTML="NUDLI | OE";
      
      document.body.style.backgroundColor = "#000000";
      document.getElementById("page").style.color = "#ffffff";
      
      document.getElementById("maincontent").style.backgroundColor = "#000000";
      document.getElementById("maincontent").style.color = "#ffffff";
    }
)();
