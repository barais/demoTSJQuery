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

$(document).ready(function () {
    $('#btnGo').click(function () {
        dem.ClickGo();
    });
    //$("#btnShowInfo").click(dem.ClickInfo); // doesn't work
    $("#btnShowInfo").click(function () {
        dem.ClickInfo();
    });
});
