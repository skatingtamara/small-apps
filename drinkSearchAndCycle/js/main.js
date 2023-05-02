//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value
    
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
                let i = 0
                setInterval(() =>{
                    console.log(i)
                    console.log(data.drinks[i])
                    document.querySelector('h2').innerText = data.drinks[i].strDrink
                    document.querySelector('img').src = data.drinks[i].strDrinkThumb
                    document.querySelector('h3').innerText = data.drinks[i].strInstructions
                    i++
                    if(i >= data.drinks.length){
                        i = 0
                    }
                }, 1000)
                })
        
        .catch(err => {
            console.log(`error ${err}`)
    })
    
    
}



// fetch(url)                                       // Solution with only a limited loop
//     .then(res => res.json())
//     .then(data => {
//         const delay = ms => new Promise( res => setTimeout(res, ms))
        
//         const showDrink = async () => {

//             for(let cycle = 0; cycle < 3; cycle ++){
//                 console.log(`Cycle #${cycle}`)
//                 for(let i = 0; i < data.drinks.length; i++){
//                     console.log(data.drinks[i])
//                     document.querySelector('h2').innerText = data.drinks[i].strDrink
//                     document.querySelector('img').src = data.drinks[i].strDrinkThumb
//                     document.querySelector('h3').innerText = data.drinks[i].strInstructions
    
//                     await delay(3000)
//                 }
//             }
//         } 
//         showDrink()
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

// }

