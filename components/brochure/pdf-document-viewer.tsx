"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface PDFDocumentViewerProps {
    pdfUrl: string;
    title?: string;
}

export function PDFDocumentViewer({ pdfUrl, title }: PDFDocumentViewerProps) {
    const [numPages, setNumPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageImages, setPageImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);

    useEffect(() => {
        let pdfDoc: any = null;

        const loadPDF = async () => {
            try {
                setLoading(true);
                setError(null);

                // Dynamically import pdfjs-dist
                const pdfjsLib = await import('pdfjs-dist');

                // Set worker
                pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

                // Check if URL is local or external
                const isLocalFile = pdfUrl.startsWith('/');
                const fetchUrl = isLocalFile ? pdfUrl : `/api/pdf-proxy?url=${encodeURIComponent(pdfUrl)}`;

                // Fetch PDF (directly for local files, through proxy for external URLs)
                const response = await fetch(fetchUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const blob = await response.blob();
                const arrayBuffer = await blob.arrayBuffer();

                // Load PDF from array buffer
                const loadingTask = pdfjsLib.getDocument({
                    data: arrayBuffer,
                    cMapUrl: `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/cmaps/`,
                    cMapPacked: true,
                });

                pdfDoc = await loadingTask.promise;
                const totalPages = pdfDoc.numPages;
                setNumPages(totalPages);

                // Render all pages
                const images: string[] = [];
                for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
                    const page = await pdfDoc.getPage(pageNum);
                    const viewport = page.getViewport({ scale: 1.5 });

                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    if (context) {
                        await page.render({
                            canvasContext: context,
                            viewport: viewport,
                        }).promise;

                        images.push(canvas.toDataURL());
                    }
                }

                setPageImages(images);
                setLoading(false);
            } catch (err: any) {
                console.error('Error loading PDF:', err);
                setError(err?.message || 'Failed to load PDF. Please check the URL.');
                setLoading(false);
            }
        };

        loadPDF();

        return () => {
            if (pdfDoc) {
                pdfDoc.destroy();
            }
        };
    }, [pdfUrl]);

    const goToNextPage = () => {
        if (currentPage < numPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    if (loading) {
        return (
            <div className="min-h-[85vh] bg-gray-50 py-8">
                <div className="container mx-auto px-4">
                    {/* Header Skeleton */}
                    <div className="mb-6 animate-pulse">
                        <div className="h-8 bg-gray-300 rounded w-64 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </div>

                    <div className="flex gap-4 flex-col lg:flex-row">
                        {/* Main Viewer Skeleton */}
                        <div className="flex-1">
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                <div className="flex justify-center items-center">
                                    <div className="w-full max-w-2xl aspect-[8.5/11] bg-gray-200 rounded animate-pulse flex flex-col items-center justify-center">
                                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300 border-t-blue-500 mb-4"></div>
                                        <p className="text-gray-600 font-medium">Loading PDF...</p>
                                        <p className="text-gray-500 text-sm mt-2">Please wait while we prepare your document</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <div className="h-4 bg-gray-200 rounded w-24 mx-auto animate-pulse"></div>
                            </div>
                        </div>

                        {/* Thumbnail Sidebar Skeleton */}
                        <div className="w-full lg:w-64">
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                <div className="h-5 bg-gray-300 rounded w-32 mb-4 animate-pulse"></div>
                                <div className="flex lg:flex-col gap-3 overflow-hidden">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="flex-shrink-0 w-32 lg:w-full h-40 lg:h-48 bg-gray-200 rounded-lg animate-pulse"
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center text-red-600">
                    <p className="font-semibold text-xl">Failed to load PDF</p>
                    <p className="text-sm mt-2">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-6">
                    {title && <h1 className="text-2xl font-bold text-gray-900">{title}</h1>}
                    <p className="text-sm text-gray-600 mt-1">
                        Page {currentPage}/{numPages}
                    </p>
                </div>

                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* Main Viewer */}
                    <div className="flex-1 relative">
                        <div className="bg-white rounded-lg shadow-lg p-4 relative">
                            {/* Navigation Arrows */}
                            <Button
                                onClick={goToPreviousPage}
                                disabled={currentPage === 1}
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full w-12 h-12 bg-white/90 hover:bg-white text-gray-800 shadow-lg disabled:opacity-50"
                                variant="outline"
                                size="icon"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </Button>

                            {/* PDF Page as Image */}
                            <div className="flex justify-center items-center max-h-[85vh]">
                                {pageImages[currentPage - 1] && (
                                    <img
                                        src={pageImages[currentPage - 1]}
                                        alt={`Page ${currentPage}`}
                                        className="max-w-full max-h-[85vh] rounded"
                                    />
                                )}
                            </div>

                            <Button
                                onClick={goToNextPage}
                                disabled={currentPage === numPages}
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full w-12 h-12 bg-white/90 hover:bg-white text-gray-800 shadow-lg disabled:opacity-50"
                                variant="outline"
                                size="icon"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </Button>
                        </div>

                        {/* Page Counter */}
                        <div className="text-center mt-4 text-sm text-gray-600">
                            Page {currentPage} of {numPages}
                        </div>
                    </div>

                    {/* Thumbnail Sidebar */}
                    {numPages > 0 && (
                        <div className="w-full lg:w-64">
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                <h2 className="text-sm font-semibold text-gray-700 mb-4">
                                    All Pages ({numPages})
                                </h2>
                                {/* Mobile: Horizontal scroll, Desktop: Vertical scroll */}
                                <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto lg:max-h-[800px] pb-2 lg:pb-0">
                                    {pageImages.map((pageImage, index) => (
                                        <button
                                            key={index + 1}
                                            onClick={() => goToPage(index + 1)}
                                            className={cn(
                                                "flex-shrink-0 w-32 lg:w-full border-2 rounded-lg overflow-hidden transition-all cursor-pointer hover:border-blue-400",
                                                currentPage === index + 1
                                                    ? "border-blue-500 ring-2 ring-blue-200"
                                                    : "border-gray-200"
                                            )}
                                        >
                                            <img
                                                src={pageImage}
                                                alt={`Page ${index + 1}`}
                                                className="w-full h-40 lg:h-auto object-cover"
                                            />
                                            <div className="bg-gray-100 px-2 py-1 text-xs text-center">
                                                Page {index + 1}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
