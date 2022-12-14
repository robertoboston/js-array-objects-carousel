const imageArrayObject = [
    {
        url : "01.webp",
        title : 'Marvel spiderman Miles Morales',
        description: 'experience the riles of Miles Morales as the new hero masters incredible, explosive new powers to become his own spiderman'
    },
    {
        url : '02.webp',
        title : 'ciao',
        description: 'experience the riles of Miles Morales as the new hero masters incredible, explosive new powers to become his own spiderman'
    },
    {
        url : '03.webp',
        title : 'ciao 2',
        description: 'experience the riles of Miles Morales as the new hero masters incredible, explosive new powers to become his own spiderman'
    },
    {
        url : '04.webp',
        title : 'Marvel spiderman Miles Morales',
        description: 'experience the riles of Miles Morales as the new hero masters incredible, explosive new powers to become his own spiderman'
    },
    {
        url : '05.webp',
        title : 'Marvel spiderman Miles Morales',
        description: 'experience the riles of Miles Morales as the new hero masters incredible, explosive new powers to become his own spiderman'
    }

]

let divItem= ''

for(let i= 0; i< imageArrayObject.length; i++){
    
    image = imageArrayObject[i]

    divItem +=  `<div class="item">
    <img src="./img/${image.url}">
    <p class="p1">${image.title}</p>
    <p class="p2">${image.description}</p> 
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

        itemActive=4
    
        item[itemActive].classList.add('active')

    }
e

})

