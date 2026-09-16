Siyoyisile Indlala Community Farm Website

Project Overview
The current project represents the whole web-based practical realization of Siyoyisile Indlala Community Farm, which operates in Gauteng, South Africa. The project involves bringing the planning aspects from Part 1 to the operational frontend platform.
Folder Directory Mapping
`/css` - Holds structural responsive stylesheets (`style.css`).
`/images` - Houses downloaded local image assets.
 root (`/`) - Houses the five core pages (`index.html`, `about.html`, `services.html`, `enquiry.html`, `contact.html`).

Implementation Details
Semantic HTML : Leverages all layout anchor tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) to ensure a uniform layout on the web page.
WCAG 2.2 Compatible : Created using color schemes that adhere to contrast principles. Also includes keyboard skip links, explicit `<label>` associations, and viewport size responsive techniques.
Fluid Design : Employs absolute layout and element values (`rem`, `em`).









 Changelog
Part 2 Implementation
Added
An external style sheet called "style.css" was created and used standardized CSS reset for cross-browser compatibility.
Global typography scaling guidelines were designed to ensure consistent `font-family`, `line-height`, and `letter-spacing`.
Used Flexbox to create layouts on the desktop to align configurations for header navigation and card-based components via CSS Grid.
A high-end color palette was designed that satisfies WCAG 2.2 requirements for dark text and backgrounds.
Accessibility considerations included the use of standard labels for inputs and absolute positioning of the keyboard navigation skip-link container.
Changed
All measurements for the layout, including margins, paddings, and font sizes, have been converted from pixel-based measurement to flexible relative sizing units (`rem`, `%`).
Media queries have been expanded to a multi-tier structure which will provide formatting for fluid tablets and make all stacked elements vertically on small mobile phone screens.
Assets within the media queries have been optimized using percentage width and auto height measurements.









Screenshots
[Desktop View](images/desktop-view.png)
[Tablet View](images/tablet-view.png)
[Phone View](images/phone-view.png)





















Reference List
The Independent Institute of Education (The IIE). 2026. Web Development (Introduction) WEDE5020 HTML Practical Lab Manual: Building the “Mog Hub” Multi-Page Website in Visual Studio Code (Learning Unit 3). Sandton: The Independent Institute of Education.
The Independent Institute of Education (The IIE). 2026. WEDE5020 – Practical 2: Styling the Mog Hub Website Using CSS (Learning Unit 4). Sandton: The Independent Institute of Education.
The Independent Institute of Education (The IIE). 2026. WEDE5020 – Practical 3: Building an Interactive Cat Gallery Using HTML, CSS and JavaScript. Sandton: The Independent Institute of Education.
The Independent Institute of Education (The IIE). 2026. WEDE5020 — Learning Unit 5: Responsive Web Design — Practical Lab Manual: Campus Café. Sandton: The Independent Institute of Education.
