/**
 * Harness Feature Flag Utility (Mock/Abstraction)
 * 
 * 이 파일은 Harness Feature Flag SDK를 추상화합니다.
 * 실제 환경에서는 @harnessio/ff-react-client-sdk 등을 사용하여 구현을 대체합니다.
 */

export type FeatureFlagName = 
  | 'new-landing-page'
  | 'beta-features'
  | 'harness-workflow-v2';

/**
 * 서버 사이드에서 플래그 값을 가져오는 헬퍼 (Mock)
 */
export async function getFeatureFlag(flag: FeatureFlagName): Promise<boolean> {
  // 실제 구현에서는 Harness 서버 사이드 SDK를 호출합니다.
  // 로컬 개발 시에는 환경 변수나 기본값을 반환하도록 설정할 수 있습니다.
  const flags: Record<FeatureFlagName, boolean> = {
    'new-landing-page': true,
    'beta-features': false,
    'harness-workflow-v2': false,
  };

  return flags[flag] ?? false;
}

/**
 * 클라이언트 사이드에서 사용할 수 있는 기본 플래그 훅의 인터페이스 정의
 */
export function useFeatureFlag(flag: FeatureFlagName): boolean {
  // 클라이언트 사이드 SDK 연동 시 이곳에 로직을 구현합니다.
  // 현재는 단순 데모를 위해 true를 반환합니다.
  return true;
}
