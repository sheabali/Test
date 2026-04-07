import { PDFDocumentViewer } from "@/components/brochure/pdf-document-viewer";

interface BrochurePageProps {
    params: {
        id: string;
    };
}

export default function BrochurePage({ params }: BrochurePageProps) {
    // You can fetch the PDF URL based on the ID
    // const pdfUrl = await fetchBrochureUrlById(params.id);

    const pdfUrl = "/pdf/pdf.pdf";
    // const pdfUrl = "https://www.eks-intec.com/wp-content/uploads/2025/01/Sample-pdf.pdf";

    return (
        <PDFDocumentViewer
            pdfUrl={pdfUrl}
            title="Sample PDF Document"
        />
    );
}
