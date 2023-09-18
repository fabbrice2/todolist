const $button = document.querySelector('.addtaskbutton button');
const $task = document.querySelector('.task'); 
const $input = document.querySelector('.input');
const $emailErrorMessage = document.querySelector('.emailErrorMessage');
const $addtaskbutton = document.querySelector('.addtaskbutton');
const $number = document.querySelector('.number');
const $deletenumber = document.querySelector('.deletenumber');
const $presenttask = document.querySelector('.presenttask');
const $taskdeletebtn = document.querySelector('.taskdelete');
const $taskdelete = document.querySelector('.task.delete');



$button.addEventListener('click', function (e) {
    e.preventDefault();
    const $inputValue = $input.value.trim();

    if ($inputValue == "" || $inputValue == null) {
        $emailErrorMessage.textContent = 'Champ requis';
        $addtaskbutton.style.border = '1px solid red';
      } else {
        $emailErrorMessage.textContent = '';
        const $taskitem = document.createElement('div');
        $taskitem.innerHTML = `
        <ul>
           <li class="checkicon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg></li>
           <li class="content">${$inputValue}</li>
        </ul>
        <ul>
            <li class="deleteicon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
              </svg>
            </li>
        </ul>
        `;
        $input.value = '';
        $taskitem.classList.add('taskitem');
        $task.appendChild($taskitem);
        $task.insertBefore($taskitem, $task.children[0]);
        const $deletebtn = document.querySelector('.deleteicon');
        const $checkicon = document.querySelector('.checkicon');
        const $content = document.querySelector('.content')

        $checkicon.addEventListener('click', function(){
          if ($checkicon.style.background !== 'green') {
              $checkicon.style.background = 'green';
          }else{
              $checkicon.style.background = 'grey';
          }
      })
    
        $deletebtn.addEventListener('click', function () {
            $content.style.textDecoration = 'line-through';
            setTimeout(() => {
                $task.removeChild($taskitem);
            }, 600);
            // 
        })
      }
      const $taskchildren = $task.children.length;
      $number.innerHTML = $taskchildren;

});

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keypress', function (e) {
        if (e.key === "Enter") {
          $button.click();  
        }
    })
})

$presenttask.addEventListener('click', function () {
  $task.classList.remove('mask')
  $taskdelete.classList.add('mask')
})
$taskdeletebtn.addEventListener('click', function () {
  $task.classList.add('mask')
  $taskdelete.classList.remove('mask')
})