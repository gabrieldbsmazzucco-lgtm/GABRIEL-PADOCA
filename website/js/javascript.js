/* ========================================
   SCRIPT PRINCIPAL - PÁGINA INDEX.HTML
   Animações e interatividade da página principal
   ======================================== */

/* ========================================
   FUNÇÃO: Adicionar classe 'active' ao link de navegação atual
   Descrição: Quando a página carrega, esta função verifica qual página
   está sendo visualizada e adiciona a classe 'active' ao link correspondente
   na navegação, indicando visualmente qual página está ativa.
   ======================================== */
function ativarLinkNavegacao() {
    // Obtém a URL atual da página
    const paginaAtual = window.location.pathname;
    
    // Obtém todos os links de navegação
    const links = document.querySelectorAll('.nav-link');
    
    // Itera sobre cada link de navegação
    links.forEach(link => {
        // Remove a classe 'active' de todos os links
        link.classList.remove('active');
        
        // Verifica se o href do link contém a página atual
        if (link.getAttribute('href').includes(paginaAtual.split('/').pop() || 'index.html')) {
            // Adiciona a classe 'active' ao link correspondente
            link.classList.add('active');
        }
    });
}

/* ========================================
   FUNÇÃO: Adicionar efeito de hover aos cards de informação
   Descrição: Esta função adiciona um efeito visual quando o usuário
   passa o mouse sobre os cards de informação, melhorando a interatividade.
   ======================================== */
function adicionarEfeitosHoverCards() {
    // Obtém todos os cards de informação
    const cards = document.querySelectorAll('.info-card');
    
    // Itera sobre cada card
    cards.forEach(card => {
        // Adiciona evento de mouse enter (ao passar o mouse)
        card.addEventListener('mouseenter', function() {
            // Adiciona uma classe para aplicar estilos de hover
            this.style.backgroundColor = '#FFD700';
            this.style.color = '#000000';
        });
        
        // Adiciona evento de mouse leave (ao sair do mouse)
        card.addEventListener('mouseleave', function() {
            // Remove os estilos de hover
            this.style.backgroundColor = '#FFFFFF';
            this.style.color = '#000000';
        });
    });
}

/* ========================================
   FUNÇÃO: Animar elementos ao entrar na viewport
   Descrição: Esta função detecta quando elementos entram na área visível
   da página e adiciona uma animação de fade-in, criando um efeito visual
   interessante quando o usuário faz scroll.
   ======================================== */
function adicionarAnimacaoScroll() {
    // Obtém todos os elementos que devem ser animados
    const elementos = document.querySelectorAll('.info-card, .news-card, .sponsor-card, .section-title, .cta-section');
    
    // Cria um observador de intersecção (detecta quando elementos entram na viewport)
    const observador = new IntersectionObserver(function(entries) {
        // Itera sobre cada elemento observado
        entries.forEach(entry => {
            // Verifica se o elemento está visível na viewport
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Para de observar este elemento após a animação
                observador.unobserve(entry.target);
            }
        });
    }, {
        // Define a margem de ativação (elemento é considerado visível 100px antes de entrar)
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Inicia a observação de cada elemento
    elementos.forEach(elemento => {
        // Define estilos iniciais para a animação
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(20px)';
        elemento.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Começa a observar o elemento
        observador.observe(elemento);
    });
}

/* ========================================
   FUNÇÃO: Adicionar interatividade aos cards de notícia
   Descrição: Esta função adiciona efeitos de hover aos cards de notícia,
   melhorando a experiência do usuário ao interagir com as notícias.
   ======================================== */
function adicionarEfeitosNewsCards() {
    // Obtém todos os cards de notícia
    const newsCards = document.querySelectorAll('.news-card');
    
    // Itera sobre cada card de notícia
    newsCards.forEach(card => {
        // Adiciona evento de mouse enter (ao passar o mouse)
        card.addEventListener('mouseenter', function() {
            // Aumenta a opacidade do card
            this.style.opacity = '1';
        });
        
        // Adiciona evento de mouse leave (ao sair do mouse)
        card.addEventListener('mouseleave', function() {
            // Restaura a opacidade normal
            this.style.opacity = '1';
        });
    });
}

/* ========================================
   FUNÇÃO: Adicionar interatividade aos cards de patrocinador
   Descrição: Esta função adiciona efeitos visuais aos cards de patrocinador,
   criando uma experiência mais interativa para o usuário.
   ======================================== */
function adicionarEfeitosSponsorCards() {
    // Obtém todos os cards de patrocinador
    const sponsorCards = document.querySelectorAll('.sponsor-card');
    
    // Itera sobre cada card de patrocinador
    sponsorCards.forEach(card => {
        // Adiciona evento de mouse enter (ao passar o mouse)
        card.addEventListener('mouseenter', function() {
            // Aumenta a opacidade do card
            this.style.opacity = '1';
        });
        
        // Adiciona evento de mouse leave (ao sair do mouse)
        card.addEventListener('mouseleave', function() {
            // Restaura a opacidade normal
            this.style.opacity = '1';
        });
    });
}

/* ========================================
   FUNÇÃO: Adicionar efeito suave ao botão CTA
   Descrição: Esta função adiciona interatividade ao botão de chamada
   para ação, criando efeitos visuais quando o usuário interage com ele.
   ======================================== */
function adicionarEfeitoBotaoCTA() {
    // Obtém o botão de chamada para ação
    const botao = document.querySelector('.cta-button');
    
    // Verifica se o botão existe
    if (botao) {
        // Adiciona evento de clique
        botao.addEventListener('click', function(e) {
            // Cria um efeito de ripple (onda) ao clicar
            const ripple = document.createElement('span');
            
            // Define a classe do ripple para estilização
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.pointerEvents = 'none';
            
            // Calcula a posição do ripple baseado na posição do clique
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left - 10) + 'px';
            ripple.style.top = (e.clientY - rect.top - 10) + 'px';
            
            // Adiciona o ripple ao botão
            this.appendChild(ripple);
            
            // Remove o ripple após a animação
            setTimeout(() => ripple.remove(), 600);
        });
    }
}

