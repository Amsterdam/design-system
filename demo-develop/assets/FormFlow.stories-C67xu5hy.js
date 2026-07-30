import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{G as r,i}from"./index.esm-AHCPMkhr.js";import{A as a,C as o,I as s,J as c,M as l,O as u,P as d,T as f,U as p,X as m,d as h,f as g,j as _,m as v,o as y,p as b,s as x,u as S,v as C,w,y as T}from"./index.esm-C2MNZycB.js";import{n as E,t as D}from"./PageLayout-pE6zJ9N7.js";var O,k,A=e((()=>{m(),O=n(),k=({children:e,...t})=>(0,O.jsxs)(a,{...t,children:[(0,O.jsx)(l,{}),e,(0,O.jsxs)(_,{children:[(0,O.jsx)(_.Spotlight,{children:(0,O.jsx)(C,{paddingVertical:`x-large`,children:(0,O.jsx)(C.Cell,{span:{narrow:4,medium:6,wide:7},children:(0,O.jsxs)(S,{gap:`small`,children:[(0,O.jsx)(T,{color:`inverse`,level:2,size:`level-3`,children:`Contact`}),(0,O.jsx)(d,{color:`inverse`,children:`Lukt het niet om een afspraak te maken?`}),(0,O.jsxs)(d,{color:`inverse`,children:[`Bel het telefoonnummer`,` `,(0,O.jsx)(f,{color:`inverse`,href:`tel:14020`,children:`14 020`}),`.`]}),(0,O.jsx)(d,{color:`inverse`,children:`Maandag tot en met vrijdag van 08.00 tot 18.00 uur.`})]})})})}),(0,O.jsxs)(_.Menu,{children:[(0,O.jsx)(_.MenuLink,{href:`#`,children:`Over deze site`}),(0,O.jsx)(_.MenuLink,{href:`#`,children:`Privacy`}),(0,O.jsx)(_.MenuLink,{href:`#`,children:`Cookies op deze site`})]})]})]})})),j=t({LandingPage:()=>F,MultipleQuestions:()=>R,SingleQuestion:()=>I,SingleQuestionWithSubquestions:()=>L,WithValidationError:()=>z,__namedExportsOrder:()=>B,default:()=>P}),M,N,P,F,I,L,R,z,B,V=e((()=>{m(),r(),A(),E(),M=n(),N=e=>(0,M.jsx)(k,{children:(0,M.jsx)(e,{})}),P={title:`Pages/Public/Form Flow`,parameters:{layout:`fullscreen`,themes:{options:[`Spacious`,`Spacious Lo-fi`]}}},F={decorators:[e=>(0,M.jsx)(D,{children:(0,M.jsx)(e,{})})],parameters:{docs:{source:{code:`// One Grid for the whole page combines both rules: a paddingTop of large and a paddingBottom of 2x-large.
// The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
<Grid as="main" id="inhoud" paddingBottom="2x-large" paddingTop="large">
  <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
    <Heading className="ams-mb-m" level={1}>Waar u dit formulier voor gebruikt</Heading>
    <Paragraph size="large">
      Met dit formulier maakt u een afspraak bij een Stadsloket in Amsterdam of Weesp.
    </Paragraph>
  </Grid.Cell>
  <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
    {/*
     * Listing the steps is a choice, not a rule: GOV.UK asks a start page for what the service does,
     * what it costs, how long it takes and one call to action, and warns against making it too
     * complicated. Test whether users need the list, as you would a progress indicator.
     * See https://design-system.service.gov.uk/patterns/start-using-a-service/
     */}
    <Heading className="ams-mb-s" level={2}>De stappen in dit formulier</Heading>
    <OrderedList className="ams-mb-l">
      <OrderedList.Item>
        <strong>Afspraak</strong> - Kies waarvoor u een afspraak wilt maken. Kies ook waar u de afspraak
        wilt hebben. En wanneer.
      </OrderedList.Item>
      <OrderedList.Item>
        <strong>Uw gegevens</strong> - Vul uw contactgegevens in.
      </OrderedList.Item>
      <OrderedList.Item>
        <strong>Controleren</strong> - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag.
      </OrderedList.Item>
    </OrderedList>
    {/* A single, prominent call to action that starts the form. */}
    <CallToActionLink href="#">Start het formulier</CallToActionLink>
  </Grid.Cell>
</Grid>`,language:`tsx`}}},render:e=>(0,M.jsxs)(C,{as:`main`,id:`inhoud`,paddingBottom:`2x-large`,paddingTop:`large`,children:[(0,M.jsxs)(C.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,M.jsx)(T,{className:`ams-mb-m`,level:1,children:`Waar u dit formulier voor gebruikt`}),(0,M.jsx)(d,{size:`large`,children:`Met dit formulier maakt u een afspraak bij een Stadsloket in Amsterdam of Weesp.`})]}),(0,M.jsxs)(C.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,M.jsx)(T,{className:`ams-mb-s`,level:2,children:`De stappen in dit formulier`}),(0,M.jsxs)(u,{className:`ams-mb-l`,children:[(0,M.jsxs)(u.Item,{children:[(0,M.jsx)(`strong`,{children:`Afspraak`}),` - Kies waarvoor u een afspraak wilt maken. Kies ook waar u de afspraak wilt hebben. En wanneer.`]}),(0,M.jsxs)(u.Item,{children:[(0,M.jsx)(`strong`,{children:`Uw gegevens`}),` - Vul uw contactgegevens in.`]}),(0,M.jsxs)(u.Item,{children:[(0,M.jsx)(`strong`,{children:`Controleren`}),` - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag.`]})]}),(0,M.jsx)(x,{href:`#`,children:`Start het formulier`})]})]})},I={decorators:[N],parameters:{docs:{source:{code:`<>
  {/* Padding is a Grid prop, so the back link needs its own Grid to take the large top padding. */}
  <Grid paddingTop="large">
    {/* This cell repeats the span and start of the cell below, so the back link lines up with the form. */}
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * A back link gives users a dependable way back: some sites break the browser back button, so many
       * users avoid it rather than risk losing their progress, and not all users know it is there. The link
       * preserves nothing by itself, so return users to the previous page in the state they last saw it.
       * Use a link, not a button: going back navigates to another page.
       * See https://design-system.service.gov.uk/components/back-link/
       */}
      <StandaloneLink href="#" icon={ChevronBackwardIcon}>Vorige vraag</StandaloneLink>
    </Grid.Cell>
  </Grid>
  {/* The back link is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
  {/* A form page keeps its header minimal and ships no Skip Link, so this main Grid needs no id. */}
  <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * The aria-hidden heading stays out of the heading hierarchy, and aria-labelledby re-exposes its text as the
       * header’s accessible name. That is not a labelled section, though: a header inside main is no landmark –
       * Chromium and WebKit expose the non-landmark sectionheader role, Firefox generic, where a name is prohibited
       * and dropped. Label a landmark instead when a named section is what you need.
       */}
      <header aria-labelledby="form-header" className="ams-mb-m ams-gap-xs">
        <Heading aria-hidden id="form-header" level={2} size="level-4">Afspraak maken</Heading>
        {/*
         * First test the form without a progress indicator to see whether it is simple enough to go without
         * one, and try improving the order, type or number of questions first. Only if people still have
         * difficulty, add a plain indicator like this, and state a total only if you can do so reliably.
         * See https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators
         */}
        <Paragraph>Stap 1 van 3: Afspraak</Paragraph>
      </header>
      {/*
       * Do not rely on HTML5 form validation: in many browsers not every user is told that a field is
       * required, and nothing explains why a pattern is not met, so errors are not identified accessibly
       * (WCAG 3.3.1 Error Identification, level A). Validate on the server and return the result, and add
       * client-side validation on top of that when there is time to do it well.
       * See https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
       */}
      {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
      <form noValidate onSubmit={(e) => e.preventDefault()}>
        <FieldSet
          // Mark the group required with ARIA. The native required attribute is left off so that nothing here
          // depends on HTML5 validation.
          aria-required="true"
          className="ams-mb-xl"
          legend="Kies waar u voor wilt langskomen op het Stadsloket"
          // When a page is a single question, treat its legend as the main page heading (h1).
          legendIsPageHeading
          // Every Radio already carries the ARIA radio role, which is what conveys that only one can be chosen.
          // This role has the field set announced as a radio group, and it permits the aria-required above.
          role="radiogroup"
        >
          <Column gap="x-small">
            <Radio aria-required="true" name="reasonForVisit" value="passport-id-driving-license">Paspoort / ID / Rijbewijs</Radio>
            <Radio aria-required="true" name="reasonForVisit" value="permits">Vergunningen</Radio>
            <Radio aria-required="true" name="reasonForVisit" value="social-counter">Sociaal loket</Radio>
            <Radio aria-required="true" name="reasonForVisit" value="other">Overig</Radio>
          </Column>
        </FieldSet>
        <Button type="submit">Volgende vraag</Button>
      </form>
    </Grid.Cell>
  </Grid>
</>`,language:`tsx`}}},render:e=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(C,{paddingTop:`large`,children:(0,M.jsx)(C.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,M.jsx)(p,{href:`#`,icon:i,children:`Vorige vraag`})})}),(0,M.jsx)(C,{as:`main`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:(0,M.jsxs)(C.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,M.jsxs)(`header`,{"aria-labelledby":`form-header`,className:`ams-mb-m ams-gap-xs`,children:[(0,M.jsx)(T,{"aria-hidden":!0,id:`form-header`,level:2,size:`level-4`,children:`Afspraak maken`}),(0,M.jsx)(d,{children:`Stap 1 van 3: Afspraak`})]}),(0,M.jsxs)(`form`,{noValidate:!0,onSubmit:e=>e.preventDefault(),children:[(0,M.jsx)(v,{"aria-required":`true`,className:`ams-mb-xl`,legend:`Kies waar u voor wilt langskomen op het Stadsloket`,legendIsPageHeading:!0,role:`radiogroup`,children:(0,M.jsxs)(S,{gap:`x-small`,children:[(0,M.jsx)(s,{"aria-required":`true`,name:`reasonForVisit`,value:`passport-id-driving-license`,children:`Paspoort / ID / Rijbewijs`}),(0,M.jsx)(s,{"aria-required":`true`,name:`reasonForVisit`,value:`permits`,children:`Vergunningen`}),(0,M.jsx)(s,{"aria-required":`true`,name:`reasonForVisit`,value:`social-counter`,children:`Sociaal loket`}),(0,M.jsx)(s,{"aria-required":`true`,name:`reasonForVisit`,value:`other`,children:`Overig`})]})}),(0,M.jsx)(y,{type:`submit`,children:`Volgende vraag`})]})]})})]})},L={decorators:[N],parameters:{docs:{source:{code:`<>
  {/* Padding is a Grid prop, so the back link needs its own Grid to take the large top padding. */}
  <Grid paddingTop="large">
    {/* This cell repeats the span and start of the cell below, so the back link lines up with the form. */}
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * A back link gives users a dependable way back: some sites break the browser back button, so many
       * users avoid it rather than risk losing their progress, and not all users know it is there. The link
       * preserves nothing by itself, so return users to the previous page in the state they last saw it.
       * Use a link, not a button: going back navigates to another page.
       * See https://design-system.service.gov.uk/components/back-link/
       */}
      <StandaloneLink href="#" icon={ChevronBackwardIcon}>Vorige vraag</StandaloneLink>
    </Grid.Cell>
  </Grid>
  {/* The back link is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
  <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * The aria-hidden heading stays out of the heading hierarchy, and aria-labelledby re-exposes its text as the
       * header’s accessible name. That is not a labelled section, though: a header inside main is no landmark –
       * Chromium and WebKit expose the non-landmark sectionheader role, Firefox generic, where a name is prohibited
       * and dropped. Label a landmark instead when a named section is what you need.
       */}
      <header aria-labelledby="form-header" className="ams-mb-m ams-gap-xs">
        <Heading aria-hidden id="form-header" level={2} size="level-4">Afspraak maken</Heading>
        {/*
         * First test the form without a progress indicator to see whether it is simple enough to go without
         * one, and try improving the order, type or number of questions first. Only if people still have
         * difficulty, add a plain indicator like this, and state a total only if you can do so reliably.
         * See https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators
         */}
        <Paragraph>Stap 2 van 3: Uw gegevens</Paragraph>
      </header>
      {/*
       * Do not rely on HTML5 form validation: in many browsers not every user is told that a field is
       * required, and nothing explains why a pattern is not met, so errors are not identified accessibly
       * (WCAG 3.3.1 Error Identification, level A). Validate on the server and return the result, and add
       * client-side validation on top of that when there is time to do it well.
       * See https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
       */}
      {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
      <form noValidate onSubmit={(e) => e.preventDefault()}>
        <FieldSet legend="Contactgegevens" legendIsPageHeading>
          <Field>
            {/*
             * inFieldSet has no structural effect, despite its name: it makes the label lighter and, through the
             * Hint, greys out ‘(niet verplicht)’. Marking the optional fields is the default, because a form
             * should ask only what it needs, so most fields are required. Mark the required ones instead when
             * most fields are optional.
             * See https://nldesignsystem.nl/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/
             */}
            <Label htmlFor="email-input" inFieldSet optional>E-mailadres</Label>
            <TextInput
              // Naming the purpose of a field makes it programmatically determinable, as WCAG 2.2 SC 1.3.5
              // Identify Input Purpose asks for on fields about the user. Browsers can then offer to fill it in.
              autoComplete="email"
              // An email address is not prose, so turn spell checking off: it applies to email fields, and
              // extensions may send what they check to their own servers. Autocorrection does not apply:
              // browsers force it off for email, url and password inputs, so autocorrect="off" only makes
              // that explicit. Our Text Input guidance asks only for autocomplete on a phone number.
              autoCorrect="off"
              id="email-input"
              name="email"
              // Keep at least 30 characters of an email address visible, per
              // https://design-system.service.gov.uk/patterns/email-addresses/#help-users-to-enter-a-valid-email-address
              size={30}
              spellCheck="false"
              type="email"
            />
          </Field>
          <Field className="ams-mb-xl">
            <Label htmlFor="tel-input" inFieldSet optional>Telefoonnummer</Label>
            {/* size sets the visible width, not a maximum: 15 is the rule of thumb for a phone number. */}
            <TextInput autoComplete="tel" id="tel-input" name="phone" size={15} type="tel" />
          </Field>
        </FieldSet>
        <Button type="submit">Volgende vraag</Button>
      </form>
    </Grid.Cell>
  </Grid>
</>`,language:`tsx`}}},render:e=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(C,{paddingTop:`large`,children:(0,M.jsx)(C.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,M.jsx)(p,{href:`#`,icon:i,children:`Vorige vraag`})})}),(0,M.jsx)(C,{as:`main`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:(0,M.jsxs)(C.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,M.jsxs)(`header`,{"aria-labelledby":`form-header`,className:`ams-mb-m ams-gap-xs`,children:[(0,M.jsx)(T,{"aria-hidden":!0,id:`form-header`,level:2,size:`level-4`,children:`Afspraak maken`}),(0,M.jsx)(d,{children:`Stap 2 van 3: Uw gegevens`})]}),(0,M.jsxs)(`form`,{noValidate:!0,onSubmit:e=>e.preventDefault(),children:[(0,M.jsxs)(v,{legend:`Contactgegevens`,legendIsPageHeading:!0,children:[(0,M.jsxs)(b,{children:[(0,M.jsx)(w,{htmlFor:`email-input`,inFieldSet:!0,optional:!0,children:`E-mailadres`}),(0,M.jsx)(c,{autoComplete:`email`,autoCorrect:`off`,id:`email-input`,name:`email`,size:30,spellCheck:`false`,type:`email`})]}),(0,M.jsxs)(b,{className:`ams-mb-xl`,children:[(0,M.jsx)(w,{htmlFor:`tel-input`,inFieldSet:!0,optional:!0,children:`Telefoonnummer`}),(0,M.jsx)(c,{autoComplete:`tel`,id:`tel-input`,name:`phone`,size:15,type:`tel`})]})]}),(0,M.jsx)(y,{type:`submit`,children:`Volgende vraag`})]})]})})]})},R={decorators:[N],parameters:{docs:{source:{code:`<>
  {/* Padding is a Grid prop, so the back link needs its own Grid to take the large top padding. */}
  <Grid paddingTop="large">
    {/* This cell repeats the span and start of the cell below, so the back link lines up with the form. */}
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * A back link gives users a dependable way back: some sites break the browser back button, so many
       * users avoid it rather than risk losing their progress, and not all users know it is there. The link
       * preserves nothing by itself, so return users to the previous page in the state they last saw it.
       * Use a link, not a button: going back navigates to another page.
       * See https://design-system.service.gov.uk/components/back-link/
       */}
      <StandaloneLink href="#" icon={ChevronBackwardIcon}>Vorige vraag</StandaloneLink>
    </Grid.Cell>
  </Grid>
  {/* The back link is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
  <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * A form with multiple questions has a level 1 heading that describes the whole group. Placing it before
       * the form follows GOV.UK’s question pages: a convention, not a requirement, as a form takes no
       * accessible name from its content anyway. Questions that fit under one legend go in a field set
       * instead, whose legend is that heading – as the Single Question stories show.
       * See https://design-system.service.gov.uk/patterns/question-pages/
       */}
      <Heading className="ams-mb-xl" level={1}>Inschrijven</Heading>
      {/*
       * Do not rely on HTML5 form validation: in many browsers not every user is told that a field is
       * required, and nothing explains why a pattern is not met, so errors are not identified accessibly
       * (WCAG 3.3.1 Error Identification, level A). Validate on the server and return the result, and add
       * client-side validation on top of that when there is time to do it well.
       * See https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
       */}
      {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
      <form noValidate onSubmit={(e) => e.preventDefault()}>
        <Field className="ams-mb-l">
          <Label htmlFor="name-input">Naam</Label>
          <TextInput
            // Naming the purpose of a field makes it programmatically determinable, as WCAG 2.2 SC 1.3.5
            // Identify Input Purpose asks for on fields about the user. Browsers can then offer to fill it in.
            autoComplete="name"
            // Some browsers underline a correctly spelled name, and autocorrect can replace it. Switching both
            // off also keeps personal data away from spell checkers that send text to their own servers.
            // Our Text Input guidance asks only for autocomplete on a phone number.
            autoCorrect="off"
            id="name-input"
            name="name"
            spellCheck="false"
            type="text"
          />
        </Field>
        <Field className="ams-mb-l">
          {/*
           * Marking the optional fields is the default, because a form should ask only what it needs, so most
           * fields are required. Mark the required ones instead when most fields are optional.
           * See https://nldesignsystem.nl/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/
           */}
          <Label htmlFor="tel-input" optional>Telefoonnummer</Label>
          {/* size sets the visible width, not a maximum: 15 is the rule of thumb for a phone number. */}
          <TextInput autoComplete="tel" id="tel-input" name="tel" size={15} type="tel" />
        </Field>
        <Field className="ams-mb-xl">
          <Label htmlFor="date">Datum</Label>
          <DateInput id="date" />
        </Field>
        <Button type="submit">Volgende vraag</Button>
      </form>
    </Grid.Cell>
  </Grid>
</>`,language:`tsx`}}},render:e=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(C,{paddingTop:`large`,children:(0,M.jsx)(C.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,M.jsx)(p,{href:`#`,icon:i,children:`Vorige vraag`})})}),(0,M.jsx)(C,{as:`main`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:(0,M.jsxs)(C.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,M.jsx)(T,{className:`ams-mb-xl`,level:1,children:`Inschrijven`}),(0,M.jsxs)(`form`,{noValidate:!0,onSubmit:e=>e.preventDefault(),children:[(0,M.jsxs)(b,{className:`ams-mb-l`,children:[(0,M.jsx)(w,{htmlFor:`name-input`,children:`Naam`}),(0,M.jsx)(c,{autoComplete:`name`,autoCorrect:`off`,id:`name-input`,name:`name`,spellCheck:`false`,type:`text`})]}),(0,M.jsxs)(b,{className:`ams-mb-l`,children:[(0,M.jsx)(w,{htmlFor:`tel-input`,optional:!0,children:`Telefoonnummer`}),(0,M.jsx)(c,{autoComplete:`tel`,id:`tel-input`,name:`tel`,size:15,type:`tel`})]}),(0,M.jsxs)(b,{className:`ams-mb-xl`,children:[(0,M.jsx)(w,{htmlFor:`date`,children:`Datum`}),(0,M.jsx)(h,{id:`date`})]}),(0,M.jsx)(y,{type:`submit`,children:`Volgende vraag`})]})]})})]})},z={decorators:[N],parameters:{docs:{source:{code:`<>
  {/* Padding is a Grid prop, so the back link needs its own Grid to take the large top padding. */}
  <Grid paddingTop="large">
    {/* This cell repeats the span and start of the cell below, so the back link lines up with the form. */}
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * A back link gives users a dependable way back: some sites break the browser back button, so many
       * users avoid it rather than risk losing their progress, and not all users know it is there. The link
       * preserves nothing by itself, so return users to the previous page in the state they last saw it.
       * Use a link, not a button: going back navigates to another page.
       * See https://design-system.service.gov.uk/components/back-link/
       */}
      <StandaloneLink href="#" icon={ChevronBackwardIcon}>Vorige vraag</StandaloneLink>
    </Grid.Cell>
  </Grid>
  {/* The back link is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
  <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * If answers fail validation, notify the user in four ways:
       * - Show the page again, with the fields as the user filled them in.
       * - Show the Invalid Form Alert at the top of the main container. It takes focus as it appears, so a
       *   screen reader reads it out first.
       * - Prefix the document title with the error count, so a screen reader reads it out when the page loads
       *   after server-side validation. The Invalid Form Alert does this by itself.
       * - Add error messages next to the relevant form fields.
       * See https://design-system.service.gov.uk/patterns/validation/#how-to-tell-the-user-about-validation-errors
       */}
      <InvalidFormAlert
        className="ams-mb-m"
        // Each id becomes the href of a link, so it needs the leading number sign. It points at the first
        // Radio, whose id sits on the input element, so following it moves focus to an answerable control –
        // though, unlike GOV.UK’s error summary, nothing scrolls the legend and error message into view first.
        errors={[{ id: '#passport-id-driving-license', label: 'Geef aan waar u voor wilt langskomen.' }]}
        // The legend of the field set below is the page’s h1, so this heading is a level 2.
        headingLevel={2}
      />
      {/*
       * The aria-hidden heading stays out of the heading hierarchy, and aria-labelledby re-exposes its text as the
       * header’s accessible name. That is not a labelled section, though: a header inside main is no landmark –
       * Chromium and WebKit expose the non-landmark sectionheader role, Firefox generic, where a name is prohibited
       * and dropped. Label a landmark instead when a named section is what you need.
       */}
      <header aria-labelledby="form-header" className="ams-mb-m ams-gap-xs">
        <Heading aria-hidden id="form-header" level={2} size="level-4">Afspraak maken</Heading>
        {/*
         * First test the form without a progress indicator to see whether it is simple enough to go without
         * one, and try improving the order, type or number of questions first. Only if people still have
         * difficulty, add a plain indicator like this, and state a total only if you can do so reliably.
         * See https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators
         */}
        <Paragraph>Stap 1 van 3: Afspraak</Paragraph>
      </header>
      {/*
       * Do not rely on HTML5 form validation: in many browsers not every user is told that a field is
       * required, and nothing explains why a pattern is not met, so errors are not identified accessibly
       * (WCAG 3.3.1 Error Identification, level A). Validate on the server and return the result, and add
       * client-side validation on top of that when there is time to do it well.
       * See https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
       */}
      {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
      <form noValidate onSubmit={(e) => e.preventDefault()}>
        <FieldSet
          // Only link the error message to the field set while the message is in the DOM. Browsers ignore
          // a reference to a missing element, but some evaluation tools flag it for review.
          aria-describedby="error"
          // Mark the group required with ARIA. The native required attribute is left off so that nothing here
          // depends on HTML5 validation.
          aria-required="true"
          className="ams-mb-xl"
          invalid
          legend="Kies waar u voor wilt langskomen op het Stadsloket"
          // When a page is a single question, treat its legend as the main page heading (h1).
          legendIsPageHeading
          // Every Radio already carries the ARIA radio role, which is what conveys that only one can be chosen.
          // This role has the field set announced as a radio group, and it permits the aria-required above.
          role="radiogroup"
        >
          <ErrorMessage id="error">Geef aan waar u voor wilt langskomen.</ErrorMessage>
          {/* All Radios turn red: it is the group that lacks an answer, not the option the alert links to. */}
          <Column gap="x-small">
            <Radio aria-required="true" id="passport-id-driving-license" invalid name="reasonForVisit" value="passport-id-driving-license">Paspoort / ID / Rijbewijs</Radio>
            <Radio aria-required="true" invalid name="reasonForVisit" value="permits">Vergunningen</Radio>
            <Radio aria-required="true" invalid name="reasonForVisit" value="social-counter">Sociaal loket</Radio>
            <Radio aria-required="true" invalid name="reasonForVisit" value="other">Overig</Radio>
          </Column>
        </FieldSet>
        <Button type="submit">Volgende vraag</Button>
      </form>
    </Grid.Cell>
  </Grid>
</>`,language:`tsx`}}},render:e=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(C,{paddingTop:`large`,children:(0,M.jsx)(C.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,M.jsx)(p,{href:`#`,icon:i,children:`Vorige vraag`})})}),(0,M.jsx)(C,{as:`main`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:(0,M.jsxs)(C.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,M.jsx)(o,{className:`ams-mb-m`,errors:[{id:`#passport-id-driving-license`,label:`Geef aan waar u voor wilt langskomen.`}],headingLevel:2}),(0,M.jsxs)(`header`,{"aria-labelledby":`form-header`,className:`ams-mb-m ams-gap-xs`,children:[(0,M.jsx)(T,{"aria-hidden":!0,id:`form-header`,level:2,size:`level-4`,children:`Afspraak maken`}),(0,M.jsx)(d,{children:`Stap 1 van 3: Afspraak`})]}),(0,M.jsxs)(`form`,{noValidate:!0,onSubmit:e=>e.preventDefault(),children:[(0,M.jsxs)(v,{"aria-describedby":`error`,"aria-required":`true`,className:`ams-mb-xl`,invalid:!0,legend:`Kies waar u voor wilt langskomen op het Stadsloket`,legendIsPageHeading:!0,role:`radiogroup`,children:[(0,M.jsx)(g,{id:`error`,children:`Geef aan waar u voor wilt langskomen.`}),(0,M.jsxs)(S,{gap:`x-small`,children:[(0,M.jsx)(s,{"aria-required":`true`,id:`passport-id-driving-license`,invalid:!0,name:`reasonForVisit`,value:`passport-id-driving-license`,children:`Paspoort / ID / Rijbewijs`}),(0,M.jsx)(s,{"aria-required":`true`,invalid:!0,name:`reasonForVisit`,value:`permits`,children:`Vergunningen`}),(0,M.jsx)(s,{"aria-required":`true`,invalid:!0,name:`reasonForVisit`,value:`social-counter`,children:`Sociaal loket`}),(0,M.jsx)(s,{"aria-required":`true`,invalid:!0,name:`reasonForVisit`,value:`other`,children:`Overig`})]})]}),(0,M.jsx)(y,{type:`submit`,children:`Volgende vraag`})]})]})})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <PageLayout>
        <Story />
      </PageLayout>],
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every \`map\` is expanded. Provide the source by hand so the panel shows the form
        // markup on its own, with the accessibility guidance kept short.
        code: \`// One Grid for the whole page combines both rules: a paddingTop of large and a paddingBottom of 2x-large.
// The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
<Grid as="main" id="inhoud" paddingBottom="2x-large" paddingTop="large">
  <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
    <Heading className="ams-mb-m" level={1}>Waar u dit formulier voor gebruikt</Heading>
    <Paragraph size="large">
      Met dit formulier maakt u een afspraak bij een Stadsloket in Amsterdam of Weesp.
    </Paragraph>
  </Grid.Cell>
  <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
    {/*
     * Listing the steps is a choice, not a rule: GOV.UK asks a start page for what the service does,
     * what it costs, how long it takes and one call to action, and warns against making it too
     * complicated. Test whether users need the list, as you would a progress indicator.
     * See https://design-system.service.gov.uk/patterns/start-using-a-service/
     */}
    <Heading className="ams-mb-s" level={2}>De stappen in dit formulier</Heading>
    <OrderedList className="ams-mb-l">
      <OrderedList.Item>
        <strong>Afspraak</strong> - Kies waarvoor u een afspraak wilt maken. Kies ook waar u de afspraak
        wilt hebben. En wanneer.
      </OrderedList.Item>
      <OrderedList.Item>
        <strong>Uw gegevens</strong> - Vul uw contactgegevens in.
      </OrderedList.Item>
      <OrderedList.Item>
        <strong>Controleren</strong> - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag.
      </OrderedList.Item>
    </OrderedList>
    {/* A single, prominent call to action that starts the form. */}
    <CallToActionLink href="#">Start het formulier</CallToActionLink>
  </Grid.Cell>
</Grid>\`,
        language: 'tsx'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args =>
  // One Grid for the whole page combines both rules: a paddingTop of large and a paddingBottom of 2x-large.
  // The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
  <Grid as="main" id="inhoud" paddingBottom="2x-large" paddingTop="large">
      <Grid.Cell span={{
      narrow: 4,
      medium: 7,
      wide: 9
    }} start={{
      narrow: 1,
      medium: 1,
      wide: 2
    }}>
        <Heading className="ams-mb-m" level={1}>
          Waar u dit formulier voor gebruikt
        </Heading>
        <Paragraph size="large">
          Met dit formulier maakt u een afspraak bij een Stadsloket in Amsterdam of Weesp.
        </Paragraph>
      </Grid.Cell>
      <Grid.Cell span={{
      narrow: 4,
      medium: 6,
      wide: 7
    }} start={{
      narrow: 1,
      medium: 2,
      wide: 3
    }}>
        {/*
         * Listing the steps is a choice, not a rule: GOV.UK asks a start page for what the service does,
         * what it costs, how long it takes and one call to action, and warns against making it too
         * complicated. Test whether users need the list, as you would a progress indicator.
         * See https://design-system.service.gov.uk/patterns/start-using-a-service/
         */}
        <Heading className="ams-mb-s" level={2}>
          De stappen in dit formulier
        </Heading>
        <OrderedList className="ams-mb-l">
          <OrderedList.Item>
            <strong>Afspraak</strong> - Kies waarvoor u een afspraak wilt maken. Kies ook waar u de afspraak wilt
            hebben. En wanneer.
          </OrderedList.Item>
          <OrderedList.Item>
            <strong>Uw gegevens</strong> - Vul uw contactgegevens in.
          </OrderedList.Item>
          <OrderedList.Item>
            <strong>Controleren</strong> - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag.
          </OrderedList.Item>
        </OrderedList>
        {/* A single, prominent call to action that starts the form. */}
        <CallToActionLink href="#">Start het formulier</CallToActionLink>
      </Grid.Cell>
    </Grid>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  decorators: [formPageLayoutDecorator],
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every \`map\` is expanded. Provide the source by hand so the panel shows the form
        // markup on its own, with the accessibility guidance kept short.
        code: \`<>
  {/* Padding is a Grid prop, so the back link needs its own Grid to take the large top padding. */}
  <Grid paddingTop="large">
    {/* This cell repeats the span and start of the cell below, so the back link lines up with the form. */}
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * A back link gives users a dependable way back: some sites break the browser back button, so many
       * users avoid it rather than risk losing their progress, and not all users know it is there. The link
       * preserves nothing by itself, so return users to the previous page in the state they last saw it.
       * Use a link, not a button: going back navigates to another page.
       * See https://design-system.service.gov.uk/components/back-link/
       */}
      <StandaloneLink href="#" icon={ChevronBackwardIcon}>Vorige vraag</StandaloneLink>
    </Grid.Cell>
  </Grid>
  {/* The back link is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
  {/* A form page keeps its header minimal and ships no Skip Link, so this main Grid needs no id. */}
  <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * The aria-hidden heading stays out of the heading hierarchy, and aria-labelledby re-exposes its text as the
       * header’s accessible name. That is not a labelled section, though: a header inside main is no landmark –
       * Chromium and WebKit expose the non-landmark sectionheader role, Firefox generic, where a name is prohibited
       * and dropped. Label a landmark instead when a named section is what you need.
       */}
      <header aria-labelledby="form-header" className="ams-mb-m ams-gap-xs">
        <Heading aria-hidden id="form-header" level={2} size="level-4">Afspraak maken</Heading>
        {/*
         * First test the form without a progress indicator to see whether it is simple enough to go without
         * one, and try improving the order, type or number of questions first. Only if people still have
         * difficulty, add a plain indicator like this, and state a total only if you can do so reliably.
         * See https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators
         */}
        <Paragraph>Stap 1 van 3: Afspraak</Paragraph>
      </header>
      {/*
       * Do not rely on HTML5 form validation: in many browsers not every user is told that a field is
       * required, and nothing explains why a pattern is not met, so errors are not identified accessibly
       * (WCAG 3.3.1 Error Identification, level A). Validate on the server and return the result, and add
       * client-side validation on top of that when there is time to do it well.
       * See https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
       */}
      {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
      <form noValidate onSubmit={(e) => e.preventDefault()}>
        <FieldSet
          // Mark the group required with ARIA. The native required attribute is left off so that nothing here
          // depends on HTML5 validation.
          aria-required="true"
          className="ams-mb-xl"
          legend="Kies waar u voor wilt langskomen op het Stadsloket"
          // When a page is a single question, treat its legend as the main page heading (h1).
          legendIsPageHeading
          // Every Radio already carries the ARIA radio role, which is what conveys that only one can be chosen.
          // This role has the field set announced as a radio group, and it permits the aria-required above.
          role="radiogroup"
        >
          <Column gap="x-small">
            <Radio aria-required="true" name="reasonForVisit" value="passport-id-driving-license">Paspoort / ID / Rijbewijs</Radio>
            <Radio aria-required="true" name="reasonForVisit" value="permits">Vergunningen</Radio>
            <Radio aria-required="true" name="reasonForVisit" value="social-counter">Sociaal loket</Radio>
            <Radio aria-required="true" name="reasonForVisit" value="other">Overig</Radio>
          </Column>
        </FieldSet>
        <Button type="submit">Volgende vraag</Button>
      </form>
    </Grid.Cell>
  </Grid>
</>\`,
        language: 'tsx'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => <>
      {/* Padding is a Grid prop, so the back link needs its own Grid to take the large top padding. */}
      <Grid paddingTop="large">
        {/* This cell repeats the span and start of the cell below, so the back link lines up with the form. */}
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 7
      }} start={{
        narrow: 1,
        medium: 2,
        wide: 3
      }}>
          {/*
           * A back link gives users a dependable way back: some sites break the browser back button, so many
           * users avoid it rather than risk losing their progress, and not all users know it is there. The link
           * preserves nothing by itself, so return users to the previous page in the state they last saw it.
           * Use a link, not a button: going back navigates to another page.
           * See https://design-system.service.gov.uk/components/back-link/
           */}
          <StandaloneLink href="#" icon={ChevronBackwardIcon}>
            Vorige vraag
          </StandaloneLink>
        </Grid.Cell>
      </Grid>
      {/* The back link is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
      {/* A form page keeps its header minimal and ships no Skip Link, so this main Grid needs no id. */}
      <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 7
      }} start={{
        narrow: 1,
        medium: 2,
        wide: 3
      }}>
          {/*
           * The aria-hidden heading stays out of the heading hierarchy, and aria-labelledby re-exposes its text as
           * the header’s accessible name. That is not a labelled section, though: a header inside main is no landmark
           * – Chromium and WebKit expose the non-landmark sectionheader role, Firefox generic, where a name is
           * prohibited and dropped. Label a landmark instead when a named section is what you need.
           */}
          <header aria-labelledby="form-header" className="ams-mb-m ams-gap-xs">
            <Heading aria-hidden id="form-header" level={2} size="level-4">
              Afspraak maken
            </Heading>
            {/*
             * First test the form without a progress indicator to see whether it is simple enough to go without
             * one, and try improving the order, type or number of questions first. Only if people still have
             * difficulty, add a plain indicator like this, and state a total only if you can do so reliably.
             * See https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators
             */}
            <Paragraph>Stap 1 van 3: Afspraak</Paragraph>
          </header>
          {/*
           * Do not rely on HTML5 form validation: in many browsers not every user is told that a field is
           * required, and nothing explains why a pattern is not met, so errors are not identified accessibly
           * (WCAG 3.3.1 Error Identification, level A). Validate on the server and return the result, and add
           * client-side validation on top of that when there is time to do it well.
           * See https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
           */}
          {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
          <form noValidate onSubmit={e => e.preventDefault()}>
            <FieldSet
          // Mark the group required with ARIA. The native required attribute is left off so that nothing here
          // depends on HTML5 validation.
          aria-required="true" className="ams-mb-xl" legend="Kies waar u voor wilt langskomen op het Stadsloket"
          // When a page is a single question, treat its legend as the main page heading (h1).
          legendIsPageHeading
          // Every Radio already carries the ARIA radio role, which is what conveys that only one can be chosen.
          // This role has the field set announced as a radio group, and it permits the aria-required above.
          role="radiogroup">
              <Column gap="x-small">
                <Radio aria-required="true" name="reasonForVisit" value="passport-id-driving-license">
                  Paspoort / ID / Rijbewijs
                </Radio>
                <Radio aria-required="true" name="reasonForVisit" value="permits">
                  Vergunningen
                </Radio>
                <Radio aria-required="true" name="reasonForVisit" value="social-counter">
                  Sociaal loket
                </Radio>
                <Radio aria-required="true" name="reasonForVisit" value="other">
                  Overig
                </Radio>
              </Column>
            </FieldSet>
            <Button type="submit">Volgende vraag</Button>
          </form>
        </Grid.Cell>
      </Grid>
    </>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  decorators: [formPageLayoutDecorator],
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every \`map\` is expanded. Provide the source by hand so the panel shows the form
        // markup on its own, with the accessibility guidance kept short.
        code: \`<>
  {/* Padding is a Grid prop, so the back link needs its own Grid to take the large top padding. */}
  <Grid paddingTop="large">
    {/* This cell repeats the span and start of the cell below, so the back link lines up with the form. */}
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * A back link gives users a dependable way back: some sites break the browser back button, so many
       * users avoid it rather than risk losing their progress, and not all users know it is there. The link
       * preserves nothing by itself, so return users to the previous page in the state they last saw it.
       * Use a link, not a button: going back navigates to another page.
       * See https://design-system.service.gov.uk/components/back-link/
       */}
      <StandaloneLink href="#" icon={ChevronBackwardIcon}>Vorige vraag</StandaloneLink>
    </Grid.Cell>
  </Grid>
  {/* The back link is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
  <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * The aria-hidden heading stays out of the heading hierarchy, and aria-labelledby re-exposes its text as the
       * header’s accessible name. That is not a labelled section, though: a header inside main is no landmark –
       * Chromium and WebKit expose the non-landmark sectionheader role, Firefox generic, where a name is prohibited
       * and dropped. Label a landmark instead when a named section is what you need.
       */}
      <header aria-labelledby="form-header" className="ams-mb-m ams-gap-xs">
        <Heading aria-hidden id="form-header" level={2} size="level-4">Afspraak maken</Heading>
        {/*
         * First test the form without a progress indicator to see whether it is simple enough to go without
         * one, and try improving the order, type or number of questions first. Only if people still have
         * difficulty, add a plain indicator like this, and state a total only if you can do so reliably.
         * See https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators
         */}
        <Paragraph>Stap 2 van 3: Uw gegevens</Paragraph>
      </header>
      {/*
       * Do not rely on HTML5 form validation: in many browsers not every user is told that a field is
       * required, and nothing explains why a pattern is not met, so errors are not identified accessibly
       * (WCAG 3.3.1 Error Identification, level A). Validate on the server and return the result, and add
       * client-side validation on top of that when there is time to do it well.
       * See https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
       */}
      {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
      <form noValidate onSubmit={(e) => e.preventDefault()}>
        <FieldSet legend="Contactgegevens" legendIsPageHeading>
          <Field>
            {/*
             * inFieldSet has no structural effect, despite its name: it makes the label lighter and, through the
             * Hint, greys out ‘(niet verplicht)’. Marking the optional fields is the default, because a form
             * should ask only what it needs, so most fields are required. Mark the required ones instead when
             * most fields are optional.
             * See https://nldesignsystem.nl/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/
             */}
            <Label htmlFor="email-input" inFieldSet optional>E-mailadres</Label>
            <TextInput
              // Naming the purpose of a field makes it programmatically determinable, as WCAG 2.2 SC 1.3.5
              // Identify Input Purpose asks for on fields about the user. Browsers can then offer to fill it in.
              autoComplete="email"
              // An email address is not prose, so turn spell checking off: it applies to email fields, and
              // extensions may send what they check to their own servers. Autocorrection does not apply:
              // browsers force it off for email, url and password inputs, so autocorrect="off" only makes
              // that explicit. Our Text Input guidance asks only for autocomplete on a phone number.
              autoCorrect="off"
              id="email-input"
              name="email"
              // Keep at least 30 characters of an email address visible, per
              // https://design-system.service.gov.uk/patterns/email-addresses/#help-users-to-enter-a-valid-email-address
              size={30}
              spellCheck="false"
              type="email"
            />
          </Field>
          <Field className="ams-mb-xl">
            <Label htmlFor="tel-input" inFieldSet optional>Telefoonnummer</Label>
            {/* size sets the visible width, not a maximum: 15 is the rule of thumb for a phone number. */}
            <TextInput autoComplete="tel" id="tel-input" name="phone" size={15} type="tel" />
          </Field>
        </FieldSet>
        <Button type="submit">Volgende vraag</Button>
      </form>
    </Grid.Cell>
  </Grid>
</>\`,
        language: 'tsx'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => <>
      {/* Padding is a Grid prop, so the back link needs its own Grid to take the large top padding. */}
      <Grid paddingTop="large">
        {/* This cell repeats the span and start of the cell below, so the back link lines up with the form. */}
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 7
      }} start={{
        narrow: 1,
        medium: 2,
        wide: 3
      }}>
          {/*
           * A back link gives users a dependable way back: some sites break the browser back button, so many
           * users avoid it rather than risk losing their progress, and not all users know it is there. The link
           * preserves nothing by itself, so return users to the previous page in the state they last saw it.
           * Use a link, not a button: going back navigates to another page.
           * See https://design-system.service.gov.uk/components/back-link/
           */}
          <StandaloneLink href="#" icon={ChevronBackwardIcon}>
            Vorige vraag
          </StandaloneLink>
        </Grid.Cell>
      </Grid>
      {/* The back link is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
      <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 7
      }} start={{
        narrow: 1,
        medium: 2,
        wide: 3
      }}>
          {/*
           * The aria-hidden heading stays out of the heading hierarchy, and aria-labelledby re-exposes its text as
           * the header’s accessible name. That is not a labelled section, though: a header inside main is no landmark
           * – Chromium and WebKit expose the non-landmark sectionheader role, Firefox generic, where a name is
           * prohibited and dropped. Label a landmark instead when a named section is what you need.
           */}
          <header aria-labelledby="form-header" className="ams-mb-m ams-gap-xs">
            <Heading aria-hidden id="form-header" level={2} size="level-4">
              Afspraak maken
            </Heading>
            {/*
             * First test the form without a progress indicator to see whether it is simple enough to go without
             * one, and try improving the order, type or number of questions first. Only if people still have
             * difficulty, add a plain indicator like this, and state a total only if you can do so reliably.
             * See https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators
             */}
            <Paragraph>Stap 2 van 3: Uw gegevens</Paragraph>
          </header>
          {/*
           * Do not rely on HTML5 form validation: in many browsers not every user is told that a field is
           * required, and nothing explains why a pattern is not met, so errors are not identified accessibly
           * (WCAG 3.3.1 Error Identification, level A). Validate on the server and return the result, and add
           * client-side validation on top of that when there is time to do it well.
           * See https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
           */}
          {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
          <form noValidate onSubmit={e => e.preventDefault()}>
            <FieldSet legend="Contactgegevens" legendIsPageHeading>
              <Field>
                {/*
                 * inFieldSet has no structural effect, despite its name: it makes the label lighter and, through the
                 * Hint, greys out ‘(niet verplicht)’. Marking the optional fields is the default, because a form
                 * should ask only what it needs, so most fields are required. Mark the required ones instead when
                 * most fields are optional.
                 * See https://nldesignsystem.nl/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/
                 */}
                <Label htmlFor="email-input" inFieldSet optional>
                  E-mailadres
                </Label>
                <TextInput
              // Naming the purpose of a field makes it programmatically determinable, as WCAG 2.2 SC 1.3.5
              // Identify Input Purpose asks for on fields about the user. Browsers can then offer to fill it in.
              autoComplete="email"
              // An email address is not prose, so turn spell checking off: it applies to email fields, and
              // extensions may send what they check to their own servers. Autocorrection does not apply:
              // browsers force it off for email, url and password inputs, so autocorrect="off" only makes
              // that explicit. Our Text Input guidance asks only for autocomplete on a phone number.
              autoCorrect="off" id="email-input" name="email"
              // Keep at least 30 characters of an email address visible, per
              // https://design-system.service.gov.uk/patterns/email-addresses/#help-users-to-enter-a-valid-email-address
              size={30} spellCheck="false" type="email" />
              </Field>
              <Field className="ams-mb-xl">
                <Label htmlFor="tel-input" inFieldSet optional>
                  Telefoonnummer
                </Label>
                {/* size sets the visible width, not a maximum: 15 is the rule of thumb for a phone number. */}
                <TextInput autoComplete="tel" id="tel-input" name="phone" size={15} type="tel" />
              </Field>
            </FieldSet>
            <Button type="submit">Volgende vraag</Button>
          </form>
        </Grid.Cell>
      </Grid>
    </>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  decorators: [formPageLayoutDecorator],
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every \`map\` is expanded. Provide the source by hand so the panel shows the form
        // markup on its own, with the accessibility guidance kept short.
        code: \`<>
  {/* Padding is a Grid prop, so the back link needs its own Grid to take the large top padding. */}
  <Grid paddingTop="large">
    {/* This cell repeats the span and start of the cell below, so the back link lines up with the form. */}
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * A back link gives users a dependable way back: some sites break the browser back button, so many
       * users avoid it rather than risk losing their progress, and not all users know it is there. The link
       * preserves nothing by itself, so return users to the previous page in the state they last saw it.
       * Use a link, not a button: going back navigates to another page.
       * See https://design-system.service.gov.uk/components/back-link/
       */}
      <StandaloneLink href="#" icon={ChevronBackwardIcon}>Vorige vraag</StandaloneLink>
    </Grid.Cell>
  </Grid>
  {/* The back link is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
  <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * A form with multiple questions has a level 1 heading that describes the whole group. Placing it before
       * the form follows GOV.UK’s question pages: a convention, not a requirement, as a form takes no
       * accessible name from its content anyway. Questions that fit under one legend go in a field set
       * instead, whose legend is that heading – as the Single Question stories show.
       * See https://design-system.service.gov.uk/patterns/question-pages/
       */}
      <Heading className="ams-mb-xl" level={1}>Inschrijven</Heading>
      {/*
       * Do not rely on HTML5 form validation: in many browsers not every user is told that a field is
       * required, and nothing explains why a pattern is not met, so errors are not identified accessibly
       * (WCAG 3.3.1 Error Identification, level A). Validate on the server and return the result, and add
       * client-side validation on top of that when there is time to do it well.
       * See https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
       */}
      {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
      <form noValidate onSubmit={(e) => e.preventDefault()}>
        <Field className="ams-mb-l">
          <Label htmlFor="name-input">Naam</Label>
          <TextInput
            // Naming the purpose of a field makes it programmatically determinable, as WCAG 2.2 SC 1.3.5
            // Identify Input Purpose asks for on fields about the user. Browsers can then offer to fill it in.
            autoComplete="name"
            // Some browsers underline a correctly spelled name, and autocorrect can replace it. Switching both
            // off also keeps personal data away from spell checkers that send text to their own servers.
            // Our Text Input guidance asks only for autocomplete on a phone number.
            autoCorrect="off"
            id="name-input"
            name="name"
            spellCheck="false"
            type="text"
          />
        </Field>
        <Field className="ams-mb-l">
          {/*
           * Marking the optional fields is the default, because a form should ask only what it needs, so most
           * fields are required. Mark the required ones instead when most fields are optional.
           * See https://nldesignsystem.nl/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/
           */}
          <Label htmlFor="tel-input" optional>Telefoonnummer</Label>
          {/* size sets the visible width, not a maximum: 15 is the rule of thumb for a phone number. */}
          <TextInput autoComplete="tel" id="tel-input" name="tel" size={15} type="tel" />
        </Field>
        <Field className="ams-mb-xl">
          <Label htmlFor="date">Datum</Label>
          <DateInput id="date" />
        </Field>
        <Button type="submit">Volgende vraag</Button>
      </form>
    </Grid.Cell>
  </Grid>
</>\`,
        language: 'tsx'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => <>
      {/* Padding is a Grid prop, so the back link needs its own Grid to take the large top padding. */}
      <Grid paddingTop="large">
        {/* This cell repeats the span and start of the cell below, so the back link lines up with the form. */}
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 7
      }} start={{
        narrow: 1,
        medium: 2,
        wide: 3
      }}>
          {/*
           * A back link gives users a dependable way back: some sites break the browser back button, so many
           * users avoid it rather than risk losing their progress, and not all users know it is there. The link
           * preserves nothing by itself, so return users to the previous page in the state they last saw it.
           * Use a link, not a button: going back navigates to another page.
           * See https://design-system.service.gov.uk/components/back-link/
           */}
          <StandaloneLink href="#" icon={ChevronBackwardIcon}>
            Vorige vraag
          </StandaloneLink>
        </Grid.Cell>
      </Grid>
      {/* The back link is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
      <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 7
      }} start={{
        narrow: 1,
        medium: 2,
        wide: 3
      }}>
          {/*
           * A form with multiple questions has a level 1 heading that describes the whole group. Placing it before
           * the form follows GOV.UK’s question pages: a convention, not a requirement, as a form takes no
           * accessible name from its content anyway. Questions that fit under one legend go in a field set
           * instead, whose legend is that heading – as the Single Question stories show.
           * See https://design-system.service.gov.uk/patterns/question-pages/
           */}
          <Heading className="ams-mb-xl" level={1}>
            Inschrijven
          </Heading>
          {/*
           * Do not rely on HTML5 form validation: in many browsers not every user is told that a field is
           * required, and nothing explains why a pattern is not met, so errors are not identified accessibly
           * (WCAG 3.3.1 Error Identification, level A). Validate on the server and return the result, and add
           * client-side validation on top of that when there is time to do it well.
           * See https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
           */}
          {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
          <form noValidate onSubmit={e => e.preventDefault()}>
            <Field className="ams-mb-l">
              <Label htmlFor="name-input">Naam</Label>
              <TextInput
            // Naming the purpose of a field makes it programmatically determinable, as WCAG 2.2 SC 1.3.5
            // Identify Input Purpose asks for on fields about the user. Browsers can then offer to fill it in.
            autoComplete="name"
            // Some browsers underline a correctly spelled name, and autocorrect can replace it. Switching both
            // off also keeps personal data away from spell checkers that send text to their own servers.
            // Our Text Input guidance asks only for autocomplete on a phone number.
            autoCorrect="off" id="name-input" name="name" spellCheck="false" type="text" />
            </Field>
            <Field className="ams-mb-l">
              {/*
               * Marking the optional fields is the default, because a form should ask only what it needs, so most
               * fields are required. Mark the required ones instead when most fields are optional.
               * See https://nldesignsystem.nl/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/
               */}
              <Label htmlFor="tel-input" optional>
                Telefoonnummer
              </Label>
              {/* size sets the visible width, not a maximum: 15 is the rule of thumb for a phone number. */}
              <TextInput autoComplete="tel" id="tel-input" name="tel" size={15} type="tel" />
            </Field>
            <Field className="ams-mb-xl">
              <Label htmlFor="date">Datum</Label>
              <DateInput id="date" />
            </Field>
            <Button type="submit">Volgende vraag</Button>
          </form>
        </Grid.Cell>
      </Grid>
    </>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  decorators: [formPageLayoutDecorator],
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every \`map\` is expanded. Provide the source by hand so the panel shows the form
        // markup on its own, with the accessibility guidance kept short.
        code: \`<>
  {/* Padding is a Grid prop, so the back link needs its own Grid to take the large top padding. */}
  <Grid paddingTop="large">
    {/* This cell repeats the span and start of the cell below, so the back link lines up with the form. */}
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * A back link gives users a dependable way back: some sites break the browser back button, so many
       * users avoid it rather than risk losing their progress, and not all users know it is there. The link
       * preserves nothing by itself, so return users to the previous page in the state they last saw it.
       * Use a link, not a button: going back navigates to another page.
       * See https://design-system.service.gov.uk/components/back-link/
       */}
      <StandaloneLink href="#" icon={ChevronBackwardIcon}>Vorige vraag</StandaloneLink>
    </Grid.Cell>
  </Grid>
  {/* The back link is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
  <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * If answers fail validation, notify the user in four ways:
       * - Show the page again, with the fields as the user filled them in.
       * - Show the Invalid Form Alert at the top of the main container. It takes focus as it appears, so a
       *   screen reader reads it out first.
       * - Prefix the document title with the error count, so a screen reader reads it out when the page loads
       *   after server-side validation. The Invalid Form Alert does this by itself.
       * - Add error messages next to the relevant form fields.
       * See https://design-system.service.gov.uk/patterns/validation/#how-to-tell-the-user-about-validation-errors
       */}
      <InvalidFormAlert
        className="ams-mb-m"
        // Each id becomes the href of a link, so it needs the leading number sign. It points at the first
        // Radio, whose id sits on the input element, so following it moves focus to an answerable control –
        // though, unlike GOV.UK’s error summary, nothing scrolls the legend and error message into view first.
        errors={[{ id: '#passport-id-driving-license', label: 'Geef aan waar u voor wilt langskomen.' }]}
        // The legend of the field set below is the page’s h1, so this heading is a level 2.
        headingLevel={2}
      />
      {/*
       * The aria-hidden heading stays out of the heading hierarchy, and aria-labelledby re-exposes its text as the
       * header’s accessible name. That is not a labelled section, though: a header inside main is no landmark –
       * Chromium and WebKit expose the non-landmark sectionheader role, Firefox generic, where a name is prohibited
       * and dropped. Label a landmark instead when a named section is what you need.
       */}
      <header aria-labelledby="form-header" className="ams-mb-m ams-gap-xs">
        <Heading aria-hidden id="form-header" level={2} size="level-4">Afspraak maken</Heading>
        {/*
         * First test the form without a progress indicator to see whether it is simple enough to go without
         * one, and try improving the order, type or number of questions first. Only if people still have
         * difficulty, add a plain indicator like this, and state a total only if you can do so reliably.
         * See https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators
         */}
        <Paragraph>Stap 1 van 3: Afspraak</Paragraph>
      </header>
      {/*
       * Do not rely on HTML5 form validation: in many browsers not every user is told that a field is
       * required, and nothing explains why a pattern is not met, so errors are not identified accessibly
       * (WCAG 3.3.1 Error Identification, level A). Validate on the server and return the result, and add
       * client-side validation on top of that when there is time to do it well.
       * See https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
       */}
      {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
      <form noValidate onSubmit={(e) => e.preventDefault()}>
        <FieldSet
          // Only link the error message to the field set while the message is in the DOM. Browsers ignore
          // a reference to a missing element, but some evaluation tools flag it for review.
          aria-describedby="error"
          // Mark the group required with ARIA. The native required attribute is left off so that nothing here
          // depends on HTML5 validation.
          aria-required="true"
          className="ams-mb-xl"
          invalid
          legend="Kies waar u voor wilt langskomen op het Stadsloket"
          // When a page is a single question, treat its legend as the main page heading (h1).
          legendIsPageHeading
          // Every Radio already carries the ARIA radio role, which is what conveys that only one can be chosen.
          // This role has the field set announced as a radio group, and it permits the aria-required above.
          role="radiogroup"
        >
          <ErrorMessage id="error">Geef aan waar u voor wilt langskomen.</ErrorMessage>
          {/* All Radios turn red: it is the group that lacks an answer, not the option the alert links to. */}
          <Column gap="x-small">
            <Radio aria-required="true" id="passport-id-driving-license" invalid name="reasonForVisit" value="passport-id-driving-license">Paspoort / ID / Rijbewijs</Radio>
            <Radio aria-required="true" invalid name="reasonForVisit" value="permits">Vergunningen</Radio>
            <Radio aria-required="true" invalid name="reasonForVisit" value="social-counter">Sociaal loket</Radio>
            <Radio aria-required="true" invalid name="reasonForVisit" value="other">Overig</Radio>
          </Column>
        </FieldSet>
        <Button type="submit">Volgende vraag</Button>
      </form>
    </Grid.Cell>
  </Grid>
</>\`,
        language: 'tsx'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => <>
      {/* Padding is a Grid prop, so the back link needs its own Grid to take the large top padding. */}
      <Grid paddingTop="large">
        {/* This cell repeats the span and start of the cell below, so the back link lines up with the form. */}
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 7
      }} start={{
        narrow: 1,
        medium: 2,
        wide: 3
      }}>
          {/*
           * A back link gives users a dependable way back: some sites break the browser back button, so many
           * users avoid it rather than risk losing their progress, and not all users know it is there. The link
           * preserves nothing by itself, so return users to the previous page in the state they last saw it.
           * Use a link, not a button: going back navigates to another page.
           * See https://design-system.service.gov.uk/components/back-link/
           */}
          <StandaloneLink href="#" icon={ChevronBackwardIcon}>
            Vorige vraag
          </StandaloneLink>
        </Grid.Cell>
      </Grid>
      {/* The back link is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
      <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 7
      }} start={{
        narrow: 1,
        medium: 2,
        wide: 3
      }}>
          {/*
           * If answers fail validation, notify the user in four ways:
           * - Show the page again, with the fields as the user filled them in.
           * - Show the Invalid Form Alert at the top of the main container. It takes focus as it appears, so a
           *   screen reader reads it out first.
           * - Prefix the document title with the error count, so a screen reader reads it out when the page loads
           *   after server-side validation. The Invalid Form Alert does this by itself.
           * - Add error messages next to the relevant form fields.
           * See https://design-system.service.gov.uk/patterns/validation/#how-to-tell-the-user-about-validation-errors
           */}
          <InvalidFormAlert className="ams-mb-m"
        // Each id becomes the href of a link, so it needs the leading number sign. It points at the first
        // Radio, whose id sits on the input element, so following it moves focus to an answerable control –
        // though, unlike GOV.UK’s error summary, nothing scrolls the legend and error message into view first.
        errors={[{
          id: '#passport-id-driving-license',
          label: 'Geef aan waar u voor wilt langskomen.'
        }]}
        // The legend of the field set below is the page’s h1, so this heading is a level 2.
        headingLevel={2} />
          {/*
           * The aria-hidden heading stays out of the heading hierarchy, and aria-labelledby re-exposes its text as
           * the header’s accessible name. That is not a labelled section, though: a header inside main is no landmark
           * – Chromium and WebKit expose the non-landmark sectionheader role, Firefox generic, where a name is
           * prohibited and dropped. Label a landmark instead when a named section is what you need.
           */}
          <header aria-labelledby="form-header" className="ams-mb-m ams-gap-xs">
            <Heading aria-hidden id="form-header" level={2} size="level-4">
              Afspraak maken
            </Heading>
            {/*
             * First test the form without a progress indicator to see whether it is simple enough to go without
             * one, and try improving the order, type or number of questions first. Only if people still have
             * difficulty, add a plain indicator like this, and state a total only if you can do so reliably.
             * See https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators
             */}
            <Paragraph>Stap 1 van 3: Afspraak</Paragraph>
          </header>
          {/*
           * Do not rely on HTML5 form validation: in many browsers not every user is told that a field is
           * required, and nothing explains why a pattern is not met, so errors are not identified accessibly
           * (WCAG 3.3.1 Error Identification, level A). Validate on the server and return the result, and add
           * client-side validation on top of that when there is time to do it well.
           * See https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
           */}
          {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
          <form noValidate onSubmit={e => e.preventDefault()}>
            <FieldSet
          // Only link the error message to the field set while the message is in the DOM. Browsers ignore
          // a reference to a missing element, but some evaluation tools flag it for review.
          aria-describedby="error"
          // Mark the group required with ARIA. The native required attribute is left off so that nothing here
          // depends on HTML5 validation.
          aria-required="true" className="ams-mb-xl" invalid legend="Kies waar u voor wilt langskomen op het Stadsloket"
          // When a page is a single question, treat its legend as the main page heading (h1).
          legendIsPageHeading
          // Every Radio already carries the ARIA radio role, which is what conveys that only one can be chosen.
          // This role has the field set announced as a radio group, and it permits the aria-required above.
          role="radiogroup">
              <ErrorMessage id="error">Geef aan waar u voor wilt langskomen.</ErrorMessage>
              {/* All Radios turn red: it is the group that lacks an answer, not the option the alert links to. */}
              <Column gap="x-small">
                <Radio aria-required="true" id="passport-id-driving-license" invalid name="reasonForVisit" value="passport-id-driving-license">
                  Paspoort / ID / Rijbewijs
                </Radio>
                <Radio aria-required="true" invalid name="reasonForVisit" value="permits">
                  Vergunningen
                </Radio>
                <Radio aria-required="true" invalid name="reasonForVisit" value="social-counter">
                  Sociaal loket
                </Radio>
                <Radio aria-required="true" invalid name="reasonForVisit" value="other">
                  Overig
                </Radio>
              </Column>
            </FieldSet>
            <Button type="submit">Volgende vraag</Button>
          </form>
        </Grid.Cell>
      </Grid>
    </>
}`,...z.parameters?.docs?.source}}},B=[`LandingPage`,`SingleQuestion`,`SingleQuestionWithSubquestions`,`MultipleQuestions`,`WithValidationError`]}));V();export{F as LandingPage,R as MultipleQuestions,I as SingleQuestion,L as SingleQuestionWithSubquestions,z as WithValidationError,B as __namedExportsOrder,P as default,V as n,j as t};