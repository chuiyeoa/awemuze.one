# awemuze.one — starter (static, no-tracking)

This repository is intentionally minimal.

## Posture
- No analytics
- No tracking
- No SEO
- No login
- Static-first
- Silence-friendly

## Deploy (GitHub Pages)
1. Create a repo (e.g. `awemuze.one`)
2. Commit everything in this folder
3. In GitHub: Settings → Pages → Deploy from branch (main / root)
4. Set custom domain: `awemuze.one` (GitHub Pages will create `CNAME`)

## DNS (typical)
- `CNAME awemuze.one -> <your-github-username>.github.io`
or use GitHub's A/AAAA records if you prefer apex handling.

## Add your artifacts
Place files in:
- `/assets/svg`
- `/assets/glb`
- `/assets/audio`

Then create self-contained ritual pages under `/rituals/`.

## Energy discipline
- Load heavy assets only after a user click.
- Respect `prefers-reduced-motion`.
- Keep everything local-only (no external calls).
