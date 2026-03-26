/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Download, Heart } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  // Usamos um placeholder caso a imagem real ainda não tenha sido colocada na pasta public
  const [imageSrc, setImageSrc] = useState('/foto-restaurada.jpg');

  const handleImageError = () => {
    // Fallback para uma imagem de placeholder bonita caso o usuário ainda não tenha subido a foto
    setImageSrc('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop');
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2825] font-sans selection:bg-[#d4af37] selection:text-white flex flex-col">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-12 text-center px-4 mt-8"
      >
        <h1 className="font-serif text-5xl md:text-7xl font-semibold mb-6 text-[#3a2e28] tracking-tight">
          Maria Luisa
        </h1>
        <div className="flex items-center justify-center gap-4 text-[#8c7b70]">
          <div className="h-px w-16 bg-[#d4af37]/60"></div>
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm font-medium">90 Anos de Histórias</p>
          <div className="h-px w-16 bg-[#d4af37]/60"></div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center px-4 pb-16 max-w-5xl mx-auto w-full">
        {/* Image Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative group p-4 md:p-6 bg-white shadow-2xl rounded-sm border border-[#f0ebe1] mb-12 w-full max-w-3xl transform transition-transform duration-700 hover:scale-[1.02]"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-sm pointer-events-none"></div>
          <img
            src={imageSrc}
            onError={handleImageError}
            alt="Foto restaurada da família"
            className="w-full h-auto object-cover rounded shadow-inner"
            style={{ maxHeight: '70vh' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-8 right-8 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-md">
            <Heart className="w-6 h-6 fill-current" />
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <a
            href="/foto-restaurada.jpg"
            download="Maria_Luisa_90_Anos_Restaurada.jpg"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#3a2e28] text-[#fdfbf7] rounded-full overflow-hidden transition-all duration-300 hover:bg-[#2c2825] hover:shadow-xl hover:shadow-[#3a2e28]/20 active:scale-95"
          >
            <div className="absolute inset-0 w-0 bg-[#d4af37] transition-all duration-500 ease-out group-hover:w-full opacity-10"></div>
            <Download className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
            <span className="font-medium tracking-wide text-sm md:text-base">Baixar Foto Restaurada</span>
          </a>

          <p className="mt-6 text-xs md:text-sm text-[#8c7b70] max-w-md text-center leading-relaxed">
            Clique no botão acima para salvar a foto em alta resolução no seu dispositivo.
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="py-8 text-center text-xs text-[#8c7b70] border-t border-[#f0ebe1]/50"
      >
        <p className="tracking-widest uppercase">Com amor, Família</p>
      </motion.footer>
    </div>
  );
}
