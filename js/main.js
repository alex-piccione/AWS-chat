const dataUrl = "https://codersuk-test.s3-eu-west-1.amazonaws.com/data.json"

let ajax = () => new XMLHttpRequest()

function loadData() {
   //ajax()
    console.info("start loadData")

    $("#loadDataButton").attr("disabled", "");
    
    $.get(dataUrl, 
        (data) => alert("success"),
        (error) => alert(error) 
        )

    console.info("end loadData")

    $("#loadDataButton").removeAttr("disabled");
}