let allpost = document.querySelector(".allpost")
let name = document.querySelector(".name")
let captionMy = document.querySelector(".captionMy")
let button = document.querySelector(".button")




let arr = []



button.addEventListener("click", function () {
    arr.push({
        name: name.value,
        captionMy: captionMy.value
    })

    name.value=""
    captionMy.value=""


    allpost.innerHTML = ""

    display()
})



function display() {
    arr.map(function (item) {
        allpost.innerHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.captionMy}</p>
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger delete">Delete</button>
            </div>
        </div>`
    })


    let deletebtn = document.querySelectorAll(".delete")

    let dtlarr = Array.from(deletebtn)


    dtlarr.map(function (item, index) {
        item.addEventListener("click", function () {
            arr.splice(index,1)



            allpost.innerHTML = ""

            display()
        })
    })



}







