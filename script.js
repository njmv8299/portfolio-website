// Smooth scrolling effect for sidebar links
document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Sidebar Toggle for Small Screens
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.createElement('div');
toggleBtn.innerHTML = "☰";
toggleBtn.classList.add('sidebar-toggle');
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Portfolio Projects Data
const projects = [
    {
        title: "eCommerce Mockup",
        description: "A modern e-commerce website mockup with product catalog, cart, and checkout features.",
        image: "assets/ecommerce-mockup.jpg",
        link: "https://njmv8299.github.io/ecommerce-mockup/"
    },
    {
        title: "To-Do List App",
        description: "A simple app to manage daily tasks.",
        image: "assets/todo-list.jpg"
    },
    {
        title: "Portfolio Website",
        description: "The website you're viewing now!",
        image: "assets/portfolio.jpg"
    }
];

// Function to Load Projects
function loadProjects() {
    const projectsContainer = document.querySelector('.projects-container');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

// Load projects on page load
document.addEventListener('DOMContentLoaded', loadProjects);
