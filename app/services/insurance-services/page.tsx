import { ServicePage } from "@/components/service-page";

export default function InsuranceServicesPage() {
  return (
    <ServicePage
      title="Insurance Services"
      description="Comprehensive insurance solutions to protect what matters most."
      image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
      content={[
        "Our insurance services provide comprehensive protection for you, your family, and your assets. We offer a wide range of insurance solutions, including life insurance, disability insurance, long-term care insurance, and more.",
        "Our experienced advisors work with you to assess your insurance needs and identify potential risks, ensuring you have the right coverage at the right price. We regularly review your policies to ensure they continue to meet your changing needs.",
        "We partner with top-rated insurance providers to offer you the best coverage options and help you navigate the complex world of insurance products and policies."
      ]}
      benefits={[
        "Comprehensive insurance needs analysis",
        "Access to multiple insurance carriers",
        "Regular policy reviews and updates",
        "Claims assistance and support",
        "Cost-effective coverage solutions"
      ]}
    />
  );
}