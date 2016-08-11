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
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['4.5%', '92.4%','80.8%','0.8%','auto', 'auto'],
                fill: ["rgba(118,127,227,1.00)"],
                stroke: [0,"rgba(0,0,0,0.00)","none"]
            },
            {
                id: 'circ',
                type: 'image',
                rect: ['3.8%', '-11.2%','12.5%','10%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"circ.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['18.5%', '2.8%','77%','10%','auto', 'auto'],
                text: namemas[globalIndex],
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "600", "none", ""]
            },
            {
                id: 'TextCopy12',
                type: 'text',
                rect: ['18.5%', '2.8%','77%','10%','auto', 'auto'],
                text: "system: "+systemmas[globalIndex],
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy34',
                type: 'text',
                rect: ['18.5%', '17.1%','77%','10%','auto', 'auto'],
                text: "screen size: "+screenmas[globalIndex],
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy45',
                type: 'text',
                rect: ['18.5%', '24.1%','77%','10%','auto', 'auto'],
                text: "resolution:" +resolutionmas[globalIndex]+"px",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy46',
                type: 'text',
                rect: ['18.5%', '31.1%','77%','10%','auto', 'auto'],
                text: "size: "+sizemas[globalIndex]+"mm",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy47',
                type: 'text',
                rect: ['18.5%', '38.1%','77%','10%','auto', 'auto'],
                text: "weight: "+weightmas[globalIndex]+"g",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy48',
                type: 'text',
                rect: ['18.5%', '45.1%','77%','10%','auto', 'auto'],
                text: "CPU: "+cpumas[globalIndex]+"GHz",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy49',
                type: 'text',
                rect: ['18.5%', '52.1%','77%','10%','auto', 'auto'],
                text: "RAM: "+rammas[globalIndex]+"MB",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy50',
                type: 'text',
                rect: ['18.5%', '59.1%','77%','10%','auto', 'auto'],
                text: "Memory: "+memorymas[globalIndex]+"MB",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy51',
                type: 'text',
                rect: ['18.5%', '66.1%','77%','10%','auto', 'auto'],
                text: "camera: "+cammas[globalIndex]+"MP",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy52',
                type: 'text',
                rect: ['18.5%', '73.1%','77%','10%','auto', 'auto'],
                text: "Standby Time: "+stimemas[globalIndex]+"h",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy25',
                type: 'text',
                rect: ['18.5%', '80.1%','77%','10%','auto', 'auto'],
                text: "Talk Time: "+ttimemas[globalIndex]+"h",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_TextCopy34}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '17.1%'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy36}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '22%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '1'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy23}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '15.1%'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '18.43%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy47}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '38.1%'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy39}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '40%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '1'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy41}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '52%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '1'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy48}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '45.1%'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy22}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '20%'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '18.43%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy52}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '73.1%'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy51}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '66.1%'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy25}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '80.1%'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(118,127,227,0.46)'],
                ["style", "width", '0%']
            ],
            "${_TextCopy49}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '52.1%'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy50}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '59.1%'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_circ}": [
                ["style", "top", '-11.2%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '10%'],
                ["style", "width", '12.5%'],
                ["style", "left", '3.75%'],
                ["subproperty", "filter.saturate", '1']
            ],
            "${_TextCopy45}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '24.1%'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy43}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '64%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '1'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy12}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '10.1%'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy40}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '46%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '1'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy37}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '28%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '1'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy44}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '70%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '1'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy13}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '10.1%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '1'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy42}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '58%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '1'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_Text}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-60deg'],
                ["style", "opacity", '0'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%'],
                ["style", "top", '2.8%'],
                ["style", "height", '6.53%'],
                ["style", "font-size", '26px'],
                ["style", "font-weight", '600']
            ],
            "${_TextCopy38}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '34%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '1'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.4)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '400px']
            ],
            "${_TextCopy24}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '10.1%'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '18.43%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy46}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '31.1%'],
                ["transform", "rotateZ", '-60deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ],
            "${_TextCopy35}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '16.1%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '6.53%'],
                ["style", "opacity", '1'],
                ["style", "left", '18.5%'],
                ["style", "width", '77%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid258", tween: [ "style", "${_TextCopy46}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid270", tween: [ "style", "${_TextCopy52}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
                { id: "eid177", tween: [ "style", "${_TextCopy12}", "top", '10.1%', { fromValue: '10.1%'}], position: 376, duration: 0 },
                { id: "eid275", tween: [ "style", "${_Text}", "font-size", '26px', { fromValue: '26px'}], position: 2000, duration: 0 },
                { id: "eid264", tween: [ "style", "${_TextCopy49}", "opacity", '1', { fromValue: '0'}], position: 876, duration: 250 },
                { id: "eid109", tween: [ "style", "${_Rectangle}", "width", '77%', { fromValue: '0%'}], position: 1750, duration: 250 },
                { id: "eid257", tween: [ "transform", "${_TextCopy45}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 376, duration: 250 },
                { id: "eid267", tween: [ "transform", "${_TextCopy50}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 1000, duration: 250 },
                { id: "eid271", tween: [ "transform", "${_TextCopy52}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 1250, duration: 250 },
                { id: "eid268", tween: [ "style", "${_TextCopy51}", "opacity", '1', { fromValue: '0'}], position: 1126, duration: 250 },
                { id: "eid65", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid256", tween: [ "style", "${_TextCopy45}", "opacity", '1', { fromValue: '0'}], position: 376, duration: 250 },
                { id: "eid262", tween: [ "style", "${_TextCopy48}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
                { id: "eid53", tween: [ "style", "${_circ}", "left", '80.5%', { fromValue: '3.75%'}], position: 1750, duration: 250 },
                { id: "eid273", tween: [ "transform", "${_TextCopy25}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 1376, duration: 250 },
                { id: "eid111", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(118,127,227,0.46)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(118,127,227,0.46)'}], position: 2000, duration: 0 },
                { id: "eid263", tween: [ "transform", "${_TextCopy48}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 750, duration: 250 },
                { id: "eid272", tween: [ "style", "${_TextCopy25}", "opacity", '1', { fromValue: '0'}], position: 1376, duration: 250 },
                { id: "eid261", tween: [ "transform", "${_TextCopy47}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 626, duration: 250 },
                { id: "eid176", tween: [ "style", "${_TextCopy12}", "opacity", '1', { fromValue: '0'}], position: 126, duration: 250 },
                { id: "eid252", tween: [ "transform", "${_TextCopy34}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 250, duration: 250 },
                { id: "eid260", tween: [ "style", "${_TextCopy47}", "opacity", '1', { fromValue: '0'}], position: 626, duration: 250 },
                { id: "eid60", tween: [ "transform", "${_Text}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 0, duration: 250 },
                { id: "eid40", tween: [ "style", "${_circ}", "top", '87.4%', { fromValue: '-11.2%'}], position: 0, duration: 1750 },
                { id: "eid112", tween: [ "style", "${_circ}", "top", '87.6%', { fromValue: '87.4%'}], position: 1750, duration: 250 },
                { id: "eid104", tween: [ "subproperty", "${_circ}", "filter.saturate", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid102", tween: [ "subproperty", "${_circ}", "filter.saturate", '1', { fromValue: '1'}], position: 1750, duration: 0 },
                { id: "eid43", tween: [ "transform", "${_circ}", "rotateZ", '60deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid44", tween: [ "transform", "${_circ}", "rotateZ", '240deg', { fromValue: '60deg'}], position: 250, duration: 250 },
                { id: "eid45", tween: [ "transform", "${_circ}", "rotateZ", '420deg', { fromValue: '240deg'}], position: 500, duration: 250 },
                { id: "eid46", tween: [ "transform", "${_circ}", "rotateZ", '600deg', { fromValue: '420deg'}], position: 750, duration: 250 },
                { id: "eid47", tween: [ "transform", "${_circ}", "rotateZ", '780deg', { fromValue: '600deg'}], position: 1000, duration: 250 },
                { id: "eid48", tween: [ "transform", "${_circ}", "rotateZ", '960deg', { fromValue: '780deg'}], position: 1250, duration: 250 },
                { id: "eid49", tween: [ "transform", "${_circ}", "rotateZ", '1140deg', { fromValue: '960deg'}], position: 1500, duration: 250 },
                { id: "eid50", tween: [ "transform", "${_circ}", "rotateZ", '1380deg', { fromValue: '1140deg'}], position: 1750, duration: 250 },
                { id: "eid269", tween: [ "transform", "${_TextCopy51}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 1126, duration: 250 },
                { id: "eid259", tween: [ "transform", "${_TextCopy46}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 500, duration: 250 },
                { id: "eid175", tween: [ "transform", "${_TextCopy12}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 126, duration: 250 },
                { id: "eid253", tween: [ "style", "${_TextCopy34}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
                { id: "eid266", tween: [ "style", "${_TextCopy50}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250 },
                { id: "eid265", tween: [ "transform", "${_TextCopy49}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 876, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "Model_Description");
