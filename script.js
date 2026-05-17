// Web Development Laboratory Manual - Main Script

// DOM Elements
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('closeBtn');
const searchBox = document.getElementById('searchBox');
const themeToggle = document.getElementById('themeToggle');
const scrollToTop = document.getElementById('scrollToTop');
const mainContent = document.querySelector('.main-content');
const navItems = document.querySelectorAll('.nav-item');
const homeContent = document.getElementById('homeContent');
const experimentContent = document.getElementById('experimentContent');

let currentExperiment = null;

// ===== INITIALIZATION =====
function init() {
    setupEventListeners();
    loadThemeMode();
    highlightActiveNav('home');
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Hamburger menu
    hamburger.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', closeSidebar);

    // Navigation items
    navItems.forEach(item => {
        item.addEventListener('click', handleNavClick);
    });

    // Search functionality
    searchBox.addEventListener('input', handleSearch);

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Scroll to top
    window.addEventListener('scroll', showScrollToTopButton);
    scrollToTop.addEventListener('click', scrollToTopFunction);

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
                closeSidebar();
            }
        }
    });
}

// ===== SIDEBAR FUNCTIONALITY =====
function toggleSidebar() {
    sidebar.classList.toggle('active');
}

function closeSidebar() {
    sidebar.classList.remove('active');
}

// ===== NAVIGATION =====
function handleNavClick(e) {
    e.preventDefault();

    const exp = this.getAttribute('data-exp');

    // Remove active class from all items
    navItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');

    highlightActiveNav(exp);

    if (exp === 'home') {
        showHome();
    } else {
        const expIndex = parseInt(exp);
        showExperiment(experiments[expIndex]);
    }

    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        closeSidebar();
    }
}

function highlightActiveNav(exp) {
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-exp') === exp) {
            item.classList.add('active');
        }
    });
}

// ===== SHOW HOME =====
function showHome() {
    homeContent.style.display = 'block';
    experimentContent.style.display = 'none';
    mainContent.scrollTop = 0;
    currentExperiment = null;
}

// ===== SHOW EXPERIMENT =====
function showExperiment(exp) {
    currentExperiment = exp;
    homeContent.style.display = 'none';
    experimentContent.style.display = 'block';
    experimentContent.innerHTML = renderExperiment(exp);
    mainContent.scrollTop = 0;

    // Add event listeners to newly created elements
    setTimeout(() => {
        setupExperimentListeners();
    }, 100);
}

// ===== RENDER EXPERIMENT =====
function renderExperiment(exp) {
    return `
        <div class="experiment-header">
            <h1 class="experiment-title">${exp.title}</h1>
            <p class="experiment-subtitle">📚 ${exp.week}</p>
        </div>

        <div class="section">
            <h3>📝 Problem Statement</h3>
            <div class="section-content">${exp.problem}</div>
        </div>

        <div class="section">
            <h3>💻 Code</h3>
            ${exp.codeBlocks ? exp.codeBlocks.map(block => {
                return `
                <div class="code-block-wrapper">
                    <div class="code-header">
                        <span class="code-language">${block.language}</span>
                        <div class="code-actions">
                            <button class="copy-btn" onclick="copyCode(this)">📋 Copy</button>
                            <button class="expand-btn" onclick="toggleExpand(this)">📖 Expand</button>
                        </div>
                    </div>
                    <pre class="code-block"><code>${escapeHtml(block.code)}</code></pre>
                </div>`;
            }).join('') : `
                <div class="code-block-wrapper">
                    <div class="code-header">
                        <span class="code-language">${exp.language}</span>
                        <div class="code-actions">
                            <button class="copy-btn" onclick="copyCode(this)">📋 Copy</button>
                            <button class="expand-btn" onclick="toggleExpand(this)">📖 Expand</button>
                        </div>
                    </div>
                    <pre class="code-block"><code>${escapeHtml(exp.code)}</code></pre>
                </div>
            `}
        </div>

        <div class="section">
            <h3>📤 Output</h3>
            <div class="section-content" style="background: #f9f9f9; padding: 1rem; border-radius: 8px; border-left: 4px solid #0f3a7d; white-space: pre-wrap; font-family: monospace;">
                ${escapeHtml(exp.output)}
            </div>
        </div>

        <div class="section">
            <h3>❓ Viva Questions</h3>
            <div class="viva-container">
                ${exp.vivaQuestions.map((q, i) => `
                    <div class="viva-item" onclick="toggleViva(this)">
                        <div class="viva-question">Q${i + 1}: ${q.question}</div>
                        <div class="viva-answer">
                            <strong>Answer:</strong> ${q.answer}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ===== SETUP EXPERIMENT LISTENERS =====
function setupExperimentListeners() {
    // Viva questions are already set up with inline onclick
}

// ===== COPY CODE =====
function copyCode(btn) {
    const codeBlock = btn.closest('.code-block-wrapper').querySelector('code');
    const text = codeBlock.textContent;

    navigator.clipboard.writeText(text).then(() => {
        btn.textContent = '✅ Copied!';
        btn.classList.add('copied');

        setTimeout(() => {
            btn.textContent = '📋 Copy';
            btn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        alert('Failed to copy code');
    });
}

// ===== TOGGLE EXPAND =====
function toggleExpand(btn) {
    const codeBlock = btn.closest('.code-block-wrapper').querySelector('.code-block');
    codeBlock.classList.toggle('expanded');

    if (codeBlock.classList.contains('expanded')) {
        btn.textContent = '📖 Collapse';
    } else {
        btn.textContent = '📖 Expand';
    }
}

// ===== TOGGLE VIVA =====
function toggleViva(element) {
    // Remove active from other items
    const container = element.closest('.viva-container');
    container.querySelectorAll('.viva-item').forEach(item => {
        if (item !== element) {
            item.classList.remove('active');
        }
    });

    // Toggle current item
    element.classList.toggle('active');
}

// ===== SEARCH FUNCTIONALITY =====
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query === '') {
        navItems.forEach(item => {
            item.style.display = 'flex';
        });
        return;
    }

    navItems.forEach(item => {
        const text = item.querySelector('.nav-text').textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// ===== THEME TOGGLE =====
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme-mode', isDark ? 'dark' : 'light');
}

function loadThemeMode() {
    const savedTheme = localStorage.getItem('theme-mode');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// ===== SCROLL TO TOP =====
function showScrollToTopButton() {
    if (mainContent.scrollTop > 300) {
        scrollToTop.classList.add('show');
    } else {
        scrollToTop.classList.remove('show');
    }
}

function scrollToTopFunction() {
    mainContent.scrollTop = 0;
}

// ===== UTILITY FUNCTIONS =====
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ===== RESPONSIVE HANDLING =====
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeSidebar();
    }
});

// ===== START APP =====
document.addEventListener('DOMContentLoaded', init);

// ===== SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchBox.focus();
    }

    // Escape to close search
    if (e.key === 'Escape') {
        searchBox.value = '';
        handleSearch({ target: searchBox });
    }
});
