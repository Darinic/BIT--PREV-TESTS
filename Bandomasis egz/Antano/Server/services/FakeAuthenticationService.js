export default function authenticateUser(credentials) {
  return credentials.username === 'kazys@neraemailo.lt' && credentials.password === 'KazysKazys';
}

// middleware function
export function isAuthorized(req, res, next) {
  if (!req.session.authenticated) {
    res.redirect('http://localhost:3000/admin');
    return;
  }
  next();
}