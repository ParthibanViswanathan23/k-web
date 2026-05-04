import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";
import couple4 from "@/assets/couple-4.jpg";
import couple5 from "@/assets/couple-5.jpg";
import couple6 from "@/assets/couple-6.jpg";
import couple7 from "@/assets/couple-7.jpg";
import couple8 from "@/assets/couple-8.jpg";
import couple9 from "@/assets/couple-9.jpg";
import couple10 from "@/assets/couple-10.jpg";
import { FloatingHearts } from "@/components/FloatingHearts";
import { Reveal } from "@/components/Reveal";
import { Lightbox } from "@/components/Lightbox";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday My Love ❤️ — A Letter For You" },
      { name: "description", content: "A handcrafted birthday gift, made with all my love. Our story, our memories, and a promise of forever." },
      { property: "og:title", content: "Happy Birthday My Love ❤️" },
      { property: "og:description", content: "A handcrafted birthday gift, made with all my love." },
      { property: "og:image", content: couple1 },
    ],
  }),
  component: LoveBirthday,
});

const gallery = [couple2, couple3, couple4, couple5, couple7, couple8, couple9, couple10, couple6];

const timeline = [
  { img: couple2, title: "The day I first held your hand", caption: "I still remember the way the world went quiet. Just you, me, and a sky that finally made sense." },
  { img: couple3, title: "Lazy afternoons under that tree", caption: "We didn't talk much. We didn't have to. Your shoulder against mine was a whole conversation." },
  { img: couple7, title: "That little temple trip", caption: "You were quiet, I was loud, and somehow we fit. I think that's the day I knew." },
  { img: couple1, title: "By the rocks, by the sea", caption: "I pinched your cheek, you pretended to be annoyed. Best photo I have. Best feeling I know." },
  { img: couple5, title: "Finger-heart on the beach", caption: "You taught me what soft looks like. I'll spend forever learning." },
];

const moments = [
  { img: couple4, label: "Arey waah!", note: "Our first proper photo together. I keep going back to it." },
  { img: couple9, label: "Hey, cutie", note: "You walking ahead, me trying to keep up. Story of my life with you." },
  { img: couple8, label: "Late night, soft light", note: "Tired eyes, full heart. I'd choose this moment a thousand times." },
];