/* ========================================
   FUNÇÃO: Inicializar todas as funcionalidades
   Descrição: Esta função é chamada quando a página carrega e inicializa
   todas as funcionalidades JavaScript do site.
   ======================================== */
function inicializar() {
    // Ativa o link de navegação correspondente à página atual
    ativarLinkNavegacao();
    
    // Adiciona efeitos de hover aos cards de informação
    adicionarEfeitosHoverCards();
    
    // Adiciona efeitos aos cards de notícia
    adicionarEfeitosNewsCards();
    
    // Adiciona efeitos aos cards de patrocinador
    adicionarEfeitosSponsorCards();
    
    // Adiciona animações ao fazer scroll
    adicionarAnimacaoScroll();
    
    // Adiciona efeito ao botão CTA
    adicionarEfeitoBotaoCTA();
}

/* ========================================
   EVENTO: Executar inicialização quando a página carrega
   Descrição: Este evento garante que todas as funcionalidades sejam
   inicializadas assim que o DOM estiver pronto para ser manipulado.
   ======================================== */
document.addEventListener('DOMContentLoaded', inicializar);
/* ========================================
   JAVASCRIPT - PÁGINA DE ELENCO
   Funções para interatividade e animações
   ======================================== */

/* ========================================
   FUNÇÃO: Ativar Link de Navegação
   Marca o link da página atual como ativo
   ======================================== */

function ativarLinkNavegacao() {
    /* Seleciona todos os links de navegação */
    const navLinks = document.querySelectorAll('.nav-link');
    
    /* Itera sobre cada link */
    navLinks.forEach(link => {
        /* Obtém o href do link */
        const href = link.getAttribute('href');
        
        /* Obtém o nome do arquivo atual */
        const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
        
        /* Verifica se o href corresponde à página atual */
        if (href === paginaAtual || (paginaAtual === '' && href === 'index.html')) {
            /* Adiciona a classe 'active' ao link */
            link.classList.add('active');
        } else {
            /* Remove a classe 'active' de outros links */
            link.classList.remove('active');
        }
    });
}

/* ========================================
   FUNÇÃO: Adicionar Efeitos Hover às Imagens
   Adiciona animação ao passar o mouse
   ======================================== */

function adicionarEfeitosHoverImagens() {
    /* Seleciona todas as imagens de elenco */
    const rosterImages = document.querySelectorAll('.roster-image');
    
    /* Itera sobre cada imagem */
    rosterImages.forEach(image => {
        /* Adiciona evento de mouse enter */
        image.addEventListener('mouseenter', function() {
            /* Adiciona efeito visual */
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 8px 20px rgba(255, 215, 0, 0.3)';
        });
        
        /* Adiciona evento de mouse leave */
        image.addEventListener('mouseleave', function() {
            /* Remove o efeito visual */
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        });
    });
}

/* ========================================
   FUNÇÃO: Adicionar Animação ao Fazer Scroll
   Faz as imagens aparecerem com fade-in ao scroll
   ======================================== */

