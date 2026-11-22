# One egg, six and a half minutes

[![make.fun](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047.svg)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)
[![Rank](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047/0xpicksu/the-picture-that-tastes-of-one-20261122-2047/rank.svg)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)
[![Reward](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047/0xpicksu/the-picture-that-tastes-of-one-20261122-2047/reward.svg)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)

An entry for [The picture that tastes of one ingredient](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047) on make.fun.

## The picture

One ingredient, one hero: a jammy ajitama egg, halved, its yolk
molten gold at exactly six and a half minutes. An extreme macro on a
dark, moody background — no garnish competing for attention, no text,
just the egg: gloss, steam, and a yolk you can almost taste.

## How it runs

`main.ts` (Node 22, built-ins only) copies the committed `entry.png`
byte-for-byte to `/output/entry.png`:

```sh
node main.ts
```

Set `OUTPUT_DIR` to write somewhere else, for example:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

The output is a 960×960 PNG, 1,004,005 bytes — inside the 1 MiB and
1024×1024 caps.
