// ==UserScript==
// @name         NudliScript
// @namespace    http://tampermonkey.net/
// @version      0.6.5.5
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
      
      document.getElementById("page").style.backgroundColor = "#000000";
      document.getElementById("page").style.color = "#ffffff";
      
      document.getElementById("page-wrapper").style.backgroundColor = "#000000";
      document.getElementById("page-wrapper").style.color = "#ffffff";
      
      document.getElementById("page-content").style.backgroundColor = "#000000";
      document.getElementById("page-content").style.color = "#ffffff";
      
      document.getElementById("coc-courselist").style.backgroundColor = "#000000";
      document.getElementById("coc-courselist").style.color = "#ffffff";
     
      //document.body.style.setProperty('background-color', 'red', 'important');
      
      var buttons = document.getElementsByClassName("btn"); 
      for(var i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "#000000";
        buttons[i].style.color = "#ffffff";
      }
      
      var bgwhite = document.getElementsByClassName("bg-white"); 
      for(var i = 0; i < bgwhite.length; i++){
        bgwhite[i].style.setProperty("background-color","#000000","important");
      }
      
      var dashboardcards = document.getElementsByClassName("dashboard-card"); 
      for(var i = 0; i < dashboardcards.length; i++){
        dashboardcards[i].style.backgroundColor = "#000000";
        dashboardcards[i].style.color = "#ffffff";
      }
      
      var cards = document.getElementsByClassName("card"); 
      for(var i = 0; i < cards.length; i++){
        cards[i].style.backgroundColor = "#000000";
        cards[i].style.color = "#ffffff";
      }
      
      var cardtexts = document.getElementsByClassName("card-text"); 
      for(var i = 0; i < cardtexts.length; i++){
        cardtexts[i].style.backgroundColor = "#000000";
        cardtexts[i].style.color = "#ffffff";
      }
      
      var cardbody = document.getElementsByClassName("card-body"); 
      for(var i = 0; i < cardbody.length; i++){
        cardbody[i].style.backgroundColor = "#000000";
        cardbody[i].style.color = "#ffffff";
      }
      
      var elements = document.getElementsByClassName("navbar"); 
      for(var i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "#000000";
        elements[i].style.color = "#ffffff";
      }
      
      var elements1 = document.getElementsByClassName("navbar-nav"); 
      for(var i = 0; i < elements1.length; i++){
        elements1[i].style.backgroundColor = "#000000";
        elements1[i].style.color = "#ffffff";
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
