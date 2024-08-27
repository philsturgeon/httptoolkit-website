import type { Metadata } from 'next/types';
import { Suspense } from 'react';

import { MockResponseFeatures } from '@/components/common-sections/mock-response-features';
import { RewriteAnything } from '@/components/common-sections/rewrite-anything';
import { Testimonials } from '@/components/common-sections/testimonials';
import { JavaLogo } from '@/components/elements/icon';
import { IntegrationHttpTookitFeatures } from '@/components/sections/integration/http-toolkit-features';
import { IntegrationCompatibility } from '@/components/sections/integration/single-page/compatibility';
import { IntegrationSinglePageHero } from '@/components/sections/integration/single-page/hero';
import { IntegrationTextAppVideo } from '@/components/sections/integration/single-page/text-appvideo';
import { buildMetadata } from '@/lib/utils/build-metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Capture, debug and mock all Java HTTP traffic',
  description:
    'HTTP Toolkit includes built-in automatic setup and advanced support for Java, so you can debug and modify any HTTP(S) traffic in seconds.',
});

export default function JavaIntegrationPage() {
  return (
    <>
      <IntegrationSinglePageHero
        title="Intercept, view & edit Java HTTP traffic"
        text="HTTP Toolkit includes built-in automatic setup and advanced support for Java, so you can debug and modify any HTTP(S) traffic in seconds."
        icon={JavaLogo}
        breadcrumbText="java"
      />
      <IntegrationTextAppVideo
        title="HTTP Toolkit is an open-source tool for debugging, testing and building with HTTP on Windows, Linux & Mac."
        subtitle="what is http toolkit?"
        video={{ id: 'javascript' }}
      />
      <IntegrationCompatibility
        title="Supported by Java"
        subtitle="compatibility"
        tools={[
          "Java's HttpURLConnection",
          "Java 11's HttpClient",
          'Apache HttpClient',
          'Apache HttpAsyncClient',
          'OkHttp',
          'Retrofit',
          'Ktor-Client',
          'AsyncHttpClient',
          'Reactor-Netty',
          'Spring WebClient',
          'Akka-HTTP',
        ]}
      />
      <Suspense>
        <Testimonials />
      </Suspense>
      <IntegrationHttpTookitFeatures />
      <MockResponseFeatures />
      <RewriteAnything />
    </>
  );
}
