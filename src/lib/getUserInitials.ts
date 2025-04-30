type User = {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

const getUserInitials = (user: User|null): string => {
  const initials = [];

  if (user?.firstName) {
    const firstChar = user.firstName.charAt(0);
    initials.push(firstChar.toUpperCase());
  }

  if (user?.lastName) {
    const firstChar = user.lastName.charAt(0);
    initials.push(firstChar.toUpperCase());
  }

  if (initials.length === 0 && user?.email) {
    const firstChar = user.email.charAt(0);
    initials.push(firstChar.toUpperCase());
  }

  return initials.join("");
};

export { getUserInitials };
