const number = document.querySelector('#number');

number.addEventListener('input',NumFact);


async function NumFact(e){
    const response = await fetch('http://numbersapi.com/'+number.value+'/year')
    const result = await response.text()
          
        let cardsubtitle = `Number ${number.value}'s Fact is :`     
        let cardtext = `${result}`

        document.querySelector('#card-subtitle').innerHTML = cardsubtitle;
        document.querySelector('#card-text').innerHTML = cardtext;

}