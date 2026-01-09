# vocabulary-test

Pure frontend vocabulary size tester.

Open `index.html` in a browser to run the test.

Language packs
- Built-in packs live in `data/` and are listed in `data/index.json` (English, Spanish, Chinese characters, Traditional Chinese, French, German, Japanese kana, Korean hanja).
- Import new packs from the UI. Custom packs are saved in localStorage.
- Templates live in `templates/` for both word and character packs.
- JSON schema matches the existing pack files (`mode`, `unitLabel`, `bands`, `words`).
- CSV schema expects headers: `word` or `character`, `rank` (optional: `band,range`). Missing bands are computed from `bandSize` (default 500).
- Built-in packs use 20 bands with 20 items per band.

Estimator
- Simple averages band samples without smoothing.
- Displayed estimates include a small random jitter (±20) to avoid always showing round numbers.

UI language
- UI is available in English, 简体中文, 繁體中文, Spanish, French, German, Japanese, and Korean via the selector.

License
- See `LICENSE.md` (all rights reserved; no copying or commercial use without permission).
