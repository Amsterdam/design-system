/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { MouseEvent } from 'react'

export const closeDialog = (event: MouseEvent<HTMLButtonElement>) => event.currentTarget.closest('dialog')?.close()

export const openDialog = (id: string) => (document.querySelector(id) as HTMLDialogElement)?.showModal()
