import type { ComponentType, SVGProps } from 'react';
import { FaArrowUp, FaEllipsisV, FaDesktop } from 'react-icons/fa';

export type Platform = 'ios' | 'android' | 'desktop';

export interface InstallStep {
  text: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const detectPlatform = (): Platform => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(userAgent)) return 'ios';
  if (/android/.test(userAgent)) return 'android';
  return 'desktop';
};

export const INSTALL_INSTRUCTIONS: Record<Platform, InstallStep[]> = {
  ios: [
    { text: 'Open the site in Safari', icon: FaDesktop },
    {
      text: 'Tap the "Share" button (square with an arrow up)',
      icon: FaArrowUp,
    },
    { text: 'Select "Add to Home Screen"', icon: FaDesktop },
    { text: 'Confirm installation', icon: FaDesktop },
  ],
  android: [
    { text: 'Open the site in Chrome', icon: FaDesktop },
    { text: 'Tap the ⋮ menu in the top-right corner', icon: FaEllipsisV },
    { text: 'Select "Add to Home Screen"', icon: FaDesktop },
    { text: 'Confirm installation', icon: FaDesktop },
  ],
  desktop: [
    { text: 'Open the site in Chrome or Edge', icon: FaDesktop },
    {
      text: 'Click the install icon in the address bar (monitor with arrow)',
      icon: FaDesktop,
    },
    { text: 'Confirm installation', icon: FaDesktop },
  ],
};
