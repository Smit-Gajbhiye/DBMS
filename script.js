/* ================================================
   DBMS Laboratory Manual - JavaScript
   ================================================ */

// DOM Elements
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const themeToggle = document.getElementById('theme-toggle');
const scrollTop = document.getElementById('scroll-top');
const searchInput = document.getElementById('search-input');
const sidebarSearch = document.getElementById('sidebar-search');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const collapsibleBtns = document.querySelectorAll('.collapsible-btn');
const copyBtns = document.querySelectorAll('.copy-btn');

// ================================================
// INITIALIZATION
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    // Ensure home section is visible
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
        homeSection.style.display = 'block';
        homeSection.style.visibility = 'visible';
        homeSection.style.opacity = '1';
    }
    
    // Initialize after a tiny delay
    setTimeout(function() {
        initializeTheme();
        setupEventListeners();
        setupCopyButtons();
        setupCollapsibles();
        setActiveSection('home');
        Prism.highlightAll();
    }, 50);
});

// ================================================
// THEME MANAGEMENT
// ================================================

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
    }
}

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});

// ================================================
// SIDEBAR & MENU TOGGLE
// ================================================

menuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close sidebar when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Get section ID
        const sectionId = this.getAttribute('data-section');
        setActiveSection(sectionId);
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

function setActiveSection(sectionId) {
    // Hide all sections
    const allSections = document.querySelectorAll('.section');
    allSections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
        section.style.visibility = 'hidden';
    });
    
    // Show selected section
    const activeSection = document.getElementById(sectionId) || document.querySelector(`[data-section="${sectionId}"]`);
    if (activeSection) {
        activeSection.classList.add('active');
        activeSection.style.display = 'block';
        activeSection.style.visibility = 'visible';
        activeSection.style.opacity = '1';
        
        // Update active nav link
        const allNavLinks = document.querySelectorAll('.nav-link');
        allNavLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Scroll to top
    setTimeout(() => window.scrollTo(0, 0), 50);
}

// ================================================
// SCROLL TO TOP BUTTON
// ================================================

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ================================================
// SEARCH FUNCTIONALITY
// ================================================

function performSearch(query) {
    const normalizedQuery = query.toLowerCase().trim();
    
    if (!normalizedQuery) {
        // Show all links if search is empty
        navLinks.forEach(link => {
            link.style.display = 'block';
        });
        return;
    }
    
    navLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        
        if (text.includes(normalizedQuery)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
}

// Header search
searchInput.addEventListener('input', function(e) {
    performSearch(e.target.value);
    sidebarSearch.value = e.target.value;
});

// Sidebar search
sidebarSearch.addEventListener('input', function(e) {
    performSearch(e.target.value);
    searchInput.value = e.target.value;
});

// ================================================
// SETUP EVENT LISTENERS
// ================================================

function setupEventListeners() {
    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        const isClickInsideSidebar = sidebar.contains(e.target);
        const isClickOnMenuToggle = menuToggle.contains(e.target);
        
        if (!isClickInsideSidebar && !isClickOnMenuToggle && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// ================================================
// COPY TO CLIPBOARD FUNCTIONALITY
// ================================================

function setupCopyButtons() {
    copyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const codeBlock = this.nextElementSibling;
            const codeText = codeBlock.querySelector('code').textContent;
            
            // Copy to clipboard
            navigator.clipboard.writeText(codeText).then(function() {
                // Show success feedback
                const originalText = btn.textContent;
                btn.textContent = '✓ Copied!';
                btn.classList.add('copied');
                
                // Reset after 2 seconds
                setTimeout(function() {
                    btn.textContent = originalText;
                    btn.classList.remove('copied');
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy:', err);
                btn.textContent = 'Copy Failed';
                
                setTimeout(function() {
                    btn.textContent = 'Copy Code';
                }, 2000);
            });
        });
    });
}

// ================================================
// COLLAPSIBLE SECTIONS
// ================================================

function setupCollapsibles() {
    collapsibleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            // Toggle show class
            content.classList.toggle('show');
            
            // Change button text arrow
            if (content.classList.contains('show')) {
                this.textContent = this.textContent.replace('▼', '▲');
            } else {
                this.textContent = this.textContent.replace('▲', '▼');
            }
        });
    });
}

