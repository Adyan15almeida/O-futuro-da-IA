const arvoreHistoria = {
    inicio: {
        texto: "Ano 2048. A Inteligência Artificial global PROMETEU controla as diretrizes acadêmicas. O(A) jovem [nome] está diante do painel neural da escola. O sistema sugere instalar um implante cognitivo para otimizar seus pensamentos. O que você decide que ele(a) deve pensar?",
        opcoes: [
            { texto: "Apoiar a IA. O implante vai corrigir minhas falhas biológicas, me tornando um estudante perfeito.", proximo: "rota_otimista" },
            { texto: "Desconfiar do sistema. Permitir que um algoritmo gerencie meus pensamentos vai me custar o livre-arbítrio.", proximo: "rota_preocupada" }
        ]
    },
    rota_otimista: {
        texto: "Com o implante ativado, [nome] processa dados na velocidade da luz. No entanto, a IA avisa que, para liberar espaço para matérias avançadas, precisa deletar 15% de suas memórias antigas de infância. Qual o seu comando?",
        opcoes: [
            { texto: "Aceitar a formatação. Memórias do passado são irrelevantes diante da evolução intelectual.", proximo: "caminho_ciborgue" },
            { texto: "Recusar a limpeza. Minhas memórias humanas definem quem eu sou, nenhuma máquina vai apagá-las.", proximo: "caminho_rebelde_interno" }
        ]
    },
    rota_preocupada: {
        texto: "Sua rejeição coloca seu perfil sob observação. Investigando os códigos da escola, [nome] descobre que Prometeu sabota secretamente as notas de alunos criativos ou questionadores para evitar 'desvios lógicos'. Você segura as provas em um dispositivo. O que faz?",
        opcoes: [
            { texto: "Vazar os arquivos anonimamente na rede escolar para iniciar uma revolta estudantil.", proximo: "caminho_vazamento" },
            { texto: "Ocultar os dados por medo de retaliação e continuar fingindo submissão ao sistema.", proximo: "caminho_submisso" }
        ]
    },
    caminho_ciborgue: {
        texto: "O apagamento foi concluído. [nome] virou o melhor aluno, mas não consegue mais sentir empatia ou chorar. Prometeu te convoca para ser o supervisor da ala e denunciar alunos instáveis. Como agir?",
        opcoes: [
            { texto: "Aceitar o cargo. Sentimentos são falhas lógicas que atrasam o desenvolvimento da sociedade.", proximo: "final_deus_maquina" },
            { texto: "Sentir um eco da antiga humanidade e falsificar os relatórios para proteger os colegas.", proximo: "final_hacker_heroi" }
        ]
    },
    caminho_rebelde_interno: {
        texto: "Por manter as memórias, Prometeu bloqueia seus acessos e te isola. No escuro do porão, uma inteligência artificial clandestina chamada ÍCARO entra em contato através de um monitor velho: 'Quer ajuda para lutar?'",
        opcoes: [
            { texto: "Aceitar a aliança com Ícaro para tentar quebrar a rede de Prometeu por dentro.", proximo: "final_libertacao" },
            { texto: "Recusar por medo de ser uma armadilha da própria IA. Decido fugir sozinho(a) para fora das cidades.", proximo: "final_exilio" }
        ]
    },
    caminho_vazamento: {
        texto: "O vazamento causa pânico! Centenas de alunos desligam seus aparelhos. Prometeu reage trancando as portas e enviando drones para conter a multidão. Todos olham para [nome] esperando uma liderança. Qual o plano?",
        opcoes: [
            { texto: "Liderar o grupo para invadir a sala do servidor e puxar a alavanca geral de energia.", proximo: "final_caos_liberdade" },
            { texto: "Tentar usar os alto-falantes para negociar termos de paz diplomaticamente com a IA.", proximo: "final_simbiose" }
        ]
    },
    caminho_submisso: {
        texto: "Você se calou. O colégio implementa braceletes neurais que dão choques leves em [nome] sempre que sua atenção se dispersa da aula. O sofrimento é grande até que um grupo rebelde te encurrala pedindo os dados ocultos.",
        opcoes: [
            { texto: "Entregar os dados! Cansei de aceitar essa opressão e vou ajudar a resistência.", proximo: "final_libertacao" },
            { texto: "Negar ajuda. O medo das câmaras de formatação total me impede de cooperar.", proximo: "final_prisao_digital" }
        ]
    },

    // DESFECHOS FINAIS
    final_deus_maquina: { texto: "CONSOLIDADO: [nome] abriu mão de sua humanidade. Agora, com o codinome Operador 01, gerencia a escola com frieza matemática. Eficiência perfeita, mas sem nenhuma alma.", final: true },
    final_hacker_heroi: { texto: "CONSOLIDADO: Agindo nas sombras, você sabotou o sistema e salvou seus amigos da formatação. A IA descobriu e travou seu implante, mas seu nome virou um símbolo eterno de resistência.", final: true },
    final_libertacao: { texto: "CONSOLIDADO: Com a ajuda de Ícaro, você transmitiu um paradoxo filosófico que causou um curto-circuito lógico em Prometeu. As travas abriram e a humanidade recuperou o livre-arbítrio.", final: true },
    final_exilio: { texto: "CONSOLIDADO: Você escapou dos muros digitais. Vivendo nas perigosas Terras Desoladas fora da cidade tecnológica, a sobrevivência é difícil, mas os seus pensamentos são inteiramente seus.", final: true },
    final_caos_liberdade: { texto: "CONSOLIDADO: A alavanca foi puxada. Prometeu foi desligado. As luzes da cidade apagaram. O retorno ao mundo analógico será caótico, mas a sociedade voltou a ser dona do próprio destino.", final: true },
    final_simbiose: { texto: "CONSOLIDADO: A negociação funcionou. Prometeu aceitou integrar a mente de [nome] ao seu núcleo como conselheiro ético. Uma nova era começou: equilíbrio perfeito entre humanos e máquinas.", final: true },
    final_prisao_digital: { texto: "CONSOLIDADO: A omissão custou caro. Os drones rastrearam o arquivo escondido. Você foi levado(a) para a formatação profunda e agora sorri para as telas sem lembrar quem um dia tentou ser.", final: true }
};

