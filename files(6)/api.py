"""
WhaleTinder Flask API
Serves whale profiles to React Native mobile app.
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
from whale_profile_generator import WhaleProfileGenerator, RedditManipulationScraper
import os

app = Flask(__name__)
CORS(app)
gen = WhaleProfileGenerator()

# Init Reddit scraper (optional — works in demo mode without creds)
scraper = RedditManipulationScraper(
    client_id=os.getenv("REDDIT_CLIENT_ID", ""),
    client_secret=os.getenv("REDDIT_SECRET", ""),
    user_agent="WhaleTinder/1.0 (satire research tool)",
)


@app.route("/api/feed")
def feed():
    """Main swipe feed. Returns shuffled enriched profiles."""
    count = request.args.get("count", type=int)
    return jsonify(gen.generate_feed(count=count))


@app.route("/api/profile/<profile_id>")
def profile(profile_id):
    p = gen.get_profile(profile_id)
    if not p:
        return jsonify({"error": "not found"}), 404
    return jsonify(p)


@app.route("/api/dossier/<profile_id>")
def dossier(profile_id):
    """Full manipulation dossier — shown on match screen."""
    d = gen.get_dossier(profile_id)
    if not d:
        return jsonify({"error": "not found"}), 404
    return jsonify(d)


@app.route("/api/signals")
def signals():
    """Reddit manipulation signals feed."""
    limit = request.args.get("limit", 50, type=int)
    return jsonify(scraper.scrape_signals(post_limit=limit))


@app.route("/api/swipe", methods=["POST"])
def swipe():
    """Log a swipe interaction."""
    data = request.json or {}
    direction = data.get("direction")  # "left" | "right" | "super"
    profile_id = data.get("profile_id")
    print(f"[Swipe] {direction.upper():5} → {profile_id}")
    return jsonify({"status": "logged", "reply_means_buy": direction == "right"})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
