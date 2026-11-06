// ========== Blog Data ==========
const posts = [
    {
        id: 1,
        title: "The Future of Frontend Development in 2025",
        excerpt: "From AI coding assistants to new rendering strategies — here's what every developer should prepare for.",
        category: "technology",
        date: "Oct 28, 2025",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
        readTime: "6 min"
    },
    {
        id: 2,
        title: "Designing with Intention: Less is More",
        excerpt: "Why minimal interfaces convert better and how to apply restraint in your next project.",
        category: "design",
        date: "Oct 25, 2025",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
        readTime: "5 min"
    },
    {
        id: 3,
        title: "Building Habits That Actually Stick",
        excerpt: "Science-backed methods to create lasting change without burning out.",
        category: "lifestyle",
        date: "Oct 22, 2025",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
        readTime: "7 min"
    },
    {
        id: 4,
        title: "Mastering CSS Grid Like a Pro",
        excerpt: "Practical patterns and real-world examples that will level up your layouts forever.",
        category: "technology",
        date: "Oct 20, 2025",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
        readTime: "8 min"
    },
    {
        id: 5,
        title: "The Art of Deep Work in a Distracted World",
        excerpt: "How top performers protect their focus and get more meaningful work done.",
        category: "productivity",
        date: "Oct 18, 2025",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
        readTime: "6 min"
    },
    {
        id: 6,
        title: "Color Theory for Modern Interfaces",
        excerpt: "A practical guide to choosing palettes that feel premium and accessible.",
        category: "design",
        date: "Oct 15, 2025",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop",
        readTime: "5 min"
    },
    {
        id: 7,
        title: "Why Clean Code Still Wins",
        excerpt: "Readable code is a gift to your future self and your teammates.",
        category: "technology",
        date: "Oct 12, 2025",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
        readTime: "4 min"
    },
    {
        id: 8,
        title: "Morning Routines of High Performers",
        excerpt: "What successful people actually do in the first hour of their day.",
        category: "lifestyle",
        date: "Oct 10, 2025",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
        readTime: "5 min"
    }
];
// ========== Full Article Data ==========
function updateCategoryCounts() {
    const categories = ["technology", "design", "lifestyle", "productivity"];

    categories.forEach(category => {
        const count = posts.filter(post => post.category === category).length;

        const countElement = document.getElementById(
            category + "Count"
        );

        if (countElement) {
            countElement.textContent = count;
        }
    });
}
const articleDetails = {
    1: {
        title: "The Future of Frontend Development in 2025",
        category: "Technology",
        date: "Oct 28, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
        content: `
            <p class="lead">Frontend development is evolving faster than ever.</p>

            <p>Modern frontend development continues to change with new tools,
            technologies, and development practices.</p>

            <h2>1. AI is Becoming a Daily Companion</h2>

            <p>AI coding assistants help developers write code, understand
            errors, and improve productivity.</p>

            <h2>2. Performance Matters</h2>

            <p>Fast loading websites provide a better experience for users.
            Developers should focus on optimized images, efficient code,
            and responsive layouts.</p>

            <h2>3. Modern Design Systems</h2>

            <p>Reusable components and consistent design systems make
            websites easier to maintain and improve.</p>

            <h2>Conclusion</h2>

            <p>Frontend developers should continue learning, practicing,
            and adapting to new technologies.</p>
        `
    
},
    2: {
        title: "Designing with Intention: Less is More",
        category: "Design",
        date: "Oct 25, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200",
        content: `
            <p class="lead">Good design is not about adding more. It is about making every element meaningful.</p>

            <p>Minimal design helps users focus on the most important information without unnecessary distractions.</p>

            <h2>1. Focus on Clarity</h2>

            <p>Use clear headings, readable text, and simple layouts to help visitors understand your website.</p>

            <h2>2. Use Space Effectively</h2>

            <p>White space improves readability and gives important elements room to stand out.</p>

            <h2>3. Choose Colors Carefully</h2>

            <p>A consistent color palette creates a professional and memorable interface.</p>

            <h2>Conclusion</h2>

            <p>Intentional design creates better experiences by focusing on clarity, usability, and simplicity.</p>
        `
    },
        3: {
        title: "Building Habits That Actually Stick",
        category: "Lifestyle",
        date: "Oct 22, 2025",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200",
        content: `
            <p class="lead">Building better habits is about making small changes that you can maintain over time.</p>

            <p>Successful habits do not require huge changes overnight. Small and consistent actions can help you create lasting improvements.</p>

            <h2>1. Start Small</h2>
            <p>Begin with simple actions that are easy to complete every day. Small goals help you build consistency.</p>

            <h2>2. Create a Routine</h2>
            <p>Choose a fixed time and place for your habit. A regular routine makes it easier to remember and follow.</p>

            <h2>3. Track Your Progress</h2>
            <p>Keep track of your daily efforts. Seeing your progress can help you stay motivated.</p>

            <h2>Conclusion</h2>
            <p>Consistency, patience, and small improvements can help you build habits that last.</p>
        `
    },
        4: {
        title: "Mastering CSS Grid Like a Pro",
        category: "Technology",
        date: "Oct 20, 2025",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200",
        content: `
            <p class="lead">CSS Grid is a powerful layout system that helps developers create modern and responsive website designs.</p>

            <p>With CSS Grid, you can organize content into rows and columns without using complicated positioning techniques.</p>

            <h2>1. Understand Grid Basics</h2>
            <p>CSS Grid allows you to create two-dimensional layouts using rows and columns. It makes arranging website elements easier.</p>

            <h2>2. Use Grid Templates</h2>
            <p>The grid-template-columns and grid-template-rows properties help define the structure of your layout.</p>

            <h2>3. Create Responsive Layouts</h2>
            <p>CSS Grid works well with responsive design. You can use flexible units and media queries to adjust layouts for different screen sizes.</p>

            <h2>4. Combine Grid with Flexbox</h2>
            <p>Grid is useful for overall page layouts, while Flexbox works well for arranging elements inside individual components.</p>

            <h2>Conclusion</h2>
            <p>Learning CSS Grid helps developers build clean, flexible, and responsive layouts with less code.</p>
        `
    },
        5: {
        title: "The Art of Deep Work in a Distracted World",
        category: "Productivity",
        date: "Oct 18, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200",
        content: `
            <p class="lead">Deep work helps you focus on important tasks without distractions and produce meaningful results.</p>

            <p>In a world filled with notifications, messages, and constant interruptions, protecting your attention has become an important skill.</p>

            <h2>1. Remove Distractions</h2>
            <p>Turn off unnecessary notifications and keep your phone away while working. A quiet environment helps you concentrate better.</p>

            <h2>2. Set Clear Goals</h2>
            <p>Before starting a work session, decide what you want to complete. Clear goals help you use your time effectively.</p>

            <h2>3. Work in Focused Sessions</h2>
            <p>Divide your work into focused sessions. Take short breaks between sessions to maintain energy and concentration.</p>

            <h2>4. Build a Consistent Routine</h2>
            <p>Choose a regular time for focused work. Practicing consistently helps make concentration a daily habit.</p>

            <h2>Conclusion</h2>
            <p>Deep work improves productivity by helping you focus on meaningful tasks. With clear goals, fewer distractions, and consistent practice, you can make better use of your time.</p>
        `
    },
        6: {
        title: "Color Theory for Modern Interfaces",
        category: "Design",
        date: "Oct 15, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200",
        content: `
            <p class="lead">Color plays an important role in creating attractive, readable, and user-friendly interfaces.</p>

            <p>Choosing the right colors helps communicate information, create visual hierarchy, and improve the overall experience of a website.</p>

            <h2>1. Understand Color Basics</h2>
            <p>Colors can be warm or cool. Understanding basic color relationships helps designers create balanced and visually appealing interfaces.</p>

            <h2>2. Choose a Consistent Palette</h2>
            <p>Use a limited set of colors throughout your website. A consistent palette makes the interface feel organized and professional.</p>

            <h2>3. Maintain Contrast</h2>
            <p>Text should have enough contrast against its background. Good contrast improves readability and accessibility.</p>

            <h2>4. Use Colors with Purpose</h2>
            <p>Use colors to highlight important buttons, communicate status, and guide users toward meaningful actions.</p>

            <h2>Conclusion</h2>
            <p>Good color choices improve usability and visual consistency. A thoughtful color palette makes modern interfaces easier to understand and navigate.</p>
        `
    },
        7: {
        title: "Why Clean Code Still Wins",
        category: "Technology",
        date: "Oct 12, 2025",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
        content: `
            <p class="lead">Clean code makes software easier to understand, maintain, and improve.</p>

            <p>Writing code is not only about making a program work. Good code should also be readable and organized so that other developers can understand it.</p>

            <h2>1. Use Meaningful Names</h2>
            <p>Choose clear names for variables, functions, and classes. Meaningful names help explain what the code does without requiring extra comments.</p>

            <h2>2. Keep Functions Small</h2>
            <p>Functions should focus on one main task. Smaller functions are easier to understand, test, and maintain.</p>

            <h2>3. Avoid Repeating Code</h2>
            <p>Reuse common logic instead of writing the same code multiple times. This reduces duplication and makes updates easier.</p>

            <h2>4. Write Helpful Comments</h2>
            <p>Use comments to explain important decisions or complex logic. Avoid comments that simply repeat what the code already says.</p>

            <h2>Conclusion</h2>
            <p>Clean code improves readability, reduces maintenance effort, and makes teamwork easier. Writing clean code is a valuable habit for every developer.</p>
        `
    },
        8: {
        title: "Morning Routines of High Performers",
        category: "Lifestyle",
        date: "Oct 10, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200",
        content: `
            <p class="lead">A thoughtful morning routine can help you begin your day with clarity, energy, and focus.</p>

            <p>How you spend the first part of your day can influence your productivity and mood. Simple habits can help you prepare for the tasks ahead.</p>

            <h2>1. Start Your Day Consistently</h2>
            <p>Wake up at a regular time whenever possible. A consistent schedule helps create a stable daily routine.</p>

            <h2>2. Plan Your Priorities</h2>
            <p>Identify the most important tasks for the day. Planning ahead helps you focus on meaningful work instead of reacting to every distraction.</p>

            <h2>3. Make Time for Movement</h2>
            <p>Light stretching, walking, or simple exercise can help you feel more active and ready for the day.</p>

            <h2>4. Reduce Early Distractions</h2>
            <p>Avoid immediately checking unnecessary notifications. Give yourself some time to focus on your own priorities before opening social media or messages.</p>

            <h2>Conclusion</h2>
            <p>A useful morning routine does not need to be complicated. Consistent habits, clear priorities, and a calm start can help you create a more productive day.</p>
        `
    },
    };