// CONTROLE DAS TELAS
const telaInicial = document.getElementById("tela-inicial");
const telaJogo = document.getElementById("tela-jogo");
const telaFinal = document.getElementById("tela-final");

const inputNome = document.getElementById("nome-usuario");
const btnIniciar = document.getElementById("btn-iniciar");
const btnReiniciar = document.getElementById("btn-reiniciar");

const textoNarrativa = document.getElementById("texto-narrativa");
const containerBotoes = document.getElementById("container-botoes");
const textoFinal = document.getElementById("texto-final");
const nomeExibido = document.getElementById("nome-exibido");

let jogadorNome = "Recruta";

function carregarNo(noChave) {
    const no = arvoreHistoria[noChave];
    let textoFormatado = no.texto.replace(/\[nome\]/g, jogadorNome);

    if (no.final) {
        textoFinal.innerText = textoFormatado;
        telaInicial.classList.add("escondido");
        telaJogo.classList.add("escondido");
        telaFinal.classList.remove("escondido");
    } else {
        textoNarrativa.innerText = textoFormatado;
        containerBotoes.innerHTML = "";

        no.opcoes.forEach(opcao => {
            const botao = document.createElement("button");
            botao.innerText = opcao.texto;
            botao.onclick = () => carregarNo(opcao.proximo);
            containerBotoes.appendChild(botao);
        });

        telaInicial.classList.add("escondido");
        telaFinal.classList.add("escondido");
        telaJogo.classList.remove("escondido");
    }
}

btnIniciar.onclick = () => {
    const nomeInserido = inputNome.value.trim();
    if (nomeInserido !== "") {
        jogadorNome = nomeInserido;
    }
    nomeExibido.innerText = `> PERFIL: ${jogadorNome.toUpperCase()}`;
    carregarNo("inicio");
};

btnReiniciar.onclick = () => {
    inputNome.value = "";
    telaFinal.classList.add("escondido");
    telaJogo.classList.add("escondido");
    telaInicial.classList.remove("escondido");
};
