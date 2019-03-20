let createElement = (element, ...rest) => {
    let creation = document.createElement(element);
    let params = ['id', 'textContent'];
    let restParams = rest;

    params.forEach(element => {
        let result = restParams.find(item => {
            element === item;
        })
        console.log(result)
    })
}

const container = document.querySelector('#addressList');
//button
const saveWish = document.createElement('button');
saveWish.textContent = 'Save Wishlist';
saveWish.id = 'saveWish';
//fieldset
const fieldset = document.createElement('fieldset');
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
const input2 = document.createElement('input');
input2.id = 'place';
input2.placeholder = 'Enter your favorite item to purchase'



const createWishFields = (labelOne, labelTwo) => {

}
const displayInfo = () => {

}

saveWish.addEventListener('click', (e) => {

})
console.log(saveWish);

createElement('li', 'id')





