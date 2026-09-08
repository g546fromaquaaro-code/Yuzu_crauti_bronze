# Grade 5 upgrade

Only the Grade 5 course uses the new engine. Existing Bronze source files, question data, styles and persistence keys are unchanged. The original Grade 5 scripts remain loaded because they contain phrase data and some pre-existing shared music behaviour; Grade 5 navigation/answers now use the isolated engine. Remove these old layers only after separating their Bronze dependencies.

## Files

- `g5-core.js`: pure state, stable IDs, versioned save/backup, first-attempt scoring, retry and spaced review, idempotent rewards.
- `g5-bank.js`: 30 original curriculum lessons, 462 original question records. Each curriculum lesson has 16 planned questions plus up to 3 due review questions and delayed retries.
- `g5-app.js`: Grade 5 event-driven UI, safe exact phrase review of previous 30 lessons, all six exam practice types, 50-question practice, audio, resume, export/import, town and shop.
- `g5-v2.css`: styles scoped to `#g5V2` / `.g5v`. Existing town WebP images are reused. Locked later stages remain grayscale and darkened.

## Persistence and learning

`yuzu_g5_v2` stores new progress. `yuzu_eiken5_prep_v1` is read for historical achievements and is never rewritten by the new engine. Initial migration keeps `yuzu_g5_legacy_backup`. The latest successful V2 record is copied to `yuzu_g5_v2_backup` on save. Unreadable primary data is preserved under `yuzu_g5_v2_unreadable` before recovery. Import is validated and requires a user confirmation. Grade 5 reset does not reset Bronze.

A wrong answer stays unresolved until correct. The same stable question ID returns after several questions and on a later day. Successful delayed recalls progress through 1/3/7/14-day intervals. Same-day repetition cannot advance memory boxes. Immediate correction does not count as first-attempt success. First-attempt results count each question once per run, excluding added retries. Mock mode records one answer and postpones retry until the end.

The town counts distinct new curriculum/old phrase clears, with old phrase achievements deduplicated. Stages unlock at 1/10/20 clears. Coins reward first clears and limited daily accomplishments; purchases persist. Existing old PERFECT is labelled historical and does not assert new curriculum mastery.

## Exam practice

Original questions follow the six format groups in https://www.eiken.or.jp/eiken/exam/grade_5/solutions.html . Reading distribution is 15 vocabulary/grammar, 5 conversation, 5 word order; listening is 10 response, 5 dialog comprehension, 10 illustration. Word-order exam practice selects the numbered first and third words. Study mode also offers full tap-to-order puzzles.

Browser speech synthesis, alternating available English voices, reads listening sets twice. These are not official recorded voices. Every listening question is started manually; the app does not claim broadcast-identical timing. The practice timer permits saved breaks, and marks unanswered questions incorrect at each part deadline. Scores are raw practice results, not CSE scores or pass predictions.

## Verification

Run `node --test tests/*.cjs` (no dependencies).

Tests check every original question, exact sentence order, all 30 curriculum entry points with the real script load order, retries, persistent resume, migration, noninterference with Bronze storage, exam distribution, interval scheduling, backup failure and reward idempotency. The DOM harness tests application flow and rendered markup, not physical rendering or Safari media policies.

Release/device checks: Grade 5 entry/home, a complete lesson, wrong → retry → later retry, saved return, numbered order, listening replay, practice result, old phrase course, town/shop, export/import and return to Bronze. Target landscapes: 1024×768, 1180×820, 1366×1024. Actual iPad Safari audio, lock-screen return, silent mode, safe-area and touch testing must be performed on a device; desktop Chrome cannot certify these.
