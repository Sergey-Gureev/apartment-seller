
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) 
    source = $('#apt-template').html()
    const template = Handlebars.compile(source) 

    for (let item of apartments) {
        let newHTML = template(item);
        $('#results').append(newHTML);
}}

renderApts(apartments) 
// renders apartments when page lo
