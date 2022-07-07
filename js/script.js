'use strict';

const item = document.querySelector('.item');
const boxes = document.querySelectorAll('.box');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

boxes.forEach(item => {
   item.addEventListener('dragover', dragOver);
   item.addEventListener('drop', dragDrop);
   item.addEventListener('dragenter', dragEnter);
   item.addEventListener('dragleave', dragLeave);
});

function dragStart(e) {
   e.target.classList.add('hold');
   setTimeout(() => {
      e.target.classList.add('hide');
   }, 0);
}

function dragEnd(e) {
   e.target.classList.remove('hold', 'hide');

}

function dragOver(e) {
   e.preventDefault();  
}

function dragDrop(e) {
   e.target.classList.remove('hovered');
   e.target.append(item);
}

function dragEnter(e) {
   e.target.classList.add('hovered');
}

function dragLeave(e) {
   e.target.classList.remove('hovered');
}