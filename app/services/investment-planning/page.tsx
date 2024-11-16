import { ServicePage } from "@/components/service-page";

export default function InvestmentPlanningPage() {
  return (
    <ServicePage
      title="Investment Planning"
      description="Strategic investment solutions tailored to your financial goals and risk tolerance."
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
      content={[
        "Our investment planning service takes a comprehensive approach to building and managing your investment portfolio. We begin with a thorough assessment of your financial situation, goals, and risk tolerance to create a personalized investment strategy.",
        "Using advanced portfolio management techniques and diverse investment vehicles, we help you build a robust investment portfolio that aligns with your long-term objectives while managing risk effectively.",
        "Our team of experienced financial advisors continuously monitors market conditions and adjusts your investment strategy as needed, ensuring your portfolio remains optimized for your evolving financial goals."
      ]}
      benefits={[
        "Personalized investment strategies tailored to your goals",
        "Regular portfolio monitoring and rebalancing",
        "Access to diverse investment opportunities",
        "Risk management and optimization",
        "Regular performance reviews and updates"
      ]}
    />
  );
}