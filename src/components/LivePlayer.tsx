import { SITE } from "@/config/site";

// The church's YouTube live stream, embedded directly. YouTube's
// `live_stream?channel=` endpoint always resolves to whatever that channel is
// currently streaming, so this needs no updating week to week.
export default function LivePlayer() {
  if (!SITE.youtubeChannelId) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10 aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/live_stream?channel=${SITE.youtubeChannelId}`}
        title={`${SITE.name} live stream`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
