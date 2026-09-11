# AI Assistance Log

## Assignment
SWE 380 / CSC 580 Assignment 1: GitHub + AI Engineering Practice

## AI Assistant Used
ChatGPT

## Purpose
I used an AI assistant to help plan the personalization of the vCard Personal
Portfolio template before making changes to the website. The AI was instructed
to provide a plan before implementation and not modify files until the plan
was reviewed.

---

# AI Prompt

You are assisting me with a small public static portfolio website.

Project context:
- Purpose: Create a professional online portfolio presenting my education,
  technical skills, professional experience, and academic/technical projects
  to potential employers, internship reviewers, recruiters, professors, and
  other professionals.
- Existing system: vCard Personal Portfolio, an HTML/CSS/JavaScript template.
- Content source: My content-notes.md file based on my professional resume.
- Allowed changes: index.html, existing CSS, JavaScript when necessary,
  images/assets, and portfolio content.
- Preserve the general design and responsive behavior of the existing template.
- Do not add a backend, database, login system, analytics tracker, or external
  data collection.

Acceptance criteria:
1. The landing page displays my name, Leticia Aderhold, and a concise
   professional title.
2. The portfolio displays my education and technical skills without the
   original template's placeholder information.
3. The portfolio contains at least three of my academic or technical projects
   with a title and description.
4. Navigation links correctly take users to the appropriate sections of the
   portfolio.
5. The portfolio remains readable and usable on desktop and narrow/mobile
   screen sizes.

Constraints:
- Do not invent education, employment, certifications, awards, technical
  skills, projects, accomplishments, or links.
- Use content-notes.md as the source for my professional information.
- Preserve the original project's required license and attribution.
- Keep the website usable on mobile screens.
- Maintain readable contrast, keyboard navigation, meaningful link text,
  and useful image alternative text.
- Do not expose private information.
- Do not add my phone number or personal email address unless I specifically
  approve it.
- Make incremental changes rather than rewriting the entire repository.

Before making ANY changes, provide:
1. A file-by-file implementation plan.
2. Any assumptions or risks you identify.
3. A proposed test checklist.
4. Any questions that must be answered before implementation.

Do not modify files until I review and approve the plan.

---

# AI Response

## File-by-File Implementation Plan

### content-notes.md
Use this file as the authoritative source for professional information.
Do not add information that is not supported by this file.

### index.html
Review the existing HTML and identify template placeholder information.

Replace the template identity with Leticia Aderhold and an appropriate
professional title.

Update the About, education, experience, skills, and portfolio/project
content using information from content-notes.md.

Add at least three academic or technical projects.

Review navigation elements to make sure they continue to display the
appropriate sections.

Remove or replace template-specific personal information.

### CSS Files
Review the existing CSS before making changes.

Preserve the existing responsive design whenever possible.

Only make CSS changes when necessary to improve readability, mobile
display, or accessibility.

Avoid unnecessary redesign of the original template.

### JavaScript Files
Review the existing JavaScript responsible for navigation and interactive
elements.

Do not change JavaScript unless a change is necessary for the personalized
content or to correct an existing interaction.

Verify that navigation and interactive components still function after
the HTML changes.

### Images and Assets
Review images for template-specific photographs or information.

Do not use images that falsely represent the portfolio owner.

Use meaningful alternative text for informative images and appropriate
handling for decorative images.

### LICENSE and Attribution
Preserve the existing license and required attribution.

Do not remove licensing information from the original project.

---

# Assumptions and Risks

## Assumptions

- The existing vCard template already provides a responsive layout.
- The existing navigation and JavaScript are functional before modification.
- content-notes.md contains the approved professional information for the site.
- The existing design can be personalized without adding a backend or database.

## Risks

1. Template placeholder information could accidentally remain on the
   published website.

2. Changing the HTML structure could interfere with existing CSS or JavaScript.

3. Template images could incorrectly represent the portfolio owner if they
   are not replaced or removed.

4. Accessibility could be affected if images lack useful alternative text
   or interactive elements cannot be reached with the keyboard.

5. Private information could accidentally be published.

6. Unnecessary changes to CSS or JavaScript could introduce errors into
   functionality that currently works.

---

# Proposed Test Checklist

After implementation, perform the following tests:

- [ ] Website loads without a visible error.
- [ ] Leticia Aderhold appears as the portfolio owner's name.
- [ ] A concise professional title appears with the name.
- [ ] Education information matches content-notes.md.
- [ ] Technical skills match content-notes.md.
- [ ] At least three academic or technical projects are displayed.
- [ ] Original template placeholder information has been removed.
- [ ] Navigation controls reach the intended sections.
- [ ] Project and external links work or unused links have been removed.
- [ ] Website remains readable at desktop width.
- [ ] Website remains usable at a narrow/mobile width.
- [ ] Keyboard navigation is usable.
- [ ] Informative images have meaningful alternative text.
- [ ] No private information, passwords, API keys, or secrets are exposed.
- [ ] Browser console contains no unexplained errors.
- [ ] All five acceptance criteria are satisfied.

---

# Questions Before Implementation

1. Which academic or technical projects should receive the greatest
   prominence?

2. Should professional experience at Nexteer Automotive appear in the
   portfolio?

3. Should certifications and honors be displayed?

4. What image should replace the original template profile image?

5. Should personal contact information be omitted from the public portfolio?

---

# Human Review of the AI Plan

## Accepted Plan Element

I accepted the recommendation to preserve the existing vCard design and
responsive behavior while replacing the template content with information
from content-notes.md. This limits unnecessary changes and reduces the risk
of breaking working functionality.

## Revised Plan Element

The AI suggested reviewing and possibly replacing the template profile image.
I revised this part of the plan so that the existing person's image will not
be used to represent me. A personal image will only be added if I choose an
appropriate image that I am comfortable publishing.

## Risk the AI Identified

The AI identified the risk that placeholder information from the original
template could accidentally remain on the published website. I will review
the final website for names, descriptions, links, images, and other content
that belong to the original template.

## Risk the AI Missed

The AI did not initially emphasize that GitHub Pages is a public deployment
and that information committed to the repository may remain in Git history
even if it is removed later. Therefore, I will avoid committing my personal
phone number, personal email address, passwords, API keys, or other private
information in the first place.

---

# Decisions Before Implementation

- Featured projects will include the Help Desk Ticket Management System,
  C++ Banking System, and Help Desk ETL and Database Project.
- The Digital Trace Manufacturing Research Project may also be included.
- Nexteer Automotive professional experience will be included.
- Certifications and honors will be included.
- The original template person's photograph will not be used to represent me.
- My personal phone number and personal email address will not be published.
- The website will remain a static HTML, CSS, and JavaScript website.
- Changes will be implemented incrementally and reviewed before merging.
