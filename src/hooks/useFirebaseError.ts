import { FirebaseError } from 'firebase/app';
import { toast } from 'sonner';

export const useFirebaseError = () => {
  const handleFirebaseError = (error: unknown) => {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          toast.error('Invalid email or password');
          break;
        case 'auth/email-already-in-use':
          toast.error('Email is already in use');
          break;
        case 'auth/weak-password':
          toast.error('Password is too weak');
          break;
        case 'auth/invalid-email':
          toast.error('Invalid email address');
          break;
        case 'auth/network-request-failed':
          toast.error('Network error. Please check your connection');
          break;
        case 'permission-denied':
          toast.error('You do not have permission to perform this action');
          break;
        default:
          toast.error('An error occurred. Please try again');
          console.error('Firebase error:', error);
      }
    } else {
      toast.error('An unexpected error occurred');
      console.error('Unexpected error:', error);
    }
  };

  return { handleFirebaseError };
}; 