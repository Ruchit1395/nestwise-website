import React, { useEffect } from 'react';

const AdminRedirect: React.FC = () => {
  useEffect(() => {
    // Redirect to the static admin HTML file
    window.location.href = '/admin/index.html';
  }, []);

  return (
    <div className="pt-16 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Redirecting to Admin...</h2>
        <p className="text-gray-600">Please wait while we redirect you to the admin interface.</p>
      </div>
    </div>
  );
};

export default AdminRedirect;
