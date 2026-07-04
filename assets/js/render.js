// render.js
function renderEducation() {
    const container = document.getElementById('education-list');
    if (!container) return;
    container.innerHTML = educationData.map(edu => `
        <li class="timeline-item">
            <h4 class="h4 timeline-item-title">${edu.institution}</h4>
            <span>${edu.period}</span>
            <p class="timeline-text">${edu.description}</p>
        </li>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experience-list');
    if (!container) return;
    container.innerHTML = experienceData.map(exp => `
        <li class="timeline-item">
            <h4 class="h4 timeline-item-title">${exp.role} — ${exp.company}</h4>
            <span>${exp.period}</span>
            ${exp.details.map(d => `<p class="timeline-text">• ${d}</p>`).join('')}
        </li>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-list');
    if (!container) return;
    container.innerHTML = skillsData.map(skill => `
        <li class="skills-item">
            <h5 class="h5">${skill.category}</h5>
            <div class="title-wrapper">
                <ul class="timeline-text" style="list-style: none; padding-left: 0;">
                    ${skill.tags.map(tag => `<li style="display: inline-block; margin-right: 8px; background: #979175; color: yellow; padding: 2px 10px; border-radius: 12px; font-size: 0.9rem;">${tag}</li>`).join('')}
                </ul>
            </div>
        </li>
    `).join('');
}

function renderPortfolio() {
    const container = document.getElementById('project-list');
    if (!container) return;
    container.innerHTML = projectsData.map(proj => `
        <li class="project-item active" data-filter-item data-category="${proj.category.toLowerCase().includes('mobile') ? 'mobile development' : 'web development'}">
            <a href="${proj.link}" target="_blank">
                <figure class="project-img">
                    <div class="project-item-icon-box"><ion-icon name="eye-outline"></ion-icon></div>
                    <img src="${proj.image}" alt="${proj.title}" loading="lazy" />
                </figure>
                <h3 class="project-title">${proj.title}</h3>
                <p class="project-category">${proj.category}</p>
            </a>
        </li>
    `).join('');
}

function renderBlog() {
    const container = document.getElementById('blog-list');
    if (!container) return;
    container.innerHTML = blogPostsData.map(post => `
        <li class="blog-post-item">
            <a href="${post.link}" target="_blank">
                <figure class="blog-banner-box">
                    <img src="./assets/images/project-4.png" alt="${post.title}" loading="lazy" />
                </figure>
                <div class="blog-content">
                    <div class="blog-meta">
                        <p class="blog-category">Mobile Development</p>
                        <span class="dot"></span>
                        <time datetime="2024-07-10">${post.date}</time>
                    </div>
                    <h3 class="h3 blog-item-title">${post.title}</h3>
                    <p class="blog-text">${post.excerpt}</p>
                </div>
            </a>
        </li>
    `).join('');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    renderEducation();
    renderExperience();
    renderSkills();
    renderPortfolio();
    renderBlog();
});