/**
 * Checks for deprecated ESLint and Stylelint rules in the current config.
 * Usage: node scripts/check-deprecated.mjs
 */

/* eslint-disable no-console */

import { ESLint } from 'eslint';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import stylelint from 'stylelint';

const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const GREEN = '\x1b[32m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';

// ─── ESLint ──────────────────────────────────────────────────────────────────

async function checkESLint() {
	console.log(`\n${BOLD}ESLint${RESET}`);

	const eslint = new ESLint();
	const config = await eslint.calculateConfigForFile('src/index.ts');

	const { plugins, rules: activeRules } = config;
	const deprecated = [];

	for (const ruleName of Object.keys(activeRules)) {
		const [severity] = [].concat(activeRules[ruleName]);

		if (severity === 0 || severity === 'off') continue;

		let rule;

		if (!ruleName.includes('/')) {
			// Core ESLint rule
			rule = builtinRules.get(ruleName);
		} else {
			// Plugin rule — extract plugin name from prefix
			const slashIdx = ruleName.indexOf('/');
			let pluginKey = ruleName.slice(0, slashIdx);
			const localName = ruleName.slice(slashIdx + 1);

			// Handle scoped plugins like @typescript-eslint/rule → plugin key '@typescript-eslint'
			rule = plugins[pluginKey]?.rules?.[localName];
		}

		if (rule?.meta?.deprecated) {
			deprecated.push({
				rule: ruleName,
				replacedBy: rule.meta.replacedBy ?? [],
				url: rule.meta.docs?.url ?? rule.meta.url ?? null,
			});
		}
	}

	if (deprecated.length === 0) {
		console.log(`  ${GREEN}No deprecated rules found.${RESET}`);
	} else {
		console.log(`  ${RED}${BOLD}${deprecated.length} deprecated rule(s):${RESET}`);

		for (const { rule, replacedBy, url } of deprecated) {
			const replacement =
				replacedBy.length > 0 ? ` ${DIM}→ replace with: ${replacedBy.join(', ')}${RESET}` : ` ${DIM}→ no replacement${RESET}`;
			const link = url ? ` ${DIM}(${url})${RESET}` : '';

			console.log(`  ${YELLOW}✖${RESET} ${rule}${replacement}${link}`);
		}
	}

	return deprecated.length;
}

// ─── Stylelint ────────────────────────────────────────────────────────────────

async function checkStylelintConfig(label, stylelintConfig) {
	const resolved = await stylelint.resolveConfig('./dummy.css', { config: stylelintConfig });
	const { rules: activeRules = {}, pluginFunctions = {} } = resolved;
	const deprecated = [];
	const unknown = [];

	for (const ruleName of Object.keys(activeRules)) {
		const value = activeRules[ruleName];

		// disabled rules
		if (value === null || (Array.isArray(value) && value[0] === null)) continue;

		const pluginFn = pluginFunctions[ruleName];

		if (pluginFn !== undefined) {
			// Plugin rule — check for deprecated flag
			if (pluginFn?.deprecated || pluginFn?.meta?.deprecated) {
				deprecated.push({ rule: ruleName, replacedBy: pluginFn?.meta?.replacedBy ?? [] });
			}
		} else {
			// Built-in stylelint rule
			const builtinLoader = stylelint.rules[ruleName];

			if (builtinLoader === undefined) {
				unknown.push(ruleName);

				continue;
			}

			const builtinRule = await builtinLoader;

			if (builtinRule?.deprecated || builtinRule?.meta?.deprecated) {
				deprecated.push({ rule: ruleName, replacedBy: [] });
			}
		}
	}

	console.log(`\n${BOLD}Stylelint — ${label}${RESET}`);

	if (deprecated.length === 0 && unknown.length === 0) {
		console.log(`  ${GREEN}No deprecated rules found.${RESET}`);
	}

	if (deprecated.length > 0) {
		console.log(`  ${RED}${BOLD}${deprecated.length} deprecated rule(s):${RESET}`);

		for (const { rule, replacedBy } of deprecated) {
			const replacement =
				replacedBy.length > 0 ? ` ${DIM}→ replace with: ${replacedBy.join(', ')}${RESET}` : ` ${DIM}→ no replacement${RESET}`;

			console.log(`  ${YELLOW}✖${RESET} ${rule}${replacement}`);
		}
	}

	if (unknown.length > 0) {
		console.log(`  ${RED}${BOLD}${unknown.length} unknown/removed rule(s):${RESET}`);

		for (const rule of unknown) {
			console.log(`  ${RED}✖${RESET} ${rule} ${DIM}→ rule does not exist (possibly renamed or removed)${RESET}`);
		}
	}

	return deprecated.length + unknown.length;
}

async function checkStylelint() {
	const scssConfig = {
		plugins: ['stylelint-order', 'stylelint-scss'],
		extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-recommended-vue'],
	};

	const lessConfig = {
		plugins: ['stylelint-order', 'stylelint-less'],
		extends: ['stylelint-config-standard', 'stylelint-config-standard-less', 'stylelint-config-recommended-vue'],
	};

	const scssIssues = await checkStylelintConfig('SCSS', scssConfig);
	const lessIssues = await checkStylelintConfig('LESS', lessConfig);

	return scssIssues + lessIssues;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
	console.log(`${BOLD}Checking for deprecated lint rules...${RESET}`);

	const [eslintIssues, stylelintIssues] = await Promise.all([checkESLint(), checkStylelint()]);

	const total = eslintIssues + stylelintIssues;

	console.log(`\n${total === 0 ? GREEN : RED}${BOLD}Total issues: ${total}${RESET}\n`);

	if (total > 0) process.exit(1);
}

main().catch(err => {
	console.error(err);
	process.exit(1);
});
