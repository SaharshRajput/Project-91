function addUser()
{
    player1_input=document.getElementById("player1_name_input").value;
    player2_input=document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_input",player1_input);
    localStorage.setItem("player2_input",player2_input);

    window.location="quiz_game.html";
}