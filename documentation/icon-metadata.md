<!-- @license CC0-1.0 -->

# Icon metadata

Icons can have metadata that helps you find and use them correctly.
For example, it is used inside the searchbar to make it easier to find a specific icon in the icon overview, marks icons that should no longer be used and so much more.

## Properties

Only `name` is required. All other properties are optional.

| Property              | Type       | Required | Description                                                                                                                               |
| --------------------- | ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `aliases`             | `string[]` | No       | Other words people may use to find the icon. Dutch aliases can be used.                                                                   |
| `category`            | `string`   | No       | The group the icon belongs to, for example `vehicles`.                                                                                    |
| `deprecated`          | `boolean`  | No       | Set to `true` when the icon is getting removed soon.                                                                                      |
| `deprecatedBy`        | `string`   | No       | The name of the icon that replaces this one. Only allowed when `deprecated` is `true`, and only needed when a fitting replacement exists. |
| `directional`         | `boolean`  | No       | Set to `true` if the icon gets mirrored on pages with `rtl`.                                                                              |
| `name`                | `string`   | Yes      | The name of the icon.                                                                                                                     |
| `requireVisibleLabel` | `boolean`  | No       | Set to `true` when the icon must always be used together with a visible label, because the icon alone is not clear enough on its own.     |

## Structure

`IconMetadata` is either an active icon or a deprecated icon:

- **Active:** `deprecated` is `false` or left out. `deprecatedBy` is not allowed.
- **Deprecated:** `deprecated` is `true`. `deprecatedBy` is optional.

TypeScript gives an error when you set `deprecatedBy` on an icon that is not deprecated. Setting `deprecated: false` is allowed, but it is the same as leaving it out.

```ts
type BaseIconMeta = {
  aliases?: string[];
  category?: string;
  directional?: boolean;
  name: string;
  requireVisibleLabel?: boolean;
};

export type IconMetadata =
  | ({
      deprecated?: false;
      deprecatedBy?: never;
    } & BaseIconMeta)
  | ({
      deprecated: true;
      deprecatedBy?: string;
    } & BaseIconMeta);
```

## How to use

The metadata lives next to the icons in `packages-proprietary/assets/icons`.

The bare minimum only contains the `name`:

```ts
const iconMeta: IconMetadata = {
  name: "Arrow Right",
};
```

A realistic example with several properties:

```ts
const iconMeta: IconMetadata = {
  aliases: ["pijl", "next", "volgende"],
  category: "arrows",
  directional: true,
  name: "Arrow Right",
};
```

A deprecated icon with a replacement:

```ts
const iconMeta: IconMetadata = {
  aliases: ["pijl", "next", "volgende"],
  category: "arrows",
  deprecated: true,
  deprecatedBy: "Arrow Right",
  directional: true,
  name: "Arrow Old",
};
```

A full example that uses every property:

```ts
const iconMeta: IconMetadata = {
  aliases: ["voorbeeld", "sample"],
  category: "examples",
  deprecated: true,
  deprecatedBy: "Better Example",
  directional: true,
  name: "Example Icon",
  requireVisibleLabel: true,
};
```

When using `deprecatedBy`, make sure the value matches the name of the icon.

## Announcing that an icon is deprecated

1. Set `deprecated: true` in the metadata of the icon.
2. If a fitting replacement exists, add it as `deprecatedBy`. Use the exact `name` of the replacement icon.
3. If there is no replacement, leave `deprecatedBy` out.

## Adding metadata for a new icon

1. Create a metadata file for the icon in `packages-proprietary/assets/icons`.
2. Import the metadata in the `index.ts` file in that same folder.
3. Export it from `index.ts`.

The `index.ts` file collects all metadata in one place, so you don't need to grab every metadata separately.

```ts
// packages-proprietary/assets/icons/index.ts
import AirplaneMeta from "./Airplane";
import AppleMeta from "./Apple";

export const iconMetadata = [AirplaneMeta, AppleMeta];
```
