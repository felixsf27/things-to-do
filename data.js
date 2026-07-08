// Jede Liste = ein transkribiertes Video. Neue Liste einfach unten anhängen.
const LISTS = [
  {
    id: "genius-habits",
    date: "2026-07-08",
    source: "https://www.instagram.com/reel/DaKz2NATodb/",
    title: { de: "10 Genius Habits", en: "10 Genius Habits" },
    items: [
      {
        de: "Einmal pro Woche etwas komplett außerhalb deines Interessenbereichs konsumieren — nicht angrenzend, wirklich fremd",
        en: "Consume one thing per week completely outside your interest area — not adjacent, genuinely foreign"
      },
      {
        de: "Einmal im Monat die Gegenposition zu deiner stärksten Überzeugung so argumentieren, als hinge dein Leben davon ab",
        en: "Once a month, argue the opposite of your strongest held belief like your life depends on it"
      },
      {
        de: "Nach allem, was du konsumierst (Gespräch, Buch, Video), 10 Minuten still sitzen, bevor neuer Input reinkommt",
        en: "Sit in silence for 10 minutes after consuming anything — a conversation, book, or video — before any more input arrives"
      },
      {
        de: "Wenn du bei einem Problem oder einer schlechten Gewohnheit feststeckst: die Umgebung wechseln, nicht die Methode",
        en: "When you're stuck on a problem or a bad habit, change your environment, not your method"
      }
    ]
  },
  {
    id: "cool-bets",
    date: "2026-07-08",
    source: "https://www.instagram.com/reel/DaWOtKATWRw/",
    title: { de: "10 Cool Bets mit Freunden", en: "10 Cool Bets With Friends" },
    items: [
      {
        de: "Ein Land wählen und darin echter Experte werden (Geschichte, Kultur, Sprache) — am Ende einen 10-Minuten-Vortrag halten",
        en: "Pick a country and become a genuine expert in its history, culture, and language — give the most immersive 10-minute talk"
      },
      {
        de: "Eine kreative Ausdrucksform wählen, die du noch nie ausprobiert hast, und innerhalb von 6 Monaten ein fertiges, originales Werk erschaffen (ohne KI)",
        en: "Pick a form of creative output you've never tried and produce one original finished work within 6 months (no AI)"
      },
      {
        de: "Deinen größten Charakterfehler identifizieren und 6 Monate lang gezielt dagegen arbeiten",
        en: "Identify your single biggest character flaw and spend 6 months in deliberate war against it"
      }
    ]
  },
  {
    id: "uncomfortable-hobbies",
    date: "2026-07-08",
    source: "https://www.instagram.com/reel/DaPx_siTg9B/",
    title: { de: "10 Uncomfortable Hobbies", en: "10 Uncomfortable Hobbies" },
    items: [
      {
        de: "Diese Woche eine Kampfsportart ausprobieren, mindestens eine Klasse besuchen",
        en: "Pick up a martial art this week and commit to going to one class"
      },
      {
        de: "Eine Gitarre besorgen und ein Lied üben, bis die Finger wehtun",
        en: "Buy a guitar and commit to playing a song until your fingers hurt"
      },
      {
        de: "Einen lokalen Ort zum Ehrenamt finden, einmal pro Woche hingehen",
        en: "Find a local place to volunteer and commit to going once a week"
      },
      {
        de: "Diese Woche zu einem Improv-Kurs gehen und bei jeder Szene mitmachen, egal wie unangenehm",
        en: "Go to an improv class this week and say yes to every single scene, no matter how uncomfortable"
      }
    ]
  },
  {
    id: "confidence-habits",
    date: "2026-07-08",
    source: "https://www.instagram.com/reel/DaHbqQxzHNf/",
    title: { de: "10 Confidence Habits", en: "10 Confidence Habits" },
    items: [
      {
        de: "Jemanden, den du als „außer Reichweite“ siehst, auf ein Date einladen",
        en: "Ask out that 10/10 who you think is above your league on a date"
      },
      {
        de: "Dich auf Jobs bewerben, für die du dich unterqualifiziert fühlst",
        en: "Apply for jobs that you're way too underqualified for"
      },
      {
        de: "Immer vom Besten ausgehen statt das Schlimmste zu überdenken",
        en: "Always assume the best in situations instead of overthinking the worst"
      },
      {
        de: "Gedanken bewusst nach unten (Richtung Rücken/Körpermitte) verlagern statt im Kopf zu überdenken, um geerdet zu bleiben",
        en: "Try to move your thoughts down to your lower spine instead of your head to become grounded and not overthink"
      },
      {
        de: "Dich räumlich nicht kleinmachen: in der Mitte der Bahn/des Busses sitzen statt in der Ecke",
        en: "Stop self-minimizing spatially — sit in the middle of public transport, not the corner"
      },
      {
        de: "In der Mitte des Aufzugs stehen, aufrechte Haltung",
        en: "Stand in the middle of lifts and pose like a Greek god"
      },
      {
        de: "Dich nicht für deine Existenz entschuldigen",
        en: "Don't be apologetic in your existence"
      }
    ]
  }
];
