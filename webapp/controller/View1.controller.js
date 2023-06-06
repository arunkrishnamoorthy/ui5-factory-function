sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("exercise6.controller.View1", {
            onInit: function () {
                const oModel1 = new JSONModel({
                    data: [{
                        text: "Sample Text",
                        quantity: 3
                    },
                    {
                        text: "Sample Text",
                        quantity: 4
                    }]
                })
                this.getView().setModel(oModel1,"model1")
                const oModel2 = new JSONModel({
                    data: [
                        { text: "1" , key: "1" },
                        { text: "2" , key: "2" },
                        { text: "3" , key: "3" },
                        { text: "4" , key: "4" },
                        { text: "5" , key: "5" },
                        { text: "6" , key: "6" },
                    ]
                })
                this.getView().setModel(oModel2,"model2");
            },

            factoryHandler: function(sId,oContext){
                var oFragment = sap.ui.xmlfragment(sId,"exercise6.fragments.template",this);
                oFragment.setBindingContext(oContext,"model1");
                var oSelect = sap.ui.core.Fragment.byId(sId,"idSelect"); 
                var oTemplate = new sap.ui.core.Item({
                    key: "{model2>key}",
                    text: "{model2>text}"
                });
                var aFilters = [new sap.ui.model.Filter("key", "LE", oContext.getObject()?.quantity )]
                oSelect.bindItems({ path: 'model2>/data', template: oTemplate, templateShareable: false, filters: aFilters })
                return oFragment;
            }
        });
    });
