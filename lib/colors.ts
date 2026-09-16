/**
 * Hex language colours sourced from the linguist GitHub-colors dataset.
 * Unknown languages fall back to a neutral gray (handled by the caller).
 */
export const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Python: "#3572A5",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Scala: "#c22d40",
  Lua: "#000080",
  Shell: "#89e051",
  "Jupyter Notebook": "#DA5B0B",
  Vue: "#41b883",
  Svelte: "#ff3e00",
  Dart: "#00B4AB",
  Elixir: "#6e4a7e",
  Haskell: "#5e5086",
  R: "#198CE7",
  MATLAB: "#e16737",
  Objective_C: "#438eff",
  Perl: "#0298c3",
  Assembly: "#6E4C13",
  PowerShell: "#012456",
  Dockerfile: "#384d54",
  Makefile: "#427819",
  CMake: "#DA3434",
  Solidity: "#AA6746",
  Zig: "#ec915c",
  Nim: "#ffc200",
  Julia: "#a270ba",
  Clojure: "#db5855",
  "CoffeeScript": "#244776",
  "Visual Basic .NET": "#945db7",
  GraphQL: "#e10098",
  SCSS: "#c6538c",
  Sass: "#a53b70",
  Less: "#1d365d",
  TeX: "#3D6117",
  Markdown: "#083fa1",
  JSON: "#292929",
  YAML: "#cb171e",
  XML: "#0060ac",
  GLSL: "#5686a5",
  "JavaScript (React Native)": "#f1e05a",
  Text: "#969696",
};

/** Returns the GitHub colour for a language, or a neutral gray fallback. */
export function languageColor(language?: string): string {
  if (!language) return "#6b7280"; // zinc-500
  return LANGUAGE_COLORS[language] ?? "#6b7280";
}