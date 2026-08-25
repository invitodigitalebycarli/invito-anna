import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import videoAsset from "@/assets/video_busta.mp4.asset.json";
import imageAsset from "@/assets/invito_finale.png.asset.json";
import audioAsset from "@/assets/audio_latinamerica.mp3.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anna's Party — Invito 18 Anni | 24 Settembre 2026" },
      {
        name: "description",
        content:
          "Invito digitale al diciottesimo di Anna: 24 settembre 2026, ore 20:00, Villa Infinito, Palermo. Dress code elegante e conferma online.",
      },
      { property: "og:title", content: "Anna's Party — Invito 18 Anni" },
      {
        property: "og:description",
        content:
          "Tocca per aprire la busta e scoprire l'invito al diciottesimo di Anna — 24 settembre 2026, Villa Infinito, Palermo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invito,
});

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf_placeholder/viewform?embedded=true";

type Scene = 1 | 2 | 3;
type Modal = null | "dress" | "location" | "rsvp";

const HOTSPOTS: { id: Exclude<Modal, null>; left: string; label: string }[] = [
  { id: "dress", left: "31.5%", label: "Dresscode" },
  { id: "location", left: "50%", label: "Location" },
  { id: "rsvp", left: "68.4%", label: "Conferma" },
];

function Invito() {
  const [scene, setScene] = useState<Scene>(1);
  const [musicOn, setMusicOn] = useState(false);
  const [modal, setModal] = useState<Modal>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.4;
  }, []);

  const open = () => {
    setScene(2);
    const v = videoRef.current;
    const a = audioRef.current;
    if (v) {
      v.currentTime = 0;
      void v.play();
    }
    if (a) {
      a.currentTime = 0;
      a.volume = 0.4;
      void a.play().then(() => setMusicOn(true)).catch(() => setMusicOn(false));
    }
  };

  const replay = () => {
    setModal(null);
    setScene(1);
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  const toggleMusic = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      void a.play().then(() => setMusicOn(true));
    } else {
      a.pause();
      setMusicOn(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-stage">
      <div className="stage-frame">
        {/* Video layer: scenes 1 & 2 */}
        <video
          ref={videoRef}
          src={videoAsset.url}
          playsInline
          preload="auto"
          muted
          onEnded={() => setScene(3)}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: scene === 3 ? 0 : 1 }}
        />

        {/* Final invitation image: scene 3 — untouched */}
        <img
          src={imageAsset.url}
          alt="Invito al diciottesimo di Anna — 24 settembre 2026, ore 20:00"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: scene === 3 ? 1 : 0, pointerEvents: scene === 3 ? "auto" : "none" }}
        />

        {/* Scene 1 overlay */}
        {scene === 1 && (
          <button type="button" onClick={open} className="absolute inset-0 z-20 cursor-pointer">
            <span className="tap-badge">Tocca per aprire</span>
          </button>
        )}

        {/* Scene 3 hotspots over the original round buttons */}
        {scene === 3 &&
          HOTSPOTS.map((h) => (
            <button
              key={h.id}
              type="button"
              aria-label={h.label}
              onClick={() => setModal(h.id)}
              className="absolute z-20 rounded-full"
              style={{
                left: h.left,
                top: "68.6%",
                width: "17%",
                aspectRatio: "1 / 1",
                transform: "translate(-50%, -50%)",
                background: "transparent",
                border: "none",
              }}
            />
          ))}

        {/* Persistent overlay controls */}
        {scene !== 1 && (
          <>
            <button type="button" onClick={replay} className="ctrl-pill">
              Riguarda
            </button>
            <button
              type="button"
              onClick={toggleMusic}
              aria-label={musicOn ? "Metti in pausa la musica" : "Riproduci la musica"}
              className="ctrl-round"
            >
              {musicOn ? (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <rect x="6" y="5" width="4" height="14" rx="1.2" />
                  <rect x="14" y="5" width="4" height="14" rx="1.2" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              )}
            </button>
          </>
        )}

        {/* Decorated modals */}
        {modal && (
          <div className="modal-scrim" onClick={() => setModal(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                aria-label="Chiudi"
                onClick={() => setModal(null)}
                className="modal-close"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>

              {modal === "dress" && (
                <>
                  <p className="modal-kicker">Dresscode</p>
                  <h2 className="modal-title">Elegant</h2>
                  <span className="modal-rule" />
                  <p className="modal-text">Ti aspetto in total look elegante.</p>
                </>
              )}

              {modal === "location" && (
                <>
                  <p className="modal-kicker">Location</p>
                  <h2 className="modal-title">Villa Infinito</h2>
                  <span className="modal-rule" />
                  <p className="modal-text">Palermo</p>
                  <a
                    className="modal-link"
                    href="https://maps.google.com/?q=Villa+Infinito+Palermo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apri su Maps
                  </a>
                </>
              )}

              {modal === "rsvp" && (
                <>
                  <p className="modal-kicker">Conferma</p>
                  <h2 className="modal-title">Dai conferma</h2>
                  <span className="modal-rule" />
                  <div className="modal-embed">
                    <iframe src={GOOGLE_FORM_URL} title="Modulo di conferma" loading="lazy" />
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <audio ref={audioRef} src={audioAsset.url} loop preload="auto" />
      </div>
    </main>
  );
}
