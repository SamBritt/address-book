
//Practice: These are a few of my favorite things////

const container = document.querySelector('#addressList');

//parent article
const favoriteArticle = document.createElement('article');
//button
const saveWish = document.createElement('button');
saveWish.textContent = 'Save Wishlist';
saveWish.id = 'saveWish';
//fieldset
const fieldset1 = document.createElement('fieldset');
const fieldset2 = document.createElement('fieldset');
//label
const label1 = document.createElement('label');
label1.htmlFor = 'favorite';
label1.textContent = 'Favorite Thing: ';

const label2 = document.createElement('label');
label2.htmlFor = 'place';
label2.textContent = 'Where to buy it: ';

//input
const input1 = document.createElement('input');
input1.id = 'favorite';
input1.placeholder = 'Enter your favorite item to purchase'
input1.type = 'text';
const input2 = document.createElement('input');
input2.id = 'place';
input2.placeholder = 'Enter your favorite item to purchase'
input2.type = 'text';



const createWishFields = () => {
    fieldset1.appendChild(label1);
    fieldset1.appendChild(input1);
    fieldset2.appendChild(label2);
    fieldset2.appendChild(input2);
    favoriteArticle.appendChild(fieldset1)
    favoriteArticle.appendChild(fieldset2)
    favoriteArticle.appendChild(saveWish)
    document.querySelector('body').appendChild(favoriteArticle)
}
const displayInfo = () => {
    const resultList = document.createElement('section');
    let p = document.createElement('p')
    p.textContent = `I can purchase ${input1.value} at ${input2.value}`
    resultList.appendChild(p);
    document.querySelector('body').appendChild(resultList);
}

saveWish.addEventListener('click', (e) => {
    displayInfo()
})

createWishFields();





