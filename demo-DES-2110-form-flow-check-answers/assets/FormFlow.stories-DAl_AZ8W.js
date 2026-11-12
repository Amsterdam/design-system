import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-BG4KOiPz.js";import{d as r,g as i,i as a,q as o}from"./index.esm-BKXztnhd.js";import{B as s,D as c,H as l,I as u,L as d,O as f,P as p,R as m,S as h,U as g,Y as _,_ as v,c as y,et as b,h as x,k as S,m as C,nt as w,p as T,u as E,v as D,x as O,y as k}from"./index.esm-DfUVXHc9.js";import{n as A,t as j}from"./PageLayout-CgxESrrI.js";var M,N;function P(){return(P=e((()=>{w(),M=n(),N=({children:e,...t})=>(0,M.jsxs)(u,{...t,children:[(0,M.jsx)(m,{}),e,(0,M.jsxs)(d,{children:[(0,M.jsx)(d.Spotlight,{children:(0,M.jsx)(O,{paddingVertical:`x-large`,children:(0,M.jsx)(O.Cell,{span:{narrow:4,medium:6,wide:7},children:(0,M.jsxs)(T,{gap:`small`,children:[(0,M.jsx)(h,{color:`inverse`,level:2,size:`level-3`,children:`Contact`}),(0,M.jsx)(s,{color:`inverse`,children:`Lukt het niet om een afspraak te maken?`}),(0,M.jsxs)(s,{color:`inverse`,children:[`Bel het telefoonnummer`,` `,(0,M.jsx)(S,{color:`inverse`,href:`tel:14020`,children:`14 020`}),`.`]}),(0,M.jsx)(s,{color:`inverse`,children:`Maandag tot en met vrijdag van 08.00 tot 18.00 uur.`})]})})})}),(0,M.jsxs)(d.Menu,{children:[(0,M.jsx)(d.MenuLink,{href:`#`,children:`Over deze site`}),(0,M.jsx)(d.MenuLink,{href:`#`,children:`Privacy`}),(0,M.jsx)(d.MenuLink,{href:`#`,children:`Cookies op deze site`})]})]})]})})))()}var F=t({CheckAnswers:()=>W,CheckAnswersWithGroups:()=>G,LandingPage:()=>z,MultipleQuestions:()=>H,SingleQuestion:()=>B,SingleQuestionWithSubquestions:()=>V,WithValidationError:()=>U,__namedExportsOrder:()=>K,default:()=>R}),I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{w(),o(),P(),A(),I=n(),L=e=>(0,I.jsx)(N,{children:(0,I.jsx)(e,{})}),R={title:`Pages/Public/Form Flow`,parameters:{docs:{description:{component:`Guides the user through a task one step at a time, with a stripped-back header and footer that keep the focus on answering each question.`}},layout:`fullscreen`,themes:{options:[`Spacious`,`Spacious Lo-fi`]}}},z={decorators:[e=>(0,I.jsx)(j,{children:(0,I.jsx)(e,{})})],parameters:{docs:{source:{code:`// The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
<main id="inhoud">
  {/* The Content Header takes a Grid of its own, so the space below it is a padding rather than a row gap. */}
  {/* This page opens with the Content Header rather than a Breadcrumb, so that Grid takes the paddingTop of large. */}
  {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
  <Grid paddingBottom="2x-large" paddingTop="large">
    {/* ams-prose sets the vertical rhythm between the title and the lead of this Content Header. */}
    <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Heading level={1}>Waar u dit formulier voor gebruikt</Heading>
      <Paragraph size="large">
        Met dit formulier maakt u een afspraak bij een Stadsloket in Amsterdam of Weesp.
      </Paragraph>
    </Grid.Cell>
  </Grid>
  {/* Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off. */}
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  <Grid paddingBottom="2x-large">
    <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * Listing the steps is a choice, not a rule: GOV.UK asks a start page for what the service does,
       * what it costs, how long it takes and one call to action, and warns against making it too
       * complicated. Test whether users need the list, as you would a progress indicator.
       * See https://design-system.service.gov.uk/patterns/start-using-a-service/
       */}
      <Heading level={2}>De stappen in dit formulier</Heading>
      <OrderedList>
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
  </Grid>
