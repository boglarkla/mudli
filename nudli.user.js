// ==UserScript==
// @name         NudliScript
// @namespace    http://tampermonkey.net/
// @version      0.6.3
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
      
      document.body.style.color = "#ffffff";
      document.body.style.backgroundColor = "#000000";
      document.getElementById("page").style.color = "#ffffff";
      
      document.getElementById("page-wrapper").style.backgroundColor = "#000000";
      document.getElementById("page-wrapper").style.color = "#ffffff";
    }
)();