let currentCategory = "all";
let visibleCount = 6;
let currentTag = "";

// ========== Render Posts ==========
function renderPosts() {
    const grid = document.getElementById("postsGrid");
    if (!grid) return;

    let filtered = currentCategory === "all" 
        ? posts 
        : posts.filter(p => p.category === currentCategory);
        // Popular Tags Filter
if (currentTag) {
    const tagFilters = {
        "web-dev": ["technology"],
        "ui-ux": ["design"],
        "javascript": ["technology"],
        "minimalism": ["design"],
        "career": ["productivity", "lifestyle"],
        "tools": ["technology"],
        "inspiration": ["lifestyle", "design"]
    };

    const categories = tagFilters[currentTag] || [];

    filtered = filtered.filter(post =>
        categories.includes(post.category)
    );
}

    const searchTerm = document.getElementById("searchInput")?.value.toLowerCase() || "";
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.title.toLowerCase().includes(searchTerm) || 
            p.excerpt.toLowerCase().includes(searchTerm)
        );
    }

    const toShow = filtered.slice(0, visibleCount);

    grid.innerHTML = toShow.map(post => `
        <article class="post-card" onclick="window.location='post.html?id=${post.id}'">
            <img src="${post.image}" alt="${post.title}">
            <div class="post-card-body">
                <span class="post-category">${post.category}</span>
                <h3><a href="post.html?id=${post.id}">${post.title}</a></h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime}</span>
                </div>
            </div>
        </article>
    `).join("");

    const loadBtn = document.getElementById("loadMoreBtn");
    if (loadBtn) {
        loadBtn.style.display = visibleCount >= filtered.length ? "none" : "inline-block";
    }
}

