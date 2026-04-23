# 3D Model Generation Prompts for Island Treasure
# Use these prompts on MeshyAI (https://www.meshy.ai/)

## Character Models

### adventurer.glb
Style: Low-poly cartoon style, colorful vibrant character design
Subject: Cute chibi adventurer/pirate character, wearing tropical island explorer outfit 
Details: Straw hat with red ribbon, white shirt, brown shorts, barefoot, big expressive eyes
Pose: T-pose for rigging, front view
Technical: 2500 polygons maximum, single texture atlas 1024x1024, rigged with standard humanoid skeleton (spine, arms, legs, head), hand-painted diffuse texture, no normal map needed, game-ready optimized
Background: Transparent/white

### crab.glb
Style: Low-poly stylized cartoon, slightly menacing but cute
Subject: Giant red crab monster, exaggerated claws, spotted shell pattern
Details: Big yellow eyes on stalks, sharp pincers, segmented legs, barnacles on shell
Pose: Neutral standing pose, legs slightly spread for stability
Technical: 800 polygons, 512x512 texture, simple rig (body, 6 legs, 2 claws, eyestalks), vertex-painted or simple texture
Background: Transparent/white

### shadow_wraith.glb
Style: Low-poly mystical creature, translucent ghostly appearance
Subject: Shadow wraith/spirit, floating humanoid silhouette
Details: Flowing dark purple-black body, glowing magenta core in chest, wispy tendrils, no legs
Pose: Floating pose, arms slightly raised
Technical: 600 polygons, 512x512 texture with alpha, emissive texture for core glow, simple rig (spine, arms, tendrils as simple bones), additive blending shader compatible
Background: Transparent/white

### seagull.glb
Style: Low-poly stylized bird, cartoon cute
Subject: White seagull in flight
Details: Grey wing tips, orange beak, webbed feet tucked, black eye
Pose: Wings spread in flight pose
Technical: 400 polygons, 256x256 texture, simple rig (wings, body, head), loop-friendly
Background: Transparent/white

---

## Environment Models

### palm_tree.glb
Style: Low-poly tropical stylized, bright cheerful colors
Subject: Tropical palm tree with curved trunk
Details: Brown segmented trunk, 6-8 large green fronds with segmented leaves, coconuts cluster, slight wind-sway animation ready
Pose: Natural leaning curve, fronds spread outward
Technical: 600 polygons, 512x512 texture atlas (trunk + leaves), rigged with 3 bones for wind animation (trunk base sway, mid sway, fronds), LOD ready
Background: Transparent/white

### oak_tree.glb
Style: Low-poly forest tree, hand-painted texture
Subject: Round-crowned oak tree
Details: Thick brown trunk, dense green foliage in clumps, some lower branches, autumn color hints
Pose: Natural growth spread
Technical: 800 polygons, 512x512 texture, simple rig (main trunk sway), LOD ready
Background: Transparent/white

### rock_mossy.glb
Style: Low-poly hand-painted style, mossy forest rock
Subject: Irregular boulder covered in patches of green moss
Details: Gray-brown base rock texture, vibrant green moss patches on top and crevices, some small grass tufts
Pose: Natural resting position, slightly tilted
Technical: 400 polygons, 512x512 texture with painted moss detail, no rig needed, collision mesh included
Background: Transparent/white

### rock_beach.glb
Style: Low-poly smooth weathered rock
Subject: Beach stone, worn by water
Details: Light grey smooth surface, some algae stains near base, rounded shape
Pose: Half-buried in sand position
Technical: 300 polygons, 256x256 texture, no rig
Background: Transparent/white

### bush_fern.glb
Style: Low-poly tropical foliage
Subject: Large fern bush cluster
Details: Multiple fronds with segmented leaves, varying sizes, dark green
Pose: Natural outward spread
Technical: 300 polygons, 256x256 texture, simple rig (sway in wind)
Background: Transparent/white

### bush_flower.glb
Style: Low-poly colorful flowering bush
Subject: Flowering shrub with blooms
Details: Green leafy base, clusters of flowers (red/pink/yellow/white variants), small berries
Pose: Rounded bush shape
Technical: 350 polygons, 256x256 texture, 4 color variants recommended
Background: Transparent/white

### grass_clump.glb
Style: Low-poly grass tuft
Subject: Clump of tropical grass blades
Details: 5-8 blades per clump, varying heights, bright green
Pose: Slight curve outward
Technical: 150 polygons per clump, 128x128 texture, 5 shape variants
Background: Transparent/white

### driftwood.glb
Style: Low-poly weathered wood
Subject: Piece of driftwood on beach
Details: Bleached white wood texture, twisted shape, some rope/knot remains
Pose: Natural beach-washed position
Technical: 450 polygons, 256x256 texture
Background: Transparent/white

