// Simple admin authentication (upgrade to proper auth later)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'cbchub2024' // Change this in production!
};

export const authenticateAdmin = (username, password) => {
  return username === ADMIN_CREDENTIALS.username && 
         password === ADMIN_CREDENTIALS.password;
};

export const isAuthenticated = (req) => {
  // Check session/cookie here
  return true; // Simplified for now
};
