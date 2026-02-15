export const roleHierarchy = {
  Admin: 3,
  Editor: 2,
  Viewer: 1
};

export const hasPermission = (userRole, requiredRole) => {
  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
};
