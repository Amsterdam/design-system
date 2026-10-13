# Accessibility Test Protocol for Page Templates

## 1. Purpose

This test protocol is used to check whether page templates are usable for people who use assistive technology.

The focus is on two main areas:

1. **Navigation:** can the user reach and use all important parts of the page?
2. **Screen reader output:** are elements announced in a logical and understandable way?

Additional accessibility aspects are also checked, such as keyboard focus, forms, dynamic content and colour and contrast.

The goal of this protocol is that another colleague can perform the same test without needing additional instructions.

---

## 2. Test environment

|               | Primary | Secondary (if available) |
| ------------- | ------- | ------------------------ |
| OS            | Windows | macOS/Windows            |
| Browser       | Chrome  | Safari/Chrome            |
| Screen reader | NVDA    | VoiceOver/JAWS           |

Use the latest versions and **record the exact versions** (OS, browser, screen reader) in every test log and ticket. If a combination was not tested, say so and explain why.

---

## 3. How to run the test

### 3.1 Setup

1. Fill in the header of the test log (section 8): date, tester and versions.
2. Start NVDA and open the **Speech Viewer**. It shows what is read out as text, which can be copied into tickets.
3. Open the template in Chrome and go to the top of the page. **Do not start tabbing yet.** First listen to how the page is read from the start.

NVDA can switch between **Browse Mode** (reading and navigating) and **Focus Mode** (interacting with form fields). When needed, you can switch modes manually.

If the expected mode is not activated when interacting with a form field and this affects usability, record it as a finding.

### 3.2 General checks (every page)

Mark each as ✅ / ⚠️ / ❌ / n.a.

**About the WCAG column:** The references point to relevant WCAG 2.2 Level AA success criteria and are intended to help describe a finding. A ❌ here does not automatically mean that the success criterion formally fails. The finding should be reviewed before making that conclusion.

#### A. Navigation and keyboard focus (mouse away)

Use `Tab`, `Shift+Tab`, `Enter`, `Space`, arrow keys and `Esc`.

| #   | Check                                                                                                          | WCAG          |
| --- | -------------------------------------------------------------------------------------------------------------- | ------------- |
| A1  | Every interactive element can be reached and operated with the keyboard                                        | 2.1.1         |
| A2  | You never get stuck (menus, modals, calendars)                                                                 | 2.1.2         |
| A3  | Focus order follows the visual and logical order                                                               | 2.4.3         |
| A4  | Focus is always visible and not hidden behind sticky elements                                                  | 2.4.7, 2.4.11 |
| A5  | A skip link is first and works                                                                                 | 2.4.1         |
| A6  | Standard keys work (`Enter` on links, `Space`/`Enter` on buttons, arrows on radios/tabs, `Esc` closes dialogs) | 2.1.1         |

#### B. Structure and screen reader output

Go through the page three ways: **line by line**, **by headings** and **via the Elements list**.

| #   | Check                                                                                                              | WCAG         |
| --- | ------------------------------------------------------------------------------------------------------------------ | ------------ |
| B1  | Page title is descriptive and unique. It is clear which page is open                                               | 2.4.2        |
| B2  | One clear `h1`. Headings are real headings and follow a logical structure                                          | 1.3.1, 2.4.6 |
| B3  | Landmarks exist (header, nav, main, search, footer) and are named if there is more than one of the same type       | 1.3.1        |
| B4  | Reading order matches the visual order                                                                             | 1.3.2        |
| B5  | Every interactive element is announced with **name, role and state** (e.g. "Filter, button", "Menu, collapsed")    | 4.1.2        |
| B6  | Link text makes sense without visual context (no repeated "Read more")                                             | 2.4.4        |
| B7  | Informative images have useful alt text, decorative images are skipped and image links/buttons describe the action | 1.1.1        |
| B8  | Hidden content is not read, visible content is not omitted and nothing is read twice unnecessarily                 | n.a.         |

> Do not skip elements because they look fine visually. Something can look right and still be unclear to a screen reader user.

#### C. Forms, dynamic content and errors

| #   | Check                                                                                        | WCAG         |
| --- | -------------------------------------------------------------------------------------------- | ------------ |
| C1  | Status changes (results updated, "Saved", loading) are announced without moving the focus    | 4.1.3        |
| C2  | Error messages are announced and linked to the correct field                                 | 3.3.1        |
| C3  | Error messages explain what is wrong and, where applicable, how to fix it                    | 3.3.3        |
| C4  | Fields have a label and, where needed, instructions. Both are available when using the field | 1.3.1, 3.3.2 |
| C5  | No unexpected focus move or context change happens on input                                  | 3.2.1, 3.2.2 |

Ask yourself: _if I could not see the screen, would I know that something changed?_

#### D. Colour and contrast

Use a browser tool or contrast checker when you notice a possible problem.

