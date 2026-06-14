import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Асфальтирование в Алматы — LUXION | от 1500 ₸/м²" },
      {
        name: "description",
        content:
          "Асфальтирование в Алматы под ключ от 1500 ₸/м². Бесплатный выезд. Гарантия 3 года. Звоните: +7 700 710-11-07",
      },
      { property: "og:title", content: "Асфальтирование в Алматы — LUXION | от 1500 ₸/м²" },
      {
        property: "og:description",
        content:
          "Асфальтирование в Алматы под ключ от 1500 ₸/м². Бесплатный выезд. Гарантия 3 года.",
      },
    ],
  }),
  component: Index,
});

const TEL = "+77007101107";
const TEL_DISPLAY = "+7 (700) 710-11-07";
const WA = "https://wa.me/77007101107";

const font = {
  heading: { fontFamily: "'Montserrat', sans-serif" },
  body: { fontFamily: "'Open Sans', sans-serif" },
};

function Index() {
  return (
    <div
      className="relative min-h-screen w-full bg-white"
      style={{ ...font.body, color: "#1A1A1A" }}
    >
      {/* Left burgundy accent bar */}
      <div
        className="fixed left-0 top-0 h-full hidden md:block"
        style={{ width: 6, background: "#8B0000", zIndex: 30 }}
      />

      {/* Top line */}
      <div
        className="w-full flex items-center justify-center text-center px-3"
        style={{
          background: "#8B0000",
          height: 40,
          color: "#fff",
          fontSize: 13,
          ...font.body,
        }}
      >
        <span className="hidden sm:inline">
          ✓ Бесплатный выезд специалиста · ✓ Гарантия 3 года · ✓ Работаем по всему Алматы
        </span>
        <span className="sm:hidden">✓ Бесплатный выезд · ✓ Гарантия 3 года</span>
      </div>

      {/* Center content */}
      <main
        className="flex items-center justify-center"
        style={{ minHeight: "calc(100vh - 40px)" }}
      >
        <div
          className="w-full mx-auto text-center pb-28 md:pb-10"
          style={{ maxWidth: 680, padding: "40px 20px" }}
        >
          <h2
            style={{
              ...font.heading,
              fontWeight: 800,
              color: "#8B0000",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
            className="text-[42px]"
          >
            LUXION
          </h2>
          <p
            className="mt-2"
            style={{
              ...font.body,
              fontSize: 14,
              color: "#666",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Асфальтирование в Алматы
          </p>

          <div
            style={{
              height: 3,
              width: 60,
              background: "#8B0000",
              margin: "20px auto",
            }}
          />

          <h1
            className="text-[26px] md:text-[36px]"
            style={{
              ...font.heading,
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1.2,
            }}
          >
            Асфальтирование под ключ
            <br />
            <span style={{ color: "#8B0000" }}>от 1 500 ₸/м²</span>
          </h1>

          <div
            className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            style={{ ...font.body, fontSize: 14, color: "#444" }}
          >
            <span>✓ Парковки и дворы</span>
            <span>✓ ТРЦ и офисы</span>
            <span>✓ Дороги и тротуары</span>
          </div>

          {/* CTA buttons */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            style={{ marginTop: 32 }}
          >
            <a
              href={`tel:${TEL}`}
              className="luxion-btn luxion-btn-call flex items-center justify-center gap-3"
              style={{
                background: "#8B0000",
                color: "#fff",
                height: 72,
                borderRadius: 8,
                ...font.heading,
                fontWeight: 700,
              }}
            >
              <Phone size={26} strokeWidth={2.5} />
              <span className="text-left leading-tight">
                <span className="block" style={{ fontSize: 18 }}>
                  ПОЗВОНИТЬ СЕЙЧАС
                </span>
                <span
                  className="block"
                  style={{ ...font.body, fontSize: 13, fontWeight: 400, opacity: 0.9 }}
                >
                  {TEL_DISPLAY}
                </span>
              </span>
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="luxion-btn luxion-btn-wa flex items-center justify-center gap-3"
              style={{
                background: "#25D366",
                color: "#fff",
                height: 72,
                borderRadius: 8,
                ...font.heading,
                fontWeight: 700,
              }}
            >
              <MessageCircle size={26} strokeWidth={2.5} />
              <span className="text-left leading-tight">
                <span className="block" style={{ fontSize: 18 }}>
                  НАПИСАТЬ В WHATSAPP
                </span>
                <span
                  className="block"
                  style={{ ...font.body, fontSize: 13, fontWeight: 400, opacity: 0.95 }}
                >
                  Ответим за 5 минут
                </span>
              </span>
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="grid grid-cols-3"
            style={{
              marginTop: 32,
              background: "#F8F8F8",
              padding: 20,
              borderRadius: 8,
            }}
          >
            {[
              { n: "500+", l: "объектов" },
              { n: "3 года", l: "гарантия" },
              { n: "Бесплатно", l: "выезд и смета" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="text-[20px] md:text-[28px]"
                  style={{ ...font.heading, fontWeight: 800, color: "#8B0000", lineHeight: 1.1 }}
                >
                  {s.n}
                </div>
                <div style={{ ...font.body, fontSize: 13, color: "#666", marginTop: 4 }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{ marginTop: 24, ...font.body, fontSize: 13, color: "#888" }}
          >
            📍 г. Алматы · Пн–Сб 8:00–18:00
          </div>
        </div>
      </main>

      {/* Mobile fixed bottom bar */}
      <div
        className="fixed bottom-0 left-0 right-0 grid grid-cols-2 md:hidden"
        style={{ height: 56, zIndex: 40, ...font.heading, fontWeight: 700 }}
      >
        <a
          href={`tel:${TEL}`}
          className="flex items-center justify-center gap-2"
          style={{ background: "#8B0000", color: "#fff", fontSize: 16 }}
        >
          <Phone size={18} /> Позвонить
        </a>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
          style={{ background: "#25D366", color: "#fff", fontSize: 16 }}
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>

      {/* Desktop floating WhatsApp */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="luxion-wa-float hidden md:flex items-center justify-center"
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#25D366",
          color: "#fff",
          zIndex: 40,
        }}
      >
        <MessageCircle size={28} />
      </a>

      <style>{`
        .luxion-btn { transition: all 0.2s ease; text-decoration: none; }
        .luxion-btn-call:hover { background: #B22222 !important; transform: scale(1.02); }
        .luxion-btn-wa:hover { background: #1DA851 !important; transform: scale(1.02); }
        .luxion-wa-float {
          animation: luxionPulse 2s infinite;
        }
        .luxion-wa-float:hover { background: #1DA851 !important; }
        @keyframes luxionPulse {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.6); transform: scale(1); }
          70% { box-shadow: 0 0 0 20px rgba(37,211,102,0); transform: scale(1.1); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
