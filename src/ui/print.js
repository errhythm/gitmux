import figlet from "figlet";
import boxen from "boxen";
import chalk from "chalk";

import { p } from "./theme.js";
import { VERSION } from "../constants.js";

export function printLogo() {
  const art = figlet.textSync("gitportal", { font: "ANSI Shadow" });
  console.log();
  console.log(chalk.white(art));
  console.log(
    "  " + p.slate("─".repeat(3)) +
    "  " + p.muted(`v${VERSION}`) +
    "  " + p.slate("─".repeat(3)),
  );
  console.log();
}

export function printAbout() {
  printLogo();

  const hr = "  " + p.dim("─".repeat(58));
  const gap = "";

  const features = [
    [p.cyan("⇌  Branch switching"), "checkout any branch across all repos instantly"],
    [p.teal("↓  Pull & stash"), "pull latest or auto-stash dirty repos on switch"],
    [p.purple("~  Fuzzy matching"), "partial branch name matching across all repos"],
    [p.cyan("↺  Parallel fetch"), "fetch all remotes concurrently"],
    [chalk.hex("#FC6D26")("◈  GitLab portal"), "browse epics, issues & primary branches"],
    [p.purple("⎇  Merge requests"), "open MRs straight from the CLI via glab"],
    [p.green("✚  Issue creation"), "create GitLab issues linked to epics"],
    [p.teal("★  Primary branches"), "pin a branch per issue for fast checkout"],
  ];

  const lines = [
    // About
    "  " + chalk.bold(p.white("ABOUT")),
    gap,
    "  " + p.muted("gitportal is a multi-repo Git workflow CLI."),
    "  " + p.muted("Run it from any directory to operate across all git"),
    "  " + p.muted("repositories found within the configured search depth."),
    gap,
    hr,
    gap,

    // Features
    "  " + chalk.bold(p.white("FEATURES")),
    gap,
    ...features.map(([label, desc]) =>
      "  " + label + "  " + p.muted(desc),
    ),
    gap,
    hr,
    gap,

    // Commands
    "  " + chalk.bold(p.white("COMMANDS")),
    gap,
    `  ${p.cyan("gitportal <branch>")}    ${p.muted("Switch branch across all repos")}`,
    `  ${p.cyan("gitportal status")}      ${p.muted("Show branch & dirty state for all repos")}`,
    `  ${p.cyan("gitportal fetch")}       ${p.muted("Fetch all remotes in parallel")}`,
    `  ${p.cyan("gitportal mr")}          ${p.muted("Create merge requests via glab")}`,
    `  ${p.cyan("gitportal portal")}      ${p.muted("GitLab development portal")}`,
    `  ${p.cyan("gitportal settings")}    ${p.muted("Configure portal & workflow defaults")}`,
    `  ${p.cyan("gitportal about")}       ${p.muted("This page")}`,
    gap,
    hr,
    gap,

    // Meta
    "  " + chalk.bold(p.white("VERSION")) + "   " + p.white(`v${VERSION}`),
    gap,
    "  " + chalk.bold(p.white("AUTHOR")) + "   " + p.white("E.R.Rhythm"),
    "  " + chalk.bold(p.white("EMAIL")) + "    " + p.muted("errhythm.me@gmail.com"),
    "  " + chalk.bold(p.white("GITHUB")) + "   " + p.muted("github.com/") + p.cyan("e.r.rhythm"),
    gap,
  ];

  for (const line of lines) console.log(line);
}


