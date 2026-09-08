"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function ImageCarousel({
    images,
    alt,
    className = "",
    imageClassName = "",
}: {
    images: string[];
    alt: string;
    className?: string;
    imageClassName?: string;
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const shouldReduceMotion = useReducedMotion();
    const hasMultipleImages = images.length > 1;
    const activeImage = images[activeIndex];

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
            if (hasMultipleImages && event.key === "ArrowRight") {
                setActiveIndex((index) => (index + 1) % images.length);
            }
            if (hasMultipleImages && event.key === "ArrowLeft") {
                setActiveIndex((index) => (index - 1 + images.length) % images.length);
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [hasMultipleImages, images.length, isOpen]);

    if (!activeImage) return null;

    const showPrevious = () => {
        setActiveIndex((index) => (index - 1 + images.length) % images.length);
    };

    const showNext = () => {
        setActiveIndex((index) => (index + 1) % images.length);
    };

    return (
        <>
            <button
                type="button"
                className={`group/image relative block w-full cursor-zoom-in text-left ${className}`}
                onClick={() => setIsOpen(true)}
                aria-label={`Open ${alt}`}
            >
                <span className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover/image:opacity-100">
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={activeImage}
                    alt={alt}
                    className={imageClassName}
                    onError={(event) => event.currentTarget.remove()}
                />
                {hasMultipleImages ? (
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">
                        {images.length} images
                    </span>
                ) : null}
            </button>

            {isOpen && typeof document !== "undefined"
                ? createPortal(
                    <AnimatePresence>
                        {isOpen ? (
                            <motion.div
                                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                                role="dialog"
                                aria-modal="true"
                                aria-label={`${alt} image viewer`}
                                onClick={() => setIsOpen(false)}
                            >
                                <motion.div
                                    className="relative flex max-h-full max-w-full items-center justify-center"
                                    initial={shouldReduceMotion ? undefined : { scale: 0.92, y: 12 }}
                                    animate={shouldReduceMotion ? undefined : { scale: 1, y: 0 }}
                                    exit={shouldReduceMotion ? undefined : { scale: 0.96, y: 8 }}
                                    transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    onClick={(event) => event.stopPropagation()}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.img
                                            key={activeImage}
                                            src={activeImage}
                                            alt={alt}
                                            className="max-h-[88vh] max-w-[92vw] rounded-sm object-contain shadow-2xl sm:max-w-[86vw]"
                                            initial={shouldReduceMotion ? undefined : { opacity: 0, x: 16 }}
                                            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                                            exit={shouldReduceMotion ? undefined : { opacity: 0, x: -16 }}
                                            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                                        />
                                    </AnimatePresence>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="absolute -right-2 -top-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition-colors hover:bg-white hover:text-black sm:-right-5 sm:-top-5"
                                        aria-label="Close image viewer"
                                    >
                                        <X className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                    {hasMultipleImages ? (
                                        <>
                                            <button
                                                type="button"
                                                onClick={showPrevious}
                                                className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white transition-colors hover:bg-white hover:text-black sm:-left-16"
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={showNext}
                                                className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white transition-colors hover:bg-white hover:text-black sm:-right-16"
                                                aria-label="Next image"
                                            >
                                                <ChevronRight className="h-5 w-5" aria-hidden="true" />
                                            </button>
                                            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 font-mono text-xs text-white">
                                                {activeIndex + 1} / {images.length}
                                            </span>
                                        </>
                                    ) : null}
                                </motion.div>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>,
                    document.body
                )
                : null}
        </>
    );
}
