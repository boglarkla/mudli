// ==UserScript==
// @name         NudliScript
// @namespace    http://tampermonkey.net/
// @version      0.6.5.2
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
      
      document.getElementById("coc-courselist").style.backgroundColor = "#000000";
      document.getElementById("coc-courselist").style.color = "#ffffff";
     
      
      var elements = document.getElementsByClassName("navbar"); 
      for(var i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "#000000";
        elements[i].style.color = "#ffffff";
      }
      
      var elements2 = document.getElementsByClassName("card-body"); 
      for(var i = 0; i < elements2.length; i++){
        elements2[i].style.backgroundColor = "#000000";
        elements2[i].style.color = "#ffffff";
      }
      
        var elements3 = document.getElementsByClassName("fixed-top"); 
      for(var i = 0; i < elements3.length; i++){
        elements3[i].style.backgroundColor = "#000000";
        elements3[i].style.color = "#ffffff";
      }
      
          var links = document.getElementsByTagName("a");
        for(var i=0;i<links.length;i++)
        {
            if(links[i].href)
            {
                links[i].style.color = "#ffffff";  
            }
        } 
      
    }
)();
