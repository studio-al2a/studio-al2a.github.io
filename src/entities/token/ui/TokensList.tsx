import { useEffect, useRef } from 'react';

import ding from '@assets/ding.wav';
import {
  useGetNewTokensQuery,
  useGetTokensQuery,
} from '@entities/token/api/tokensApi';

import TokenItem from './TokenItem';
import TokenItemSkeleton from './TokenItemSkeleton';

const SKELETON_COUNT = 3;

const TokensList = () => {
  const {
    data: tokens = [],
    isLoading,
    error,
    refetch,
  } = useGetTokensQuery(
    { limit: 50 },
    { pollingInterval: 60000, refetchOnMountOrArgChange: true }
  );

  const audioRef = useRef<HTMLAudioElement>(null);
  const lastTokenIdRef = useRef<number | null>(null);

  const { data: newTokens } = useGetNewTokensQuery(
    {
      since: tokens[0]
        ? new Date(tokens[0].created_at).toISOString()
        : new Date().toISOString(),
    },
    { pollingInterval: 10000, refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    if (!newTokens) return;
    const newItems = newTokens.filter(
      t => lastTokenIdRef.current === null || t.id > lastTokenIdRef.current
    );
    if (newItems.length > 0 && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    if (newTokens.length > 0) {
      lastTokenIdRef.current = newTokens[0].id;
    }
  }, [newTokens]);

  if (isLoading) {
    return (
      <div className='bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700'>
        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
          <TokenItemSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-center py-8'>
        <div className='text-red-500 dark:text-red-400 text-lg mb-2'>
          Failed to load tokens
        </div>
        <div className='text-gray-600 dark:text-gray-400 mb-4'>
          Try refreshing the page
        </div>
        <button
          onClick={() => refetch()}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Refresh
        </button>
      </div>
    );
  }

  if (tokens.length === 0) {
    return (
      <div className='text-center py-8'>
        <div className='text-gray-500 dark:text-gray-400 text-lg'>
          No tokens found
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700'>
      <audio ref={audioRef} src={ding} preload='auto' />
      {tokens.map(token => (
        <TokenItem key={token.id} token={token} />
      ))}
    </div>
  );
};

export default TokensList;
