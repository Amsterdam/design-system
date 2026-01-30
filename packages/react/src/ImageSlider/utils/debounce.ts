export function debounce<F extends (...args: unknown[]) => void>(
  fn: F,
  delay: number,
): (...args: Parameters<F>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}
