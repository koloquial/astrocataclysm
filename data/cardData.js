import Link from "next/link"

export const cardData = [
    {
        id: 1,
        holographic: false,
        set: `Proto`,
        class: `Void`,
        name: `Elder of the Void`,
        rarity: `Divine`,
        type: `Entity`,
        img: '/images/proto/cards/elder-of-the-void.jpeg',
        cost: 10,
        attack: 10,
        defense: 10,
        abilities: [
            {
                name: `Cosmic Manipulation`,
                text: `Alter the battlefield for one turn.`,
                cost: 0
            }
        ],
        article: {
            overview: "The Elder of the Void is a cosmic entity described in numerous mythological and scientific documents, notably within the archives of the Silent Void Observation Protocols (SVOP) and the Codex of Lost Stars. It is classified as an ancient, reality-warping being, existing beyond the confines of time and space. The Elder is a significant figure in galactic folklore and scientific study, often associated with the catastrophic manipulation of cosmic events.",
            discovery_and_origins: "The first documented reference to the Elder of the Void dates back approximately 12,000 cycles, when Dominion scientists detected gravitational anomalies on the outer rim of the Galacton Nebula. According to Document V-1372, the Elder was observed during a routine space-time anomaly scan, where it exhibited abilities to warp space around collapsing star systems. Early Dominion records suggest that the Elder is a remnant of the universe’s creation, potentially a fragment of primordial dark energy that gained sentience over billions of years (SVOP - Silent Entities Report, 34:12).",
            physical_description: "The Elder is often described as an ethereal, almost intangible figure, cloaked in dark matter. Its form is constantly shifting, blending into the cosmic background of stars and nebulae. The Codex of Lost Stars provides one of the most vivid descriptions: 'It wears the cosmos like a shroud, its swirling robes made of the very fabric of space, with eyes glowing like distant stars through the endless void' (Codex of Lost Stars, Chapter 7: The Silent Ones). Its presence distorts reality, and its size and form seem to change with each new account, reinforcing its otherworldly nature.",
            known_abilities: "One of the Elder's most terrifying abilities is Cosmic Manipulation, as detailed in the SVOP files. This power allows it to alter the very fabric of reality for short periods, creating spatial anomalies, collapsing entire star systems, or even freezing time in localized areas (Symbiote Hive-Mind Communications, Log 2264B). Eyewitness accounts from civilizations that have encountered the Elder claim that it can 'shift the stars' and 'bend time to its will,' although these reports are unconfirmed due to the scarcity of survivors.",
            cultural_significance: "Throughout the galaxy, the Elder of the Void holds a near-divine status. In some cultures, it is revered as a god of destruction and creation, while others fear it as a harbinger of cosmic entropy. According to The Codex of Lost Stars, the Elder is considered one of the Silent Ones—beings that predate all known civilizations and have witnessed the rise and fall of countless worlds. The Symbiote Hive has referenced the Elder in its communications, referring to it as 'The Watcher in the Dark' and claiming that even they, a collective of sentient beings, fear the Elder’s influence (Symbiote Overmind Archives, 14:26B).",
            modern_study: "Modern study of the Elder of the Void is extremely limited due to the dangers associated with its presence. The Dominion has classified it as a Divine entity, meaning it ranks among the most powerful known beings in the galaxy. Current research is focused on understanding its manipulation of space-time, as well as its role in the larger cosmic order. Dr. Arkon Vellan, a prominent researcher at the Galacton Institute of Cosmic Entities, wrote in his report: 'The Elder of the Void embodies the very forces that shaped the universe. To study it is to look directly into the mind of creation—and destruction' (Vellan, Arkon. 'Cosmic Entities and the Nature of Reality,' Journal of Astro-Sciences, Vol 45).",
            references: [
                <><Link href='/literature/svop'>Silent Void Observation Protocols (SVOP)</Link>, <Link href='/literature/svop/documents/v-1382'>Document V-1372</Link></>,
                "Codex of Lost Stars, Chapter 7: The Silent Ones, 2281 edition",
                "Symbiote Hive-Mind Communications, Log 2264B, Central Symbiote Archives",
                "Vellan, Arkon. 'Cosmic Entities and the Nature of Reality,' Journal of Astro-Sciences, Vol 45, 2023"
            ]
        },
    },
]
    
