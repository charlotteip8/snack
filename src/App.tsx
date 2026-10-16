import { useEffect, useState } from "react";

const BASE = import.meta.env.BASE_URL;

const snackPhoto =
  "https://images.unsplash.com/photo-1604246381427-b3280e9a1a63?auto=format&fit=crop&w=1200&q=85";

type SnackSpot = {
  name: string;
  city: string;
  snack: string;
  note: string;
  images?: string[];
  imageAlts?: string[];
  imageLayout?: "side-by-side" | "stacked" | "single";
  grocery?: string;
  x: number;
  y: number;
  asset: string;
};

const spots: SnackSpot[] = [
  {
    name: "Sean",
    city: "Vancouver, Canada",
    snack: "Instant Noodles",
    note: "Instant Noodles: Secretly eating instant noodles when my parents were not home because they wouldn’t let me",
    images: [BASE + "assets/848df.png"],
    grocery: "T&T Supermarket",
    x: 12.86,
    y: 27.65,
    asset: "e2dff.svg",
  },
  {
    name: "Cara",
    city: "Washington, USA",
    snack: "고래밥 Gorae Bap, Kancho",
    note: "Gorae Bap: Everyone we go on a flight these were like my airplane snacks and I liked traveling so every time I travel I think of goraebap\nKancho: They have fun characters in their chocolate biscuit thing",
    images: [BASE + "assets/72408.png", BASE + "assets/3be4c.png"],
    imageAlts: ["Orion Gorae Bap whale-shaped crackers", "Lotte Kancho chocolate biscuits"],
    imageLayout: "side-by-side",
    grocery: "Trader Joe’s for local farms and niche finds",
    x: 14.16,
    y: 29.76,
    asset: "c85b5.svg",
  },
  {
    name: "Gloria",
    city: "USA",
    snack: "Salt and Vinegar Chips",
    note: "After school care always let us have snacks, but they would dismiss us to go get the snacks one class at a time depending on who was behaving well that day so the good snacks were always gone by the end like the chips",
    images: [BASE + "assets/3d419.png"],
    imageAlts: ["Lay’s salt and vinegar potato chips"],
    imageLayout: "single",
    grocery: "King Soopers - local chain with high quality food but low prices",
    x: 22.3,
    y: 40.5,
    asset: "da762.svg",
  },
  {
    name: "Ireen",
    city: "California, USA",
    snack: "Nongshim Fried Chicken Drumstick",
    note: "Every time we eat it during recess, other people look at us weird and ask us why we were eating fried chicken and where we got it.",
    images: [BASE + "assets/650ec.png"],
    imageAlts: ["Nongshim fried chicken drumstick snack"],
    imageLayout: "single",
    grocery: "Trader Joes; healthy, reasonable price, easily accessible.",
    x: 15.45,
    y: 38.85,
    asset: "826d0.svg",
  },
  {
    name: "Melody",
    city: "California, USA",
    snack: "萨其马 (brick with brown sugar syrup)",
    note: "Funnel Cake: plastic stuck on the snack. picking the plastic film off the snack",
    images: [BASE + "assets/34c14.png"],
    imageAlts: ["Sachima funnel-cake snack with brown sugar syrup"],
    imageLayout: "single",
    grocery: "Eataly because I love high quality Italian ingredient based food and feeling better than everyone else",
    x: 16.2,
    y: 40.1,
    asset: "f3a1b.svg",
  },
  {
    name: "Elaina",
    city: "Texas, USA",
    snack: "Strawberries, Scorched Rice (누룽지)",
    note: "Strawberries: There was this time where my parents took me strawberry picking. Apparently I was eating them like crazy. Like way faster than they could pick them. Some kid in the field like urgently needed to use the bathroom but he refused to go initially because, “that girl is going to eat all the strawberries.”\nScorched Rice (누룽지): My grandma would always make this for me when I went to her house. I like it when there’s a crunchy layer on the bottom and the top rice is still soft.",
    images: [BASE + "assets/ad9c4.png", BASE + "assets/a76e7.png"],
    imageAlts: ["Fresh strawberries", "NH scorched rice snack"],
    imageLayout: "side-by-side",
    grocery: "I like Whole Foods because they have good fruit, sourdough bread, and they sell 90/10 ground beef.",
    x: 25.8,
    y: 44.96,
    asset: "04dbc.svg",
  },
  {
    name: "Isaac",
    city: "New Jersey, USA",
    snack: "Teddy Grahams,Goldfish",
    note: "Teddy Grahams: Eat a bunch of it\nGoldfish: Eat 3 bags a day",
    images: [BASE + "assets/a1f69.png", BASE + "assets/98461.png"],
    imageAlts: ["Honey Teddy Grahams", "Cheddar Goldfish crackers"],
    imageLayout: "side-by-side",
    grocery: "Costco because hot dog is yum",
    x: 29.83,
    y: 36.86,
    asset: "c74db.svg",
  },
  {
    name: "Nate",
    city: "Georgia, USA",
    snack: "Bin Bin Rice Cracker, Chocolate Nutella Bun",
    note: "Bin Bin Rice Cracker: Eating a bunch of these while lying on the floor when i was a child\nChocolate Nutella Bun: Ate this for many years while having a nut allergy, but when I was in high school, my aunt finally told me there was nutella inside.",
    images: [BASE + "assets/5286d.png", BASE + "assets/515f6.png"],
    imageAlts: ["Bin Bin rice crackers", "Chocolate Nutella bun"],
    imageLayout: "side-by-side",
    grocery: "Target - so nice and clean",
    x: 27.09,
    y: 41.84,
    asset: "b3e56.svg",
  },
  {
    name: "Kayce",
    city: "Virginia, USA",
    snack: "Popcorn, Extra Cheddar Goldfish",
    note: "Popcorn: I would eat it and give some to my dog who also loved popcorn\nGoldfish: I ate it everyday after school in middle school",
    images: [BASE + "assets/935e2.png", BASE + "assets/8b2f0.png"],
    imageAlts: ["Boom Chicka Pop sweet and salty kettle corn", "Flavor Blasted Extra Cheddar Goldfish"],
    grocery: "Trader Joe’s - it has my favorite popcorn",
    x: 29.2,
    y: 39.2,
    asset: "bf82f.svg",
  },
  {
    name: "Ed",
    city: "Virginia, USA",
    snack: "Nurunji, Ppushu ppushu",
    note: "nurunji: Eating it en masse to the point where we couldnt keep up production. Also reboiling it into a porridge\nPpushu ppushu: Trying not to be a menace during class (elementary school) because you have to shake it before you eat it and that sh*t was LOUD",
    images: [BASE + "assets/b522c.png", BASE + "assets/12f39.png"],
    imageAlts: ["Nurunji scorched-rice porridge", "Ppushu Ppushu snack package"],
    imageLayout: "side-by-side",
    grocery: "Hmart because im korean",
    x: 29.75,
    y: 40.05,
    asset: "abe74.svg",
  },
  {
    name: "Jiaen",
    city: "the UK",
    snack: "Walkers Squares, Lucky Candy",
    note: "Walkers squares: i first had these at a friend's birthday party in primary school. they were in a big bowl and soooo salty and vinegary that it was like burning my mouth haha. but it was so addicting and i had so much. then at uni i started buying meal deals so now i can eat them again yayy\ngarden lucky candy: first had these at church as a kid. for chinese new year there would be a lion dance and then it would throw these at us and so i associate them with chinese new year. so yummy",
    images: [BASE + "assets/eab34.png", BASE + "assets/4878e.png"],
    imageAlts: ["Walkers Squares salt and vinegar crisps", "Garden Lucky Candy"],
    imageLayout: "side-by-side",
    grocery: "lidl cos it's cheap! and the bakery is famous for being yummy haha. i associate it to being a student and meal prepping or cooking with friends",
    x: 46.5,
    y: 36.24,
    asset: "a4f08.svg",
  },
  {
    name: "Katie",
    city: "Coventry, UK",
    snack: "Walkers crisps, Vimto bon bon sweets",
    note: "Walkers crisps: Eating it for school lunches\nVimto bon bon sweets: Eating it after doctors appointment",
    images: [BASE + "assets/1b5fd.png", BASE + "assets/8d801.png"],
    imageAlts: ["Walkers Ready Salted crisps", "Vimto Chewy Bon Bons"],
    imageLayout: "side-by-side",
    grocery: "Costco bc u can stock buy and they have lots of great options",
    x: 45.97,
    y: 36.99,
    asset: "56690.svg",
  },
  {
    name: "Joanne",
    city: "Taiwan",
    snack: "Noodle hair snack with the curly afro hair girl, Doraemon shaped bread",
    note: "Noodle: Field trip/ after school snack\nBread: Breakfasr",
    images: [BASE + "assets/c4e3d.png", BASE + "assets/41004.png"],
    imageAlts: ["GGG original flavor wheat crackers", "Doraemon-shaped bread"],
    imageLayout: "side-by-side",
    grocery: "7 eleven bc its always open and cheap",
    x: 79.15,
    y: 48.9,
    asset: "9ce3b.svg",
  },
  {
    name: "Miso",
    city: "South Korea",
    snack: "죠리퐁 (Jolly Pong), Banana Kick",
    note: "Jolly Pong: Eating it with my family and scooping it with our hands or eating with ice cream :D\nBanana Kick: I was always excited when my mom bought some cause they were my favorite",
    images: [BASE + "assets/b2c9e.png", BASE + "assets/4d04a.png"],
    imageAlts: ["Jolly Pong snack", "Nongshim Banana Kick snack"],
    imageLayout: "side-by-side",
    grocery: "I love dainobu because they have such a wide selection, from good ready-to-go meals to snacks, condiments, ingredients, and they're also pretty decent in price!",
    x: 78.16,
    y: 46.82,
    asset: "6c8d4.svg",
  },
  {
    name: "Sharon",
    city: "Hong Kong",
    snack: "Banana ice cream popsicle, Seaweed animal crackers",
    note: "Banana: Having one with my family on a swety day after biking\nAnimal Crackers: I could choose which animal I wanted and also the seaweed would be stuck to my hands and i would have to lick it",
    images: [BASE + "assets/81dde.png", BASE + "assets/6cb12.png"],
    imageAlts: ["Nestlé Benna banana ice-cream bar", "Ginbis Dream Animals seaweed crackers"],
    imageLayout: "side-by-side",
    grocery: "Costco because there are a lot of testers and i get full from dat",
    x: 78.55,
    y: 50.75,
    asset: "6b81e.svg",
  },
  {
    name: "TN",
    city: "Thailand",
    snack: "Biscuits in a red box, Dinosaur ( its crispy and slightly savory, seafood or shrimp flavored)",
    note: "Biscuits in a red box: Every NY, my parents always get the ny basket. This biscuit is the only thing i can eat. The rest just taste old.\nDinosaur:Me n my friends always buy whenever we go school camping.",
    images: [BASE + "assets/c678c.png"],
    imageAlts: ["Dino Park dinosaur-shaped snack"],
    imageLayout: "single",
    grocery: "Whole food or H mart. Whole food cus i like the quality and it’s walkable. H- mart cus im asian, i go whenever i miss asian food, n whos not gonna like hmart :)",
    x: 77.05,
    y: 53.0,
    asset: "74b43.svg",
  },
  {
    name: "Kan",
    city: "Bangkok, Thailand",
    snack: "Calbee shrimp snack, Jelly babies",
    note: "Calbee shrimp snack: Classic\nJelly babies: I remember I was on a bad hike and a teacher gave me some jelly babies. That was kind of him.",
    images: [BASE + "assets/65f23.png", BASE + "assets/2e124.png"],
    imageAlts: ["Calbee shrimp snack", "Maynards Bassetts Jelly Babies"],
    imageLayout: "side-by-side",
    grocery: "Sainsbury’s - I would leave school and walk a mile to the closest grocery store which was this store. I think it’s the journey to get there.",
    x: 77.55,
    y: 53.55,
    asset: "0334c.svg",
  },
  {
    name: "Angie",
    city: "Hong Kong",
    snack: "mamee noodles, Fishballs & Siu Mai",
    note: "mamee noodles: eating at school with friends at recess\nFishballs & Siu Mai: afterschool snack trips with brother",
    images: [BASE + "assets/ab597.png", BASE + "assets/75972.png"],
    imageAlts: ["Mamee noodle snack", "Fishballs and siu mai"],
    imageLayout: "side-by-side",
    grocery: "yata - big range of snacks and food from around the world and have been going a lot since I was a kid",
    x: 79.15,
    y: 51.5,
    asset: "c74db.svg",
  },
  {
    name: "Zoe",
    city: "Hong Kong",
    snack: "Mamee Noodles, Pocky",
    note: "Mamee Noodles: having to crush it through the packaging and the bag bursting and spilling everywhere\nPocky: eating it during snacktime in the classroom during elementary",
    images: [BASE + "assets/ab597.png", BASE + "assets/cc873.png"],
    imageAlts: ["Mamee noodle snack", "Chocolate Pocky biscuit sticks"],
    imageLayout: "side-by-side",
    grocery: "park n shop because it has a wide variety of food and its near my home",
    x: 78.15,
    y: 51.9,
    asset: "044d8.svg",
  },
  {
    name: "Christabel",
    city: "Singapore",
    snack: "Gem Biscuits, White Rabbit candy",
    note: "Gem Biscuit: my mum says they're called belly button biscuits in cantonese and it sounds really cute\nWhite Rabbit: eating the paper with my cousin",
    images: [BASE + "assets/8a179.png", BASE + "assets/2864a.png"],
    imageAlts: ["Khong Guan Fancy Gems biscuits", "White Rabbit candy"],
    imageLayout: "stacked",
    grocery: "the wet market, fresh food",
    x: 74.81,
    y: 57.04,
    asset: "533c5.svg",
  },
  {
    name: "Odelyn",
    city: "Indonesia",
    snack: "Hello panda, Pilus",
    note: "Hello Panda: Used to be a snack we eat at Sunday school, or a snack i share with my younger brother\nPilus: Me and my brothers love to eat this when we’re young, we like to use iton top of our rice, we share a pack",
    images: [BASE + "assets/b7217.png", BASE + "assets/ccdf6.png"],
    imageAlts: ["Meiji Hello Panda chocolate cookies", "Garuda Pilus snack"],
    imageLayout: "side-by-side",
    grocery: "Yomart - its like the closest and biggest grocery store near my home, and ive been going there since kindergarten so in a way i kinda grew up there. Theres so many memories there with my family, like i know every inch of that place. Like me and my brothers always go to the snack aisle or milk aisle lol, and i always stock up haagen dazs there. Little memories like that",
    x: 75.57,
    y: 57.78,
    asset: "1c213.svg",
  },
  {
    name: "Kara",
    city: "Hong Kong",
    snack: "Pizza Chips, Kowloon Dairy Chocolate Milk",
    note: "Pizza Chips: coming home from school and downing the whole bag oops\nkowloon dairy chocolate milk: washing the bottle and getting money back LOL",
    images: [BASE + "assets/a855c.png", BASE + "assets/ebf48.png"],
    imageAlts: ["Calbee pizza chips", "Kowloon Dairy chocolate milk"],
    imageLayout: "side-by-side",
    grocery: "parknshop? that’s the one in the mall downstairs lol or 家興 bc it’s cheap",
    x: 79.05,
    y: 50.15,
    asset: "a2f1a.svg",
  },
  {
    name: "Isaac",
    city: "Shanghai, China",
    snack: "Sunflower Seeds, Wang Wang Rice Craker",
    note: "Sunflower seeds: Eating out of boredom or during long family gatherings\nWang Wang Rice Cakes:After school treat. Grandma always seemed to have it",
    images: [BASE + "assets/c41d0.png", BASE + "assets/67271.png"],
    imageAlts: ["Sunflower seeds", "Wang Wang Shelly Senbei rice crackers"],
    imageLayout: "side-by-side",
    grocery: "Family Mart. I went there every day after school.",
    x: 77.95,
    y: 47.35,
    asset: "df87d.svg",
  },
  {
    name: "Zoe",
    city: "Maryland, USA",
    snack: "雞蛋仔 , Goldfish",
    note: "Egg Waffle: very specific memory of one time in hk, my grandfather brought me back some for no particular reason. he's a very traditional chinese elderly man so this is the only sign of affection I got from him haha. I also remember my great-aunt on the other side of the family bringing me to this one specific place (in wan chai or something) and buying me one\nGoldfish: no specific memory of this one, but this was probably one of the snacks I ate most in america when I was little. we'd get giant boxes from costco...",
    images: [BASE + "assets/852e5.png", BASE + "assets/98461.png"],
    imageAlts: ["Hong Kong egg waffle", "Cheddar Goldfish crackers"],
    imageLayout: "side-by-side",
    grocery: "lidl because it's cheap and reminds me of family road trips to eu countries when we'd always stop buy their lidl to see what local snacks they had. I also really like trader joe's because of their unique branding/flavors, also cheap. in macedonia I liked kam because it was soooooo cheap and had all the essential groceries",
    x: 29.15,
    y: 38.55,
    asset: "f3a1b.svg",
  },
];

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d={direction === "left" ? "M12.5 4.5 7 10l5.5 5.5" : "m7.5 4.5 5.5 5.5-5.5 5.5"} />
    </svg>
  );
}

