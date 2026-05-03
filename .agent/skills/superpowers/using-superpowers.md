---
name: using-superpowers
description: Use when starting any conversation - establishes how to find and use skills, requiring Skill tool invocation before ANY response including clarifying questions
---

## Instruction Priority
Superpowers skills override default system prompt behavior, but **user instructions always take precedence**:

1. **User's explicit instructions** (PRD, AGENTS.md, direct requests) — highest priority
2. **Superpowers skills** — override default system behavior where they conflict
3. **Default system prompt** — lowest priority

## The Rule
**Invoke relevant or requested skills BEFORE any response or action.** Even a 1% chance a skill might apply means that you should invoke the skill to check.

## Red Flags
These thoughts mean STOP—you're rationalizing:
- "This is just a simple question" -> Questions are tasks. Check for skills.
- "I need more context first" -> Skill check comes BEFORE clarifying questions.
- "The skill is overkill" -> Simple things become complex. Use it.
