import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Trash2, 
  Eye, 
  EyeOff, 
  Check, 
  X 
} from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';
import { Advertisement, AdvertisementDuration } from '../types';

const DURATION_OPTIONS: { key: AdvertisementDuration; label: string; days: number }[] = [
  { key: '1d', label: '1 Day', days: 1 },
  { key: '3d', label: '3 Days', days: 3 },
  { key: '7d', label: '7 Days', days: 7 },
  { key: '10d', label: '10 Days', days: 10 },
  { key: '15d', label: '15 Days', days: 15 },
  { key: '20d', label: '20 Days', days: 20 },
  { key: '1m', label: '1 Month', days: 30 }
];

export const AdminAdvertisementSection: React.FC = () => {
  const { content, saveAdvertisement, removeAdvertisement, toggleAdvertisementActive } = useSiteContent();
  const currentAd = content.advertisement;

  // Form states for creating or updating advertisement
  const [imageUrl, setImageUrl] = useState<string>(currentAd?.imageUrl || '/uae-typing-ad-720x1280.svg');
  const [selectedDuration, setSelectedDuration] = useState<AdvertisementDuration>(() => {
    if (currentAd?.durationDays === 1) return '1d';
    if (currentAd?.durationDays === 3) return '3d';
    if (currentAd?.durationDays === 7) return '7d';
    if (currentAd?.durationDays === 10) return '10d';
    if (currentAd?.durationDays === 15) return '15d';
    if (currentAd?.durationDays === 20) return '20d';
    if (currentAd?.durationDays === 30) return '1m';
    return '7d';
  });

  // Measured dimensions of the image being previewed
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState<boolean>(false);
  const [previewModalOpen, setPreviewModalOpen] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Measure uploaded/selected image dimensions
  useEffect(() => {
    if (!imageUrl) {
      setDimensions(null);
      return;
    }
    const img = new Image();
    img.onload = () => {
      setDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };
    img.src = imageUrl;
  }, [imageUrl]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (.png, .jpg, .jpeg, .webp, or .svg).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setImageUrl(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!imageUrl.trim()) {
      alert('Please upload or provide an advertisement image.');
      return;
    }

    const durationConfig = DURATION_OPTIONS.find(o => o.key === selectedDuration) || DURATION_OPTIONS[2];
    const now = Date.now();
    const durationMs = durationConfig.days * 24 * 60 * 60 * 1000;
    const expiresAt = now + durationMs;

    const newAd: Advertisement = {
      id: `ad-${now}`,
      imageUrl: imageUrl.trim(),
      targetWidth: 720,
      targetHeight: 1280,
      actualWidth: dimensions?.width || 720,
      actualHeight: dimensions?.height || 1280,
      createdAt: now,
      durationDays: durationConfig.days,
      durationLabel: durationConfig.label,
      expiresAt: expiresAt,
      isActive: true
    };

    saveAdvertisement(newAd);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 4000);
  };

  const isCurrentActive = Boolean(currentAd && currentAd.isActive && Date.now() <= currentAd.expiresAt);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Toast Confirmation */}
      {showSuccessToast && (
        <div className="p-4 bg-emerald-950/90 border border-emerald-500/50 rounded-2xl flex items-center justify-between text-emerald-300 text-sm shadow-xl">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <p className="font-bold text-white">Advertisement Published & Live!</p>
              <p className="text-xs text-emerald-300/80">
                When visitors tap or click anywhere on the public website, this advertisement popup will appear.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowSuccessToast(false)}
            className="p-1 rounded-lg hover:bg-emerald-900/60 text-emerald-400 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Active Ad Status Bar (if active) */}
      {currentAd && (
        <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className={`w-2.5 h-2.5 rounded-full ${isCurrentActive ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
            <div>
              <span className="text-xs font-bold text-white block">
                {isCurrentActive ? 'Current Ad is Live & Active' : 'Current Ad is Inactive'}
              </span>
              <span className="text-[11px] text-slate-400">
                Duration: {currentAd.durationLabel} • Expires on {new Date(currentAd.expiresAt).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => toggleAdvertisementActive(!currentAd.isActive)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                currentAd.isActive 
                  ? 'bg-amber-400/20 text-amber-300 hover:bg-amber-400/30' 
                  : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
              }`}
            >
              {currentAd.isActive ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{currentAd.isActive ? 'Pause Ad' : 'Activate Ad'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (confirm('Are you sure you want to remove this advertisement?')) {
                  removeAdvertisement();
                }
              }}
              className="p-2 rounded-xl bg-red-950/40 text-red-400 hover:bg-red-900/60 transition-colors cursor-pointer"
              title="Delete advertisement"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Upload Controls */}
      <div className="bg-[#0C1425] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Upload className="w-4 h-4 text-amber-400" />
            <span>Upload Advertisement Image</span>
          </h3>
          <span className="text-xs font-mono text-slate-400">
            Recommended: 720 × 1280 px
          </span>
        </div>

        {/* File Upload Box */}
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileUpload} 
          accept="image/*" 
          className="hidden" 
        />

        <div 
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-slate-700 hover:border-amber-400 bg-slate-900/60 hover:bg-slate-900/90 rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all group"
        >
          {imageUrl ? (
            <div className="space-y-3">
              <img
                src={imageUrl}
                alt="Selected advertisement"
                className="w-36 h-auto max-h-56 object-contain rounded-xl mx-auto shadow-xl border border-slate-700"
              />
              <div>
                <p className="text-sm font-bold text-emerald-400 group-hover:text-emerald-300">
                  Image Ready (Click to change)
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {dimensions ? `${dimensions.width} × ${dimensions.height} px` : 'Supports PNG, JPG, WebP, SVG'}
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-white group-hover:text-amber-300">
                Click to browse or drop 720×1280 image here
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Supports PNG, JPG, WebP, SVG
              </p>
            </>
          )}
        </div>
      </div>

      {/* Duration Selector */}
      <div className="bg-[#0C1425] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Select Display Duration</span>
          </h3>
          <span className="text-xs font-semibold text-amber-300">
            {DURATION_OPTIONS.find(o => o.key === selectedDuration)?.label} Selected
          </span>
        </div>

        <p className="text-xs text-slate-400">
          The popup will remain active on the public website for this duration:
        </p>

        {/* Duration Pills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {DURATION_OPTIONS.map((opt) => {
            const isSelected = selectedDuration === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => setSelectedDuration(opt.key)}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-black border-amber-300 shadow-lg shadow-amber-400/20 scale-[1.02]'
                    : 'bg-slate-900/90 text-slate-200 hover:bg-slate-800/90 border-slate-700 hover:border-slate-600 font-semibold'
                }`}
              >
                <div className="text-xs font-extrabold">{opt.label}</div>
                <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-slate-900' : 'text-slate-400'}`}>
                  {opt.days} {opt.days === 1 ? 'day' : 'days'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Duration calculation display */}
        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>
            If saved now, this advertisement will automatically expire on:{' '}
            <strong className="text-amber-300 font-semibold">
              {new Date(Date.now() + (DURATION_OPTIONS.find(o => o.key === selectedDuration)?.days || 7) * 24 * 3600 * 1000).toLocaleString(undefined, {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </strong>
          </span>
        </div>
      </div>

      {/* Save Action Bar */}
      <div className="p-6 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-0.5 text-center sm:text-left">
          <h4 className="text-sm font-bold text-white">Ready to activate?</h4>
          <p className="text-xs text-slate-400">
            Clicking save deploys this popup immediately to public website visitors.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setPreviewModalOpen(true)}
            className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-slate-700 cursor-pointer"
          >
            <Eye className="w-4 h-4 text-amber-400" />
            <span>Test Preview</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-amber-500/20 active:scale-95 cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Save Advertisement</span>
          </button>
        </div>
      </div>

      {/* Simulated Preview Modal in Admin Panel */}
      {previewModalOpen && (
        <div 
          onClick={() => setPreviewModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm cursor-pointer animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[420px] w-full max-h-[90vh] flex flex-col items-center justify-center cursor-default"
          >
            <button
              type="button"
              onClick={() => setPreviewModalOpen(false)}
              className="absolute -top-3 -right-3 z-20 w-8 h-8 rounded-full bg-slate-900 text-white border border-slate-700 hover:border-amber-400 flex items-center justify-center shadow-lg"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900">
              <img
                src={imageUrl}
                alt="Popup Preview"
                className="w-full h-auto max-h-[85vh] object-contain block mx-auto"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-2 bg-slate-950/70 px-3 py-1 rounded-full border border-slate-800">
              Visitor view simulation • Click outside this image to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
