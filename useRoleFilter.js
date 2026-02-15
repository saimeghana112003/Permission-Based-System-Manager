export const useRoleFilter = (resources, role) => {
    const roleHierarchy = {
      Admin: 3,
      Editor: 2,
      Viewer: 1
    };
  
    return resources.filter(
      (r) => roleHierarchy[role] >= roleHierarchy[r.minRole]
    );
  };
  