console.log("getting closer")
const aPlaceToPutPhotos = document.querySelector("#photoDiv")

aPlaceToPutPhotos.innerHTML = "Hello Kevin This is really frustrating"

const displayPhotosInDOM = (photoHTMLRep) => {
    aPlaceToPutPhotos.innerHTML += photoHTMLRep
}

const photoConverter = (object) => {
    return `
        <section class="photoObject">
        <a href=${object.url}>    
        <img src=${object.thumbnailUrl}>
        </a>
            <h1>${object.title}</h1>
        </section>
        `
}

const photoFetcher = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(data => data.json())
        .then((arrayOfPhotos) => {
            console.log(arrayOfPhotos)
            for (let i = 0; i < 50; i++) {
                console.log(arrayOfPhotos[i])
                const convertedPhoto = photoConverter(arrayOfPhotos[i])
                displayPhotosInDOM(convertedPhoto)
            }
        })
}

photoFetcher()