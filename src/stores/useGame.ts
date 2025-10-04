import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

const isDev = import.meta.env.DEV;

const debug = (label: string, ...args: unknown[]) => {
  if (isDev) console.log(`[useGame] ${label}`, ...args);
};

// 🧠 Utility wrapper — ensures set() never returns undefined
const withSafeSet = <T extends object>(
  initializer: (set: (fn: (state: T) => Partial<T> | void) => void, get: () => T) => T
) =>
  subscribeWithSelector<T>((set, get) =>
    initializer(
      (fn) => set((state) => fn(state) ?? state), // ✅ auto-return previous state if undefined
      get
    )
  );

// --- SKILLS + THEMES ---
const skillThemeData = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#f5f5f5",
    skills: [
      "Html",
      "Css",
      "TailwindCSS",
      "Bootstrap",
      "Javascript",
      "Typescript",
      "Jquery",
      "React",
      "ThreeJs",
      "UI/UX",
    ] as const,
  },
  {
    id: "backend",
    label: "Backend",
    color: "#d9d9d9",
    skills: [
      "NodeJs",
      "NextJs",
      "APIs",
      "Supabase",
      "PHP",
      "SQL",
      "Performance",
      "Accessibility",
      "SEO",
      "Zapier",
    ] as const,
  },
  {
    id: "tools",
    label: "Tools",
    color: "#b5b5b5",
    skills: [
      "Git",
      "GoogleTagManager",
      "GoogleAnalytics",
      "Figma",
      "Jira",
      "VisualStudioCode",
      "AdobeCreativeCloud",
      "AdobeExperience",
      "Blender3D",
      "UnrealEngine",
    ] as const,
  },
  {
    id: "platforms",
    label: "Platforms",
    color: "#7a7a7a",
    skills: ["Webflow", "Wordpress", "Drupal", "Magnolia"] as const,
  },
] as const;

export const skillThemes = skillThemeData;
export type Skill = typeof skillThemeData[number]["skills"][number];
export const skills = skillThemeData.flatMap((theme) => theme.skills) as readonly Skill[];

export type PlatformSurface = {
  position: [number, number, number];
  radius: number;
  height: number;
  index: number;
};

const normalize = (w: string) => w.trim().toLowerCase();

const skillClusterIndexBySkill = new Map<Skill, number>();
const normalizedSkillToOriginal = new Map<string, Skill>();
skillThemes.forEach((theme, i) =>
  theme.skills.forEach((skill) => {
    skillClusterIndexBySkill.set(skill, i);
    normalizedSkillToOriginal.set(normalize(skill), skill);
  })
);

type MovementVector = { x: number; y: number };

// ✅ Export this so Interface.tsx can import it
export type GameState = {
  phase: "ready" | "playing" | "finished";
  allCollected: number;
  hasWon: boolean;

  orientation: [number, number, number, number];
  setOrientation: (quat: [number, number, number, number]) => void;

  playerPosition: [number, number, number];
  setPlayerPosition: (position: [number, number, number]) => void;

  movementVector: MovementVector;
  setMovementVector: (vec: MovementVector) => void;
  resetMovementVector: () => void;

  altitudeInput: number;
  setAltitudeInput: (value: number) => void;

  touchActive: boolean;
  setTouchActive: (value: boolean) => void;

  grounded: boolean;
  setGrounded: (value: boolean) => void;

  activePlatformIndex: number;
  setActivePlatformIndex: (index: number) => void;

  collectedWords: string[];
  collectWord: (word: string) => void;
  hasCollected: (word: string) => boolean;
  removeWord: (word: string) => void;
  resetCollected: () => void;

  unlockedClusterIndex: number;
  unlockNextCluster: () => void;
  isSkillUnlocked: (skill: Skill) => boolean;

  platformSurfaces: readonly PlatformSurface[];
  setPlatformSurfaces: (surfaces: readonly PlatformSurface[]) => void;

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
};

