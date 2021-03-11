"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var theInput;
var thebutton;
theInput = document.querySelector("#userInput > input[type=text]");
thebutton = document.querySelector("#userInput > button");
var breedLimit = Number(theInput === null || theInput === void 0 ? void 0 : theInput.value);
var tableBody;
tableBody = document.querySelector("#progOutput table > tbody");
console.log(thebutton);
thebutton === null || thebutton === void 0 ? void 0 : thebutton.addEventListener("click", function () {
    var oldRows;
    oldRows = tableBody === null || tableBody === void 0 ? void 0 : tableBody.querySelectorAll("tr");
    if (oldRows) {
        for (var k = 0; k < (oldRows === null || oldRows === void 0 ? void 0 : oldRows.length); k++) {
            var oldOne = oldRows[k];
            tableBody === null || tableBody === void 0 ? void 0 : tableBody.removeChild(oldOne);
        }
    }
    axios_1["default"]
        .get(catURL, {
        params: {
            limit: breedLimit
        }
    })
        .then(function (r) { return r.data; })
        .then(function (breeds) {
        var meowArr = breeds.map(function (b) {
            return {
                name: b.name,
                description: b.description,
                image: b.image
            };
        });
        return meowArr;
    })
        .then(function (meows) {
        var tableBody;
        tableBody = document.querySelector("#progOutput table > tbody");
        for (var i = 0; i < breedLimit; i++) {
            var catImage = document.createElement("img");
            catImage.setAttribute("src", meows[i].image.url);
            var tr = document.createElement("tr");
            var meowNameCell = document.createElement("td");
            meowNameCell.appendChild(document.createTextNode(meows[i].name));
            var meowDescCell = document.createElement("td");
            meowDescCell.appendChild(document.createTextNode(meows[i].description));
            var meowImagCell = document.createElement("td");
            meowImagCell.appendChild(catImage);
            tr.appendChild(meowNameCell);
            tr.appendChild(meowDescCell);
            tr.appendChild(meowImagCell);
            tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(tr);
        }
    });
});
if (isNaN(breedLimit))
    breedLimit = 10;
var catURL = "https://api.thecatapi.com/v1/breeds";
axios_1["default"]
    .get(catURL, {
    params: {
        limit: breedLimit
    }
})
    .then(function (r) { return r.data; })
    .then(function (breeds) {
    var meowArr = breeds.map(function (b) {
        return {
            name: b.name,
            description: b.description,
            image: b.image
        };
    });
    return meowArr;
})
    .then(function (meows) {
    var tableBody;
    tableBody = document.querySelector("#progOutput table > tbody");
    meows.forEach(function (m) {
        var catImage = document.createElement("img");
        catImage.setAttribute("src", m.image.url);
        var tr = document.createElement("tr");
        var meowNameCell = document.createElement("td");
        meowNameCell.appendChild(document.createTextNode(m.name));
        var meowDescCell = document.createElement("td");
        meowDescCell.appendChild(document.createTextNode(m.description));
        var meowImagCell = document.createElement("td");
        meowImagCell.appendChild(catImage);
        tr.appendChild(meowNameCell);
        tr.appendChild(meowDescCell);
        tr.appendChild(meowImagCell);
        tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(tr);
    });
});
axios_1["default"].get("https://dog.ceo/api/breed/hound/images")
    .then(function (r) { return r.data; })
    .then(function (dogPics) {
    var tableBody;
    tableBody = document.querySelector("#progOutputDog table > tbody");
    for (var i = 0; i < 10; i++) {
        var dogImage = document.createElement("img");
        dogImage.setAttribute("src", dogPics.message[i]);
        tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(dogImage);
    }
});
