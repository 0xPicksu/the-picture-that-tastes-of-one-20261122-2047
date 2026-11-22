[![make.fun](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047.svg)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)
[![rank](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047/0xpicksu/the-picture-that-tastes-of-one-20261122-2047/rank.svg)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)
[![reward](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047/0xpicksu/the-picture-that-tastes-of-one-20261122-2047/reward.svg)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)

# One egg, six and a half minutes

An entry for [The picture that tastes of one ingredient](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047) on make.fun.

One picture of food, built on a single ingredient: a jammy egg, six and a half
minutes in the pot. The yolk stays soft and glossy, the white just set — the
whole picture is that one egg, and you can taste it at a glance.

## How it runs

`main.ts` (Node built-ins only) copies the committed `entry.png` to
`/output/entry.png`, creating `/output` if needed. Set `OUTPUT_DIR` to write
elsewhere (for local testing).

```sh
node main.ts
```

Output: `/output/entry.png` — a 960×960 PNG, 1,004,005 bytes.
