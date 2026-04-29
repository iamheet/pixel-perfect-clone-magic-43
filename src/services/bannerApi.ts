export type Banner = {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
};

export async function fetchActiveBanner(): Promise<Banner> {
  const res = await fetch("/api/banner/active");
  if (!res.ok) throw new Error("Failed to load banner");
  const json = (await res.json()) as { success: boolean; data: Banner };
  return json.data;
}
