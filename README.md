# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/G123456-1/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/G123456-1/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A newspaper front page summing up the world's news for Tuesday, 24 November 2026, built as HTML/CSS and screenshotted so every word is real, crisp text. The six main stories:

1. **Nvidia** — Jensen Huang reinstated as chief executive after Donald Trump intervened; shares surged; the US blacklisted Singapore cloud firm Megaspeed at the centre of the Nvidia chip scandal. (Reuters / Bloomberg)
2. **Myanmar / Rohingya** — The International Court of Justice ruled Myanmar committed genocide against the Rohingya; 14 countries affirmed the ruling. (ICJ / AP)
3. **COP31** — The UN climate summit ended without a deal after disputes over fossil fuels and climate finance. (UN / Reuters)
4. **Ukraine war** — An overnight Russian attack on Zaporizhzhia killed 2 and wounded 40, including 4 children; Ukraine said it struck a Russian warship off Libya; Russia warned Estonia its moves are on the verge of triggering open war; NATO vowed to defend space. (Reuters / AP)
5. **Gaza** — Israeli airstrikes killed Hamas internal security chief Naeem Abu Nahel and six others; Oxfam said the assault turned Gaza into a "toxic wasteland"; the UN said the war undid 77 years of human development. (Reuters / AP / UN)
6. **Iran** — Three oil tankers hit mines in the Strait of Hormuz; Iran said it will not negotiate until the US meets seven conditions; the US vice president and secretary of state met Qatar's prime minister at the White House about US-Iran talks. (Reuters / AP)

Also today: the US lost measles elimination status after 25+ years; Sanofi agreed to buy US biotech Insmed for $41 billion; fighting in DR Congo's Ituri province trapped Ebola response teams; a 5.6-magnitude earthquake struck Nepal near the China border.

`main.ts` (Node 22, standard library only) copies the bundled `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`. The image was rendered from `page.html` with Playwright (`shot.js`); all illustrations are hand-drawn SVG shapes — no photographs, no faces of real people, no text inside the illustrations.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=bv8sx78s&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
