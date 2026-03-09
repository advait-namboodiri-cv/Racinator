import json
import urllib.request

URL = "https://api.openf1.org/v1/sessions?year=2025"
def fetch_data(url: str):
    with urllib.request.urlopen(url) as response:
        data = json.loads(response.read().decode("utf-8"))
    return data

def main():
    sessions = fetch_data(URL)

    with open("data-pipeline/raw/sessions_2025.json", "w", encoding="utf-8") as f:
        json.dump(sessions, f, indent=2)

    print(f"Saved {len(sessions)} sessions to data-pipeline/raw/sessions_2025.json")

if __name__ == "__main__":
    main()