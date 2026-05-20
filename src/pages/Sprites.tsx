import { motion } from 'motion/react';

const sprites = [
  {
    file: 'Player1FacingForward.png',
    name: 'Player 1 — Facing Forward',
    category: 'Player Characters',
  },
  {
    file: 'Player1FacingLeft.png',
    name: 'Player 1 — Facing Left',
    category: 'Player Characters',
  },
  {
    file: 'Player1FacingRight.png',
    name: 'Player 1 — Facing Right',
    category: 'Player Characters',
  },
  {
    file: 'Player2FacingForward.png',
    name: 'Player 2 — Facing Forward',
    category: 'Player Characters',
  },
  {
    file: 'Player2FacingLeft.png',
    name: 'Player 2 — Facing Left',
    category: 'Player Characters',
  },
  {
    file: 'Player2FacingRight.png',
    name: 'Player 2 — Facing Right',
    category: 'Player Characters',
  },
  {
    file: 'FloorTile.png',
    name: 'Floor Tile',
    category: 'Environment',
  },
  {
    file: 'WallTile.png',
    name: 'Wall Tile',
    category: 'Environment',
  },
  {
    file: 'platform.png',
    name: 'Platform',
    category: 'Environment',
  },
  {
    file: 'door-removebg-preview.png',
    name: 'Door',
    category: 'Interactables',
  },
  {
    file: 'flag-removebg-preview.png',
    name: 'Flag',
    category: 'Interactables',
  },
  {
    file: 'title.png',
    name: 'Title Screen',
    category: 'UI',
  },
];

const categories = Array.from(new Set(sprites.map((s) => s.category)));

export default function Sprites() {
  return (
    <div className="min-h-screen px-6 py-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-sky font-semibold">
            Game Assets
          </span>
          <h1 className="mt-3 font-serif italic font-bold text-5xl md:text-6xl text-white">
            Sprites
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            All sprites were handcrafted by the BestFriends team members. Each
            asset was designed specifically for this cooperative puzzle-platformer.
          </p>
        </div>

        {/* Sprite sections by category */}
        {categories.map((category, catIdx) => (
          <section key={category} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold whitespace-nowrap">
                {category}
              </h2>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {sprites
                .filter((s) => s.category === category)
                .map((sprite, idx) => (
                  <motion.div
                    key={sprite.file}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: catIdx * 0.05 + idx * 0.05 }}
                    className="group flex flex-col items-center gap-3 p-4 rounded-lg border border-white/8 bg-white/3 hover:border-brand-sky/40 hover:bg-white/6 transition-all duration-200"
                  >
                    <div className="w-full aspect-square flex items-center justify-center overflow-hidden rounded">
                      <img
                        src={`/sprites/${sprite.file}`}
                        alt={sprite.name}
                        className="max-w-full max-h-full object-contain"
                        style={{ imageRendering: 'pixelated' }}
                      />
                    </div>
                    <p className="text-center text-[11px] text-slate-400 group-hover:text-white transition-colors leading-tight">
                      {sprite.name}
                    </p>
                  </motion.div>
                ))}
            </div>
          </section>
        ))}

        {/* Credit banner */}
        <div className="mt-8 py-6 px-8 rounded-lg border border-brand-sky/20 bg-brand-sky/5 text-center">
          <p className="text-slate-300 text-sm">
            ✦ All sprites were originally created by the{' '}
            <span className="text-white font-semibold">BestFriends team members</span>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
