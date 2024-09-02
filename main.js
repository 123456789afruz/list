// const product1 = prompt('Введите первый товар')
// const product2 = prompt('Введите второй товар')
// const product3 = prompt('Введите третий товар')

// const products = [product1, product2, product3]



const product1 = prompt('Выберите первый товар')
const product2 = prompt('Выберите второй товар')
const product3 = prompt('Выберите третий товар')


const products = []

products.push(product1)
products.push(product2)
products.push(product3)



const list = document.querySelector('ul')
products.forEach((product,index) => {
    const text = document.createElement('li')
    text.innerText = product
    text.classList.add(`color${index}`)
    list.append(text)
    text.onclick = () => {
        text.innerText = 'Куплено'
        text.classList.add('bg')
    }
})



