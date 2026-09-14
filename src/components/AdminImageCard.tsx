import React, { useState, useEffect, useRef } from 'react';
import { Upload, Check, RefreshCw, Sparkles, ExternalLink, Image as ImageIcon, FileText } from 'lucide-react';
import { SiteImageItem } from '../types';

interface AdminImageCardProps {
  image: SiteImageItem;
  onUpdateUrl: (newUrl: string) => void;
  onResetUrl: () => void;
}

export const AdminImageCard: React.FC<AdminImageCardProps> = ({
  image,
  onUpdateUrl,
  onResetUrl
}) => {
  const [currentUrl, setCurrentUrl] = useState<string>(image.url);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
  const [aspectRatio, setAspectRatio] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync internal state when parent image changes
  useEffect(() => {
    setCurrentUrl(image.url);
  }, [image.url]);

  // Load natural dimensions of the image
  useEffect(() => {
    if (!currentUrl) return;
    const img = new Image();
    img.src = currentUrl;
    img.onload = () => {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      // Calculate simplified aspect ratio
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
      const divisor = gcd(w, h);
      const ratioW = Math.round(w / divisor);
      const ratioH = Math.round(h / divisor);
      if (ratioW < 20 && ratioH < 20) {
        setAspectRatio(`${ratioW}:${ratioH}`);
      } else {
        setAspectRatio((w / h).toFixed(2) + ':1');
      }
    };
    img.onerror = () => {
      setDimensions(null);
    };
  }, [currentUrl]);

  // File Upload handler (converts to base64 Data URL)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setCurrentUrl(dataUrl);
        onUpdateUrl(dataUrl);
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 2500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSave = () => {
    onUpdateUrl(currentUrl);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-5 shadow-lg flex flex-col justify-between group hover:border-amber-400/60 transition-all">
      
      {/* Top Header: Title & Section */}
      <div className="mb-3.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
            {image.section}
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            ID: {image.id}
          </span>
        </div>
        <h4 className="text-sm sm:text-base font-bold text-white mt-1.5 line-clamp-1">
          {image.name}
        </h4>
        <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">
          {image.description}
        </p>
      </div>

      {/* Image Preview Box with OVERLAID DIMENSIONS (Crucial Requirement!) */}
      <div className="relative w-full h-52 rounded-xl bg-slate-950/80 border border-slate-800 overflow-hidden flex items-center justify-center p-2 mb-4 group/img">
        
        {/* Actual Image */}
        <img
          src={currentUrl}
          alt={image.name}
          className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-300 group-hover/img:scale-105"
          referrerPolicy="no-referrer"
          onLoad={(e) => {
            const target = e.currentTarget;
            setDimensions({ width: target.naturalWidth, height: target.naturalHeight });
          }}
        />

        {/* --- CRITICAL REQUIREMENT: IMAGE SIZE DISPLAY OVERLAY ON TOP OF IMAGE IN ADMIN PANEL --- */}
        <div className="absolute top-2 left-2 z-20 pointer-events-none">
          <div className="bg-black/85 backdrop-blur-md text-amber-300 border border-amber-400/50 px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2 text-xs font-mono font-bold tracking-tight">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {dimensions 
                ? `Size: ${dimensions.width} × ${dimensions.height} px` 
                : 'Loading Size...'}
            </span>
            {aspectRatio && (
              <span className="text-slate-300 font-normal border-l border-slate-700 pl-1.5">
                ({aspectRatio})
              </span>
            )}
          </div>
        </div>

        {/* Recommended Size hint on bottom right */}
        <div className="absolute bottom-2 right-2 z-20 pointer-events-none">
          <div className="bg-slate-900/90 text-slate-300 border border-slate-700/80 px-2.5 py-1 rounded-md text-[10px] font-sans font-medium backdrop-blur-xs">
            Target: {image.recommendedSize}
          </div>
        </div>
      </div>

      {/* Action Controls & URL Input */}
      <div className="space-y-3 pt-2 border-t border-slate-800/80">
        
        {/* Direct URL Input */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-300 mb-1">
            Image URL or Path:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={currentUrl}
              onChange={(e) => setCurrentUrl(e.target.value)}
              placeholder="e.g. /amrk-logo.jpg or https://..."
              className="flex-1 bg-slate-950 border border-slate-700 px-3 py-1.5 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 font-mono"
            />
            <button
              type="button"
              onClick={handleUrlSave}
              className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer flex items-center gap-1"
            >
              {isSaved ? <Check className="w-3.5 h-3.5" /> : 'Set'}
            </button>
          </div>
        </div>

        {/* Upload from Local Computer & Reset Buttons */}
        <div className="flex items-center justify-between gap-2 pt-1">
          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*,.svg"
            className="hidden"
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 py-2 px-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5 text-amber-400" />
            <span>Upload Replacement</span>
          </button>

          <button
            type="button"
            onClick={onResetUrl}
            title="Reset to default image"
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl border border-slate-700 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
