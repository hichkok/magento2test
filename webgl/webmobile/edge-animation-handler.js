var comp;
AdobeEdge.bootstrapCallback(function(compId) {
    if(compId == "Model_Description")
        comp = AdobeEdge.getComposition(compId).getStage();
});
function vc_stop(){
    comp.stop();
}
function vc_play(){
    comp.play();
}
var comp1;
AdobeEdge.bootstrapCallback(function(compId) {
    if(compId == "Plans")
        comp1 = AdobeEdge.getComposition(compId).getStage();
});

var comp2;
AdobeEdge.bootstrapCallback(function(compId) {
    if(compId == "Loading")
        comp2 = AdobeEdge.getComposition(compId).getStage();
});
