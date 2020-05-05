const content = {
  About: `My name is Edward, I've got four years experience on a team that
    migrates hundreds of websites a month, most of them WordPress.
    I've run the team as the technical lead and since passing the
    baton have moved on to develop tools, automation, and reporting
    that continue supporting migrations.`,
  Novice: `Beginners should take some time to understand the basic
    structure of their WordPress site, DNS, what to expect during
    migration, and how to preview their site before it goes live.
    I'll also introduce some easy-to-use plugins that make the
    effort simpler and less painful.`,
  Intermediate: `If you already know the basics, are acquainted, or want to learn
    File Transfer Protocol (FTP) and some of the slightly more
    advanced interfaces in your hosting control panel this is the
    place to start. I’ll go over the basics of how to use the
    intermediate level tools to migrate you WordPress website.`,
  Advanced: `If you're familiar with the Linux command-line interface (CLI)
    and your host gives you secure-shell (SSH) access this is the
    place to start. In order to quickly, easily, and reliably
    migrate and configure sites professionally we employ
    command-line scripts and functions and live inside our
    terminals. Here, I can share what utilities we use and how you
    can use them too.`,
};

class FeatureCard extends HTMLElement {
  constructor() {
    super();
    const title = this.getAttribute("title");
    this.innerHTML = `
    <article class="feature-card">
      <h2>${title}</h2>
      <p>
        ${content[title]}
      </p>
    </article>
    `;
  }
}

customElements.define("feature-card", FeatureCard);
