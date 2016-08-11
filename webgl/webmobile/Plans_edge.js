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
                id: 'circ',
                display: 'none',
                type: 'image',
                rect: ['15px', '-56px','50px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"circ.png",'0px','0px']
            },
            {
                id: 'circ4',
                display: 'none',
                type: 'image',
                rect: ['15px', '-56px','50px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"circ.png",'0px','0px']
            },
            {
                id: 'circ3',
                display: 'none',
                type: 'image',
                rect: ['15px', '-56px','50px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"circ.png",'0px','0px']
            },
            {
                id: 'circ2',
                display: 'none',
                type: 'image',
                rect: ['15px', '367px','50px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"circ.png",'0px','0px']
            },
            {
                id: 'circ1',
                display: 'none',
                type: 'image',
                rect: ['15px', '-56px','50px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"circ.png",'0px','0px']
            },
            {
                id: 'Text0',
                type: 'text',
                rect: ['74px', '14px','308px','50px','auto', 'auto'],
                text: "PLAN #1",
                font: ['Palatino Linotype, Book Antigua, Palatino, serif', 24, "rgba(0,0,0,1)", "600", "none", ""]
            },
            {
                id: 'Text1',
                type: 'text',
                rect: ['74px', '14px','308px','50px','auto', 'auto'],
                text: "10€/month",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['74px', '86px','308px','50px','auto', 'auto'],
                text: "unlimited calls",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['74px', '121px','308px','50px','auto', 'auto'],
                text: "100 sms",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['74px', '156px','308px','50px','auto', 'auto'],
                text: "free voice mail",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['74px', '191px','308px','50px','auto', 'auto'],
                text: "Internet connection:",
                align: "left",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "500", "none", ""]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['74px', '226px','308px','50px','auto', 'auto'],
                text: "unlimited MMS",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['74px', '261px','308px','50px','auto', 'auto'],
                text: "50MB for free",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['74px', '296px','308px','50px','auto', 'auto'],
                text: "1€ - 100MB/month",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['74px', '331px','308px','50px','auto', 'auto'],
                text: "3€ - 300MB/month",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['74px', '366px','308px','50px','auto', 'auto'],
                text: "5€ - 1GB/month",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text12',
                type: 'text',
                rect: ['74px', '401px','308px','50px','auto', 'auto'],
                text: "7€ - 2GB/month",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'RR2',
                type: 'rect',
                rect: ['28px', '144px','200px','78px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["19px 19px", "19px 19px", "19px 19px", "19px 19px"],
                fill: ["rgba(0,0,0,0.80)"],
                stroke: [1,"rgba(204,196,183,1.00)","solid"],
                boxShadow: ["inset", -1, -1, 0, 0, "rgba(207,207,205,1.00)"],
                c: [
                {
                    id: 'T2',
                    type: 'text',
                    rect: ['21px', '25px','159px','27px','auto', 'auto'],
                    text: "PLAN #2",
                    align: "center",
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1.00)", "normal", "none", ""]
                }]
            },
            {
                id: 'RR3',
                type: 'rect',
                rect: ['28px', '248px','200px','78px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["19px 19px", "19px 19px", "19px 19px", "19px 19px"],
                fill: ["rgba(0,0,0,0.80)"],
                stroke: [1,"rgba(204,196,183,1.00)","solid"],
                boxShadow: ["inset", -1, -1, 0, 0, "rgba(207,207,205,1.00)"],
                c: [
                {
                    id: 'T3',
                    type: 'text',
                    rect: ['21px', '25px','159px','27px','auto', 'auto'],
                    text: "PLAN #3",
                    align: "center",
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1.00)", "normal", "none", ""]
                }]
            },
            {
                id: 'RR4',
                type: 'rect',
                rect: ['28px', '356px','200px','78px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["19px 19px", "19px 19px", "19px 19px", "19px 19px"],
                fill: ["rgba(0,0,0,0.80)"],
                stroke: [1,"rgba(204,196,183,1.00)","solid"],
                boxShadow: ["inset", -1, -1, 0, 0, "rgba(207,207,205,1.00)"],
                c: [
                {
                    id: 'T4',
                    type: 'text',
                    rect: ['21px', '25px','159px','27px','auto', 'auto'],
                    text: "PLAN #4",
                    align: "center",
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1.00)", "normal", "none", ""]
                }]
            },
            {
                id: 'RR1',
                type: 'rect',
                rect: ['28px', '36px','200px','78px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["19px 19px", "19px 19px", "19px 19px", "19px 19px"],
                fill: ["rgba(0,0,0,0.80)"],
                stroke: [1,"rgba(204,196,183,1.00)","solid"],
                boxShadow: ["inset", -1, -1, 0, 0, "rgba(207,207,205,1.00)"],
                c: [
                {
                    id: 'T1',
                    type: 'text',
                    rect: ['21px', '25px','159px','27px','auto', 'auto'],
                    text: "PLAN #1",
                    align: "center",
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1.00)", "normal", "none", ""]
                }]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['4.5%', '92.4%','80.8%','0.8%','auto', 'auto'],
                fill: ["rgba(118,127,227,1.00)"],
                stroke: [0,"rgba(0,0,0,0.00)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_circ2}": [
                ["style", "top", '159px'],
                ["style", "width", '50px'],
                ["transform", "rotateZ", '-120deg'],
                ["style", "height", '50px'],
                ["style", "display", 'none'],
                ["style", "left", '249px'],
                ["subproperty", "filter.saturate", '1']
            ],
            "${_circ1}": [
                ["style", "top", '51px'],
                ["style", "width", '50px'],
                ["transform", "rotateZ", '-120deg'],
                ["style", "height", '50px'],
                ["style", "display", 'none'],
                ["style", "left", '249px'],
                ["subproperty", "filter.saturate", '1']
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
            "${_Text8}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-60deg'],
                ["color", "color", 'rgba(104,102,102,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '461px'],
                ["style", "width", '308px'],
                ["style", "top", '289px'],
                ["style", "height", '33px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif']
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
            "${_RR4}": [
                ["color", "background-color", 'rgba(0,0,0,0.8)'],
                ["style", "border-top-left-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgb(207,207,205)'],
                ["style", "border-bottom-right-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '1px'],
                ["style", "opacity", '0.800000011920929'],
                ["style", "cursor", 'pointer'],
                ["style", "border-top-right-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '356px'],
                ["style", "border-bottom-left-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '-1px'],
                ["style", "border-style", 'solid'],
                ["subproperty", "boxShadow.inset", 'inset'],
                ["color", "border-color", 'rgb(204, 196, 183)'],
                ["subproperty", "boxShadow.offsetH", '-1px'],
                ["style", "left", '28px']
            ],
            "${_T1}": [
                ["style", "top", '25px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '21px'],
                ["style", "height", '27px']
            ],
            "${_Text4}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-60deg'],
                ["color", "color", 'rgba(104,102,102,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '463px'],
                ["style", "width", '308px'],
                ["style", "top", '150px'],
                ["style", "height", '33px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif']
            ],
            "${_RR2}": [
                ["color", "background-color", 'rgba(0,0,0,0.80)'],
                ["style", "border-top-left-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(207,207,205,1.00)'],
                ["style", "border-bottom-right-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.8'],
                ["style", "cursor", 'pointer'],
                ["subproperty", "boxShadow.offsetV", '-1px'],
                ["style", "top", '144px'],
                ["style", "border-bottom-left-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '1px'],
                ["subproperty", "boxShadow.inset", 'inset'],
                ["style", "border-style", 'solid'],
                ["color", "border-color", 'rgba(204,196,183,1.00)'],
                ["subproperty", "boxShadow.offsetH", '-1px'],
                ["style", "border-top-right-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ]
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
            "${_T3}": [
                ["style", "top", '25px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
                ["style", "left", '21px'],
                ["style", "height", '27px']
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
            "${_Text10}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-60deg'],
                ["color", "color", 'rgba(104,102,102,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '463px'],
                ["style", "width", '308px'],
                ["style", "top", '360px'],
                ["style", "height", '33px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif']
            ],
            "${_Text9}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-60deg'],
                ["color", "color", 'rgba(104,102,102,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '463px'],
                ["style", "width", '308px'],
                ["style", "top", '325px'],
                ["style", "height", '33px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif']
            ],
            "${_RR3}": [
                ["color", "background-color", 'rgba(0,0,0,0.8)'],
                ["style", "border-top-left-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgb(207,207,205)'],
                ["style", "border-bottom-right-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '28px'],
                ["style", "opacity", '0.800000011920929'],
                ["style", "cursor", 'pointer'],
                ["style", "border-top-right-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '248px'],
                ["style", "border-bottom-left-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.inset", 'inset'],
                ["color", "border-color", 'rgb(204, 196, 183)'],
                ["style", "border-style", 'solid'],
                ["subproperty", "boxShadow.offsetV", '-1px'],
                ["subproperty", "boxShadow.offsetH", '-1px'],
                ["style", "border-width", '1px']
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
            "${_Text2}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-60deg'],
                ["color", "color", 'rgba(104,102,102,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '463px'],
                ["style", "width", '308px'],
                ["style", "top", '80px'],
                ["style", "height", '33px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif']
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
            "${_T2}": [
                ["style", "top", '25px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '21px'],
                ["style", "height", '27px']
            ],
            "${_Text5}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-60deg'],
                ["color", "color", 'rgba(60,130,209,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '463px'],
                ["style", "width", '308px'],
                ["style", "top", '185px'],
                ["style", "text-align", 'left'],
                ["style", "height", '33px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["style", "font-weight", '500']
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
            "${_Text0}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-60deg'],
                ["color", "color", 'rgba(60,130,209,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '463px'],
                ["style", "width", '308px'],
                ["style", "top", '0px'],
                ["style", "height", '41px'],
                ["style", "font-family", 'Palatino Linotype, Book Antigua, Palatino, serif'],
                ["style", "font-size", '31px'],
                ["style", "font-weight", '600']
            ],
            "${_circ4}": [
                ["style", "top", '371px'],
                ["subproperty", "filter.saturate", '1'],
                ["transform", "rotateZ", '-120deg'],
                ["style", "height", '50px'],
                ["style", "display", 'none'],
                ["style", "left", '249px'],
                ["style", "width", '50px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(118,127,227,0.46)'],
                ["style", "left", '47.4%'],
                ["style", "width", '0%']
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
            ],
            "${_Text3}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-60deg'],
                ["color", "color", 'rgba(104,102,102,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '463px'],
                ["style", "width", '308px'],
                ["style", "top", '115px'],
                ["style", "height", '33px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif']
            ],
            "${_circ}": [
                ["style", "top", '368px'],
                ["style", "width", '50px'],
                ["transform", "rotateZ", '-120deg'],
                ["style", "height", '50px'],
                ["style", "display", 'none'],
                ["style", "left", '249px'],
                ["subproperty", "filter.saturate", '1']
            ],
            "${_Text1}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-60deg'],
                ["color", "color", 'rgba(104,102,102,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '461px'],
                ["style", "width", '308px'],
                ["style", "top", '47px'],
                ["style", "height", '33px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif']
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
            "${_Text7}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-60deg'],
                ["color", "color", 'rgba(104,102,102,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '463px'],
                ["style", "width", '308px'],
                ["style", "top", '255px'],
                ["style", "height", '33px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif']
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
            "${_Text6}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-60deg'],
                ["color", "color", 'rgba(104,102,102,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '463px'],
                ["style", "width", '308px'],
                ["style", "top", '220px'],
                ["style", "height", '33px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif']
            ],
            "${_circ3}": [
                ["style", "top", '263px'],
                ["style", "width", '50px'],
                ["transform", "rotateZ", '-120deg'],
                ["style", "height", '50px'],
                ["style", "display", 'none'],
                ["style", "left", '249px'],
                ["subproperty", "filter.saturate", '1']
            ],
            "${_Text12}": [
                ["style", "-webkit-transform-origin", [-11.74,54.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-11.74,54.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-60deg'],
                ["color", "color", 'rgba(104,102,102,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '463px'],
                ["style", "width", '308px'],
                ["style", "top", '395px'],
                ["style", "height", '33px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.001)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '850px']
            ],
            "${_T4}": [
                ["style", "top", '25px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
                ["style", "left", '21px'],
                ["style", "height", '27px']
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
            "${_RR1}": [
                ["color", "background-color", 'rgba(0,0,0,0.80)'],
                ["style", "border-top-left-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(207,207,205,1.00)'],
                ["style", "border-bottom-right-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '28px'],
                ["style", "opacity", '0.8'],
                ["style", "cursor", 'pointer'],
                ["style", "border-top-right-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '36px'],
                ["style", "border-bottom-left-radius", [19,19], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.inset", 'inset'],
                ["color", "border-color", 'rgba(204,196,183,1.00)'],
                ["style", "border-style", 'solid'],
                ["subproperty", "boxShadow.offsetV", '-1px'],
                ["subproperty", "boxShadow.offsetH", '-1px'],
                ["style", "border-width", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            timeline: [
                { id: "eid395", tween: [ "color", "${_Text2}", "color", 'rgba(104,102,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(104,102,102,1.00)'}], position: 3000, duration: 0 },
                { id: "eid406", tween: [ "style", "${_Text0}", "height", '41px', { fromValue: '41px'}], position: 3000, duration: 0 },
                { id: "eid408", tween: [ "color", "${_Text5}", "color", 'rgba(60,130,209,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(60,130,209,1.00)'}], position: 3000, duration: 0 },
                { id: "eid440", tween: [ "style", "${_circ4}", "top", '371px', { fromValue: '371px'}], position: 0, duration: 0 },
                { id: "eid308", tween: [ "style", "${_circ}", "left", '249px', { fromValue: '249px'}], position: 800, duration: 0 },
                { id: "eid307", tween: [ "style", "${_circ}", "left", '400px', { fromValue: '249px'}], position: 899, duration: 101 },
                { id: "eid53", tween: [ "style", "${_circ}", "left", '778px', { fromValue: '400px'}], position: 2750, duration: 250 },
                { id: "eid65", tween: [ "style", "${_Text0}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250 },
                { id: "eid292", tween: [ "style", "${_Text0}", "left", '463px', { fromValue: '463px'}], position: 3000, duration: 0 },
                { id: "eid390", tween: [ "style", "${_Text1}", "left", '461px', { fromValue: '461px'}], position: 3000, duration: 0 },
                { id: "eid403", tween: [ "color", "${_Text9}", "color", 'rgba(104,102,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(104,102,102,1.00)'}], position: 3000, duration: 0 },
                { id: "eid318", tween: [ "style", "${_Rectangle}", "width", '42.1%', { fromValue: '0%'}], position: 2750, duration: 250 },
                { id: "eid438", tween: [ "style", "${_circ2}", "top", '159px', { fromValue: '159px'}], position: 0, duration: 0 },
                { id: "eid371", tween: [ "style", "${_circ1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid400", tween: [ "style", "${_Text8}", "left", '461px', { fromValue: '461px'}], position: 3000, duration: 0 },
                { id: "eid261", tween: [ "transform", "${_Text5}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 1626, duration: 250 },
                { id: "eid376", tween: [ "style", "${_circ}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid377", tween: [ "style", "${_circ}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid270", tween: [ "style", "${_Text10}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 250 },
                { id: "eid394", tween: [ "color", "${_Text1}", "color", 'rgba(104,102,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(104,102,102,1.00)'}], position: 3000, duration: 0 },
                { id: "eid319", tween: [ "style", "${_Rectangle}", "left", '47.4%', { fromValue: '47.4%'}], position: 2750, duration: 0 },
                { id: "eid317", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(118,127,227,0.46)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(118,127,227,0.46)'}], position: 3000, duration: 0 },
                { id: "eid273", tween: [ "transform", "${_Text12}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 2376, duration: 250 },
                { id: "eid257", tween: [ "transform", "${_Text3}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 1376, duration: 250 },
                { id: "eid176", tween: [ "style", "${_Text1}", "opacity", '1', { fromValue: '0'}], position: 1126, duration: 250 },
                { id: "eid405", tween: [ "color", "${_Text12}", "color", 'rgba(104,102,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(104,102,102,1.00)'}], position: 3000, duration: 0 },
                { id: "eid401", tween: [ "style", "${_Text8}", "top", '289px', { fromValue: '289px'}], position: 3000, duration: 0 },
                { id: "eid393", tween: [ "color", "${_Text0}", "color", 'rgba(60,130,209,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(60,130,209,1.00)'}], position: 3000, duration: 0 },
                { id: "eid398", tween: [ "color", "${_Text6}", "color", 'rgba(104,102,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(104,102,102,1.00)'}], position: 3000, duration: 0 },
                { id: "eid374", tween: [ "style", "${_circ3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid399", tween: [ "color", "${_Text7}", "color", 'rgba(104,102,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(104,102,102,1.00)'}], position: 3000, duration: 0 },
                { id: "eid253", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
                { id: "eid272", tween: [ "style", "${_Text12}", "opacity", '1', { fromValue: '0'}], position: 2376, duration: 250 },
                { id: "eid396", tween: [ "color", "${_Text3}", "color", 'rgba(104,102,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(104,102,102,1.00)'}], position: 3000, duration: 0 },
                { id: "eid259", tween: [ "transform", "${_Text4}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 1500, duration: 250 },
                { id: "eid258", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
                { id: "eid175", tween: [ "transform", "${_Text1}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 1126, duration: 250 },
                { id: "eid264", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 1876, duration: 250 },
                { id: "eid402", tween: [ "color", "${_Text8}", "color", 'rgba(104,102,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(104,102,102,1.00)'}], position: 3000, duration: 0 },
                { id: "eid437", tween: [ "style", "${_circ1}", "top", '51px', { fromValue: '51px'}], position: 0, duration: 0 },
                { id: "eid392", tween: [ "style", "${_Text0}", "font-size", '31px', { fromValue: '31px'}], position: 3000, duration: 0 },
                { id: "eid373", tween: [ "style", "${_circ2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid268", tween: [ "style", "${_Text9}", "opacity", '1', { fromValue: '0'}], position: 2126, duration: 250 },
                { id: "eid263", tween: [ "transform", "${_Text6}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 1750, duration: 250 },
                { id: "eid104", tween: [ "subproperty", "${_circ}", "filter.saturate", '1', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid102", tween: [ "subproperty", "${_circ}", "filter.saturate", '1', { fromValue: '1'}], position: 2750, duration: 0 },
                { id: "eid375", tween: [ "style", "${_circ4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid391", tween: [ "style", "${_Text1}", "top", '47px', { fromValue: '47px'}], position: 3000, duration: 0 },
                { id: "eid407", tween: [ "style", "${_Text0}", "top", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
                { id: "eid60", tween: [ "transform", "${_Text0}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 1000, duration: 250 },
                { id: "eid266", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
                { id: "eid265", tween: [ "transform", "${_Text7}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 1876, duration: 250 },
                { id: "eid252", tween: [ "transform", "${_Text2}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 1250, duration: 250 },
                { id: "eid315", tween: [ "style", "${_circ}", "top", '263px', { fromValue: '368px'}], position: 500, duration: 101 },
                { id: "eid313", tween: [ "style", "${_circ}", "top", '156px', { fromValue: '263px'}], position: 601, duration: 98 },
                { id: "eid312", tween: [ "style", "${_circ}", "top", '49px', { fromValue: '156px'}], position: 699, duration: 101 },
                { id: "eid310", tween: [ "style", "${_circ}", "top", '1px', { fromValue: '49px'}], position: 800, duration: 99 },
                { id: "eid306", tween: [ "style", "${_circ}", "top", '3px', { fromValue: '1px'}], position: 899, duration: 101 },
                { id: "eid40", tween: [ "style", "${_circ}", "top", '437px', { fromValue: '3px'}], position: 1000, duration: 1750 },
                { id: "eid112", tween: [ "style", "${_circ}", "top", '432px', { fromValue: '437px'}], position: 2750, duration: 250 },
                { id: "eid323", tween: [ "transform", "${_circ}", "rotateZ", '-60deg', { fromValue: '-120deg'}], position: 500, duration: 250 },
                { id: "eid321", tween: [ "transform", "${_circ}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 750, duration: 250 },
                { id: "eid43", tween: [ "transform", "${_circ}", "rotateZ", '60deg', { fromValue: '0deg'}], position: 1000, duration: 250 },
                { id: "eid44", tween: [ "transform", "${_circ}", "rotateZ", '240deg', { fromValue: '60deg'}], position: 1250, duration: 250 },
                { id: "eid45", tween: [ "transform", "${_circ}", "rotateZ", '420deg', { fromValue: '240deg'}], position: 1500, duration: 250 },
                { id: "eid46", tween: [ "transform", "${_circ}", "rotateZ", '600deg', { fromValue: '420deg'}], position: 1750, duration: 250 },
                { id: "eid47", tween: [ "transform", "${_circ}", "rotateZ", '780deg', { fromValue: '600deg'}], position: 2000, duration: 250 },
                { id: "eid48", tween: [ "transform", "${_circ}", "rotateZ", '960deg', { fromValue: '780deg'}], position: 2250, duration: 250 },
                { id: "eid49", tween: [ "transform", "${_circ}", "rotateZ", '1140deg', { fromValue: '960deg'}], position: 2500, duration: 250 },
                { id: "eid50", tween: [ "transform", "${_circ}", "rotateZ", '1380deg', { fromValue: '1140deg'}], position: 2750, duration: 250 },
                { id: "eid262", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 250 },
                { id: "eid267", tween: [ "transform", "${_Text8}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 2000, duration: 250 },
                { id: "eid256", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 1376, duration: 250 },
                { id: "eid269", tween: [ "transform", "${_Text9}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 2126, duration: 250 },
                { id: "eid404", tween: [ "color", "${_Text10}", "color", 'rgba(104,102,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(104,102,102,1.00)'}], position: 3000, duration: 0 },
                { id: "eid439", tween: [ "style", "${_circ3}", "top", '263px', { fromValue: '263px'}], position: 0, duration: 0 },
                { id: "eid260", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 1626, duration: 250 },
                { id: "eid397", tween: [ "color", "${_Text4}", "color", 'rgba(104,102,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(104,102,102,1.00)'}], position: 3000, duration: 0 },
                { id: "eid271", tween: [ "transform", "${_Text10}", "rotateZ", '0deg', { fromValue: '-60deg'}], position: 2250, duration: 250 }            ]
        }
    }
},

};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "Plans");
