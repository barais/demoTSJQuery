import * as monaco from 'monaco-editor'
import * as $ from "jquery";

// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

class Demo {
    message: string;

    constructor(mes: string) {
        this.message = mes;
    }

    ClickGo() {
        $("#lblGo").text("You pressed the Go button");
    }

    ClickInfo() {
        $("#Info").text(this.message);
        $("#Info").fadeOut("slow");
        $("#Info").fadeIn(2000);
    }
}

let dem = new Demo("bla bla bla bla");

monaco.editor.create(document.getElementById('container'), {
    value: 'console.log("Hello, world")',
    language: 'javascript'
  });


$(document).ready(function () {
    $('#btnGo').click(function () {
        dem.ClickGo();
    });
    //$("#btnShowInfo").click(dem.ClickInfo); // doesn't work
    $("#btnShowInfo").click(function () {
        dem.ClickInfo();
    });
});




