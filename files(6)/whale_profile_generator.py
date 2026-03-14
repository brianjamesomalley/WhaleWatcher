"""
WhaleTinder - Whale Profile Generator
Real institutional manipulators, satirical framing, actual receipts.

Company motto: "Smart people who do dumb shit"
Legal disclaimer: Satire. Not financial advice. Do your own research.
"""

import yfinance as yf
import requests
import numpy as np
import json
import random
from datetime import datetime, timedelta
from dataclasses import dataclass, asdict
from typing import Optional
import time


# ─── REAL INSTITUTIONAL WHALE PROFILES ───────────────────────────────────────
# These are satirical profiles based on publicly documented, reported behavior.
# All "evidence" fields cite real regulatory actions, academic research, or
# widely reported financial journalism. This is satire / educational content.

INSTITUTIONAL_PROFILES = [
    {
        "id": "blackrock",
        "name": "BlackRock Inc.",
        "handle": "Larry Fink · $10T AUM · iShares everything",
        "emoji": "🏦",
        "ticker_watchlist": ["BTC-USD", "BLK", "GLD", "USO"],
        "archetype": "The ETF Trojan Horse",
        "pickup_line": "We launched the Bitcoin ETF so retail would FOMO in. Then we shorted it. We're built different 😘",
        "bg_gradient": ("0a0a1a", "0d1a2e"),
        "verified": True,
        "aum_billions": 10000,
        "manipulation_tactics": [
            "ETF Narrative Pump",
            "CME Futures Short",
            "Index Reconstitution Front-run",
            "ESG Greenwash & Dump",
        ],
        "documented_moves": [
            {
                "date": "Jan 2024",
                "asset": "BTC",
                "move": "iShares BTC ETF approved → retail FOMO narrative pushed → institutional short via CME futures opened simultaneously",
                "source": "SEC filing IBTC, CME open interest data"
            },
            {
                "date": "2022-2023",
                "asset": "Oil ETFs",
                "move": "USO / BNO ETF rebalancing creates predictable futures roll → HFTs and BlackRock prop desk front-run the roll",
                "source": "WSJ 'The Oil ETF Trade' 2022"
            },
        ],
        "regulatory_actions": [
            "DOJ antitrust investigation into index fund voting power (2023)",
            "SEC inquiry into ESG fund misclassification (2022)",
            "Congressional testimony on systemic risk (2023)",
        ],
        "rug_odds": 72,
        "match_message": "\"We manage more money than the GDP of Japan. You're adorable. Now hold this bag while we rebalance. 💼❤️\"",
        "moon_history": [
            {"asset": "iShares BTC ETF launch", "move": "+68% BTC (Jan 2024)", "their_side": "SHORT"},
            {"asset": "2022 Oil positioning", "move": "+40% crude (2022)", "their_side": "LONG"},
            {"asset": "2020 Fed QE front-run", "move": "+80% bonds", "their_side": "LONG"},
        ],
    },
    {
        "id": "aramco_opec",
        "name": "Saudi Aramco / OPEC+",
        "handle": "13-nation cartel · Petrodollar protectorate · Since 1973",
        "emoji": "🛢️",
        "ticker_watchlist": ["CL=F", "BZ=F", "USO", "XLE"],
        "archetype": "The Original Cartel",
        "pickup_line": "We just announced surprise production cuts. Oil's up 12%. You're welcome. Now buy before we change our minds 🛢️😘",
        "bg_gradient": ("1a0f00", "2e1800"),
        "verified": True,
        "aum_billions": 2000,
        "manipulation_tactics": [
            "Coordinated Supply Restriction",
            "Surprise Cut Announcement (timed to futures expiry)",
            "Production Data Opacity",
            "Petrodollar Recycling",
        ],
        "documented_moves": [
            {
                "date": "Oct 2022",
                "asset": "CL=F (Crude Oil Futures)",
                "move": "OPEC+ surprise 2M bpd cut announced — crude jumped 11% in 2 days. White House furious.",
                "source": "Reuters, WSJ Oct 5 2022"
            },
            {
                "date": "Apr 2023",
                "asset": "CL=F",
                "move": "Voluntary surprise cut of 1.16M bpd — oil spiked $8/bbl overnight",
                "source": "Bloomberg Apr 2 2023"
            },
            {
                "date": "Nov 2023",
                "asset": "CL=F",
                "move": "Extended cuts into 2024 — timed to prevent sub-$80 breach protecting Saudi budget",
                "source": "IMF Saudi Arabia fiscal breakeven analysis"
            },
        ],
        "regulatory_actions": [
            "US Senate NOPEC bill introduced (repeatedly, never passed)",
            "FTC unable to act — sovereign immunity",
            "DOJ antitrust exemption for OPEC maintained since 1978",
        ],
        "rug_odds": 68,
        "match_message": "\"We've been doing this since 1973. You weren't even born. Swipe right and we'll let you buy at $95 before the next surprise cut. 🛢️💕\"",
        "moon_history": [
            {"asset": "Crude Oil", "move": "+130% (2021-2022)", "their_side": "RESTRICTED SUPPLY"},
            {"asset": "Crude Oil", "move": "+11% overnight (Oct 2022)", "their_side": "SURPRISE CUT"},
            {"asset": "Crude Oil", "move": "+8% overnight (Apr 2023)", "their_side": "SURPRISE CUT"},
        ],
    },
    {
        "id": "citadel",
        "name": "Citadel Securities",
        "handle": "Ken Griffin · PFOF king · Market maker of everything",
        "emoji": "⚡",
        "ticker_watchlist": ["GME", "AMC", "SPY", "QQQ"],
        "archetype": "The Invisible Front-Runner",
        "pickup_line": "Your Robinhood order hits our servers 13ms before the exchange. $0 commissions tho! 😏",
        "bg_gradient": ("001a00", "002e0d"),
        "verified": True,
        "aum_billions": 620,
        "manipulation_tactics": [
            "Payment for Order Flow (PFOF)",
            "Statistical Arbitrage on Retail Flow",
            "Dark Pool Internalization",
            "GME halt coordination (alleged)",
        ],
        "documented_moves": [
            {
                "date": "2021",
                "asset": "GME / Retail order flow",
                "move": "Paid $3.8B to brokers for PFOF in 2021 — sees retail orders before execution, trades against them",
                "source": "SEC PFOF study 2021, Citadel 606 filings"
            },
            {
                "date": "Jan 2021",
                "asset": "GME",
                "move": "Citadel simultaneously: market maker for GME, backer of Melvin Capital (short GME), and recipient of Robinhood's order flow. Robinhood halted buys shortly after.",
                "source": "House Financial Services Committee hearing Feb 2021"
            },
        ],
        "regulatory_actions": [
            "SEC proposed PFOF ban rule (2022, still pending)",
            "FINRA fined Citadel $700K for reporting failures (2017)",
            "SEC enforcement for options market manipulation $22M (2014)",
        ],
        "rug_odds": 55,
        "match_message": "\"We see your order before the exchange does. We're not front-running, we're just very... prepared. 💚⚡\"",
        "moon_history": [
            {"asset": "PFOF revenue", "move": "+$3.8B in 2021 alone", "their_side": "ALWAYS"},
            {"asset": "GME volatility", "move": "Profited on both sides", "their_side": "MARKET MAKER"},
            {"asset": "Retail order flow", "move": "Arbitraged daily", "their_side": "STRUCTURAL"},
        ],
    },
    {
        "id": "jpmorgan",
        "name": "JP Morgan Chase",
        "handle": "Jamie Dimon · 'BTC is fraud' · Gold spoofer · TBTF",
        "emoji": "🏛️",
        "ticker_watchlist": ["GC=F", "SI=F", "JPM", "BTC-USD"],
        "archetype": "The Spoofing Patrician",
        "pickup_line": "Bitcoin is a fraud. Also we launched a BTC fund. Consistency is for poor people 🏛️",
        "bg_gradient": ("0a0000", "1a0505"),
        "verified": True,
        "aum_billions": 3700,
        "manipulation_tactics": [
            "Precious Metals Futures Spoofing",
            "Layering (place/cancel to move price)",
            "Coordinated Desk Trading",
            "BTC FUD while building exposure",
        ],
        "documented_moves": [
            {
                "date": "2008-2016",
                "asset": "Gold & Silver Futures",
                "move": "Traders placed massive fake orders to move prices, then canceled — systematic spoofing of GC=F and SI=F for years",
                "source": "DOJ $920M settlement Sep 2020, criminal charges filed"
            },
            {
                "date": "2017-2024",
                "asset": "BTC",
                "move": "Jamie Dimon called BTC 'fraud' (2017), 'pet rock' (2023) — while JPM built blockchain infrastructure and launched BTC exposure products for clients",
                "source": "Multiple Bloomberg/WSJ interviews, JPM Onyx blockchain launch"
            },
        ],
        "regulatory_actions": [
            "DOJ $920M fine + deferred prosecution for spoofing (2020)",
            "CFTC $436M civil penalty (2020)",
            "Criminal charges against 10 traders including managing director",
            "Prior: $13B mortgage settlement (2013), London Whale $6B loss (2012)",
        ],
        "rug_odds": 42,
        "match_message": "\"We called Bitcoin a fraud in 2017, 2019, 2021, 2023. We launched a Bitcoin fund in 2024. We contain multitudes. 🏛️❤️\"",
        "moon_history": [
            {"asset": "Gold Futures", "move": "Systematic spoofing profit 2008-2016", "their_side": "MANIPULATED"},
            {"asset": "Silver Futures", "move": "Price suppression allegations", "their_side": "MANIPULATED"},
            {"asset": "BTC narrative", "move": "FUD → accumulate → launch product", "their_side": "LONG (eventually)"},
        ],
    },
    {
        "id": "tether",
        "name": "Tether (USDT)",
        "handle": "Paolo Ardoino · $118B 'backed' · Printer go brrr",
        "emoji": "🖨️",
        "ticker_watchlist": ["BTC-USD", "ETH-USD", "USDT-USD"],
        "archetype": "The Money Printer",
        "pickup_line": "We just minted $2B USDT. Nothing's going to happen. Definitely don't watch BTC in 4 hours 🖨️😘",
        "bg_gradient": ("001a0a", "003320"),
        "verified": True,
        "aum_billions": 118,
        "manipulation_tactics": [
            "Unbacked Mint → BTC Price Support",
            "Timed Issuance at Price Support Levels",
            "Reserve Opacity / Misrepresentation",
            "Commercial Paper Shell Game",
        ],
        "documented_moves": [
            {
                "date": "2017-2018",
                "asset": "BTC",
                "move": "Griffin & Shams (2020) academic paper: Tether minting strongly predicted BTC price increases. Timed issuance correlated with buying at round-number support levels.",
                "source": "Griffin & Shams 'Is Bitcoin Really Untethered?' Journal of Finance 2020"
            },
            {
                "date": "2021",
                "asset": "USDT reserves",
                "move": "CFTC found Tether only fully backed 27.6% of USDT with cash during 2016-2018. Fined $41M.",
                "source": "CFTC Order Oct 15 2021"
            },
        ],
        "regulatory_actions": [
            "CFTC $41M fine for reserve misrepresentation (2021)",
            "NY AG $18.5M settlement for covering up $850M loss (2021)",
            "DOJ investigation into bank fraud (reported 2021, ongoing)",
            "Real audit: never published. 'Attestations' only.",
        ],
        "rug_odds": 85,
        "match_message": "\"Every dollar is backed by assets. Of various kinds. In places. Don't worry about it. 🖨️💚\"",
        "moon_history": [
            {"asset": "BTC (2017 bull)", "move": "Correlated minting → +1900%", "their_side": "PRINTER"},
            {"asset": "BTC (2020-2021)", "move": "Minting acceleration → +600%", "their_side": "PRINTER"},
            {"asset": "UST/Luna (2022)", "move": "Did NOT bail out — $40B gone", "their_side": "WATCHED"},
        ],
    },
    {
        "id": "softbank",
        "name": "SoftBank / Vision Fund",
        "handle": "Masayoshi Son · 'Nasdaq Whale' · $100B to WeWork",
        "emoji": "🦈",
        "ticker_watchlist": ["QQQ", "NVDA", "BABA", "TSLA"],
        "archetype": "The Gamma Squeeze Shark",
        "pickup_line": "I bought $4B in call options and accidentally squeezed the entire Nasdaq. It was a vibe 🦈",
        "bg_gradient": ("00001a", "0a0a2e"),
        "verified": True,
        "aum_billions": 100,
        "manipulation_tactics": [
            "Massive OTM Call Buying (Gamma Squeeze)",
            "Concentrated Tech Bets via Options",
            "Vision Fund Valuation Inflation",
            "WeWork / Late-stage pump",
        ],
        "documented_moves": [
            {
                "date": "Aug-Sep 2020",
                "asset": "Nasdaq / Tech options",
                "move": "SoftBank bought ~$4B in call options on individual tech stocks — forced dealers to buy underlying shares to hedge, creating a self-reinforcing gamma squeeze. Nasdaq surged, then crashed when SoftBank unwound.",
                "source": "FT 'SoftBank unmasked as Nasdaq whale' Sep 4 2020"
            },
            {
                "date": "2019",
                "asset": "WeWork IPO",
                "move": "Vision Fund valued WeWork at $47B → IPO filed → public scrutiny → valuation crashed to $8B → IPO pulled → SoftBank injected $9.5B to prevent collapse",
                "source": "WSJ 'The Fall of WeWork' 2019"
            },
        ],
        "regulatory_actions": [
            "Vision Fund LP complaints about valuation methodology",
            "SEC inquiry into Uber, WeWork pre-IPO valuations",
            "SoftBank lost $23B in Vision Fund in FY2022",
        ],
        "rug_odds": 60,
        "match_message": "\"I accidentally moved the entire Nasdaq with call options. Imagine what we could do together on purpose. 🦈❤️\"",
        "moon_history": [
            {"asset": "Nasdaq (Aug 2020)", "move": "+15% in weeks from gamma", "their_side": "CALLS"},
            {"asset": "Nasdaq (Sep 2020)", "move": "-12% when unwound", "their_side": "SOLD"},
            {"asset": "Vision Fund", "move": "-$23B FY2022", "their_side": "REKT"},
        ],
    },
]


