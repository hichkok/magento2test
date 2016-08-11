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
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Text',
                type: 'text',
                rect: ['281px', '281px','364px','64px','auto', 'auto'],
                text: "Loading",
                align: "center",
                font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', 50, "rgba(192,192,192,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['257px', '70px','283px','179px','auto', 'auto'],
                text: "P&amp;P",
                align: "center",
                font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', 154, "rgba(192,192,192,1.00)", "normal", "none", ""]
            },
            {
                id: 'Ellipse',
                display: 'none',
                type: 'ellipse',
                rect: ['503px', '328px','7px','7px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'EllipseCopy',
                display: 'none',
                type: 'ellipse',
                rect: ['518px', '328px','7px','7px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'EllipseCopy2',
                display: 'none',
                type: 'ellipse',
                rect: ['533px', '328px','7px','7px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '281px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "text-align", 'center'],
                ["style", "font-size", '50px'],
                ["color", "color", 'rgba(192,192,192,1.00)'],
                ["style", "font-family", 'Lucida Sans Unicode, Lucida Grande, sans-serif'],
                ["style", "left", '281px'],
                ["style", "width", '193px']
            ],
            "${_TextCopy}": [
                ["style", "top", '70px'],
                ["style", "height", '179px'],
                ["style", "text-align", 'center'],
                ["style", "width", '283px'],
                ["color", "color", 'rgba(192,192,192,1.00)'],
                ["style", "font-family", 'Lucida Sans Unicode, Lucida Grande, sans-serif'],
                ["style", "left", '257px'],
                ["style", "font-size", '154px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '450px'],
                ["style", "width", '800px']
            ],
            "${_EllipseCopy}": [
                ["style", "display", 'none'],
                ["style", "top", '329px'],
                ["style", "left", '496px']
            ],
            "${_EllipseCopy2}": [
                ["style", "display", 'none'],
                ["style", "top", '329px'],
                ["style", "left", '511px']
            ],
            "${_Ellipse}": [
                ["style", "display", 'none'],
                ["style", "left", '481px'],
                ["style", "top", '329px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_EllipseCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_EllipseCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid3", tween: [ "style", "${_EllipseCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_EllipseCopy2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "Loading");
