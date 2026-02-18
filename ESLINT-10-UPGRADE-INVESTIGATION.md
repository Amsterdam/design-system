# ESLint 10 Upgrade Investigation

**Date**: February 18, 2026  
**Status**: ❌ **NOT POSSIBLE** - Waiting for plugin updates  
**Current ESLint Version**: 9.39.2  
**Target ESLint Version**: 10.0.0

## Summary

An upgrade to ESLint 10 is currently **not possible** due to incompatibility with essential ESLint plugins that we use. These plugins must first be updated to support the removed APIs in ESLint 10.

## Breaking Changes in ESLint 10

### 1. ⚠️ **Removed Deprecated Context Methods** (BLOCKER)

ESLint 10 has removed the following deprecated context methods:

- `context.getFilename()` → replaced by `context.filename`
- `context.getPhysicalFilename()` → replaced by `context.physicalFilename`
- `context.getSourceCode()` → replaced by `context.sourceCode`
- `context.getScope()` → replaced by `sourceCode.getScope(node)`
- `context.markVariableAsUsed()` → replaced by `sourceCode.markVariableAsUsed()`

**Impact**: Multiple plugins we use depend on these removed methods.

**Reference**: [ESLint Migration Guide - Removal of deprecated context members](https://eslint.org/docs/latest/use/migrate-to-10.0.0#-removal-of-deprecated-context-members)

### 2. ✅ **eslint-env Comments Now Errors**

In ESLint 9, `/* eslint-env */` comments were deprecated with a warning. In ESLint 10, they are now errors.

**Found instances**: 1

- `/packages/react/jest.config.mjs`: `/* eslint-env node */`

**Solution**: Replace with `/* global process */` or define globals in config

**Impact**: Low - easy to fix

### 3. ✅ **Node.js Version Requirement**

ESLint 10 requires: `^20.19.0 || ^22.13.0 || >=24`

**Current version**: Node.js 24.13.0 ✓  
**Status**: No issues

### 4. ✅ **Removal of eslintrc Support**

ESLint 10 has removed support for the old `.eslintrc` configuration format.

**Current configuration**: Flat config (`eslint.config.mjs`) ✓  
**Status**: No issues

### 5. ✅ **Radix Rule Deprecated Options**

The `"always"` and `"as-needed"` options of the `radix` rule are deprecated.

**Current configuration**: `radix: 'error'` (no specific option) ✓  
**Status**: No issues

## Plugin Compatibility Analysis

### ❌ **BLOCKER: eslint-plugin-react** (v7.37.5)

**Peer Dependency Range**: `^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7`  
**Supports ESLint 10**: ❌ NO

**Error**:

```
TypeError: Error while loading rule 'react/display-name': contextOrFilename.getFilename is not a function
```

**Status**: Open PR #3979 to add ESLint 10 support  
**Issue**: https://github.com/jsx-eslint/eslint-plugin-react/issues/3977  
**PR**: https://github.com/jsx-eslint/eslint-plugin-react/pull/3979

**Maintainer comment** (ljharb):

> "That shouldn't be expected, since we're explicitly not compatible with eslint 10. until the peer dep range is updated, one should not attempt to use eslint 10 with this plugin."

### ❌ **BLOCKER: eslint-plugin-mdx** (v3.6.2)

**Peer Dependency Range**: `>=8.0.0`  
**Supports ESLint 10**: ❌ NO (despite the range)

**Error**:

```
TypeError: Error while loading rule 'mdx/remark': context.getFilename is not a function
```

**Status**: Open issue, no PR yet  
**Issue**: https://github.com/mdx-js/eslint-mdx/issues/604

**Impact**: We use 104 `.mdx` files in Storybook for documentation. MDX linting is essential for our project.

### ⚠️ **eslint-plugin-import** (v2.32.0)

**Peer Dependency Range**: `^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9`  
**Supports ESLint 10**: Not explicitly, may have the same issue

**Status**: Not tested yet due to earlier blockers

### ⚠️ **eslint-plugin-baseline-js** (v0.5.0)

**Peer Dependency Range**: `>=8.57.0 <10`  
**Supports ESLint 10**: ❌ NO (explicitly excluded)

**Status**: Needs to be updated

### ✅ **typescript-eslint** (v8.56.0)

**Peer Dependency Range**: `^8.57.0 || ^9.0.0 || ^10.0.0`  
**Supports ESLint 10**: ✅ YES

**Latest version**: 8.56.0 (available)  
**Status**: Ready for ESLint 10

### ✅ **@typescript-eslint/eslint-plugin** (v8.56.0)

**Peer Dependency Range**: `^8.57.0 || ^9.0.0 || ^10.0.0`  
**Supports ESLint 10**: ✅ YES

**Status**: Ready for ESLint 10

### ✅ **eslint-plugin-jest** (v29.15.0)

**Peer Dependency Range**: `^8.57.0 || ^9.0.0 || ^10.0.0`  
**Supports ESLint 10**: ✅ YES

**Latest version**: 29.15.0 (available)  
**Status**: Ready for ESLint 10

### ✅ **eslint-plugin-perfectionist** (v5.6.0)

**Peer Dependency Range**: `^8.45.0 || ^9.0.0 || ^10.0.0`  
**Supports ESLint 10**: ✅ YES

**Latest version**: 5.6.0 (published Feb 18, 2026, too recent for pnpm minimumReleaseAge)  
**Status**: Ready for ESLint 10 (but keeping current version 5.5.0 for now)

### ✅ **eslint-plugin-storybook** (v10.2.8)

**Peer Dependency Range**: `>=8`  
**Supports ESLint 10**: ✅ Likely

**Status**: Probably compatible

### ✅ **eslint-plugin-mdx** (v3.6.2) - structurally only

**Peer Dependency Range**: `>=8.0.0`  
**Supports ESLint 10**: ❌ NO (see blocker above)

## ESLint Packages That Need to Be Updated

When the upgrade becomes possible, the following packages need to be updated:

| Package                          | Current Version | ESLint 10 Version |
| -------------------------------- | --------------- | ----------------- |
| eslint                           | 9.39.2          | 10.0.0            |
| @eslint/js                       | 9.39.2          | 10.0.1            |
| @typescript-eslint/eslint-plugin | 8.55.0          | 8.56.0            |
| @typescript-eslint/parser        | 8.55.0          | 8.56.0            |
| typescript-eslint                | 8.55.0          | 8.56.0            |
| eslint-plugin-jest               | 29.14.0         | 29.15.0           |
| eslint-plugin-perfectionist      | 5.5.0           | 5.6.0 (optional)  |

## Configuration Changes Needed

### 1. Remove eslint-env comment

**File**: `/packages/react/jest.config.mjs`

**From**:

```js
/* eslint-env node */
import nextJest from "next/jest.js";
```

**To** (option 1 - global comment):

```js
/* global process */
import nextJest from "next/jest.js";
```

**Or to** (option 2 - remove if not needed):

```js
import nextJest from "next/jest.js";
```

Note: The file doesn't use `process` or other Node.js globals, so the comment can probably just be removed.

## Action Plan

### Short Term (Now)

1. ✅ **STAY ON ESLINT 9.39.2** until plugins are updated
2. ✅ Add this documentation to repository
3. ✅ Monitor plugin updates:
   - eslint-plugin-react #3979
   - eslint-plugin-mdx #604
   - eslint-plugin-baseline-js

### Medium Term (Once plugins are updated)

1. Upgrade packages to ESLint 10 compatible versions
2. Remove `/* eslint-env node */` comment from `jest.config.mjs`
3. Test all linting thoroughly
4. Test CI/CD pipelines

### Long Term

- Monitor for new ESLint updates
- Evaluate new ESLint features

## Recommendations

1. **Wait to upgrade** until at least `eslint-plugin-react` and `eslint-plugin-mdx` support ESLint 10
2. **Monitor these issues**:
   - https://github.com/jsx-eslint/eslint-plugin-react/pull/3979
   - https://github.com/mdx-js/eslint-mdx/issues/604
3. **Test the upgrade** in a separate branch once plugins are updated
4. **Document all changes** for the team

## References

- [ESLint 10.0.0 Release Notes](https://github.com/eslint/eslint/releases/tag/v10.0.0)
- [ESLint 10 Migration Guide](https://eslint.org/docs/latest/use/migrate-to-10.0.0)
- [eslint-plugin-react ESLint 10 Issue](https://github.com/jsx-eslint/eslint-plugin-react/issues/3977)
- [eslint-plugin-mdx ESLint 10 Issue](https://github.com/mdx-js/eslint-mdx/issues/604)

## Conclusion

**ESLint 10 upgrade is currently not feasible** due to incompatibility with essential plugins (`eslint-plugin-react` and `eslint-plugin-mdx`). There are active developments to solve this, but until these plugins are updated and released, we must stay on ESLint 9.

The upgrade itself would be relatively simple (package.json updates and removing one comment), but the plugin dependencies currently block progress.