| #   | Check                                                                                           | WCAG   |
| --- | ----------------------------------------------------------------------------------------------- | ------ |
| D1  | Text has enough contrast against its background (body text, button text, links, error messages) | 1.4.3  |
| D2  | Focus indicators, form field borders and important graphics have enough contrast                | 1.4.11 |
| D3  | Information is not communicated by colour alone (a red field also needs an error message)       | 1.4.1  |

### 3.3 Component checks

Run these for every component present, on top of the general checks. For each, ask: _how do I operate it with the keyboard, what do I hear (name, role, state) and is a change announced?_

**Buttons and links**

- Announced as a button/link with an understandable name. Icon-only buttons (e.g. a magnifier) must still say what they do.
- Buttons work with `Enter` and `Space`, links with `Enter`.
- A change after activation is communicated where needed.

**Form fields (text, radio, checkbox, select)**

- Label, field type, required status and hint text are available when using the field. Good: _"Email address, required, edit field"_. Bad: _"Edit field"_.
- Radio/checkbox groups have a group label (fieldset/legend) where needed.
- Error test: leave a required field empty and enter invalid data, then submit. The error must be announced, connected to the correct field and understandable (e.g. _"Email address, invalid email address"_).
- An error summary, if present, should link to the relevant field.
- Fix the error and resubmit.

**Search bar**

- Field has a label and the button has a name.
- After searching, the result status or count is announced where needed and focus does not jump unexpectedly.
- Suggestions are announced and selectable when suggestions are provided.

**Calendar / date picker**

- Opens and closes by keyboard.
- Focus goes into the calendar and returns to the field when it closes.
- Arrow keys move through dates. `PageUp`/`PageDown` move by month when supported by the component.
- Dates are read clearly, including relevant information such as weekday, day, month and year.
- Selected and disabled dates are distinguishable.
- Typing a date manually is possible when supported, with the expected format explained.

**Header, navigation, breadcrumb**

- Navigation landmarks are named and the current page is announced (`aria-current`) where relevant.
- Dropdown menus: open/closed state is available, keyboard operable and `Esc` closes them where supported.
- Breadcrumb is a named navigation area and the last item represents the current page.

**Tabs**

- Announced as tabs, with the selected one identified.
- Arrow keys move within the tab list when this interaction pattern is used.
- `Tab` moves to the associated panel according to the component's interaction pattern.
- The relationship between the tab and its panel is clear.

**Dialogs / modals**

- Focus moves into the dialog on open and stays within the dialog while it is open.
- The dialog is announced with a name.
- `Esc` closes it when supported.
- The background is not reachable while the modal is open.
- Focus returns to the trigger after the dialog closes.

_Problem example:_ focus stays behind the modal, so a screen reader user does not realise that a dialog opened.

**Tables**

- The table structure is clear and the table is recognised as a table.
- The table has a clear name or caption where needed.
- Users can understand the relationship between headers and cells.
- Sort buttons announce the current sort and the change after sorting.
- Row actions have unique names ("Edit project X", not just "Edit").
- Ask: _can I tell which column a value belongs to without looking?_

**Pagination, filters, results list**

- Pagination is a named navigation area and the current page is announced.
- Filter state (checked/selected) is available and the result update is announced where needed.
- Results have an appropriate list structure where applicable.

**Cards, images, footer**

- Card has a clear heading and does not contain unnecessary duplicate links to the same target.
- Footer landmark exists and links are logically grouped.

_Component not listed? Use the three questions at the start of this section._

### 3.4 Template scenarios

You do not need to test every template in full. Many share the same components. Choose a representative set and note why in the overview (section 6). Run the matching scenario for each chosen template, in addition to the general and component checks.

| Type             | Templates                                                       | Scenario        |
| ---------------- | --------------------------------------------------------------- | --------------- |
| Content          | Home, Article, Handbook, Information, Product, Profile, Project | Content page    |
| Overview / list  | Events Overview, News Overview, Search Results                  | Search results  |
| Form             | Form Flow                                                       | Form flow       |
| Navigation       | Navigation Page                                                 | Navigation page |
| Status / loading | Loading Page                                                    | Loading page    |

**Content page** (e.g. Project Page)

1. Navigate by headings and landmarks and check the page structure.
2. Tab through all interactive elements (links, buttons, tabs, accordions).
3. Check images and that the full content is read in a logical order.

**Search results** (e.g. Search Results Page)

1. Go to the search field and check the label and instructions.
2. Search and check that it is clear the results changed.
3. Move through the results, open one and return.
4. Apply filters and check what is announced.
5. Test pagination if available.

**Form flow**

1. Move through the form with NVDA. Check that every field has an understandable label.
2. Complete the form correctly and submit it. Check the success message.
3. Complete it again with missing and invalid data. Check how errors are announced, which field they point to and that you can reach that field.
4. For multi-step forms, check step indication and navigation between steps.

**Navigation page**