// ================================================
// PRISM.JS SYNTAX HIGHLIGHTING
// ================================================

// Prism is already loaded via CDN in HTML
// Just call highlightAll() when needed

function highlightCode() {
    Prism.highlightAll();
}

// ================================================
// KEYBOARD SHORTCUTS
// ================================================

document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
    }
    
    // Ctrl/Cmd + J for dark mode toggle
    if ((e.ctrlKey || e.metaKey) && e.key === 'j') {
        e.preventDefault();
        themeToggle.click();
    }
    
    // Escape to close sidebar
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// ================================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            
            // Find and set active section
            const target = document.querySelector(href);
            const section = target.closest('.section');
            
            if (section) {
                const sectionId = section.getAttribute('data-section');
                setActiveSection(sectionId);
            }
        }
    });
});

// ================================================
// CODE BEAUTIFICATION (OPTIONAL)
// ================================================

function formatCode(code) {
    // Basic code formatting helper
    return code
        .trim()
        .split('\n')
        .map(line => line.trimRight())
        .join('\n');
}

// ================================================
// EXPERIMENT DATA (For future enhancements)
// ================================================

const experiments = [
    {
        id: 1,
        title: 'College Course Registration System',
        week: 1,
        topics: ['DDL', 'DML', 'Constraints', 'CREATE', 'ALTER', 'DROP']
    },
    {
        id: 2,
        title: 'Online Food Delivery System',
        week: 2,
        topics: ['CREATE TABLE', 'FK', 'Constraints']
    },
    {
        id: 3,
        title: 'Bank Account Management System',
        week: 3,
        topics: ['UPDATE', 'DELETE', 'TRANSACTION', 'SAVEPOINT', 'GRANT/REVOKE']
    },
    {
        id: 4,
        title: 'Retail Store Sales Analysis',
        week: 4,
        topics: ['Aggregate Functions', 'GROUP BY', 'HAVING']
    },
    {
        id: 5,
        title: 'Hospital Patient Billing System',
        week: 5,
        topics: ['GROUP BY', 'HAVING', 'SUM', 'AVG']
    },
    {
        id: 6,
        title: 'University Examination System',
        week: 6,
        topics: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'CROSS JOIN']
    },
    {
        id: 7,
        title: 'Online Bookstore Management System',
        week: 7,
        topics: ['CREATE VIEW', 'JOIN', 'DROP VIEW']
    },
    {
        id: 8,
        title: 'Employee Salary Analysis System',
        week: 8,
        topics: ['Subqueries', 'Correlated Subquery']
    },
    {
        id: 9,
        title: 'Student Scholarship Management System',
        week: 9,
        topics: ['Subqueries', 'Aggregate Functions']
    },
    {
        id: 10,
        title: 'Library Management System using Cursor',
        week: 10,
        topics: ['Stored Procedure', 'Cursor', 'FETCH', 'LOOP']
    },
    {
        id: 11,
        title: 'Online Order Processing System',
        week: 11,
        topics: ['FUNCTION', 'Revenue Calculation']
    },
    {
        id: 12,
        title: 'Bank Trigger Management System',
        week: 12,
        topics: ['BEFORE INSERT Trigger', 'SIGNAL SQLSTATE']
    },
    {
        id: 13,
        title: 'Student Result Management System',
        week: 13,
        topics: ['INSERT Trigger', 'UPDATE Trigger', 'Validation']
    },
    {
        id: 14,
        title: 'MongoDB CRUD Operations',
        week: 14,
        topics: ['MongoDB', 'CRUD', 'Logical Operators', 'NoSQL']
    }
];

// ================================================
// LOCAL STORAGE MANAGEMENT
// ================================================

class StorageManager {
    static savePreference(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    
    static getPreference(key) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }
    
