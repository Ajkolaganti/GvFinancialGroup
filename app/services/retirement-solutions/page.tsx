import { ServicePage } from "@/components/service-page";

export default function RetirementSolutionsPage() {
  return (
    <ServicePage
      title="Retirement Solutions"
      description="Comprehensive retirement planning to secure your financial future."
      image="https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&q=80"
      content={[
        "Our retirement planning solutions are designed to help you build a secure and comfortable retirement. We work with you to understand your retirement goals, lifestyle expectations, and current financial situation to create a comprehensive retirement strategy.",
        "From 401(k) management to IRA planning and pension optimization, we provide expert guidance on all aspects of retirement planning. Our solutions include both traditional and Roth retirement accounts, ensuring you have the most tax-efficient strategy for your needs.",
        "We help you navigate complex decisions about Social Security benefits, healthcare planning, and creating sustainable retirement income streams that will last throughout your retirement years."
      ]}
      benefits={[
        "Customized retirement planning strategies",
        "Social Security optimization",
        "Healthcare cost planning",
        "Tax-efficient withdrawal strategies",
        "Regular retirement plan reviews and updates"
      ]}
    />
  );
}