const useGame = create<GameState>()(
  withSafeSet((set, get) => {
    debug("initialising game store");

    const safeSet = (fn: (s: GameState) => Partial<GameState> | void) =>
      set((state) => fn(state) ?? state);

    const skillState = Object.fromEntries(
      skills.flatMap((skill) => [
        [`increment${skill}`, 0],
        [
          `increase${skill}`,
          () =>
            safeSet((s) => ({
              [`increment${skill}`]:
                (s[`increment${skill}` as keyof GameState] as number) + 1,
            })),
        ],
      ])
    ) as Partial<GameState>;

    const baseState: Partial<GameState> = {
      phase: "playing",
      allCollected: 0,
      hasWon: false,

      orientation: [0, 0, 0, 1],
      setOrientation: (quat) =>
        safeSet((s) => {
          const current = s.orientation;
          if (current.every((v, i) => v === quat[i])) return;
          return { orientation: [...quat] };
        }),

      playerPosition: [0, 1.6, 0],
      setPlayerPosition: (position) => safeSet(() => ({ playerPosition: [...position] })),

      movementVector: { x: 0, y: 0 },
      setMovementVector: (vec) =>
        safeSet((s) => {
          if (s.movementVector.x === vec.x && s.movementVector.y === vec.y) return;
          return { movementVector: { ...vec } };
        }),
      resetMovementVector: () => safeSet(() => ({ movementVector: { x: 0, y: 0 } })),

      altitudeInput: 0,
      setAltitudeInput: (value) => safeSet(() => ({ altitudeInput: value })),

      touchActive: false,
      setTouchActive: (value) => safeSet(() => ({ touchActive: value })),

      grounded: false,
      setGrounded: (value) => safeSet(() => ({ grounded: value })),

      activePlatformIndex: -1,
      setActivePlatformIndex: (index) =>
        safeSet((s) => (s.activePlatformIndex === index ? undefined : { activePlatformIndex: index })),

      unlockedClusterIndex: 0,
      unlockNextCluster: () =>
        safeSet((s) => {
          const next = Math.min(skillThemes.length - 1, s.unlockedClusterIndex + 1);
          if (next === s.unlockedClusterIndex) return;
          return { unlockedClusterIndex: next };
        }),

      isSkillUnlocked: (skill) => {
        const idx = skillClusterIndexBySkill.get(skill);
        return idx === undefined || idx <= get().unlockedClusterIndex;
      },

      platformSurfaces: [],
      setPlatformSurfaces: (surfaces) =>
        safeSet(() => ({ platformSurfaces: [...surfaces] })),

      onRestartPlayer: undefined,
      setOnRestartPlayer: (fn) => safeSet(() => ({ onRestartPlayer: fn })),

      collectedWords: [],
      collectWord: (word) => {
        const w = normalize(word);
        const state = get();
        if (state.collectedWords.includes(w)) return;

        const skillKey = normalizedSkillToOriginal.get(w);
        const clusterIndex = skillKey ? skillClusterIndexBySkill.get(skillKey) : undefined;

        if (clusterIndex !== undefined && clusterIndex > state.unlockedClusterIndex) return;

        safeSet((s) => {
          const updated = [...s.collectedWords, w];
          const won = updated.length === skills.length;
          const skillIncrement =
            skillKey !== undefined
              ? {
                  [`increment${skillKey}`]:
                    (s[`increment${skillKey}` as keyof GameState] as number) + 1,
                }
              : {};
          const nextState: Partial<GameState> = {
            collectedWords: updated,
            allCollected: s.allCollected + 1,
            hasWon: won,
            phase: won ? "finished" : "playing",
            ...skillIncrement,
          };

          const theme = skillThemes[s.unlockedClusterIndex];
          if (theme && theme.skills.every((sk) => updated.includes(normalize(sk)))) {
            nextState.unlockedClusterIndex = s.unlockedClusterIndex + 1;
          }

          return nextState;
        });
      },

      hasCollected: (w) => get().collectedWords.includes(normalize(w)),
      removeWord: (w) =>
        safeSet((s) => ({
          collectedWords: s.collectedWords.filter((x) => x !== normalize(w)),
          allCollected: Math.max(0, s.allCollected - 1),
        })),
      resetCollected: () => safeSet(() => ({ collectedWords: [], allCollected: 0 })),

      collectedBalls: [],
      collectBall: (id) =>
        safeSet((s) => {
          if (s.collectedBalls.includes(id)) return;
          return {
            collectedBalls: [...s.collectedBalls, id],
            allCollected: s.allCollected + 1,
          };
        }),
      hasCollectedBall: (id) => get().collectedBalls.includes(id),
      resetBalls: () => safeSet(() => ({ collectedBalls: [] })),

      increaseAllIncrements: () => safeSet((s) => ({ allCollected: s.allCollected + 1 })),

      resetAll: () =>
        safeSet(() => {
          const resetSkills = Object.fromEntries(skills.map((s) => [`increment${s}`, 0]));
          return {
            phase: "playing",
            allCollected: 0,
            collectedWords: [],
            collectedBalls: [],
            hasWon: false,
            orientation: [0, 0, 0, 1],
          playerPosition: [0, 1.6, 0],
            movementVector: { x: 0, y: 0 },
            altitudeInput: 0,
            touchActive: false,
            unlockedClusterIndex: 0,
            ...resetSkills,
          };
        }),

      start: () => safeSet(() => ({ phase: "playing" })),
      restart: () => {
        get().resetAll();
        get().onRestartPlayer?.();
      },
    };

    return { ...baseState, ...skillState } as GameState;
  })
);

export default useGame;
