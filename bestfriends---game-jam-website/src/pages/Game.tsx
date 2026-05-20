import { motion } from 'motion/react';
import { ExternalLink, Trophy, Cpu } from 'lucide-react';
import { Unity, useUnityContext } from 'react-unity-webgl';

export default function Game() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: '/unity-game/Build/WebGLBuild.loader.js',
    dataUrl: '/unity-game/Build/WebGLBuild.data',
    frameworkUrl: '/unity-game/Build/WebGLBuild.framework.js',
    codeUrl: '/unity-game/Build/WebGLBuild.wasm',
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
      <div className="grid lg:grid-cols-3 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-sky font-bold">Inaugural CompSci Game Jam</span>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>
            <h1 className="text-6xl font-serif italic font-bold tracking-tight mb-10 text-white leading-tight">
              Best <span className="text-brand-sky">Friends!</span> <br />
              The Tower Climb
            </h1>

            {/* Game Embed */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-brand-card shadow-2xl">
              {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-card z-10">
                  <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Loading game...</p>
                  <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-sky rounded-full transition-all duration-300"
                      style={{ width: `${Math.round(loadingProgression * 100)}%` }}
                    />
                  </div>
                  <p className="text-white/20 text-xs mt-3">{Math.round(loadingProgression * 100)}%</p>
                </div>
              )}
              <Unity
                unityProvider={unityProvider}
                style={{ width: '100%', aspectRatio: '16/9', display: 'block' }}
              />
            </div>
          </motion.div>

          <section>
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-8 font-bold">Technical Specifications</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Engine', value: 'Unity 2026' },
                { label: 'Rendering', value: '2D Pixel' },
                { label: 'Target', value: 'WebGL' },
                { label: 'Input', value: 'Dual Key' }
              ].map((spec) => (
                <div key={spec.label} className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-3">{spec.label}</p>
                  <p className="text-sm font-serif italic font-bold text-white">{spec.value}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-12">
          <div className="p-10 rounded-2xl bg-brand-card border border-white/5 bg-gradient-to-br from-brand-card to-brand-bg">
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6 font-bold">Project Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 italic font-serif">Original Platform</p>
                <p className="text-sm text-white">Browser / WebGL</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 italic font-serif">Engine Requirements</p>
                <p className="text-sm text-white">None (Safe in Browser)</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}