</main>`,language:`tsx`}}},render:e=>(0,I.jsxs)(`main`,{id:`inhoud`,children:[(0,I.jsx)(O,{paddingBottom:`2x-large`,paddingTop:`large`,children:(0,I.jsxs)(O.Cell,{className:`ams-prose`,span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,I.jsx)(h,{level:1,children:`Waar u dit formulier voor gebruikt`}),(0,I.jsx)(s,{size:`large`,children:`Met dit formulier maakt u een afspraak bij een Stadsloket in Amsterdam of Weesp.`})]})}),(0,I.jsx)(O,{paddingBottom:`2x-large`,children:(0,I.jsxs)(O.Cell,{className:`ams-prose`,span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,I.jsx)(h,{level:2,children:`De stappen in dit formulier`}),(0,I.jsxs)(p,{children:[(0,I.jsxs)(p.Item,{children:[(0,I.jsx)(`strong`,{children:`Afspraak`}),` - Kies waarvoor u een afspraak wilt maken. Kies ook waar u de afspraak wilt hebben. En wanneer.`]}),(0,I.jsxs)(p.Item,{children:[(0,I.jsx)(`strong`,{children:`Uw gegevens`}),` - Vul uw contactgegevens in.`]}),(0,I.jsxs)(p.Item,{children:[(0,I.jsx)(`strong`,{children:`Controleren`}),` - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag.`]})]}),(0,I.jsx)(E,{href:`#`,children:`Start het formulier`})]})})]})},B={decorators:[L],parameters:{docs:{source:{code:`<>
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
       * The task name is a caption, not a heading: the question below is the level 1 heading. A heading here
       * would either precede that h1 in the heading list, or need aria-hidden to stay out of it, which takes the
       * name away from screen reader users. A paragraph keeps it available to everyone. The b tag only offsets it
       * visually – it carries no emphasis, so nothing changes for a screen reader.
       */}
      <Paragraph className="ams-mb-m"><b>Afspraak maken</b></Paragraph>
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
</>`,language:`tsx`}}},render:e=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(O,{paddingTop:`large`,children:(0,I.jsx)(O.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,I.jsx)(_,{href:`#`,icon:a,children:`Vorige vraag`})})}),(0,I.jsx)(O,{as:`main`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:(0,I.jsxs)(O.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,I.jsx)(s,{className:`ams-mb-m`,children:(0,I.jsx)(`b`,{children:`Afspraak maken`})}),(0,I.jsxs)(`form`,{noValidate:!0,onSubmit:e=>e.preventDefault(),children:[(0,I.jsx)(k,{"aria-required":`true`,className:`ams-mb-xl`,legend:`Kies waar u voor wilt langskomen op het Stadsloket`,legendIsPageHeading:!0,role:`radiogroup`,children:(0,I.jsxs)(T,{gap:`x-small`,children:[(0,I.jsx)(l,{"aria-required":`true`,name:`reasonForVisit`,value:`passport-id-driving-license`,children:`Paspoort / ID / Rijbewijs`}),(0,I.jsx)(l,{"aria-required":`true`,name:`reasonForVisit`,value:`permits`,children:`Vergunningen`}),(0,I.jsx)(l,{"aria-required":`true`,name:`reasonForVisit`,value:`social-counter`,children:`Sociaal loket`}),(0,I.jsx)(l,{"aria-required":`true`,name:`reasonForVisit`,value:`other`,children:`Overig`})]})}),(0,I.jsx)(y,{type:`submit`,children:`Volgende vraag`})]})]})})]})},V={decorators:[L],parameters:{docs:{source:{code:`<>
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
       * The task name is a caption, not a heading: the question below is the level 1 heading. A heading here
       * would either sit above that h1 in the hierarchy, or need aria-hidden to stay out of it, which takes the
       * name away from screen reader users. A paragraph keeps it available to everyone. The b tag only offsets it
       * visually – it carries no emphasis, so nothing changes for a screen reader.
       */}
      <Paragraph className="ams-mb-m"><b>Afspraak maken</b></Paragraph>
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
</>`,language:`tsx`}}},render:e=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(O,{paddingTop:`large`,children:(0,I.jsx)(O.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,I.jsx)(_,{href:`#`,icon:a,children:`Vorige vraag`})})}),(0,I.jsx)(O,{as:`main`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:(0,I.jsxs)(O.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,I.jsx)(s,{className:`ams-mb-m`,children:(0,I.jsx)(`b`,{children:`Afspraak maken`})}),(0,I.jsxs)(`form`,{noValidate:!0,onSubmit:e=>e.preventDefault(),children:[(0,I.jsxs)(k,{legend:`Contactgegevens`,legendIsPageHeading:!0,children:[(0,I.jsxs)(D,{children:[(0,I.jsx)(f,{htmlFor:`email-input`,inFieldSet:!0,optional:!0,children:`E-mailadres`}),(0,I.jsx)(b,{autoComplete:`email`,autoCorrect:`off`,id:`email-input`,name:`email`,size:30,spellCheck:`false`,type:`email`})]}),(0,I.jsxs)(D,{className:`ams-mb-xl`,children:[(0,I.jsx)(f,{htmlFor:`tel-input`,inFieldSet:!0,optional:!0,children:`Telefoonnummer`}),(0,I.jsx)(b,{autoComplete:`tel`,id:`tel-input`,name:`phone`,size:15,type:`tel`})]})]}),(0,I.jsx)(y,{type:`submit`,children:`Volgende vraag`})]})]})})]})},H={decorators:[L],parameters:{docs:{source:{code:`<>
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
</>`,language:`tsx`}}},render:e=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(O,{paddingTop:`large`,children:(0,I.jsx)(O.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,I.jsx)(_,{href:`#`,icon:a,children:`Vorige vraag`})})}),(0,I.jsx)(O,{as:`main`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:(0,I.jsxs)(O.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,I.jsx)(h,{className:`ams-mb-xl`,level:1,children:`Inschrijven`}),(0,I.jsxs)(`form`,{noValidate:!0,onSubmit:e=>e.preventDefault(),children:[(0,I.jsxs)(D,{className:`ams-mb-l`,children:[(0,I.jsx)(f,{htmlFor:`name-input`,children:`Naam`}),(0,I.jsx)(b,{autoComplete:`name`,autoCorrect:`off`,id:`name-input`,name:`name`,spellCheck:`false`,type:`text`})]}),(0,I.jsxs)(D,{className:`ams-mb-l`,children:[(0,I.jsx)(f,{htmlFor:`tel-input`,optional:!0,children:`Telefoonnummer`}),(0,I.jsx)(b,{autoComplete:`tel`,id:`tel-input`,name:`tel`,size:15,type:`tel`})]}),(0,I.jsxs)(D,{className:`ams-mb-xl`,children:[(0,I.jsx)(f,{htmlFor:`date`,children:`Datum`}),(0,I.jsx)(x,{id:`date`})]}),(0,I.jsx)(y,{type:`submit`,children:`Volgende vraag`})]})]})})]})},U={decorators:[L],parameters:{docs:{source:{code:`<>
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
       * The task name is a caption, not a heading: the question below is the level 1 heading. A heading here
       * would either sit above that h1 in the hierarchy, or need aria-hidden to stay out of it, which takes the
       * name away from screen reader users. A paragraph keeps it available to everyone. The b tag only offsets it
       * visually – it carries no emphasis, so nothing changes for a screen reader.
       */}
      <Paragraph className="ams-mb-m"><b>Afspraak maken</b></Paragraph>
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
</>`,language:`tsx`}}},render:e=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(O,{paddingTop:`large`,children:(0,I.jsx)(O.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,I.jsx)(_,{href:`#`,icon:a,children:`Vorige vraag`})})}),(0,I.jsx)(O,{as:`main`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:(0,I.jsxs)(O.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,I.jsx)(c,{className:`ams-mb-m`,errors:[{id:`#passport-id-driving-license`,label:`Geef aan waar u voor wilt langskomen.`}],headingLevel:2}),(0,I.jsx)(s,{className:`ams-mb-m`,children:(0,I.jsx)(`b`,{children:`Afspraak maken`})}),(0,I.jsxs)(`form`,{noValidate:!0,onSubmit:e=>e.preventDefault(),children:[(0,I.jsxs)(k,{"aria-describedby":`error`,"aria-required":`true`,className:`ams-mb-xl`,invalid:!0,legend:`Kies waar u voor wilt langskomen op het Stadsloket`,legendIsPageHeading:!0,role:`radiogroup`,children:[(0,I.jsx)(v,{id:`error`,children:`Geef aan waar u voor wilt langskomen.`}),(0,I.jsxs)(T,{gap:`x-small`,children:[(0,I.jsx)(l,{"aria-required":`true`,id:`passport-id-driving-license`,invalid:!0,name:`reasonForVisit`,value:`passport-id-driving-license`,children:`Paspoort / ID / Rijbewijs`}),(0,I.jsx)(l,{"aria-required":`true`,invalid:!0,name:`reasonForVisit`,value:`permits`,children:`Vergunningen`}),(0,I.jsx)(l,{"aria-required":`true`,invalid:!0,name:`reasonForVisit`,value:`social-counter`,children:`Sociaal loket`}),(0,I.jsx)(l,{"aria-required":`true`,invalid:!0,name:`reasonForVisit`,value:`other`,children:`Overig`})]})]}),(0,I.jsx)(y,{type:`submit`,children:`Volgende vraag`})]})]})})]})},W={decorators:[L],parameters:{docs:{source:{code:`<>
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      <StandaloneLink href="#" icon={ChevronBackwardIcon}>Vorige vraag</StandaloneLink>
    </Grid.Cell>
  </Grid>
  <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      <Paragraph className="ams-mb-m"><b>Afspraak maken</b></Paragraph>
      <Heading className="ams-mb-xl" level={1}>Controleer uw gegevens</Heading>
      {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
      <form onSubmit={(e) => e.preventDefault()}>
        <DataList className="ams-mb-xl">
          {[
            { key: 'Afspraak', value: 'Paspoort / ID / Rijbewijs' },
            { key: 'Stadsloket', value: 'Centrum' },
            { key: 'Datum', value: '24 november 2026' },
            { key: 'Tijd', value: '10.00 uur' },
            { key: 'E-mailadres', value: 'voorbeeld@example.com' },
            { key: 'Telefoonnummer', value: '06 12345678' },
          ].map(({ key, value }) => (
            <DataList.Item key={key}>
              <DataList.Key>{key}</DataList.Key>
              <DataList.Value>{value}</DataList.Value>
              <DataList.Actions>
                {/* Return to the matching question with the answers preserved. */}
                <StandaloneLink href="#" icon={EditIcon}>
                  Wijzigen<span className="ams-visually-hidden"> {key.toLowerCase()}</span>
                </StandaloneLink>
              </DataList.Actions>
            </DataList.Item>
          ))}
        </DataList>
        <Button type="submit">Aanvraag versturen</Button>
      </form>
    </Grid.Cell>
  </Grid>
</>`,language:`tsx`}}},render:()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(O,{paddingTop:`large`,children:(0,I.jsx)(O.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,I.jsx)(_,{href:`#`,icon:a,children:`Vorige vraag`})})}),(0,I.jsx)(O,{as:`main`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:(0,I.jsxs)(O.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,I.jsx)(s,{className:`ams-mb-m`,children:(0,I.jsx)(`b`,{children:`Afspraak maken`})}),(0,I.jsx)(h,{className:`ams-mb-xl`,level:1,children:`Controleer uw gegevens`}),(0,I.jsxs)(`form`,{onSubmit:e=>e.preventDefault(),children:[(0,I.jsx)(C,{className:`ams-mb-xl`,children:[{key:`Afspraak`,value:`Paspoort / ID / Rijbewijs`},{key:`Stadsloket`,value:`Centrum`},{key:`Datum`,value:`24 november 2026`},{key:`Tijd`,value:`10.00 uur`},{key:`E-mailadres`,value:`voorbeeld@example.com`},{key:`Telefoonnummer`,value:`06 12345678`}].map(({key:e,value:t})=>(0,I.jsxs)(C.Item,{children:[(0,I.jsx)(C.Key,{children:e}),(0,I.jsx)(C.Value,{children:t}),(0,I.jsx)(C.Actions,{children:(0,I.jsxs)(_,{href:`#`,icon:i,children:[`Wijzigen`,(0,I.jsxs)(`span`,{className:`ams-visually-hidden`,children:[` `,e.toLowerCase()]})]})})]},e))}),(0,I.jsx)(y,{type:`submit`,children:`Aanvraag versturen`})]})]})})]})},G={decorators:[L],parameters:{docs:{source:{code:`<>
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      <StandaloneLink href="#" icon={ChevronBackwardIcon}>Vorige vraag</StandaloneLink>
    </Grid.Cell>
  </Grid>
  <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      <Heading className="ams-mb-xl" level={1}>Controleer uw gegevens</Heading>
      {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
      <form onSubmit={(e) => e.preventDefault()}>
        <Column className="ams-mb-xl" gap="x-large">
          {[
            { address: 'Voorbeeldstraat 1', birthDate: '1 januari 1990', name: 'Alex Voorbeeld' },
            { address: 'Voorbeeldstraat 2', birthDate: '2 februari 1992', name: 'Sam Voorbeeld' },
          ].map(({ address, birthDate, name }, index) => {
            const person = \`persoon \${index + 1}\`

            return (
              <div key={name}>
                <Row align="between" alignVertical="center" className="ams-mb-s" wrap>
                  <Heading level={2}>Persoon {index + 1}</Heading>
                  {/* This illustrative action affects the current page, so use a non-submit Button. */}
                  <Button icon={DeleteIcon} iconBefore type="button" variant="secondary">
                    Verwijderen<span className="ams-visually-hidden"> {person}</span>
                  </Button>
                </Row>
                <DataList>
                  {[
                    { key: 'Naam', value: name },
                    { key: 'Geboortedatum', value: birthDate },
                    { key: 'Adres', value: <>{address}<br />1000 AA Amsterdam</> },
                  ].map(({ key, value }) => (
                    <DataList.Item key={key}>
                      <DataList.Key>{key}</DataList.Key>
                      <DataList.Value>{value}</DataList.Value>
                      <DataList.Actions>
                        {/* Include the key and person so every link has a unique accessible name. */}
                        <StandaloneLink href="#" icon={EditIcon}>
                          Wijzigen<span className="ams-visually-hidden"> {key.toLowerCase()} van {person}</span>
                        </StandaloneLink>
                      </DataList.Actions>
                    </DataList.Item>
                  ))}
                </DataList>
              </div>
            )
          })}
        </Column>
        <Button type="submit">Aanvraag versturen</Button>
      </form>
    </Grid.Cell>
  </Grid>
</>`,language:`tsx`}}},render:()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(O,{paddingTop:`large`,children:(0,I.jsx)(O.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:(0,I.jsx)(_,{href:`#`,icon:a,children:`Vorige vraag`})})}),(0,I.jsx)(O,{as:`main`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:(0,I.jsxs)(O.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,I.jsx)(h,{className:`ams-mb-xl`,level:1,children:`Controleer uw gegevens`}),(0,I.jsxs)(`form`,{onSubmit:e=>e.preventDefault(),children:[(0,I.jsx)(T,{className:`ams-mb-xl`,gap:`x-large`,children:[{address:`Voorbeeldstraat 1`,birthDate:`1 januari 1990`,name:`Alex Voorbeeld`},{address:`Voorbeeldstraat 2`,birthDate:`2 februari 1992`,name:`Sam Voorbeeld`}].map(({address:e,birthDate:t,name:n},a)=>{let o=`persoon ${a+1}`;return(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(g,{align:`between`,alignVertical:`center`,className:`ams-mb-s`,wrap:!0,children:[(0,I.jsxs)(h,{level:2,children:[`Persoon `,a+1]}),(0,I.jsxs)(y,{icon:r,iconBefore:!0,type:`button`,variant:`secondary`,children:[`Verwijderen`,(0,I.jsxs)(`span`,{className:`ams-visually-hidden`,children:[` `,o]})]})]}),(0,I.jsx)(C,{children:[{key:`Naam`,value:n},{key:`Geboortedatum`,value:t},{key:`Adres`,value:(0,I.jsxs)(I.Fragment,{children:[e,(0,I.jsx)(`br`,{}),`1000 AA Amsterdam`]})}].map(({key:e,value:t})=>(0,I.jsxs)(C.Item,{children:[(0,I.jsx)(C.Key,{children:e}),(0,I.jsx)(C.Value,{children:t}),(0,I.jsx)(C.Actions,{children:(0,I.jsxs)(_,{href:`#`,icon:i,children:[`Wijzigen`,(0,I.jsxs)(`span`,{className:`ams-visually-hidden`,children:[` `,e.toLowerCase(),` van `,o]})]})})]},e))})]},n)})}),(0,I.jsx)(y,{type:`submit`,children:`Aanvraag versturen`})]})]})})]})},K=[`LandingPage`,`SingleQuestion`,`SingleQuestionWithSubquestions`,`MultipleQuestions`,`WithValidationError`,`CheckAnswers`,`CheckAnswersWithGroups`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <PageLayout>
        <Story />
      </PageLayout>],
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every \`map\` is expanded. Provide the source by hand so the panel shows the form
        // markup on its own, with the accessibility guidance kept short.
        code: \`// The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
<main id="inhoud">
  {/* The Content Header takes a Grid of its own, so the space below it is a padding rather than a row gap. */}
  {/* This page opens with the Content Header rather than a Breadcrumb, so that Grid takes the paddingTop of large. */}
  {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
  <Grid paddingBottom="2x-large" paddingTop="large">
    {/* ams-prose sets the vertical rhythm between the title and the lead of this Content Header. */}
    <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Heading level={1}>Waar u dit formulier voor gebruikt</Heading>
      <Paragraph size="large">
        Met dit formulier maakt u een afspraak bij een Stadsloket in Amsterdam of Weesp.
      </Paragraph>
    </Grid.Cell>
  </Grid>
  {/* Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off. */}
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  <Grid paddingBottom="2x-large">
    <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      {/*
       * Listing the steps is a choice, not a rule: GOV.UK asks a start page for what the service does,
       * what it costs, how long it takes and one call to action, and warns against making it too
       * complicated. Test whether users need the list, as you would a progress indicator.
       * See https://design-system.service.gov.uk/patterns/start-using-a-service/
       */}
      <Heading level={2}>De stappen in dit formulier</Heading>
      <OrderedList>
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
  </Grid>
</main>\`,
        language: 'tsx'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args =>
  // The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
  <main id="inhoud">
      {/* The Content Header takes a Grid of its own, so the space below it is a padding rather than a row gap. */}
      {/* This page opens with the Content Header rather than a Breadcrumb, so that Grid takes the paddingTop of large. */}
      {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
      <Grid paddingBottom="2x-large" paddingTop="large">
        {/* ams-prose sets the vertical rhythm between the title and the lead of this Content Header. */}
        <Grid.Cell className="ams-prose" span={{
        narrow: 4,
        medium: 7,
        wide: 9
      }} start={{
        narrow: 1,
        medium: 1,
        wide: 2
      }}>
          <Heading level={1}>Waar u dit formulier voor gebruikt</Heading>
          <Paragraph size="large">
            Met dit formulier maakt u een afspraak bij een Stadsloket in Amsterdam of Weesp.
          </Paragraph>
        </Grid.Cell>
      </Grid>
      {/* Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off. */}
      {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
      <Grid paddingBottom="2x-large">
        <Grid.Cell className="ams-prose" span={{
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
          <Heading level={2}>De stappen in dit formulier</Heading>
          <OrderedList>
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
    </main>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
       * The task name is a caption, not a heading: the question below is the level 1 heading. A heading here
       * would either precede that h1 in the heading list, or need aria-hidden to stay out of it, which takes the
       * name away from screen reader users. A paragraph keeps it available to everyone. The b tag only offsets it
       * visually – it carries no emphasis, so nothing changes for a screen reader.
       */}
      <Paragraph className="ams-mb-m"><b>Afspraak maken</b></Paragraph>
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
           * The task name is a caption, not a heading: the question below is the level 1 heading. A heading here
           * would either sit above that h1 in the hierarchy, or need aria-hidden to stay out of it, which takes the
           * name away from screen reader users. A paragraph keeps it available to everyone. The b tag only offsets it
           * visually – it carries no emphasis, so nothing changes for a screen reader.
           */}
          <Paragraph className="ams-mb-m">
            <b>Afspraak maken</b>
          </Paragraph>
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
       * The task name is a caption, not a heading: the question below is the level 1 heading. A heading here
       * would either sit above that h1 in the hierarchy, or need aria-hidden to stay out of it, which takes the
       * name away from screen reader users. A paragraph keeps it available to everyone. The b tag only offsets it
       * visually – it carries no emphasis, so nothing changes for a screen reader.
       */}
      <Paragraph className="ams-mb-m"><b>Afspraak maken</b></Paragraph>
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
           * The task name is a caption, not a heading: the question below is the level 1 heading. A heading here
           * would either sit above that h1 in the hierarchy, or need aria-hidden to stay out of it, which takes the
           * name away from screen reader users. A paragraph keeps it available to everyone. The b tag only offsets it
           * visually – it carries no emphasis, so nothing changes for a screen reader.
           */}
          <Paragraph className="ams-mb-m">
            <b>Afspraak maken</b>
          </Paragraph>
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
       * The task name is a caption, not a heading: the question below is the level 1 heading. A heading here
       * would either sit above that h1 in the hierarchy, or need aria-hidden to stay out of it, which takes the
       * name away from screen reader users. A paragraph keeps it available to everyone. The b tag only offsets it
       * visually – it carries no emphasis, so nothing changes for a screen reader.
       */}
      <Paragraph className="ams-mb-m"><b>Afspraak maken</b></Paragraph>
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
           * The task name is a caption, not a heading: the question below is the level 1 heading. A heading here
           * would either sit above that h1 in the hierarchy, or need aria-hidden to stay out of it, which takes the
           * name away from screen reader users. A paragraph keeps it available to everyone. The b tag only offsets it
           * visually – it carries no emphasis, so nothing changes for a screen reader.
           */}
          <Paragraph className="ams-mb-m">
            <b>Afspraak maken</b>
          </Paragraph>
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  decorators: [formPageLayoutDecorator],
  parameters: {
    docs: {
      source: {
        // Provide the source by hand so the Code Panel keeps the map instead of expanding every item.
        code: \`<>
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      <StandaloneLink href="#" icon={ChevronBackwardIcon}>Vorige vraag</StandaloneLink>
    </Grid.Cell>
  </Grid>
  <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      <Paragraph className="ams-mb-m"><b>Afspraak maken</b></Paragraph>
      <Heading className="ams-mb-xl" level={1}>Controleer uw gegevens</Heading>
      {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
      <form onSubmit={(e) => e.preventDefault()}>
        <DataList className="ams-mb-xl">
          {[
            { key: 'Afspraak', value: 'Paspoort / ID / Rijbewijs' },
            { key: 'Stadsloket', value: 'Centrum' },
            { key: 'Datum', value: '24 november 2026' },
            { key: 'Tijd', value: '10.00 uur' },
            { key: 'E-mailadres', value: 'voorbeeld@example.com' },
            { key: 'Telefoonnummer', value: '06 12345678' },
          ].map(({ key, value }) => (
            <DataList.Item key={key}>
              <DataList.Key>{key}</DataList.Key>
              <DataList.Value>{value}</DataList.Value>
              <DataList.Actions>
                {/* Return to the matching question with the answers preserved. */}
                <StandaloneLink href="#" icon={EditIcon}>
                  Wijzigen<span className="ams-visually-hidden"> {key.toLowerCase()}</span>
                </StandaloneLink>
              </DataList.Actions>
            </DataList.Item>
          ))}
        </DataList>
        <Button type="submit">Aanvraag versturen</Button>
      </form>
    </Grid.Cell>
  </Grid>
</>\`,
        language: 'tsx'
      }
    }
  },
  render: () => <>
      <Grid paddingTop="large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 7
      }} start={{
        narrow: 1,
        medium: 2,
        wide: 3
      }}>
          <StandaloneLink href="#" icon={ChevronBackwardIcon}>
            Vorige vraag
          </StandaloneLink>
        </Grid.Cell>
      </Grid>
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
          <Paragraph className="ams-mb-m">
            <b>Afspraak maken</b>
          </Paragraph>
          <Heading className="ams-mb-xl" level={1}>
            Controleer uw gegevens
          </Heading>
          {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
          <form onSubmit={e => e.preventDefault()}>
            <DataList className="ams-mb-xl">
              {[{
              key: 'Afspraak',
              value: 'Paspoort / ID / Rijbewijs'
            }, {
              key: 'Stadsloket',
              value: 'Centrum'
            }, {
              key: 'Datum',
              value: '24 november 2026'
            }, {
              key: 'Tijd',
              value: '10.00 uur'
            }, {
              key: 'E-mailadres',
              value: 'voorbeeld@example.com'
            }, {
              key: 'Telefoonnummer',
              value: '06 12345678'
            }].map(({
              key,
              value
            }) => <DataList.Item key={key}>
                  <DataList.Key>{key}</DataList.Key>
                  <DataList.Value>{value}</DataList.Value>
                  <DataList.Actions>
                    {/* Return to the matching question with the answers preserved. */}
                    <StandaloneLink href="#" icon={EditIcon}>
                      Wijzigen<span className="ams-visually-hidden"> {key.toLowerCase()}</span>
                    </StandaloneLink>
                  </DataList.Actions>
                </DataList.Item>)}
            </DataList>
            <Button type="submit">Aanvraag versturen</Button>
          </form>
        </Grid.Cell>
      </Grid>
    </>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  decorators: [formPageLayoutDecorator],
  parameters: {
    docs: {
      source: {
        // Provide the source by hand so the Code Panel keeps the map instead of expanding every group.
        code: \`<>
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      <StandaloneLink href="#" icon={ChevronBackwardIcon}>Vorige vraag</StandaloneLink>
    </Grid.Cell>
  </Grid>
  <Grid as="main" paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      <Heading className="ams-mb-xl" level={1}>Controleer uw gegevens</Heading>
      {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
      <form onSubmit={(e) => e.preventDefault()}>
        <Column className="ams-mb-xl" gap="x-large">
          {[
            { address: 'Voorbeeldstraat 1', birthDate: '1 januari 1990', name: 'Alex Voorbeeld' },
            { address: 'Voorbeeldstraat 2', birthDate: '2 februari 1992', name: 'Sam Voorbeeld' },
          ].map(({ address, birthDate, name }, index) => {
            const person = \\\`persoon \\\${index + 1}\\\`

            return (
              <div key={name}>
                <Row align="between" alignVertical="center" className="ams-mb-s" wrap>
                  <Heading level={2}>Persoon {index + 1}</Heading>
                  {/* This illustrative action affects the current page, so use a non-submit Button. */}
                  <Button icon={DeleteIcon} iconBefore type="button" variant="secondary">
                    Verwijderen<span className="ams-visually-hidden"> {person}</span>
                  </Button>
                </Row>
                <DataList>
                  {[
                    { key: 'Naam', value: name },
                    { key: 'Geboortedatum', value: birthDate },
                    { key: 'Adres', value: <>{address}<br />1000 AA Amsterdam</> },
                  ].map(({ key, value }) => (
                    <DataList.Item key={key}>
                      <DataList.Key>{key}</DataList.Key>
                      <DataList.Value>{value}</DataList.Value>
                      <DataList.Actions>
                        {/* Include the key and person so every link has a unique accessible name. */}
                        <StandaloneLink href="#" icon={EditIcon}>
                          Wijzigen<span className="ams-visually-hidden"> {key.toLowerCase()} van {person}</span>
                        </StandaloneLink>
                      </DataList.Actions>
                    </DataList.Item>
                  ))}
                </DataList>
              </div>
            )
          })}
        </Column>
        <Button type="submit">Aanvraag versturen</Button>
      </form>
    </Grid.Cell>
  </Grid>
</>\`,
        language: 'tsx'
      }
    }
  },
  render: () => <>
      <Grid paddingTop="large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 7
      }} start={{
        narrow: 1,
        medium: 2,
        wide: 3
      }}>
          <StandaloneLink href="#" icon={ChevronBackwardIcon}>
            Vorige vraag
          </StandaloneLink>
        </Grid.Cell>
      </Grid>
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
          <Heading className="ams-mb-xl" level={1}>
            Controleer uw gegevens
          </Heading>
          {/* The onSubmit handler only keeps this example from navigating; a real form submits. */}
          <form onSubmit={e => e.preventDefault()}>
            <Column className="ams-mb-xl" gap="x-large">
              {[{
              address: 'Voorbeeldstraat 1',
              birthDate: '1 januari 1990',
              name: 'Alex Voorbeeld'
            }, {
              address: 'Voorbeeldstraat 2',
              birthDate: '2 februari 1992',
              name: 'Sam Voorbeeld'
            }].map(({
              address,
              birthDate,
              name
            }, index) => {
              const person = \`persoon \${index + 1}\`;
              return <div key={name}>
                    <Row align="between" alignVertical="center" className="ams-mb-s" wrap>
                      <Heading level={2}>Persoon {index + 1}</Heading>
                      {/* This illustrative action affects the current page, so use a non-submit Button. */}
                      <Button icon={DeleteIcon} iconBefore type="button" variant="secondary">
                        Verwijderen<span className="ams-visually-hidden"> {person}</span>
                      </Button>
                    </Row>
                    <DataList>
                      {[{
                    key: 'Naam',
                    value: name
                  }, {
                    key: 'Geboortedatum',
                    value: birthDate
                  }, {
                    key: 'Adres',
                    value: <>
                              {address}
                              <br />
                              1000 AA Amsterdam
                            </>
                  }].map(({
                    key,
                    value
                  }) => <DataList.Item key={key}>
                          <DataList.Key>{key}</DataList.Key>
                          <DataList.Value>{value}</DataList.Value>
                          <DataList.Actions>
                            {/* Include the key and person so every link has a unique accessible name. */}
                            <StandaloneLink href="#" icon={EditIcon}>
                              Wijzigen
                              <span className="ams-visually-hidden">
                                {' '}
                                {key.toLowerCase()} van {person}
                              </span>
                            </StandaloneLink>
                          </DataList.Actions>
                        </DataList.Item>)}
                    </DataList>
                  </div>;
            })}
            </Column>
            <Button type="submit">Aanvraag versturen</Button>
          </form>
        </Grid.Cell>
      </Grid>
    </>
}`,...G.parameters?.docs?.source}}}})))()}export{q as n,F as t};