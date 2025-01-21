import BugTrackerLogo from '@/app/components/bugtracker/BugTrackerLogo';
import NavLinks from '@/app/components/bugtracker/NavLinks';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-0 py-4">

      <BugTrackerLogo/>
      <div className="flex grow flex-col pt-2 space-x-0">
        <NavLinks />
      </div>

    </div>
  );
}
