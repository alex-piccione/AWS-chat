//const dataUrl = "https://codersuk-test.s3-eu-west-1.amazonaws.com/data.json"
dataUrl = "https://7iv0c9qr3l.execute-api.us-east-1.amazonaws.com/new/pets"

//let ajax = () => new XMLHttpRequest()

let isLoading = false

var __debug

function showError(error) {
    document.getElementById("errorMessage").innerHTML = error
    document.getElementById("errorMessage").style.display = ""
}

let clearError = () => document.getElementById("errorMessage").style.display = "none"


function loadPets() {
    if(isLoading) return alert("A previous request is still running")
    isLoading = true

    console.info("start loadPets")

    $("#loadDataButton").attr("disabled", "");
    
    clearError()

    $.get(dataUrl, 
        (data, status, xhr) => {
            clearError()
            $("#dataTable").css("display", "")
            $("#dataEmpty").css("display", "none")

            showPets(data)
        })
        .fail( (xhr, error) => { 
            showError("Failed to load pets. " + xhr.statusText)
            //alert("fail: " + xhr.statusText) /* + (error.message | String(error)) ); __debug = error */ 
        }) 
        .always( () => {
            isLoading = false
            $("#loadDataButton").removeAttr("disabled")
        })    

    console.info("end loadPets")
}

function showPets(data) {
    console.info("showPets")
    __debug = data
    
    // parse the JSON into objects
    let pets = []

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let pet = {}
        pet.id = element.id
        pet.type = element.type
        pet.price = element.price
        pets.push(pet)
    }
    //debugger;
    // populate the table
    $("#dataTable").css("display", "") // temp
    let tbody = $("#dataTable tbody")
    tbody.empty();
    let table = $("#dataTable table")[0] 
    
    pets.forEach(pet => {
        let row = table.insertRow(-1)
        let cell = row.insertCell(0).innerText = pet.id
        row.insertCell(1).innerText = pet.type
        row.insertCell(2).innerText = pet.price
    });
    
}

function loadData() {
    if(isLoading) return alert("A previous request is still running")
    isLoading = true

    console.info("start loadData")

    $("#loadDataButton").attr("disabled", "")
    
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