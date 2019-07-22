const putPostHere = document.querySelector("#post-list")



const postHTML = (postObject) => {
    return `
    <section class="blog__container">
        <h1 class="postTitle">${postObject.title}</h1>
        <h2 class="postBody">${postObject.body}</h2>
    </section>
    `
}

const displayPostInDOM = (postHTML) => {
    putPostHere.innerHTML += postHTML
} 


const postFetcher = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(posts => posts.json())
        .then(arrayOfPosts => {
            for (let i = 0; i < 20; i++) {
                const firstTwenty = arrayOfPosts[i];
                const completedPost = postHTML(firstTwenty)
                displayPostInDOM(completedPost)
                console.log(firstTwenty)
            }
        })
}

postFetcher()



// const whereToPutTheAnimals = document.querySelector("#animal-list")

// const animalFetcher = () => {
//     // Fetch the data
//     fetch("http://localhost:5002/animals")
//         // Parse the data
//         .then(data => data.json())
//         // Do something with the parsed data
//         .then((arrayOfAnimals) => {
//             for (const animal of arrayOfAnimals) {
//                 const convertedAnimal = animalConverter(animal)
//                 displayAnimalInDOM(convertedAnimal)
//             }
//         })
// }

// animalFetcher()


// const animalConverter = (animalObject) => {
//     // Return HTML representation of the animal object
//     return `
//         <section class="animal">
//             <h1 class="animal__name">${animalObject.name}</h1>
//             <h2 class="animal__breed">${animalObject.breed}</h2>
//         </section>
//     `
// }



// const displayAnimalInDOM = (animalHTMLRepresentation) => {
//     // Attach the string to the right place in the DOM
//     whereToPutTheAnimals.innerHTML += animalHTMLRepresentation
// }
