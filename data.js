const moodData = {

  // ─────────────────────────────────────────────
  // 😊 HAPPY
  // ─────────────────────────────────────────────
  happy: {
    movies: [
      {
        title: "The Intouchables", year: 2011, rating: 8.5, lang: "French",
        poster: "intouch.png", imdb: "https://www.imdb.com/title/tt1675434/",
        synopsis: "A wealthy quadriplegic hires a carefree caregiver from the streets, and the two form an unlikely, life-changing friendship.",
        ott: "Netflix, Prime Video", genre: "Drama, Comedy", runtime: "112 min"
      },
      {
        title: "Forrest Gump", year: 1994, rating: 8.8, lang: "English",
        poster: "for.jpg", imdb: "https://www.imdb.com/title/tt0109830/",
        synopsis: "A kind-hearted man from Alabama witnesses and influences major historical events while always staying true to himself.",
        ott: "Prime Video", genre: "Drama, Romance", runtime: "142 min"
      },
      {
        title: "Zootopia", year: 2016, rating: 8.0, lang: "English",
        poster: "zoo.jpg", imdb: "https://www.imdb.com/title/tt2948356/",
        synopsis: "A rookie bunny cop and a sly fox uncover a conspiracy that threatens their vibrant animal metropolis.",
        ott: "Disney+ Hotstar", genre: "Animation, Adventure", runtime: "108 min"
      },
      {
        title: "Inside Out", year: 2015, rating: 8.1, lang: "English",
        poster: "in.jpg", imdb: "https://www.imdb.com/title/tt2096673/",
        synopsis: "The emotions inside an 11-year-old girl's head navigate a major life change when her family moves to a new city.",
        ott: "Disney+ Hotstar", genre: "Animation, Family", runtime: "95 min"
      },
      {
        title: "Amélie", year: 2001, rating: 8.3, lang: "French",
        poster: "am.gif", imdb: "https://www.imdb.com/title/tt0211915/",
        synopsis: "A shy Parisian waitress decides to secretly improve the lives of those around her while neglecting her own happiness.",
        ott: "Prime Video", genre: "Romance, Comedy", runtime: "122 min"
      },
      {
        title: "La La Land", year: 2016, rating: 8.0, lang: "English",
        poster: "lala.jpg", imdb: "https://www.imdb.com/title/tt3783958/",
        synopsis: "An aspiring actress and a jazz musician fall in love while chasing their dreams in a modern-day Hollywood musical.",
        ott: "Netflix", genre: "Musical, Romance", runtime: "128 min"
      }
    ],
    music: [
      {
        title: "Happy", artist: "Pharrell Williams", year: 2013,
        cover: "hap.jpg", link: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH",
        album: "Girl", genre: "Pop, Soul",
        synopsis: "An infectious, feel-good anthem that became a global phenomenon, urging listeners to clap along and embrace joy."
      },
      {
        title: "Walking on Sunshine", artist: "Katrina & The Waves", year: 1985,
        cover: "walk.jpg", link: "https://open.spotify.com/track/05wIrZSwuaVWhcv5FfqeH0",
        album: "Walking on Sunshine", genre: "Pop Rock",
        synopsis: "A bright, upbeat pop-rock classic about the overwhelming rush of being in love and feeling on top of the world."
      },
      {
        title: "Shake It Off", artist: "Taylor Swift", year: 2014,
        cover: "shak.jpg", link: "https://open.spotify.com/track/0cqRj7pUJDkTCEsJkx8snD",
        album: "1989", genre: "Pop",
        synopsis: "A carefree pop bop about brushing off criticism and haters, and choosing to dance through life instead."
      },
      {
        title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", year: 2014,
        cover: "up.jpg", link: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS",
        album: "Uptown Special", genre: "Funk, Pop",
        synopsis: "A retro funk-pop hit with irresistible grooves and swaggering energy that makes it impossible not to move."
      },
      {
        title: "Can't Stop the Feeling!", artist: "Justin Timberlake", year: 2016,
        cover: "cant.jpg", link: "https://open.spotify.com/track/6JV2woYGAM5dRKioM3CLTD",
        album: "Trolls (Original Motion Picture Soundtrack)", genre: "Pop, Dance",
        synopsis: "A sunshine-drenched dance track written for the Trolls movie that radiates pure, unstoppable happiness."
      },
      {
        title: "Don't Stop Me Now", artist: "Queen", year: 1978,
        cover: "dont.jpg", link: "https://open.spotify.com/track/5T8EDUDqKcs6OSOwEsfqG7",
        album: "Jazz", genre: "Rock, Glam Rock",
        synopsis: "Freddie Mercury's exuberant celebration of living life at full speed — consistently voted one of the happiest songs ever made."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 😢 SAD
  // ─────────────────────────────────────────────
  sad: {
    movies: [
      {
        title: "Manchester by the Sea", year: 2016, rating: 7.8, lang: "English",
        poster: "man.jpg", imdb: "https://www.imdb.com/title/tt4034228/",
        synopsis: "A Boston janitor is forced to return to his hometown and care for his teenage nephew after his brother's death, reopening painful wounds.",
        ott: "Prime Video", genre: "Drama", runtime: "137 min"
      },
      {
        title: "The Pursuit of Happyness", year: 2006, rating: 8.0, lang: "English",
        poster: "pur.jpg", imdb: "https://www.imdb.com/title/tt0454921/",
        synopsis: "A struggling salesman takes custody of his young son and endures homelessness while chasing a career in finance.",
        ott: "Netflix, Sony LIV", genre: "Drama, Biography", runtime: "117 min"
      },
      {
        title: "Grave of the Fireflies", year: 1988, rating: 8.5, lang: "Japanese",
        poster: "grave.jpg", imdb: "https://www.imdb.com/title/tt0095327/",
        synopsis: "Two orphaned siblings struggle to survive in Japan during the final months of World War II in this devastating Studio Ghibli masterpiece.",
        ott: "Netflix", genre: "Animation, War, Drama", runtime: "89 min"
      },
      {
        title: "Her", year: 2013, rating: 8.0, lang: "English",
        poster: "her.jpg", imdb: "https://www.imdb.com/title/tt1798709/",
        synopsis: "A lonely writer develops an unexpected and profound romantic relationship with his AI operating system.",
        ott: "Prime Video", genre: "Drama, Romance, Sci-Fi", runtime: "126 min"
      },
      {
        title: "Atonement", year: 2007, rating: 7.8, lang: "English",
        poster: "at.jpg", imdb: "https://www.imdb.com/title/tt0783233/",
        synopsis: "A young girl's lie tears apart two lovers, and she spends the rest of her life seeking redemption through her writing.",
        ott: "Prime Video, Apple TV+", genre: "Drama, Romance, War", runtime: "123 min"
      },
      {
        title: "The Fault in Our Stars", year: 2014, rating: 7.7, lang: "English",
        poster: "fau.jpg", imdb: "https://www.imdb.com/title/tt2582846/",
        synopsis: "Two teenage cancer patients fall deeply in love at a support group and embark on an unforgettable journey together.",
        ott: "Disney+ Hotstar, Hulu", genre: "Drama, Romance", runtime: "126 min"
      }
    ],
    music: [
      {
        title: "Someone Like You", artist: "Adele", year: 2011,
        cover: "some.jpg", link: "https://open.spotify.com/track/1v1oIWf2f7hL6kZzazvX8d",
        album: "21", genre: "Soul, Pop",
        synopsis: "A raw, piano-driven ballad about accepting a lost love and wishing them well despite a broken heart."
      },
      {
        title: "Fix You", artist: "Coldplay", year: 2005,
        cover: "fix.jpg", link: "https://open.spotify.com/track/7lvv0Q4Kl9A7r2GzGkBqfX",
        album: "X&Y", genre: "Alternative Rock",
        synopsis: "A gentle, building anthem of comfort and healing, written by Chris Martin for his late father-in-law."
      },
      {
        title: "Yesterday", artist: "The Beatles", year: 1965,
        cover: "yest.jpg", link: "https://open.spotify.com/track/3BQHpFgAp4l80e1XwYqMxp",
        album: "Help!", genre: "Pop, Soft Rock",
        synopsis: "One of the most covered songs in history — a timeless reflection on longing for a happier, simpler past."
      },
      {
        title: "The Night We Met", artist: "Lord Huron", year: 2015,
        cover: "night.jpg", link: "https://open.spotify.com/track/2Z8WuEywRWYTKe1NybPQEW",
        album: "Strange Trails", genre: "Indie Folk",
        synopsis: "A hauntingly beautiful song about wishing you could go back to the moment before heartbreak changed everything."
      },
      {
        title: "Skinny Love", artist: "Bon Iver", year: 2008,
        cover: "skinny.jpg", link: "https://open.spotify.com/track/0SuLAslEMFZwBBlZWqFO0C",
        album: "For Emma, Forever Ago", genre: "Indie Folk",
        synopsis: "A raw, stripped-down lament about a relationship deteriorating under the weight of unspoken pain and exhaustion."
      },
      {
        title: "Tears in Heaven", artist: "Eric Clapton", year: 1992,
        cover: "tears.jpg", link: "https://open.spotify.com/track/1pLwC3MmJZ2tDqCk41sJLW",
        album: "Rush (Soundtrack)", genre: "Soft Rock, Blues",
        synopsis: "Written after the tragic death of his young son, Clapton asks if they would still know each other in the afterlife."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 💕 ROMANTIC
  // ─────────────────────────────────────────────
  romantic: {
    movies: [
      {
        title: "The Notebook", year: 2004, rating: 7.8, lang: "English",
        poster: "not.jpg", imdb: "https://www.imdb.com/title/tt0332280/",
        synopsis: "A poor young man and a wealthy girl fall passionately in love in 1940s South Carolina, defying her parents' disapproval.",
        ott: "Netflix", genre: "Romance, Drama", runtime: "123 min"
      },
      {
        title: "Before Sunrise", year: 1995, rating: 8.1, lang: "English",
        poster: "bef.jpg", imdb: "https://www.imdb.com/title/tt0112471/",
        synopsis: "An American man and a French woman meet on a train and spend one magical night wandering Vienna together.",
        ott: "Prime Video, MUBI", genre: "Romance, Drama", runtime: "101 min"
      },
      {
        title: "Pride and Prejudice", year: 2005, rating: 7.8, lang: "English",
        poster: "pri.jpg", imdb: "https://www.imdb.com/title/tt0414387/",
        synopsis: "Sharp-witted Elizabeth Bennet navigates societal pressures and her own prejudices in a slow-burn romance with the brooding Mr. Darcy.",
        ott: "Netflix, Prime Video", genre: "Romance, Drama, Period", runtime: "129 min"
      },
      {
        title: "Eternal Sunshine of the Spotless Mind", year: 2004, rating: 8.3, lang: "English",
        poster: "et.jpg", imdb: "https://www.imdb.com/title/tt0338013/",
        synopsis: "After a painful breakup, a man undergoes a procedure to erase his ex-girlfriend from his memory — but fights to hold on.",
        ott: "Prime Video", genre: "Romance, Sci-Fi, Drama", runtime: "108 min"
      },
      {
        title: "500 Days of Summer", year: 2009, rating: 7.7, lang: "English",
        poster: "500.jpg", imdb: "https://www.imdb.com/title/tt1022603/",
        synopsis: "A hopeless romantic recounts his non-linear 500-day relationship with a woman who doesn't believe in love.",
        ott: "Disney+ Hotstar", genre: "Romance, Comedy, Drama", runtime: "95 min"
      },
      {
        title: "Titanic", year: 1997, rating: 7.8, lang: "English",
        poster: "tit.jpg", imdb: "https://www.imdb.com/title/tt0120338/",
        synopsis: "A penniless artist and an aristocratic young woman fall in love aboard the ill-fated maiden voyage of the RMS Titanic.",
        ott: "Disney+ Hotstar, Paramount+", genre: "Romance, Drama, History", runtime: "194 min"
      }
    ],
    music: [
      {
        title: "Perfect", artist: "Ed Sheeran", year: 2017,
        cover: "per.jpg", link: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
        album: "÷ (Divide)", genre: "Pop, Acoustic",
        synopsis: "A sweeping, waltz-like love song Sheeran wrote for his now-wife, describing the moment he knew she was the one."
      },
      {
        title: "All of Me", artist: "John Legend", year: 2013,
        cover: "all.jpg", link: "https://open.spotify.com/track/0GhKfWQbxbFgZufC0tBlwO",
        album: "Love in the Future", genre: "R&B, Soul",
        synopsis: "A deeply personal piano ballad Legend wrote for his wife Chrissy Teigen, celebrating unconditional, imperfect love."
      },
      {
        title: "Thinking Out Loud", artist: "Ed Sheeran", year: 2014,
        cover: "think.jpg", link: "https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f",
        album: "X (Multiply)", genre: "Soul, Pop",
        synopsis: "A soulful ode to everlasting love, promising to keep loving someone even as they both grow old together."
      },
      {
        title: "At Last", artist: "Etta James", year: 1960,
        cover: "atlast.jpg", link: "https://open.spotify.com/track/1fXsY8K1iKsFcfoTmya4A9",
        album: "At Last!", genre: "R&B, Jazz, Soul",
        synopsis: "A timeless jazz-soul classic about finally finding true love after a long, lonely wait — pure romanticism in song form."
      },
      {
        title: "I Will Always Love You", artist: "Whitney Houston", year: 1992,
        cover: "iwill.jpg", link: "https://open.spotify.com/track/3y7HrbO8lQjvlVvQPwC9cQ",
        album: "The Bodyguard (Soundtrack)", genre: "Pop, R&B",
        synopsis: "Whitney's legendary vocal performance turns this farewell ballad into one of the greatest love songs ever recorded."
      },
      {
        title: "Make You Feel My Love", artist: "Adele", year: 2008,
        cover: "make.jpg", link: "https://open.spotify.com/track/4cG7HUWYv8Z1xY4XGf8oLW",
        album: "19", genre: "Pop, Soul",
        synopsis: "Originally written by Bob Dylan, Adele's heartfelt cover became a devotional promise of unwavering, unconditional love."
      }
    ]
  },

  

  // ─────────────────────────────────────────────
  // 😌 RELAXED
  // ─────────────────────────────────────────────
  relaxed: {
    movies: [
      {
        title: "The Secret Life of Walter Mitty", year: 2013, rating: 7.3, lang: "English",
        poster: "secret.jpg", imdb: "https://www.imdb.com/title/tt0359950/",
        synopsis: "A daydreaming magazine photo manager embarks on a real-life adventure across the globe to find a missing photograph.",
        ott: "Disney+ Hotstar", genre: "Comedy, Drama, Adventure", runtime: "114 min"
      },
      {
        title: "The Grand Budapest Hotel", year: 2014, rating: 8.1, lang: "English",
        poster: "grand.jpg", imdb: "https://www.imdb.com/title/tt2278388/",
        synopsis: "A legendary concierge and his young protégé get caught up in a murder mystery, a stolen painting, and a vast family inheritance.",
        ott: "Disney+ Hotstar, MUBI", genre: "Comedy, Drama, Mystery", runtime: "99 min"
      },
      {
        title: "Midnight in Paris", year: 2011, rating: 7.7, lang: "English",
        poster: "mid.jpg", imdb: "https://www.imdb.com/title/tt1605783/",
        synopsis: "A nostalgic writer on vacation in Paris finds himself mysteriously transported back to the 1920s every night at midnight.",
        ott: "Netflix, MUBI", genre: "Comedy, Fantasy, Romance", runtime: "94 min"
      },
      {
        title: "Chef", year: 2014, rating: 7.3, lang: "English",
        poster: "chef.jpg", imdb: "https://www.imdb.com/title/tt2883512/",
        synopsis: "After a public fallout with a food critic, a talented chef quits his job, buys a food truck, and rediscovers his passion.",
        ott: "Netflix", genre: "Comedy, Drama", runtime: "114 min"
      },
      {
        title: "Little Miss Sunshine", year: 2006, rating: 7.8, lang: "English",
        poster: "little.jpg", imdb: "https://www.imdb.com/title/tt0449059/",
        synopsis: "A quirky, dysfunctional family piles into a VW van on a cross-country road trip to get their daughter to a beauty pageant.",
        ott: "Prime Video", genre: "Comedy, Drama", runtime: "101 min"
      },
      {
        title: "Lost in Translation", year: 2003, rating: 7.7, lang: "English",
        poster: "lost.jpg", imdb: "https://www.imdb.com/title/tt0335266/",
        synopsis: "Two lonely Americans — a fading movie star and a neglected newlywed — form a tender, platonic bond in Tokyo.",
        ott: "MUBI, Apple TV+", genre: "Drama, Romance", runtime: "102 min"
      }
    ],
    music: [
      {
        title: "Weightless", artist: "Marconi Union", year: 2011,
        cover: "weight.jpg", link: "https://open.spotify.com/track/6kkwzB6hXLIONkEk9JciA6",
        album: "Weightless", genre: "Ambient",
        synopsis: "Scientifically designed with sound therapists to reduce anxiety, this ambient track is considered one of the most relaxing songs ever made."
      },
      {
        title: "Holocene", artist: "Bon Iver", year: 2011,
        cover: "holo.jpg", link: "https://open.spotify.com/track/35KiiILklyeRkzF3u8aH1S",
        album: "Bon Iver, Bon Iver", genre: "Indie Folk",
        synopsis: "A breathtaking, introspective piece evoking vast open landscapes and quiet self-reflection with shimmering guitar and falsetto vocals."
      },
      {
        title: "River Flows in You", artist: "Yiruma", year: 2001,
        cover: "river.jpg", link: "https://open.spotify.com/track/3XVBdLihbNbxUwZosxcGuJ",
        album: "First Love", genre: "Classical, New Age",
        synopsis: "A serene, beloved piano piece that flows effortlessly and evokes feelings of peace, calm, and gentle emotion."
      },
      {
        title: "Ocean Eyes", artist: "Billie Eilish", year: 2016,
        cover: "ocean.jpg", link: "https://open.spotify.com/track/7hDVYcQq6MxkdJGweuCtl9",
        album: "dont smile at me", genre: "Indie Pop",
        synopsis: "The ethereal debut track that introduced Billie Eilish to the world — soft, dreamy, and utterly captivating."
      },
      {
        title: "Banana Pancakes", artist: "Jack Johnson", year: 2005,
        cover: "banana.jpg", link: "https://open.spotify.com/track/451GvHwY99NKV4zdKPRWmv",
        album: "In Between Dreams", genre: "Acoustic Pop",
        synopsis: "A breezy, acoustic gem about a lazy rainy day spent indoors with someone you love — the musical definition of cozy."
      },
      {
        title: "Budapest", artist: "George Ezra", year: 2014,
        cover: "budapest.jpg", link: "https://open.spotify.com/track/1KxwZYyzWNyZSRyErj2ojT",
        album: "Wanted on Voyage", genre: "Indie Pop, Folk",
        synopsis: "A warm, feel-good track about giving up everything you own for the person you love, with an irresistibly laid-back melody."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 😱 SCARED
  // ─────────────────────────────────────────────
  scared: {
    movies: [
      {
        title: "The Conjuring", year: 2013, rating: 7.5, lang: "English",
        poster: "conj.jpg", imdb: "https://www.imdb.com/title/tt1457767/",
        synopsis: "Paranormal investigators Ed and Lorraine Warren help a family terrorised by a dark presence in their Rhode Island farmhouse.",
        ott: "Prime Video, HBO Max", genre: "Horror, Thriller", runtime: "112 min"
      },
      {
        title: "The Shining", year: 1980, rating: 8.4, lang: "English",
        poster: "shine.jpg", imdb: "https://www.imdb.com/title/tt0081505/",
        synopsis: "A writer and his family spend the winter as caretakers of an isolated hotel, where supernatural forces drive him to madness.",
        ott: "Netflix, HBO Max", genre: "Horror, Drama, Psychological", runtime: "146 min"
      },
      {
        title: "Get Out", year: 2017, rating: 7.7, lang: "English",
        poster: "getout.jpg", imdb: "https://www.imdb.com/title/tt5052448/",
        synopsis: "A Black man visits his white girlfriend's parents for a weekend getaway and discovers something far more sinister beneath the surface.",
        ott: "Prime Video", genre: "Horror, Mystery, Thriller", runtime: "104 min"
      },
      {
        title: "Hereditary", year: 2018, rating: 7.3, lang: "English",
        poster: "hered.jpg", imdb: "https://www.imdb.com/title/tt7784604/",
        synopsis: "After their secretive grandmother dies, a family unravels disturbing and terrifying secrets about their ancestry.",
        ott: "Prime Video, Paramount+", genre: "Horror, Drama, Mystery", runtime: "127 min"
      },
      {
        title: "A Quiet Place", year: 2018, rating: 7.5, lang: "English",
        poster: "quiet.jpg", imdb: "https://www.imdb.com/title/tt6644200/",
        synopsis: "A family struggles to survive in a post-apocalyptic world inhabited by blind monsters with an ultra-sensitive sense of hearing.",
        ott: "Prime Video, Paramount+", genre: "Horror, Sci-Fi, Drama", runtime: "90 min"
      },
      {
        title: "It", year: 2017, rating: 7.3, lang: "English",
        poster: "it.jpg", imdb: "https://www.imdb.com/title/tt1396484/",
        synopsis: "A group of bullied children in a small Maine town are stalked by a shapeshifting entity that most often takes the form of a terrifying clown.",
        ott: "Netflix, HBO Max", genre: "Horror, Drama, Fantasy", runtime: "135 min"
      }
    ],
    music: [
      {
        title: "Thriller", artist: "Michael Jackson", year: 1982,
        cover: "thriller.jpg", link: "https://open.spotify.com/track/2LlQb7UojhZf8Z9a3tFqM4",
        album: "Thriller", genre: "Pop, Funk, Disco",
        synopsis: "The horror-themed pop masterpiece complete with Vincent Price's chilling narration and an iconic zombie music video."
      },
      {
        title: "bury a friend", artist: "Billie Eilish", year: 2019,
        cover: "bury.jpg", link: "https://open.spotify.com/track/4SSnFejRGlZikf02HLewEF",
        album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?", genre: "Dark Pop, Electronic",
        synopsis: "A bone-chilling track told from the perspective of the monster under your bed, built on jarring industrial sounds."
      },
      {
        title: "Psycho Killer", artist: "Talking Heads", year: 1977,
        cover: "psycho.jpg", link: "https://open.spotify.com/track/2yT8RsCarJA6F3H1Y4i1T5",
        album: "Talking Heads: 77", genre: "New Wave, Art Rock",
        synopsis: "A chillingly calm and danceable song narrated from the perspective of a serial killer — unsettling in the best way."
      },
      {
        title: "Somebody's Watching Me", artist: "Rockwell", year: 1984,
        cover: "watching.jpg", link: "https://open.spotify.com/track/7nQ3VhJ4eF5QpDHK8u2b1P",
        album: "Somebody's Watching Me", genre: "Pop, R&B",
        synopsis: "A paranoid new-wave classic about the creeping feeling of being watched at all times, featuring Michael Jackson on the chorus."
      },
      {
        title: "Demons", artist: "Imagine Dragons", year: 2012,
        cover: "demons.jpg", link: "https://open.spotify.com/track/5qaEfEh1AtSdrdrByCP7qR",
        album: "Night Visions", genre: "Pop Rock, Alternative",
        synopsis: "A powerful confession about the dark thoughts and personal monsters that lurk beneath a cheerful exterior."
      },
      {
        title: "Black Sabbath", artist: "Black Sabbath", year: 1970,
        cover: "black.jpg", link: "https://open.spotify.com/track/3X0FqkEoIY3o6PqF0wz6xE",
        album: "Black Sabbath", genre: "Heavy Metal, Hard Rock",
        synopsis: "The song that gave birth to heavy metal — a dark, thundering ode to supernatural dread inspired by a rainstorm during recording."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // ⚡ ENERGETIC
  // ─────────────────────────────────────────────
  energetic: {
    movies: [
      {
        title: "Whiplash", year: 2014, rating: 8.5, lang: "English",
        poster: "whip.jpg", imdb: "https://www.imdb.com/title/tt2582802/",
        synopsis: "A promising young drummer at a top music conservatory is pushed to his absolute limits by a ruthless, abusive instructor.",
        ott: "Netflix, Prime Video", genre: "Drama, Music", runtime: "107 min"
      },
      {
        title: "The Dark Knight", year: 2008, rating: 9.0, lang: "English",
        poster: "dark.jpg", imdb: "https://www.imdb.com/title/tt0468569/",
        synopsis: "Batman faces his greatest challenge yet when a psychopathic criminal mastermind known as the Joker plunges Gotham City into chaos.",
        ott: "Prime Video, HBO Max", genre: "Action, Crime, Drama", runtime: "152 min"
      },
      {
        title: "Spider-Man: Into the Spider-Verse", year: 2018, rating: 8.4, lang: "English",
        poster: "spidey.jpg", imdb: "https://www.imdb.com/title/tt4633694/",
        synopsis: "Teen Miles Morales becomes Spider-Man and must work with alternate universe versions of the hero to save reality.",
        ott: "Netflix", genre: "Animation, Action, Adventure", runtime: "117 min"
      },
      {
        title: "John Wick", year: 2014, rating: 7.4, lang: "English",
        poster: "jwick.jpg", imdb: "https://www.imdb.com/title/tt2911666/",
        synopsis: "A retired hitman seeks vengeance after a group of gangsters kill his puppy — a gift from his recently deceased wife.",
        ott: "Netflix, Prime Video", genre: "Action, Thriller", runtime: "101 min"
      },
      {
        title: "Top Gun: Maverick", year: 2022, rating: 8.3, lang: "English",
        poster: "topgun.jpg", imdb: "https://www.imdb.com/title/tt1745960/",
        synopsis: "After 30 years, Maverick returns to train Top Gun graduates for a deadly impossible mission, confronting his past in the process.",
        ott: "Prime Video, Paramount+", genre: "Action, Drama", runtime: "130 min"
      },
      {
        title: "Inception", year: 2010, rating: 8.8, lang: "English",
        poster: "incept.jpg", imdb: "https://www.imdb.com/title/tt1375666/",
        synopsis: "A skilled thief who steals secrets from dreams is offered a chance to have his record erased if he can plant an idea instead.",
        ott: "Netflix, Prime Video", genre: "Action, Sci-Fi, Thriller", runtime: "148 min"
      }
    ],
    music: [
      {
        title: "Blinding Lights", artist: "The Weeknd", year: 2019,
        cover: "blind.jpg", link: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
        album: "After Hours", genre: "Synth-pop, R&B",
        synopsis: "An 80s-inspired, neon-drenched synth-pop banger about desperate, urgent love — one of the best-charting songs in Billboard history."
      },
      {
        title: "Lose Yourself", artist: "Eminem", year: 2002,
        cover: "lose.jpg", link: "https://open.spotify.com/track/5Z01UMMf7V1o0MzF86s6WJ",
        album: "8 Mile (Soundtrack)", genre: "Hip-Hop, Rap",
        synopsis: "The Oscar-winning anthem from 8 Mile — a ferocious, motivational rap about seizing your one shot before it disappears."
      },
      {
        title: "HUMBLE.", artist: "Kendrick Lamar", year: 2017,
        cover: "hum.jpg", link: "https://open.spotify.com/track/7KXjTSCq5nL1LoYtL7XAwS",
        album: "DAMN.", genre: "Hip-Hop, Rap",
        synopsis: "A stark, minimalist banger from Kendrick's Pulitzer Prize-winning album — commanding, confident, and impossible to ignore."
      },
      {
        title: "Stronger", artist: "Kanye West", year: 2007,
        cover: "strong.jpg", link: "https://open.spotify.com/track/0gplL1WMoJ6iYaPgMCL0gX",
        album: "Graduation", genre: "Hip-Hop, Electronic",
        synopsis: "Built on a Daft Punk sample, this relentless hip-hop anthem turned 'what doesn't kill you makes you stronger' into a cultural mantra."
      },
      {
        title: "Levitating", artist: "Dua Lipa", year: 2020,
        cover: "lev.jpg", link: "https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9",
        album: "Future Nostalgia", genre: "Disco Pop, Dance",
        synopsis: "A glittery, disco-infused pop rocket that became one of the biggest and most irresistible dance tracks of the 2020s."
      },
      {
        title: "Run The World (Girls)", artist: "Beyoncé", year: 2011,
        cover: "run.jpg", link: "https://open.spotify.com/track/7CwWWNMUB2RjMSG0hY0bll",
        album: "4", genre: "Dance Pop, R&B",
        synopsis: "A ferocious, empowering anthem driven by an African percussion sample — Beyoncé at her most electrifying and commanding."
      }
    ]
  }

};
