sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "./LocalStorageUtil"
], function(Controller, JSONModel, LocalStorageUtil) {
    "use strict";

    return Controller.extend("demo.todo.controller.App", {
        onInit : function() {
            var oView = this.getView();
            var oModel = new JSONModel();
            
            this.store = new LocalStorageUtil("todos");
            
            var data = null;
            if(this.store.isEmpty()) {
                data = this.store.set({
                    todos: []
                }).get();
                oModel.setProperty("/", data);
            } else {
                data = this.store.get();
                oModel.setProperty("/todos", data);
            }
            
            oView.setModel(oModel);

            this._pFnAttachDblClickToInput();
        },

        onAfterRendering : function() {
            var oView = this.getView();
            var oList = oView.byId("todoList");
            var aInputElements = $(".sapMListUl .sapMInput .sapMInputBaseInner");
            Array.prototype.forEach.call(aInputElements, function(oInput) {
                oInput.addEventListener("dblclick", function() {
                    
                });
            })
        },

        onAddTodo : function() {
            var oView = this.getView();
            var oModel = oView.getModel();
            var aTodos = oModel.getData().todos;
            var sNewTodo = oModel.getProperty("/addTodo");
            if(!sNewTodo.trim()) {
                return;
            }
            aTodos.push({
				id: jQuery.sap.uid(),
				done: false,
				text: sNewTodo
			});

            oModel.setProperty("/addTodo", "");
            this.store.set(aTodo);
        },

        onSelectSingle : function(oEvent) {
            var oView = this.getView();
            var oModel = oView.getModel();
            // var oSelectedList = oEvent.getSource().getParent();
            var sPath = oEvent.getSource().getBindingContext().getPath();
            var iSelectedIndex = sPath.slice(-1);
            var aTodos = oModel.getData().todos;

            if(oEvent.getParameter("selected") === true) {
                aTodos[iSelectedIndex].done = true;
            } else {
                aTodos[iSelectedIndex].done = false;
            }

            oModel.refresh(true);
            this.store.set(aTodos);

            


        },

        onRename : function() {

        },

        onRenameDone : function(oEvent) {

        },

        _pFnAttachDblClickToInput : function() {
            
        }
    })
});