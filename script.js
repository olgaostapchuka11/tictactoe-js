let area = document.querySelector('.container');
    let step = 0;
    let result = '';

    let contentWrapper = document.getElementById('content');
    let modalResult = document.getElementById('modal-result-wrapper');
    let overlay = document.getElementById('overlay');
    let btnClose = document.getElementById('modal-result-wrapper');

    area.addEventListener('click', function(e) { // событие на весь блок
        if (step % 2 === 0) {
        e.target.innerHTML = 'x';
        } else {
        e.target.innerHTML = '0';
        }
        check() 
        step++;
        })

    function check() {
    let fields = document.querySelectorAll('.container a')
    console.log(fields);
    let winCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,4,8],
        [2,4,6],

        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]

    for(i = 0; i <  winCombinations.length; i++){ 
        if (fields[winCombinations[i][0]].innerHTML === 'x' && // i - номер массива, а 0,1,2 - числа внутри массива
            fields[winCombinations[i][1]].innerHTML === 'x' &&
            fields[winCombinations[i][2]].innerHTML ==='x') {
              result = 'Победили крестики!';
              prepareResult(result);
        } else if (
            fields[winCombinations[i][0]].innerHTML === '0' && 
            fields[winCombinations[i][1]].innerHTML === '0' &&
            fields[winCombinations[i][2]].innerHTML === '0') {
              result = 'Победили нолики!';
              prepareResult(result);
        }
    }
}

function prepareResult(winner) {
  prepareResult = winner; 
  contentWrapper.innerHTML = winner ;
  modalResult.style.display = 'block';
}

function closeModal() {
    modalResult.style.display = 'none';
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);