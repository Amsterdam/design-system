function c(r){return r.includes("{")?`var(--${r.replace(/[{}]/g,"").replace(/\./g,"-")})`:r}export{c as f};
