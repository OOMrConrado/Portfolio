# Portfolio

Personal portfolio website built with Next.js, showcasing projects, experience, and technical skills.

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- DaisyUI
- Devicon

## Features

- Responsive design
- Dark/Light mode support
- **Bilingual support (English/Spanish)**
- Animated tech stack marquee
- SEO optimized
- Contact form integration
- Project showcase
- Blog with category filtering
- Dynamic blog posts with QA/Scrum/Testing content
- Vercel Analytics integration

## Setup

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Configuration

### Project Structure

The portfolio uses a clean separation between translatable content and global data:

```text
src/
├── data/
│   └── data.js          → Global data (no translation needed)
│                          • Personal info (name, email, URLs)
│                          • SEO metadata
│                          • Social media links
│                          • Skills/technologies
│                          • Blog metadata
└── locales/
    ├── es.js            → All content in Spanish
    │                      • Projects, Experience, Education
    │                      • Certifications, Languages
    │                      • UI labels and translations
    └── en.js            → All content in English
                           • Same structure as es.js
```

### Customizing Content

1. **Personal Information & Global Data**: Edit `src/data/data.js`
2. **Translatable Content**: Edit both `src/locales/es.js` and `src/locales/en.js`
3. **Adding New Projects/Certifications**: Add entries to both locale files to maintain bilingual support

## License

MIT License - see LICENSE file for details
