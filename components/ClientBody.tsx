"use client";

import Preloader from "@/components/Preloader";

export default function ClientBody({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Preloader>{children}</Preloader>;
}
