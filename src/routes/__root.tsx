import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-portfolio-dark px-4 text-portfolio-text">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-portfolio-accent">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-portfolio-text">Page not found</h2>
        <p className="mt-2 text-sm text-portfolio-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-portfolio-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-on-accent transition-colors hover:opacity-90"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-portfolio-dark px-4 text-portfolio-text">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-portfolio-text">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-portfolio-muted">
          An error occurred while loading this page.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-portfolio-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-on-accent transition-colors hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-portfolio-line bg-portfolio-surface px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-portfolio-text transition-colors hover:bg-portfolio-line"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Madala Yashwanth Kumar — Computer Science Engineering Student" },
      {
        name: "description",
        content:
          "Portfolio of Madala Yashwanth Kumar, Computer Science Engineering student at Lovely Professional University building web applications, data dashboards, and interactive digital experiences.",
      },
      { name: "author", content: "Madala Yashwanth Kumar" },
      { property: "og:title", content: "Madala Yashwanth Kumar — Computer Science Engineering Student" },
      {
        property: "og:description",
        content:
          "Computer Science Engineering student at Lovely Professional University building web applications, data dashboards, and interactive digital experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
