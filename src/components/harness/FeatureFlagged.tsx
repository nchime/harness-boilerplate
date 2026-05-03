import React from 'react';
import { getFeatureFlag, FeatureFlagName } from '@/lib/harness/ff';

interface FeatureFlaggedProps {
  flag: FeatureFlagName;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Harness Feature Flag 상태에 따라 자식 컴포넌트를 렌더링하는 서버 컴포넌트입니다.
 */
export async function FeatureFlagged({ 
  flag, 
  children, 
  fallback = null 
}: FeatureFlaggedProps) {
  const isEnabled = await getFeatureFlag(flag);

  if (isEnabled) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}
