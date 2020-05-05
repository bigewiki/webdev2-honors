class SidebarAside extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <aside>
            <ul>
            <li class="sidebar-nav-parent">
                <a href="index.html">Home</a>
            </li>
            <li class="sidebar-nav-parent">
                <a href="about.html">About</a>
                <ul>
                <li>
                    <a href="about.html#link1">How I Got Here</a>
                </li>
                <li>
                    <a href="about.html#link2">Contact Me</a>
                </li>
                </ul>
            </li>
            <li class="sidebar-nav-parent">
                <a href="novice.html">Novice</a>
                <ul>
                <li>
                    <a href="novice.html#link1">Things to Know</a>
                </li>
                <li>
                    <a href="novice.html#link2">Plugins</a>
                </li>
                <li>
                    <a href="novice.html#link3">Hire a Professional</a>
                </li>
                </ul>
            </li>
            <li class="sidebar-nav-parent">
                <a href="intermediate.html">Intermediate</a>
                <ul>
                <li>
                    <a href="intermediate.html#link1">FTP</a>
                </li>
                <li>
                    <a href="intermediate.html#link2">PHPMyAdmin</a>
                </li>
                <li>
                    <a href="intermediate.html#link3">Alternatives</a>
                </li>
                </ul>
            </li>
            <li class="sidebar-nav-parent">
                <a href="advanced.html">Advanced</a>
                <ul>
                <li>
                    <a href="advanced.html#link1">Rsync</a>
                </li>
                <li>
                    <a href="advanced.html#link2">MySQLDump</a>
                </li>
                </ul>
            </li>
            </ul>
        </aside>
    `;
  }
}

customElements.define("sidebar-aside", SidebarAside);
