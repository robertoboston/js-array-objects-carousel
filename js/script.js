const imageArrayObject = [
    {
        url : "01.webp",
        title : 'Marvel spiderman Miles Morales',
        description: 'experience the riles of Miles Morales as the new hero masters incredible, explosive new powers to become his own spiderman'
    },
    {
        url : '02.webp',
        title : 'Rachet And Clank',
        description: 'experience the riles of Miles Morales as the new hero masters incredible, explosive new powers to become his own spiderman'
    },
    {
        url : '03.webp',
        title : 'Fortnite',
        description: 'experience the riles of Miles Morales as the new hero masters incredible, explosive new powers to become his own spiderman'
    },
    {
        url : '04.webp',
        title : 'Il gatto con gli stivali',
        description: 'experience the riles of Miles Morales as the new hero masters incredible, explosive new powers to become his own spiderman'
    },
    {
        url : '05.webp',
        title : 'Avengers',
        description: 'experience the riles of Miles Morales as the new hero masters incredible, explosive new powers to become his own spiderman'
    }

]

let divItem= ''

for(let i= 0; i< imageArrayObject.length; i++){
    
    image = imageArrayObject[i]

    divItem +=  `<div class="item">
    <img src="./img/${image.url}">
    <h1 class="title">${image.title}</h1>
    <p class="subtitle">${image.description}</p> 
    </div>`

}

const itemSlider = document.querySelector('.item-slider')

itemSlider.innerHTML += divItem

const item = document.getElementsByClassName('item')

let itemActive = 0

item[itemActive].classList.add('active')

const next = document.getElementById('next')
const prev = document.getElementById('prev')


next.addEventListener('click',function(){


    if(itemActive < imageArrayObject.length -1)
    {

        item[itemActive].classList.remove('active')

        itemActive++
    
        item[itemActive].classList.add('active')

    }else{

        item[itemActive].classList.remove('active')

        itemActive=0
    
        item[itemActive].classList.add('active')


    }

})

prev.addEventListener('click',function(){

    if(itemActive > 0){

        item[itemActive].classList.remove('active')

        itemActive--
    
        item[itemActive].classList.add('active')


    }else{
        
        item[itemActive].classList.remove('active')

        itemActive = 4
    
        item[itemActive].classList.add('active')

    }

})

function autoPlay (){

    if(itemActive < imageArrayObject.length -1)
    {

        item[itemActive].classList.remove('active')

        itemActive++
    
        item[itemActive].classList.add('active')

    }else{

        item[itemActive].classList.remove('active')

        itemActive=0
    
        item[itemActive].classList.add('active')


    }


}



let play= document.getElementById('play')
let stop = document.getElementById('stop')

let myplay = setInterval(autoPlay,3000)

play.addEventListener('click',function(){
    clearInterval(myplay)
    myplay = setInterval(autoPlay,3000)
})

stop.addEventListener('click',function(){
    clearInterval(myplay)
})

