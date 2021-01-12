var restart = document.querySelector("#b");
var squares = document.querySelectorAll('td');
var chance = document.getElementById('userchance');

function clearBoard(){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = 'white';
        squares[i].textContent = '';
    }
    chance.textContent = 'User1 Chance';
}

restart.addEventListener('click', clearBoard);

function checkGameOver(){
    var isComp = true;
    for (var i = 0; i < squares.length; i++){
        if(squares[i].textContent === ''){
            isComp = false;
        }
    }
    if(isComp){
        chance.textContent = 'Game Over';
    }
}

function checkResult(){
    for (var i = 0; i < 7; i+=3){
        if(squares[i].textContent !== '' && squares[i].textContent == squares[i+1].textContent && squares[i+1].textContent == squares[i+2].textContent){
            squares[i].style.backgroundColor = 'grey';
            squares[i+1].style.backgroundColor = 'grey';
            squares[i+2].style.backgroundColor = 'grey';
            return true;
        }
    }
    for (var i = 0; i < 3; i++){
        if(squares[i].textContent !== '' && squares[i].textContent == squares[i+3].textContent && squares[i+3].textContent == squares[i+6].textContent){
            squares[i].style.backgroundColor = 'grey';
            squares[i+3].style.backgroundColor = 'grey';
            squares[i+6].style.backgroundColor = 'grey';
            return true;
        }
    }
    if(squares[0].textContent !== '' && squares[0].textContent == squares[4].textContent && squares[4].textContent == squares[8].textContent){
        squares[0].style.backgroundColor = 'grey';
        squares[4].style.backgroundColor = 'grey';
        squares[8].style.backgroundColor = 'grey';
        return true;
    }
    if(squares[2].textContent !== '' && squares[2].textContent == squares[4].textContent && squares[4].textContent == squares[6].textContent){
        squares[2].style.backgroundColor = 'grey';
        squares[4].style.backgroundColor = 'grey';
        squares[6].style.backgroundColor = 'grey';
        return true;
    }
    return false;
}

function changeMarker(){
    if(chance.textContent === 'User1 Won' || chance.textContent === 'User2 Won')
    {
        alert('Game Over! Please restart the game.')
        //clearBoard();
    }
    else
    {
        if (chance.textContent == 'User1 Chance'){
            if(this.textContent === ''){
                this.textContent = 'X';
                this.style.color = 'blue';
                if (checkResult()){
                    chance.innerHTML = '<b><i>User1 Won</i></b>';
                    return;
                }
                chance.textContent = 'User2 Chance';
            }
        }
        else {
            if(this.textContent === ''){
                this.textContent = 'O';
                this.style.color = 'red';
                if (checkResult()){
                    chance.textContent = '<b><i>User2 Won</i></b>';
                    return;
                }
                chance.textContent = 'User1 Chance';
            }
        }
        checkGameOver();
    }
}

for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', changeMarker);
}