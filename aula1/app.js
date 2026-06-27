/**
 * MOTOR OPERACIONAL DA SPA (ES2024+)
 * Gerencia roteamento por abas, acordeons duplos e auditoria de quiz.
 */

document.addEventListener("DOMContentLoaded", () => {
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
        renderizarAbaRevisao(secao, main);
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
                    head.innerHTML = `<span><i class="fa-solid fa-terminal"></i> ${acc.title}</span> <i class="fa-solid fa-chevron-down toggle-icon"></i>`;
                    
                    const body = document.createElement("div");
                    body.className = "acc-content";
                    body.innerHTML = `<pre><code>${acc.code}</code></pre>`;
                    
                    head.onclick = () => {
                        const open = wrap.classList.contains("active");
                        document.querySelectorAll(".accordion").forEach(el => {
                            el.classList.remove("active");
                            const icon = el.querySelector(".toggle-icon");
                            if(icon) icon.className = "fa-solid fa-chevron-down toggle-icon";
                        });
                        if (!open) {
                            wrap.classList.add("active");
                            head.querySelector(".toggle-icon").className = "fa-solid fa-chevron-up toggle-icon";
                        }
                    };
                    
                    wrap.appendChild(head);
                    wrap.appendChild(body);
                    main.appendChild(wrap);
                });
            }
        });
    }
}

function renderizarAbaRevisao(secao, container) {
    // 1. Bloco das Perguntas Norteadoras (Síntese Pedagógica da Dri)
    const cardNorteadores = document.createElement("div");
    cardNorteadores.className = "card";
    cardNorteadores.innerHTML = `<h2><i class="fa-solid fa-compass" style="color:var(--primary)"></i> Síntese Teórica (Perguntas Norteadoras)</h2>
                                 <p>Antes de auditar seus reflexos no quiz, explore os 5 princípios estruturais que amarraram a lógica corporativa desta aula:</p>`;

    secao.guidingQuestions.forEach((item) => {
        const acc = document.createElement("div");
        acc.className = "accordion";

        const head = document.createElement("div");
        head.className = "acc-header";
        head.innerHTML = `<span><i class="fa-solid fa-circle-question" style="color:var(--secondary)"></i> ${item.q}</span> <i class="fa-solid fa-chevron-down toggle-icon"></i>`;

        const body = document.createElement("div");
        body.className = "acc-content";
        body.innerHTML = `<p style="margin:0; padding-top:0.5rem; color:var(--text-main); font-size:1.02rem;">${item.a}</p>`;

        head.onclick = () => {
            const isOpen = acc.classList.contains("active");
            // Isola o recolhimento apenas aos norteadores deste card
            cardNorteadores.querySelectorAll(".accordion").forEach(el => {
                el.classList.remove("active");
                el.querySelector(".toggle-icon").className = "fa-solid fa-chevron-down toggle-icon";
            });
            if (!isOpen) {
                acc.classList.add("active");
                head.querySelector(".toggle-icon").className = "fa-solid fa-chevron-up toggle-icon";
            }
        };

        acc.appendChild(head);
        acc.appendChild(body);
        cardNorteadores.appendChild(acc);
    });

    container.appendChild(cardNorteadores);

    // 2. Bloco do Quiz Diagnóstico
    const topoQuiz = document.createElement("div");
    topoQuiz.className = "card text-center";
    topoQuiz.style.marginTop = "2.5rem";
    topoQuiz.innerHTML = `<h2><i class="fa-solid fa-brain"></i> Auditoria de Conhecimento (Quiz)</h2>
                          <p>Teste sua retenção mecânica respondendo às 10 avaliações de múltipla escolha abaixo.</p>`;
    
    const banner = document.createElement("div");
    banner.id = "score-board";
    banner.className = "score-card";
    topoQuiz.appendChild(banner);
    container.appendChild(topoQuiz);

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
    
    window.scrollTo({ top: board.parentElement.offsetTop - 50, behavior: "smooth" });
}