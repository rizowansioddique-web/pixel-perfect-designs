import { Camera, Sprout, Shield, Bot, Sun, Droplets } from "lucide-react";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import BottomNav from "@/components/BottomNav";
import leafBackground from "@/assets/leaf-background.jpg";

const features = [
  {
    icon: Camera,
    title: "তাৎক্ষণিক শনাক্তকরণ",
    description: "ছবি তুলুন এবং সেকেন্ডের মধ্যে উদ্ভিদ সম্পর্কে বিস্তারিত তথ্য পান। আমাদের AI ৪০,০০০+ প্রজাতি চিনতে পারে।",
  },
  {
    icon: Sprout,
    title: "যত্নের পরামর্শ",
    description: "প্রতিটি উদ্ভিদের জন্য ব্যক্তিগতকৃত যত্নের টিপস পান জল দেওয়ার সময়সূচি থেকে আলোর পরিস্থিতি পর্যন্ত।",
  },
  {
    icon: Shield,
    title: "রোগ নির্ণয়",
    description: "আপনার গাছের রোগ শনাক্ত করুন এবং সঠিক প্রতিকার খুঁজে নিন। বিশেষজ্ঞ পরামর্শ পান।",
  },
  {
    icon: Bot,
    title: "AI সহকারী",
    description: "২৪/৭ AI চালিত উদ্ভিদ বিশেষজ্ঞের সাথে কথা বলুন। যেকোনো প্রশ্নের উত্তর পান।",
  },
  {
    icon: Sun,
    title: "আলোর প্রয়োজনীয়তা",
    description: "প্রতিটি উদ্ভিদের জন্য আদর্শ আলোর পরিস্থিতি জানুন। সূর্যালোক বা ছায়া - কোনটা দরকার।",
  },
  {
    icon: Droplets,
    title: "জল দেওয়ার স্মারক",
    description: "স্বয়ংক্রিয় স্মারক সেট করুন যাতে আপনার গাছপালা কখনো পানির অভাবে না ভোগে।",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${leafBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-secondary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md mx-auto pb-28">
        <Header />

        {/* Features Grid */}
        <section className="px-4">
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;
