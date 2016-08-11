/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
var planArray = ['PLAN #1','PLAN #2','PLAN #3','PLAN #4'];
var priceArray = ['10€/month','7€/month','5€/month','2€/month'];
var smsArray = ['unlimited sms','1000 sms','500 sms','100 sms'];
var mbArray = ['2GB for free','500MB for free','100MB for free','5MB for free'];
var planindex = 0;
   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
           Symbol.bindElementAction(compId, symbolName, "${_RR1}", "mouseover", function(sym, e) {
         // Show an Element.
         sym.$("circ1").show();
         // Set the value of a Symbol variable
         sym.$("RR1").css("background-color", "rgba(28,27,26,0.80)");
         //"backgroung-image", "-webkit-linear-gradient(rgb(0, 216, 203) 0%, rgb(23, 144, 137) 100%)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RR1}", "click", function(sym, e) {
         sym.play(800);
         planindex = 0;
         sym.$("Text0").html(planArray[planindex]);
         sym.$("Text1").html(priceArray[planindex]);
         sym.$("Text3").html(smsArray[planindex]);
         sym.$("Text7").html(mbArray[planindex]);

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_RR1}", "mouseout", function(sym, e) {
         sym.$("circ1").hide();
         sym.$("RR1").css("background-color", "rgba(0,0,0,0.80)");

      });
      //Edge binding end
      
      
      Symbol.bindElementAction(compId, symbolName, "${_RR2}", "mouseover", function(sym, e) {
         // Show an Element.
         sym.$("circ2").show();
         // Set the value of a Symbol variable
         sym.$("RR2").css("background-color", "rgba(28,27,26,0.80)");
         //"backgroung-image", "-webkit-linear-gradient(rgb(0, 216, 203) 0%, rgb(23, 144, 137) 100%)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RR2}", "click", function(sym, e) {
         sym.play(700);
         planindex = 1;
         sym.$("Text0").html(planArray[planindex]);
         sym.$("Text1").html(priceArray[planindex]);
         sym.$("Text3").html(smsArray[planindex]);
         sym.$("Text7").html(mbArray[planindex]);

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_RR2}", "mouseout", function(sym, e) {
         sym.$("circ2").hide();
         sym.$("RR2").css("background-color", "rgba(0,0,0,0.80)");

      });
      //Edge binding end
      Symbol.bindElementAction(compId, symbolName, "${_RR3}", "mouseover", function(sym, e) {
         // Show an Element.
         sym.$("circ3").show();
         // Set the value of a Symbol variable
         sym.$("RR3").css("background-color", "rgba(28,27,26,0.80)");
         //"backgroung-image", "-webkit-linear-gradient(rgb(0, 216, 203) 0%, rgb(23, 144, 137) 100%)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RR3}", "click", function(sym, e) {
         sym.play(600);
         planindex = 2;
         sym.$("Text0").html(planArray[planindex]);
         sym.$("Text1").html(priceArray[planindex]);
         sym.$("Text3").html(smsArray[planindex]);
         sym.$("Text7").html(mbArray[planindex]);

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_RR3}", "mouseout", function(sym, e) {
         sym.$("circ3").hide();
         sym.$("RR3").css("background-color", "rgba(0,0,0,0.80)");

      });
      //Edge binding end
            Symbol.bindElementAction(compId, symbolName, "${_RR4}", "mouseover", function(sym, e) {
         // Show an Element.
         sym.$("circ4").show();
         // Set the value of a Symbol variable
         sym.$("RR4").css("background-color", "rgba(28,27,26,0.80)");
         //"backgroung-image", "-webkit-linear-gradient(rgb(0, 216, 203) 0%, rgb(23, 144, 137) 100%)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RR4}", "click", function(sym, e) {
         sym.play(500);
         planindex = 3;
         sym.$("Text0").html(planArray[planindex]);
         sym.$("Text1").html(priceArray[planindex]);
         sym.$("Text3").html(smsArray[planindex]);
         sym.$("Text7").html(mbArray[planindex]);

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_RR4}", "mouseout", function(sym, e) {
         sym.$("circ4").hide();
         sym.$("RR4").css("background-color", "rgba(0,0,0,0.80)");

      });
      //Edge binding end
      

      

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "Plans");