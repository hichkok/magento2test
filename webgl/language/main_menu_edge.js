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
                id: 'RoundRect2',
                type: 'rect',
                rect: ['50%', '3%','50%','93.9%','auto', 'auto'],
                borderRadius: ["5% 5%", "0% 0%", "0% 0%", "5% 5%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                c: [
                {
                    id: 'britain',
                    type: 'image',
                    rect: ['2.3%', '23.3%','13.2%','9.9%','auto', 'auto'],
                    cursor: ['pointer'],
                    borderRadius: ["0px", "0px", "0px", "0px"],
                    opacity: 0.96000001907349,
                    fill: ["rgba(0,0,0,0)",im+"britain.jpg",'0px','0px'],
                    boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                },
                {
                    id: 'france',
                    type: 'image',
                    rect: ['2.3%', '6.8%','13.2%','9.9%','auto', 'auto'],
                    cursor: ['pointer'],
                    borderRadius: ["0px", "0px", "0px", "0px"],
                    fill: ["rgba(0,0,0,0)",im+"france.jpg",'0px','0px'],
                    boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                },
                {
                    id: 'germany',
                    type: 'image',
                    rect: ['2.3%', '39.9%','13.2%','9.9%','auto', 'auto'],
                    cursor: ['pointer'],
                    borderRadius: ["0px", "0px", "0px", "0px"],
                    fill: ["rgba(0,0,0,0)",im+"germany.jpg",'0px','0px'],
                    boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                },
                {
                    id: 'italy',
                    type: 'image',
                    rect: ['2.3%', '73%','13.2%','9.9%','auto', 'auto'],
                    cursor: ['pointer'],
                    borderRadius: ["0px", "0px", "0px", "0px"],
                    fill: ["rgba(0,0,0,0)",im+"italy.jpg",'0px','0px'],
                    boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                },
                {
                    id: 'spain',
                    type: 'image',
                    rect: ['2.3%', '56.5%','13.2%','9.9%','auto', 'auto'],
                    cursor: ['pointer'],
                    borderRadius: ["0px", "0px", "0px", "0px"],
                    fill: ["rgba(0,0,0,0)",im+"spain.jpg",'0px','0px'],
                    boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                },
                {
                    id: 'contacts',
                    type: 'image',
                    rect: ['2.3%', '87.9%','13.2%','7.5%','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"Contacts.png",'0px','0px']
                },
                {
                    id: 'Text_1',
                    type: 'text',
                    rect: ['26.1%', '6%','68.1%','9.9%','auto', 'auto'],
                    text: "English",
                    font: ['Arial, Helvetica, sans-serif', [312.5, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'Text_2',
                    type: 'text',
                    rect: ['25.3%', '21.7%','68.1%','9.9%','auto', 'auto'],
                    text: "Course description",
                    font: ['Arial, Helvetica, sans-serif', [250, "%"], "rgba(0,0,0,1)", "normal", "none", ""]
                },
                {
                    id: 'Rectangle5',
                    type: 'rect',
                    rect: ['19%', '5%','0.7%','91.3%','auto', 'auto'],
                    borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                    fill: ["rgba(63,61,61,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_italy}": [
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '2.34%'],
                ["style", "width", '13.17%'],
                ["style", "top", '73.01%'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "height", '9.93%'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "cursor", 'pointer']
            ],
            "${_RoundRect2}": [
                ["style", "top", '2.95%'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["color", "background-color", 'rgba(192,192,192,0.60)'],
                ["style", "height", '93.93%'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '91.22%'],
                ["style", "width", '50%']
            ],
            "${_Text_2}": [
                ["style", "top", '21.69%'],
                ["style", "height", '9.93%'],
                ["style", "width", '68.09%'],
                ["style", "left", '25.33%'],
                ["style", "font-size", '250%']
            ],
            "${_britain}": [
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "opacity", '0.96000001907349'],
                ["style", "left", '2.34%'],
                ["style", "width", '13.18%'],
                ["style", "top", '23.34%'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "height", '9.93%'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "cursor", 'pointer']
            ],
            "${_contacts}": [
                ["style", "top", '87.91%'],
                ["style", "height", '7.5%'],
                ["style", "left", '2.27%'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '13.17%']
            ],
            "${_france}": [
                ["subproperty", "boxShadow.inset", ''],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '2.34%'],
                ["style", "width", '13.17%'],
                ["style", "top", '6.79%'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "height", '9.93%'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "cursor", 'pointer']
            ],
            "${_germany}": [
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '2.34%'],
                ["style", "width", '13.17%'],
                ["style", "top", '39.9%'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "height", '9.93%'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(42,47,184,0.00)'],
                ["style", "width", '100%'],
                ["style", "height", '100%'],
                ["style", "overflow", 'hidden']
            ],
            "${_spain}": [
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '2.34%'],
                ["style", "width", '13.17%'],
                ["style", "top", '56.46%'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "height", '9.93%'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(63,61,61,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '0.74%'],
                ["style", "top", '4.97%'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '91.34%'],
                ["style", "left", '18.96%']
            ],
            "${_Text_1}": [
                ["style", "top", '5.96%'],
                ["style", "width", '68.09%'],
                ["style", "height", '9.93%'],
                ["style", "font-weight", '700'],
                ["style", "left", '26.06%'],
                ["style", "font-size", '312.5%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid20", tween: [ "color", "${_RoundRect2}", "background-color", 'rgba(192,192,192,0.60)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,0.60)'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_RoundRect2}", "top", '2.95%', { fromValue: '2.95%'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_RoundRect2}", "left", '50%', { fromValue: '91.22%'}], position: 0, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "main_menu");
