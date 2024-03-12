# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.6.1](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.6.0...design-system-react-v0.6.1) (2024-03-11)


### Bug Fixes

* Button fixes ([#1122](https://github.com/Amsterdam/design-system/issues/1122)) ([b5a9504](https://github.com/Amsterdam/design-system/commit/b5a950491f46710d92526ce6012f7d76992a569f))

## [0.6.0](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.5.0...design-system-react-v0.6.0) (2024-03-08)


### ⚠ BREAKING CHANGES

* Rename ‘header logo’ to ‘header logo link’ and add missing token for outline offset ([#1108](https://github.com/Amsterdam/design-system/issues/1108))
* Use spacing tokens in Grid component ([#1089](https://github.com/Amsterdam/design-system/issues/1089))
* Use span instead of div for VisuallyHidden ([#1080](https://github.com/Amsterdam/design-system/issues/1080))

### Features

* Add Column component and Gap and Margin utilities for vertical spacing ([#1083](https://github.com/Amsterdam/design-system/issues/1083)) ([d092cb3](https://github.com/Amsterdam/design-system/commit/d092cb30e865f712b91b9b197803db7443e2c8cc))
* Add Fieldset component ([#1081](https://github.com/Amsterdam/design-system/issues/1081)) ([e9683c7](https://github.com/Amsterdam/design-system/commit/e9683c7a603fcfd031d6f24769789cc0d63b3c3d))
* Add Radio, update Checkbox and Switch ([#1100](https://github.com/Amsterdam/design-system/issues/1100)) ([79224e3](https://github.com/Amsterdam/design-system/commit/79224e3d97389ec1a5ae1a36fb4012de10109d66))
* Add Tabs component ([#1068](https://github.com/Amsterdam/design-system/issues/1068)) ([4eec887](https://github.com/Amsterdam/design-system/commit/4eec887c579f478b552126e684aba28d037bf9cb))
* Add TextArea Component ([#1095](https://github.com/Amsterdam/design-system/issues/1095)) ([2a50130](https://github.com/Amsterdam/design-system/commit/2a5013025823e32435ed6a7fe9bcbd138deaf511))
* Allow lists to appear in white on a dark background ([#1074](https://github.com/Amsterdam/design-system/issues/1074)) ([14132ed](https://github.com/Amsterdam/design-system/commit/14132edeb96f96c65f0f73cc17a8462afd32d108))
* Introduce tokens for stack spacing and Row component ([#1113](https://github.com/Amsterdam/design-system/issues/1113)) ([f5dba78](https://github.com/Amsterdam/design-system/commit/f5dba78a27610e717b3c10e5babd4ee7059f07f5))
* Logo Museum Weesp  ([#1088](https://github.com/Amsterdam/design-system/issues/1088)) ([da1b780](https://github.com/Amsterdam/design-system/commit/da1b7808b5bcf17acb93fe46531a9722814e9256))
* Refactor button component ([#1065](https://github.com/Amsterdam/design-system/issues/1065)) ([c9984e3](https://github.com/Amsterdam/design-system/commit/c9984e3a5a9492b25e7b40bd9cf67945f4cd0fa1))
* Rename ‘header logo’ to ‘header logo link’ and add missing token for outline offset ([#1108](https://github.com/Amsterdam/design-system/issues/1108)) ([f87e834](https://github.com/Amsterdam/design-system/commit/f87e8345ec900ab08941d5d7ab40f8abd16a569a))
* Use spacing tokens in Grid component ([#1089](https://github.com/Amsterdam/design-system/issues/1089)) ([b55f0a3](https://github.com/Amsterdam/design-system/commit/b55f0a3b64dcfb660a878ade75033a1dd835ac2d))


### Bug Fixes

* Refactor Mega menu, use correct list category class ([#1079](https://github.com/Amsterdam/design-system/issues/1079)) ([00c198d](https://github.com/Amsterdam/design-system/commit/00c198de13ea3d69e4b24db6a8868ae5f7560503))
* Use generic useFocusWithArrows hook ([#1103](https://github.com/Amsterdam/design-system/issues/1103)) ([78ebe27](https://github.com/Amsterdam/design-system/commit/78ebe27599a1e0a2fc475ac87c003cf8ff76cc06))
* Use span instead of div for VisuallyHidden ([#1080](https://github.com/Amsterdam/design-system/issues/1080)) ([b839763](https://github.com/Amsterdam/design-system/commit/b839763066c7debe082fbe9ec2530c363a17b166))
* Use VisuallyHidden instead of aria-label for screen reader only text in Top task link ([#1115](https://github.com/Amsterdam/design-system/issues/1115)) ([4281fa1](https://github.com/Amsterdam/design-system/commit/4281fa188a0b61bd59611fa0d65fa7657c54c361))

## [0.5.0](https://github.com/Amsterdam/design-system/compare/@amsterdam/design-system-react@0.4.0...design-system-react-v0.5.0) (2024-02-09)


### ⚠ BREAKING CHANGES

* Add theme setup and compact theme ([#1067](https://github.com/Amsterdam/design-system/issues/1067))
* Remove `compact` prop of Grid component ([#1067](https://github.com/Amsterdam/design-system/issues/1067))
* Remove deprecated `inList` variant of Link ([#1064](https://github.com/Amsterdam/design-system/issues/1064))

### Features

* Add theme setup and compact theme ([#1067](https://github.com/Amsterdam/design-system/issues/1067)) ([e773434](https://github.com/Amsterdam/design-system/commit/e7734347a9e7205d510a16a543294bde69b9c6f0))
* Remove `compact` prop of Grid component ([#1067](https://github.com/Amsterdam/design-system/issues/1067)) ([e773434](https://github.com/Amsterdam/design-system/commit/e7734347a9e7205d510a16a543294bde69b9c6f0))
* Remove deprecated `inList` variant of Link ([#1064](https://github.com/Amsterdam/design-system/issues/1064)) ([b30784b](https://github.com/Amsterdam/design-system/commit/b30784b352b4a057069ceb397951b79a6e2547f2))

## [0.4.0](https://github.com/Amsterdam/design-system/compare/@amsterdam/design-system-react@0.3.0...@amsterdam/design-system-react@0.4.0) (2024-01-31)

### ⚠ BREAKING CHANGES

* Change blue color names of Spotlight to match Badge API (#1061)
* Allow zero row gap for Grid (#1040)
* Add icon button (#1021)
* Update alert appearance, make ‘warning’ the default and icon non-optional (#993)

### Features

* Add Badge component ([#1045](https://github.com/Amsterdam/design-system/issues/1045)) ([d346cdf](https://github.com/Amsterdam/design-system/commit/d346cdfd2b3c7fab08e6bae10314420f1fde8a5f))
* Add icon button ([#1021](https://github.com/Amsterdam/design-system/issues/1021)) ([b6e1c26](https://github.com/Amsterdam/design-system/commit/b6e1c260878c09340c9fc89f8740ae033e206855))
* Add MegaMenu component ([#992](https://github.com/Amsterdam/design-system/issues/992)) ([de9fcc6](https://github.com/Amsterdam/design-system/commit/de9fcc65cced79a07cf201613b8616193f86b810))
* Add Table ([#1043](https://github.com/Amsterdam/design-system/issues/1043)) ([2175b22](https://github.com/Amsterdam/design-system/commit/2175b22dbab369fb5d7f817a09c7f0560d8d8195))
* Allow zero row gap for Grid ([#1040](https://github.com/Amsterdam/design-system/issues/1040)) ([6ef7b08](https://github.com/Amsterdam/design-system/commit/6ef7b08c4962bad9c564ade67276b78e1a4712b8))
* Change blue color names of Spotlight to match Badge API ([#1061](https://github.com/Amsterdam/design-system/issues/1061)) ([0e663bd](https://github.com/Amsterdam/design-system/commit/0e663bd1bcbc8c848d16962749d6113cd3aaaf20))
* Introduce separate Link List component ([#1051](https://github.com/Amsterdam/design-system/issues/1051)) ([7ccf23d](https://github.com/Amsterdam/design-system/commit/7ccf23d1128a6cade34ec6846d0fee23335af525))

### Bug Fixes

* Include children in public prop types ([#1044](https://github.com/Amsterdam/design-system/issues/1044)) ([2b4c2f6](https://github.com/Amsterdam/design-system/commit/2b4c2f6372c3cf3098a1c848594a29a2ad7fb785))
* Refactor interfaces to types ([#1055](https://github.com/Amsterdam/design-system/issues/1055)) ([91f1126](https://github.com/Amsterdam/design-system/commit/91f1126f27301688b0d1b2d63efa4af03ea2ddfc))
* Refactor subcomponents ([#1050](https://github.com/Amsterdam/design-system/issues/1050)) ([9e48aec](https://github.com/Amsterdam/design-system/commit/9e48aec0444fe5c378614b9ffb2efc3b847f6b7a))
* Update alert appearance, make ‘warning’ the default and icon non-optional ([#993](https://github.com/Amsterdam/design-system/issues/993)) ([df15253](https://github.com/Amsterdam/design-system/commit/df152538278a73c4aceb094fece70025ff35dc5f))

## [0.3.0](https://github.com/Amsterdam/design-system/compare/@amsterdam/design-system-react@0.2.0...@amsterdam/design-system-react@0.3.0) (2023-12-22)

### ⚠ BREAKING CHANGES

* Replace `fullWidth` prop on `Grid.Cell` with an `"all"` value on `span` (#963)
* Rename ‘Highlight’ component to ‘Spotlight’ (#929)
* Update line heights and text levels (#898)

### Features

* Add Header Component ([#807](https://github.com/Amsterdam/design-system/issues/807)) ([34abcd0](https://github.com/Amsterdam/design-system/commit/34abcd07a849fda94fd46bf995b540e20928c2bf))
* Add Search Field component ([#892](https://github.com/Amsterdam/design-system/issues/892)) ([dd1a437](https://github.com/Amsterdam/design-system/commit/dd1a437d46c4ac7d43d64f7c1acadecc377e7928))
* Add Skip link component ([#988](https://github.com/Amsterdam/design-system/issues/988)) ([82323b5](https://github.com/Amsterdam/design-system/commit/82323b594c7fba99819cf6873227ca3dcd084315))
* Add text input component ([#912](https://github.com/Amsterdam/design-system/issues/912)) ([d4401cc](https://github.com/Amsterdam/design-system/commit/d4401ccf9d41d5c8a48ec32d63cdaabec549d5f2))
* Allow ‘Grid Cell’ to render a custom HTML element ([#968](https://github.com/Amsterdam/design-system/issues/968)) ([1b9cda7](https://github.com/Amsterdam/design-system/commit/1b9cda7ce57abd45166f48c18c919769bff033fe))
* Introduce ‘Mark’ component ([#933](https://github.com/Amsterdam/design-system/issues/933)) ([d399454](https://github.com/Amsterdam/design-system/commit/d399454ed729a595cab902c83e54d61e3c2aaf71))
* Introduce ‘Overlap’ component for hero image with search field ([#932](https://github.com/Amsterdam/design-system/issues/932)) ([1b2e87d](https://github.com/Amsterdam/design-system/commit/1b2e87db032d1500e301c2027596a5c908d59c8c))
* Rename ‘Highlight’ component to ‘Spotlight’ ([#929](https://github.com/Amsterdam/design-system/issues/929)) ([9993d8d](https://github.com/Amsterdam/design-system/commit/9993d8dd4ff17ec5e686295d711cc7688f7ce28c))
* Replace `fullWidth` prop on `Grid.Cell` with an `"all"` value on `span` ([#963](https://github.com/Amsterdam/design-system/issues/963)) ([b6a8b34](https://github.com/Amsterdam/design-system/commit/b6a8b3450af823f5c033f290783f013e6f20b205))
* Update line heights and text levels ([#898](https://github.com/Amsterdam/design-system/issues/898)) ([82356bb](https://github.com/Amsterdam/design-system/commit/82356bbf11c389c0f29146ca5f715d5b7459a634))

### Bug Fixes

* Clean up redundant subcomponent types ([#894](https://github.com/Amsterdam/design-system/issues/894)) ([0c4bbc1](https://github.com/Amsterdam/design-system/commit/0c4bbc1404f66d3d70441812de9949b77060a951))
* Merge grid cell files into grid files and directories ([#815](https://github.com/Amsterdam/design-system/issues/815)) ([f4b4ec5](https://github.com/Amsterdam/design-system/commit/f4b4ec5de92d283ee2ef083075297a64b3dfd1cb))
* Remove unused prop type in TextInput ([#990](https://github.com/Amsterdam/design-system/issues/990)) ([f150e16](https://github.com/Amsterdam/design-system/commit/f150e16c1953791ec7c6d6891e2cd5cb43c26ffa))

## [0.2.0](https://github.com/Amsterdam/design-system/compare/@amsterdam/design-system-react@0.1.9...@amsterdam/design-system-react@0.2.0) (2023-12-01)

### ⚠ BREAKING CHANGES

* Update typography system and values, implement compact theme (#803)

### Features

* Add common link tokens and use them in all link-like components ([#814](https://github.com/Amsterdam/design-system/issues/814)) ([9b5bd55](https://github.com/Amsterdam/design-system/commit/9b5bd55d0b118f246b828e023b75be1e84f98af4))
* Allow end-alignment on page menu ([#835](https://github.com/Amsterdam/design-system/issues/835)) ([035ca08](https://github.com/Amsterdam/design-system/commit/035ca08842ee8ad955b260fb26693fe739801df4))
* Allow small and large vertical white space on grids ([#821](https://github.com/Amsterdam/design-system/issues/821)) ([aa54eb9](https://github.com/Amsterdam/design-system/commit/aa54eb911bfed633856a74e0be4e11d4ad8f3ebc))
* Update typography system and values, implement compact theme ([#803](https://github.com/Amsterdam/design-system/issues/803)) ([9b087ec](https://github.com/Amsterdam/design-system/commit/9b087ec5c6e75dfafadcdcde710747ef63951917))

### Bug Fixes

* Apply regular font size to lists of links ([#875](https://github.com/Amsterdam/design-system/issues/875)) ([4908a42](https://github.com/Amsterdam/design-system/commit/4908a42c6e78deaf8ce42aaf0e91dc5e156b0779))

## [0.1.9](https://github.com/Amsterdam/design-system/compare/@amsterdam/design-system-react@0.1.8...@amsterdam/design-system-react@0.1.9) (2023-11-27)

**Note:** Version bump only for package @amsterdam/design-system-react
