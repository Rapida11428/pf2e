import { ActionMacroHelpers, SkillActionOptions } from "..";

export function climb(options: SkillActionOptions) {
    const { checkType, property, stat, subtitle } = ActionMacroHelpers.resolveStat(options?.skill ?? "athletics");
    ActionMacroHelpers.simpleRollActionCheck({
        actors: options.actors,
        statName: property,
        actionGlyph: options.glyph ?? "A",
        title: "PF2E.Actions.Climb.Title",
        subtitle,
        modifiers: options.modifiers,
        rollOptions: ["all", checkType, stat, "action:climb"],
        extraOptions: ["action:climb"],
        traits: ["move"],
        checkType,
        event: options.event,
        callback: options.callback,
        difficultyClass: options.difficultyClass,
        extraNotes: (selector: string) => [
            ActionMacroHelpers.note(selector, "PF2E.Actions.Climb", "criticalSuccess"),
            ActionMacroHelpers.note(selector, "PF2E.Actions.Climb", "success"),
            ActionMacroHelpers.note(selector, "PF2E.Actions.Climb", "criticalFailure"),
        ],
    });
}