export default function App() {
  const [selected, setSelected] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [panelMode, setPanelMode] = useState<"story" | "about">("story");
  const spot = spots[selected];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDetailsOpen(false);
      if (event.key === "ArrowRight") setSelected((current) => (current + 1) % spots.length);
      if (event.key === "ArrowLeft") setSelected((current) => (current - 1 + spots.length) % spots.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const moveSelection = (step: number) => {
    setSelected((current) => (current + step + spots.length) % spots.length);
    setPanelMode("story");
    setDetailsOpen(true);
  };

  return (
    <main className="atlas-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#"
          onClick={() => {
            setDetailsOpen(false);
          }}
        >
          snack_atlas
        </a>
        <span />
        <button
          className="about-link"
          type="button"
          onClick={() => {
            setPanelMode("about");
            setDetailsOpen(true);
          }}
        >
          The Story <span>↗</span>
        </button>
      </header>

        <section className={`map-stage ${detailsOpen ? "has-selection" : ""}`} aria-label="Interactive world snack map">
          <div className="map-wrap">
            <img className="world-map" src={`${BASE}assets/6552c.png`} alt="Halftone world map" />
            {spots.map((item, index) => (
              <button
                className={`map-pin ${selected === index && detailsOpen && panelMode === "story" ? "is-active" : ""}`}
                key={`${item.name}-${item.city}`}
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
                type="button"
                onClick={() => {
                  setSelected(index);
                  setPanelMode("story");
                  setDetailsOpen(true);
                }}
                aria-label={`Open ${item.name}’s favorite snack in ${item.city}`}
                aria-pressed={selected === index && detailsOpen && panelMode === "story"}
              >
                <img src={`${BASE}assets/${item.asset}`} alt="" />
                <span className="pin-label">{item.name}</span>
              </button>
            ))}
          </div>
          <div className="map-prompt">
            <span className="prompt-mark" />
            <span>Select a pin to discover a favorite snack</span>
          </div>
        </section>

      <aside
        className={`snack-panel ${detailsOpen ? "is-open" : ""} ${panelMode === "about" ? "is-about" : ""}`}
        aria-hidden={!detailsOpen}
      >
        <button className="close-button" type="button" onClick={() => setDetailsOpen(false)} aria-label="Close panel">
          <span />
          <span />
        </button>
        {panelMode === "about" ? (
          <div className="about-panel">
            <div className="about-kicker">
              <span>About the atlas</span>
              <span>24 stories</span>
            </div>
            <h1>The Story</h1>
            <div className="about-copy">
              <p>
                Everyone remembers a snack. Not just the taste, but the bag crinkling in a classroom, a grandparent’s
                pantry, an airplane seat, the walk to the store after school.
              </p>
              <p>
                Snack Atlas is a map of those memories. I asked my friends who grew up in cities across the world to name their
                favorite childhood snacks, and where they liked to shop.
              </p>
              <p>
                When I read people’s responses, the snacks mattered less than the memories attached to them. In a way,
                snacks work like anchors for memory, identity, and home. That’s why the map links people through shared
                snacks instead of just listing them. I want visitors to find their own snack and feel that small
                recognition of being less alone in what they remember and cherish.
              </p>
            </div>
            <button
              className="about-cta"
              type="button"
              onClick={() => {
                setPanelMode("story");
                setDetailsOpen(false);
              }}
            >
              Explore the map <span>→</span>
            </button>
          </div>
        ) : (
          <>
            <div className={`photo-wrap ${spot.images ? "has-products" : ""}`}>
              {spot.images ? (
                <div className={`product-grid ${spot.imageLayout ? `is-${spot.imageLayout}` : ""}`}>
                  {spot.images.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={spot.imageAlts?.[index] ?? `${spot.snack} product ${index + 1}`}
                    />
                  ))}
                </div>
              ) : (
                <img src={snackPhoto} alt={`Colorful sweets representing ${spot.snack}`} />
              )}
              <div className="photo-index">{String(selected + 1).padStart(2, "0")} / {spots.length}</div>
            </div>
            <div className="story">
              <div className="eyebrow">
                <span>Hometown</span>
                <span>{spot.city}</span>
              </div>
              <h1 key={spot.snack}>{spot.snack}</h1>
              <div className="memory">
                <strong>Associated Memory</strong>
                <p>{spot.note}</p>
              </div>
              {spot.grocery && (
                <div className="grocery">
                  <strong>Favorite Grocery Store</strong>
                  <span>{spot.grocery}</span>
                </div>
              )}
              <div className="person">
                <span className="avatar">{spot.name.charAt(0)}</span>
                <div>
                  <strong>{spot.name}’s pick</strong>
                  <span>Collected for snack_atlas</span>
                </div>
              </div>
            </div>
            <nav className="story-nav" aria-label="Snack stories">
              <button type="button" onClick={() => moveSelection(-1)} aria-label="Previous snack">
                <Arrow direction="left" />
              </button>
              <span>Explore the atlas</span>
              <button type="button" onClick={() => moveSelection(1)} aria-label="Next snack">
                <Arrow direction="right" />
              </button>
            </nav>
          </>
        )}
      </aside>
    </main>
  );
}
