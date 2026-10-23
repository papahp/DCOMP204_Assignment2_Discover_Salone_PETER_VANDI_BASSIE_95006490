# Discover Salone

**Live site:** https://papahp.github.io/DCOMP204_Assignment2_Discover_Salone_PETER_VANDI_BASSIE_95006490/index.html

A responsive, multi-page tourism website for Sierra Leone. Visitors can compare beaches, wildlife and history sites, check sample trip prices, read directions and reviews, and send an enquiry to local guides and hotels.

**Module:** DCOMP 204 Web Design
**Assignment:** Assignment 2, HTML, CSS and Responsive Website (20%, 100 marks)
**Examiner:** Mr. Amadu Kamara
**Student:** Peter Vandi Bassie, Class BIT 1101
**Institution:** Limkokwing University of Creative Technology, Sierra Leone
**Issue date:** Week 2  |  **Submission deadline:** Week 4

---

## 1. About the assignment

Assignment 2 asks students to convert the Assignment 1 design into a real website.

| Requirement from the brief | How this project meets it |
|---|---|
| Minimum 5 pages | 11 pages: Home, Destinations, Services, About, Contact, and 6 destination detail pages |
| Works on mobile, tablet and desktop | One stylesheet with three layouts (phone, 768px and wider, 1024px and wider). Tested at 390px, 768px and 1440px wide with no sideways scrolling |
| Convert the Assignment 1 design | Same sitemap, navigation, layout and content as the Assignment 1 wireframes, A3 board and Figma prototype |
| Black and white design | Only black, white and grey are used, as the lecturer asked |
| HTML and CSS only | The site uses no JavaScript. The menu, filters and forms are built with HTML and CSS, as the lecturer asked |

### Deliverables

| Deliverable | Where it is |
|---|---|
| Source code | This repository (`index.html`, `destinations.html`, `services.html`, `about.html`, `contact.html`, `destinations/`, `css/`, `images/`) |
| Screenshots | `screenshots/` folder (see section 8) |
| GitHub repository | This repository, with the commit history |
| Responsive website | Live site link at the top of this page, or open `index.html` in a browser (see section 5) |
| A3 design board | Made in Assignment 1 and submitted with it as `A3_Design_Board_Discover_Salone` |

### Marking criteria and where to find the evidence

| Criteria | Marks | Evidence in this project |
|---|---|---|
| Website architecture and page requirements | 15 | 11 linked pages, shared header and footer, breadcrumbs, sitemap in section 4 |
| Responsive web design and cross-device layouts | 25 | Section 6 and the screenshots in `screenshots/` |
| CSS styling, design fidelity and media | 20 | `css/style.css` (design tokens, components, three breakpoints) and the photos in `images/` |
| Code quality, semantics and best practices | 15 | Semantic HTML5, one separate CSS file, no JavaScript, comments, accessibility notes in section 7 |
| Version control and GitHub repository | 10 | Git history with one commit per piece of work |
| Deliverables and A3 design board presentation | 15 | This README, the screenshots folder and the A3 board |

---

## 2. What the website is about

### The problem

Information about destinations in Sierra Leone is spread across social media posts, group chats and word of mouth. Prices are unclear, listings go out of date and visitors cannot tell which guide or hotel to trust. A short class survey of six people (Assignment 1) showed the same needs again and again: clear prices, directions to the place, visitor reviews and a working contact for the business.

### The solution

Discover Salone puts destinations, price estimates, directions and reviews in one place, with a direct way to contact local businesses.

### Target users

- Local and diaspora visitors planning a short trip
- First-time tourists who need prices, directions and reviews before they travel
- Small guides, lodges and transport operators who want to be found

### Main user path

Home, then Destinations (filter by region, activity and budget), then a destination page (price table, directions, reviews), then the enquiry form.

---

## 3. Features

- **Destination finder** on the home page. Quick links for activity, region and budget open the Destinations page already filtered.
- **Live filters** on the Destinations page: region, activity and budget filters, a result counter and a clear button. They are built with CSS only.
- **Six destination pages** with facts, a price table with its last check date, a map block with directions and sample visitor reviews.
- **Services page** with verified tours and guides, places to stay and transport. Each "Send enquiry" button opens the contact form.
- **Form validation** on every form, done by the browser: required fields, an email or phone check, a minimum message length and a confirmation message after sending.
- **Mobile menu** with a Menu and Close button, built with CSS only and usable with the keyboard.
- **About page** that explains why the site exists and how listings are verified.

