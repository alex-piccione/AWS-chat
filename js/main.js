const dataUrl = "https://codersuk-test.s3-eu-west-1.amazonaws.com/data.json"

//let ajax = () => new XMLHttpRequest()

let isLoading = false

var __debug

function showError(error) {
    document.getElementById("errorMessage").innerHTML = error
    document.getElementById("errorMessage").style.display = ""
}

let clearError = () => document.getElementById("errorMessage").style.display = "none"

function loadData() {
    if(isLoading) return alert("A previous request is still running")
    isLoading = true

    console.info("start loadData")

    $("#loadDataButton").attr("disabled", "");
    
    clearError()

    $.get(dataUrl, 
        (data, status, xhr) => {
            clearError()
            $("#dataTable").css("display", "")
            $("#dataEmpty").css("display", "none")
        })
        .fail( (xhr, error) => { 
            showError("Failed to load data. " + xhr.statusText)
            //alert("fail: " + xhr.statusText) /* + (error.message | String(error)) ); __debug = error */ 
        }) 
        .always( () => {
            isLoading = false
            $("#loadDataButton").removeAttr("disabled")

        })    

    console.info("end loadData")
}