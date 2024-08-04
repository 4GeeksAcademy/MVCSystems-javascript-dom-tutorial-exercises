
// Add a click event listener to the ul element

document.getElementById('addToDo').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const addtask = event.target.value;
    if (addtask.trim() !== '') {
      const li = document.createElement('li');
      li.innerHTML = `<span><i class="fa fa-trash"></i></span> ${addtask}`;
      document.querySelector('#container ul').appendChild(li);
      event.target.value = ''
    }
  }
});

document.querySelector('#container ul').addEventListener('click', function(event) {
    if (event.target.tagName === 'I') {
        event.target.parentElement.parentElement.remove();
    }
});
