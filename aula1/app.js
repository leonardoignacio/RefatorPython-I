document.addEventListener("DOMContentLoaded", () => {
    // Array com todas as seções importadas
    window.SECOES = [window.DATA_INTRO, window.DATA_OFICINA, window.DATA_INFRA, window.DATA_QUIZ];
    window.ESTADO = { abaAtual: "intro", respostas: {} };

    inicializarHeader();
    renderizarNavegacao();
    renderizarConteudo("intro");
});

function inicializarHeader() {
    document.getElementById("app-title").innerText = window.AULA_METADATA.title;
    document.getElementById("app-subtitle").innerText = window.AULA_METADATA.subtitle;
    document.getElementById("app-badge").innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${window.AULA_METADATA.badge}`;
}

function renderizarNavegacao() {
    const nav = document.getElementById("nav-container");
    nav.innerHTML = "";
    
    window.SECOES.forEach(sec => {
        const btn = document.createElement("button");
        btn.className = `tab-btn ${window.ESTADO.abaAtual === sec.id ? 'active' : ''}`;
        btn.innerHTML = `<i class="${sec.icon}"></i> ${sec.title}`;
        btn.onclick = () => {
            window.ESTADO.abaAtual = sec.id;
            renderizarNavegacao();
            renderizarConteudo(sec.id);
        };
        nav.appendChild(btn);
    });
}

function renderizarConteudo(id) {
    const main = document.getElementById("app-content");
    main.innerHTML = "";
    const secao = window.SECOES.find(s => s.id === id);
    if (!secao) return;

    if (id === "quiz") {
        renderizarQuiz(secao, main);
        return;
    }

    if (secao.content) {
        secao.content.forEach(item => {
            if (item.type === "card") {
                const div = document.createElement("div");
                div.className = "card";
                div.innerHTML = `<h2>${item.title}</h2><div>${item.html}</div>`;
                main.appendChild(div);
            }
            if (item.type === "accordion") {
                item.items.forEach(acc => {
                    const wrap = document.createElement("div");
                    wrap.className = "accordion";
                    
                    const head = document.createElement("div");
                    head.className = "acc-header";
                    head.innerHTML = `<span><i class="fa-solid fa-terminal"></i> ${acc.title}</span> <i class="fa-solid fa-chevron-down"></i>`;
                    
                    const body = document.createElement("div");
                    body.className = "acc-content";
                    body.innerHTML = `<pre><code>${acc.code}</code></pre>`;
                    
                    head.onclick = () => {
                        const open = wrap.classList.contains("active");
                        document.querySelectorAll(".accordion").forEach(el => el.classList.remove("active"));
                        if (!open) wrap.classList.add("active");
                    };
                    
                    wrap.appendChild(head);
                    wrap.appendChild(body);
                    main.appendChild(wrap);
                });
            }
        });
    }
}

function renderizarQuiz(secao, container) {
    const topo = document.createElement("div");
    topo.className = "card text-center";
    topo.innerHTML = `<h2><i class="fa-solid fa-brain"></i> Auditoria de Conhecimento</h2>
                      <p>Teste seus reflexos lógicos respondendo às 10 avaliações de múltipla escolha.</p>`;
    
    const banner = document.createElement("div");
    banner.id = "score-board";
    banner.className = "score-card";
    topo.appendChild(banner);
    container.appendChild(topo);

    secao.questions.forEach((q, i) => {
        const qCard = document.createElement("div");
        qCard.className = "quiz-item";
        qCard.id = `quiz-${i}`;
        
        let html = `<h3>${q.q}</h3><ul class="options">`;
        q.opts.forEach((opt, oIdx) => {
            html += `
            <li class="option" onclick="selecionarOpcao(${i}, ${oIdx})">
                <input type="radio" name="q_${i}" id="o_${i}_${oIdx}">
                <label for="o_${i}_${oIdx}" style="cursor:pointer; flex:1;">${opt}</label>
            </li>`;
        });
        html += `</ul><div class="feedback" id="feed-${i}"></div>`;
        qCard.innerHTML = html;
        container.appendChild(qCard);
    });

    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerHTML = "<i class='fa-solid fa-check-double'></i> Processar Avaliação";
    btn.onclick = corrigirQuiz;
    container.appendChild(btn);
}

window.selecionarOpcao = function(qId, optId) {
    document.getElementById(`o_${qId}_${optId}`).checked = true;
    window.ESTADO.respostas[qId] = optId;
}

function corrigirQuiz() {
    let nota = 0;
    const questions = window.DATA_QUIZ.questions;

    questions.forEach((q, i) => {
        const card = document.getElementById(`quiz-${i}`);
        const feed = document.getElementById(`feed-${i}`);
        const resp = window.ESTADO.respostas[i];
        
        card.classList.remove("correct", "incorrect");
        
        if (resp === q.correct) {
            nota++;
            card.classList.add("correct");
            feed.innerHTML = `<strong><i class="fa-solid fa-circle-check"></i> Correto!</strong><br>${q.exp}`;
        } else {
            card.classList.add("incorrect");
            feed.innerHTML = `<strong><i class="fa-solid fa-circle-xmark"></i> Revisão Necessária.</strong><br>${q.exp}`;
        }
    });

    const board = document.getElementById("score-board");
    board.style.display = "block";
    board.innerHTML = `<h2 style="justify-content:center; font-size:2rem; margin-bottom:0.5rem;">Nota da Avaliação: ${nota} de 10</h2>
                       <p style="color:var(--primary); font-weight:700;">${nota >= 7 ? "Excelente aprovação de Compliance!" : "Retorne à Teoria e revise os alertas em vermelho."}</p>`;
    
    window.scrollTo({ top: board.parentElement.offsetTop, behavior: "smooth" });
}