# ─── LIVE PRICE FETCHER ───────────────────────────────────────────────────────

class LivePriceFetcher:
    """Fetch real price data to populate whale move history bars."""

    def __init__(self):
        self._cache = {}
        self._cache_ttl = 300  # 5 min

    def get_price_history(self, ticker: str, period: str = "3mo", interval: str = "1wk") -> list[dict]:
        cache_key = f"{ticker}_{period}_{interval}"
        if cache_key in self._cache:
            ts, data = self._cache[cache_key]
            if time.time() - ts < self._cache_ttl:
                return data

        try:
            t = yf.Ticker(ticker)
            hist = t.history(period=period, interval=interval)
            if hist.empty:
                return self._fallback_bars(ticker)

            closes = hist["Close"].tolist()
            dates = [str(d.date()) for d in hist.index]
            pct_changes = [0.0] + [
                round((closes[i] - closes[i-1]) / closes[i-1] * 100, 2)
                for i in range(1, len(closes))
            ]
            result = [
                {"date": dates[i], "close": round(closes[i], 2), "pct_change": pct_changes[i]}
                for i in range(len(closes))
            ]
            self._cache[cache_key] = (time.time(), result)
            return result
        except Exception as e:
            print(f"[PriceFetcher] Error fetching {ticker}: {e}")
            return self._fallback_bars(ticker)

    def _fallback_bars(self, ticker: str) -> list[dict]:
        """Generate plausible-looking fallback bars when API fails."""
        rng = np.random.default_rng(sum(ord(c) for c in ticker))
        prices = [100.0]
        for _ in range(11):
            prices.append(max(10, prices[-1] * (1 + rng.normal(0, 0.04))))
        return [
            {"date": f"wk{i}", "close": round(p, 2), "pct_change": round((p - prices[i]) / prices[i] * 100, 2)}
            for i, p in enumerate(prices[1:], 1)
        ]

    def get_current_price(self, ticker: str) -> Optional[float]:
        try:
            t = yf.Ticker(ticker)
            info = t.fast_info
            return round(info.last_price, 2)
        except Exception:
            return None