// ========== Filter Tabs ==========
document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        currentCategory = tab.dataset.category;
        currentTag = "";
        visibleCount = 6;
        renderPosts();
    });
});

// ========== Category List ==========
document.querySelectorAll(".category-list a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        currentCategory = link.dataset.category;
        currentTag = "";
        visibleCount = 6;
        document.querySelectorAll(".tab").forEach(t => {
            t.classList.toggle("active", t.dataset.category === currentCategory);
        });
        renderPosts();
    });
});
// ========== Popular Tags ==========
document.querySelectorAll(".tags .tag").forEach(tag => {
    tag.addEventListener("click", (e) => {
        e.preventDefault();

        currentTag = tag.dataset.tag;
        currentCategory = "all";
        visibleCount = 6;

        document.querySelectorAll(".tab").forEach(t => {
            t.classList.toggle(
                "active",
                t.dataset.category === "all"
            );
        });

        renderPosts();

        document.getElementById("postsGrid")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// ========== Search ==========
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", () => {
    currentTag = "";
    currentCategory = "all";
    visibleCount = 6;
    renderPosts();
});
}

// ========== Load More ==========
const loadMoreBtn = document.getElementById("loadMoreBtn");
if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
        visibleCount += 3;
        renderPosts();
    });
}

// ========== Theme Toggle ==========
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

