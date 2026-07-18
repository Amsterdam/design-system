/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import assets from '../../../../packages-proprietary/assets/package.json'
import reactIcons from '../../../../packages-proprietary/react-icons/package.json'
import tokens from '../../../../packages-proprietary/tokens/package.json'
import css from '../../../../packages/css/package.json'
import react from '../../../../packages/react/package.json'
import { InlineList } from '../InlineList/InlineList'

// Versions come from each package manifest, so this list tracks every release without manual updates.
const packages = [
  { label: 'Assets', version: assets.version },
  { label: 'CSS', version: css.version },
  { label: 'React', version: react.version },
  { label: 'React Icons', version: reactIcons.version },
  { label: 'Tokens', version: tokens.version },
]

/** Lists the current published version of each package as an inline band. */
export const PackageVersions = () => (
  <InlineList>
    {packages.map(({ label, version }) => (
      <InlineList.Item key={label}>
        {label} <strong>{version}</strong>
      </InlineList.Item>
    ))}
  </InlineList>
)
