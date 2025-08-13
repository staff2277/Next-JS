import React from "react";

const DebugPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Tailwind Debug Test</h1>

      {/* Test standard Tailwind classes */}
      <div className="mb-4">
        <p className="text-red-500">Standard Tailwind color (should work)</p>
        <p className="text-xl">Standard Tailwind size (should work)</p>
      </div>

      {/* Test custom classes with kebab-case */}
      <div className="mb-4">
        <p className="text-toggleOrange">Custom toggle-orange color</p>
        <p className="text-heroLarge">Custom hero-large size</p>
        <p className="font-montAlt">Custom mont-alt font</p>
        <p className="text-primary-button">Custom primary-button size</p>
      </div>

      {/* Test with CSS variables as fallback */}
      <div className="mb-4">
        <p style={{ color: "#F77429" }}>Direct hex color (should work)</p>
        <p style={{ fontSize: "3.5rem" }}>Direct font size (should work)</p>
      </div>
    </div>
  );
};

export default DebugPage;
