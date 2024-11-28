# ADS Token Structure

## Brand Tokens

Brand Tokens hebben de vorm `prefix.property.option`.
Alle drie de elementen zijn verplicht.

1. Prefix = `ams`
2. Property is een CSS-property of een gangbare term voor een groep properties.
3. Option is een label voor een toegestane waarde voor de property.

Property en Option mogen dashes bevatten.

Voorbeeld van een groep properties is Spacing voor margin, padding en gap.
Althans, momenteel gebruiken we dezelfde waarden voor die drie.
Kopiëren om een CSS-property af te dwingen is onzin.
Daarnaast worden de tokens voor ‘border width’ ook op andere, soortgelijke properties toegepast.

De labels voor de Options zijn t-shirt sizes, genummerd of een verzameling.
De waarde van elke Option is een geldige CSS-value.

Voor elke groep Brand Tokens (die met een gedeelde property) is er een lijst van CSS-properties waarvoor gebruik van het token vereist is.

### Aspect ratio

Vereist voor CSS property `aspect-ratio`.

- `ams.aspect-ratio.x-tall`
- `ams.aspect-ratio.tall`
- `ams.aspect-ratio.square`
- `ams.aspect-ratio.wide`
- `ams.aspect-ratio.x-wide`
- `ams.aspect-ratio.2x-wide`

### Border width

Vereist voor CSS properties `border-*-width`, `box-shadow`, `text-decoration-thickness`.

(Het is dus border-width, niet border.width.
Een eventuele border-style zou een apart Brand Token zijn.)

- `ams.border-width.sm`
- `ams.border-width.md`
- `ams.border-width.lg`
- `ams.border-width.xl`

### Color

Vereist voor CSS properties `color`, `background-color`, `border-*-color`, `box-shadow`, `text-decoration-color`, `fill`, `stroke`.

(Ook hier dus een dash tussen kleurnaam en intensiteit, geen dot.)

- `ams.color.azure-60`
- `ams.color.blue-60`
- `ams.color.blue-80`
- `ams.color.green-60`
- `ams.color.lime-60`
- `ams.color.magenta-60`
- `ams.color.neutral-60`
- `ams.color.orange-60`
- `ams.color.purple-60`
- `ams.color.red-60`
- `ams.color.red-80`
- `ams.color.yellow-60`

### Grid gap

Vereist voor CSS properties `gap`, `padding-*` op grid containers.

(Deze is afgesplitst van ‘Space’.
Het is een aparte schaal met een specifieke toepassing.)

- `ams.grid-gap.xs`
- `ams.grid-gap.sm`
- `ams.grid-gap.md`
- `ams.grid-gap.lg`
- `ams.grid-gap.xl`

### Font family

Vereist voor CSS property `font-family`.

- `ams.font-family.body-text` (dat ‘-text’ is niet heel mooi maar wel het meest correct)
- `ams.font-family.headings`
- `ams.font-family.monospace`

### Font size

Vereist voor CSS properties `font-size`.
Bruikbaar voor berekeningen in `block-size`, `inline-size`.

- `ams.font-size.sm`
- `ams.font-size.md`
- `ams.font-size.lg`
- `ams.font-size.xl`
- `ams.font-size.2xl`
- `ams.font-size.3xl`
- `ams.font-size.4xl`

### Font weight

Vereist voor CSS property `font-weight`.

- `ams.font-weight.light`
- `ams.font-weight.normal` (vanwege CSS beter dan `default` – of is ‘normal’ voor alles een vriendelijker naam dan ‘default’?)
- `ams.font-weight.bold`
- `ams.font-weight.x-bold` (`bolder` bestaat in CSS maar zou afwijken van `x-tall`, `x-wide` etc.)

### Line height

Vereist voor CSS properties `line-height`.
Bruikbaar voor berekeningen in `block-size`, `inline-size`.

