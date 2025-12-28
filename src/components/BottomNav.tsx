import { Home, Star, HelpCircle, Search, Users, User } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon, label, active }: NavItemProps) => (
  <button className={`nav-item ${active ? 'active' : ''}`}>
    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${active ? 'bg-primary/20' : ''}`}>
      {icon}
    </div>
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-secondary/95 backdrop-blur-lg border-t border-border/30 px-2 py-3 safe-area-pb">
      <div className="max-w-md mx-auto flex items-center justify-around">
        <NavItem icon={<Home className="w-5 h-5" />} label="হোম" active />
        <NavItem icon={<Star className="w-5 h-5" />} label="ফিচারস" />
        <NavItem icon={<HelpCircle className="w-5 h-5" />} label="গাইডলাইন" />
        <NavItem icon={<Search className="w-5 h-5" />} label="অনুসন্ধান" />
        <NavItem icon={<Users className="w-5 h-5" />} label="কমিউনিটি" />
        <NavItem icon={<User className="w-5 h-5" />} label="প্রোফাইল" />
      </div>
    </nav>
  );
};

export default BottomNav;
