export const Switch = () => {
  return (
    <label className="amsterdam-switch">
      <input type="checkbox" className="amsterdam-switch-input" onChange={(e: any) => console.log(e.target.checked)} />
      {/* outer span: the container where the switcher is hosted*/}
      <span className="amsterdam-switch-toggle">
        <span className="amsterdam-switch-toggle-inner"></span>
      </span>
    </label>
  )
}
