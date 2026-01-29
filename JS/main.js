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
            "nav.home": "Accueil",
            "nav.about": "À propos",
            "nav.education": "Parcours",
            "nav.projects": "Projets",
            "nav.contact": "Contact",
            "hero.role": "Étudiant en 3ème année d'ingénieur à ESEO & Alternant chez QUOTEX",
            "hero.cv": "Voir mon CV",
            "hero.contact": "Contactez-moi",
            "about.title": "Qui suis-je ?",
            "about.p1": "Étudiant en 3ème année d'ingénieur à ESEO, je poursuis ma formation en alternance en tant que développeur logiciel...",
            "about.p2": "Ma passion pour la programmation a débuté en Seconde. Depuis, je me consacre pleinement à la création, au développement et au design.",
            "about.skills": "Compétences",
            "edu.eseo.degree": "Diplôme d'ingénieur",
            "edu.eseo.desc": "Cursus d'ingénieur généraliste avec une future spécialisation en Systèmes d'Information. Focus sur l'architecture logicielle et le management d'équipe technique.",
            "edu.but.degree": "BUT Informatique",
            "edu.but.desc": "Parcours Réalisation d'Applications. Apprentissage approfondie du développement Fullstack et des bases de données et des méthodologies agiles.",
            "edu.bac.degree": "Baccalauréat Général",
            "edu.bac.desc": "Spécialités Mathématiques et Numérique & Sciences Informatiques (NSI). Mention Bien.",
            "edu.info": "Informatique",
            "edu.elec": "Électronique",
            "edu.mana": "Management",
            "edu.algo": "Algorithmique",
            "edu.web": "Web Fullstack",
            "edu.db": "Base de Données",
            "edu.agile": "Agile / Scrum",
            "proj.ab": "Site fictif de recherche de logement de vacances pour la région Bretagne.",
            "proj.poke": "Application web répertoriant les Pokémon avec filtres avancés.",
            "btn.github": "Voir le code →",
        }, 
        en: { 
            "nav.home": "Home",
            "nav.about": "About",
            "nav.education": "Education",
            "nav.projects": "Projects",
            "nav.contact": "Contact",
            "hero.role": "3rd year engineering student at ESEO & Apprentice at QUOTEX",
            "hero.cv": "View my CV",
            "hero.contact": "Contact me",
            "about.title": "Who am I?",
            "about.p1": "As a 3rd year engineering student at ESEO, I am pursuing my studies through an apprenticeship as a software developer...",
            "about.p2": "My passion for programming began in 10th grade. Since then, I have fully dedicated myself to creation, development, and design.",
            "about.skills": "Skills",
            "edu.eseo.degree": "Engineering Degree",
            "edu.eseo.desc": "General engineering curriculum with a future specialization in Information Systems. Focus on software architecture and technical team management.",
            "edu.but.degree": "Bachelor's Degree in Computer Science",
            "edu.but.desc": "Application Development track. In-depth learning of Fullstack development, databases, and agile methodologies.",
            "edu.bac.degree": "General Baccalaureate",
            "edu.bac.desc": "Specializations in Mathematics and Digital & Computer Sciences (NSI). Graduated with Honors.",
            "edu.info": "Computer Science",
            "edu.elec": "Electronics",
            "edu.mana": "Management",
            "edu.algo": "Algorithmics",
            "edu.web": "Fullstack Web",
            "edu.db": "Database",
            "edu.agile": "Agile / Scrum",
            "proj.ab": "Fictional vacation rental search site for the Brittany region.",
            "proj.poke": "Web application listing Pokémon with advanced filters.",
            "btn.github": "View code →",
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
        console.log(newLang);
        let cvLink = document.getElementById('cvlink');
        if(newLang === 'fr') {
            cvLink.setAttribute('href', './mon_cv.pdf');
        } else {
            cvLink.setAttribute('href', './my_cv.pdf');
        }
    });

});