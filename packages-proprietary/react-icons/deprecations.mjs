// Icons whose component is deprecated, by file basename (e.g. `TrashBin`,
// exported as `TrashBinIcon`). Adds an `@deprecated` comment to the component.
export const deprecatedIcons = {
  Bell: { removeOnOrAfter: '2026-07-09', replacement: 'Notification' },
  BellFill: { removeOnOrAfter: '2026-07-09', replacement: 'NotificationFill' },
  CheckMarkCircle: { removeOnOrAfter: '2026-05-01', replacement: 'Success' },
  CheckMarkCircleFill: { removeOnOrAfter: '2026-05-01', replacement: 'SuccessFill' },
  Cogwheel: { removeOnOrAfter: '2026-05-01', replacement: 'Settings' },
  CogwheelFill: { removeOnOrAfter: '2026-05-01', replacement: 'SettingsFill' },
  HandWithEuroCoin: { removeOnOrAfter: '2026-05-01', replacement: 'PersonsWithEuroCoin' },
  PersonCircle: { removeOnOrAfter: '2026-07-09', replacement: 'UserAccount' },
  PersonCircleFill: { removeOnOrAfter: '2026-07-09', replacement: 'UserAccountFill' },
  TrashBin: { removeOnOrAfter: '2026-07-09', replacement: 'Delete' },
  TrashBinFill: { removeOnOrAfter: '2026-07-09', replacement: 'DeleteFill' },
}

// Deprecated re-exports that alias an icon under another name, keyed by alias.
export const deprecatedAliases = {
  LinkedinIcon: {
    comment:
      'This icon misspells the brand as ‘Linkedin’, with a lowercase ‘i’. Use ‘LinkedInIcon’ instead. Will be removed on or after 2026-05-01.',
    icon: 'LinkedIn',
  },
}

// Builds the `@deprecated` JSDoc comment for an icon, or `undefined` if it is
// not deprecated. `iconName` is the file basename, e.g. `TrashBin`.
export function deprecatedIconComment(iconName) {
  const deprecation = deprecatedIcons[iconName]

  if (!deprecation) return undefined

  return [
    '/**',
    ` * @deprecated The ‘${iconName}’ icon will be removed on or after ${deprecation.removeOnOrAfter}.`,
    ` * Use ‘${deprecation.replacement}’ instead.`,
    ' */',
  ].join('\n')
}