1. Check that the navigation landmarks are named and the main heading is clear.
2. Move through every menu level with the keyboard. Open and close submenus and check that the open/closed state is announced.
3. Check that the current page or section is announced.
4. Check that the skip link works and that hidden menu items are not read.
5. Activate a link and check where the focus ends up.

**Loading page**

1. Trigger the loading state. If it disappears too fast, slow the network in Chrome DevTools (`Network` → `Throttling`).
2. Listen: is the loading state announced without moving the focus?
3. When the content appears, check that this is announced and that the focus is not lost or reset unexpectedly.
4. If loading fails or times out, check that the error is announced and that a retry option is reachable by keyboard.
5. Check that animations have an accessible alternative and do not create unnecessary screen reader output.

**Table** (any template containing a table, e.g. TablePage)

1. Navigate to the table and check that it is recognised and named.
2. Move through headers, rows and cells with table navigation.
3. Test sorting and links/buttons inside the table.

---

## 4. What counts as a finding?

Record a finding when a user cannot:

- reach or operate an element
- understand what it does or what is happening
- access important information
- notice that content changed
- tell where the focus is
- continue navigating
- recover from an error

Not every difference between the screen reader output and the visual interface is a problem.

Ask:

> **Can a user that uses assistive technology understand and use the page?**

If you are unsure, record it and discuss it with a colleague.

### Severity

If your team uses severity or priority levels, follow the existing team convention.

If no convention exists, use the following levels:

| Level   | Meaning                                                                               |
| ------- | ------------------------------------------------------------------------------------- |
| Blocker | Task cannot be completed (keyboard trap, unreachable button)                          |
| High    | Task is possible but very difficult or misleading (missing name, error not announced) |
| Medium  | Annoying but a workaround exists (odd order, vague label)                             |
| Low     | Minor improvement                                                                     |

### Before you create a ticket

1. Repeat the steps to confirm that the problem is reproducible.
2. Check whether it also happens without the screen reader or in another browser. This helps determine whether the problem is related to the page or to a specific combination.
3. Write down the exact steps, expected result and actual result. Include the Speech Viewer text where useful.

---

## 5. JIRA ticket template

Create one ticket per finding.

```text
Title: [Template/Component] short description
Example: Form Flow: error message not announced by NVDA

Template / URL:
Component:
Environment: Windows x, Chrome x, NVDA x
Severity:
WCAG criterion (indicative): e.g. 4.1.2 Name, Role, Value

Why this affects users:

Steps to reproduce:
  1.
  2.
  3.

Expected result:

Actual result (what NVDA said):

Evidence: screenshot / recording / Speech Viewer text

Also occurs without screen reader or in another combination?
yes / no / not tested

Suggested fix (optional):
```

---

## 6. Overview of templates and combinations tested

Mark the templates you chose and explain why. Leave the others as **Not selected**.

| Template             | Scenario        | Windows + NVDA + Chrome | Windows + JAWS + Chrome | macOS + VoiceOver + Safari | JIRA findings |
| -------------------- | --------------- | ----------------------- | ----------------------- | -------------------------- | ------------- |
| Home Page            | Content page    |                         |                         |                            |               |
| Article Page         | Content page    |                         |                         |                            |               |
| Events Overview Page | Search results  |                         |                         |                            |               |
| Form Flow            | Form flow       |                         |                         |                            |               |
| Handbook Page        | Content page    |                         |                         |                            |               |
| Information Page     | Content page    |                         |                         |                            |               |
| Loading Page         | Loading page    |                         |                         |                            |               |
| Navigation Page      | Navigation page |                         |                         |                            |               |
| News Overview Page   | Search results  |                         |                         |                            |               |
| Product Page         | Content page    |                         |                         |                            |               |
| Profile Page         | Content page    |                         |                         |                            |               |
| Project Page         | Content page    |                         |                         |                            |               |
| Search Results Page  | Search results  |                         |                         |                            |               |

Explain any combination that was not tested, for example:

> "macOS was not available, so only Windows + NVDA + Chrome was tested."

---

## 7. Completion checklist

- [ ] Page title, headings and landmarks checked
- [ ] All links, buttons, form fields and other interactive elements tested
- [ ] Tab order logical, focus visible and no focus traps
- [ ] Names, roles, labels and states announced correctly
- [ ] Errors and dynamic changes announced
- [ ] Images announced correctly and decorative images ignored
- [ ] Colour and contrast checked
- [ ] Template scenario completed, including error scenarios
- [ ] Every finding is a JIRA ticket with reproduction steps and environment
- [ ] Results and combinations recorded and untested areas explained

---

## 8. Test log header

**Date:** …
**Tester:** …

**Environment:** Windows … · NVDA … · Chrome …
**Secondary environment (example if tested):** macOS … · VoiceOver … · Safari …

**Templates tested:** …

---

## References

- [Digitaal Toegankelijk knowledge base](https://digitaaltoegankelijk.nl/kennisbank/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) (expected keyboard behaviour per component)
