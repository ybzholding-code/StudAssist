import React from "react";

export const PiShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6,12 Q20,6 34,12 M14,12 L14,32 M26,12 L26,26 Q26,34 34,32" />
  </svg>
);

export const SquareRootShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6,22 L12,22 L18,34 L28,6 L36,6" />
  </svg>
);

export const SigmaShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="30,8 12,8 22,20 12,32 30,32" />
  </svg>
);

export const AtomShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
    <ellipse cx="20" cy="20" rx="14" ry="5" transform="rotate(30 20 20)" />
    <ellipse cx="20" cy="20" rx="14" ry="5" transform="rotate(90 20 20)" />
    <ellipse cx="20" cy="20" rx="14" ry="5" transform="rotate(150 20 20)" />
    <circle cx="20" cy="20" r="2.5" fill={color} />
  </svg>
);

export const MatrixShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14,6 L8,6 L8,34 L14,34 M26,6 L32,6 L32,34 L26,34" />
    <circle cx="14" cy="14" r="1.5" fill={color} stroke="none" />
    <circle cx="20" cy="14" r="1.5" fill={color} stroke="none" />
    <circle cx="26" cy="14" r="1.5" fill={color} stroke="none" />
    <circle cx="14" cy="20" r="1.5" fill={color} stroke="none" />
    <circle cx="20" cy="20" r="1.5" fill={color} stroke="none" />
    <circle cx="26" cy="20" r="1.5" fill={color} stroke="none" />
    <circle cx="14" cy="26" r="1.5" fill={color} stroke="none" />
    <circle cx="20" cy="26" r="1.5" fill={color} stroke="none" />
    <circle cx="26" cy="26" r="1.5" fill={color} stroke="none" />
  </svg>
);

export const BeakerShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14,6 L26,6 M17,6 L17,16 L28,32 L12,32 L23,16 L23,6" />
    <path d="M15,26 L25,26" strokeWidth="2" opacity="0.5" />
    <circle cx="20" cy="30" r="1" fill={color} stroke="none" opacity="0.8" />
    <circle cx="16" cy="28" r="1.5" fill={color} stroke="none" opacity="0.6" />
  </svg>
);

export const CompassShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="20" cy="8" r="3" />
    <path d="M18,10 L8,34 M22,10 L32,34 M13,24 L27,24 M15,20 L25,20 M20,16 L20,30" opacity="0.8" />
  </svg>
);

export const BookShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20,32 L20,10 C20,10 16,6 8,8 L8,30 C16,28 20,32 20,32 Z" />
    <path d="M20,32 L20,10 C20,10 24,6 32,8 L32,30 C24,28 20,32 20,32 Z" />
    <line x1="12" y1="14" x2="16" y2="14" strokeWidth="2" opacity="0.5" />
    <line x1="12" y1="18" x2="16" y2="18" strokeWidth="2" opacity="0.5" />
    <line x1="24" y1="14" x2="28" y2="14" strokeWidth="2" opacity="0.5" />
    <line x1="24" y1="18" x2="28" y2="18" strokeWidth="2" opacity="0.5" />
  </svg>
);

export const InfinityShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20,20 C12,6 4,6 4,20 C4,34 12,34 20,20 C28,6 36,6 36,20 C36,34 28,34 20,20 Z" />
  </svg>
);

export const IntegralShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22,8 C16,4 16,14 16,20 L16,20 C16,26 16,36 10,32" />
    <path d="M12,20 L20,20" opacity="0.5" />
  </svg>
);

export const DNAShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12,8 C18,16 22,24 28,32 M28,8 C22,16 18,24 12,32" />
    <line x1="16" y1="14" x2="24" y2="14" opacity="0.5" />
    <line x1="19" y1="20" x2="21" y2="20" opacity="0.5" />
    <line x1="16" y1="26" x2="24" y2="26" opacity="0.5" />
  </svg>
);

export const GlobeShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="20" cy="20" r="14" />
    <ellipse cx="20" cy="20" rx="6" ry="14" opacity="0.7" />
    <line x1="6" y1="20" x2="34" y2="20" opacity="0.7" />
  </svg>
);

export const LightbulbShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14,24 C10,20 10,14 14,10 C18,6 22,6 26,10 C30,14 30,20 26,24 L24,30 L16,30 Z" />
    <line x1="16" y1="34" x2="24" y2="34" />
    <line x1="18" y1="38" x2="22" y2="38" />
  </svg>
);

export const CircleShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="20" cy="20" r="16" />
  </svg>
);

export const TriangleShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="20,6 34,32 6,32" />
  </svg>
);

export const HexagonShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" />
  </svg>
);

export const ZigZagShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 80 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4,20 20,4 40,36 60,4 76,20" />
  </svg>
);

export const PlusGridShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round">
    <path d="M 12 6 L 12 18 M 6 12 L 18 12" />
    <path d="M 28 6 L 28 18 M 22 12 L 34 12" />
    <path d="M 12 22 L 12 34 M 6 28 L 18 28" />
    <path d="M 28 22 L 28 34 M 22 28 L 34 28" />
  </svg>
);

export const DashedRingShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="8" strokeDasharray="15 15">
    <circle cx="50" cy="50" r="40" />
  </svg>
);

export const DotGridShape = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill={color}>
    <circle cx="4" cy="4" r="2" />
    <circle cx="14" cy="4" r="2" />
    <circle cx="24" cy="4" r="2" />
    <circle cx="34" cy="4" r="2" />
    <circle cx="4" cy="14" r="2" />
    <circle cx="14" cy="14" r="2" />
    <circle cx="24" cy="14" r="2" />
    <circle cx="34" cy="14" r="2" />
    <circle cx="4" cy="24" r="2" />
    <circle cx="14" cy="24" r="2" />
    <circle cx="24" cy="24" r="2" />
    <circle cx="34" cy="24" r="2" />
    <circle cx="4" cy="34" r="2" />
    <circle cx="14" cy="34" r="2" />
    <circle cx="24" cy="34" r="2" />
    <circle cx="34" cy="34" r="2" />
  </svg>
);
