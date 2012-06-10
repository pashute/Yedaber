Ext.define( 'Wiztalk.controller.override.KbController', 
            {  requires: 'Wiztalk.controller.KbController' }, 
            function() {
			Ext.override(Wiztalk.controller.KbController, 
						{
                                config: { 
                                    control: {
                                                "#kbButton1": {
                                                    tap: function(button, e, options){ alert("1 pressed"); }
                                                },
                                                "#kbButton2": {
                                                    tap: 'onKbButtonTap'
                                                },
                                                "#kbButton3": {
                                                    tap: 'onKbButtonTap'
                                                },
                                                "#kbButton4": {
                                                    tap: 'onKbButtonTap'
                                                },
                                                "#kbButton5": {
                                                    tap: 'onKbButtonTap'
                                                },
                                                "#kbButton6": {
                                                    tap: 'onKbButtonTap'
                                                },
                                                "#kbButton7": {
                                                    tap: 'onKbButtonTap'
                                                },
                                                "#kbButton8": {
                                                    tap: 'onKbButtonTap'
                                                },
                                                "#kbButton9": {
                                                    tap: 'onKbButtonTap'
                                                },
                                                "#kbButton0": {
                                                    tap: 'onKbButtonTap',
                                                    taphold: 'onKbButtonTapHold'
                                                },
                                                "#kbButtonStar": {
                                                    tap: 'onKbButtonTap',
                                                    taphold: 'onKbButtonTapHold'
                                                },
                                                "#kbButtonHash": {
                                                    tap: 'onKbButtonTap',
                                                    taphold: 'onKbButtonTapHold'
                                                },
                                                "#kbButtonDel": {
                                                    tap: 'onKbButtonDel'
                                                },
                                                "#kbButtonCompareOrAddContact": {
                                                    tap: 'onKbButtonCompare'
                                                },
                                                "#kbButtonSend": {
                                                    tap: 'onKbButtonSend'
                                                }
                                            }                                
                                },
                                onKbButtonTap: function(button, e, options) {
                                        console.log("buton tapped");
                                },
                            onKbButtonTapHold: function(button, e, options) {
                                        console.log("button long tap");
                            }, 
                            onKbButtonCompare: function(button, e, options) {
                                console.log("compare pressed");
                            }, 
                            onKbButtonDel: function(button, e, options) {
                                console.log("del pressed");
                            }, 
                            onKbButtonSend: function(button, e, options) {
                                console.log("send pressed");
                            }
                            
                         } // overriding object as second param
    );
});		