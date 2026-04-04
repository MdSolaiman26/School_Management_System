import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col hidden md:flex">
        <div className="p-6">
          <h2 className="text-2xl font-bold tracking-wider text-accent">SMS</h2>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link to="/dashboard" className="block px-4 py-2 rounded text-gray-300 hover:bg-slate-800 hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link to="/dashboard/students" className="block px-4 py-2 rounded text-gray-300 hover:bg-slate-800 hover:text-white transition-colors">
            Students
          </Link>
          <Link to="/dashboard/teachers" className="block px-4 py-2 rounded text-gray-300 hover:bg-slate-800 hover:text-white transition-colors">
            Teachers
          </Link>
          <Link to="/dashboard/classes" className="block px-4 py-2 rounded text-gray-300 hover:bg-slate-800 hover:text-white transition-colors">
            Classes
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <Link to="/login" className="block w-full text-center px-4 py-2 rounded bg-red-500 hover:bg-red-600 transition-colors">
            Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          <h2 className="font-semibold text-gray-800 md:hidden">SMS</h2>
          <div className="flex-1"></div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
              A
            </div>
            <span className="text-sm font-medium hidden sm:block">Admin User</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
