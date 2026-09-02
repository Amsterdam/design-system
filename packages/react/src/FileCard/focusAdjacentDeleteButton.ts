/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * Moves focus to the delete button of the next file, or of the previous one when the last file is removed.
 * Does nothing when the File Card is not part of a list, as there is no telling where focus should go instead.
 */
export const focusAdjacentDeleteButton = (button: HTMLButtonElement) => {
  const list = button.closest('li')?.parentElement

  if (!list) {
    return
  }

  const buttons = Array.from(list.querySelectorAll<HTMLButtonElement>('.ams-file-card__actions button'))
  const index = buttons.indexOf(button)

  const adjacent = buttons[index + 1] ?? buttons[index - 1]

  adjacent?.focus()
}
