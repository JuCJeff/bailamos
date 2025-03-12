export const getFirebaseErrorMessage = (errorCode: string) => {
  switch (errorCode) {
    // For sign up
    case "auth/email-already-in-use":
      return "This email is already in use. Please try another one";
    case "auth/weak-password":
      return "Password should be at least 6 characters";

    // For sign in
    case "auth/user-not-found":
      return "No user found with this email address. Please sign up for an account";
    case "auth/invalid-credential":
      return "Invalid credentials. Please try again";
    case "auth/wrong-password":
      return "Incorrect password. Please try again";
    case "auth/too-many-requests":
      return "Too many login attempts. Please try again later";
    default:
      return "An error occurred. Please try again";
  }
};
