import SideNav from '@/app/components/bugtracker/SideNav';

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row">
      <div className="w-2/12 flex-none">
        <SideNav />
      </div>
      <div className="flex-grow overflow-y-auto p-12 bg-slate-100">{children}</div>
    </div>
  );
}