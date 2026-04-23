# Island Trove

A 3D island exploration and treasure hunting game built with Three.js and Vite.

![Game Screenshot](./screenshot.png)

## Play the Game

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## How to Play

- **WASD** or **Arrow Keys** - Move the character
- **Mouse Drag** - Rotate camera
- **Collect all gems** to complete each level
- **Avoid enemies** - crabs and shadow wraiths
- **Stay away from water** - it drains your health!

### Power-ups

- **Speed Boost** (Yellow) - Move faster for 5 seconds
- **Shield** (Blue) - Block one enemy hit
- **Magnet** (Purple) - Attract gems from a distance

## Game Features

### 5 Unique Levels

| Level | Name | Weather | Gems | Enemies | Time Limit |
|-------|------|---------|------|---------|------------|
| 1 | Calm Shores | Clear | 5 | 0 | 60s |
| 2 | Misty Woods | Foggy | 7 | 2 | 55s |
| 3 | Skull Cove | Rainy | 10 | 3 | 50s |
| 4 | Dragon's Peak | Storm | 12 | 4 | 45s |
| 5 | The Abyss | Clear | 15 | 5 | 40s |

### Dynamic Weather System

- **Clear** - Normal visibility, calm waters
- **Foggy** - Reduced visibility, enemies harder to spot
- **Rainy** - Slippery terrain, stronger waves
- **Storm** - Lightning effects, wind pushes player, highest waves

### Physics & Terrain

- Procedurally generated island terrain using Simplex noise
- Slope-based movement speed (slow uphill, fast downhill)
- Beach drag simulation
- Fall damage from high places
- Water damage system

### Scoring System

- Base gem value increases per level
- **Golden Gems** - Worth 3x points
- **Combo Multiplier** - Collect gems quickly for bonus points
- **Time Bonus** - Remaining time adds to score

## Technical Details

### Built With

- [Three.js](https://threejs.org/) - 3D graphics library
- [Vite](https://vitejs.dev/) - Build tool and dev server
- Custom GLSL shaders for water effects
- Procedural terrain generation

### Model Loading

The game supports GLTF/GLB models with DRACO compression. It gracefully falls back to procedurally generated geometry if models fail to load.

### Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

Requires WebGL 2.0 support.

## Project Structure

```
├── index.html              # Entry point
├── src/
│   ├── main.js            # Game logic and rendering
│   ├── style.css          # UI styles
│   └── utils/
│       └── SimplexNoise.js # Terrain generation
├── models/                # 3D models (optional)
│   ├── adventurer.glb
│   ├── gem.glb
│   ├── gem_gold.glb
│   ├── crab.glb
│   ├── shadow_wraith.glb
│   ├── tree.glb
│   └── rock_mossy.glb
└── vite.config.js
```

## License

MIT License - feel free to use this project for learning or as a base for your own games!

## Credits

Created with Three.js and lots of coffee.
