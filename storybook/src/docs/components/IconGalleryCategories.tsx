/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type * as Icons from '@amsterdam/design-system-react-icons'

type IconName = keyof typeof Icons

export const LearnableIcons: Set<IconName> = new Set([
  'CopyFillIcon',
  'CopyIcon',
  'DeleteFillIcon',
  'DeleteIcon',
  'DownloadIcon',
  'DuplicateFillIcon',
  'DuplicateIcon',
  'EmbedIcon',
  'FilterFillIcon',
  'FilterIcon',
  'FontSizeIcon',
  'FullScreenCloseIcon',
  'FullScreenOpenIcon',
  'LayersFillIcon',
  'LayersIcon',
  'LinkExternalFillIcon',
  'LinkExternalIcon',
  'LinkIcon',
  'LogInIcon',
  'LogOutIcon',
  'MailFillIcon',
  'MailIcon',
  'MaximizeIcon',
  'MenuIcon',
  'MinimizeIcon',
  'NotificationFillIcon',
  'NotificationIcon',
  'PrintFillIcon',
  'PrintIcon',
  'RedoIcon',
  'SaveFillIcon',
  'SaveIcon',
  'ShareIcon',
  'StandByIcon',
  'UndoIcon',
  'UploadIcon',
  'UserAccountFillIcon',
  'UserAccountIcon',
  'WiFiIcon',
])

export const BrandIcons: Set<IconName> = new Set([
  'FacebookIcon',
  'InstagramIcon',
  'LinkedInIcon',
  'MastodonIcon',
  'WhatsappIcon',
  'XIcon',
])

export const DirectionIcons: Set<IconName> = new Set([
  'ArrowBackwardIcon',
  'ArrowDownIcon',
  'ArrowForwardIcon',
  'ArrowUpIcon',
  'ChevronBackwardIcon',
  'ChevronDownIcon',
  'ChevronForwardIcon',
  'ChevronUpIcon',
])

export const MediaIcons: Set<IconName> = new Set([
  'FastForwardIcon',
  'NextIcon',
  'PauseIcon',
  'PlayIcon',
  'PreviousIcon',
  'ReplayIcon',
  'RewindIcon',
  'VolumeOffFillIcon',
  'VolumeOffIcon',
  'VolumeOnFillIcon',
  'VolumeOnIcon',
])

export const SeverityIcons: Set<IconName> = new Set([
  'ErrorFillIcon',
  'ErrorIcon',
  'InfoFillIcon',
  'InfoIcon',
  'SuccessFillIcon',
  'SuccessIcon',
  'WarningFillIcon',
  'WarningIcon',
])

export const UniversalIcons: Set<IconName> = new Set(['CloseIcon', 'SearchIcon', 'SettingsFillIcon', 'SettingsIcon'])

export const FormattingIcons: Set<IconName> = new Set([
  'FormattingBoldIcon',
  'FormattingItalicIcon',
  'FormattingStrikethroughIcon',
  'FormattingUnderlineIcon',
])

export const KeyboardKeyIcons: Set<IconName> = new Set([
  'KeyboardKeyCommandIcon',
  'KeyboardKeyControlIcon',
  'KeyboardKeyEnterIcon',
  'KeyboardKeyShiftIcon',
])

export const DeprecatedIcons: Set<IconName> = new Set([
  'BellFillIcon',
  'BellIcon',
  'CheckMarkCircleFillIcon',
  'CheckMarkCircleIcon',
  'CogwheelFillIcon',
  'CogwheelIcon',
  'HandWithEuroCoinIcon',
  'PersonCircleFillIcon',
  'PersonCircleIcon',
  'TrashBinFillIcon',
  'TrashBinIcon',
])
