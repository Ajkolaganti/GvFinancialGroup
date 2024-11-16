import { ServicePage } from "@/components/service-page";

export default function TaxPlanningPage() {
  return (
    <ServicePage
      title="Tax Planning"
      description="Strategic tax planning solutions to optimize your financial position."
      image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
      content={[
        "Our tax planning services help you navigate the complex world of taxation to minimize your tax liability while ensuring compliance with all applicable laws and regulations. We take a proactive approach to tax planning, identifying opportunities for tax savings throughout the year.",
        "Our comprehensive tax planning strategies consider your entire financial picture, including investments, retirement accounts, business interests, and estate planning goals. We work to optimize your tax position across all aspects of your financial life.",
        "We stay current with changing tax laws and regulations to ensure your tax strategy remains effective and compliant, providing updates and adjustments as needed to maximize your tax advantages."
      ]}
      benefits={[
        "Comprehensive tax strategy development",
        "Tax-efficient investment planning",
        "Retirement tax planning",
        "Estate tax minimization strategies",
        "Regular tax strategy reviews and updates"
      ]}
    />
  );
}