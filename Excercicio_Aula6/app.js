var pontuacao = [0,0];
var pontuacaoRodada = 0;
var jogadorAtual = 0;

var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var botaoPassarVez = document.querySelector("#botao-passar-vez");
var botaoNovoJogo = document.querySelector("#botao-novo-jogo");

var pontuacaoRodada0 = document.querySelector('#pontuacao-rodada-0');
var pontuacaoRodada1 = document.querySelector('#pontuacao-rodada-1')

var pontuacaoGlobal0 = document.querySelector('#pontuacao-global-0');
var pontuacaoGlobal1 = document.querySelector('#pontuacao-global-1');

var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];
var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];

botaoLancarDado.addEventListener("click", function () { 
    var dado = Math.floor(Math.random() * 6) + 1;
    if (dado == 1) {        
        pontuacao[jogadorAtual] = 0;        
        pontuacoesRodadas[jogadorAtual].textContent = pontuacao[jogadorAtual];        
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];        
        jogadorAtual = 1 - jogadorAtual;    
    }
    else {        
        pontuacao[jogadorAtual] += dado;        
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];        
        pontuacoesRodadas[jogadorAtual].textContent = dado;    
        if(pontuacoesGlobais[jogadorAtual].textContent >= 35) {
            alert("O jogador atual venceu!!! \n O jogo terminou!!! \n Clicar em Novo Jogo para começar de novo!");
        }
    }
})

botaoPassarVez.addEventListener("click", function () {
    jogadorAtual = 1 - jogadorAtual;
})

botaoNovoJogo.addEventListener("click", function () {
    pontuacaoGlobal0.textContent = 0;
    pontuacaoGlobal1.textContent = 0;
    pontuacaoRodada0.textContent = 0;
    pontuacaoRodada1.textContent = 0;
})

