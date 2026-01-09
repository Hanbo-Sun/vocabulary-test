# vocabulary-test

Pure frontend vocabulary size tester.

Open `index.html` in a browser to run the test.

Local test (CLI)
```bash
python3 -m http.server 5174
```

Language packs
- Built-in packs live in `data/` and are listed in `data/index.json` (English, Spanish, Chinese characters, Traditional Chinese, French, German, Japanese words, Korean hanja).
- Import new packs from the UI. Custom packs are saved in localStorage.
- Templates live in `templates/` for both word and character packs.
- JSON schema matches the existing pack files (`mode`, `unitLabel`, `bands`, `words`).
- CSV schema expects headers: `word` or `character`, `rank` (optional: `band,range`). Missing bands are computed from `bandSize` (default 500).
- Built-in packs use 20 bands with 20 items per band.
- Japanese words are lemmatized with UniDic via MeCab before sampling.
- Korean Hanja uses the first 1800 characters from the hanja mapping list as a stand-in for the education list.

Estimator
- Simple averages band samples without smoothing.
- Displayed estimates include a small random jitter (±20) to avoid always showing round numbers.

UI language
- UI is available in English, 简体中文, 繁體中文, Spanish, French, German, Japanese, and Korean via the selector.

License
- See `LICENSE.md` (all rights reserved; no copying or commercial use without permission).
