# Heading

Dit is een HTML tag die toegankelijkheid en standaarden faciliteert. Het gebruik is niet zo zeer voor opmaakdoeleinden maar dient meer als informatie structuring. Het is hierarchisch van aard. Een gebruiker zou middels headings een goede indruk moeten krijgen van de content van een webpagina. De beschikbare headings zijn: `h1`, `h2`, `h3`, `h4`, `h5` en `h6`.

## Toegankelijkheid

Headings en de heading structuur is vooral belangrijk voor screen readers en zoekmachines.

## Richtlijnen

- Één `h1` tag per pagina die het hoofdonderwerp van de pagina beschrijft.
- Een heading omschrijft de content eronder.
- Een heading niet gebruiken voor opmaak en styling.
- Gebruik heading hierarchisch en sla niet een heading niveau over. Dus na een `h1` volgt een `h2` en dus niet een `h3`.

## CSS implementatie

We hebben voor de heading een aantal css classes die direct op een heading geplaatst kunnen worden. De css base class is `amsterdam-heading` en daarop aansluitend kan je een css modifier class met een level suffix gebruiken `amsterdam-heading-{level}`. Bijvoorbeeld `amsterdam-headig-1`.

## Referenties

- [W3C - Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [W3C - Headings & labels](https://www.w3.org/TR/WCAG21/#headings-and-labels)
- [A11Y project - Heading structure](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/)