function LoveBirthday() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (musicOn) audioRef.current.play().catch(() => setMusicOn(false));
    else audioRef.current.pause();
  }, [musicOn]);

  return (
    <div className="relative bg-cream text-foreground overflow-x-hidden">
      <FloatingHearts />

      {/* Music toggle */}
      <button
        onClick={() => setMusicOn((v) => !v)}
        className="fixed top-5 right-5 z-40 rounded-full bg-rose-deep text-primary-foreground px-4 py-2 text-xs tracking-widest uppercase shadow-soft hover:scale-105 transition-transform"
      >
        {musicOn ? "♪ Music On" : "♪ Play Music"}
      </button>
      <audio ref={audioRef} loop src="/music/sandakkaari.mp3" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${couple1})`, transform: "scale(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="relative z-10 max-w-3xl animate-fade-up">
          <p className="font-script text-2xl md:text-3xl text-white/90 mb-4">to my one and only,</p>
          <h1 className="text-5xl md:text-8xl text-white leading-tight">
            Happy Birthday<br />
            <span className="font-script text-gold text-6xl md:text-9xl">My Love</span> ❤
          </h1>
          <p className="mt-8 font-serif italic text-lg md:text-2xl text-white/85 max-w-xl mx-auto">
            i'm not great with words, so i made this little corner of the internet just for you. read it slowly, okay?
          </p>
          <a
            href="#story"
            className="inline-block mt-10 px-10 py-4 bg-rose-deep text-primary-foreground rounded-full text-sm tracking-[0.3em] uppercase shadow-romantic hover:scale-105 transition-transform"
          >
            Our Story Begins
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm animate-pulse-soft">↓ scroll</div>
      </section>

      {/* OUR STORY */}
      <section id="story" className="relative py-28 px-6 max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <p className="font-script text-3xl text-rose-deep">our little story</p>
            <h2 className="text-4xl md:text-6xl mt-2">moments I keep replaying</h2>
            <div className="w-24 h-px bg-gold mx-auto mt-6" />
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose to-transparent hidden md:block" />
          {timeline.map((t, i) => (
            <Reveal key={i} delay={0.1}>
              <div className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/2">
                  <img
                    src={t.img}
                    alt={t.title}
                    onClick={() => setLightbox(t.img)}
                    className="w-full h-80 object-cover rounded-sm shadow-romantic cursor-zoom-in hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="md:w-1/2 text-center md:text-left px-4">
                  <span className="font-script text-2xl text-rose-deep">chapter {String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl md:text-3xl mt-2 mb-4">{t.title}</h3>
                  <p className="font-serif italic text-lg text-muted-foreground leading-relaxed">{t.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative py-28 px-6 bg-romance">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-script text-3xl text-rose-deep">us, in pictures</p>
            <h2 className="text-4xl md:text-6xl mt-2">a little gallery of you</h2>
          </div>
        </Reveal>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {gallery.map((src, i) => (
            <Reveal key={i} delay={(i % 6) * 0.05}>
              <div
                onClick={() => setLightbox(src)}
                className="group relative overflow-hidden rounded-sm cursor-zoom-in shadow-soft"
              >
                <img
                  src={src}
                  alt={`memory ${i + 1}`}
                  className="w-full h-56 md:h-72 object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-rose-deep/0 group-hover:bg-rose-deep/30 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity">♥</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LOVE LETTER */}
      <section className="relative py-32 px-6">
        <Reveal>
          <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 shadow-romantic rounded-sm relative">
            <div className="absolute -top-4 -left-4 text-9xl font-serif text-rose/30 select-none">"</div>
            <p className="font-script text-3xl text-rose-deep text-center mb-8">a letter, just for you</p>
            <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground/85 space-y-5 italic">
              <p>my love,</p>
              <p>
                i was sitting here trying to write something perfect for your birthday and honestly? i kept deleting it. nothing felt big enough. so i'm just going to be honest, the way i am with you.
              </p>
              <p>
                you have no idea what you've done to me. before you, i didn't really believe in any of this — the whole "you'll just know" thing. and then you showed up and made everything quieter. softer. like life finally turned its volume down so i could actually hear it.
              </p>
              <p>
                i think about the dumbest things. the way you laugh halfway through your own sentences. how you pretend you're not hungry and then steal half my food. that one time you fell asleep on my shoulder and i didn't move for an hour because i didn't want to wake you.
              </p>
              <p>
                i'm not always easy. i know that. you've loved me on the days i didn't deserve it, and that's something i'll never stop being thankful for. you make me want to be better, not because you ask me to, but because you make it look so easy to be good.
              </p>
              <p>
                today is your day. i hope it feels like every soft thing you've ever wanted. i promise to keep showing up. through the boring days, the loud days, the in-between days. all of them. yours.
              </p>
              <p className="text-right font-script text-3xl text-rose-deep not-italic mt-8">— always, me</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SPECIAL MOMENTS */}
      <section className="relative py-28 px-6 bg-foreground text-cream">
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-script text-3xl text-gold">favourite frames</p>
            <h2 className="text-4xl md:text-6xl mt-2 text-cream">moments I'll never forget</h2>
          </div>
        </Reveal>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {moments.map((m, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="group">
                <div className="overflow-hidden rounded-sm shadow-romantic">
                  <img
                    src={m.img}
                    onClick={() => setLightbox(m.img)}
                    alt={m.label}
                    className="w-full h-96 object-cover cursor-zoom-in group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                <p className="font-script text-2xl text-gold mt-5">{m.label}</p>
                <p className="font-serif italic text-cream/70 mt-2">{m.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BIRTHDAY MESSAGE */}
      <section className="relative py-32 px-6 text-center bg-romance">
        <Reveal>
          <p className="font-script text-3xl md:text-5xl text-rose-deep">happy birthday, my whole heart.</p>
          <h2 className="text-4xl md:text-7xl mt-8 max-w-4xl mx-auto leading-tight">
            you are the best thing<br />that ever happened to me.
          </h2>
          <p className="mt-10 font-serif italic text-xl md:text-2xl max-w-2xl mx-auto text-foreground/75">
            i'm so lucky to have you in my life. truly. i don't know what i did right, but i'm not asking questions.
          </p>
          <div className="mt-12 flex justify-center gap-3 text-3xl">
            <span className="animate-pulse-soft">❤</span>
            <span className="animate-pulse-soft" style={{ animationDelay: "0.3s" }}>❤</span>
            <span className="animate-pulse-soft" style={{ animationDelay: "0.6s" }}>❤</span>
          </div>
        </Reveal>
      </section>

      {/* ENDING */}
      <section className="relative py-32 px-6 text-center bg-foreground text-cream overflow-hidden">
        <Reveal>
          <p className="font-serif italic text-xl text-cream/70">until the very last page,</p>
          <h2 className="font-script text-7xl md:text-9xl text-gold mt-6">Forever Yours</h2>
          <p className="mt-8 text-cream/60 text-sm tracking-[0.4em] uppercase">made with love · just for you</p>
        </Reveal>
      </section>

      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}
