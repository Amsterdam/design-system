# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.17.0](https://github.com/alimpens/design-system/compare/design-system-react-v0.16.0...design-system-react-v0.17.0) (2025-05-07)


### ⚠ BREAKING CHANGES

* **Screen:** Delete component (use Page instead) ([#2018](https://github.com/alimpens/design-system/issues/2018))
* **Tabs:** Change `tab` prop to `id` and `aria-controls` attributes ([#2011](https://github.com/alimpens/design-system/issues/2011))
* **Grid:** Match values for padding and gap with Space sizes ([#1993](https://github.com/alimpens/design-system/issues/1993))
* **Link:** Remove ‘variant’ prop, make inline the default ([#1994](https://github.com/alimpens/design-system/issues/1994))
* **Card:** Replace gap with margins and introduce subcomponents ([#1972](https://github.com/alimpens/design-system/issues/1972))
* **Image:** Remove children prop ([#1996](https://github.com/alimpens/design-system/issues/1996))
* **Top Task Link:** Remove component ([#1988](https://github.com/alimpens/design-system/issues/1988))
* **Footer:** Rename component to Page Footer ([#1971](https://github.com/alimpens/design-system/issues/1971))
* **Header:** Rename component to Page Header ([#1970](https://github.com/alimpens/design-system/issues/1970))
* **MegaMenu:** Remove deprecated component ([#1963](https://github.com/alimpens/design-system/issues/1963))
* **PageMenu:** Remove deprecated component ([#1964](https://github.com/alimpens/design-system/issues/1964))
* **Column, Row:** Do not use utility classes ([#1951](https://github.com/alimpens/design-system/issues/1951))
* Shorten size labels in prop values for Row and Column, space tokens and utility classes ([#1940](https://github.com/alimpens/design-system/issues/1940))
* **Description List:** Rename values for terms column widths ([#1942](https://github.com/alimpens/design-system/issues/1942))
* **Aspect Ratio, Gap, Margin:** Use single dash in utility classes ([#1938](https://github.com/alimpens/design-system/issues/1938))
* **Tabs:** Convert `tab` prop to string ([#1923](https://github.com/alimpens/design-system/issues/1923))
* Update aspect ratio tokens and CSS utility classes ([#1913](https://github.com/alimpens/design-system/issues/1913))
* **Header:** Add responsive version of Amsterdam Logo, remove Heading level 1 ([#1880](https://github.com/alimpens/design-system/issues/1880))
* **Tabs:** Rename onChange to onTabChange ([#1908](https://github.com/alimpens/design-system/issues/1908))
* **Heading:** Remove ‘level’ from class name ([#1904](https://github.com/alimpens/design-system/issues/1904))
* Split typography tokens into ‘body text’ and ‘heading’ groups ([#1890](https://github.com/alimpens/design-system/issues/1890))
* **Footer:** add FooterMenu component to replace PageMenu in Footer ([#1871](https://github.com/alimpens/design-system/issues/1871))
* **Avatar:** Use updated color names for azure, lime and green  ([#1867](https://github.com/alimpens/design-system/issues/1867))
* **Badge:** Use updated color names for azure and lime ([#1866](https://github.com/alimpens/design-system/issues/1866))
* **Spotlight:** Use updated color names for lime and green and remove purple as an explicit option ([#1865](https://github.com/alimpens/design-system/issues/1865))
* Combine contrast and inverse color options into a single prop ([#1822](https://github.com/alimpens/design-system/issues/1822))
* Rename Form Error List to Invalid Form Alert ([#1835](https://github.com/alimpens/design-system/issues/1835))
* **Pagination:** Use links instead of buttons ([#1821](https://github.com/alimpens/design-system/issues/1821))
* **Badge:** Remove some colour options ([#1826](https://github.com/alimpens/design-system/issues/1826))
* **Avatar:** Remove some colour options and make purple the default ([#1825](https://github.com/alimpens/design-system/issues/1825))
* **Accordion, Alert, Dialog, Form Error List, Heading:** Require explicit heading levels ([#1819](https://github.com/alimpens/design-system/issues/1819))
* Move alert icon into thick left border ([#1792](https://github.com/alimpens/design-system/issues/1792))
* Add collapsible menu to Header ([#1784](https://github.com/alimpens/design-system/issues/1784))
* Disallow blue Spotlight and make purple the default ([#1798](https://github.com/alimpens/design-system/issues/1798))
* Make Tabs correctly handle a single Tab Button ([#1775](https://github.com/alimpens/design-system/issues/1775))
* Make active Tab look less like a primary Button ([#1773](https://github.com/alimpens/design-system/issues/1773))
* Make background of Alert white again ([#1765](https://github.com/alimpens/design-system/issues/1765))
* Replace renamed colours for Avatar, Badge and Spotlight ([#1758](https://github.com/alimpens/design-system/issues/1758))
* Change colours for Alert ([#1757](https://github.com/alimpens/design-system/issues/1757))
* Require an alt prop for every Image ([#1739](https://github.com/alimpens/design-system/issues/1739))
* Replace Aspect Ratio component with utility classes and prop on Image ([#1593](https://github.com/alimpens/design-system/issues/1593))
* Use new Button features for SearchField ([#1695](https://github.com/alimpens/design-system/issues/1695))
* Rename Description List ‘details’ to ’description’ ([#1703](https://github.com/alimpens/design-system/issues/1703))
* Make API for icon in button friendlier ([#1700](https://github.com/alimpens/design-system/issues/1700))
* Support various column widths for Description List ([#1697](https://github.com/alimpens/design-system/issues/1697))
* Make terms bold instead of descriptions in Description List ([#1693](https://github.com/alimpens/design-system/issues/1693))
* Add Action Group component, e.g. to wrap Dialog buttons in ([#1592](https://github.com/alimpens/design-system/issues/1592))
* Use inline SVG icon for Radio button ([#1460](https://github.com/alimpens/design-system/issues/1460))
* Remove unnecessary Dialog wrapper ([#1591](https://github.com/alimpens/design-system/issues/1591))
* Remove form from Dialog ([#1582](https://github.com/alimpens/design-system/issues/1582))
* Replace ‘on background’ props with ‘inverseColor’ and ‘contrastColor’ for Link, Link List Link, and Icon Button ([#1448](https://github.com/alimpens/design-system/issues/1448))
* Add and rename Pagination props, remove use of `aria-label` ([#1366](https://github.com/alimpens/design-system/issues/1366))
* Remove Visually Hidden component ([#1391](https://github.com/alimpens/design-system/issues/1391))
* Remove HeadingLevel type, group Heading sizes in story ([#1387](https://github.com/alimpens/design-system/issues/1387))
* Apply default gap in Row and Column without extra class ([#1422](https://github.com/alimpens/design-system/issues/1422))
* Include ‘gap-’ in class names for Row and Column gap ([#1421](https://github.com/alimpens/design-system/issues/1421))
* Rename Form Field Character Counter to Character Count ([#1363](https://github.com/alimpens/design-system/issues/1363))
* Change CSS classes for Heading level for consistency with token names ([#1355](https://github.com/alimpens/design-system/issues/1355))
* Allow additional background colours for Avatar and remove dark blue option ([#1257](https://github.com/alimpens/design-system/issues/1257))
* Rename title props for Alert, Header and Dialog and require it for Dialog ([#1251](https://github.com/alimpens/design-system/issues/1251))
* Change Accordion `section` boolean prop to `sectionAs` enum ([#1244](https://github.com/alimpens/design-system/issues/1244))
* Use invalid prop for most inputs ([#1240](https://github.com/alimpens/design-system/issues/1240))
* Add invalid prop to Field Set and update Field and Field Set docs ([#1237](https://github.com/alimpens/design-system/issues/1237))
* Allow additional background colours for Badge and remove dark blue option ([#1236](https://github.com/alimpens/design-system/issues/1236))
* Rename Breadcrumb Item to Link ([#1232](https://github.com/alimpens/design-system/issues/1232))
* Rename Form Label to Label ([#1201](https://github.com/alimpens/design-system/issues/1201))
* Shorten namespaces in theme and tokens ([#1125](https://github.com/alimpens/design-system/issues/1125))
* Rename ‘header logo’ to ‘header logo link’ and add missing token for outline offset ([#1108](https://github.com/alimpens/design-system/issues/1108))

### Features

* **Accordion, Alert, Dialog, Form Error List, Heading:** Require explicit heading levels ([#1819](https://github.com/alimpens/design-system/issues/1819)) ([ef849ed](https://github.com/alimpens/design-system/commit/ef849ed459d0c7a8293b96e3e06574c7eca85acb))
* **Accordion:** Increase text size for Heading to level 4 ([#1837](https://github.com/alimpens/design-system/issues/1837)) ([1e914c9](https://github.com/alimpens/design-system/commit/1e914c9efd9087a0855e3f03661b46f6b228740a))
* Add Action Group component, e.g. to wrap Dialog buttons in ([#1592](https://github.com/alimpens/design-system/issues/1592)) ([d0ea054](https://github.com/alimpens/design-system/commit/d0ea054b98a7f2ee41bd9a8434b76a85e9b8c9f2))
* Add and rename Pagination props, remove use of `aria-label` ([#1366](https://github.com/alimpens/design-system/issues/1366)) ([ce09376](https://github.com/alimpens/design-system/commit/ce09376a745a7414bcf6f22c44a2f480f29cb945))
* Add Avatar component ([#1134](https://github.com/alimpens/design-system/issues/1134)) ([8dec2cf](https://github.com/alimpens/design-system/commit/8dec2cff8f7885ccb163774c0dc979fb2c781256))
* Add background colour and full-height prop to Screen ([#1144](https://github.com/alimpens/design-system/issues/1144)) ([c4621e8](https://github.com/alimpens/design-system/commit/c4621e817cb0306fe109046d41847725d47b33a2))
* Add Breakout component that lets a figure stick out of a Spotlight ([#1397](https://github.com/alimpens/design-system/issues/1397)) ([715f4d6](https://github.com/alimpens/design-system/commit/715f4d6241353b9b9f1f68dad7b7773b9c618492))
* Add collapsible menu to Header ([#1784](https://github.com/alimpens/design-system/issues/1784)) ([44ce6d8](https://github.com/alimpens/design-system/commit/44ce6d8ac5a3fc48fd7de258c48fbafdd9928b9f))
* Add date input ([#1152](https://github.com/alimpens/design-system/issues/1152)) ([afbbef8](https://github.com/alimpens/design-system/commit/afbbef8bb1a3d13fa47638ce2856def0c028b13f))
* Add Description List component ([#1139](https://github.com/alimpens/design-system/issues/1139)) ([ee3428a](https://github.com/alimpens/design-system/commit/ee3428ab701ea3980f26a8562acbecc6e4eb031e))
* Add Error Message ([#1247](https://github.com/alimpens/design-system/issues/1247)) ([1dec2ea](https://github.com/alimpens/design-system/commit/1dec2ead41fba24e4128c2e1d60b72a7ccb29a92))
* Add examples of entire pages to Storybook ([#1234](https://github.com/alimpens/design-system/issues/1234)) ([e5f8d58](https://github.com/alimpens/design-system/commit/e5f8d5820b4aac7e9ed145e3a3dbfd22480304de))
* Add Field component ([#1228](https://github.com/alimpens/design-system/issues/1228)) ([66832aa](https://github.com/alimpens/design-system/commit/66832aaf14a209915b60498acecf90cecff27c23))
* Add Figure component ([#1795](https://github.com/alimpens/design-system/issues/1795)) ([3505dcc](https://github.com/alimpens/design-system/commit/3505dcca183551dce318046f54ad4570cc6e6d2b))
* Add File List component to display below a File Input ([#1751](https://github.com/alimpens/design-system/issues/1751)) ([0192404](https://github.com/alimpens/design-system/commit/01924048c53805eb1536d2aa9b5454bcd44375b8))
* Add focus on initial render to Form Error List ([#1328](https://github.com/alimpens/design-system/issues/1328)) ([09387b7](https://github.com/alimpens/design-system/commit/09387b7b7d5f03a7422910314de4ae4d0ccbb983))
* Add Form Error List ([#1252](https://github.com/alimpens/design-system/issues/1252)) ([e879942](https://github.com/alimpens/design-system/commit/e87994292f62434a1ebff704c909bea4a0feff25))
* Add Form Field Character Counter ([#1114](https://github.com/alimpens/design-system/issues/1114)) ([779ae8c](https://github.com/alimpens/design-system/commit/779ae8c9764b23508ffbfb38c6dc2f7a7c1cbd28))
* Add Hint as component and Label and FieldSet props ([#1499](https://github.com/alimpens/design-system/issues/1499)) ([3d86882](https://github.com/alimpens/design-system/commit/3d86882f22e4629a17a98cbbf96f03ad56620be9))
* Add horizontal and vertical alignment options to Column ([#1428](https://github.com/alimpens/design-system/issues/1428)) ([d5a7766](https://github.com/alimpens/design-system/commit/d5a7766bfd60f62e4a9b69e369bfa08bbd425fa6))
* Add horizontal and vertical alignment options to Row ([#1330](https://github.com/alimpens/design-system/issues/1330)) ([1b9c269](https://github.com/alimpens/design-system/commit/1b9c269f10392d1ab6503e6b047849a586d56502))
* Add Icon to Error Message ([#1746](https://github.com/alimpens/design-system/issues/1746)) ([eca5fe4](https://github.com/alimpens/design-system/commit/eca5fe4ed0325b01860f816c70247c26e2158f9c))
* Add initial Password Input component ([#1449](https://github.com/alimpens/design-system/issues/1449)) ([3cc863e](https://github.com/alimpens/design-system/commit/3cc863ec8f1f2b50f79a426fd41676ab05838768))
* Add invalid prop to Field Set and update Field and Field Set docs ([#1237](https://github.com/alimpens/design-system/issues/1237)) ([d7316e8](https://github.com/alimpens/design-system/commit/d7316e81cd424f79f9bd655265d1c9b41296fecf))
* Add Standalone Link ([#1979](https://github.com/alimpens/design-system/issues/1979)) ([b5d57bb](https://github.com/alimpens/design-system/commit/b5d57bbd34c7817e436f7b28d5dc675213394bfb))
* Add Table of Contents component ([#1248](https://github.com/alimpens/design-system/issues/1248)) ([1f4c09a](https://github.com/alimpens/design-system/commit/1f4c09a08d2aa96d1c584eceb498d33c31aa52ad))
* Add utility functions as methods to Dialog ([#1576](https://github.com/alimpens/design-system/issues/1576)) ([f25bc01](https://github.com/alimpens/design-system/commit/f25bc016f1cea8c81e4b341af515fcad2f00a416))
* Allow a row to wrap its items onto multiple lines ([#1319](https://github.com/alimpens/design-system/issues/1319)) ([42424eb](https://github.com/alimpens/design-system/commit/42424ebb413b9976958883a7b03f5b0d31225c39))
* Allow a specific Tab to be made active ([#1258](https://github.com/alimpens/design-system/issues/1258)) ([9d2f01d](https://github.com/alimpens/design-system/commit/9d2f01d1db3cd2de8cc1364cc8a677b70a50a9f8))
* Allow additional background colours for Avatar and remove dark blue option ([#1257](https://github.com/alimpens/design-system/issues/1257)) ([a1a3c8f](https://github.com/alimpens/design-system/commit/a1a3c8fc58f249f0cd9c7d8bd09cc46f3f48cb5c))
* Allow additional background colours for Badge and remove dark blue option ([#1236](https://github.com/alimpens/design-system/issues/1236)) ([eec669a](https://github.com/alimpens/design-system/commit/eec669ad79353fc205e12a35aa7d0a8297c72e41))
* Allow an icon to display with an inverse color ([#1787](https://github.com/alimpens/design-system/issues/1787)) ([1f5d166](https://github.com/alimpens/design-system/commit/1f5d16697a1b332b6c1bbd830cda1220010a78d6))
* Allow Button to display an icon without a label ([#1654](https://github.com/alimpens/design-system/issues/1654)) ([2d347b6](https://github.com/alimpens/design-system/commit/2d347b654b701cd6cce9182d5b6837960f41b551))
* Allow installing only the React or CSS package ([#1206](https://github.com/alimpens/design-system/issues/1206)) ([963860d](https://github.com/alimpens/design-system/commit/963860d916d54ce3a0b191eb51a83cf3023ab88b))
* Allow overriding button labels in Alert, Dialog, Pagination, and Search Field ([#1220](https://github.com/alimpens/design-system/issues/1220)) ([c88e569](https://github.com/alimpens/design-system/commit/c88e569acd2dd56b37b24ad57e21fc47254d0aaf))
* Allow small text for ordered lists ([#1219](https://github.com/alimpens/design-system/issues/1219)) ([0e77bd6](https://github.com/alimpens/design-system/commit/0e77bd60d8f395417c3c736d8e51a3ca3729ece5))
* Allow small text for unordered lists ([#1217](https://github.com/alimpens/design-system/issues/1217)) ([5012851](https://github.com/alimpens/design-system/commit/5012851492e50e50e2a651250622740e517fd22f))
* Allow specifiying a time in a date input ([#1262](https://github.com/alimpens/design-system/issues/1262)) ([9378432](https://github.com/alimpens/design-system/commit/9378432dc01cf9961eada5bc4e5a0a9573836452))
* Allow various types of text input ([#1259](https://github.com/alimpens/design-system/issues/1259)) ([dc1e5d5](https://github.com/alimpens/design-system/commit/dc1e5d5d0e1f7a1f9baa29581de11a3400d4d9da))
* Apply default gap in Row and Column without extra class ([#1422](https://github.com/alimpens/design-system/issues/1422)) ([3af0b1f](https://github.com/alimpens/design-system/commit/3af0b1fb40ca941fd3966d08e6afe18995e6d02f))
* **Aspect Ratio, Gap, Margin:** Use single dash in utility classes ([#1938](https://github.com/alimpens/design-system/issues/1938)) ([4762cdb](https://github.com/alimpens/design-system/commit/4762cdb05aa66b0afa89da264e84987e1d4b3e16))
* **Avatar:** Remove some colour options and make purple the default ([#1825](https://github.com/alimpens/design-system/issues/1825)) ([52d8c64](https://github.com/alimpens/design-system/commit/52d8c64f653309cce34e222d250f56c7265078e0))
* **Avatar:** Use updated color names for azure, lime and green  ([#1867](https://github.com/alimpens/design-system/issues/1867)) ([e8a2638](https://github.com/alimpens/design-system/commit/e8a2638882b95141c5e5e345bb7656f1f9968253))
* **Badge:** Remove some colour options ([#1826](https://github.com/alimpens/design-system/issues/1826)) ([1325e1b](https://github.com/alimpens/design-system/commit/1325e1b213e4704fd738dada1a92b5362a1a5174))
* **Badge:** Use updated color names for azure and lime ([#1866](https://github.com/alimpens/design-system/issues/1866)) ([fd25778](https://github.com/alimpens/design-system/commit/fd25778db56eeeecf2e716a72d25b91c49193fa1))
* Build separate React components alongside barrel file ([#1930](https://github.com/alimpens/design-system/issues/1930)) ([ca865f2](https://github.com/alimpens/design-system/commit/ca865f2168db8160bfe7df36cb5accdf637f25aa))
* **Card:** Replace gap with margins and introduce subcomponents ([#1972](https://github.com/alimpens/design-system/issues/1972)) ([85e34d4](https://github.com/alimpens/design-system/commit/85e34d4ec3da1589c95925a677e5800fb071dc32))
* Change Accordion `section` boolean prop to `sectionAs` enum ([#1244](https://github.com/alimpens/design-system/issues/1244)) ([fef3fb1](https://github.com/alimpens/design-system/commit/fef3fb1b4d3cb53d2f9d6478225621423d97ad03))
* Change colours for Alert ([#1757](https://github.com/alimpens/design-system/issues/1757)) ([4c03c65](https://github.com/alimpens/design-system/commit/4c03c65933da539af223c73e581bf99274bc86a4))
* Combine contrast and inverse color options into a single prop ([#1822](https://github.com/alimpens/design-system/issues/1822)) ([51640be](https://github.com/alimpens/design-system/commit/51640bed21deee54d5dddcbaa22e2213155cd08a))
* **deps:** Indicate support for React 19 applications ([#1857](https://github.com/alimpens/design-system/issues/1857)) ([b5aa659](https://github.com/alimpens/design-system/commit/b5aa659c4fdcdf24006d0b53400b04c6bebbe66e))
* **Description List:** Rename values for terms column widths ([#1942](https://github.com/alimpens/design-system/issues/1942)) ([e1a9669](https://github.com/alimpens/design-system/commit/e1a9669925927f1608433a4ae68676b925ba8bd2))
* Disallow blue Spotlight and make purple the default ([#1798](https://github.com/alimpens/design-system/issues/1798)) ([8d1c266](https://github.com/alimpens/design-system/commit/8d1c266f3f7e90b02bcb240c41256578a80c7668))
* File Input ([#1218](https://github.com/alimpens/design-system/issues/1218)) ([7b6ba98](https://github.com/alimpens/design-system/commit/7b6ba98530caaefafedada5b89a175ef0b1a8784))
* **Footer:** add FooterMenu component to replace PageMenu in Footer ([#1871](https://github.com/alimpens/design-system/issues/1871)) ([85e0f0f](https://github.com/alimpens/design-system/commit/85e0f0f8c7fd9c281ba68155999e835921e4443d))
* **Footer:** Rename component to Page Footer ([#1971](https://github.com/alimpens/design-system/issues/1971)) ([d0f7edc](https://github.com/alimpens/design-system/commit/d0f7edc1bd3dcbba0973d4494fd6c9e90a158cd2))
* **Grid:** Match values for padding and gap with Space sizes ([#1993](https://github.com/alimpens/design-system/issues/1993)) ([f161152](https://github.com/alimpens/design-system/commit/f161152292f86770ffda0d60c3448f8d20b7b775))
* **Header:** Add responsive version of Amsterdam Logo, remove Heading level 1 ([#1880](https://github.com/alimpens/design-system/issues/1880)) ([7de8138](https://github.com/alimpens/design-system/commit/7de813861a565da89fee246731dc1525bc5d2643))
* **Header:** Rename component to Page Header ([#1970](https://github.com/alimpens/design-system/issues/1970)) ([17172e4](https://github.com/alimpens/design-system/commit/17172e4fd89c630be6eb604d12058214a075a82b))
* Image slider ([#1595](https://github.com/alimpens/design-system/issues/1595)) ([58e7766](https://github.com/alimpens/design-system/commit/58e77661ad99acb5d3f6e10cbfca981345dc8704))
* **internal:** Indicate beta status for some components, patterns, and assets ([#1242](https://github.com/alimpens/design-system/issues/1242)) ([358f40a](https://github.com/alimpens/design-system/commit/358f40a9159eb6da3bf5ca053044143491dda12b))
* Introduce tokens for stack spacing and Row component ([#1113](https://github.com/alimpens/design-system/issues/1113)) ([f5dba78](https://github.com/alimpens/design-system/commit/f5dba78a27610e717b3c10e5babd4ee7059f07f5))
* Let Footer set its own background colour ([#1797](https://github.com/alimpens/design-system/issues/1797)) ([310f595](https://github.com/alimpens/design-system/commit/310f59553a9ad057f3fe80b23bfda5acf108906d))
* Let Form Error List add the error count to the document title ([#1309](https://github.com/alimpens/design-system/issues/1309)) ([f18f03b](https://github.com/alimpens/design-system/commit/f18f03bc3ce582099ec120176ea5c6abe265451e))
* Let Grid and Grid Cell render any structural tag ([#1662](https://github.com/alimpens/design-system/issues/1662)) ([9bbb43a](https://github.com/alimpens/design-system/commit/9bbb43a42963b5985de9f3b9bd3a76531b74f799))
* **Link:** Remove ‘variant’ prop, make inline the default ([#1994](https://github.com/alimpens/design-system/issues/1994)) ([75b07b8](https://github.com/alimpens/design-system/commit/75b07b8bbdc758da26ce0319e2b989d079744065))
* Make active Tab look less like a primary Button ([#1773](https://github.com/alimpens/design-system/issues/1773)) ([2ec0102](https://github.com/alimpens/design-system/commit/2ec010286dd64ecebefa040a0ab18cf192542d0f))
* Make API for icon in button friendlier ([#1700](https://github.com/alimpens/design-system/issues/1700)) ([33c4c0e](https://github.com/alimpens/design-system/commit/33c4c0edefdf9c785bb828b0c61f0a120d697b02))
* Make background of Alert white again ([#1765](https://github.com/alimpens/design-system/issues/1765)) ([2a59067](https://github.com/alimpens/design-system/commit/2a59067d9c10f542f0e3c6f8c4ed7809ab23e4c7))
* Make border of Radio thicker when hovering ([#1696](https://github.com/alimpens/design-system/issues/1696)) ([8839012](https://github.com/alimpens/design-system/commit/88390124aa5197f6c784dae4fc2a7c3e18d75ca6))
* Make terms bold instead of descriptions in Description List ([#1693](https://github.com/alimpens/design-system/issues/1693)) ([cc8f40e](https://github.com/alimpens/design-system/commit/cc8f40e631669a2f3423b7f55b8b129c025efcf9))
* **MegaMenu:** Remove deprecated component ([#1963](https://github.com/alimpens/design-system/issues/1963)) ([d385c83](https://github.com/alimpens/design-system/commit/d385c83d3b6e0a7b7d7c70b5729f33ace19832cf))
* Move alert icon into thick left border ([#1792](https://github.com/alimpens/design-system/issues/1792)) ([ec53af7](https://github.com/alimpens/design-system/commit/ec53af73d05f22f5e077efdf3ce9a73ed4d7e235))
* **Page Menu:** Deprecate Page Menu component ([#1891](https://github.com/alimpens/design-system/issues/1891)) ([71ce759](https://github.com/alimpens/design-system/commit/71ce759f3b32d2c7d80ae2f63f01ed74ae0744d6))
* **Page:** Add Page component ([#1982](https://github.com/alimpens/design-system/issues/1982)) ([813033c](https://github.com/alimpens/design-system/commit/813033c93be66dabccae3ff5f32484487dffc1aa))
* **PageMenu:** Remove deprecated component ([#1964](https://github.com/alimpens/design-system/issues/1964)) ([0149640](https://github.com/alimpens/design-system/commit/0149640ca9d88b45af0223b26cd22680d65b601f))
* **Pagination:** Use links instead of buttons ([#1821](https://github.com/alimpens/design-system/issues/1821)) ([6980251](https://github.com/alimpens/design-system/commit/698025132af2c0b944e9cc99f9754b065127fb68))
* Publish React source code ([#1925](https://github.com/alimpens/design-system/issues/1925)) ([9cf1a4a](https://github.com/alimpens/design-system/commit/9cf1a4a5c55061bd6670b416d35a1bbc5c9cc8ce))
* Remove Beta status from Header and deprecate Mega Menu ([#1814](https://github.com/alimpens/design-system/issues/1814)) ([c91c9d0](https://github.com/alimpens/design-system/commit/c91c9d000967e1d2d40a6f51b8cd48d34aab08cd))
* Remove border from accordion section and move chevron to the left ([#1116](https://github.com/alimpens/design-system/issues/1116)) ([3e23677](https://github.com/alimpens/design-system/commit/3e2367738664dcd0e4d3d4267c021c0992572da7))
* Remove form from Dialog ([#1582](https://github.com/alimpens/design-system/issues/1582)) ([4fb6e53](https://github.com/alimpens/design-system/commit/4fb6e53441f3bae914eb483da2f0537a65273fd2))
* Remove HeadingLevel type, group Heading sizes in story ([#1387](https://github.com/alimpens/design-system/issues/1387)) ([8d05017](https://github.com/alimpens/design-system/commit/8d050178d2a7991ae9bd620d096bfb956d14f9cf))
* Remove unnecessary Dialog wrapper ([#1591](https://github.com/alimpens/design-system/issues/1591)) ([450b0c3](https://github.com/alimpens/design-system/commit/450b0c3e9adf5bdd9fb868400e17aaaea4b2c545))
* Remove Visually Hidden component ([#1391](https://github.com/alimpens/design-system/issues/1391)) ([83a60ca](https://github.com/alimpens/design-system/commit/83a60ca5310704b3348440dd9f1ee8bc1f22811f))
* Rename ‘header logo’ to ‘header logo link’ and add missing token for outline offset ([#1108](https://github.com/alimpens/design-system/issues/1108)) ([f87e834](https://github.com/alimpens/design-system/commit/f87e8345ec900ab08941d5d7ab40f8abd16a569a))
* Rename Breadcrumb Item to Link ([#1232](https://github.com/alimpens/design-system/issues/1232)) ([6cf2e5e](https://github.com/alimpens/design-system/commit/6cf2e5e51217900a24d739c4569c13237b9fb4ab))
* Rename Form Error List to Invalid Form Alert ([#1835](https://github.com/alimpens/design-system/issues/1835)) ([e8d015a](https://github.com/alimpens/design-system/commit/e8d015ae6a1e785a29505c033f29cd67aaab3d66))
* Rename Form Field Character Counter to Character Count ([#1363](https://github.com/alimpens/design-system/issues/1363)) ([a5299db](https://github.com/alimpens/design-system/commit/a5299dbfb3659bada5565893be63f615b511c0ee))
* Rename Form Label to Label ([#1201](https://github.com/alimpens/design-system/issues/1201)) ([c5f82ab](https://github.com/alimpens/design-system/commit/c5f82abcc41ac4652af6c270325441d448d65525))
* Rename title props for Alert, Header and Dialog and require it for Dialog ([#1251](https://github.com/alimpens/design-system/issues/1251)) ([bbec4de](https://github.com/alimpens/design-system/commit/bbec4de523bebb4d8187e713d4d79af228953674))
* Replace ‘on background’ props with ‘inverseColor’ and ‘contrastColor’ for Link, Link List Link, and Icon Button ([#1448](https://github.com/alimpens/design-system/issues/1448)) ([f5176b1](https://github.com/alimpens/design-system/commit/f5176b1e2c85c166fa2b6cb67d11ce0b1f9727a3))
* Replace Aspect Ratio component with utility classes and prop on Image ([#1593](https://github.com/alimpens/design-system/issues/1593)) ([766efba](https://github.com/alimpens/design-system/commit/766efbac45e8831a19f3e99bd9d0550028d8d4fd))
* Replace renamed colours for Avatar, Badge and Spotlight ([#1758](https://github.com/alimpens/design-system/issues/1758)) ([5c8132a](https://github.com/alimpens/design-system/commit/5c8132a9a616d611b7ceee192cecb327e3b45451))
* Require an alt prop for every Image ([#1739](https://github.com/alimpens/design-system/issues/1739)) ([9145dff](https://github.com/alimpens/design-system/commit/9145dffd2a3767f5be19adc2683ba11c50dd9485))
* Restore wrapping of items in Page Menu ([#1145](https://github.com/alimpens/design-system/issues/1145)) ([4068e52](https://github.com/alimpens/design-system/commit/4068e52bee9bba087ef9fd94bcf2a292c4affad9))
* **Screen:** Delete component (use Page instead) ([#2018](https://github.com/alimpens/design-system/issues/2018)) ([0c59f6d](https://github.com/alimpens/design-system/commit/0c59f6dccffa7eda745a3b34554c86b646d514ba))
* Select component ([#1151](https://github.com/alimpens/design-system/issues/1151)) ([7679acc](https://github.com/alimpens/design-system/commit/7679acc7542c2e3d1279b9eaa364031092d16016))
* Set dir auto by default for text input form fields ([#1238](https://github.com/alimpens/design-system/issues/1238)) ([b588d10](https://github.com/alimpens/design-system/commit/b588d104095365bcadff4f34f7db53e247afc873))
* Shorten namespaces in theme and tokens ([#1125](https://github.com/alimpens/design-system/issues/1125)) ([1c81f3b](https://github.com/alimpens/design-system/commit/1c81f3bd14c1f202eec2341aec1888fb74d956d5))
* Shorten size labels in prop values for Row and Column, space tokens and utility classes ([#1940](https://github.com/alimpens/design-system/issues/1940)) ([694987c](https://github.com/alimpens/design-system/commit/694987c88773983e4cd12d518cc957d34ec29d7e))
* Split typography tokens into ‘body text’ and ‘heading’ groups ([#1890](https://github.com/alimpens/design-system/issues/1890)) ([3126aa2](https://github.com/alimpens/design-system/commit/3126aa29d5aebccfca272892d55f140783a94d43))
* **Spotlight:** Use updated color names for lime and green and remove purple as an explicit option ([#1865](https://github.com/alimpens/design-system/issues/1865)) ([387ae45](https://github.com/alimpens/design-system/commit/387ae45ce263ae3b6a12fc9a3b22a37dc0aed997))
* Support various column widths for Description List ([#1697](https://github.com/alimpens/design-system/issues/1697)) ([5a98c07](https://github.com/alimpens/design-system/commit/5a98c07cad19eea38a2ff299378dc4dc5b80018c))
* **Tabs:** Allow preventing Tabs from switching to different panel ([#2027](https://github.com/alimpens/design-system/issues/2027)) ([a7f5313](https://github.com/alimpens/design-system/commit/a7f5313353b23d386be458c39071f3d15182ed59))
* **Tabs:** Change `tab` prop to `id` and `aria-controls` attributes ([#2011](https://github.com/alimpens/design-system/issues/2011)) ([5079ad2](https://github.com/alimpens/design-system/commit/5079ad20b72b75d50bbc3d09c052a27935e6f4cf))
* **Tabs:** Convert `tab` prop to string ([#1923](https://github.com/alimpens/design-system/issues/1923)) ([83823ed](https://github.com/alimpens/design-system/commit/83823edd9cba1fe95afa47eb3b1b1c6fbd1176a1))
* **Tabs:** Emit the id of an activated Tab Panel ([#1854](https://github.com/alimpens/design-system/issues/1854)) ([58a4976](https://github.com/alimpens/design-system/commit/58a497620c2107344db46621288fa0d961bc251f))
* Time input component ([#1202](https://github.com/alimpens/design-system/issues/1202)) ([ccec68e](https://github.com/alimpens/design-system/commit/ccec68efafa02d5f9ac9bd4abea6c5e7cb72d556))
* **Top Task Link:** Remove component ([#1988](https://github.com/alimpens/design-system/issues/1988)) ([6da8a9b](https://github.com/alimpens/design-system/commit/6da8a9bdf47648a3ff0e18f89ed722092d0dad18))
* Update aspect ratio tokens and CSS utility classes ([#1913](https://github.com/alimpens/design-system/issues/1913)) ([968ef2b](https://github.com/alimpens/design-system/commit/968ef2bf053803c356e36424836fd9934da123fd))
* Use inline SVG icon for Radio button ([#1460](https://github.com/alimpens/design-system/issues/1460)) ([c19055b](https://github.com/alimpens/design-system/commit/c19055bd6453ce40ca43b31d599f14ec65d6037a))
* Use invalid prop for most inputs ([#1240](https://github.com/alimpens/design-system/issues/1240)) ([9477186](https://github.com/alimpens/design-system/commit/9477186b8432d6d20991e93d92c64a4357d6f391))
* Use new Button features for SearchField ([#1695](https://github.com/alimpens/design-system/issues/1695)) ([7b275d0](https://github.com/alimpens/design-system/commit/7b275d0c803b309095ba7c425bb6bf04630775a9))


### Bug Fixes

* **Accordion, Tabs:** Only allow keyboard focus on relevant buttons ([#2002](https://github.com/alimpens/design-system/issues/2002)) ([4c7d56a](https://github.com/alimpens/design-system/commit/4c7d56a599ed6def87037403e9fad43f0e5f2693))
* **Avatar:** Override aspect ratio for Image in Avatar ([#1824](https://github.com/alimpens/design-system/issues/1824)) ([3743820](https://github.com/alimpens/design-system/commit/3743820b9fcdb451b1ed259e92eabaa3e8079417))
* Button fixes ([#1122](https://github.com/alimpens/design-system/issues/1122)) ([b5a9504](https://github.com/alimpens/design-system/commit/b5a950491f46710d92526ce6012f7d76992a569f))
* Change CSS classes for Heading level for consistency with token names ([#1355](https://github.com/alimpens/design-system/issues/1355)) ([7c34bbe](https://github.com/alimpens/design-system/commit/7c34bbea69b377b8e5efffd169374d383cddc54b))
* Close Dialog without submit ([#1547](https://github.com/alimpens/design-system/issues/1547)) ([d9cc107](https://github.com/alimpens/design-system/commit/d9cc1079e2f784fd7002b7f785fcfdaa750cb240))
* **Column, Row:** Do not use utility classes ([#1951](https://github.com/alimpens/design-system/issues/1951)) ([a5a74f8](https://github.com/alimpens/design-system/commit/a5a74f8bbb55ab54c7b179be29d4a804b088044a))
* Correct layout of Description List if multiple terms share a description ([#1763](https://github.com/alimpens/design-system/issues/1763)) ([ca913af](https://github.com/alimpens/design-system/commit/ca913afd56aba3a8c2305479df9177bceea09804))
* **deps:** bump @babel/runtime from 7.26.0 to 7.26.7 in the patch-and-minor-dependencies group ([#1849](https://github.com/alimpens/design-system/issues/1849)) ([280cd00](https://github.com/alimpens/design-system/commit/280cd00167331d11433a95218fdbd20cdf02e84c))
* **deps:** bump @babel/runtime from 7.26.10 to 7.27.0 in the patch-and-minor-dependencies group ([#1959](https://github.com/alimpens/design-system/issues/1959)) ([0e12184](https://github.com/alimpens/design-system/commit/0e12184afb91bfbbf45a3eae2969a3a6209c69c7))
* **deps:** bump @babel/runtime from 7.26.7 to 7.26.9 in the patch-and-minor-dependencies group ([#1874](https://github.com/alimpens/design-system/issues/1874)) ([7401046](https://github.com/alimpens/design-system/commit/740104693186797e6e0fd79e3ad14fe47eaef972))
* **deps:** bump @babel/runtime from 7.26.9 to 7.26.10 in the patch-and-minor-dependencies group ([#1926](https://github.com/alimpens/design-system/issues/1926)) ([0830455](https://github.com/alimpens/design-system/commit/08304556ff41bd2413d562972c7617cb5860b8b6))
* **deps:** Bump @babel/runtime from 7.27.0 to 7.27.1 in the patch-and-minor-dependencies group ([#2030](https://github.com/alimpens/design-system/issues/2030)) ([31370d4](https://github.com/alimpens/design-system/commit/31370d4206ce5e878eba1cf7daf5a41bdec9e809))
* Disallow invalid number of columns for narrow and medium Grids ([#1628](https://github.com/alimpens/design-system/issues/1628)) ([7dc0ee8](https://github.com/alimpens/design-system/commit/7dc0ee89f27d77cb3147732b29a083f443bbbd03))
* Don’t render a Description List class for an undefined value ([#1705](https://github.com/alimpens/design-system/issues/1705)) ([63c1fed](https://github.com/alimpens/design-system/commit/63c1fed6beb60a8d42c6dd3fe029ef45c7d150ac))
* Fix autodocs for stories ([#1149](https://github.com/alimpens/design-system/issues/1149)) ([48c9610](https://github.com/alimpens/design-system/commit/48c961023932d673ff815d6e123e61670ed9d1d0))
* **Header:** Only use matchMedia when there is a mega menu ([#1924](https://github.com/alimpens/design-system/issues/1924)) ([7905641](https://github.com/alimpens/design-system/commit/790564156813b0e844d19c39eab91346241ba658))
* **Heading:** Remove ‘level’ from class name ([#1904](https://github.com/alimpens/design-system/issues/1904)) ([71ef1db](https://github.com/alimpens/design-system/commit/71ef1db68405455087065e73dadf90581173398d))
* **IconButton, ImageSlider, Tabs:** Add missing type attribute to HTML buttons ([#1934](https://github.com/alimpens/design-system/issues/1934)) ([645415c](https://github.com/alimpens/design-system/commit/645415c5682142d3e372d663bc65e0881a96ebb0))
* **Image:** Remove children prop ([#1996](https://github.com/alimpens/design-system/issues/1996)) ([840dadb](https://github.com/alimpens/design-system/commit/840dadb8c93d157f23bca8a1e3683aa94f98db96))
* Improve subcomponent types ([#1130](https://github.com/alimpens/design-system/issues/1130)) ([827ac4e](https://github.com/alimpens/design-system/commit/827ac4e1197730fb0c69de197347cd4be3a77ebf))
* Include ‘gap-’ in class names for Row and Column gap ([#1421](https://github.com/alimpens/design-system/issues/1421)) ([21cfcbf](https://github.com/alimpens/design-system/commit/21cfcbfc80b8fd3dac797428ee42a52447a9b9de))
* Make Tabs correctly handle a single Tab Button ([#1775](https://github.com/alimpens/design-system/issues/1775)) ([f8e89c1](https://github.com/alimpens/design-system/commit/f8e89c1163a3d344f295921ccdae0c7dcca1e329))
* Move @babel/runtime dev dependency to regular dependencies ([#1204](https://github.com/alimpens/design-system/issues/1204)) ([5603c08](https://github.com/alimpens/design-system/commit/5603c0863d1612aa7c3793209ddd37fa0222666d))
* **PageHeader:** Remove restprops from menu button ([#2003](https://github.com/alimpens/design-system/issues/2003)) ([ec28ace](https://github.com/alimpens/design-system/commit/ec28acef4663f7cbe722217cb297e8d1c541a722))
* Polymorphic component typing ([#1140](https://github.com/alimpens/design-system/issues/1140)) ([291c8f1](https://github.com/alimpens/design-system/commit/291c8f1711287542a98d7780372b55349eaa6683))
* Remove `password` from Text Input types ([#1300](https://github.com/alimpens/design-system/issues/1300)) ([c5b75e0](https://github.com/alimpens/design-system/commit/c5b75e04fded8b9b4caf2d3403c49daa2bc4e08d))
* Remove lodash ([#1667](https://github.com/alimpens/design-system/issues/1667)) ([9db04cf](https://github.com/alimpens/design-system/commit/9db04cfe91d7cbabe796299254888c88fbcb0b56))
* Rename Description List ‘details’ to ’description’ ([#1703](https://github.com/alimpens/design-system/issues/1703)) ([139d8cb](https://github.com/alimpens/design-system/commit/139d8cb5c8fc4ffc93a2283abeabda6b8364b7cc))
* Resolve warnings against missing array keys in Button ([#1736](https://github.com/alimpens/design-system/issues/1736)) ([c60c897](https://github.com/alimpens/design-system/commit/c60c897655870da33e4dc8ba290d6563604f7f69))
* **Tabs:** Do not change active tab when using arrow keys in panel ([#1936](https://github.com/alimpens/design-system/issues/1936)) ([82bed7a](https://github.com/alimpens/design-system/commit/82bed7a3c14bb7f7f7654782c41e3a96a8e7c828))
* **Tabs:** Do not lose active tab state after rerender ([#2025](https://github.com/alimpens/design-system/issues/2025)) ([01fbaf6](https://github.com/alimpens/design-system/commit/01fbaf6876771d5606669b432540446b0033e15c))
* **Tabs:** Execute click handler on Button ([#1847](https://github.com/alimpens/design-system/issues/1847)) ([d91ef67](https://github.com/alimpens/design-system/commit/d91ef67417424be3642ea1eca92a5210b7601515))
* **Tabs:** Remove role attribute with invalid value ([#1838](https://github.com/alimpens/design-system/issues/1838)) ([3872670](https://github.com/alimpens/design-system/commit/387267084d1a9209780397c701fde06a82512b7e))
* **Tabs:** Rename onChange to onTabChange ([#1908](https://github.com/alimpens/design-system/issues/1908)) ([2deb358](https://github.com/alimpens/design-system/commit/2deb358b2becf858fe02d6e34a5721fe4184f8a2))
* Use correct text size in Text Input, Search Field, and Text Area ([#1150](https://github.com/alimpens/design-system/issues/1150)) ([d5462e4](https://github.com/alimpens/design-system/commit/d5462e4537cfb39d62d0cd31564cfff086238330))
* Use semantic Heading for the title of a Dialog ([#1123](https://github.com/alimpens/design-system/issues/1123)) ([0493fd8](https://github.com/alimpens/design-system/commit/0493fd87587d36a83bb7aa9cbb69b8debf5d66f0))
* Use visually hidden as utility class only ([#1269](https://github.com/alimpens/design-system/issues/1269)) ([d21296f](https://github.com/alimpens/design-system/commit/d21296f4c681bda553c2d243f2d71742dab72822))
* Use VisuallyHidden instead of aria-label for screen reader only text in Top task link ([#1115](https://github.com/alimpens/design-system/issues/1115)) ([4281fa1](https://github.com/alimpens/design-system/commit/4281fa188a0b61bd59611fa0d65fa7657c54c361))

## [0.16.0](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.15.0...design-system-react-v0.16.0) (2025-04-25)


### ⚠ BREAKING CHANGES

* **Screen:** Delete component (use Page instead) ([#2018](https://github.com/Amsterdam/design-system/issues/2018))
* **Tabs:** Change `tab` prop to `id` and `aria-controls` attributes ([#2011](https://github.com/Amsterdam/design-system/issues/2011))
* **Grid:** Match values for padding and gap with Space sizes ([#1993](https://github.com/Amsterdam/design-system/issues/1993))
* **Link:** Remove ‘variant’ prop, make inline the default ([#1994](https://github.com/Amsterdam/design-system/issues/1994))
* **Image:** Remove children prop ([#1996](https://github.com/Amsterdam/design-system/issues/1996))
* **Top Task Link:** Remove component ([#1988](https://github.com/Amsterdam/design-system/issues/1988))
* **Footer:** Rename component to Page Footer ([#1971](https://github.com/Amsterdam/design-system/issues/1971))
* **Header:** Rename component to Page Header ([#1970](https://github.com/Amsterdam/design-system/issues/1970))
* **MegaMenu:** Remove deprecated component ([#1963](https://github.com/Amsterdam/design-system/issues/1963))
* **PageMenu:** Remove deprecated component ([#1964](https://github.com/Amsterdam/design-system/issues/1964))

### Features

* Add Standalone Link ([#1979](https://github.com/Amsterdam/design-system/issues/1979)) ([b5d57bb](https://github.com/Amsterdam/design-system/commit/b5d57bbd34c7817e436f7b28d5dc675213394bfb))
* **Card:** Replace gap with margins and introduce subcomponents ([#1972](https://github.com/Amsterdam/design-system/issues/1972)) ([85e34d4](https://github.com/Amsterdam/design-system/commit/85e34d4ec3da1589c95925a677e5800fb071dc32))
* **Footer:** Rename component to Page Footer ([#1971](https://github.com/Amsterdam/design-system/issues/1971)) ([d0f7edc](https://github.com/Amsterdam/design-system/commit/d0f7edc1bd3dcbba0973d4494fd6c9e90a158cd2))
* **Grid:** Match values for padding and gap with Space sizes ([#1993](https://github.com/Amsterdam/design-system/issues/1993)) ([f161152](https://github.com/Amsterdam/design-system/commit/f161152292f86770ffda0d60c3448f8d20b7b775))
* **Header:** Rename component to Page Header ([#1970](https://github.com/Amsterdam/design-system/issues/1970)) ([17172e4](https://github.com/Amsterdam/design-system/commit/17172e4fd89c630be6eb604d12058214a075a82b))
* **Link:** Remove ‘variant’ prop, make inline the default ([#1994](https://github.com/Amsterdam/design-system/issues/1994)) ([75b07b8](https://github.com/Amsterdam/design-system/commit/75b07b8bbdc758da26ce0319e2b989d079744065))
* **MegaMenu:** Remove deprecated component ([#1963](https://github.com/Amsterdam/design-system/issues/1963)) ([d385c83](https://github.com/Amsterdam/design-system/commit/d385c83d3b6e0a7b7d7c70b5729f33ace19832cf))
* **Page:** Add Page component ([#1982](https://github.com/Amsterdam/design-system/issues/1982)) ([813033c](https://github.com/Amsterdam/design-system/commit/813033c93be66dabccae3ff5f32484487dffc1aa))
* **PageMenu:** Remove deprecated component ([#1964](https://github.com/Amsterdam/design-system/issues/1964)) ([0149640](https://github.com/Amsterdam/design-system/commit/0149640ca9d88b45af0223b26cd22680d65b601f))
* **Screen:** Delete component (use Page instead) ([#2018](https://github.com/Amsterdam/design-system/issues/2018)) ([0c59f6d](https://github.com/Amsterdam/design-system/commit/0c59f6dccffa7eda745a3b34554c86b646d514ba))
* **Tabs:** Change `tab` prop to `id` and `aria-controls` attributes ([#2011](https://github.com/Amsterdam/design-system/issues/2011)) ([5079ad2](https://github.com/Amsterdam/design-system/commit/5079ad20b72b75d50bbc3d09c052a27935e6f4cf))
* **Top Task Link:** Remove component ([#1988](https://github.com/Amsterdam/design-system/issues/1988)) ([6da8a9b](https://github.com/Amsterdam/design-system/commit/6da8a9bdf47648a3ff0e18f89ed722092d0dad18))


### Bug Fixes

* **Accordion, Tabs:** Only allow keyboard focus on relevant buttons ([#2002](https://github.com/Amsterdam/design-system/issues/2002)) ([4c7d56a](https://github.com/Amsterdam/design-system/commit/4c7d56a599ed6def87037403e9fad43f0e5f2693))
* **deps:** bump @babel/runtime from 7.26.10 to 7.27.0 in the patch-and-minor-dependencies group ([#1959](https://github.com/Amsterdam/design-system/issues/1959)) ([0e12184](https://github.com/Amsterdam/design-system/commit/0e12184afb91bfbbf45a3eae2969a3a6209c69c7))
* **IconButton, ImageSlider, Tabs:** Add missing type attribute to HTML buttons ([#1934](https://github.com/Amsterdam/design-system/issues/1934)) ([645415c](https://github.com/Amsterdam/design-system/commit/645415c5682142d3e372d663bc65e0881a96ebb0))
* **Image:** Remove children prop ([#1996](https://github.com/Amsterdam/design-system/issues/1996)) ([840dadb](https://github.com/Amsterdam/design-system/commit/840dadb8c93d157f23bca8a1e3683aa94f98db96))
* **PageHeader:** Remove restprops from menu button ([#2003](https://github.com/Amsterdam/design-system/issues/2003)) ([ec28ace](https://github.com/Amsterdam/design-system/commit/ec28acef4663f7cbe722217cb297e8d1c541a722))

## [0.15.0](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.14.1...design-system-react-v0.15.0) (2025-03-28)


### ⚠ BREAKING CHANGES

* Shorten size labels in prop values for Row and Column, space tokens and utility classes ([#1940](https://github.com/Amsterdam/design-system/issues/1940))
* **Description List:** Rename values for terms column widths ([#1942](https://github.com/Amsterdam/design-system/issues/1942))
* **Tabs:** Convert `tab` prop to string ([#1923](https://github.com/Amsterdam/design-system/issues/1923))
* Update aspect ratio tokens and CSS utility classes ([#1913](https://github.com/Amsterdam/design-system/issues/1913))
* **Tabs:** Rename onChange to onTabChange ([#1908](https://github.com/Amsterdam/design-system/issues/1908))
* **Icon:** Rename values for size prop ([#1890](https://github.com/Amsterdam/design-system/issues/1890))
* **Footer:** add FooterMenu component to replace PageMenu in Footer ([#1871](https://github.com/Amsterdam/design-system/issues/1871))
* **Avatar:** Use updated color names for azure, lime and green  ([#1867](https://github.com/Amsterdam/design-system/issues/1867))
* **Badge:** Use updated color names for azure and lime ([#1866](https://github.com/Amsterdam/design-system/issues/1866))
* **Spotlight:** Use updated color names for lime and green and remove purple as an explicit option ([#1865](https://github.com/Amsterdam/design-system/issues/1865))

### Features

* **Aspect Ratio, Gap, Margin:** Use single dash in utility classes ([#1938](https://github.com/Amsterdam/design-system/issues/1938)) ([4762cdb](https://github.com/Amsterdam/design-system/commit/4762cdb05aa66b0afa89da264e84987e1d4b3e16))
* **Avatar:** Use updated color names for azure, lime and green  ([#1867](https://github.com/Amsterdam/design-system/issues/1867)) ([e8a2638](https://github.com/Amsterdam/design-system/commit/e8a2638882b95141c5e5e345bb7656f1f9968253))
* **Badge:** Use updated color names for azure and lime ([#1866](https://github.com/Amsterdam/design-system/issues/1866)) ([fd25778](https://github.com/Amsterdam/design-system/commit/fd25778db56eeeecf2e716a72d25b91c49193fa1))
* Build separate React components alongside barrel file ([#1930](https://github.com/Amsterdam/design-system/issues/1930)) ([ca865f2](https://github.com/Amsterdam/design-system/commit/ca865f2168db8160bfe7df36cb5accdf637f25aa))
* **deps:** Indicate support for React 19 applications ([#1857](https://github.com/Amsterdam/design-system/issues/1857)) ([b5aa659](https://github.com/Amsterdam/design-system/commit/b5aa659c4fdcdf24006d0b53400b04c6bebbe66e))
* **Description List:** Rename values for terms column widths ([#1942](https://github.com/Amsterdam/design-system/issues/1942)) ([e1a9669](https://github.com/Amsterdam/design-system/commit/e1a9669925927f1608433a4ae68676b925ba8bd2))
* **Footer:** add FooterMenu component to replace PageMenu in Footer ([#1871](https://github.com/Amsterdam/design-system/issues/1871)) ([85e0f0f](https://github.com/Amsterdam/design-system/commit/85e0f0f8c7fd9c281ba68155999e835921e4443d))
* **Header:** Add responsive version of Amsterdam Logo, remove Heading level 1 ([#1880](https://github.com/Amsterdam/design-system/issues/1880)) ([7de8138](https://github.com/Amsterdam/design-system/commit/7de813861a565da89fee246731dc1525bc5d2643))
* **Page Menu:** Deprecate Page Menu component ([#1891](https://github.com/Amsterdam/design-system/issues/1891)) ([71ce759](https://github.com/Amsterdam/design-system/commit/71ce759f3b32d2c7d80ae2f63f01ed74ae0744d6))
* Publish React source code ([#1925](https://github.com/Amsterdam/design-system/issues/1925)) ([9cf1a4a](https://github.com/Amsterdam/design-system/commit/9cf1a4a5c55061bd6670b416d35a1bbc5c9cc8ce))
* Shorten size labels in prop values for Row and Column, space tokens and utility classes ([#1940](https://github.com/Amsterdam/design-system/issues/1940)) ([694987c](https://github.com/Amsterdam/design-system/commit/694987c88773983e4cd12d518cc957d34ec29d7e))
* Split typography tokens into ‘body text’ and ‘heading’ groups ([#1890](https://github.com/Amsterdam/design-system/issues/1890)) ([3126aa2](https://github.com/Amsterdam/design-system/commit/3126aa29d5aebccfca272892d55f140783a94d43))
* **Spotlight:** Use updated color names for lime and green and remove purple as an explicit option ([#1865](https://github.com/Amsterdam/design-system/issues/1865)) ([387ae45](https://github.com/Amsterdam/design-system/commit/387ae45ce263ae3b6a12fc9a3b22a37dc0aed997))
* **Tabs:** Convert `tab` prop to string ([#1923](https://github.com/Amsterdam/design-system/issues/1923)) ([83823ed](https://github.com/Amsterdam/design-system/commit/83823edd9cba1fe95afa47eb3b1b1c6fbd1176a1))
* Update aspect ratio tokens and CSS utility classes ([#1913](https://github.com/Amsterdam/design-system/issues/1913)) ([968ef2b](https://github.com/Amsterdam/design-system/commit/968ef2bf053803c356e36424836fd9934da123fd))


### Bug Fixes

* **Column, Row:** Do not use utility classes ([#1951](https://github.com/Amsterdam/design-system/issues/1951)) ([a5a74f8](https://github.com/Amsterdam/design-system/commit/a5a74f8bbb55ab54c7b179be29d4a804b088044a))
* **deps:** bump @babel/runtime from 7.26.7 to 7.26.9 in the patch-and-minor-dependencies group ([#1874](https://github.com/Amsterdam/design-system/issues/1874)) ([7401046](https://github.com/Amsterdam/design-system/commit/740104693186797e6e0fd79e3ad14fe47eaef972))
* **deps:** bump @babel/runtime from 7.26.9 to 7.26.10 in the patch-and-minor-dependencies group ([#1926](https://github.com/Amsterdam/design-system/issues/1926)) ([0830455](https://github.com/Amsterdam/design-system/commit/08304556ff41bd2413d562972c7617cb5860b8b6))
* **Header:** Only use matchMedia when there is a mega menu ([#1924](https://github.com/Amsterdam/design-system/issues/1924)) ([7905641](https://github.com/Amsterdam/design-system/commit/790564156813b0e844d19c39eab91346241ba658))
* **Heading:** Remove ‘level’ from class name ([#1904](https://github.com/Amsterdam/design-system/issues/1904)) ([71ef1db](https://github.com/Amsterdam/design-system/commit/71ef1db68405455087065e73dadf90581173398d))
* **Tabs:** Do not change active tab when using arrow keys in panel ([#1936](https://github.com/Amsterdam/design-system/issues/1936)) ([82bed7a](https://github.com/Amsterdam/design-system/commit/82bed7a3c14bb7f7f7654782c41e3a96a8e7c828))
* **Tabs:** Rename onChange to onTabChange ([#1908](https://github.com/Amsterdam/design-system/issues/1908)) ([2deb358](https://github.com/Amsterdam/design-system/commit/2deb358b2becf858fe02d6e34a5721fe4184f8a2))

## [0.14.1](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.14.0...design-system-react-v0.14.1) (2025-02-12)


### Features

* **Tabs:** Emit the id of an activated Tab Panel ([#1854](https://github.com/Amsterdam/design-system/issues/1854)) ([58a4976](https://github.com/Amsterdam/design-system/commit/58a497620c2107344db46621288fa0d961bc251f))


### Bug Fixes

* **Tabs:** Execute click handler on Button ([#1847](https://github.com/Amsterdam/design-system/issues/1847)) ([d91ef67](https://github.com/Amsterdam/design-system/commit/d91ef67417424be3642ea1eca92a5210b7601515))

## [0.14.0](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.13.1...design-system-react-v0.14.0) (2025-01-10)

### ⚠ BREAKING CHANGES

* Add collapsible menu to Header ([#1784](https://github.com/Amsterdam/design-system/issues/1784))
* Require an alt prop for every Image ([#1739](https://github.com/Amsterdam/design-system/issues/1739))
* Replace Aspect Ratio component with utility classes and prop on Image ([#1593](https://github.com/Amsterdam/design-system/issues/1593))
* Use new Button features for SearchField ([#1695](https://github.com/Amsterdam/design-system/issues/1695))

### Features

* Add collapsible menu to Header ([#1784](https://github.com/Amsterdam/design-system/issues/1784)) ([44ce6d8](https://github.com/Amsterdam/design-system/commit/44ce6d8ac5a3fc48fd7de258c48fbafdd9928b9f))
* Add Figure component ([#1795](https://github.com/Amsterdam/design-system/issues/1795)) ([3505dcc](https://github.com/Amsterdam/design-system/commit/3505dcca183551dce318046f54ad4570cc6e6d2b))
* Add File List component to display below a File Input ([#1751](https://github.com/Amsterdam/design-system/issues/1751)) ([0192404](https://github.com/Amsterdam/design-system/commit/01924048c53805eb1536d2aa9b5454bcd44375b8))
* Add Icon to Error Message ([#1746](https://github.com/Amsterdam/design-system/issues/1746)) ([eca5fe4](https://github.com/Amsterdam/design-system/commit/eca5fe4ed0325b01860f816c70247c26e2158f9c))
* Allow an icon to display with an inverse color ([#1787](https://github.com/Amsterdam/design-system/issues/1787)) ([1f5d166](https://github.com/Amsterdam/design-system/commit/1f5d16697a1b332b6c1bbd830cda1220010a78d6))
* Disallow blue Spotlight and make purple the default ([#1798](https://github.com/Amsterdam/design-system/issues/1798)) ([8d1c266](https://github.com/Amsterdam/design-system/commit/8d1c266f3f7e90b02bcb240c41256578a80c7668))
* Let Footer set its own background colour ([#1797](https://github.com/Amsterdam/design-system/issues/1797)) ([310f595](https://github.com/Amsterdam/design-system/commit/310f59553a9ad057f3fe80b23bfda5acf108906d))
* Let Grid and Grid Cell render any structural tag ([#1662](https://github.com/Amsterdam/design-system/issues/1662)) ([9bbb43a](https://github.com/Amsterdam/design-system/commit/9bbb43a42963b5985de9f3b9bd3a76531b74f799))
* Make active Tab look less like a primary Button ([#1773](https://github.com/Amsterdam/design-system/issues/1773)) ([2ec0102](https://github.com/Amsterdam/design-system/commit/2ec010286dd64ecebefa040a0ab18cf192542d0f))
* Make border of Radio thicker when hovering ([#1696](https://github.com/Amsterdam/design-system/issues/1696)) ([8839012](https://github.com/Amsterdam/design-system/commit/88390124aa5197f6c784dae4fc2a7c3e18d75ca6))
* Replace Aspect Ratio component with utility classes and prop on Image ([#1593](https://github.com/Amsterdam/design-system/issues/1593)) ([766efba](https://github.com/Amsterdam/design-system/commit/766efbac45e8831a19f3e99bd9d0550028d8d4fd))
* Require an alt prop for every Image ([#1739](https://github.com/Amsterdam/design-system/issues/1739)) ([9145dff](https://github.com/Amsterdam/design-system/commit/9145dffd2a3767f5be19adc2683ba11c50dd9485))
* Use new Button features for SearchField ([#1695](https://github.com/Amsterdam/design-system/issues/1695)) ([7b275d0](https://github.com/Amsterdam/design-system/commit/7b275d0c803b309095ba7c425bb6bf04630775a9))

### Bug Fixes

* Correct layout of Description List if multiple terms share a description ([#1763](https://github.com/Amsterdam/design-system/issues/1763)) ([ca913af](https://github.com/Amsterdam/design-system/commit/ca913afd56aba3a8c2305479df9177bceea09804))
* Make Tabs correctly handle a single Tab Button ([#1775](https://github.com/Amsterdam/design-system/issues/1775)) ([f8e89c1](https://github.com/Amsterdam/design-system/commit/f8e89c1163a3d344f295921ccdae0c7dcca1e329))

## [0.13.1](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.13.0...design-system-react-v0.13.1) (2024-11-04)

### Bug Fixes

* Resolve warnings against missing array keys in Button ([#1736](https://github.com/Amsterdam/design-system/issues/1736)) ([c60c897](https://github.com/Amsterdam/design-system/commit/c60c897655870da33e4dc8ba290d6563604f7f69))

## [0.13.0](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.12.0...design-system-react-v0.13.0) (2024-10-28)

### ⚠ BREAKING CHANGES

* Rename Description List ‘details’ to ’description’ ([#1703](https://github.com/Amsterdam/design-system/issues/1703))

### Bug Fixes

* Don’t render a Description List class for an undefined value ([#1705](https://github.com/Amsterdam/design-system/issues/1705)) ([63c1fed](https://github.com/Amsterdam/design-system/commit/63c1fed6beb60a8d42c6dd3fe029ef45c7d150ac))
* Rename Description List ‘details’ to ’description’ ([#1703](https://github.com/Amsterdam/design-system/issues/1703)) ([139d8cb](https://github.com/Amsterdam/design-system/commit/139d8cb5c8fc4ffc93a2283abeabda6b8364b7cc))

## [0.12.0](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.11.1...design-system-react-v0.12.0) (2024-10-25)

### ⚠ BREAKING CHANGES

* Remove form from Dialog ([#1582](https://github.com/Amsterdam/design-system/issues/1582))
* Replace ‘on background’ props with ‘inverseColor’ and ‘contrastColor’ for Link, Link List Link, and Icon Button ([#1448](https://github.com/Amsterdam/design-system/issues/1448))
* Add and rename Pagination props, remove use of aria-label
 ([#1366](https://github.com/Amsterdam/design-system/issues/1366))

### Features

* Add Action Group component, e.g. to wrap Dialog buttons in ([#1592](https://github.com/Amsterdam/design-system/issues/1592)) ([d0ea054](https://github.com/Amsterdam/design-system/commit/d0ea054b98a7f2ee41bd9a8434b76a85e9b8c9f2))
* Add and rename Pagination props, remove use of aria-label
 ([#1366](https://github.com/Amsterdam/design-system/issues/1366)) ([ce0937](https://github.com/Amsterdam/design-system/commit/ce09376a745a7414bcf6f22c44a2f480f29cb945))
* Add Breakout component that lets a figure stick out of a Spotlight ([#1397](https://github.com/Amsterdam/design-system/issues/1397)) ([715f4d6](<https://github.com/>
Amsterdam/design-system/commit/715f4d6241353b9b9f1f68dad7b7773b9c618492))
* Add Hint as component and Label and FieldSet props ([#1499](https://github.com/Amsterdam/design-system/issues/1499)) ([3d86882](https://github.com/Amsterdam/design-system/commit/3d86882f22e4629a17a98cbbf96f03ad56620be9))
* Add initial Password Input component ([#1449](https://github.com/Amsterdam/design-system/issues/1449)) ([3cc863](https://github.com/Amsterdam/design-system/commit/3cc863ec8f1f2b50f79a426fd41676ab05838768))
* Add utility functions as methods to Dialog ([#1576](https://github.com/Amsterdam/design-system/issues/1576)) ([f25bc01](https://github.com/Amsterdam/design-system/commit/f25bc016f1cea8c81e4b341af515fcad2f00a416))
* Allow Button to display an icon without a label ([#1654](https://github.com/Amsterdam/design-system/issues/1654), [#1700](https://github.com/Amsterdam/design-system/issues/1700)) ([2d347b6](https://github.com/Amsterdam/design-system/commit/2d347b654b701cd6cce9182d5b6837960f41b551), [33c4c0e](https://github.com/Amsterdam/design-system/commit/33c4c0edefdf9c785bb828b0c61f0a120d697b02))
* Image slider ([#1595](https://github.com/Amsterdam/design-system/issues/1595)) ([58e7766](https://github.com/Amsterdam/design-system/commit/58e77661ad99acb5d3f6e10cbfca981345dc8704))
* Make terms bold instead of descriptions in Description List ([#1693](https://github.com/Amsterdam/design-system/issues/1693)) ([cc8f40e](https://github.com/Amsterdam/design-system/commit/cc8f40e631669a2f3423b7f55b8b129c025efcf9))
* Replace ‘on background’ props with ‘inverseColor’ and ‘contrastColor’ for Link, Link List Link, and Icon Button ([#1448](https://github.com/Amsterdam/design-system/issues/1448)) ([f5176b1](https://github.com/Amsterdam/design-system/commit/f5176b1e2c85c166fa2b6cb67d11ce0b1f9727a3))
* Remove form from Dialog ([#1582](https://github.com/Amsterdam/design-system/issues/1582)) ([4fb6e53](https://github.com/Amsterdam/design-system/commit/4fb6e53441f3bae914eb483da2f0537a65273fd2))
* Remove unnecessary Dialog wrapper ([#1591](https://github.com/Amsterdam/design-system/issues/1591)) ([450b0c3](https://github.com/Amsterdam/design-system/commit/450b0c3e9adf5bdd9fb868400e17aaaea4b2c545))
* Support various column widths for Description List ([#1697](https://github.com/Amsterdam/design-system/issues/1697)) ([5a98c07](https://github.com/Amsterdam/design-system/commit/5a98c07cad19eea38a2ff299378dc4dc5b80018c))
* Use inline SVG icon for Radio button ([#1460](https://github.com/Amsterdam/design-system/issues/1460)) ([c19055b](https://github.com/Amsterdam/design-system/commit/c19055bd6453ce40ca43b31d599f14ec65d6037a))

### Bug Fixes

* Disallow invalid number of columns for narrow and medium Grids ([#1628](https://github.com/Amsterdam/design-system/issues/1628)) ([7dc0ee8](https://github.com/Amsterdam/design-system/commit/7dc0ee89f27d77cb3147732b29a083f443bbbd03))
* Remove lodash ([#1667](https://github.com/Amsterdam/design-system/issues/1667)) ([9db04cf](https://github.com/Amsterdam/design-system/commit/9db04cfe91d7cbabe796299254888c88fbcb0b56))

## [0.11.1](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.11.0...design-system-react-v0.11.1) (2024-08-29)

### Bug Fixes

* Close Dialog without submit ([#1547](https://github.com/Amsterdam/design-system/issues/1547)) ([d9cc107](https://github.com/Amsterdam/design-system/commit/d9cc1079e2f784fd7002b7f785fcfdaa750cb240))

## [0.11.0](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.10.0...design-system-react-v0.11.0) (2024-07-25)

### ⚠ BREAKING CHANGES

* Remove Visually Hidden component ([#1391](https://github.com/Amsterdam/design-system/issues/1391))
* Remove HeadingLevel type, group Heading sizes in story ([#1387](https://github.com/Amsterdam/design-system/issues/1387))
* Apply default gap in Row and Column without extra class ([#1422](https://github.com/Amsterdam/design-system/issues/1422))
* Rename Form Field Character Counter to Character Count ([#1363](https://github.com/Amsterdam/design-system/issues/1363))

### Features

* Add focus on initial render to Form Error List ([#1328](https://github.com/Amsterdam/design-system/issues/1328)) ([09387b7](https://github.com/Amsterdam/design-system/commit/09387b7b7d5f03a7422910314de4ae4d0ccbb983))
* Add horizontal and vertical alignment options to Column ([#1428](https://github.com/Amsterdam/design-system/issues/1428)) ([d5a7766](https://github.com/Amsterdam/design-system/commit/d5a7766bfd60f62e4a9b69e369bfa08bbd425fa6))
* Add horizontal and vertical alignment options to Row ([#1330](https://github.com/Amsterdam/design-system/issues/1330)) ([1b9c269](https://github.com/Amsterdam/design-system/commit/1b9c269f10392d1ab6503e6b047849a586d56502))
* Allow a row to wrap its items onto multiple lines ([#1319](https://github.com/Amsterdam/design-system/issues/1319)) ([42424eb](https://github.com/Amsterdam/design-system/commit/42424ebb413b9976958883a7b03f5b0d31225c39))
* Apply default gap in Row and Column without extra class ([#1422](https://github.com/Amsterdam/design-system/issues/1422)) ([3af0b1f](https://github.com/Amsterdam/design-system/commit/3af0b1fb40ca941fd3966d08e6afe18995e6d02f))
* Let Form Error List add the error count to the document title ([#1309](https://github.com/Amsterdam/design-system/issues/1309)) ([f18f03b](https://github.com/Amsterdam/design-system/commit/f18f03bc3ce582099ec120176ea5c6abe265451e))
* Remove HeadingLevel type, group Heading sizes in story ([#1387](https://github.com/Amsterdam/design-system/issues/1387)) ([8d05017](https://github.com/Amsterdam/design-system/commit/8d050178d2a7991ae9bd620d096bfb956d14f9cf))
* Remove Visually Hidden component ([#1391](https://github.com/Amsterdam/design-system/issues/1391)) ([83a60ca](https://github.com/Amsterdam/design-system/commit/83a60ca5310704b3348440dd9f1ee8bc1f22811f))
* Rename Form Field Character Counter to Character Count ([#1363](https://github.com/Amsterdam/design-system/issues/1363)) ([a5299db](https://github.com/Amsterdam/design-system/commit/a5299dbfb3659bada5565893be63f615b511c0ee))

### Bug Fixes

* Change CSS classes for Heading level for consistency with token names ([#1355](https://github.com/Amsterdam/design-system/issues/1355)) ([7c34bbe](https://github.com/Amsterdam/design-system/commit/7c34bbea69b377b8e5efffd169374d383cddc54b))
* Include ‘gap-’ in class names for Row and Column gap ([#1421](https://github.com/Amsterdam/design-system/issues/1421)) ([21cfcbf](https://github.com/Amsterdam/design-system/commit/21cfcbfc80b8fd3dac797428ee42a52447a9b9de))

## [0.10.0](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.9.0...design-system-react-v0.10.0) (2024-06-28)

### ⚠ BREAKING CHANGES

* Allow additional background colours for Avatar and remove dark blue option ([#1257](https://github.com/Amsterdam/design-system/issues/1257))
* Rename title props for Alert, Header and Dialog and require it for Dialog ([#1251](https://github.com/Amsterdam/design-system/issues/1251))

### Features

* Add examples of entire pages to Storybook ([#1234](https://github.com/Amsterdam/design-system/issues/1234)) ([e5f8d58](https://github.com/Amsterdam/design-system/commit/e5f8d5820b4aac7e9ed145e3a3dbfd22480304de))
* Add Form Error List ([#1252](https://github.com/Amsterdam/design-system/issues/1252)) ([e879942](https://github.com/Amsterdam/design-system/commit/e87994292f62434a1ebff704c909bea4a0feff25))
* Add Table of Contents component ([#1248](https://github.com/Amsterdam/design-system/issues/1248)) ([1f4c09a](https://github.com/Amsterdam/design-system/commit/1f4c09a08d2aa96d1c584eceb498d33c31aa52ad))
* Allow a specific Tab to be made active ([#1258](https://github.com/Amsterdam/design-system/issues/1258)) ([9d2f01d](https://github.com/Amsterdam/design-system/commit/9d2f01d1db3cd2de8cc1364cc8a677b70a50a9f8))
* Allow additional background colours for Avatar and remove dark blue option ([#1257](https://github.com/Amsterdam/design-system/issues/1257)) ([a1a3c8f](https://github.com/Amsterdam/design-system/commit/a1a3c8fc58f249f0cd9c7d8bd09cc46f3f48cb5c))
* Allow specifiying a time in a date input ([#1262](https://github.com/Amsterdam/design-system/issues/1262)) ([9378432](https://github.com/Amsterdam/design-system/commit/9378432dc01cf9961eada5bc4e5a0a9573836452))
* Allow various types of text input ([#1259](https://github.com/Amsterdam/design-system/issues/1259)) ([dc1e5d5](https://github.com/Amsterdam/design-system/commit/dc1e5d5d0e1f7a1f9baa29581de11a3400d4d9da))
* Rename title props for Alert, Header and Dialog and require it for Dialog ([#1251](https://github.com/Amsterdam/design-system/issues/1251)) ([bbec4de](https://github.com/Amsterdam/design-system/commit/bbec4de523bebb4d8187e713d4d79af228953674))

### Bug Fixes

* Remove `password` from Text Input types ([#1300](https://github.com/Amsterdam/design-system/issues/1300)) ([c5b75e0](https://github.com/Amsterdam/design-system/commit/c5b75e04fded8b9b4caf2d3403c49daa2bc4e08d))
* Use visually hidden as utility class only ([#1269](https://github.com/Amsterdam/design-system/issues/1269)) ([d21296f](https://github.com/Amsterdam/design-system/commit/d21296f4c681bda553c2d243f2d71742dab72822))

## [0.9.0](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.8.0...design-system-react-v0.9.0) (2024-06-05)

### ⚠ BREAKING CHANGES

* Change Accordion `section` boolean prop to `sectionAs` enum ([#1244](https://github.com/Amsterdam/design-system/issues/1244))
* Use invalid prop for most inputs ([#1240](https://github.com/Amsterdam/design-system/issues/1240))
* Add invalid prop to Field Set and update Field and Field Set docs ([#1237](https://github.com/Amsterdam/design-system/issues/1237))
* Allow additional background colours for Badge and remove dark blue option ([#1236](https://github.com/Amsterdam/design-system/issues/1236))
* Rename Breadcrumb Item to Link ([#1232](https://github.com/Amsterdam/design-system/issues/1232))

### Features

* Add Error Message ([#1247](https://github.com/Amsterdam/design-system/issues/1247)) ([1dec2ea](https://github.com/Amsterdam/design-system/commit/1dec2ead41fba24e4128c2e1d60b72a7ccb29a92))
* Add Field component ([#1228](https://github.com/Amsterdam/design-system/issues/1228)) ([66832aa](https://github.com/Amsterdam/design-system/commit/66832aaf14a209915b60498acecf90cecff27c23))
* Add invalid prop to Field Set and update Field and Field Set docs ([#1237](https://github.com/Amsterdam/design-system/issues/1237)) ([d7316e8](https://github.com/Amsterdam/design-system/commit/d7316e81cd424f79f9bd655265d1c9b41296fecf))
* Allow additional background colours for Badge and remove dark blue option ([#1236](https://github.com/Amsterdam/design-system/issues/1236)) ([eec669a](https://github.com/Amsterdam/design-system/commit/eec669ad79353fc205e12a35aa7d0a8297c72e41))
* Allow installing only the React or CSS package ([#1206](https://github.com/Amsterdam/design-system/issues/1206)) ([963860d](https://github.com/Amsterdam/design-system/commit/963860d916d54ce3a0b191eb51a83cf3023ab88b))
* Allow overriding button labels in Alert, Dialog, Pagination, and Search Field ([#1220](https://github.com/Amsterdam/design-system/issues/1220)) ([c88e569](https://github.com/Amsterdam/design-system/commit/c88e569acd2dd56b37b24ad57e21fc47254d0aaf))
* Allow small text for ordered lists ([#1219](https://github.com/Amsterdam/design-system/issues/1219)) ([0e77bd6](https://github.com/Amsterdam/design-system/commit/0e77bd60d8f395417c3c736d8e51a3ca3729ece5))
* Allow small text for unordered lists ([#1217](https://github.com/Amsterdam/design-system/issues/1217)) ([5012851](https://github.com/Amsterdam/design-system/commit/5012851492e50e50e2a651250622740e517fd22f))
* Change Accordion `section` boolean prop to `sectionAs` enum ([#1244](https://github.com/Amsterdam/design-system/issues/1244)) ([fef3fb1](https://github.com/Amsterdam/design-system/commit/fef3fb1b4d3cb53d2f9d6478225621423d97ad03))
* File Input ([#1218](https://github.com/Amsterdam/design-system/issues/1218)) ([7b6ba98](https://github.com/Amsterdam/design-system/commit/7b6ba98530caaefafedada5b89a175ef0b1a8784))
* **internal:** Indicate beta status for some components, patterns, and assets ([#1242](https://github.com/Amsterdam/design-system/issues/1242)) ([358f40a](https://github.com/Amsterdam/design-system/commit/358f40a9159eb6da3bf5ca053044143491dda12b))
* Rename Breadcrumb Item to Link ([#1232](https://github.com/Amsterdam/design-system/issues/1232)) ([6cf2e5e](https://github.com/Amsterdam/design-system/commit/6cf2e5e51217900a24d739c4569c13237b9fb4ab))
* Set dir auto by default for text input form fields ([#1238](https://github.com/Amsterdam/design-system/issues/1238)) ([b588d10](https://github.com/Amsterdam/design-system/commit/b588d104095365bcadff4f34f7db53e247afc873))
* Use invalid prop for most inputs ([#1240](https://github.com/Amsterdam/design-system/issues/1240)) ([9477186](https://github.com/Amsterdam/design-system/commit/9477186b8432d6d20991e93d92c64a4357d6f391))

## [0.8.0](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.7.1...design-system-react-v0.8.0) (2024-04-22)

### ⚠ BREAKING CHANGES

* Rename Form Label to Label ([#1201](https://github.com/Amsterdam/design-system/issues/1201))

### Features

* Add background colour and full-height prop to Screen ([#1144](https://github.com/Amsterdam/design-system/issues/1144)) ([c4621e8](https://github.com/Amsterdam/design-system/commit/c4621e817cb0306fe109046d41847725d47b33a2))
* Add date input ([#1152](https://github.com/Amsterdam/design-system/issues/1152)) ([afbbef8](https://github.com/Amsterdam/design-system/commit/afbbef8bb1a3d13fa47638ce2856def0c028b13f))
* Add Description List component ([#1139](https://github.com/Amsterdam/design-system/issues/1139)) ([ee3428a](https://github.com/Amsterdam/design-system/commit/ee3428ab701ea3980f26a8562acbecc6e4eb031e))
* Remove border from accordion section and move chevron to the left ([#1116](https://github.com/Amsterdam/design-system/issues/1116)) ([3e23677](https://github.com/Amsterdam/design-system/commit/3e2367738664dcd0e4d3d4267c021c0992572da7))
* Rename Form Label to Label ([#1201](https://github.com/Amsterdam/design-system/issues/1201)) ([c5f82ab](https://github.com/Amsterdam/design-system/commit/c5f82abcc41ac4652af6c270325441d448d65525))
* Restore wrapping of items in Page Menu ([#1145](https://github.com/Amsterdam/design-system/issues/1145)) ([4068e52](https://github.com/Amsterdam/design-system/commit/4068e52bee9bba087ef9fd94bcf2a292c4affad9))
* Select component ([#1151](https://github.com/Amsterdam/design-system/issues/1151)) ([7679acc](https://github.com/Amsterdam/design-system/commit/7679acc7542c2e3d1279b9eaa364031092d16016))
* Time input component ([#1202](https://github.com/Amsterdam/design-system/issues/1202)) ([ccec68e](https://github.com/Amsterdam/design-system/commit/ccec68efafa02d5f9ac9bd4abea6c5e7cb72d556))

### Bug Fixes

* Fix autodocs for stories ([#1149](https://github.com/Amsterdam/design-system/issues/1149)) ([48c9610](https://github.com/Amsterdam/design-system/commit/48c961023932d673ff815d6e123e61670ed9d1d0))
* Move @babel/runtime dev dependency to regular dependencies ([#1204](https://github.com/Amsterdam/design-system/issues/1204)) ([5603c08](https://github.com/Amsterdam/design-system/commit/5603c0863d1612aa7c3793209ddd37fa0222666d))
* Polymorphic component typing ([#1140](https://github.com/Amsterdam/design-system/issues/1140)) ([291c8f1](https://github.com/Amsterdam/design-system/commit/291c8f1711287542a98d7780372b55349eaa6683))
* Use correct text size in Text Input, Search Field, and Text Area ([#1150](https://github.com/Amsterdam/design-system/issues/1150)) ([d5462e4](https://github.com/Amsterdam/design-system/commit/d5462e4537cfb39d62d0cd31564cfff086238330))

## [0.7.1](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.7.0...design-system-react-v0.7.1) (2024-03-22)

### Features

* Add Avatar component ([#1134](https://github.com/Amsterdam/design-system/issues/1134)) ([8dec2cf](https://github.com/Amsterdam/design-system/commit/8dec2cff8f7885ccb163774c0dc979fb2c781256))
* Add Form Field Character Counter ([#1114](https://github.com/Amsterdam/design-system/issues/1114)) ([779ae8c](https://github.com/Amsterdam/design-system/commit/779ae8c9764b23508ffbfb38c6dc2f7a7c1cbd28))

### Bug Fixes

* Improve subcomponent types ([#1130](https://github.com/Amsterdam/design-system/issues/1130)) ([827ac4e](https://github.com/Amsterdam/design-system/commit/827ac4e1197730fb0c69de197347cd4be3a77ebf))
* Use semantic Heading for the title of a Dialog ([#1123](https://github.com/Amsterdam/design-system/issues/1123)) ([0493fd8](https://github.com/Amsterdam/design-system/commit/0493fd87587d36a83bb7aa9cbb69b8debf5d66f0))

## [0.7.0](https://github.com/Amsterdam/design-system/compare/design-system-react-v0.6.1...design-system-react-v0.7.0) (2024-03-12)

### ⚠ BREAKING CHANGES

* Shorten namespaces in theme and tokens ([#1125](https://github.com/Amsterdam/design-system/issues/1125))

### Features

* Shorten namespaces in theme and tokens ([#1125](https://github.com/Amsterdam/design-system/issues/1125)) ([1c81f3b](https://github.com/Amsterdam/design-system/commit/1c81f3bd14c1f202eec2341aec1888fb74d956d5))

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

## [0.5.0](https://github.com/Amsterdam/design-system/compare/@aram-limpens/design-system-react@0.4.0...design-system-react-v0.5.0) (2024-02-09)

### ⚠ BREAKING CHANGES

* Add theme setup and compact theme ([#1067](https://github.com/Amsterdam/design-system/issues/1067))
* Remove `compact` prop of Grid component ([#1067](https://github.com/Amsterdam/design-system/issues/1067))
* Remove deprecated `inList` variant of Link ([#1064](https://github.com/Amsterdam/design-system/issues/1064))

### Features

* Add theme setup and compact theme ([#1067](https://github.com/Amsterdam/design-system/issues/1067)) ([e773434](https://github.com/Amsterdam/design-system/commit/e7734347a9e7205d510a16a543294bde69b9c6f0))
* Remove `compact` prop of Grid component ([#1067](https://github.com/Amsterdam/design-system/issues/1067)) ([e773434](https://github.com/Amsterdam/design-system/commit/e7734347a9e7205d510a16a543294bde69b9c6f0))
* Remove deprecated `inList` variant of Link ([#1064](https://github.com/Amsterdam/design-system/issues/1064)) ([b30784b](https://github.com/Amsterdam/design-system/commit/b30784b352b4a057069ceb397951b79a6e2547f2))

## [0.4.0](https://github.com/Amsterdam/design-system/compare/@aram-limpens/design-system-react@0.3.0...@aram-limpens/design-system-react@0.4.0) (2024-01-31)

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

## [0.3.0](https://github.com/Amsterdam/design-system/compare/@aram-limpens/design-system-react@0.2.0...@aram-limpens/design-system-react@0.3.0) (2023-12-22)

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

## [0.2.0](https://github.com/Amsterdam/design-system/compare/@aram-limpens/design-system-react@0.1.9...@aram-limpens/design-system-react@0.2.0) (2023-12-01)

### ⚠ BREAKING CHANGES

* Update typography system and values, implement compact theme (#803)

### Features

* Add common link tokens and use them in all link-like components ([#814](https://github.com/Amsterdam/design-system/issues/814)) ([9b5bd55](https://github.com/Amsterdam/design-system/commit/9b5bd55d0b118f246b828e023b75be1e84f98af4))
* Allow end-alignment on page menu ([#835](https://github.com/Amsterdam/design-system/issues/835)) ([035ca08](https://github.com/Amsterdam/design-system/commit/035ca08842ee8ad955b260fb26693fe739801df4))
* Allow small and large vertical white space on grids ([#821](https://github.com/Amsterdam/design-system/issues/821)) ([aa54eb9](https://github.com/Amsterdam/design-system/commit/aa54eb911bfed633856a74e0be4e11d4ad8f3ebc))
* Update typography system and values, implement compact theme ([#803](https://github.com/Amsterdam/design-system/issues/803)) ([9b087ec](https://github.com/Amsterdam/design-system/commit/9b087ec5c6e75dfafadcdcde710747ef63951917))

### Bug Fixes

* Apply regular font size to lists of links ([#875](https://github.com/Amsterdam/design-system/issues/875)) ([4908a42](https://github.com/Amsterdam/design-system/commit/4908a42c6e78deaf8ce42aaf0e91dc5e156b0779))

## [0.1.9](https://github.com/Amsterdam/design-system/compare/@aram-limpens/design-system-react@0.1.8...@aram-limpens/design-system-react@0.1.9) (2023-11-27)

**Note:** Version bump only for package @aram-limpens/design-system-react
