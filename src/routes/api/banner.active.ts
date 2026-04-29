import { createFileRoute } from "@tanstack/react-router";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const Route = createFileRoute("/api/banner/active")({
  server: {
    handlers: {
      OPTIONS: async () =>
        new Response(null, { status: 204, headers: corsHeaders }),
      GET: async () => {
        const body = {
          success: true,
          data: {
            title: "What is Hair Treatments ?",
            subtitle:
              "Threading is an ancient art that originated in the Middle East and has made its way to the West and has fast become the preferred option for shaping eyebrows by countless celebrities.",
            imageUrl: "/images/banner.png",
            ctaText: "Learn More",
            ctaLink: "/about",
          },
        };
        return new Response(JSON.stringify(body), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        });
      },
    },
  },
});
