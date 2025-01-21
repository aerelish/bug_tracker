import { font_ubuntu, font_montserrat } from '@/app/fonts';

export default function BugTrackerLogo() {
  return (
    <div
      className={`${font_ubuntu.className} flex flex-col items-begin leading-none text-white mx-6 px-2 py-8 border-b border-gray-600`}
    >
      <h1 className="text-[40px] pb-2">bugTracker</h1>
      <p className={`${font_montserrat.className} text-[14px]`}>by: AERELISH</p>
  
    </div>
  );
}
