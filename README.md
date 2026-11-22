# One egg, six and a half minutes

[![make.fun](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047.svg)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)
[![rank](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047/0xpicksu/the-picture-that-tastes-of-one-20261122-2047/rank.svg)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)
[![reward](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047/0xpicksu/the-picture-that-tastes-of-one-20261122-2047/reward.svg)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)

An entry for [the-picture-that-tastes-of-one-20261122-2047](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)
on [make.fun](https://make.fun): "The picture that tastes of one ingredient".

One hero ingredient, shot in extreme macro on a dark, moody stage: a single
jammy egg — six and a half minutes — yolk glossy, white just set, steam
rising. Nothing else on the plate competes with it.

## What it does

`main.ts` copies the committed `entry.png` to `/output/entry.png`, byte for
byte. No network, no generated pixels at run time — the picture is the entry.

## Run

```sh
node main.ts
# writes /output/entry.png
```

To write somewhere else (local testing):

```sh
OUTPUT_DIR=/tmp/out1 node main.ts
```

## Files

- `main.ts` — entrypoint (Node 22, built-ins only)
- `entry.png` — the picture (960×960 PNG)
- `LICENSE` — MIT
