import React from 'react';

const MobileMenu = ({ isOpen, onClose, navigationItems, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className={`fixed top-0 left-0 right-0 w-full bg-theme-secondary/95 backdrop-blur-md border-b border-theme-primary z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-theme-primary">
          <div className="bg-theme-tertiary px-4 py-2 rounded">
            <span className="text-theme-primary font-semibold">TB Logo</span>
          </div>
          <button
            onClick={onClose}
            className="text-theme-primary p-2 rounded-lg hover:bg-theme-tertiary/50 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <div className="py-6">
          {navigationItems.map((item) => (
            <div
              key={item.id}
              className="px-6 py-4 cursor-pointer hover:bg-theme-tertiary/30 transition-colors border-b border-theme-secondary last:border-b-0"
              onClick={() => onNavigate(item.id)}
            >
              <div className="text-theme-primary text-lg font-medium mb-1">
                {item.label}
              </div>
              {item.chinese && (
                <div className="text-theme-secondary text-sm">
                  {item.chinese}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-theme-primary">
          <div className="text-center">
            <div className="text-theme-accent font-semibold text-lg mb-1">The Blessing Asia</div>
            <div className="text-theme-secondary text-sm">22-23 AUG 2025</div>
            <div className="text-theme-secondary text-sm">Hyatt Regency Kota Kinabalu</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
