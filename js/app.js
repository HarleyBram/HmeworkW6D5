document.addEventListener('DOMContentLoaded', () => {
  console.log("fuck british imperialism and the miltary-industrial complex that has destroyed countless lives and millions of acres of wildlife");

  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

//The code above is all the listeners ine one function. it is listening out for a submit
//being clicked in the #new-item-form form, and a click on the #delete-all button


const handleNewItemFormSubmit = function(event) {
  event.preventDefault();
  const animalListItem = createAnimalListItem(event.target);
  const animalList = document.querySelector('#list-of-animals');
  animalList.appendChild(animalListItem);

  event.target.reset();
}

// the code above is preventing a submit, calling on the 'createAnimalListItem' function,
// finding the '#list-of-animals' list, and putting the result of the function into
// that list


const createAnimalListItem = function(form) {

    const animalListItem = document.createElement('li');
    animalListItem.classList.add('animal-list-item');

    const name = document.createElement('h3');
    name.textContent = form.name.value;
    animalListItem.appendChild(name);

    const year = document.createElement('p');
    year.textContent = form.year.value;
    animalListItem.appendChild(year);

    const cool = document.createElement('p');
    cool.textContent = form.cool.value;
    animalListItem.appendChild(cool);

    const reintroduced = document.createElement('p');
    reintroduced.textContent = form.reintroduced.value;
    animalListItem.appendChild(reintroduced);

    return animalListItem;
}




const handleDeleteAllClick = function(event) {
  const animalList = document.querySelector('#list-of-animals');
  animalList.innerHTML = '';
}
