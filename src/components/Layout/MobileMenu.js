import React from 'react';

const MobileMenu = ({ isOpen, onClose, navigationItems, onNavigate, headerHeight }) => {
  // The menu is always rendered in the DOM for smoother transitions.
  // Visibility and interactivity are controlled by opacity, maxHeight, and pointer-events.

  return (
    <>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm z-40
          transition-opacity duration-300 ease-in-out
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
        aria-hidden={!isOpen} // For accessibility
      />

      {/* Menu Panel */}
      <div
        className={`
          fixed left-0 right-0 w-full bg-theme-secondary/95 backdrop-blur-md border-b border-theme-primary 
          z-45 {/* Positioned below the main header (z-50 in Header.js) */}
          overflow-hidden {/* Crucial for max-height animation */}
          transition-all duration-300 ease-in-out {/* Animates maxHeight and opacity */}
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        style={{
          top: `${headerHeight || 0}px`, // Position directly below the header
          maxHeight: isOpen ? `calc(100vh - ${headerHeight || 0}px)` : '0px', // Animate height
        }}
      >
        {/* Navigation Items */}
        <div className="py-6 pt-8"> {/* Added some top padding to compensate for removed header */}
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
