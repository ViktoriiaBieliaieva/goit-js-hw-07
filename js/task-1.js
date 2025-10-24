const listItem = document.querySelectorAll('.item');
const amountOfItems = listItem.length;

console.log(`Number of categories: ${amountOfItems}`);

listItem.forEach(function callback(elem) {
    const title = elem.querySelector('h2');
    const textTitle = title.textContent;
    console.log(`Category: ${textTitle}`);
    const listEl = elem.querySelectorAll('li');
    const amountOfEl = listEl.length;
    console.log(`Elements: ${amountOfEl}`);
})



    
