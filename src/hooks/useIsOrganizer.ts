import { useAuth } from '@/contexts';

export const useIsOrganizer = () => {
  const { isOrganizer, loading } = useAuth();
  return { isOrganizer, loading };
};
