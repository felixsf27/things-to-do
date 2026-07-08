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
  },
  {
    id: "solo-missions",
    date: "2026-07-08",
    source: "https://www.instagram.com/reel/DWEY6p9RH0k/",
    title: { de: "15 Solo Missions", en: "15 Solo Missions" },
    items: [
      {
        de: "10 Kilometer laufen, ohne Musik oder Handy",
        en: "Run 10 kilometers with no music or your phone"
      },
      {
        de: "12 Stunden in der Natur verbringen, ohne mit jemandem zu sprechen",
        en: "Spend 12 hours in nature without speaking to anybody"
      },
      {
        de: "1000 Liegestütze an einem einzigen Tag",
        en: "Do 1000 pushups in a single day"
      },
      {
        de: "Einen Brief an dein Ich in 5 Jahren schreiben",
        en: "Write a letter to your future self 5 years from now"
      },
      {
        de: "Einen ganzen Tag ohne Ziel durch deine Stadt laufen",
        en: "Walk an entire day through your city with no destination"
      },
      {
        de: "7 Tage in Folge früh aufstehen und den Sonnenaufgang beobachten",
        en: "Wake up early and watch the sunrise for 7 days in a row"
      },
      {
        de: "50 Wörter einer neuen Sprache in einer Woche lernen",
        en: "Learn 50 words in a new language in a single week"
      },
      {
        de: "Eine ganze Woche ohne Zucker und Koffein",
        en: "Spend a full week with no sugar or caffeine"
      },
      {
        de: "Ein ganzes Philosophie-Buch lesen und die Gedanken dazu in einem Journal festhalten",
        en: "Read an entire philosophy book and then write your reflections in a journal"
      },
      {
        de: "3 Stunden irgendwo in der Stadt sitzen und einfach Menschen beobachten",
        en: "Spend 3 hours sitting somewhere in your city out in public just observing people"
      },
      {
        de: "48 Stunden lang überhaupt nicht meckern",
        en: "Go 48 hours with no complaining whatsoever"
      },
      {
        de: "Eine 3-stündige Solo-Fahrradtour ohne Handy und ohne Ziel",
        en: "Take a solo 3 hour bike ride with no phone and no destination"
      },
      {
        de: "Einen ganzen Tag lang einfach zufälligen Fremden helfen",
        en: "Spend one full day just helping out random strangers"
      },
      {
        de: "100 Dinge aufschreiben, für die du dankbar bist, in einem Rutsch",
        en: "Write 100 things that you're grateful for in one sitting"
      },
      {
        de: "60 Minuten komplett still und schweigend sitzen",
        en: "Sit completely still and in silence for 60 minutes"
      }
    ]
  },
  {
    id: "movies-again",
    date: "2026-07-08",
    source: "https://www.instagram.com/reel/DadI5AjugwY/",
    title: { de: "10 Filme, die jeder gern nochmal zum ersten Mal sehen würde", en: "10 Movies Every Guy Wishes They Could Watch Again For The First Time" },
    items: [
      {
        de: "Fight Club — Ein einsamer Versicherungsangestellter sucht seinen Sinn und startet aus Versehen eine Revolution mit Folgen, die niemand kommen sah",
        en: "Fight Club — A lonely insurance employee searches for his purpose and accidentally starts a revolution with consequences nobody saw coming"
      },
      {
        de: "Forrest Gump — Ein gewöhnlicher Mann erlebt aus Versehen einige der außergewöhnlichsten Ereignisse der amerikanischen Geschichte",
        en: "Forrest Gump — An ordinary man accidentally lives through some of the most extraordinary events in American history"
      },
      {
        de: "Whiplash — Ein Schlagzeuger und sein brutaler Mentor pushen so hart, dass man sich fragt, ob man wirklich Erfolg will oder nur die Vorstellung davon",
        en: "Whiplash — A drummer and his brutal mentor push so hard you end up asking yourself if you really want success, or just the idea of it"
      },
      {
        de: "Gattaca — In einer Welt, die deinen Wert bestimmt, weigert sich ein Mann, seine Grenzen zu akzeptieren, und beweist, dass man auf sich selbst setzen kann, auch wenn alle dagegen sind",
        en: "Gattaca — In a world that determines what you're worth, a man refuses to accept his limits and proves that you can bet on yourself even when everybody tells you not to"
      },
      {
        de: "Into the Wild — Ein junger Mann gibt sein ganzes Leben auf, um tief in der Wildnis zu leben, und entdeckt, dass Glück nur echt ist, wenn man es teilt",
        en: "Into the Wild — A young man abandons his entire life to live deep in the wilderness and discovers that happiness is only real when shared"
      },
      {
        de: "The Sixth Sense — Ein Kind vertraut einem Psychologen an, dass es Tote sehen kann, mit einem der verrücktesten Twists der Filmgeschichte",
        en: "The Sixth Sense — A young child confides in a psychologist that he can see dead people, in a story that ends with one of the craziest twists in cinematic history"
      }
    ]
  },
  {
    id: "doomscrolling-habits",
    date: "2026-07-08",
    source: "https://www.instagram.com/reel/DaGeW4CyyLo/",
    title: { de: "10 Habits gegen Doomscrolling", en: "10 Habits To Replace Doomscrolling" },
    items: [
      {
        de: "Sobald der Scroll-Drang kommt: 20 Liegestütze, Handy bleibt liegen bis der Satz fertig ist",
        en: "Do 20 pushups the moment you feel the urge to scroll — phone stays down until the set is finished"
      },
      {
        de: "Jemanden anrufen statt zu texten — nur Stimme, kein Tippen",
        en: "Call someone instead of texting them — voice only, no typing"
      },
      {
        de: "Nach dem Essen einen 15-minütigen Spaziergang machen statt auf die Couch zu sitzen",
        en: "Take a walk after dinner instead of sitting down on the couch — outside, no destination, 15 minutes"
      },
      {
        de: "Eine Schublade oder einen Ordner aufräumen, den du seit Ewigkeiten vermeidest",
        en: "Clear one drawer or folder you've been avoiding — physical mess, not a digital one"
      },
      {
        de: "Sobald du zum Handy greifst: zwei Seiten in einem Buch lesen (gleiche Hand, anderes Objekt)",
        en: "Read two pages of a book the moment you reach for your phone — same hand, different object"
      },
      {
        de: "10 Minuten eine Fähigkeit selbst üben statt jemandem dabei zuzusehen",
        en: "Practice a skill for 10 minutes instead of watching someone else do it"
      },
      {
        de: "2 Minuten draußen sitzen, bevor du wieder reingehst — nichts in den Händen, nichts läuft",
        en: "Sit outside for 2 minutes before you go back indoors — nothing in your hands, nothing playing"
      }
    ]
  }
];
