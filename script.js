function check() {
    var data = new Date()
    var year = data.getFullYear()
    var fyear = document.getElementById("txtyear")
    var res = document.querySelector("div#res")
    if(fyear.value.length == 0 || fyear.value > year) {
        res.innerHTML = "Try again <br/><br/>Tell me something!"
    } else {
        var fgender = document.getElementsByName("radgender")
        var age = year - fyear.value
        var img = document.createElement("img")
        img.setAttribute("id", "pic")
        var gender = ""
        if(fgender[0].checked) {
            gender = "Man"
            if(age >= 0 && age < 10) {
                //kid
                img.setAttribute("src", "foto-bebe-m.png")
            }else if(age < 21) {
                //man1
                img.setAttribute("src","foto-jovem-m.png")
            }else if(age < 50) {
                //man2
                img.setAttribute("src", "foto-adulto-m.png")
            }else {
                //man3
                img.setAttribute("src", "foto-idoso-m.png")
            }
        }else if (fgender[1].checked) {
            gender = "Woman"
            if(age >= 0 && age < 10) {
                //kid
                img.setAttribute("src", "foto-bebe-f.png")
            }else if(age < 21) {
                //woman1
                img.setAttribute("src", "foto-jovem-f.png")
            }else if(age < 50) {
                //woman2
                img.setAttribute("src", "foto-adulto-f.png")
            }else {
                //woman3
                img.setAttribute("src", "foto-idoso-f.png")
            }
        }
        res.innerHTML = `I know you are a ${age} years old ${gender}!`
        res.appendChild(img)
    }
}