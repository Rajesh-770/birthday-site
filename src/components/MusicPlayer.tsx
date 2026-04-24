import { useState } from "react";
import { Disc3 } from "lucide-react";

const playlist = [
  {
    title: "Song 1",
    artist: "Your Choice",
    url: "https://www.youtube.com/watch?v=DYFeePxCQ0g"
  },
  {
    title: "Song 2",
    artist: "Your Choice",
    url: "https://www.youtube.com/watch?v=lPRhbg1ppHo"
  }
];

export const MusicPlayer = () => {
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <section className="relative py-24 sm:py-32 px-4 bg-noir overflow-hidden">
      <div className="mx-auto max-w-4xl">

        {/* Title */}
        <div className="mb-12">
          <h2 className="text-5xl sm:text-7xl text-white">
            YOUR <span className="text-neon">SOUNDTRACK</span>
          </h2>
        </div>

        {/* Song List */}
        <div className="glass-dark p-6 sm:p-10">
          {playlist.map((t, i) => (
            <button
              key={i}
              onClick={() =>
                setVideoUrl(t.url.replace("watch?v=", "embed/"))
              }
              className="flex items-center justify-between w-full px-4 py-4 mb-3 text-left hover:bg-gray-800 transition"
            >
              <div>
                <div className="text-lg text-white">{t.title}</div>
                <div className="text-sm text-gray-400">{t.artist}</div>
              </div>

              <Disc3 className="text-white" />
            </button>
          ))}
        </div>

        {/* Video Player */}
        {videoUrl && (
          <div className="mt-10">
            <iframe
              width="100%"
              height="400"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        )}

      </div>
    </section>
  );
};