### coral_reef.glb
Style: Low-poly underwater flora, vibrant colors
Subject: Coral reef formation
Details: Branching coral structure in orange/pink/purple, small fish hiding spots
Pose: Growing upward from seabed
Technical: 500 polygons, 256x256 texture, 3 shape variants (staghorn, brain, fan)
Background: Transparent/white

### shipwreck.glb
Style: Low-poly stylized wreck, atmospheric
Subject: Broken wooden ship on beach
Details: Split hull, exposed ribs, torn sail remnants, barnacle covered, treasure peeking from hold
Pose: Tilted on side, partially buried in sand
Technical: 2000 polygons, 1024x1024 texture, two materials (wood + metal), wreckage layout
Background: Transparent/white

---

## Interactive Items

### gem_blue.glb
Style: Low-poly magical crystal, glowing cartoon style
Subject: Floating magical gemstone, diamond cut
Details: Translucent cyan-blue crystal, inner glow effect, sparkles, metallic gold base setting
Pose: Upright floating position
Technical: 200 polygons, 256x256 texture with emissive map, self-illuminated shader ready, gentle rotation animation (provide keyframes or implied)
Background: Transparent/white

### gem_gold.glb
Style: Low-poly legendary artifact, radiant golden glow
Subject: Precious golden diamond-shaped gem, royal treasure
Details: Brilliant gold color with rainbow inner reflections, ornate gold frame, particle-emitting surface
Pose: Floating slightly tilted
Technical: 250 polygons, 256x256 texture with high emissive, bloom-effect ready, rotation animation
Background: Transparent/white

### chest_wood.glb
Style: Low-poly pirate treasure chest, wooden worn look
Subject: Classic curved-top treasure chest
Details: Dark wood planks with iron bands, metal lock, slightly opened lid showing golden glow inside
Pose: Closed but lid slightly ajar (5 degrees) for mystery
Technical: 500 polygons, 512x512 texture (wood grain + metal), rigged lid (single bone for open animation), separate gold pile inside
Background: Transparent/white

### powerup_speed.glb
Style: Low-poly magical power-up, energy effect
Subject: Floating yellow lightning bolt crystal
Details: Translucent yellow-orange crystal shaped like lightning bolt, electric arcs, speed lines aura
Pose: Diagonal dynamic angle
Technical: 300 polygons, 256x256 texture with emissive, glow shader ready, pulsing scale animation
Background: Transparent/white

### powerup_shield.glb
Style: Low-poly protective barrier item
Subject: Floating blue spherical energy core
Details: Translucent blue sphere with hexagonal pattern surface, energy rings orbiting, soft glow
Pose: Centered floating
Technical: 280 polygons, 256x256 texture with alpha, additive shader compatible, rotating ring animation bones
Background: Transparent/white

### powerup_magnet.glb
Style: Low-poly magnetic force visualization
Subject: Floating purple magnet-shaped crystal
Details: Horseshoe magnet form, purple metallic surface, magnetic field lines visible as glowing trails
Pose: Upright floating
Technical: 320 polygons, 256x256 texture, emissive trails, gentle bobbing animation
Background: Transparent/white

### torch_lit.glb
Style: Low-poly light source, warm glow
Subject: Wooden torch with flame
Details: Wrapped handle, burning top with stylized flame, ember particles
Pose: Held upright
Technical: 250 polygons, 256x256 texture with emissive fire, point light source, flickering animation
Background: Transparent/white

---

## Particle/Effect Models

### particle_sparkle.glb
Style: Low-poly glowing particle
Subject: Collection of sparkle shapes for collection effects
Details: 4-pointed stars in various sizes, yellow-white gradient
Pose: Centered origin
Technical: 50 polygons total, 128x128 texture with alpha, multiple sparkles in one file
Background: Transparent/white

### particle_splash.glb
Style: Low-poly stylized splash effect
Subject: Water splash burst, cartoon style
Details: Multiple water droplets in explosion pattern, white-blue gradient, transparency ready
Pose: Mid-splash frozen moment
Technical: 100 polygons total for all droplets, 128x128 texture with alpha, single frame for particle system use
Background: Transparent/white

### particle_dust.glb
Style: Low-poly dust cloud
Subject: Dust puff for footsteps/impact
Details: Soft cloud shape, brown-grey gradient
Pose: Ground level burst
Technical: 80 polygons, 128x128 texture with alpha
Background: Transparent/white

---

## Export Settings for MeshyAI

When generating, use these settings:
- Format: GLB (glTF 2.0 Binary)
- Target platform: Game/Realtime
- Include: Normals, UVs, Vertex colors (optional)
- Optimize: Yes, for game use
- Texture format: PNG or JPEG (prefer PNG for transparency)
- Maximum texture size: As specified per model

## File Naming Convention

Place all generated models in: `public/models/`

Naming: lowercase_with_underscores.glb
