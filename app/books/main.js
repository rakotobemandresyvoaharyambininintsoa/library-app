sap.ui.define([
  "sap/m/Table",
  "sap/m/Column",
  "sap/m/ColumnListItem",
  "sap/m/Text",
  "sap/m/Label",
  "sap/ui/model/odata/v4/ODataModel",
  "sap/m/App",
  "sap/m/Page"
], function (Table, Column, ColumnListItem, Text, Label, ODataModel, App, Page) {
  "use strict";

  var oModel = new ODataModel({
    serviceUrl: "/odata/v4/library/",
    synchronizationMode: "None"
  });

  var oTable = new Table({
    columns: [
      new Column({ header: new Label({ text: "Titre" }) }),
      new Column({ header: new Label({ text: "Auteur" }) }),
      new Column({ header: new Label({ text: "Stock" }) })
    ]
  });

  oTable.bindItems({
    path: "/Books",
    template: new ColumnListItem({
      cells: [
        new Text({ text: "{title}" }),
        new Text({ text: "{author}" }),
        new Text({ text: "{stock}" })
      ]
    })
  });

  oTable.setModel(oModel);

  var oPage = new Page({
    title: "Bibliothèque - Livres",
    content: [oTable]
  });

  var oApp = new App({
    pages: [oPage]
  });

  oApp.placeAt("content");
});
