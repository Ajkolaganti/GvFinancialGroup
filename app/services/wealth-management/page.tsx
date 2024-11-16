import { ServicePage } from "@/components/service-page";

export default function WealthManagementPage() {
  return (
    <ServicePage
      title="Wealth Management"
      description="Comprehensive wealth management strategies for long-term financial success."
      image="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80"
      content={[
        "Our wealth management service takes a holistic approach to managing and growing your wealth. We combine investment management, financial planning, tax strategies, and estate planning to create a comprehensive wealth management strategy.",
        "Our team of experienced professionals works closely with you to understand your financial goals, risk tolerance, and time horizon. We develop personalized strategies that aim to preserve and grow your wealth while managing risk effectively.",
        "We provide ongoing monitoring and regular reviews of your wealth management strategy, making adjustments as needed to ensure it continues to align with your goals and changing market conditions."
      ]}
      benefits={[
        "Comprehensive wealth management strategy",
        "Tax-efficient investment solutions",
        "Estate planning integration",
        "Regular portfolio reviews and rebalancing",
        "Access to exclusive investment opportunities"
      ]}
    />
  );
}