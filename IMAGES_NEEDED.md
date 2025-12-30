# Images Required for Portfolio

## Current Status
The site is fully functional without images. The design uses a dark theme with CSS-based visual effects (parallax orbs and beams) that work well without images.

## Optional Enhancements

### Priority 1 (Nice to have):

1. **Open Graph Image** (for social sharing):
   - `public/og-image.png` (1200x630px)
   - Screenshot of the hero section or custom branded graphic
   - Add to `<head>` in index.html: `<meta property="og:image" content="https://uditkandari.com/og-image.png" />`

2. **Profile Photo** (optional for About section):
   - `public/images/profile.jpg` (400x400px)
   - Professional headshot

### Priority 2 (Future enhancements):

3. **Project Screenshots** (for richer project cards):
   - `public/images/projects/ui-regression-pack.png` (800x600px)
   - `public/images/projects/api-contract-tests.png` (800x600px)
   - `public/images/projects/flake-hunt-toolkit.png` (800x600px)

4. **Resume PDF**:
   - `public/resume.pdf`
   - Add download button to hero section if desired

## Directory Structure
```
public/
└── images/
    ├── blog/        (empty - for future blog post images)
    ├── hero/        (empty - hero uses CSS effects)
    ├── icons/       (empty - uses emoji/CSS)
    ├── projects/    (empty - for project screenshots)
    └── services/    (empty - not used in current design)
```

## Notes
- The current design intentionally relies on CSS visual effects rather than images
- This keeps the site lightweight and fast-loading
- Social sharing will work better with an og:image meta tag
- All directories are already created for future use
