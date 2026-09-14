import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

export const AdvertisementPopup: React.FC = () => {
  const location = useLocation();
  const { content } = useSiteContent();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasInteractedThisSession, setHasInteractedThisSession] = useState<boolean>(false);

  const ad = content.advertisement;

  // Verify if ad is currently active and not expired
  const isAdValid = Boolean(
    ad &&
    ad.isActive &&
    ad.imageUrl &&
    Date.now() <= ad.expiresAt
  );

  // Check if current page is public (not /admin and not /login)
  const isPublicPage = !location.pathname.startsWith('/admin') && location.pathname !== '/login';

  useEffect(() => {
    // Reset session interaction flag when navigating to a new page or if ad changes
    setHasInteractedThisSession(false);
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isAdValid || !isPublicPage) {
      return;
    }

    // "public website open korla jakono jaygay click ba touch korlae only oi image ti popup hoya show hoba."
    const handleGlobalInteraction = (e: MouseEvent | TouchEvent) => {
      // If popup is already open, the popup's own backdrop click handler will handle vanishing it
      if (isOpen) return;

      // If user hasn't dismissed the ad on this view, open the popup
      if (!hasInteractedThisSession) {
        setIsOpen(true);
      }
    };

    // Capture user click/touch anywhere on the document
    document.addEventListener('click', handleGlobalInteraction, { capture: true });
    document.addEventListener('touchend', handleGlobalInteraction, { capture: true });

    return () => {
      document.removeEventListener('click', handleGlobalInteraction, { capture: true });
      document.removeEventListener('touchend', handleGlobalInteraction, { capture: true });
    };
  }, [isAdValid, isPublicPage, isOpen, hasInteractedThisSession]);

  if (!isAdValid || !isPublicPage || !isOpen || !ad) {
    return null;
  }

  // "Image er bahira click korla image vanish hoya jabe."
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicked directly on the overlay backdrop, not on the image itself
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      setHasInteractedThisSession(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setHasInteractedThisSession(true);
  };

  return (
    <div
      id="advertisement-modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
      style={{ animationDuration: '200ms' }}
    >
      {/* Container holding the advertisement image */}
      <div 
        className="relative max-w-[420px] sm:max-w-[480px] w-full max-h-[92vh] flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()} // Clicking inside does not close
      >
        {/* Accessible Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close advertisement"
          className="absolute -top-3.5 -right-3.5 z-20 w-9 h-9 rounded-full bg-slate-900/90 text-white border-2 border-slate-600 hover:border-amber-400 hover:text-amber-400 flex items-center justify-center shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Advertisement Poster Image (720x1280 ratio) */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900 group">
          <img
            src={ad.imageUrl}
            alt="Advertisement"
            className="w-full h-auto max-h-[86vh] object-contain block mx-auto select-none rounded-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Small hint underneath image */}
        <p className="text-[11px] text-slate-400 text-center mt-2.5 font-medium tracking-wide bg-slate-950/60 px-3 py-1 rounded-full border border-slate-800 pointer-events-none">
          Click or tap outside this image to close
        </p>
      </div>
    </div>
  );
};
