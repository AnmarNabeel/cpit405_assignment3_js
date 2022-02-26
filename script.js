let btnElem = document.createElement("button");
btnElem.innerText = "Click on me!"
document.body.append(btnElem);

btnElem.addEventListener("click", doClick);
function doClick() {
    let divElem = document.getElementById("result");
    divElem.innerText = "I have been clicked!";
}

let obj = { name: "Sorted by number" }
let h1Elem = document.createElement("h1")
h1Elem.innerText = obj.name
document.body.append(h1Elem)

// sorting and displaying images
let images = [
    { Number: '2', url: 'https://img.stackshare.io/stack/5/default_e436fbdf25e5c8e89e2137cf2f1dd2cffa56d8e1.png' },
    { Number: '4', url: 'https://img.stackshare.io/stack/9/default_ce2cf17eee07d2fe12f8074a4c85b9f1220a92cd.png'},
    { Number: '3', url: 'https://img.stackshare.io/stack/2/default_04dd469129d2bfe4f9fbe36583faac05993d6643.jpeg' },
    { Number: '1', url: 'https://img.stackshare.io/stack/151/default_3ce09436992cc7acf205672544d986a3fc92f006.png' }
];
// Sort the array of images
images.sort(compare);
function compare(a, b) {
    if (a.Number < b.Number) {
        return -1;
    }
    else if (a.Number > b.Number) {
        return 1;
    }
    else {
        return 0;
    }
}
for (imageItem of images) {
    let imgElem = document.createElement("img");
    imgElem.src = imageItem.url;
    document.body.append(imgElem);
}