function adicionarAnimacaoScroll() {
    /* Seleciona todos os containers de categoria */
    const categoryContainers = document.querySelectorAll('.category-container');
    
    /* Cria um Intersection Observer para detectar quando elementos entram na viewport */
    const observer = new IntersectionObserver((entries) => {
        /* Itera sobre cada entrada observada */
        entries.forEach(entry => {
            /* Verifica se o elemento está visível */
            if (entry.isIntersecting) {
                /* Adiciona classe para animação fade-in */
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeIn 0.6s ease-in-out';
                
                /* Para de observar o elemento */
                observer.unobserve(entry.target);
            }
        });
    }, {
        /* Define o threshold para quando o elemento é considerado visível */
        threshold: 0.1
    });
    
    /* Itera sobre cada container e começa a observar */
    categoryContainers.forEach(container => {
        /* Define opacidade inicial como 0 */
        container.style.opacity = '0';
        
        /* Observa o container */
        observer.observe(container);
    });
}

/* ========================================
   FUNÇÃO: Adicionar Animação CSS Dinamicamente
   Injeta a animação fade-in no documento
   ======================================== */

function adicionarAnimacaoCss() {
    /* Cria uma tag style */
    const style = document.createElement('style');
    
    /* Define o conteúdo CSS com a animação fade-in */
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    
    /* Adiciona a tag style ao head do documento */
    document.head.appendChild(style);
}

/* ========================================
   FUNÇÃO: Inicializar
   Executa todas as funções ao carregar a página
   ======================================== */

function inicializar() {
    /* Aguarda o carregamento completo do DOM */
    if (document.readyState === 'loading') {
        /* Se o DOM ainda está carregando, aguarda o evento DOMContentLoaded */
        document.addEventListener('DOMContentLoaded', function() {
            /* Ativa o link de navegação */
            ativarLinkNavegacao();
            
            /* Adiciona animação CSS */
            adicionarAnimacaoCss();
            
            /* Adiciona efeitos hover às imagens */
            adicionarEfeitosHoverImagens();
            
            /* Adiciona animação ao fazer scroll */
            adicionarAnimacaoScroll();
        });
    } else {
        /* Se o DOM já foi carregado, executa as funções imediatamente */
        ativarLinkNavegacao();
        adicionarAnimacaoCss();
        adicionarEfeitosHoverImagens();
        adicionarAnimacaoScroll();
    }
}

/* Chama a função de inicialização */
inicializar();
/* ========================================
   JAVASCRIPT - PÁGINA DE JOGOS E NOTÍCIAS
   Funções para interatividade e animações
   ======================================== */

/* ========================================
   FUNÇÃO: Ativar Link de Navegação
   Marca o link da página atual como ativo
   ======================================== */

function ativarLinkNavegacao() {
    /* Seleciona todos os links de navegação */
    const navLinks = document.querySelectorAll('.nav-link');
    
    /* Itera sobre cada link */
    navLinks.forEach(link => {
        /* Obtém o href do link */
        const href = link.getAttribute('href');
        
        /* Obtém o nome do arquivo atual */
        const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
        
        /* Verifica se o href corresponde à página atual */
        if (href === paginaAtual || (paginaAtual === '' && href === 'index.html')) {
            /* Adiciona a classe 'active' ao link */
            link.classList.add('active');
        } else {
            /* Remove a classe 'active' de outros links */
            link.classList.remove('active');
        }
    });
}

/* ========================================
   FUNÇÃO: Adicionar Efeitos Hover aos Cards de Jogo
   Adiciona animações ao passar o mouse
   ======================================== */

