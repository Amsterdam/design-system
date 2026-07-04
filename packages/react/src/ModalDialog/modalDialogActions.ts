/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { MouseEvent } from 'react'

/** Closes the dialog that contains the clicked element, e.g. a Button in the footer of a Modal Dialog. */
export const closeModalDialog = (event: MouseEvent<HTMLButtonElement>) => event.currentTarget.closest('dialog')?.close()

/** Opens the dialog that the CSS selector matches – e.g. `'#my-dialog'` – as a modal. */
export const openModalDialog = (selector: string) =>
  (document.querySelector(selector) as HTMLDialogElement)?.showModal()
