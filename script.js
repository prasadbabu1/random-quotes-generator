async function getquote (){
    const response = await fetch("https://api.quotable.io/random")
    const data = await response.json()
    console.log(data)

    const arr = document.querySelector(".place")

    arr.innerHTML= data.content
}