- `ams.line-height.5xs`
- `ams.line-height.4xs`
- `ams.line-height.3xs`
- `ams.line-height.2xs`
- `ams.line-height.xs`
- `ams.line-height.sm`
- `ams.line-height.md`
- `ams.line-height.2xl`
- `ams.line-height.5xl`

### Space

Vereist voor CSS properties `margin-*`, `padding-*`, `*-gap`.

- `ams.space.xs`
- `ams.space.sm`
- `ams.space.md`
- `ams.space.lg`
- `ams.space.xl`

## Common Tokens

Common Tokens hebben de vorm `prefix.group.property.option`.
Alle vier de elementen zijn verplicht.
Als er één optie is dan heet die `default`.

1. Prefix = `ams` (zelfde als bij Brand Tokens).
2. Group wordt uitgedrukt door een gangbare term voor een groep componenten of voor een aspect van vormgeving of gedrag.
3. Property is een CSS-property of een gangbare term voor een groep properties (zelfde als bij Brand Tokens).
4. Option is een label voor een toegestane waarde voor de property (zelfde als bij Brand Tokens).

Options worden hier veel vaker als verzamelingen ingedeeld dan als t-shirt sizes of genummerd omdat ze hier meer betekenisvol (semantisch) zijn.
(En je hebt snel de neiging hier Component Token Modifiers te gebruiken, zoals ‘disabled’ en ‘hover’, zie Form Controls.)

(Moet de waarde van een Common Token uit een Brand Token komen, of mag het ook een CSS value zijn?)

Hieronder een verkenning van de mogelijke groepen en de tokens die daarbij horen.
Deze bestaan momenteel niet of anders.

### Feedback

Bruikbaar voor componenten Alert, Character Count, Error message, Field, Field Set, Form Error List, en alle formulierelementen.

(‘Feedback’ is een bekende term hiervoor, maar helaas geen meervoud.)

#### Feedback Color

- `ams.feedback.color.error` (of negative)
- `ams.feedback.color.info` (of neutral)
- `ams.feedback.color.success` (of positive)
- `ams.feedback.color.warning` (of attention)

### Actions

‘Action’ is binnen NLDS de geaccepteerde naam voor alle soorten links en buttons.

(Meervoud maken is hier wat geforceerd.
‘Interaction’ is ook geen meervoud.
Clicks? :D
React Native heeft ‘touchables’
Pressables?
Far-fetched?)

#### Actions Cursor

Deze hebben we al; de namen moeten een beetje gehusseld worden.

(Is dit stiekem een Brand Token? Hun waarden komen uit CSS, niet uit een Brand Token.)

- `ams.actions.cursor.activate` (of `trigger`?)
- `ams.actions.cursor.busy`
- `ams.actions.cursor.disabled`
- `ams.actions.cursor.inert` (waar zou deze voor zijn?)
- `ams.actions.cursor.navigate` (kan onder `activate` vallen?)
- `ams.actions.cursor.submit` (kan onder `activate` vallen?)

#### Actions Color

- `ams.actions.color.default` (of toch `primary`? we hebben geen `secondary`)
- `ams.actions.color.disabled`
- `ams.actions.color.contrast`
- `ams.actions.color.inverse`

#### Actions Focus

(Hmm… hier willen we van de ‘outline offset’ wel graag aangeven dat het om die van de ‘focus’ gaat, maar dat maakt dit stukje geen geldige CSS-property meer.
Zie ook Common Tokens voor Form Controls hieronder.)

- `ams.actions.focus-outline-offset.default`

### Body Texts

Groepeert alle aspecten van statische tekst – dus uitgezonderd links, buttons, formulieren.

Te gebruiken door Paragraph,

(Afgeleid van `body-text` in de Brand Tokens, al is Body Texts geen gangbaar meervoud.
Verleidelijk om `body` te gebruiken maar dat is verwarrend met `<body>` en `.ams-body`.
Utrecht gebruikt `document` maar headings zitten ook in het document.)

