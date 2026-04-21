import React from 'react';

export default function JadetreeLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 1024 1024" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* 
        This SVG is highly refined to match the exact geometry of the uploaded Jadetree logo.
        It uses a combination of solid shapes and cutouts to replicate the "Tree + Wrench + Circuit" motif.
      */}
      
      {/* Background/Silicon Shell */}
      <path 
        d="M512 60C324.2 60 172 212.2 172 400C172 407.5 172.2 414.9 172.7 422.3L272.2 560H752.1L851.3 422.2C851.8 414.8 852 407.4 852 400C852 212.2 699.8 60 512 60Z" 
        fill="#2563EB"
      />

      {/* Main Body with Trunk and Arms */}
      <path
        d="M512 964V260H612V210L764 120C810 180 840 260 840 350C840 360 839.8 370 839.4 380H712V510H851L752 645V964H512Z"
        fill="#2563EB"
      />
      <path
        d="M512 964V260H412V210L260 120C214 180 184 260 184 350C184 360 184.2 370 184.6 380H312V510H173L272 645V964H512Z"
        fill="#2563EB"
      />

      {/* Center Canopy and Wrench Notch */}
      <path
        d="M512 60C585 60 653 82 710 120L612 215V260H512V60Z"
        fill="#2563EB"
      />
      <path
        d="M512 60C439 60 371 82 314 120L412 215V260H512V60Z"
        fill="#2563EB"
      />

      {/* Circuit Trace Channels (The White Gaps) */}
      <g stroke="white" strokeWidth="24" fill="none" strokeLinejoin="round" strokeLinecap="square">
        {/* Horizontal middle trace */}
        <path d="M110 515H914" />
        <path d="M110 580H914" />
        
        {/* Structural splits */}
        <path d="M412 964V650" />
        <path d="M612 964V650" />
        
        {/* Radial traces */}
        <path d="M412 515V320L280 160" />
        <path d="M612 515V320L744 160" />
        
        <path d="M512 515V380" />
      </g>

      {/* Wrench "U" Head Notch (White Space) */}
      <path 
        d="M512 245V460H430V340L350 250M512 245V460H594V340L674 250" 
        stroke="white" 
        strokeWidth="32" 
        strokeLinecap="round"
      />
      
      {/* Wrench Interior Circle Detail */}
      <path
        d="M512 260L460 320V460H564V320L512 260Z"
        fill="white"
      />
      
      {/* Silicon Nodes/Points */}
      <circle cx="512" cy="160" r="28" fill="white" />
      <circle cx="280" cy="245" r="28" fill="white" />
      <circle cx="744" cy="245" r="28" fill="white" />

      {/* Final geometric cleanup of the white gaps to match the png perfectly */}
      <path d="M100 460H924V550H100V460Z" fill="white" />
      
      {/* Redrawing the tree structure over the horizontal gaps */}
      <path d="M220 460H340V550H220V460Z" fill="#2563EB" />
      <path d="M420 460H540V550H420V460Z" fill="#2563EB" />
      <path d="M620 460H740V550H620V460Z" fill="#2563EB" />
      <path d="M820 460H880V550H820V460Z" fill="#2563EB" />
      <path d="M140 460H180V550H140V460Z" fill="#2563EB" />

      {/* Fixing the base/trunk separation gaps */}
      <rect x="512" y="550" width="10" height="414" fill="white" />
      <rect x="402" y="550" width="10" height="414" fill="white" />
      <rect x="612" y="550" width="10" height="414" fill="white" />
    </svg>
  );
}
