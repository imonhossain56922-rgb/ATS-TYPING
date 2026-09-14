import React, { useState, useRef, useEffect } from 'react';
import { 
  Megaphone, 
  Upload, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Trash2, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Maximize2,
  Image as ImageIcon,
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

    // Check file type
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

  // Remaining time calculation for currently active advertisement
  const getRemainingTimeText = (expiresAt: number) => {
    const remainingMs = expiresAt - Date.now();
    if (remainingMs <= 0) return 'Expired';

    const days = Math.floor(remainingMs / (24 * 60 * 60 * 1000));
    const hours = Math.floor((remainingMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((remainingMs % (60 * 60 * 1000)) / (60 * 1000));

    if (days > 0) {
      return `${days} Day${days > 1 ? 's' : ''} ${hours} Hour${hours > 1 ? 's' : ''} remaining`;
    }
    return `${hours} Hour${hours > 1 ? 's' : ''} ${minutes} Min remaining`;
  };

  const isCurrentActive = Boolean(currentAd && currentAd.isActive && Date.now() <= currentAd.expiresAt);

  return (
    <div className="space-y-8">
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
            className="p-1 rounded-lg hover:bg-emerald-900/60 text-emerald-400"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header Info */}
      <div className="bg-[#0D1527] border border-slate-800 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center border border-amber-400/30">
              <Megaphone className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight">
                  New Advertisement
                </h2>
                <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Target: 720 × 1280 px
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Upload a promotional image poster, configure its active display duration, and save.
              </p>
            </div>
          </div>

          {/* Current Ad Quick Status */}
          {currentAd && (
            <div className="flex items-center gap-2 self-start md:self-auto bg-slate-900/90 p-2.5 rounded-2xl border border-slate-800">
              <span className={`w-2.5 h-2.5 rounded-full ${isCurrentActive ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
              <div className="text-left pr-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Current Status</p>
                <p className="text-xs font-bold text-white">
                  {isCurrentActive ? `Active (${getRemainingTimeText(currentAd.expiresAt)})` : 'Inactive / Expired'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Workflow Instructions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-1">
            <span className="text-xs font-mono font-bold text-amber-400">STEP 1</span>
            <p className="text-xs font-bold text-slate-200">Upload Image (720×1280)</p>
            <p className="text-[11px] text-slate-400">Select an image or upload poster from device.</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-1">
            <span className="text-xs font-mono font-bold text-amber-400">STEP 2</span>
            <p className="text-xs font-bold text-slate-200">Set Duration</p>
            <p className="text-[11px] text-slate-400">Choose 1, 3, 7, 10, 15, 20 Days or 1 Month.</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-1">
            <span className="text-xs font-mono font-bold text-amber-400">STEP 3</span>
            <p className="text-xs font-bold text-slate-200">Click & Touch Trigger</p>
            <p className="text-[11px] text-slate-400">Public visitors clicking anywhere see popup instantly.</p>
          </div>
        </div>
      </div>

      {/* Main Grid: Upload & Duration on Left, Live Image Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Upload Controls & Duration Picker (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Card 1: Image Upload Controls */}
          <div className="bg-[#0C1425] border border-slate-800 rounded-3xl p-6 space-y-5">
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
              className="border-2 border-dashed border-slate-700 hover:border-amber-400 bg-slate-900/60 hover:bg-slate-900/90 rounded-2xl p-6 text-center cursor-pointer transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-white group-hover:text-amber-300">
                Click to browse or drop 720×1280 image here
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Supports PNG, JPG, WebP, SVG (Auto-detects natural dimensions)
              </p>
            </div>

            {/* Direct Image URL input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Or enter Image URL / Path:</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://... or /path/image.jpg"
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setImageUrl('/uae-typing-ad-720x1280.svg')}
                  className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-semibold whitespace-nowrap transition-colors"
                  title="Load default 720x1280 sample advertisement poster"
                >
                  Load Sample Ad
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Duration Selector */}
          <div className="bg-[#0C1425] border border-slate-800 rounded-3xl p-6 space-y-4">
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

            {/* Duration Pills Grid: 1 Day, 3 Days, 7 Days, 10 Days, 15 Days, 20 Days, 1 Month */}
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

        </div>

        {/* Right Column: Image Preview with Admin Dimension Badge Overlay (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-[#0C1425] border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-amber-400" />
                <span>Image Dimension Inspector</span>
              </h3>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                Admin View Only
              </span>
            </div>

            <p className="text-xs text-slate-400">
              Only in this Admin Panel, the exact pixel dimensions are calculated and overlaid directly on the image.
            </p>

            {/* Poster Preview Card with Overlaid Size Badge */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-slate-950 flex items-center justify-center min-h-[380px] p-2">
              
              {imageUrl ? (
                <div className="relative w-full max-w-[280px] mx-auto rounded-xl overflow-hidden shadow-2xl">
                  {/* The Image */}
                  <img
                    src={imageUrl}
                    alt="Advertisement Preview"
                    className="w-full h-auto max-h-[460px] object-contain rounded-xl block mx-auto select-none"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dimension Overlay Badge on top of image (exclusive to Admin Panel) */}
                  <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between gap-1.5 pointer-events-none">
                    <div className="px-2.5 py-1 rounded-lg bg-slate-950/90 text-amber-300 border border-amber-400/50 backdrop-blur-md text-[11px] font-mono font-bold shadow-lg flex items-center gap-1.5">
                      <Maximize2 className="w-3 h-3 text-amber-400" />
                      <span>
                        Size: {dimensions ? `${dimensions.width} × ${dimensions.height} px` : 'Calculating...'}
                      </span>
                    </div>

                    {/* Status check if matches 720x1280 or standard 9:16 */}
                    {dimensions && (
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                        dimensions.width === 720 && dimensions.height === 1280
                          ? 'bg-emerald-500/90 text-slate-950 font-black'
                          : Math.abs(dimensions.height / dimensions.width - 1280 / 720) < 0.1
                          ? 'bg-blue-500/90 text-white'
                          : 'bg-amber-500/90 text-slate-950'
                      }`}>
                        {dimensions.width === 720 && dimensions.height === 1280 
                          ? 'Exact 720×1280' 
                          : `${(dimensions.width / dimensions.height).toFixed(2)} Ratio`}
                      </span>
                    )}
                  </div>

                  {/* Bottom watermark badge */}
                  <div className="absolute bottom-2 left-2 right-2 text-center pointer-events-none">
                    <span className="text-[10px] font-mono bg-slate-900/90 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700">
                      Target Ratio: 720 × 1280
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-slate-500 space-y-2">
                  <ImageIcon className="w-10 h-10 mx-auto opacity-40" />
                  <p className="text-xs">No image uploaded yet</p>
                </div>
              )}
            </div>

            {/* Current Active Advertisement Card info (if exists) */}
            {currentAd && (
              <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3 mt-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${isCurrentActive ? 'bg-emerald-400' : 'bg-red-400'}`} />
                    <span className="text-xs font-bold text-white">
                      {isCurrentActive ? 'Currently Active on Site' : 'Currently Paused / Expired'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => toggleAdvertisementActive(!currentAd.isActive)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                        currentAd.isActive 
                          ? 'bg-amber-400/20 text-amber-300 hover:bg-amber-400/30' 
                          : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
                      }`}
                      title={currentAd.isActive ? 'Pause advertisement' : 'Enable advertisement'}
                    >
                      {currentAd.isActive ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{currentAd.isActive ? 'Pause' : 'Activate'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (confirm('Are you sure you want to remove this advertisement?')) {
                          removeAdvertisement();
                        }
                      }}
                      className="p-1.5 rounded-lg bg-red-950/40 text-red-400 hover:bg-red-900/60 transition-colors cursor-pointer"
                      title="Delete advertisement"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 font-mono">
                  <div>
                    <span className="text-slate-500 block">Duration:</span>
                    <span className="text-slate-200 font-semibold">{currentAd.durationLabel}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Remaining:</span>
                    <span className="text-amber-400 font-semibold">{getRemainingTimeText(currentAd.expiresAt)}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-500 block">Expires on:</span>
                    <span className="text-slate-300">{new Date(currentAd.expiresAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

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
