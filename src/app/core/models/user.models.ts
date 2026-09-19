export type UserRole = 'ADMIN' | 'USER' | 'SUPERVISOR';

// Usuario público que devuelve el backend.
// No contiene passwordHash porque ese dato no debe llegar al frontend.
export type User = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  isActive: boolean;
  phone: string;
  birthDate: string;
  preferredBarber?: string;
  createdAt: string;
  updatedAt: string;
};

// Datos para crear usuarios desde Angular.
export type CreateUserRequest = {
  email: string;
  name: string;
  password: string;
  role?: UserRole;
  phone: string;
  birthDate: string;
  preferredBarber?: string;
};

// Datos para actualizar usuarios.
// Partial lo manejaremos desde el formulario: no siempre se envían todos los campos.
export type UpdateUserRequest = {
  email?: string;
  name?: string;
  password?: string;
  role?: UserRole;
  isActive?: boolean;
  phone?: string;
  birthDate?: string;
  preferredBarber?: string;
};