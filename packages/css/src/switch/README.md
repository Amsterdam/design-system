# Switch

Een switch (in het Nederlands: schakelaar) is een besturingselement om snel tussen twee verschillende staten te schakelen. Een schakelaar is van toepassing op een pagina of het hele systeem. Bijvoorbeeld een aan/uit-schakelaar.

## Richtlijnen

- Schakel alleen tussen twee verschillende statussen. Het is een binaire actie.
- Gebruik labels met een schakelaar zodat de actie duidelijk is.
- De actie vindt direct plaats zodra de gebruiker de schakelaar gebruikt.

## Relevante WAI-ARIA eisen

- [Role switch](https://www.w3.org/TR/wai-aria-1.2/#dfn-role): De `input` dient een role `switch` te hebben. De [`role` attribute](https://www.w3.org/TR/wai-aria-1.2/#host_general_role) beschrijft de rol van een element in programma's die er gebruik van maken, zoals screenreaders. Screenreaders zullen in dit geval het element lezen als `switch`.
- [aria-labelledby](https://w3c.github.io/aria/#aria-labelledby): Dit attribute moet worden gedefinieerd wanneer er een bijgesloten label met tekst geplaatst is.
- [aria-label](https://w3c.github.io/aria/#aria-label): Dit attribute moet worden gedefinieerd wanneer er een geen bijgesloten label met tekst geplaatst is.
- In het geval de Switch een HTML input[type="checkbox"] is hoeft de `aria-checked` niet te worden gezet.

## Referenties

- [Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- [Role switch](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)