if (localStorage.getItem("theme") === "light") {
    html.setAttribute("data-theme", "light");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle?.addEventListener("click", () => {
    const isLight = html.getAttribute("data-theme") === "light";
    if (isLight) {
        html.removeAttribute("data-theme");
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem("theme", "dark");
    } else {
        html.setAttribute("data-theme", "light");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem("theme", "light");
    }
});

// ========== Mobile Menu ==========
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ========== Init ==========
updateCategoryCounts();
renderPosts();
// ========== Load Selected Article ==========
function setupShareButtons() {
    const articleUrl = encodeURIComponent(window.location.href);
    const articleTitle = encodeURIComponent(
        document.getElementById("postTitle")?.textContent || "InsightBlog Article"
    );

    document.querySelector(".share-btn.twitter")?.setAttribute(
        "href",
        `https://twitter.com/intent/tweet?url=${articleUrl}&text=${articleTitle}`
    );

    document.querySelector(".share-btn.linkedin")?.setAttribute(
        "href",
        `https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}`
    );

    document.querySelector(".share-btn.facebook")?.setAttribute(
        "href",
        `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`
    );

    document.querySelector(".share-btn.whatsapp")?.setAttribute(
        "href",
        `https://wa.me/?text=${articleTitle}%20${articleUrl}`
    );
    
}
function loadArticle() {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get("id");

    const article = articleDetails[postId];

    if (!article) {
        return;
    }

    document.getElementById("postTitle").textContent = article.title;

    document.getElementById("postCategory").textContent = article.category;

    document.getElementById("postDate").textContent = article.date;

    document.getElementById("postReadTime").textContent = article.readTime;

    document.getElementById("postImage").src = article.image;

    document.getElementById("postImage").alt = article.title;

    document.getElementById("postBody").innerHTML = article.content;
    setupShareButtons();
}
// Comment Form
document.querySelector(".comment-form")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();
    const comment = this.querySelector("textarea").value.trim();

    if (!name || !comment) {
        alert("Please enter your name and comment.");
        return;
    }

    alert("Thank you, " + name + "! Your comment has been submitted.");
    this.reset();
});
loadArticle();