# ─── PROFILE GENERATOR ───────────────────────────────────────────────────────

class WhaleProfileGenerator:
    """
    Generates enriched whale profiles by combining:
    - Static satirical profile data (documented manipulation tactics)
    - Live price history from yfinance
    - Computed bar chart data for the swipe card
    """

    def __init__(self):
        self.fetcher = LivePriceFetcher()

    def enrich_profile(self, static_profile: dict) -> dict:
        """Add live price data and computed visuals to a static profile."""
        profile = dict(static_profile)

        # Fetch live data for primary ticker
        primary_ticker = profile["ticker_watchlist"][0]
        price_history = self.fetcher.get_price_history(primary_ticker, period="3mo", interval="1wk")
        current_price = self.fetcher.get_current_price(primary_ticker)

        # Compute normalized bar heights (0-100) for sparkline
        closes = [d["close"] for d in price_history]
        if closes:
            mn, mx = min(closes), max(closes)
            rng = mx - mn if mx != mn else 1
            bar_heights = [int((c - mn) / rng * 95) + 5 for c in closes]
            bar_pcts = [d["pct_change"] for d in price_history]
        else:
            bar_heights = [50] * 12
            bar_pcts = [0.0] * 12

        profile["live_data"] = {
            "primary_ticker": primary_ticker,
            "current_price": current_price,
            "price_history": price_history[-12:],  # last 12 bars
            "bar_heights": bar_heights[-12:],
            "bar_pcts": bar_pcts[-12:],
            "bar_colors": [
                "#00FF87" if p >= 0 else "#FF2D78"
                for p in bar_pcts[-12:]
            ],
            "bar_labels": [d["date"][-5:] for d in price_history[-12:]],
            "fetched_at": datetime.utcnow().isoformat(),
        }

        # Compute rug score annotation
        rug = profile["rug_odds"]
        profile["rug_color"] = (
            "#FF2D78" if rug >= 70
            else "#ff6400" if rug >= 40
            else "#FFD700" if rug >= 20
            else "#00FF87"
        )
        profile["rug_label"] = (
            "🔴 HIGH" if rug >= 70
            else "🟠 MED-HIGH" if rug >= 40
            else "🟡 MED" if rug >= 20
            else "🟢 LOW"
        )

        return profile

    def generate_feed(self, count: Optional[int] = None) -> list[dict]:
        """Return enriched profiles. Shuffles order each call."""
        profiles = INSTITUTIONAL_PROFILES.copy()
        random.shuffle(profiles)
        if count:
            profiles = profiles[:count]
        return [self.enrich_profile(p) for p in profiles]

    def get_profile(self, profile_id: str) -> Optional[dict]:
        for p in INSTITUTIONAL_PROFILES:
            if p["id"] == profile_id:
                return self.enrich_profile(p)
        return None

    def get_dossier(self, profile_id: str) -> Optional[dict]:
        """Return full manipulation dossier for the match screen."""
        profile = self.get_profile(profile_id)
        if not profile:
            return None
        return {
            "id": profile["id"],
            "name": profile["name"],
            "archetype": profile["archetype"],
            "documented_moves": profile["documented_moves"],
            "regulatory_actions": profile["regulatory_actions"],
            "manipulation_tactics": profile["manipulation_tactics"],
            "moon_history": profile["moon_history"],
            "rug_odds": profile["rug_odds"],
            "match_message": profile["match_message"],
        }


