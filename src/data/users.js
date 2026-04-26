const users = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    name: { firstname: 'Carlos', lastname: 'García' },
    email: 'admin@tienda.com',
    role: 'admin',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
  },
  {
    id: 2,
    username: 'johnd',
    password: 'johnd123',
    name: { firstname: 'John', lastname: 'Doe' },
    email: 'john@tienda.com',
    role: 'customer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  },
  {
    id: 3,
    username: 'marias',
    password: 'marias123',
    name: { firstname: 'María', lastname: 'Sánchez' },
    email: 'maria@tienda.com',
    role: 'customer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
  },
]

export default users
