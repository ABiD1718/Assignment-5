const playerSelector = (player) => {
    const playerFeild = document.getElementById('player-field')

    player.setAttribute('disabled', true)
    // console.log(playerFeild.childNodes[1])
    if (playerFeild.childNodes.length < 5) {
        const li = document.createElement('li')
        console.log(player)
        li.innerText = player.parentNode.childNodes[1].innerText
        playerFeild.appendChild(li)
    }
    else {
        alert('Player list full')
    }
}


function inputValue(input) {
    const inputFeild = document.getElementById(input)
    const inputString = inputFeild.value;
    const inputFeildvalue = parseFloat(inputString);
    return inputFeildvalue;
}
function inputText(id) {
    const inputText = document.getElementById(id)
    const inputTestValue = inputText.innerText;
    return inputTestValue
}


document.getElementById('per-btn').addEventListener('click', function () {
    const PerplayerValue = inputValue('Per-Player');
    console.log(PerplayerValue)
    const Totalcost = PerplayerValue * 5;
    const PlayerExp = document.getElementById('money')
    const PlayerExpValue = PlayerExp.innerText

    PlayerExp.innerText = Totalcost

})



document.getElementById('Total-btn').addEventListener('click', function () {
    const ManagerMoney = document.getElementById('Manager');
    const ManagerValue = ManagerMoney.value;
    console.log(ManagerValue)
})
