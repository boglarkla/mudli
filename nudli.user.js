// ==UserScript==
// @name         NudliScript
// @namespace    http://tampermonkey.net/
// @version      0.6.6.7.1
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
      
      var links = document.getElementsByTagName("a");
        for(var i=0;i<links.length;i++)
        {
            if(links[i].href)
            {
                links[i].style.color = "#ffffff";  
            }
        }
      
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
      
      /*var bgwhite = document.getElementsByClassName("bg-white"); 
      for(var i = 0; i < bgwhite.length; i++){
        bgwhite[i].setAttribute('style', 'background-color: black !important');
        bgwhite[i].style.cssText = 'background-color: black !important'
        // document.getElementById("player").style.cssText = 'visibility:visible !important'
      } */
      
      // $(".bg-white").removeAttr("style");
      
      
      var dashboardcards = document.getElementsByClassName("dashboard-card"); 
      for(var i = 0; i < dashboardcards.length; i++){
        dashboardcards[i].style.backgroundColor = "#000000";
        dashboardcards[i].style.color = "#ffffff";
      }
      
      var cards = document.getElementsByClassName("card-deck"); 
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
      
      var elements2 = document.getElementsByClassName("card"); 
      for(var i = 0; i < elements2.length; i++){
        elements2[i].style.backgroundColor = "#000000";
        elements2[i].style.color = "#ffffff";
      }
      
     // header.innerHTML+=" checkpoint1";
      
        var elements3 = document.getElementsByClassName("fixed-top"); 
      for(var i = 0; i < elements3.length; i++){
        elements3[i].style.backgroundColor = "#000000";
        elements3[i].style.color = "#ffffff";
      }
      
      var header = document.getElementsByClassName("page-header"); 
      for(var i = 0; i < header.length; i++){
        header[i].style.backgroundColor = "#000000";
        header[i].style.color = "#ffffff";
      }
      
      var listitem = document.getElementsByClassName("list-group-item"); 
      for(var i = 0; i < listitem.length; i++){
        listitem[i].style.backgroundColor = "#000000";
        listitem[i].style.color = "#ffffff";
      }
      
      var tabcontent = document.getElementsByClassName("tab-content"); 
      for(var i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.backgroundColor = "#000000";
        tabcontent[i].style.color = "#ffffff";
      }
      
      var cardfooter = document.getElementsByClassName("card-footer"); 
      for(var i = 0; i < cardfooter.length; i++){
        cardfooter[i].style.backgroundColor = "#000000";
        cardfooter[i].style.color = "#ffffff";
      }
      
      var container = document.getElementsByClassName("course-info-container"); 
      for(var i = 0; i < container.length; i++){
        container[i].style.backgroundColor = "#000000";
        container[i].style.color = "#ffffff";
      }
      
      var drop = document.getElementsByClassName("dropdown-menu"); 
      for(var i = 0; i < drop.length; i++){
        drop[i].style.backgroundColor = "#000000";
        drop[i].style.color = "#ffffff";
      }
      
       header.innerHTML+=" checkpoint2";
      
      var w = document.getElementsByClassName("w-100"); 
      for(var i = 0; i < w.length; i++){
        w[i].style.backgroundColor = "#000000";
        w[i].style.color = "#ffffff";
      }
      
      var icon = document.getElementsByClassName("icon"); 
      for(var i = 0; i < w.length; i++){
        icon[i].style.backgroundColor = "#000000";
        icon[i].style.color = "#ffffff";
      }
      
      var pageitem = document.getElementsByClassName("page-item"); 
      for(var i = 0; i < w.length; i++){
        pageitem[i].style.backgroundColor = "#000000";
        pageitem[i].style.color = "#ffffff";
      }
      
      var pagelink = document.getElementsByClassName("page-link"); 
      for(var i = 0; i < w.length; i++){
        pagelink[i].style.backgroundColor = "#000000";
        pagelink[i].style.color = "#ffffff";
      }
      
       header.innerHTML+=" checkpoint3";
            
      document.getElementById("region-main").style.backgroundColor = "#000000";
      document.getElementById("region-main").style.color = "#ffffff";
      
       header.innerHTML+=" checkpoint4";
      
      document.getElementById("nav-drawer").style.backgroundColor = "#000000";
      document.getElementById("nav-drawer").style.color = "#ffffff";
      
       header.innerHTML+=" checkpoint5";
      
      var bgwhite = document.getElementsByClassName("bg-white");
      for(var i = 0; i < bgwhite.length; i++){
        bgwhite[i].setAttribute ('style', 'background-color: #000000 !important;');
      }
      
      
       header.innerHTML+=" checkpoint6";
    }
)();