function adicionarEfeitosHoverGameCards() {
    /* Seleciona todos os cards de jogo */
    const gameCards = document.querySelectorAll('.game-card');
    
    /* Itera sobre cada card */
    gameCards.forEach(card => {
        /* Adiciona evento de mouse enter */
        card.addEventListener('mouseenter', function() {
            /* Adiciona classe para efeito visual */
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 8px 16px rgba(255, 215, 0, 0.3)';
        });
        
        /* Adiciona evento de mouse leave */
        card.addEventListener('mouseleave', function() {
            /* Remove o efeito visual */
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
}

/* ========================================
   FUNÇÃO: Adicionar Efeitos Hover aos Cards de Resultado
   Adiciona animações ao passar o mouse
   ======================================== */

function adicionarEfeitosHoverResultCards() {
    /* Seleciona todos os cards de resultado */
    const resultCards = document.querySelectorAll('.result-card');
    
    /* Itera sobre cada card */
    resultCards.forEach(card => {
        /* Adiciona evento de mouse enter */
        card.addEventListener('mouseenter', function() {
            /* Adiciona classe para efeito visual */
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(255, 215, 0, 0.2)';
        });
        
        /* Adiciona evento de mouse leave */
        card.addEventListener('mouseleave', function() {
            /* Remove o efeito visual */
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
}

/* ========================================
   FUNÇÃO: Adicionar Efeitos Hover aos Cards de Notícia
   Adiciona animações ao passar o mouse
   ======================================== */

function adicionarEfeitosHoverNewsCards() {
    /* Seleciona todos os cards de notícia */
    const newsCards = document.querySelectorAll('.news-card');
    
    /* Itera sobre cada card */
    newsCards.forEach(card => {
        /* Adiciona evento de mouse enter */
        card.addEventListener('mouseenter', function() {
            /* Adiciona classe para efeito visual */
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 8px 16px rgba(255, 215, 0, 0.3)';
        });
        
        /* Adiciona evento de mouse leave */
        card.addEventListener('mouseleave', function() {
            /* Remove o efeito visual */
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
}

/* ========================================
   FUNÇÃO: Adicionar Animação ao Fazer Scroll
   Faz cards aparecerem com fade-in ao scroll
   ======================================== */

function adicionarAnimacaoScroll() {
    /* Seleciona todos os cards (jogo, resultado e notícia) */
    const allCards = document.querySelectorAll('.game-card, .result-card, .news-card');
    
    /* Cria um Intersection Observer para detectar quando elementos entram na viewport */
    const observer = new IntersectionObserver((entries) => {
        /* Itera sobre cada entrada observada */
        entries.forEach(entry => {
            /* Verifica se o elemento está visível */
            if (entry.isIntersecting) {
                /* Adiciona classe para animação fade-in */
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeIn 0.6s ease-in-out';
                
                /* Para de observar o elemento */
                observer.unobserve(entry.target);
            }
        });
    }, {
        /* Define o threshold para quando o elemento é considerado visível */
        threshold: 0.1
    });
    
    /* Itera sobre cada card e começa a observar */
    allCards.forEach(card => {
        /* Define opacidade inicial como 0 */
        card.style.opacity = '0';
        
        /* Observa o card */
        observer.observe(card);
    });
}

/* ========================================
   FUNÇÃO: Adicionar Animação CSS Dinamicamente
   Injeta a animação fade-in no documento
   ======================================== */

function adicionarAnimacaoCss() {
    /* Cria uma tag style */
    const style = document.createElement('style');
    
    /* Define o conteúdo CSS com a animação fade-in */
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    
    /* Adiciona a tag style ao head do documento */
    document.head.appendChild(style);
}

/* ========================================
   FUNÇÃO: Adicionar Filtro de Categorias
   Permite filtrar jogos por categoria
   ======================================== */

function adicionarFiltrosCategorias() {
    /* Seleciona todos os cards de jogo */
    const gameCards = document.querySelectorAll('.game-card');
    
    /* Cria um objeto para armazenar categorias únicas */
    const categorias = new Set();
    
    /* Itera sobre cada card e extrai as categorias */
    gameCards.forEach(card => {
        const categoryText = card.querySelector('.game-category').textContent;
        const category = categoryText.replace('Categoria: ', '');
        categorias.add(category);
    });
}

/* ========================================
   FUNÇÃO: Adicionar Links de Notícias
   Adiciona interatividade aos links de notícias
   ======================================== */

function adicionarLinksNoticias() {
    /* Seleciona todos os links de notícia */
    const newsLinks = document.querySelectorAll('.news-link, .result-link');
    
    /* Itera sobre cada link */
    newsLinks.forEach(link => {
        /* Adiciona evento de clique */
        link.addEventListener('click', function(event) {
            /* Verifica se o link não tem href válido */
            if (this.getAttribute('href') === '#') {
                /* Previne o comportamento padrão */
                event.preventDefault();
                
                /* Obtém o título da notícia */
                const newsCard = this.closest('.news-card, .result-card');
                const newsTitle = newsCard.querySelector('.news-title, .result-title').textContent;
                
                /* Exibe uma mensagem */
                alert(`Abrindo: ${newsTitle}`);
            }
        });
    });
}

/* ========================================
   FUNÇÃO: Inicializar
   Executa todas as funções ao carregar a página
   ======================================== */

function inicializar() {
    /* Aguarda o carregamento completo do DOM */
    if (document.readyState === 'loading') {
        /* Se o DOM ainda está carregando, aguarda o evento DOMContentLoaded */
        document.addEventListener('DOMContentLoaded', function() {
            /* Ativa o link de navegação */
            ativarLinkNavegacao();
            
            /* Adiciona animação CSS */
            adicionarAnimacaoCss();
            
            /* Adiciona efeitos hover aos cards de jogo */
            adicionarEfeitosHoverGameCards();
            
            /* Adiciona efeitos hover aos cards de resultado */
            adicionarEfeitosHoverResultCards();
            
            /* Adiciona efeitos hover aos cards de notícia */
            adicionarEfeitosHoverNewsCards();
            
            /* Adiciona animação ao fazer scroll */
            adicionarAnimacaoScroll();
            
            /* Adiciona filtros de categorias */
            adicionarFiltrosCategorias();
            
            /* Adiciona links de notícias */
            adicionarLinksNoticias();
        });
    } else {
        /* Se o DOM já foi carregado, executa as funções imediatamente */
        ativarLinkNavegacao();
        adicionarAnimacaoCss();
        adicionarEfeitosHoverGameCards();
        adicionarEfeitosHoverResultCards();
        adicionarEfeitosHoverNewsCards();
        adicionarAnimacaoScroll();
        adicionarFiltrosCategorias();
        adicionarLinksNoticias();
    }
}

/* Chama a função de inicialização */
inicializar();
/* ========================================
   SCRIPT DE VALIDAÇÃO - PÁGINA SELETIVA.HTML
   Validação de formulário e interatividade
   ======================================== */

/* ========================================
   FUNÇÃO: Validar nome completo
   Descrição: Verifica se o nome contém pelo menos 3 caracteres
   e se não contém números. Retorna true se válido, false caso contrário.
   ======================================== */
function validarNome(nome) {
    // Remove espaços em branco no início e fim
    nome = nome.trim();
    
    // Verifica se o nome tem pelo menos 3 caracteres
    if (nome.length < 3) {
        return false;
    }
    
    // Verifica se o nome contém números
    if (/\d/.test(nome)) {
        return false;
    }
    
    // Se passou em todas as validações, retorna true
    return true;
}

/* ========================================
   FUNÇÃO: Validar email
   Descrição: Verifica se o email tem um formato válido usando
   uma expressão regular. Retorna true se válido, false caso contrário.
   ======================================== */
function validarEmail(email) {
    // Remove espaços em branco
    email = email.trim();
    
    // Expressão regular para validar formato de email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Testa se o email corresponde ao padrão
    return regexEmail.test(email);
}

/* ========================================
   FUNÇÃO: Validar telefone
   Descrição: Verifica se o telefone contém apenas números e tem
   entre 10 e 11 dígitos. Retorna true se válido, false caso contrário.
   ======================================== */
function validarTelefone(telefone) {
    // Remove todos os caracteres que não são números
    const apenasNumeros = telefone.replace(/\D/g, '');
    
    // Verifica se tem entre 10 e 11 dígitos
    if (apenasNumeros.length < 10 || apenasNumeros.length > 11) {
        return false;
    }
    
    // Se passou em todas as validações, retorna true
    return true;
}

/* ========================================
   FUNÇÃO: Validar idade
   Descrição: Verifica se a idade é um número entre 1 e 120.
   Retorna true se válido, false caso contrário.
   ======================================== */
function validarIdade(idade) {
    // Converte para número inteiro
    const idadeNum = parseInt(idade);
    
    // Verifica se é um número válido
    if (isNaN(idadeNum)) {
        return false;
    }
    
    // Verifica se está entre 1 e 120
    if (idadeNum < 1 || idadeNum > 120) {
        return false;
    }
    
    // Se passou em todas as validações, retorna true
    return true;
}

/* ========================================
   FUNÇÃO: Validar posição selecionada
   Descrição: Verifica se uma posição foi selecionada.
   Retorna true se válido, false caso contrário.
   ======================================== */
function validarPosicao(posicao) {
    // Verifica se a posição não está vazia
    return posicao.trim() !== '';
}

/* ========================================
   FUNÇÃO: Validar experiência selecionada
   Descrição: Verifica se uma experiência foi selecionada.
   Retorna true se válido, false caso contrário.
   ======================================== */
function validarExperiencia(experiencia) {
    // Verifica se a experiência não está vazia
    return experiencia.trim() !== '';
}

/* ========================================
   FUNÇÃO: Validar termos e condições
   Descrição: Verifica se o checkbox de termos foi marcado.
   Retorna true se válido, false caso contrário.
   ======================================== */
function validarTermos(termos) {
    // Verifica se o checkbox está marcado
    return termos === true;
}

/* ========================================
   FUNÇÃO: Exibir mensagem de erro
   Descrição: Exibe uma mensagem de erro abaixo de um campo específico.
   Recebe o ID do elemento de erro e a mensagem a ser exibida.
   ======================================== */
function exibirErro(idErro, mensagem) {
    // Obtém o elemento de erro pelo ID
    const elementoErro = document.getElementById(idErro);
    
    // Verifica se o elemento existe
    if (elementoErro) {
        // Define o texto da mensagem de erro
        elementoErro.textContent = mensagem;
        
        // Adiciona a classe para estilizar o erro (já definida em CSS)
        elementoErro.style.display = 'block';
    }
}

/* ========================================
   FUNÇÃO: Limpar mensagem de erro
   Descrição: Remove a mensagem de erro de um campo específico.
   Recebe o ID do elemento de erro a ser limpo.
   ======================================== */
function limparErro(idErro) {
    // Obtém o elemento de erro pelo ID
    const elementoErro = document.getElementById(idErro);
    
    // Verifica se o elemento existe
    if (elementoErro) {
        // Define o texto como vazio
        elementoErro.textContent = '';
        
        // Esconde o elemento de erro
        elementoErro.style.display = 'none';
    }
}

/* ========================================
   FUNÇÃO: Validar formulário completo
   Descrição: Valida todos os campos do formulário e exibe mensagens
   de erro apropriadas. Retorna true se o formulário é válido, false caso contrário.
   ======================================== */
function validarFormulario(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();
    
    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const idade = document.getElementById('idade').value;
    const posicao = document.getElementById('posicao').value;
    const experiencia = document.getElementById('experiencia').value;
    const termos = document.getElementById('termos').checked;
    
    // Variável para rastrear se há erros
    let temErros = false;
    
    // Valida nome
    if (!validarNome(nome)) {
        exibirErro('erro-nome', 'Nome deve ter pelo menos 3 caracteres e não pode conter números');
        temErros = true;
    } else {
        limparErro('erro-nome');
    }
    
    // Valida email
    if (!validarEmail(email)) {
        exibirErro('erro-email', 'Email inválido. Use o formato: seu.email@exemplo.com');
        temErros = true;
    } else {
        limparErro('erro-email');
    }
    
    // Valida telefone
    if (!validarTelefone(telefone)) {
        exibirErro('erro-telefone', 'Telefone deve conter entre 10 e 11 dígitos');
        temErros = true;
    } else {
        limparErro('erro-telefone');
    }
    
    // Valida idade
    if (!validarIdade(idade)) {
        exibirErro('erro-idade', 'Idade deve ser um número entre 1 e 120');
        temErros = true;
    } else {
        limparErro('erro-idade');
    }
    
    // Valida posição
    if (!validarPosicao(posicao)) {
        exibirErro('erro-posicao', 'Selecione uma posição');
        temErros = true;
    } else {
        limparErro('erro-posicao');
    }
    
    // Valida experiência
    if (!validarExperiencia(experiencia)) {
        exibirErro('erro-experiencia', 'Selecione seu nível de experiência');
        temErros = true;
    } else {
        limparErro('erro-experiencia');
    }
    
    // Valida termos e condições
    if (!validarTermos(termos)) {
        exibirErro('erro-termos', 'Você deve concordar com os termos e condições');
        temErros = true;
    } else {
        limparErro('erro-termos');
    }
    
    // Se não há erros, envia o formulário para o Formspree
    if (!temErros) {
        // Exibe mensagem de sucesso
        exibirMensagemSucesso();
        
        // Envia o formulário para o Formspree após 1 segundo
        // Isso permite que o usuário veja a mensagem de sucesso antes do envio
        setTimeout(() => {
            // Obtém o formulário
            const formulario = document.getElementById('seletiva-form');
            
            // Envia o formulário (o Formspree irá processar e enviar para o email)
            formulario.submit();
        }, 1000);
    }
    
    // Retorna false para não enviar o formulário duas vezes
    return false;
}

/* ========================================
   FUNÇÃO: Exibir mensagem de sucesso
   Descrição: Exibe uma mensagem de sucesso quando o formulário
   é validado corretamente, indicando que a inscrição foi enviada.
   ======================================== */
function exibirMensagemSucesso() {
    // Obtém o elemento de mensagem de sucesso
    const mensagemSucesso = document.getElementById('success-message');
    
    // Verifica se o elemento existe
    if (mensagemSucesso) {
        // Exibe a mensagem de sucesso
        mensagemSucesso.style.display = 'block';
        
        // Faz scroll até a mensagem de sucesso
        mensagemSucesso.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

/* ========================================
   FUNÇÃO: Adicionar validação em tempo real
   Descrição: Adiciona listeners aos campos do formulário para validar
   em tempo real enquanto o usuário digita, melhorando a experiência do usuário.
   ======================================== */
function adicionarValidacaoTempoReal() {
    // Obtém o campo de nome
    const campoNome = document.getElementById('nome');
    
    // Adiciona evento de entrada (quando o usuário digita)
    if (campoNome) {
        campoNome.addEventListener('input', function() {
            // Se o campo tem valor, valida em tempo real
            if (this.value.trim() !== '') {
                if (validarNome(this.value)) {
                    limparErro('erro-nome');
                }
            }
        });
    }
    
    // Obtém o campo de email
    const campoEmail = document.getElementById('email');
    
    // Adiciona evento de entrada
    if (campoEmail) {
        campoEmail.addEventListener('input', function() {
            // Se o campo tem valor, valida em tempo real
            if (this.value.trim() !== '') {
                if (validarEmail(this.value)) {
                    limparErro('erro-email');
                }
            }
        });
    }
    
    // Obtém o campo de telefone
    const campoTelefone = document.getElementById('telefone');
    
    // Adiciona evento de entrada
    if (campoTelefone) {
        campoTelefone.addEventListener('input', function() {
            // Se o campo tem valor, valida em tempo real
            if (this.value.trim() !== '') {
                if (validarTelefone(this.value)) {
                    limparErro('erro-telefone');
                }
            }
        });
    }
    
    // Obtém o campo de idade
    const campoIdade = document.getElementById('idade');
    
    // Adiciona evento de entrada
    if (campoIdade) {
        campoIdade.addEventListener('input', function() {
            // Se o campo tem valor, valida em tempo real
            if (this.value.trim() !== '') {
                if (validarIdade(this.value)) {
                    limparErro('erro-idade');
                }
            }
        });
    }
}

/* ========================================
   FUNÇÃO: Ativar link de navegação
   Descrição: Marca o link de navegação correspondente à página atual
   como ativo, indicando visualmente em qual página o usuário está.
   ======================================== */
function ativarLinkNavegacao() {
    // Obtém a URL atual da página
    const paginaAtual = window.location.pathname;
    
    // Obtém todos os links de navegação
    const links = document.querySelectorAll('.nav-link');
    
    // Itera sobre cada link de navegação
    links.forEach(link => {
        // Remove a classe 'active' de todos os links
        link.classList.remove('active');
        
        // Verifica se o href do link contém a página atual
        if (link.getAttribute('href').includes(paginaAtual.split('/').pop() || 'seletiva.html')) {
            // Adiciona a classe 'active' ao link correspondente
            link.classList.add('active');
        }
    });
}

/* ========================================
   FUNÇÃO: Inicializar página de seletiva
   Descrição: Esta função é chamada quando a página carrega e inicializa
   todas as funcionalidades JavaScript da página de seletiva.
   ======================================== */
function inicializar() {
    // Ativa o link de navegação correspondente à página atual
    ativarLinkNavegacao();
    
    // Adiciona validação em tempo real aos campos
    adicionarValidacaoTempoReal();
    
    // Obtém o formulário
    const formulario = document.getElementById('seletiva-form');
    
    // Adiciona evento de envio ao formulário
    if (formulario) {
        formulario.addEventListener('submit', validarFormulario);
    }
}

/* ========================================
   EVENTO: Executar inicialização quando a página carrega
   Descrição: Este evento garante que todas as funcionalidades sejam
   inicializadas assim que o DOM estiver pronto para ser manipulado.
   ======================================== */
document.addEventListener('DOMContentLoaded', inicializar);
/* ========================================
   SCRIPT - PÁGINA SOBRE O PROJETO
   Animações e interatividade da página sobre-projeto.html
   ======================================== */

/* ========================================
   FUNÇÃO: Ativar link de navegação
   Descrição: Marca o link de navegação correspondente à página atual
   como ativo, indicando visualmente em qual página o usuário está.
   ======================================== */
function ativarLinkNavegacao() {
    // Obtém a URL atual da página
    const paginaAtual = window.location.pathname;
    
    // Obtém todos os links de navegação
    const links = document.querySelectorAll('.nav-link');
    
    // Itera sobre cada link de navegação
    links.forEach(link => {
        // Remove a classe 'active' de todos os links
        link.classList.remove('active');
        
        // Verifica se o href do link contém a página atual
        if (link.getAttribute('href').includes(paginaAtual.split('/').pop() || 'sobre-projeto.html')) {
            // Adiciona a classe 'active' ao link correspondente
            link.classList.add('active');
        }
    });
}

/* ========================================
   FUNÇÃO: Adicionar animação de scroll
   Descrição: Anima elementos quando eles entram na tela durante o scroll.
   Cria um efeito fade-in suave para melhorar a experiência visual.
   ======================================== */
function adicionarAnimacaoScroll() {
    // Seleciona todos os elementos que devem ser animados
    const elementos = document.querySelectorAll(
        '.section-title, .project-content, .audience-grid, .objective-content, ' +
        '.justification-content, .investment-grid, .benefits-list, .ods-grid, .contact-grid'
    );
    
    // Cria um observador que detecta quando elementos entram na tela
    const observador = new IntersectionObserver(function(entries) {
        // Itera sobre cada elemento observado
        entries.forEach(entry => {
            // Se o elemento está visível na tela
            if (entry.isIntersecting) {
                // Faz aparecer com animação fade-in
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Para de observar (animação já foi executada)
                observador.unobserve(entry.target);
            }
        });
    });
    
    // Para cada elemento, define estilo inicial e começa a observar
    elementos.forEach(elemento => {
        elemento.style.opacity = '0';                    // Invisível inicialmente
        elemento.style.transform = 'translateY(20px)';   // 20px abaixo
        elemento.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; // Transição suave
        observador.observe(elemento);                    // Começa a observar
    });
}

/* ========================================
   FUNÇÃO: Adicionar efeitos hover nos cards
   Descrição: Adiciona interatividade aos cards da página,
   permitindo efeitos visuais ao passar o mouse.
   ======================================== */
function adicionarEfeitosHoverCards() {
    // Seleciona todos os cards de audience
    const audienceCards = document.querySelectorAll('.audience-card');
    
    // Adiciona efeito hover a cada card de audience
    audienceCards.forEach(card => {
        // Evento ao passar o mouse (mouseenter)
        card.addEventListener('mouseenter', function() {
            // Adiciona sombra ao card
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
        });
        
        // Evento ao sair do mouse (mouseleave)
        card.addEventListener('mouseleave', function() {
            // Remove a sombra extra
            this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Seleciona todos os cards de benefício
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    // Adiciona efeito hover a cada card de benefício
    benefitItems.forEach(item => {
        // Evento ao passar o mouse
        item.addEventListener('mouseenter', function() {
            // Muda a cor de fundo
            this.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
        });
        
        // Evento ao sair do mouse
        item.addEventListener('mouseleave', function() {
            // Volta à cor original
            this.style.backgroundColor = 'var(--cor-fundo)';
        });
    });
    
    // Seleciona todos os cards de ODS
    const odsCards = document.querySelectorAll('.ods-card');
    
    // Adiciona efeito hover a cada card de ODS
    odsCards.forEach(card => {
        // Evento ao passar o mouse
        card.addEventListener('mouseenter', function() {
            // Adiciona sombra e muda background
            this.style.boxShadow = '0 8px 20px rgba(255, 215, 0, 0.3)';
            this.style.backgroundColor = 'rgba(255, 215, 0, 0.05)';
        });
        
        // Evento ao sair do mouse
        card.addEventListener('mouseleave', function() {
            // Remove efeitos
            this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            this.style.backgroundColor = 'var(--cor-terciaria)';
        });
    });
}

/* ========================================
   FUNÇÃO: Adicionar efeito ao botão CTA
   Descrição: Adiciona animação de ripple (onda) ao clicar no botão CTA.
   Cria um efeito visual interessante de expansão.
   ======================================== */
function adicionarEfeitoBotaoCTA() {
    // Seleciona o botão CTA
    const botaoCTA = document.querySelector('.cta-button');
    
    // Verifica se o botão existe
    if (botaoCTA) {
        // Adiciona evento de clique ao botão
        botaoCTA.addEventListener('click', function(e) {
            // Obtém a posição do clique
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Cria um elemento para o efeito ripple
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            ripple.style.pointerEvents = 'none';
            ripple.style.transform = 'translate(-50%, -50%)';
            
            // Adiciona o ripple ao botão
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            // Anima o ripple
            ripple.animate([
                { width: '0px', height: '0px', opacity: 1 },
                { width: '300px', height: '300px', opacity: 0 }
            ], {
                duration: 600,
                easing: 'ease-out'
            });
            
            // Remove o ripple após a animação
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
}

/* ========================================
   FUNÇÃO: Inicializar página
   Descrição: Esta função é chamada quando a página carrega e inicializa
   todas as funcionalidades JavaScript da página sobre-projeto.
   ======================================== */
function inicializar() {
    // Ativa o link de navegação correspondente à página atual
    ativarLinkNavegacao();
    
    // Adiciona animação de scroll aos elementos
    adicionarAnimacaoScroll();
    
    // Adiciona efeitos hover aos cards
    adicionarEfeitosHoverCards();
    
    // Adiciona efeito ao botão CTA
    adicionarEfeitoBotaoCTA();
}

/* ========================================
   EVENTO: Executar inicialização quando a página carrega
   Descrição: Este evento garante que todas as funcionalidades sejam
   inicializadas assim que o DOM estiver pronto para ser manipulado.
   ======================================== */
document.addEventListener('DOMContentLoaded', inicializar);