#### Body Texts Font Family

- `ams.body-texts.font-family.default` = `ams.font-family.body-text`
- `ams.body-texts.font-family.monospace` = `ams.font-family.monospace` (alle monospace toepassingen op een hoop?)

#### Body Texts Font Size

- `ams.body-texts.font-size.sm` = `ams.font-size.sm`
- `ams.body-texts.font-size.md` = `ams.font-size.md`
- `ams.body-texts.font-size.lg` = `ams.font-size.lg`
- `ams.body-texts.font-size.xl` = `ams.font-size.xl`

(Dit lijkt een beetje… consistent maar overbodig?
Het is geen toeval dat de niveaus van de Brand Tokens gelijk zijn aan de groottes van de Body Texts.
Maar: zie line heights.)

#### Body Texts Font Weight

- `ams.body-texts.font-weight.default` = `ams.font-weight.normal`
- `ams.body-texts.font-weight.bold` = `ams.font-weight.x-bold` (willen we hier ook ‘extra bold’ gebruiken?)

#### Body Texts Line Height

- `ams.body-texts.line-height.sm` = `ams.line-height.2xl`
- `ams.body-texts.line-height.md` = `ams.line-height.5xl`
- `ams.body-texts.line-height.lg` = `ams.line-height.2xl`
- `ams.body-texts.line-height.xl` = `ams.line-height.2xl`

(Deze is niet overbodig, dus dan ‘Body Texts Font Size’ toch ook maar handhaven?)

### Headings

Te gebruiken door Heading, Page Heading, Label, Field Set Legend en Accordion Button.

#### Headings Font Family

- `ams.headings.font-family.default` = `ams.font-family.headings` (of direct het Brand Token aanroepen?)

#### Headings Font Size

- `ams.headings.font-size.level-0` = `ams.font-size.4xl`
- `ams.headings.font-size.level-1` = `ams.font-size.3xl`
- `ams.headings.font-size.level-2` = `ams.font-size.2xl`
- `ams.headings.font-size.level-3` = `ams.font-size.xl`
- `ams.headings.font-size.level-4` = `ams.font-size.lg`
- `ams.headings.font-size.level-5` = `ams.font-size.md`
- `ams.headings.font-size.level-6` = `ams.font-size.sm`

#### Headings Font Weight

Zo dwing je af dat elke heading standaard een ‘extra bold’ font weight heeft:

- `ams.headings.font-weight.default` = `ams.font-weight.x-bold`

Zowel ‘bold’ als ‘extra bold’ toestaan kan bijvoorbeeld met ‘lighter’, wat in CSS bestaat:

- `ams.headings.font-weight.default` = `ams.font-weight.x-bold`
- `ams.headings.font-weight.lighter` = `ams.font-weight.bold`

#### Headings Line Height

- `ams.headings.line-height.level-0` = `ams.line-height.5xs`
- `ams.headings.line-height.level-1` = `ams.line-height.4xs`
- `ams.headings.line-height.level-2` = `ams.line-height.3xs`
- `ams.headings.line-height.level-3` = `ams.line-height.2xs`
- `ams.headings.line-height.level-4` = `ams.line-height.xs`
- `ams.headings.line-height.level-5` = `ams.line-height.sm`
- `ams.headings.line-height.level-6` = `ams.line-height.md`

#### Headings Color

- `ams.headings.color.default` = `ams.color.neutral-100`
- `ams.headings.color.inverse` = `ams.color.neutral-0`

### Form Controls

Even alles op een hoop:

