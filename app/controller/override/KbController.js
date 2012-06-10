Ext.define( 'Wiztalk.controller.override.KbController', 
            {  requires: 'Wiztalk.controller.KbController' }, 
            function() {
			Ext.override(Wiztalk.controller.KbController, 
						{
                                config: { 
                                    control: {
                                        "#kbButton1": {
                                            tap: 'onKbButtonTap'
                                        }
                                    }
                                },
                                onKbButtonTap: function(button, e, options) {
                                        console.log("buton1 tapped");
                                }
                         } // overriding object as second param
    );
});		