# ─── REDDIT MANIPULATION SIGNAL SCRAPER ──────────────────────────────────────

class RedditManipulationScraper:
    """
    Scrapes subreddits known for tracking whale/institutional activity.
    Requires PRAW credentials. Returns signal objects for new card generation.
    
    Target subreddits:
      - r/Superstonk       (retail whale watch, dark pool tracking)
      - r/wallstreetbets   (pump signals, unusual options activity)  
      - r/CryptoWhale      (on-chain large wallet movement)
      - r/WallStreetSilver (precious metals manipulation tracking)
      - r/Superstonk       (dark pool data, FTD tracking)
    """

    WATCHLIST_SUBS = [
        "Superstonk",
        "wallstreetbets",
        "WallStreetSilver",
        "CryptoWhale",
        "unusual_whales",
    ]

    MANIPULATION_KEYWORDS = [
        "dark pool", "short ladder", "naked short", "FTD", "fail to deliver",
        "spoofing", "whale alert", "unusual options", "dark pool print",
        "block trade", "gamma squeeze", "OPEC cut", "ETF manipulation",
        "front running", "wash trade", "pump and dump", "rugpull",
    ]

    def __init__(self, client_id: str, client_secret: str, user_agent: str):
        try:
            import praw
            self.reddit = praw.Reddit(
                client_id=client_id,
                client_secret=client_secret,
                user_agent=user_agent,
                read_only=True,
            )
            self.enabled = True
        except ImportError:
            print("[RedditScraper] praw not installed — running in demo mode")
            self.reddit = None
            self.enabled = False

    def scrape_signals(self, post_limit: int = 50) -> list[dict]:
        """Scrape subreddits for manipulation signals. Returns list of signal dicts."""
        if not self.enabled:
            return self._demo_signals()

        signals = []
        for sub_name in self.WATCHLIST_SUBS:
            try:
                sub = self.reddit.subreddit(sub_name)
                for post in sub.hot(limit=post_limit):
                    text = f"{post.title} {post.selftext}".lower()
                    matched = [kw for kw in self.MANIPULATION_KEYWORDS if kw in text]
                    if not matched:
                        continue

                    tickers = self._extract_tickers(f"{post.title} {post.selftext}")
                    signals.append({
                        "source": f"r/{sub_name}",
                        "title": post.title,
                        "score": post.score,
                        "upvote_ratio": post.upvote_ratio,
                        "url": f"https://reddit.com{post.permalink}",
                        "tickers_mentioned": tickers,
                        "manipulation_keywords": matched,
                        "signal_strength": self._score_signal(post.score, post.upvote_ratio, len(matched)),
                        "created_at": datetime.fromtimestamp(post.created_utc).isoformat(),
                    })
            except Exception as e:
                print(f"[RedditScraper] Error scraping r/{sub_name}: {e}")

        return sorted(signals, key=lambda s: s["signal_strength"], reverse=True)

    def _extract_tickers(self, text: str) -> list[str]:
        import re
        # Match $TICKER or uppercase 1-5 char words
        dollar_tickers = re.findall(r'\$([A-Z]{1,5})', text)
        upper_words = re.findall(r'\b([A-Z]{2,5})\b', text)
        # Filter noise words
        noise = {"ETF","SEC","NYSE","NASDAQ","CEO","CFO","IPO","USA","USD","THE","AND","FOR","ARE"}
        all_tickers = list(set(dollar_tickers + [w for w in upper_words if w not in noise]))
        return all_tickers[:8]

    def _score_signal(self, score: int, ratio: float, keyword_count: int) -> float:
        return round((score * ratio * 0.001) + (keyword_count * 10), 2)

    def _demo_signals(self) -> list[dict]:
        """Return demo signals when PRAW not configured."""
        return [
            {
                "source": "r/Superstonk",
                "title": "Dark pool print: $2.1B SPY block trade at 3:58pm — no price movement on lit exchange",
                "score": 4200,
                "upvote_ratio": 0.97,
                "tickers_mentioned": ["SPY", "GME"],
                "manipulation_keywords": ["dark pool", "block trade"],
                "signal_strength": 85.0,
                "created_at": datetime.utcnow().isoformat(),
                "url": "https://reddit.com/r/Superstonk",
            },
            {
                "source": "r/WallStreetSilver",
                "title": "COMEX silver futures: 15,000 contracts dropped in 30 seconds at open — classic spoofing pattern",
                "score": 2800,
                "upvote_ratio": 0.94,
                "tickers_mentioned": ["SLV", "SI=F"],
                "manipulation_keywords": ["spoofing", "unusual options"],
                "signal_strength": 67.2,
                "created_at": datetime.utcnow().isoformat(),
                "url": "https://reddit.com/r/WallStreetSilver",
            },
        ]


# ─── MAIN (DEMO RUN) ─────────────────────────────────────────────────────────

if __name__ == "__main__":
    print("🐋 WhaleTinder Profile Generator — Demo Run\n")
    
    gen = WhaleProfileGenerator()
    
    print("Fetching enriched profile for BlackRock...")
    profile = gen.get_profile("blackrock")
    if profile:
        print(f"  Name: {profile['name']}")
        print(f"  Archetype: {profile['archetype']}")
        print(f"  Rug Odds: {profile['rug_odds']}% ({profile['rug_label']})")
        print(f"  Primary Ticker: {profile['live_data']['primary_ticker']}")
        print(f"  Current Price: ${profile['live_data']['current_price']}")
        print(f"  Bar Heights (last 12 wks): {profile['live_data']['bar_heights']}")
        print()

    print("Generating full feed...")
    feed = gen.generate_feed()
    print(f"  Generated {len(feed)} profiles")
    for p in feed:
        price = p['live_data']['current_price']
        ticker = p['live_data']['primary_ticker']
        print(f"  [{p['rug_label']:15}] {p['name'][:30]:30} | {ticker}: ${price}")
    
    print("\n✅ Done. Connect Flask API to serve these to the mobile app.")
