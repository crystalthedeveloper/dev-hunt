# Dev Hunt • Monochrome Flight Sandbox

Dev Hunt is a react-three-fiber experience inspired by cyberpunk flight controllers and hacker aesthetics. You pilot a minimalist ship across floating logo platforms, collect skill glyphs, and unlock the entire skill tree—all rendered in a monochrome palette that runs smoothly on desktop and mobile.

<img src="public/preview.png" alt="Dev Hunt preview" width="720" />

---

## Highlights

- **Monochrome Space Stage** – adaptive fog, logo platforms, and grayscale UI that stays legible on any screen.
- **Touch-first Trackpad Controls** – drag anywhere to steer; vertical movement tilts the camera like a flight stick.
- **Responsive & Optimized** – capped pixel ratio, simplified lighting/materials, and lighter physics when running on phones/tablets.
- **Skill Tree HUD** – collapsible accordion with real-time progress, styled to match the hacker theme.
- **Collectible Words** – each platform hosts skill glyphs; gathering them unlocks the entire tree before the cinematic win screen.
- **Grounded Feedback & Radar** – logo pads pulse when you land and a mobile-friendly radar shows heading, nearby pads, and boundary warnings.

---

## Controls

### Mobile / Touch
- **Drag trackpad** – steer, throttle, and adjust pitch.
- **Release** – drift to a stop; tap again to re-engage.

### Desktop
- **W / ↑** – Throttle forward
- **S / ↓** – Reverse / slow down
- **A / ←** – Yaw left
- **D / →** – Yaw right
- **Space** – Lift burst
- **Shift** – Subtle boost

Movement is intentionally smoother and slower to reduce motion sickness while keeping flight responsiveness.

---

## Performance Profile

- Device detection via `useDeviceProfile` keeps DPR ≤ 1.25 on mobile.
- Shadows, secondary lights, and glossy materials simplify automatically on touch devices.
- Physics runs at 50 Hz / 8 iterations on mobile (60 Hz / 12 on desktop) with SAP broadphase and sleep enabled.
- Star density, fog, and platform scale adapt per device to sustain ~30 FPS on mid-range hardware while staying under ~300 MB GPU memory.

---

## Technology

- **React 18 + Vite**
- **react-three-fiber** & **Three.js**
- **@react-three/drei** (Canvas helpers, stars, loaders)
- **@react-three/cannon** physics
- **Zustand** for movement and skill state

---

## Getting Started

```
git clone https://github.com/crystalthedeveloper/dev-hunt.git
cd dev-hunt
npm install
```

### Development

```
npm run dev
```

Open http://localhost:5173 to explore the arena.

### Production Build

```
npm run build
npm run preview
```

Deploy the `dist/` output to your hosting provider (Vercel works out of the box).

---

## Project Structure

- `src/hooks/useDeviceProfile.ts` – device detection and adaptive performance settings.
- `src/components/3d/` – scene entities (player, platforms, collectibles).
- `src/components/ui/Interface.tsx` – HUD, touch trackpad, radar, and cinematic win overlay.
- `src/stores/useGame.ts` – Zustand store with game state and skill definitions.

---

## License

MIT © 2025 [Crystal The Developer](https://www.crystalthedeveloper.ca)

Feel free to remix and build your own monochrome worlds—just keep the credit. Contributions and performance ideas are welcome.