---

## 4. Site structure

```
index.html                       Home
destinations.html                Destinations list with filters
destinations/
  tokeh-beach.html
  river-no-2-beach.html
  bureh-beach.html
  tacugama-chimpanzee-sanctuary.html
  banana-islands.html
  tiwai-island.html              Destination detail pages
services.html                    Tours, places to stay, transport
about.html                       About and verification steps
contact.html                     Contact details and message form
```

Sitemap:

```
Home
 |- Destinations
 |    |- Tokeh Beach, River No. 2 Beach, Bureh Beach,
 |       Tacugama Chimpanzee Sanctuary, Banana Islands, Tiwai Island
 |- Services (Tours and guides | Places to stay | Transport)
 |- About
 |- Contact
```

### Project folders

```
discover-salone-website/
|- css/style.css        All styles, including the menu and the filters
|- images/              Photos (JPG, small and large size of each) and the team photo
|- screenshots/         Mobile, tablet and desktop screenshots
|- README.md
```

---

## 5. How to run the website

No build step and no installs are needed.

**Option A: live site**
Open the live site link at the top of this page.

**Option B: VS Code with Live Server**
1. Open the `discover-salone-website` folder in VS Code (File, then Open Folder).
2. Install the "Live Server" extension if you do not have it.
3. Right-click `index.html` and choose "Open with Live Server".

**Option C: open the file directly**
Double-click `index.html`. Every page and feature works this way.

---

## 6. Responsive design

The CSS is written mobile first. The base styles are for phones, and two `min-width` media queries add the tablet and desktop layouts.

| Device | Screen width | What changes |
|---|---|---|
| Mobile | up to 767px | One column. Menu button replaces the top links. Filters stack above the results |
| Tablet | 768px to 1023px | Two-column card grids, filters beside the results, three fact boxes in one row, menu button stays |
| Desktop | 1024px and wider | Full navigation bar, three-column grids, sticky enquiry box beside the destination content, four-column footer |

Other responsive techniques used: flexible images (`max-width: 100%` and `aspect-ratio`), tables that scroll inside their own box on narrow screens, `rem` units for text, and `prefers-reduced-motion` for people who turn animation off.

---

## 7. Code quality and accessibility

- Semantic HTML5: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `dl`, `table` with `caption` and `scope`
- One `h1` per page and a logical heading order
- A "Skip to main content" link and `aria-current="page"` on the active menu link
- Every form field has a linked `label`, and the email or phone field explains the format it expects
- Descriptive `alt` text on all images, with `width` and `height` set to avoid layout shift
- Visible focus outline for keyboard users, including the menu button
- CSS variables for colours, spacing and fonts, with comments that split the file into sections
- No JavaScript: the menu, the filters and the form messages use HTML and CSS only

---

## 8. Screenshots

All screenshots are in the `screenshots/` folder, named `page-device.png`.

| Page | Mobile (390px) | Tablet (768px) | Desktop (1440px) |
|---|---|---|---|
| Home | `index-mobile.png` | `index-tablet.png` | `index-desktop.png` |
| Destinations | `destinations-mobile.png` | `destinations-tablet.png` | `destinations-desktop.png` |
| Destination detail | `destination-tokeh-beach-mobile.png` | `destination-tokeh-beach-tablet.png` | `destination-tokeh-beach-desktop.png` |
| Services | `services-mobile.png` | `services-tablet.png` | `services-desktop.png` |
| About | `about-mobile.png` | `about-tablet.png` | `about-desktop.png` |
| Contact | `contact-mobile.png` | `contact-tablet.png` | `contact-desktop.png` |

Extra screenshots: `index-mobile-menu-open.png` (mobile menu) and `destinations-mobile-no-results.png` (filter with no match).

---

## 9. Credits

- Design, research and code: Peter Vandi Bassie
- Design brief and examiner: Mr. Amadu Kamara, Limkokwing University of Creative Technology, Sierra Leone
- Tourism figure: the source is named on the About page
- Photos: Sourced by me through google research.
