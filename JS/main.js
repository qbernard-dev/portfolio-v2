// wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const langBtn = document.getElementById('lang-toggle');
    const langSpan = langBtn.querySelector('.lang-txt');
    
    const translations = {        
        fr: { 
            // Navigation & Titres
            "nav.home": "Accueil",
            "nav.about": "À propos",
            "nav.education": "Parcours",
            "nav.projects": "Projets",
            "nav.contact": "Contact",
            "title.education": "Mon Parcours",
            "title.projects": "Mes Projets",
            "title.contact": "Me Contacter",

            // Hero Section
            "hero.role": "Étudiant en 3ème année d'ingénieur à l'ESEO & Alternant chez QUOTEX",
            "hero.cv": "Voir mon CV",
            "hero.contact": "Me contacter",
            
            // About Section
            "about.title": "Qui suis-je ?",
            "about.p1": "Développeur Back-End passionné par l'architecture logicielle, je jongle principalement entre C#, Python et SQL pour bâtir des outils qui font la différence. Mon parcours, partagé entre l'exigence académique de l'ESEO et professionnelle chez QUOTEX, m'a forgé une solide autonomie et une réelle agilité pour m'adapter à des environnements techniques variés.",
            "about.p2": "Pour moi, le développement ne s'arrête pas à la syntaxe : c'est une question de logique, de curiosité et de collaboration.",
            "about.p3": "Prochaine étape : Juin 2026. Je recherche un stage de 12 semaines à l'international. Prêt à m'immerger dans une nouvelle culture, à peaufiner mon anglais et à apporter ma rigueur à différents projets.",
            "about.skills": "Compétences",
            "skill.agile": "Méthodologies Agile",
            
            // Education Section
            "edu.eseo.degree": "Diplôme d'ingénieur",
            "edu.eseo.desc": "Cycle ingénieur généraliste avec une future spécialisation en Systèmes d'Information. Focus sur l'architecture logicielle et le management d'équipe technique.",
            "edu.but.degree": "BUT Informatique",
            "edu.but.desc": "Parcours Réalisation d'Applications. Apprentissage approfondi du développement Fullstack, des bases de données et des méthodologies agiles. Mention Bien.",
            "edu.bac.degree": "Baccalauréat Général",
            "edu.bac.desc": "Spécialités Mathématiques et Numérique & Sciences Informatiques (NSI). Mention Bien.",
            
            // Tags Education
            "edu.info": "Informatique",
            "edu.elec": "Électronique",
            "edu.mana": "Management",
            "edu.algo": "Algorithmique",
            "edu.web": "Web Fullstack",
            "edu.db": "Bases de Données",
            "edu.agile": "Agile / Scrum",
            
            // Projects Section
            "proj.ameli": "Application web avec 5 mini-jeux développée pour la CPAM des Côtes-d'Armor.",
            "proj.ab": "Site fictif de recherche de logement de vacances pour la région Bretagne.",
            "proj.poke": "Application web répertoriant les Pokémon avec des filtres avancés.",
            "proj.title.navale": "Bataille Navale",
            "proj.game": "Jeu de bataille navale en Python avec une interface graphique.",
            "proj.title.p4": "Puissance 4",
            "proj.p4": "Jeu du Puissance 4 en C avec une interface console.",
            "btn.github": "Voir le code →",
            "btn.protected": "Code protégé",

            // Accessibilité (alt & aria)
            "alt.avatar": "Portrait de Quentin Bernard",
            "alt.eseo": "Logo ESEO",
            "alt.iut": "Logo IUT Lannion",
            "alt.lycee": "Logo Lycée Renoir",
            "alt.navale": "Jeu de la bataille navale",
            "alt.p4": "Jeu du Puissance 4",
            "aria.lang": "Changer de langue",
            "aria.phone": "Téléphone",
            "aria.email": "Email",
            "aria.linkedin": "Profil LinkedIn"
        }, 
        en: { 
            // Navigation & Titres
            "nav.home": "Home",
            "nav.about": "About",
            "nav.education": "Education",
            "nav.projects": "Projects",
            "nav.contact": "Contact",
            "title.education": "My Education",
            "title.projects": "My Projects",
            "title.contact": "Contact Me",

            // Hero Section
            "hero.role": "3rd-Year Engineering Student at ESEO & Work-Study Developer at QUOTEX",
            "hero.cv": "View my Resume",
            "hero.contact": "Get in touch",
            
            // About Section
            "about.title": "Who am I?",
            "about.p1": "As a Back-End developer passionate about software architecture, I primarily juggle C#, Python, and SQL to build tools that make a difference. My journey, split between the academic rigor of ESEO and my professional experience at QUOTEX, has forged a strong sense of autonomy and the agility to adapt to diverse technical environments.",
            "about.p2": "To me, development goes beyond syntax: it is a matter of logic, curiosity, and collaboration.",
            "about.p3": "Next step: June 2026. I am looking for a 12-week international internship. I am ready to immerse myself in a new culture, refine my English, and bring my rigor to various projects.",
            "about.skills": "Skills",
            "skill.agile": "Agile Methodologies",
            
            // Education Section
            "edu.eseo.degree": "Master's Degree in Engineering",
            "edu.eseo.desc": "General engineering program with an upcoming specialization in Information Systems. Strong focus on software architecture and technical team management.",
            "edu.but.degree": "Bachelor's Degree in Computer Science (BUT)",
            "edu.but.desc": "Application Development track. In-depth study of Fullstack development, databases, and Agile methodologies. Graduated with Honors.",
            "edu.bac.degree": "High School Diploma (Baccalauréat)",
            "edu.bac.desc": "Majors in Mathematics and Computer Science (NSI). Graduated with Honors.",
            
            // Tags Education
            "edu.info": "Computer Science",
            "edu.elec": "Electronics",
            "edu.mana": "Management",
            "edu.algo": "Algorithms",
            "edu.web": "Fullstack Web",
            "edu.db": "Databases",
            "edu.agile": "Agile / Scrum",
            
            // Projects Section
            "proj.ameli": "Web application featuring 5 mini-games developed for the CPAM (Health Insurance) of Côtes-d'Armor.",
            "proj.ab": "Fictional vacation rental platform tailored for the Brittany region.",
            "proj.poke": "Web application cataloging Pokémon with advanced filtering features.",
            "proj.title.navale": "Battleship",
            "proj.game": "Battleship game developed in Python with a graphical user interface.",
            "proj.title.p4": "Connect 4",
            "proj.p4": "Connect 4 game developed in C with a console interface.",
            "btn.github": "View code →",
            "btn.protected": "Private repository",

            // Accessibilité (alt & aria)
            "alt.avatar": "Portrait of Quentin Bernard",
            "alt.eseo": "ESEO Logo",
            "alt.iut": "IUT Lannion Logo",
            "alt.lycee": "Renoir High School Logo",
            "alt.navale": "Battleship game interface",
            "alt.p4": "Connect 4 game interface",
            "aria.lang": "Switch language",
            "aria.phone": "Phone",
            "aria.email": "Email",
            "aria.linkedin": "LinkedIn Profile"
        } 
    };

    langBtn.addEventListener('click', () => {
        // make the translations
        const elements = document.querySelectorAll('[data-i18n]');
        let currentLang = langSpan.textContent === 'FR' ? 'fr' : 'en';
        let newLang = currentLang === 'fr' ? 'en' : 'fr';
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = translations[newLang][key];
        });
        
        // update the button text
        if(langSpan.textContent === 'FR') {
            langSpan.textContent = 'EN';
        } else {
            langSpan.textContent = 'FR';
        }

        // update the link href for CV
        let cvLink = document.getElementById('cvlink');
        if(newLang === 'fr') {
            cvLink.setAttribute('href', './mon_cv.pdf');
        } else {
            cvLink.setAttribute('href', './my_cv.pdf');
        }
    });

});