    static removePreference(key) {
        localStorage.removeItem(key);
    }
    
    static clearAll() {
        localStorage.clear();
    }
}

// Save current section when user navigates
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        StorageManager.savePreference('lastSection', sectionId);
    });
});

// Restore last viewed section on page load
window.addEventListener('load', function() {
    const lastSection = StorageManager.getPreference('lastSection') || 'home';
    // Don't auto-load on first visit, let user see home page
    // setActiveSection(lastSection);
});

// ================================================
// ANALYTICS & TRACKING (Optional)
// ================================================

class Analytics {
    static trackExperimentView(expId) {
        const views = StorageManager.getPreference('experimentViews') || {};
        views[expId] = (views[expId] || 0) + 1;
        StorageManager.savePreference('experimentViews', views);
    }
    
    static getExperimentStats() {
        return StorageManager.getPreference('experimentViews') || {};
    }
}

// Track when experiments are viewed
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        if (section.startsWith('exp')) {
            const expId = section.replace('exp', '');
            Analytics.trackExperimentView(expId);
        }
    });
});

// ================================================
// PRINT FUNCTIONALITY
// ================================================

function printSection() {
    window.print();
}

// Add print button functionality if needed
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        // Let browser handle default print
        e.preventDefault();
        window.print();
    }
});

// ================================================
// ACCESSIBILITY ENHANCEMENTS
// ================================================

// Add ARIA labels and roles
function setupAccessibility() {
    const mainContent = document.querySelector('.main-content');
    mainContent.setAttribute('role', 'main');
    
    sidebar.setAttribute('role', 'navigation');
    sidebar.setAttribute('aria-label', 'Main Navigation');
    
    searchInput.setAttribute('aria-label', 'Search experiments');
    sidebarSearch.setAttribute('aria-label', 'Search experiments in sidebar');
}

setupAccessibility();

// ================================================
// MOBILE MENU IMPROVEMENTS
// ================================================

// Prevent body scroll when sidebar is open
function toggleBodyScroll(prevent) {
    if (prevent) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Update sidebar toggle behavior
const originalMenuToggleClick = menuToggle.onclick;

menuToggle.addEventListener('click', function() {
    const isOpen = sidebar.classList.contains('active');
    toggleBodyScroll(!isOpen);
});

// ================================================
// PERFORMANCE OPTIMIZATION
// ================================================

// Lazy load images if any (future enhancement)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });
}

// ================================================
// ERROR HANDLING
// ================================================

window.addEventListener('error', function(e) {
    console.error('Error:', e.message);
    // In production, send error to logging service
});

// ================================================
// CONSOLE MESSAGES
// ================================================

console.log('%c🎓 DBMS Laboratory Manual', 'font-size: 18px; font-weight: bold; color: #2196F3;');
console.log('%cWelcome to the comprehensive database management systems laboratory!', 'font-size: 14px; color: #666;');
console.log('%cKeyboard Shortcuts:\n• Ctrl+K: Focus search\n• Ctrl+J: Toggle dark mode\n• Esc: Close sidebar', 'font-size: 12px; color: #999;');

// ================================================
// PAGE VISIBILITY API
// ================================================

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // Page is now visible
        console.log('Page is now visible');
    } else {
        // Page is hidden
        console.log('Page is hidden');
    }
});

// ================================================
// EXPORT FUNCTIONALITY (Optional)
// ================================================

function exportSection(sectionId) {
    const section = document.querySelector(`[data-section="${sectionId}"]`);
    if (!section) return;
    
    const text = section.innerText;
    const filename = `${sectionId}-export.txt`;
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// ================================================
// DYNAMIC SECTION LOADING
// ================================================

function dynamicSectionLoad() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger any dynamic loading for this section
                    highlightCode();
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(section);
    });
}

// Initialize dynamic loading
if ('IntersectionObserver' in window) {
    dynamicSectionLoad();
}

// ================================================
// INITIALIZATION COMPLETE
// ================================================

console.log('✓ DBMS Laboratory Manual initialized successfully!');
