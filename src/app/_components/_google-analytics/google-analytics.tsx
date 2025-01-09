"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import React, { useEffect, Suspense } from "react";
import { IS_GATAG, GA_TAG_ID, pageview } from "@/lib/gtag";

const GoogleAnalytics: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!IS_GATAG) {
      return;
    }
    const url = pathname + searchParams.toString();
    pageview(url);
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TAG_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

const GoogleAnalyticsWithSuspense: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GoogleAnalytics />
    </Suspense>
  );
};

export default GoogleAnalyticsWithSuspense;
