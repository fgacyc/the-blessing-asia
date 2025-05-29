import React, { useEffect } from 'react';

const MobileMenu = ({ isOpen, onClose, navigationItems, onNavigate, headerHeight }) => {
  // The menu is always rendered in the DOM for smoother transitions.
  // Visibility and interactivity are controlled by opacity, maxHeight, and pointer-events.

  // Effect to close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, onClose]); // Re-run effect if isOpen or onClose changes

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
          fixed left-0 right-0 w-full 
          bg-gradient-to-b from-orange-500/80 via-orange-600/70 to-black/90 backdrop-blur-md 
          rounded-b-2xl shadow-2xl 
          border-b-2 border-orange-500 {/* Moved orange line to bottom */}
          z-45 {/* Positioned below the main header (z-50 in Header.js) */}
          overflow-y-auto {/* Allows scrolling if content exceeds maxHeight */}
          transition-all duration-300 ease-in-out {/* Animates maxHeight and opacity */}
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        style={{
          top: `${headerHeight || 0}px`, // Position directly below the header
          maxHeight: isOpen ? `60vh` : '0px', // Animate height, uses less screen space
        }}
      >
        {/* Navigation Items */}
        <div className="py-6 pt-8"> {/* Added some top padding to compensate for removed header */}
          {navigationItems.map((item, index) => (
            <div
              key={item.id}
              className={`
                px-6 py-4 cursor-pointer hover:bg-theme-tertiary/30 
                border-b border-theme-secondary/50 last:border-b-0
                transition-all duration-300 ease-in-out
                ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}
              `}
              style={{ 
                transitionDelay: isOpen ? `${index * 75}ms` : '0ms',
                // transitionProperty: 'opacity, transform' // Handled by transition-all
              }}
              onClick={() => onNavigate(item.id)}
            >
              <div>
                <div className="text-theme-primary text-lg font-medium mb-1">
                  {item.label}
                </div>
                {item.chinese && (
                  <div className="text-theme-secondary text-sm">
                    {item.chinese}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {/* <div className="p-6 border-t border-theme-secondary/50">
          <div className="text-center">
            <div className="text-theme-accent font-semibold text-lg mb-1">The Blessing Asia</div>
            <div className="text-theme-secondary text-sm">22-23 AUG 2025</div>
            <div className="text-theme-secondary text-sm">Hyatt Regency Kota Kinabalu</div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MobileMenu;