- `ams.form-controls.background-color.default` (zou `fill` hier logisch zijn ipv `background-color`?) = `ams.color.neutral-0`
- `ams.form-controls.background-color.disabled` = `ams.color.neutral-0` (maken we wellicht later grijs)
- `ams.form-controls.border-width.default` (hier is `default` logisch vanwege `hover`) = `ams.border-width.sm`
- `ams.form-controls.border-width.hover` = `ams.border-width.md` (dit splitst dus de `box-shadow` CSS, handig?)
- `ams.form-controls.border-color.default` = `ams.color.neutral-100`
- `ams.form-controls.border-color.disabled` = `ams.color.neutral-60`
- `ams.form-controls.border-color.invalid` = `ams.color.red-60` (aah hier zou je heel graag `color.feedback.error` willen gebruiken)
- `ams.form-controls.border-color.invalid-hover` = `ams.color.red-80`
- `ams.form-controls.color.default` = `ams.color.neutral-100`
- `ams.form-controls.color.disabled` = `ams.color.neutral-60`
- `ams.form-controls.color.placeholder` = `ams.color.neutral-60`
- `ams.form-controls.font-family.default` = `ams.font-family.body-text`
- `ams.form-controls.font-size.default` = `ams.font-size.md`
- `ams.form-controls.font-weight.default` = `ams.font-weight.normal`
- `ams.form-controls.line-height.default` = `ams.line-height.5xl` (kans voor kleinere regelhoogte in formulieren indien gewenst?)
- `ams.form-controls.outline-offset.default` = `ams.actions.focus-outline-offset.default` (mag niet, Common roept Common aan… focus lijkt toch wel een Brand Token)
- `ams.form-controls.padding-block.default` = `ams.space.sm`
- `ams.form-controls.padding-inline.default` = `ams.space.md`

(Best een paar `.default`s die niet nodig lijken.
Vier omdat we font dingen niet hergebruiken, zou misschien toch kunnen.
Twee voor paddings die we niet (nooit?) willen laten veranderen.)

(Of moeten we color, font-\* en line-height toch uit een Text groep moeten halen?)

(Probeer hier de tokens voor Radio en Checkbox maar eens in te fietsen?)

