const desafio = document.querySelector("#desafio");
const botaoIdeia = document.querySelector("#gerar-ideia");
const resultado = document.querySelector("#resultado");

const ideias = {
  estudo: {
    titulo: "Seu próximo passo nos estudos",
    texto: "Crie um plano de estudos com metas pequenas, revisões semanais e exercícios. Use uma ferramenta de IA para sugerir perguntas e confira as respostas em fontes confiáveis."
  },
  criatividade: {
    titulo: "Transforme uma ideia em projeto",
    texto: "Escolha um problema, imagine três soluções diferentes e use uma ferramenta de IA para explorar referências. Depois, desenvolva sua própria versão e dê identidade a ela."
  },
  ambiente: {
    titulo: "Tecnologia a favor do planeta",
    texto: "Mapeie um problema ambiental da sua comunidade, como o desperdício de água. Organize observações e pense em uma solução digital que ajude a conscientizar as pessoas."
  },
  organizacao: {
    titulo: "Uma rotina mais inteligente",
    texto: "Liste suas tarefas, defina prioridades e organize blocos de tempo para estudar, descansar e realizar atividades. Você pode usar IA para sugerir uma rotina adaptada aos seus objetivos."
  }
};

botaoIdeia.addEventListener("click", () => {
  const ideia = ideias[desafio.value];

  resultado.replaceChildren();

  const simbolo = document.createElement("span");
  simbolo.textContent = "✦";

  const conteudo = document.createElement("div");
  const titulo = document.createElement("strong");
  const texto = document.createElement("p");

  titulo.textContent = ideia.titulo;
  texto.textContent = ideia.texto;

  conteudo.append(titulo, texto);
  resultado.append(simbolo, conteudo);

  resultado.animate(
    [
      { opacity: 0, transform: "translateY(8px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    { duration: 350, easing: "ease-out" }
  );
});

const botaoPergunta = document.querySelector("#pergunta");
const perguntaFinal = document.querySelector("#pergunta-final");

botaoPergunta.addEventListener("click", () => {
  const vaiMostrar = perguntaFinal.hidden;
  perguntaFinal.hidden = !vaiMostrar;

  botaoPergunta.textContent = vaiMostrar
    ? "Ocultar pergunta ↑"
    : "Participar da reflexão ↗";

  if (vaiMostrar) {
    perguntaFinal.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});
