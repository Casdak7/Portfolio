document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const languages = {
    english: {
        "about_nav": "About Me",
        "projects_nav": "Projects",
        "contact_nav": "Contact",
        "intro": "Full Stack Web Developer with experience building solutions from start to finish",
        "btn_about": "MORE ABOUT ME",
        "btn_projects": "SEE MY WORK",
        "about_title": "Who am I?",
        "about_text": "Computer science student, computer technician, and web developer with over three years of experience. Has worked as a team manager and developer in a great variety of projects. A fast learner who mainly works with PHP and the Laravel Framework but always strives to learn new technologies and is told to be very analytical.\n\nLoves solving problems using technology.\n\nA language enthusiast.",
        "skills_title": "Skills",
        "english": "English",
        "portuguese": "Portuguese",
        "french": "French",
        "project_title": "Projects",
        "visit_site_link": "Visit Website",
        "projects_section": [
            {
                "title": "Cardappin",
                "company": "Freelancer",
                "text": "Online Menu and Ordering system for restaurants developed in C#, ASP.NET MVC. Provided support and updates since 2020, be it layout changes, UI and UX improvements, or new functionalities for the system."
            },
            {
                "title": "Sorvemax",
                "company": "Adapti Soluções Web",
                "text": "Was the project manager, developed in PHP and the Laravel Framework. An ice cream factory management system that manages production, finance, sales, purchases, inventory, and more. Developed in 2018 and updated in 2020."
            },
            {
                "title": "Apoio Educacional",
                "company": "Freelancer",
                "text": "A project developed in PHP and the Laravel Framework. A dynamic website and management system of teaching material, classes, and enrollment. Also manages payments, teacher's salaries, timetables, attendance, online tests, and more. The first version developed in 2017 and updated in 2019, in partnership with <a href='https://github.com/Joaovbf'>João Vitor Barros Farias</a>."
            },
            {
                "title": "Selective Process São Mateus",
                "company": "Adapti Soluções Web",
                "text": "A system created for simplifying the selective and hiring process of the department of health of the city of São Mateus. It received a few thousand applications of medical professionals. The system dealt with all applications for all different openings, with an intuitive layout and a robust backend. It was developed in a month by a team of three people."
            },
            {
                "title": "Arte da Gente",
                "company": "Adapti Soluções Web",
                "text": "A Project developed in PHP and the Laravel Framework. A dynamic website and management system of an art store."
            }
        ],
        "address": "Address",
    }, 
    portuguese: {
        "about_nav": "Sobre Mim",
        "projects_nav": "Projetos",
        "contact_nav": "Contato",
        "intro": "Desenvolvedor Web Fullstack com experiência em criar soluções do início ao fim",
        "btn_about": "MAIS SOBRE MIM",
        "btn_projects": "VEJA MEU TRABALHO",
        "about_title": "Quem sou eu?",
        "about_text": "Estudante de ciência da computação, técnico em informática e desenvolvedor web com mais de três anos de experiência. Trabalhou como gerente de equipe e desenvolvedor em uma grande variedade de projetos. Um aprendiz rápido que trabalha principalmente com PHP e Laravel Framework, mas sempre se esforça para aprender novas tecnologias e é muito analítico. \n\nAdora resolver problemas usando tecnologia. \n\nUm entusiasta de idiomas.",
        "skills_title": "Habilidades",
        "english": "Inglês",
        "portuguese": "Português",
        "french": "Francês",
        "project_title": "Projetos",
        "visit_site_link": "Ir para o site",
        "projects_section": [
            {
                "title": "Cardappin",
                "company": "Freelancer",
                "text": "Um menu online e sistema de pedidos para restaurantes. Usando C#, ASP.NET MVC, MySql e o Dapper Micro ORM, fornecendo suporte e atualizações, seja mudanças de layout, melhorias de UI e UX, ou novas funcionalidades para o sistema."
            },
            {
                "title": "Sorvemax",
                "company": "Adapti Soluções Web",
                "text": "Foi gerente de projeto, desenvolvido em PHP e no Laravel Framework. Um sistema de gerenciamento de fábrica de sorvete que gerencia a produção, finanças, vendas, compras, estoque e muito mais. Desenvolvido em 2018 e atualizado em 2020."
            },
            {
                "title": "Apoio Educacional",
                "company": "Freelancer",
                "text": "Projeto desenvolvido em PHP e Laravel Framework. Site dinâmico e sistema de gestão de material didático, aulas e inscrições. Também gerencia pagamentos, salários de professores, horários, atendimento, testes online e muito mais. Primeira versão desenvolvida em 2017 e atualizada em 2019, em parceria com <a href='https://github.com/Joaovbf'>João Vitor Barros Farias</a>."
            },
            {
                "title": "Processo Seletivo São Mateus",
                "company": "Adapti Soluções Web",
                "text": "Sistema criado para simplificar o processo seletivo e de contratação da secretaria de saúde do município de São Mateus. Recebeu alguns milhares de inscrições de profissionais médicos. O sistema lida com todas as aplicações para todas as diferentes vagas, com um layout intuitivo e um back-end robusto. Foi desenvolvido em um mês por uma equipe de três pessoas."
            },
            {
                "title": "Arte da Gente",
                "company": "Adapti Soluções Web",
                "text": "Projeto desenvolvido em PHP e Framework Laravel. Um site dinâmico e sistema de gestão de uma loja de arte."
            }
        ],
        "address": "Endereço",
    }
}