export default function DashboardLayout({
  children,
  notifications,
  users,
  revenue,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-center w-full p-3 mb-3">{children}</div>
      <div className="flex justify-center ">
        <div className="flex flex-col">
          <div>{notifications}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex ">{users}</div>
      </div>
    </>
  );
}
