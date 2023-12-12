import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "Ecommerce Admin",
  description: "Ecommerce admin dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
