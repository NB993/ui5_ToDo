sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel",
], function(UIComponent) {
    "use strict";

    return UIComponent.extend("demo.todo.Component", {
        metadata : {
            manifest : "json"
        },
        
        init : function() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

        }
    });
});