(Over dat fill: [Polaris](https://polaris.shopify.com/design/colors/using-color) onderscheidt backgrounds, surfaces en fills.
Moeten we nog in duiken.
Maar is dus ook een andere groepering dan vergelijkbare componenten en misschien ook dan aspecten.)

## Component Tokens

Component Tokens hebben de vorm `prefix.block.element?.modifier?.property`, in overeenstemming met NLDS.

1. Prefix = `ams` (voor ons dan)
2. Block is de naam van het component, bijvoorbeeld `button` of `link`.
3. Element is een onderdeel van het component, bijvoorbeeld `icon` of `label`.
4. Modifier is een variatie of state van het component, bijvoorbeeld `large`, `checked` of `hover`.
5. Property is de naam van de visuele eigenschap waarvoor je een ontwerpkeuze kan maken, bijvoorbeeld `color` of `font-weight`.

### Voorbeelden

Deze structuur voor Brand en Common Tokens zou als volgt worden toegepast in onze componenten:

- `ams.accordion.button.color` = `ams.actions.color.default`
- `ams.alert.border-style` = "solid" (staat er nu zo, zonder token, is dat oké?)
- `ams.breadcrumb-link` = `ams.action.color.default`
- `ams.button.background-color` = `ams.actions.color.default`
- `ams.button.color` = `ams.body-texts.color.inverse`
- `ams.button.font-family` = `ams.body-text.font-family`
- `ams.text-input.background-color` = `ams.form-controls.background-color`
- `ams.text-input.box-shadow` = `inset 0 0 0 {ams.form-controls.border-width.default} {ams.form-controls.border-color.default}`
- `ams.text-input.hover.box-shadow` = `inset 0 0 0 {ams.form-controls.border-width.hover} {ams.form-controls.border-color.default}`

## Discussie

### Is drie niveaus eigenlijk wel genoeg?

Dit typte ik eerst bij Common Tokens:

(Na een hoop voorbeelden typen lijkt het ook een idee om Common Tokens precies zo in te richten als Component Tokens, zodat je ze gewoon met JavaScript kan mergen… maar dan wordt het meer een template?)

(Ik heb de neiging om Common Tokens op 1 van 2 manieren in te richten:
1 als groep componenten zoals Form Controls,
2 als een aspect dat door meerdere componenten wordt gebruikt zoals Actions en Feedback.
Mag dat allebei?
Blijkt hieruit dat we een level missen?
Breek ik mijn eigen regels?)

En toen dacht ik:

1. Je hebt een kleur rood (`ams.color.red-60`) ← Brand Token
2. Die noem je de error kleur (`ams.feedback.color.error`) ← ??? Token… Semantic?
3. Je hebt een Text Input met een foute border (`ams.text-input.invalid.box-shadow`) ← Component Token
4. Maar daar wil je eigenlijk een groep gebruiken (`ams.form-controls.border-color.invalid`) ← Common Token

Hmmm…

### Niveau wel of niet in naam token

Dit is ook het moment om een knoop door te hakken of we al dan niet de niveaus ‘brand’ en ‘common’ expliciet in de namen van die tokens willen opnemen.

Ze maken het superduidelijk op welk niveau je zit.
Dus ook of gebruik van het token verplicht is (brand), of dat het je helpt om consistent te zijn (common).
Het kan helpen bij autocomplete in de IDE: tik `ams.common.` om te zoeken of er al iets bestaat dat je kan gebruiken.
Zo nee, probeer het nog eens met `ams.brand.`.

Wel worden de namen natuurlijk iets langer.
Misschien zijn er ander manieren om het onderscheid inzichtelijk te maken, of is dat niet per se nodig.

Inhoudelijk zal niet altijd direct (en niet voor iedereen) duidelijk zijn of het tweede deel van de naam een property of een group is, zeker omdat de ‘property’ van brand ook iets anders mag zijn dan een CSS-property, zoals ‘space’.
De vormen `ams.property.option` en `ams.group.property.option` zorgen al voor wat onderscheid tussen beide groepen omdat de ene altijd 3 elementen heeft en de andere 4.
Maar Component Tokens kunnen er ook 3 of 4 hebben.
Wel is het inhoudelijke onderscheid met Component Tokens iets duidelijker: de meeste mensen zullen `ams.button.*` en `ams.card.*` goed herkennen als Component Token, al is dat voor minder beroemde componenten niet altijd het geval.

Het zou helpen als `group` altijd een meervoudsvorm zou zijn.
Dan kun je zorgen voor: ‘ui-achtig ding’ --> component, ‘meervoudig woord’ --> common, ‘vormgevingsaspect’ --> brand.

Zonder prefix zijn met name de Brand Tokens wel fantastisch kort.
Iets als `ams.font-family.headings` zegt gewoon letterlijk ‘Dit is de Amsterdamse font family voor headings’, en `ams.font-size-md` net zo.
Voor de kleuren is het wellicht nog de moeite waard om de `-60` eraf te poetsen zodat je `ams.color.blue` krijgt – hoe mooi wil je het hebben.

Ook voor Common Tokens zijn bijvoorbeeld `ams.headings.color.default` en `ams.actions.cursor.disabled` best duidelijk.

### Tokens aanroepen vanuit componenten

Componenten mogen zowel Brand als Common Tokens aanroepen.
Alleen Common Tokens toestaan is wat te strikt – in sommige gevallen moet je dan een letterlijke kopie maken van Brand naar Common.
Ook NLDS geeft aan dat beide mag.

Wel moeten mensen op de een of andere manier zorgen dat ze een Common Token kiezen als daar een toepasselijke van bestaat.
Als iemand een `ColorInput` gaat maken moet die voor de border de `ams.form-controls.border` gebruiken, niet de `ams.border-width.md`.
Wellicht kunnen we dat zelfs via Style Dictionary en extended token config ondersteunen?
