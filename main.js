let weightInput = document.querySelector('#WEIGHT')
let heightInput = document.querySelector('#HEIGHT')

let weightValue = document.querySelector('#weight-value')
let heightValue = document.querySelector('#height-value')

let iconsDiv = document.querySelector('.forIcon')
let doneIcon = document.querySelector('.bi-arrow-right')
let reStartIcon = document.querySelector('.bi-arrow-repeat')

let infoForBmi = document.querySelector('.infoForBmi')
let paragraphs = document.querySelectorAll('.paragraphs')
let result = document.querySelector('#result')
let comment = document.querySelector('#comment')


function BMIFunc () {

    let weightElem = weightInput.value
    let heightElem = heightInput.value
 
    weightValue.innerHTML = weightElem
    heightValue.innerHTML = heightElem

}



function ToggleFunc () {
    iconsDiv.classList.toggle('active')

    if(iconsDiv.className.includes('active')) {
        infoForBmi.style.display = 'none';

        let weightElem = weightInput.value;
        let heightElem = heightInput.value;

        let Final = (weightElem / Math.pow(heightElem / 100 , 2)).toFixed(1)


        if (Final < 18.5) {
            comment.innerHTML = 'Your body is underweight. eat more';
            comment.style.color = 'red'
        } else if (Final >= 18.5 && Final < 24.9) {
            comment.innerHTML = 'You have a normal body weight. great job!'
            comment.style.color = 'green'
        } else if (Final >= 25 && Final < 29.9) {
            comment.innerHTML = 'Your body is overweight. please consider it';
            comment.style.color = 'rgb(157, 134, 0)'
        } else {
            comment.innerHTML = 'You are fat, you better start exercising :)'
            comment.style.color = 'red'
        }

        result.innerHTML = Final

        paragraphs.forEach(function (p) {
            p.style.display = 'inline'
        })
    } else {
        infoForBmi.style.display = 'none';
        result.innerHTML = '00.0'
        comment.innerHTML = 'In this part, the result of your BMI is interpreted'
        comment.style.color = '#7D7C7C'
    }
}



weightInput.addEventListener('input' , BMIFunc)
heightInput.addEventListener('input' , BMIFunc)
iconsDiv.addEventListener('click' , ToggleFunc)
