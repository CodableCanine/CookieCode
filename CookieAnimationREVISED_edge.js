/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cookieL',
                            display: 'none',
                            type: 'image',
                            rect: ['68px', '0px', '309px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cookieL.svg",'0px','0px']
                        },
                        {
                            id: 'CookieFULL',
                            display: 'block',
                            type: 'image',
                            rect: ['115px', '0px', '309px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CookieFULL.svg",'0px','0px']
                        },
                        {
                            id: 'cookieR',
                            display: 'none',
                            type: 'image',
                            rect: ['327px', '-9px', '309px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cookieR.svg",'0px','0px']
                        },
                        {
                            id: 'Crumb1',
                            display: 'none',
                            type: 'image',
                            rect: ['175px', '-112px', '405px', '524px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Crumb1.svg",'0px','0px']
                        },
                        {
                            id: 'Crumb2',
                            type: 'image',
                            rect: ['241px', '-61px', '260px', '336px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Crumb2.svg",'0px','0px']
                        },
                        {
                            id: 'Crumb2Copy',
                            type: 'image',
                            rect: ['153px', '3px', '260px', '336px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Crumb2.svg",'0px','0px'],
                            transform: [[],['42']]
                        },
                        {
                            id: 'Crumb2Copy2',
                            type: 'image',
                            rect: ['76px', '-45px', '522px', '521px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Crumb2.svg",'0px','0px'],
                            transform: [[],['42']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: [""]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid15",
                            "display",
                            0,
                            0,
                            "linear",
                            "${CookieFULL}",
                            'block',
                            'block'
                        ],
                        [
                            "eid16",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${CookieFULL}",
                            'block',
                            'none'
                        ],
                        [
                            "eid88",
                            "top",
                            1000,
                            40,
                            "linear",
                            "${cookieL}",
                            '-9px',
                            '0px'
                        ],
                        [
                            "eid89",
                            "top",
                            1040,
                            65,
                            "linear",
                            "${cookieL}",
                            '0px',
                            '-17px'
                        ],
                        [
                            "eid90",
                            "top",
                            1105,
                            40,
                            "linear",
                            "${cookieL}",
                            '-17px',
                            '0px'
                        ],
                        [
                            "eid68",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Crumb1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Crumb1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cookieL}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${cookieL}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1",
                            "left",
                            1000,
                            105,
                            "linear",
                            "${cookieR}",
                            '162px',
                            '192px'
                        ],
                        [
                            "eid75",
                            "left",
                            1105,
                            40,
                            "linear",
                            "${cookieR}",
                            '192px',
                            '199px'
                        ],
                        [
                            "eid77",
                            "left",
                            1145,
                            60,
                            "linear",
                            "${cookieR}",
                            '199px',
                            '249px'
                        ],
                        [
                            "eid79",
                            "left",
                            1205,
                            795,
                            "linear",
                            "${cookieR}",
                            '249px',
                            '327px'
                        ],
                        [
                            "eid25",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Crumb1}",
                            '524px',
                            '524px'
                        ],
                        [
                            "eid14",
                            "top",
                            0,
                            0,
                            "linear",
                            "${CookieFULL}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid45",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Crumb2Copy}",
                            '153px',
                            '153px'
                        ],
                        [
                            "eid39",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Crumb2Copy}",
                            '260px',
                            '260px'
                        ],
                        [
                            "eid12",
                            "left",
                            0,
                            0,
                            "linear",
                            "${CookieFULL}",
                            '115px',
                            '115px'
                        ],
                        [
                            "eid59",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Crumb2Copy2}",
                            '521px',
                            '521px'
                        ],
                        [
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cookieR}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${cookieR}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Crumb2Copy2}",
                            '76px',
                            '76px'
                        ],
                        [
                            "eid31",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Crumb2}",
                            '260px',
                            '260px'
                        ],
                        [
                            "eid44",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${Crumb2Copy}",
                            '42deg',
                            '42deg'
                        ],
                        [
                            "eid28",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Crumb1}",
                            '-112px',
                            '-112px'
                        ],
                        [
                            "eid36",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Crumb2Copy}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid11",
                            "width",
                            0,
                            0,
                            "linear",
                            "${CookieFULL}",
                            '309px',
                            '309px'
                        ],
                        [
                            "eid26",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Crumb1}",
                            '405px',
                            '405px'
                        ],
                        [
                            "eid69",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Crumb2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Crumb2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid48",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Crumb2}",
                            '-61px',
                            '-61px'
                        ],
                        [
                            "eid78",
                            "top",
                            1000,
                            40,
                            "linear",
                            "${cookieR}",
                            '-9px',
                            '0px'
                        ],
                        [
                            "eid80",
                            "top",
                            1040,
                            65,
                            "linear",
                            "${cookieR}",
                            '0px',
                            '-17px'
                        ],
                        [
                            "eid81",
                            "top",
                            1105,
                            40,
                            "linear",
                            "${cookieR}",
                            '-17px',
                            '0px'
                        ],
                        [
                            "eid64",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Crumb2Copy2}",
                            '-45px',
                            '-45px'
                        ],
                        [
                            "eid62",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Crumb2Copy2}",
                            '522px',
                            '522px'
                        ],
                        [
                            "eid29",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Crumb2}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid10",
                            "height",
                            0,
                            0,
                            "linear",
                            "${CookieFULL}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid47",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Crumb2}",
                            '241px',
                            '241px'
                        ],
                        [
                            "eid50",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${Crumb2Copy2}",
                            '42deg',
                            '42deg'
                        ],
                        [
                            "eid46",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Crumb2Copy}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid73",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Crumb2Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Crumb2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid71",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Crumb2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid72",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Crumb2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid27",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Crumb1}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid3",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${cookieL}",
                            '68px',
                            '-91px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("CookieAnimationREVISED_edgeActions.js");
})("EDGE-252473303");
