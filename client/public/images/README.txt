ClassUp local image slots
=========================

These image files are referenced by the site but not yet committed.
Add the following files to this folder (client/public/images/) to fix
the broken image slots in production:

  luna-avatar.png    - Coach Luna avatar (referenced in client/src/components/ClassUpUI.tsx)
  leo-avatar.png     - Coach Leo avatar (referenced in client/src/components/ClassUpUI.tsx)
  family-photo.webp  - Founder family photo (referenced in client/src/pages/About.tsx)

Until these files are added, the corresponding images will not render.
This is expected and no worse than the previous production state.
