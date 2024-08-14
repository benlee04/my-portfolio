function createHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const navItems = [
        { name: 'Home', link: 'index.html' },
        { name: 'About', link: 'about.html' },
        { name: 'Projects', link: 'projects.html' },
        { name: 'Contact', link: 'contact.html' }
    ];

    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.name;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);

    return header;
}

export default createHeader;
