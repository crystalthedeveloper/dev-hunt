import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const skills = [
  "Html", "Css", "TailwindCSS", "Bootstrap", "Javascript", "Typescript",
  "Jquery", "React", "ThreeJs", "PHP", "SQL", "Git", "APIs", "Supabase",
  "NodeJs", "NextJs", "Zapier", "Performance", "Accessibility", "SEO",
  "GoogleTagManager", "GoogleAnalytics", "UI/UX", "Figma", "Jira",
  "VisualStudioCode", "AdobeCreativeCloud", "Blender3D", "UnrealEngine",
  "Webflow", "Wordpress", "AdobeExperience", "Magnolia", "Drupal",
] as const;
type Skill = typeof skills[number];

export const buttons = [
  "forward", "backward", "leftward", "rightward", "jump",
] as const;
type Button = typeof buttons[number];

const normalize = (w: string) => w.trim().toLowerCase();

type GameState = {
  phase: "ready" | "playing" | "finished";
  allCollected: number;
  hasWon: boolean;

  yaw: number;
  setYaw: (v: number) => void;

  collectedWords: string[];
  collectWord: (word: string) => void;
  hasCollected: (word: string) => boolean;
  removeWord: (word: string) => void;
  resetCollected: () => void;

  collectedBalls: string[];
  collectBall: (id: string) => void;
  hasCollectedBall: (id: string) => boolean;
  resetBalls: () => void;

  increaseAllIncrements: () => void;
  resetAll: () => void;

  start: () => void;
  restart: () => void;

  onRestartPlayer?: () => void;
  setOnRestartPlayer: (fn: () => void) => void;
} & {
  [K in Skill as `increment${K}`]: number;
} & {
  [K in Skill as `increase${K}`]: () => void;
} & {
  [B in Button as `${B}Button`]: number;
} & {
  [B in Button as `press${B}`]: () => void;
} & {
  [B in Button as `release${B}`]: () => void;
};

const useGame = create<GameState>()(
  subscribeWithSelector((set, get) => {
    // skills
    const skillState = Object.fromEntries(
      skills.flatMap((skill) => [
        [`increment${skill}`, 0],
        [
          `increase${skill}`,
          () =>
            set((s) => ({
              [`increment${skill}`]:
                (s[`increment${skill}` as keyof GameState] as number) + 1,
            })),
        ],
      ])
    ) as Partial<GameState>;

    // buttons
    const buttonState = Object.fromEntries(
      buttons.flatMap((btn) => [
        [`${btn}Button`, 0],
        [
          `press${btn}`,
          () =>
            set((s) => ({
              [`${btn}Button`]:
                (s[`${btn}Button` as keyof GameState] as number) + 1,
            })),
        ],
        [`release${btn}`, () => set({ [`${btn}Button`]: 0 } as Partial<GameState>)],
      ])
    ) as Partial<GameState>;

    const baseState: Partial<GameState> = {
      phase: "playing",
      allCollected: 0,
      hasWon: false,

      yaw: 0,
      setYaw: (v: number) => set({ yaw: v }),

      onRestartPlayer: undefined,
      setOnRestartPlayer: (fn) => set({ onRestartPlayer: fn }),

      collectedWords: [],
      collectWord: (word) => {
        const w = normalize(word);
        if (!get().collectedWords.includes(w)) {
          set((s) => {
            const updated = [...s.collectedWords, w];
            const won = updated.length === skills.length;

            const skillKey = skills.find((skill) => skill.toLowerCase() === w);
            const skillIncrement =
              skillKey !== undefined
                ? {
                    [`increment${skillKey}`]:
                      (s[`increment${skillKey}` as keyof GameState] as number) + 1,
                  }
                : {};

            return {
              collectedWords: updated,
              allCollected: s.allCollected + 1,
              hasWon: won,
              phase: won ? "finished" : "playing",
              ...skillIncrement,
            };
          });
        }
      },
      hasCollected: (w) => get().collectedWords.includes(normalize(w)),
      removeWord: (w) =>
        set((s) => ({
          collectedWords: s.collectedWords.filter((x) => x !== normalize(w)),
          allCollected: Math.max(0, s.allCollected - 1),
        })),
      resetCollected: () =>
        set({ collectedWords: [], allCollected: 0, hasWon: false }),

      collectedBalls: [],
      collectBall: (id) => {
        if (!get().collectedBalls.includes(id)) {
          set((s) => ({
            collectedBalls: [...s.collectedBalls, id],
            allCollected: s.allCollected + 1,
          }));
        }
      },
      hasCollectedBall: (id) => get().collectedBalls.includes(id),
      resetBalls: () => set({ collectedBalls: [] }),

      increaseAllIncrements: () =>
        set((s) => ({ allCollected: s.allCollected + 1 })),

      // full reset
      resetAll: () => {
        const resetSkills = Object.fromEntries(
          skills.map((s) => [`increment${s}`, 0])
        );
        set({
          phase: "playing",
          allCollected: 0,
          collectedWords: [],
          collectedBalls: [],
          hasWon: false,
          yaw: 0,
          ...resetSkills,
        } as Partial<GameState>);
      },

      start: () => set({ phase: "playing" }),

      // restart also calls player reset hook
      restart: () => {
        get().resetAll();
        const cb = get().onRestartPlayer;
        if (cb) cb();
      },
    };

    return {
      ...baseState,
      ...skillState,
      ...buttonState,
    } as GameState;
  })
);

export default useGame;
