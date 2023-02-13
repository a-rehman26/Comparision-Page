for (i = 1; i < Products_Data.length; i++) {
    document.getElementById("select01").innerHTML +=
        `<option value="${i}"> ${Products_Data[i].title} </option>`

    document.getElementById("select02").innerHTML +=
        `<option value="${i}"> ${Products_Data[i].title} </option>`
}

function item01(a) {
    let select2 = document.getElementById("select02").value;

    if (select2 != a) {
        document.getElementById("img1").src = Products_Data[a].image;

        document.getElementById("price1").innerHTML = Products_Data[a].price;
        document.getElementById("des1").innerHTML = Products_Data[a].description;
        document.getElementById("brand1").innerHTML = Products_Data[a].brand;
    }

    else {
        document.getElementById("img1").src = Products_Data[0].image;

        document.getElementById("price1").innerHTML = "";
        document.getElementById("des1").innerHTML = "";
        document.getElementById("brand1").innerHTML = "";
    }
}




function item02(a) {
    let select1 = document.getElementById("select01").value;

    if (select1 != a) {
        document.getElementById("img2").src = Products_Data[a].image;

        document.getElementById("price2").innerHTML = Products_Data[a].price;
        document.getElementById("des2").innerHTML = Products_Data[a].description;
        document.getElementById("brand2").innerHTML = Products_Data[a].brand;
    }

    else {
        document.getElementById("img2").src = Products_Data[0].image;

        document.getElementById("price2").innerHTML = "";
        document.getElementById("des2").innerHTML = "";
        document.getElementById("brand2").innerHTML = "";
    }
}