export function printHelp() {
  printLogo();
  const hr = p.dim("─".repeat(52));
  console.log(
    boxen(
      [
        chalk.bold(p.white("USAGE")),
        `  ${p.cyan("gitportal")} ${p.muted("[branch] [options]")}`,
        `  ${p.cyan("gitportal status")}`,
        `  ${p.cyan("gitportal fetch")}`,
        `  ${p.cyan("gitportal mr     [options]")}`,
        `  ${p.cyan("gitportal portal [options]")}`,
        `  ${p.cyan("gitportal settings")}`,
        `  ${p.cyan("gitportal about")}`,
        "",
        hr,
        "",
        chalk.bold(p.white("COMMANDS")),
        `  ${p.cyan("status")}          ${p.muted("Show branch & dirty status for all repos")}`,
        `  ${p.cyan("fetch")}           ${p.muted("Fetch all remotes across repos in parallel")}`,
        `  ${p.cyan("mr")}              ${p.muted("Create GitLab merge requests directly (via glab)")}`,
        `  ${p.cyan("portal")}          ${p.muted("GitLab Portal — epics, MRs, issues & branches")}`,
        `  ${p.cyan("settings")}        ${p.muted("Configure portal, switch & MR defaults")}`,
        `  ${p.cyan("about")}           ${p.muted("Show version, features & author info")}`,
        "",
        hr,
        "",
        chalk.bold(p.white("SWITCH OPTIONS")),
        `  ${p.purple("-p, --pull")}       ${p.muted("Pull latest on the target branch after switching")}`,
        `  ${p.purple("-f, --fuzzy")}      ${p.muted("Fuzzy / partial branch name matching")}`,
        `  ${p.purple("-c, --create")}     ${p.muted("Create branch if it doesn't exist")}`,
        `  ${p.purple("-s, --stash")}      ${p.muted("Auto-stash dirty repos before switching")}`,
        `  ${p.purple("    --fetch")}      ${p.muted("Fetch all remotes before switching")}`,
        `  ${p.purple("    --dry-run")}    ${p.muted("Preview what would happen, no changes made")}`,
        "",
        chalk.bold(p.white("MR OPTIONS")),
        `  ${p.purple("-t, --target <b>")}  ${p.muted("Target branch to merge into (skips scope picker)")}`,
        `  ${p.purple("    --repo <name>")} ${p.muted("Restrict to this repo (repeatable)")}`,
        `  ${p.purple("    --title <s>")}   ${p.muted("MR title (skips prompt)")}`,
        `  ${p.purple("    --description")} ${p.muted("MR description (skips prompt)")}`,
        `  ${p.purple("    --labels <csv>")}${p.muted("Comma-separated labels")}`,
        `  ${p.purple("    --draft")}       ${p.muted("Mark MR as draft")}`,
        `  ${p.purple("    --no-push")}     ${p.muted("Skip git push before creating MR")}`,
        "",
        chalk.bold(p.white("PORTAL OPTIONS")),
        `  ${p.purple("    --epic <iid>")}           ${p.muted("Select epic by IID (skips epic picker)")}`,
        `  ${p.purple("    --checkout")}              ${p.muted("Checkout primary branches for epic's repos")}`,
        `  ${p.purple("    --create-mr")}             ${p.muted("Bulk-create MRs for epic issues")}`,
        `  ${p.purple("    --create-issue")}          ${p.muted("Create a new issue in the epic")}`,
        `  ${p.purple("    --issue-project <path>")}  ${p.muted("Project name or path for issue creation")}`,
        `  ${p.purple("    --issue-title <text>")}    ${p.muted("Issue title")}`,
        `  ${p.purple("    --issue-description")}     ${p.muted("Issue description")}`,
        `  ${p.purple("    --issue-labels <csv>")}    ${p.muted("Issue labels")}`,
        `  ${p.purple("    --branch-name <name>")}    ${p.muted("Create this branch for the new issue")}`,
        `  ${p.purple("    --base-branch <name>")}    ${p.muted("Base branch for branch/MR creation")}`,
        "",
        chalk.bold(p.white("GLOBAL OPTIONS")),
        `  ${p.purple("-y, --yes")}        ${p.muted("Auto-confirm all prompts (non-interactive)")}`,
        `  ${p.purple("    --depth n")}    ${p.muted("Repo search depth (default: 4)")}`,
        `  ${p.purple("    --filter p")}   ${p.muted("Only include repos whose name contains pattern")}`,
        `  ${p.purple("    --exclude p")}  ${p.muted("Exclude repos whose name contains pattern")}`,
        `  ${p.purple("    --settings")}   ${p.muted("Open portal settings (group, milestone, iteration…)")}`,
        `  ${p.purple("-v, --version")}    ${p.muted("Show version number")}`,
        `  ${p.purple("-h, --help")}       ${p.muted("Show this help")}`,
        "",
        hr,
        "",
        chalk.bold(p.white("EXAMPLES")),
        `  ${p.muted("$")} ${p.cyan("gitportal develop")}`,
        `  ${p.muted("$")} ${p.cyan("gitportal main --pull")}`,
        `  ${p.muted("$")} ${p.cyan("gitportal feature/auth --stash --pull")}`,
        `  ${p.muted("$")} ${p.cyan("gitportal feat --fuzzy")}`,
        `  ${p.muted("$")} ${p.cyan("gitportal main --create")}`,
        `  ${p.muted("$")} ${p.cyan("gitportal --dry-run develop")}`,
        `  ${p.muted("$")} ${p.cyan("gitportal --exclude legacy develop")}`,
        `  ${p.muted("$")} ${p.cyan("gitportal status")}`,
        `  ${p.muted("$")} ${p.cyan("gitportal fetch")}`,
        `  ${p.muted("$")} ${p.cyan("gitportal mr --target develop --title \"Fix auth\" --labels \"bug\" --yes")}`,
        `  ${p.muted("$")} ${p.cyan("gitportal portal --epic 42 --checkout --yes")}`,
        `  ${p.muted("$")} ${p.cyan("gitportal portal --epic 42 --create-mr --target develop --yes")}`,
        `  ${p.muted("$")} ${p.cyan("gitportal portal --epic 42 --create-issue --issue-project group/repo --issue-title \"Task\" --yes")}`,
      ].join("\n"),
      {
        padding: { top: 1, bottom: 1, left: 3, right: 3 },
        borderStyle: "round",
        borderColor: "#334155",
        title: p.muted(" help "),
        titleAlignment: "right",
      },
    ),
  );
  console.log();
}
