window.DATA_INFRA = {
    id: 'infra',
    title: '3. Deploy',
    icon: 'fa-solid fa-cloud-arrow-up',
    content: [
        {
            type: 'card',
            title: '<i class="fa-solid fa-server"></i> Da Nuvem Local para a Web Pública (Streamlit Cloud)',
            html: `
            <p>Na aula anterior geramos um artefato binário (<code>.exe</code>) para rodar no Windows. Hoje daremos um passo mais alto: publicaremos nossa aplicação Web de Folha de Pagamento em uma URL pública global para ser acessada pelo celular ou navegador de qualquer gestor da empresa.</p>
            <div class="callout" style="border-left-color: #f59e0b; background: #fef3c7;">
                <h4 style="color: #d97706;"><i class="fa-solid fa-triangle-exclamation"></i> Alerta de Arquiteto: Por que não usamos o GitHub Pages?</h4>
                <p style="margin-bottom:0; color: #92400e;">O <em>GitHub Pages</em> é um excelente serviço gratuito, porém ele é um servidor estritamente <strong>Estático</strong> — ou seja, ele só entrega arquivos prontos de HTML, CSS e imagens. Aplicações em Python como o <em>Streamlit</em> exigem um servidor <strong>Dinâmico</strong>, pois o interpretador Python precisa ficar rodando continuamente nos bastidores processando variáveis, cálculos e sessões em tempo real. Por isso, usaremos o <em>Streamlit Community Cloud</em> (plataforma gratuita oficial conectada ao Git).</p>
            </div>
            `
        },
        {
            type: 'card',
            title: '<i class="fa-brands fa-git-alt"></i> Roteiro de Publicação em 4 Passos',
            html: `
            <h4 style="color: var(--text-title);"><span class="badge" style="margin-bottom:0.5rem">Passo 1</span> Preparação do Manifesto de Dependências</h4>
            <p>Para que o servidor na nuvem saiba quais bibliotecas instalar no ambiente virtual, crie na pasta raiz do seu projeto um arquivo chamado estritamente <code>requirements.txt</code> contendo:</p>
            <pre><code>streamlit\npandas</code></pre>

            <h4 style="margin-top: 2rem; color: var(--text-title);"><span class="badge" style="margin-bottom:0.5rem">Passo 2</span> Envio ao GitHub</h4>
            <p>Suba o seu script principal (ex: <code>app_folha.py</code>) e o <code>requirements.txt</code> para um novo repositório público na sua conta do GitHub.</p>

            <h4 style="margin-top: 2rem; color: var(--text-title);"><span class="badge" style="margin-bottom:0.5rem">Passo 3</span> Conexão com a Nuvem</h4>
            <p>1. Acesse <a href="https://share.streamlit.io/" target="_blank" style="color:var(--secondary)">share.streamlit.io</a> e faça login utilizando sua própria conta do GitHub;<br>
            2. Clique no botão azul <strong>"New app"</strong>;<br>
            3. Selecione o seu repositório da lista, a branch <code>main</code> e digite o nome do arquivo Python principal.</p>

            <h4 style="margin-top: 2rem; color: var(--text-title);"><span class="badge" style="margin-bottom:0.5rem">Passo 4</span> O Deploy Corporativo</h4>
            <p>Clique em <strong>"Deploy!"</strong>. A nuvem provisionará um container Linux estéril, executará o PIP automaticamente e, em cerca de 2 minutos, entregará uma URL real definitiva (ex: <code>https://folha-techsolutions.streamlit.app</code>) pronta para uso em produção!</p>
            `
        }
    ]
};