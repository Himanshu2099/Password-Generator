const result = document.getElementById('result')
const length = document.getElementById('length')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const generate = document.getElementById('generate')
const clipboard = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol:getRandomSymbol
}

clipboard.addEventListener('click',() => {
    const textarea = document.createElement('textarea')
    const copyPassword = result.innerText

    if(!copyPassword) {
        return
    }

    textarea.value = copyPassword
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password Copied!')
})

generate.addEventListener('click',()=>{
    const lengthP = +length.value
    const hasLower = lowercase.checked
    const hasUpper = uppercase.checked
    const hasNumber = numbers.checked
    const hasSymbol = symbols.
    checked

    result.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, lengthP)
})

function generatePassword(lower, upper, number, symbol, length){
    let password='';
    const typescount = lower+upper+number+symbol
    const typesArr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0])
    
    if(typescount===0) {
        return ''
    }

    for(let i=0;i<length;i+=typescount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            password += randomFunc[funcName]()
        })
    }

    const FinalPassword = password.slice(0,length)
    return FinalPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() *26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() *26) + 60)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() *10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*()_+=?/.>,<|'
    return symbols[(Math.random() * symbols.length)]
}





