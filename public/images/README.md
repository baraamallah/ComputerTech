## Images Directory

This directory is for static image assets used in the GameSmart PC Showcase application.

### Current Images:

1.  **`gamesmart-vision-poster.png`**:
    *   **Purpose**: Displayed in the "Our Vision" section of the About page.
    *   **Recommended Dimensions**: 800px width x 600px height (or similar 4:3 aspect ratio).
    *   **Action**: Replace the placeholder or current image with your project's actual vision poster. If you change the filename or type, update the `posterImageUrl` variable in `src/components/sections/AboutSection.tsx`.

2.  **`school-logo-placeholder.png`**:
    *   **Purpose**: Displayed in the footer of the application to showcase your school's logo.
    *   **Recommended Dimensions**: Aim for a height of around 40px-50px. The width will adjust to maintain aspect ratio. Transparent PNGs often work best.
    *   **Action**: Add your school's logo to this directory, naming it `school-logo-placeholder.png`. If you use a different filename or type, update the `src` attribute of the `Image` component in `src/components/layout/Footer.tsx`.

### Adding New Images:

*   Place new images in this `public/images/` folder.
*   You can then reference them in your components using a path like `/images/your-image-name.png`.
*   Remember to use the `next/image` component for optimized image handling.
