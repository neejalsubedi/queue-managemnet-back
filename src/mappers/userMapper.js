export const mapUserToResponse = (user) => ({
    id: user.id,
    fullName: user.fullname,
    email: user.email,
    roleId: user.role_id,
    isActive: user.is_active,
    createdAt: user.created_at,
});
