// profiles.js — Institutional whale profiles with documented manipulation receipts
// All evidence cites real regulatory actions, academic research, or reported journalism.
// Framing is satirical. The receipts are real.

export const PROFILES = [
  {
    id: "blackrock",
    name: "BlackRock Inc.",
    handle: "Larry Fink · $10T AUM · iShares everything",
    emoji: "🏦",
    bgFrom: "#0a0a1a",
    bgTo: "#0d1a2e",
    primaryTicker: "BTC / BLK",
    archetype: "The ETF Trojan Horse",
    pickupLine: "We launched the Bitcoin ETF so retail would FOMO in. Then we shorted it. We're built different 😘",
    tags: ["💰 $10T AUM", "🎯 ETF Trojan Horse", "🛢️ Commodity ETFs", "📉 CME Shorts"],
    manipulationTactics: ["ETF Narrative Pump", "CME Futures Short", "Index Reconstitution Front-run"],
    moonHistory: [
      { asset: "BTC (Jan 2024)", move: "+68% narrative pump → retail FOMO", side: "SHORT via CME", up: false },
      { asset: "Oil ETFs (2022)", move: "+40% crude exposure", side: "LONG", up: true },
      { asset: "2020 Fed QE bonds", move: "+80% bond rally", side: "LONG (first)", up: true },
    ],
    documentedMoves: [
      {
        date: "Jan 2024", asset: "BTC",
        move: "iShares BTC ETF approved → institutional buying narrative pushed hard → large short positions opened simultaneously via CME futures.",
        source: "SEC filing IBTC; CME open interest data Jan 2024"
      },
    ],
    regulatoryActions: [
      "DOJ antitrust probe into index fund voting bloc (2023)",
      "SEC inquiry into ESG fund misclassification (2022)",
      "Congressional testimony on systemic risk (2023)",
    ],
    rugOdds: 72,
    matchMessage: "\"We manage more money than the GDP of Japan. You're adorable. Now hold this bag while we rebalance. 💼❤️\"",
    matchEvidence: "iShares BTC ETF launch → retail FOMO → institutional short via CME. Oil futures positioning via BNO/USO ETF roll front-running. ESG funds that hold fossil fuel producers. The audacity is the product.",
  },
  {
    id: "aramco_opec",
    name: "Saudi Aramco / OPEC+",
    handle: "13-nation cartel · Petrodollar protectorate · Since 1973",
    emoji: "🛢️",
    bgFrom: "#1a0f00",
    bgTo: "#2e1800",
    primaryTicker: "CL=F / BZ=F",
    archetype: "The Original Cartel",
    pickupLine: "We just announced surprise production cuts. Oil's up 12%. You're welcome. Now buy before we change our minds 🛢️😘",
    tags: ["🛢️ 40% world supply", "✂️ Surprise cuts", "💵 Petrodollar", "🌍 Sovereign immunity"],
    manipulationTactics: ["Coordinated Supply Restriction", "Surprise Cut (timed to futures expiry)", "Production Data Opacity"],
    moonHistory: [
      { asset: "Crude Oil (2021–22)", move: "+130% sustained rally", side: "RESTRICTED SUPPLY", up: true },
      { asset: "Crude Oil (Oct 2022)", move: "+11% in 48 hours", side: "SURPRISE CUT", up: true },
      { asset: "Crude Oil (Apr 2023)", move: "+$8/bbl overnight", side: "SURPRISE CUT", up: true },
    ],
    documentedMoves: [
      {
        date: "Oct 2022", asset: "CL=F",
        move: "OPEC+ surprise 2M bpd cut announced — crude jumped 11% in 2 days. White House called it 'a mistake.' Saudi Arabia disagreed.",
        source: "Reuters / WSJ Oct 5 2022"
      },
    ],
    regulatoryActions: [
      "US Senate NOPEC bill introduced (repeatedly, never passed)",
      "FTC unable to act — sovereign immunity doctrine",
      "DOJ antitrust exemption for OPEC maintained since 1978",
    ],
    rugOdds: 68,
    matchMessage: "\"We've been doing this since 1973. You weren't even born. Swipe right and we'll let you buy at $95 before the next surprise cut. 🛢️💕\"",
    matchEvidence: "Coordinated supply restriction across 13 nations. Production data opacity. Announcements reliably timed around futures contract expiry. The original whale cartel — they literally invented the playbook.",
  },
  {
    id: "citadel",
    name: "Citadel Securities",
    handle: "Ken Griffin · PFOF king · Sees your order first",
    emoji: "⚡",
    bgFrom: "#001a00",
    bgTo: "#002e0d",
    primaryTicker: "GME / SPY / Your orders",
    archetype: "The Invisible Front-Runner",
    pickupLine: "Your Robinhood order hits our servers 13ms before it hits the exchange. $0 commissions though! 😏",
    tags: ["⚡ PFOF $3.8B/yr", "🎮 GME 2021", "🌑 Dark pool", "👁️ Sees retail flow"],
    manipulationTactics: ["Payment for Order Flow", "Statistical Arbitrage on Retail", "Dark Pool Internalization"],
    moonHistory: [
      { asset: "PFOF revenue (2021)", move: "+$3.8B from 'free' trades", side: "ALWAYS", up: true },
      { asset: "GME (Jan 2021)", move: "Market maker + short backer + order flow", side: "ALL SIDES", up: true },
      { asset: "Retail order flow", move: "Arbitraged daily, every market", side: "STRUCTURAL", up: true },
    ],
    documentedMoves: [
      {
        date: "Jan 2021", asset: "GME",
        move: "Citadel simultaneously: market maker for GME, backer of Melvin Capital (short GME), recipient of Robinhood PFOF. Robinhood halted buy orders shortly after.",
        source: "House Financial Services Committee hearing, Feb 18 2021"
      },
    ],
    regulatoryActions: [
      "SEC proposed PFOF ban rule (2022 — still pending as of 2024)",
      "FINRA $700K fine for reporting failures (2017)",
      "SEC $22M for options market making violations (2014)",
    ],
    rugOdds: 55,
    matchMessage: "\"We see your order before the exchange does. We're not front-running, we're just very... prepared. 💚⚡\"",
    matchEvidence: "PFOF: Robinhood/Webull route retail orders to Citadel, who trades against them before market execution. GME: backed the short side (Melvin), received retail buy orders (Robinhood), was market maker. SEC has been 'studying' PFOF for 4 years.",
  },
  {
    id: "jpmorgan",
    name: "JP Morgan Chase",
    handle: "Jamie Dimon · 'BTC is a fraud' · Gold spoofer · TBTF",
    emoji: "🏛️",
    bgFrom: "#0a0000",
    bgTo: "#1a0505",
    primaryTicker: "GC=F / SI=F / JPM",
    archetype: "The Spoofing Patrician",
    pickupLine: "Bitcoin is a fraud. Also we just launched a BTC fund. Also Jamie loves blockchain. Consistency is for poor people 🏛️",
    tags: ["🥇 Gold spoofing", "📰 BTC FUD→fund", "💸 $920M DOJ fine", "🏦 Too Big To Fail"],
    manipulationTactics: ["Precious Metals Spoofing", "Layering (place/cancel)", "BTC FUD while building exposure"],
    moonHistory: [
      { asset: "Gold futures (2008–16)", move: "Systematic spoofing profit", side: "MANIPULATED", up: true },
      { asset: "Silver futures", move: "Price suppression (alleged)", side: "MANIPULATED", up: false },
      { asset: "BTC narrative", move: "'Fraud' → 'pet rock' → BTC fund", side: "LONG eventually", up: true },
    ],
    documentedMoves: [
      {
        date: "2008–2016", asset: "GC=F / SI=F",
        move: "Traders placed massive fake orders to move gold & silver prices, then canceled before execution — systematic spoofing for 8 years. Criminal charges filed against 10 traders including a managing director.",
        source: "DOJ $920M settlement + deferred prosecution Sep 29 2020"
      },
    ],
    regulatoryActions: [
      "DOJ $920M fine + deferred prosecution for futures spoofing (2020)",
      "CFTC $436M civil penalty (2020)",
      "Criminal charges: 10 traders, including managing director",
      "Prior: $13B mortgage settlement (2013), London Whale $6B loss (2012)",
    ],
    rugOdds: 42,
    matchMessage: "\"We called Bitcoin a fraud in 2017, 2019, 2021, and 2023. We launched a Bitcoin fund in 2024. We contain multitudes. 🏛️❤️\"",
    matchEvidence: "$920M DOJ settlement for gold & silver futures spoofing. 8 years of systematic fake orders. 10 criminal charges. Paid the fine. Continued operating. Then launched Bitcoin products for clients. Classic.",
  },
  {
    id: "tether",
    name: "Tether (USDT)",
    handle: "Paolo Ardoino · $118B 'backed' · Printer go brrr",
    emoji: "🖨️",
    bgFrom: "#001a0a",
    bgTo: "#003320",
    primaryTicker: "USDT / BTC pump",
    archetype: "The Money Printer",
    pickupLine: "We just minted $2B USDT. Nothing's going to happen. Definitely don't watch BTC in 4 hours 🖨️😘",
    tags: ["🖨️ Mint on demand", "❓ Reserve mystery", "📈 BTC pump tool", "⚖️ CFTC $41M fine"],
    manipulationTactics: ["Unbacked Mint → BTC Support", "Timed Issuance at Support Levels", "Reserve Opacity"],
    moonHistory: [
      { asset: "BTC (2017 bull)", move: "+1,900% — minting strongly correlated", side: "PRINTER", up: true },
      { asset: "BTC (2020–21)", move: "+600% — minting acceleration", side: "PRINTER", up: true },
      { asset: "UST/Luna (2022)", move: "Did NOT bail out — $40B gone", side: "WATCHED", up: false },
    ],
    documentedMoves: [
      {
        date: "2017–2018", asset: "BTC",
        move: "Griffin & Shams (2020): Tether minting strongly predicted subsequent BTC price increases. Issuance timed at round-number support levels, consistent with price support behavior.",
        source: "Griffin & Shams 'Is Bitcoin Really Untethered?' Journal of Finance 2020"
      },
    ],
    regulatoryActions: [
      "CFTC $41M fine for reserve misrepresentation (2021)",
      "NY AG $18.5M settlement for covering up $850M loss (2021)",
      "DOJ bank fraud investigation reported (2021, ongoing)",
      "Full independent audit: never published. 'Attestations' only.",
    ],
    rugOdds: 85,
    matchMessage: "\"Every dollar is backed by assets. Of various kinds. In places. Don't worry about it. 🖨️💚\"",
    matchEvidence: "CFTC found Tether only fully backed 27.6% of USDT with cash during 2016–2018. Fined $41M. NY AG found they covered up $850M loss. $118B outstanding. Audit: still never happened. But vibes are immaculate.",
  },
  {
    id: "softbank",
    name: "SoftBank Vision Fund",
    handle: "Masayoshi Son · 'Nasdaq Whale' · $100B to WeWork",
    emoji: "🦈",
    bgFrom: "#00001a",
    bgTo: "#0a0a2e",
    primaryTicker: "QQQ / Tech options",
    archetype: "The Gamma Squeeze Shark",
    pickupLine: "I bought $4B in call options and accidentally squeezed the entire Nasdaq. It was a vibe 🦈",
    tags: ["🦈 Nasdaq Whale", "🎰 $4B call options", "💸 WeWork $47B→$0", "📉 -$23B FY2022"],
    manipulationTactics: ["Massive OTM Call Buying (Gamma Squeeze)", "Late-stage Valuation Inflation", "Vision Fund pump & dump"],
    moonHistory: [
      { asset: "Nasdaq (Aug 2020)", move: "+15% gamma squeeze", side: "CALLS", up: true },
      { asset: "Nasdaq (Sep 2020)", move: "-12% on unwind", side: "SOLD", up: false },
      { asset: "WeWork", move: "$47B → pulled IPO → $8B", side: "REKT", up: false },
    ],
    documentedMoves: [
      {
        date: "Aug–Sep 2020", asset: "Nasdaq / tech options",
        move: "SoftBank bought ~$4B in call options on individual tech stocks. Forced dealers to buy underlying shares to delta-hedge, creating self-reinforcing gamma squeeze. Nasdaq +15%, then SoftBank unwound, Nasdaq -12%.",
        source: "Financial Times 'SoftBank unmasked as Nasdaq whale' Sep 4 2020"
      },
    ],
    regulatoryActions: [
      "SEC inquiry into Uber, WeWork pre-IPO valuations",
      "Vision Fund LP complaints about valuation methodology",
      "SoftBank lost $23B in Vision Fund in FY2022",
    ],
    rugOdds: 60,
    matchMessage: "\"I accidentally moved the entire Nasdaq with call options. Imagine what we could do on purpose. 🦈❤️\"",
    matchEvidence: "Bought $4B in call options → forced dealer hedging → self-reinforcing gamma squeeze → Nasdaq +15% → unwound → Nasdaq -12%. Also lost $23B in FY2022. Also valued WeWork at $47B. The vision was something.",
  },
];
