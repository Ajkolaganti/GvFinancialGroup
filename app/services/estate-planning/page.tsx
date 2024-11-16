import { ServicePage } from "@/components/service-page";

export default function EstatePlanningPage() {
  return (
    <ServicePage
      title="Estate Planning"
      description="Comprehensive estate planning solutions to protect and preserve your legacy."
      image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
      content={[
        "Our estate planning services help you create a comprehensive plan to protect and transfer your assets according to your wishes. We work with you to develop strategies that minimize estate taxes and ensure your legacy is preserved for future generations.",
        "From basic will preparation to complex trust structures, we provide guidance on all aspects of estate planning. We help you navigate important decisions about asset distribution, guardianship, and healthcare directives.",
        "Our team works closely with attorneys and tax professionals to ensure your estate plan is legally sound and tax-efficient, providing regular reviews and updates as your circumstances change."
      ]}
      benefits={[
        "Comprehensive estate plan development",
        "Tax-efficient wealth transfer strategies",
        "Trust planning and administration",
        "Regular estate plan reviews",
        "Coordination with legal professionals"
      ]}
    />
  );
}