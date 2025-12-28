import { Settings, Leaf } from "lucide-react";

const Header = () => {
  return (
    <header className="relative pt-6 pb-8 px-4">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-8">
        <span className="premium-badge">
          প্রিমিয়াম
        </span>
        <button className="w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center">
          <Settings className="w-5 h-5 text-foreground/80" />
        </button>
      </div>

      {/* Logo section */}
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <div className="relative">
            <Leaf className="w-12 h-12 text-accent transform -rotate-12" />
            <Leaf className="w-12 h-12 text-primary absolute top-0 left-4 transform rotate-12" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-foreground text-shadow mb-2" style={{ fontFamily: '"Hind Siliguri", sans-serif' }}>
          বৃক্ষবেদ্য
        </h1>
        <p className="text-foreground/90 text-lg text-shadow">
          আপনার উদ্ভিদের সর্বোত্তনীক চিকিৎসক !
        </p>
      </div>
    </header>
  );
};

export default Header;
