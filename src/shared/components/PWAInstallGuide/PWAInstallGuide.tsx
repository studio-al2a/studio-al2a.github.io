import { useEffect, useState } from 'react';

import { INSTALL_INSTRUCTIONS, detectPlatform } from '@shared/constants/pwa';
import type { Platform } from '@shared/constants/pwa';
import type { InstallStep } from '@shared/constants/pwa';

interface Props {
  onClose: () => void;
}

const PWAInstallGuide = ({ onClose }: Props) => {
  const [platform, setPlatform] = useState<Platform>('desktop');

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md'>
        <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
          How to Install the App
        </h2>
        <ol className='list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300'>
          {INSTALL_INSTRUCTIONS[platform].map((step: InstallStep, idx) => {
            const Icon = step.icon;
            return (
              <li key={idx} className='flex items-center gap-2'>
                {Icon && (
                  <Icon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
                )}
                <span>{step.text}</span>
              </li>
            );
          })}
        </ol>
        <button
          onClick={onClose}
          className='mt-6 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default PWAInstallGuide;
