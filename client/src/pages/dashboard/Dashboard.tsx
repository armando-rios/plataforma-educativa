import { useAuth } from '../../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

      <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Bienvenido, {user?.name}
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Resumen de tu actividad en la plataforma.
          </p>
        </div>

        <div className="border-t border-gray-200">
          <div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <span className="font-medium text-gray-500">
                  No hay sesiones programadas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
