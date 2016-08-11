/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Ellipse',
                display: 'block',
                type: 'ellipse',
                rect: ['115px', '59px','268px','268px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['299px', '59px','200px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['308px', '64px','190px','30px','auto', 'auto'],
                text: "Plan #1<br>",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 20, "rgba(0,0,0,1)", "300", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['299px', '109px','200px','157px','auto', 'auto'],
                text: mas[masind],
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 20, "rgba(0,0,0,1)", "300", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(39,255,53,0.60)'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
                ["style", "width", '-42px']
            ],
            "${_Ellipse}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "border-top-left-radius", [47.81,50.29], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [47.81,50.29], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["gradient", "background-image", [50,50,true,'closest-side',[['rgba(255,252,252,1.00)',0],['rgba(255,255,255,0.00)',0]]]],
                ["style", "left", '83px'],
                ["style", "width", '182px'],
                ["style", "border-bottom-left-radius", [47.81,50.29], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '173px'],
                ["style", "display", 'block'],
                ["style", "border-top-right-radius", [47.81,50.29], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',100],['rgba(255,255,255,0.00)',100]]]],
                ["style", "width", '761px']
            ],
            "${_Text2}": [
                ["style", "top", '280px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "width", '242px'],
                ["style", "font-weight", '300'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '299px'],
                ["style", "font-size", '20px']
            ],
            "${_Text4}": [
                ["style", "top", '59px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '307px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3250,
            autoPlay: false,
            timeline: [
                { id: "eid109", tween: [ "style", "${_Text2}", "left", '299px', { fromValue: '299px'}], position: 1500, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Ellipse}", "height", '173px', { fromValue: '173px'}], position: 536, duration: 0 },
                { id: "eid140", tween: [ "gradient", "${_Stage}", "background-image", [270,[['rgba(255,255,255,0.00)',100],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',100],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 0 },
                { id: "eid107", tween: [ "style", "${_Text2}", "font-size", '20px', { fromValue: '20px'}], position: 1633, duration: 0 },
                { id: "eid135", tween: [ "style", "${_Text4}", "left", '307px', { fromValue: '307px'}], position: 3250, duration: 0 },
                { id: "eid81", tween: [ "gradient", "${_Ellipse}", "background-image", [50,50,true,'closest-side',[['rgba(255,252,252,1.00)',66],['rgba(255,255,255,0.00)',87]]], { fromValue: [50,50,true,'closest-side',[['rgba(255,252,252,1.00)',0],['rgba(255,255,255,0.00)',0]]]}], position: 0, duration: 841 },
                { id: "eid82", tween: [ "gradient", "${_Ellipse}", "background-image", [50,50,true,'closest-side',[['rgba(255,252,252,1.00)',100],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'closest-side',[['rgba(255,252,252,1.00)',66],['rgba(255,255,255,0.00)',87]]]}], position: 841, duration: 159 },
                { id: "eid116", tween: [ "style", "${_Text2}", "top", '102px', { fromValue: '280px'}], position: 1500, duration: 500 },
                { id: "eid134", tween: [ "style", "${_Text4}", "top", '59px', { fromValue: '59px'}], position: 3250, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Ellipse}", "width", '182px', { fromValue: '182px'}], position: 536, duration: 0 },
                { id: "eid121", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid132", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0.000000'}], position: 1439, duration: 561 },
                { id: "eid119", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
                { id: "eid102", tween: [ "style", "${_Text2}", "width", '242px', { fromValue: '242px'}], position: 1633, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Ellipse}", "left", '83px', { fromValue: '83px'}], position: 536, duration: 0 },
                { id: "eid91", tween: [ "style", "${_Rectangle2}", "width", '242px', { fromValue: '-42px'}], position: 841, duration: 897 },
                { id: "eid92", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(39,255,53,0.60)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(39,255,53,0.60)'}], position: 3250, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-67923902");
