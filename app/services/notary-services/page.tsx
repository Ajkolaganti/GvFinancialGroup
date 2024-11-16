import { ServicePage } from "@/components/service-page";

export default function NotaryServicesPage() {
  return (
    <ServicePage
      title="Notary Services"
      description="Professional notary services for your important documents."
      image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
      content={[
        "Our professional notary services provide convenient and reliable document authentication for a wide range of personal and business needs. We ensure your important documents are properly notarized in compliance with all legal requirements.",
        "We offer flexible scheduling and can provide notary services at our office or your location for your convenience. Our experienced notaries are well-versed in handling various types of documents, including legal documents, financial papers, and real estate transactions.",
        "We maintain strict adherence to notary laws and regulations, ensuring your documents are properly authenticated and legally valid."
      ]}
      benefits={[
        "Convenient scheduling options",
        "Mobile notary services available",
        "Experience with various document types",
        "Professional and efficient service",
        "Strict compliance with notary laws"
      ]}
    />
  );
}