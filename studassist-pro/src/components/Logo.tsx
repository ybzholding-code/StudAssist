import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  /**
   * `full` / default       → navy brand logo on light backgrounds
   * `light` / `reversed`
   * `monochrome` / `header`→ white brand logo on dark backgrounds
   * `icon`                 → compact brand logo (smaller height, same SVG)
   * `watermark`            → huge dimmed brand logo for background accents
   */
  variant?: 'full' | 'icon' | 'light' | 'monochrome' | 'reversed' | 'watermark' | 'header';
  className?: string;
  /** Legacy prop — treated as height in px. */
  iconSize?: number;
  /** Height in px. Overrides iconSize. */
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className,
  iconSize,
  height,
}) => {
  const isLight =
    variant === 'light' ||
    variant === 'reversed' ||
    variant === 'monochrome' ||
    variant === 'header';
  const src = isLight ? '/logo-white.svg' : '/logo-blue.svg';

  /* Watermark — large, heavily dimmed brand logo */
  if (variant === 'watermark') {
    return (
      <img
        src="/logo-blue.svg"
        alt=""
        aria-hidden
        draggable={false}
        className={cn('opacity-[0.04] select-none pointer-events-none w-full h-auto', className)}
      />
    );
  }

  /* Default resolution: icon=32, otherwise 40 */
  const resolvedHeight = height ?? iconSize ?? (variant === 'icon' ? 32 : undefined);

  return (
    <img
      src={src}
      alt="STUDASSIST"
      className={cn(
        'select-none block w-auto',
        !resolvedHeight && 'h-9 lg:h-11',
        className
      )}
      style={resolvedHeight ? { height: resolvedHeight, width: 'auto' } : undefined}
      draggable={false}
    />
  );
};

export default Logo;
