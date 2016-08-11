/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
var isButtonsEnabled = true;
var globalPlay;
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

var courseIndex = 6;
var courseArray = ['French','English','German','Spanish','Italian','P&P<br>industries'];
var descriptionArray = ['Course description','Course description','Course description','Course description','Course description','<br><br><br>contact us<br>(+371) 27421007<br>(+375) 256692698'];
var symbol;
globalPlay = function() {
symbol.play();
symbol.$("Text_1").html(courseArray[courseIndex]);
symbol.$("Text_2").html(descriptionArray[courseIndex]);
isButtonsEnabled = true;
};
   //Edge symbol: 'stage'
   (function(symbolName) {

      
      Symbol.bindElementAction(compId, symbolName, "${_contacts}", "click", function(sym, e) {
   if (courseIndex != 5) {
   if(isButtonsEnabled) {
   isButtonsEnabled = false;
   
   if (courseIndex != 6)
   sym.playReverse();
   
   symbol = sym;
   
   courseIndex = 5;
   mainScript.locationController.moveToLocation(courseIndex);
   sym.$("contacts").css({"left":"2.34%", "top":"87.91%","transform":"scale(1)"});
   }
   }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_italy}", "click", function(sym, e) {
         if (courseIndex != 4) {
         if(isButtonsEnabled) {
         isButtonsEnabled = false;
         
         if (courseIndex != 6)
         sym.playReverse();
         
         symbol = sym;
         
         courseIndex = 4;
         mainScript.locationController.moveToLocation(courseIndex);
         sym.$("italy").css({"left":"2.34%", "top":"73.01%","transform":"scale(1)","box-shadow":"3px 3px 3px 0px rgba(0, 0, 0, 0.65)"});
         }
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_spain}", "click", function(sym, e) {
         if (courseIndex != 3) {
         if(isButtonsEnabled) {
         isButtonsEnabled = false;
         
         if (courseIndex != 6)
         sym.playReverse();
         
         symbol = sym;
         
         courseIndex = 3;
         mainScript.locationController.moveToLocation(courseIndex);
         sym.$("spain").css({"left":"2.34%", "top":"73.01%","transform":"scale(1)","box-shadow":"3px 3px 3px 0px rgba(0, 0, 0, 0.65)"});
         }
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_germany}", "click", function(sym, e) {
         if (courseIndex != 2) {
         if(isButtonsEnabled) {
         isButtonsEnabled = false;
         
         if (courseIndex != 6)
         sym.playReverse();
         
         symbol = sym;
         
         courseIndex = 2;
         mainScript.locationController.moveToLocation(courseIndex);
         sym.$("germany").css({"left":"2.34%", "top":"73.01%","transform":"scale(1)","box-shadow":"3px 3px 3px 0px rgba(0, 0, 0, 0.65)"});
         }
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_britain}", "click", function(sym, e) {
         if (courseIndex != 1) {
         if(isButtonsEnabled) {
         isButtonsEnabled = false;
         
         if (courseIndex != 6)
         sym.playReverse();
         
         symbol = sym;
         
         courseIndex = 1;
         mainScript.locationController.moveToLocation(courseIndex);
         sym.$("italy").css({"left":"2.34%", "top":"73.01%","transform":"scale(1)","box-shadow":"3px 3px 3px 0px rgba(0, 0, 0, 0.65)"});
         }
         }

      });
      //Edge binding end

            Symbol.bindElementAction(compId, symbolName, "${_france}", "click", function(sym, e) {
         
         if (courseIndex != 0) {
         if(isButtonsEnabled) {
         isButtonsEnabled = false;
         
         if (courseIndex != 6)
         sym.playReverse();
         
         symbol = sym;
         
         courseIndex = 0;
         mainScript.locationController.moveToLocation(courseIndex);
         sym.$("france").css({"left":"2.34%", "top":"73.01%","transform":"scale(1)","box-shadow":"3px 3px 3px 0px rgba(0, 0, 0, 0.65)"});
         }
         }

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_france}", "mouseover", function(sym, e) {
         if (courseIndex != 0) {
         if(isButtonsEnabled) {
         sym.$("france").css({"left":"2.24%", "top":"6.69%","transform":"scale(1.1)","box-shadow":"6px 6px 6px 0px rgba(0, 0, 0, 0.65)"});
         }
         }

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_france}", "mouseout", function(sym, e) {
         sym.$("france").css({"left":"2.34%", "top":"6.79%","transform":"scale(1)","box-shadow":"3px 3px 3px 0px rgba(0, 0, 0, 0.65)"});

      });
      //Edge binding end



      

      Symbol.bindElementAction(compId, symbolName, "${_spain}", "mouseover", function(sym, e) {
         if (courseIndex != 3) {
         if(isButtonsEnabled) {
         sym.$("spain").css({"left":"2.24%", "top":"56.36%","transform":"scale(1.1)","box-shadow":"6px 6px 6px 0px rgba(0, 0, 0, 0.65)"});
         }
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_spain}", "mouseout", function(sym, e) {
         sym.$("spain").css({"left":"2.34%", "top":"56.46%","transform":"scale(1)","box-shadow":"3px 3px 3px 0px rgba(0, 0, 0, 0.65)"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_italy}", "mouseover", function(sym, e) {
         if (courseIndex != 4) {
         if(isButtonsEnabled) {
         sym.$("italy").css({"left":"2.24%", "top":"72.91%","transform":"scale(1.1)","box-shadow":"6px 6px 6px 0px rgba(0, 0, 0, 0.65)"});
         }
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_italy}", "mouseout", function(sym, e) {
         sym.$("italy").css({"left":"2.34%", "top":"73.01%","transform":"scale(1)","box-shadow":"3px 3px 3px 0px rgba(0, 0, 0, 0.65)"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_germany}", "mouseover", function(sym, e) {
         if (courseIndex != 2) {
         if(isButtonsEnabled) {
         sym.$("germany").css({"left":"2.24%", "top":"39.8%","transform":"scale(1.1)","box-shadow":"6px 6px 6px 0px rgba(0, 0, 0, 0.65)"});
         }
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_germany}", "mouseout", function(sym, e) {
         sym.$("germany").css({"left":"2.34%", "top":"39.9%","transform":"scale(1)","box-shadow":"3px 3px 3px 0px rgba(0, 0, 0, 0.65)"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_britain}", "mouseover", function(sym, e) {
         if (courseIndex != 1) {
         if(isButtonsEnabled) {
         sym.$("britain").css({"left":"2.24%", "top":"23.24%","transform":"scale(1.1)","box-shadow":"6px 6px 6px 0px rgba(0, 0, 0, 0.65)"});
         }
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_britain}", "mouseout", function(sym, e) {
         sym.$("britain").css({"left":"2.34%", "top":"23.34%","transform":"scale(1)","box-shadow":"3px 3px 3px 0px rgba(0, 0, 0, 0.65)"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_contacts}", "mouseover", function(sym, e) {
         if (courseIndex != 5) {
         if(isButtonsEnabled) {
         sym.$("contacts").css({"left":"2.24%", "top":"87.81%","transform":"scale(1.2)"});
         }
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_contacts}", "mouseout", function(sym, e) {
         sym.$("contacts").css({"left":"2.34%", "top":"87.91%","transform":"scale(1)"});

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "main_menu");