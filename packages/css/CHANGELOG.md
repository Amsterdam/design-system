# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.16.0](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.15.0...design-system-css-v0.16.0) (2025-04-25)


### ⚠ BREAKING CHANGES

* **Screen:** Delete component (use Page instead) ([#2018](https://github.com/Amsterdam/design-system/issues/2018))
* **Grid:** Match values for padding and gap with Space sizes ([#1993](https://github.com/Amsterdam/design-system/issues/1993))
* **Link:** Remove ‘variant’ prop, make inline the default ([#1994](https://github.com/Amsterdam/design-system/issues/1994))
* **Top Task Link:** Remove component ([#1988](https://github.com/Amsterdam/design-system/issues/1988))
* **Footer:** Rename component to Page Footer ([#1971](https://github.com/Amsterdam/design-system/issues/1971))
* **Header:** Rename component to Page Header ([#1970](https://github.com/Amsterdam/design-system/issues/1970))
* **MegaMenu:** Remove deprecated component ([#1963](https://github.com/Amsterdam/design-system/issues/1963))
* **PageMenu:** Remove deprecated component ([#1964](https://github.com/Amsterdam/design-system/issues/1964))

### Features

* Add Standalone Link ([#1979](https://github.com/Amsterdam/design-system/issues/1979)) ([b5d57bb](https://github.com/Amsterdam/design-system/commit/b5d57bbd34c7817e436f7b28d5dc675213394bfb))
* **Avatar, Badge, Spotlight:** Use inverse text on azure background, add guidelines to pair colours ([#1965](https://github.com/Amsterdam/design-system/issues/1965)) ([772b0dd](https://github.com/Amsterdam/design-system/commit/772b0dd0828fc492108bd19ab9726da1d42b67d9))
* Balance text wrapping in all kinds of Headings ([#1968](https://github.com/Amsterdam/design-system/issues/1968)) ([ecc87a0](https://github.com/Amsterdam/design-system/commit/ecc87a091b356aaffaa8d0a11f1e7014c4f48f41))
* **Card:** Replace gap with margins and introduce subcomponents ([#1972](https://github.com/Amsterdam/design-system/issues/1972)) ([85e34d4](https://github.com/Amsterdam/design-system/commit/85e34d4ec3da1589c95925a677e5800fb071dc32))
* **Dialog:** Decrease amounts of inner and outer whitespace ([#1975](https://github.com/Amsterdam/design-system/issues/1975)) ([b47526f](https://github.com/Amsterdam/design-system/commit/b47526f24e5c6c9ce94f8280f93e6273d16a8640))
* Do not copy visually hidden text ([#1956](https://github.com/Amsterdam/design-system/issues/1956)) ([6488bc3](https://github.com/Amsterdam/design-system/commit/6488bc3ba271166a3fa0a973df85b8641f8b5227))
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

* **Icon:** Center align SVG ([#1978](https://github.com/Amsterdam/design-system/issues/1978)) ([0340149](https://github.com/Amsterdam/design-system/commit/0340149d99f488a9581c5928e724f0126e0b0695))
* **Page Footer:** Set correct inline padding ([#2004](https://github.com/Amsterdam/design-system/issues/2004)) ([cb2e70c](https://github.com/Amsterdam/design-system/commit/cb2e70ce04e05aed64299e1df8c40b9d8873ca83))
* **Page Header:** Restore alignment with edges of Grid ([#1976](https://github.com/Amsterdam/design-system/issues/1976)) ([723a757](https://github.com/Amsterdam/design-system/commit/723a757511c921e8e5a4181c348ebd2077527a44))

## [0.15.0](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.14.1...design-system-css-v0.15.0) (2025-03-28)


### ⚠ BREAKING CHANGES

* Shorten size labels in prop values for Row and Column, space tokens and classes ([#1940](https://github.com/Amsterdam/design-system/issues/1940), [#1951](https://github.com/Amsterdam/design-system/issues/1951))
* **Description List:** Rename values for terms column widths ([#1942](https://github.com/Amsterdam/design-system/issues/1942))
* **Aspect Ratio, Gap, Margin:** Use single dash in utility classes ([#1938](https://github.com/Amsterdam/design-system/issues/1938))
* Update aspect ratio tokens and CSS utility classes ([#1913](https://github.com/Amsterdam/design-system/issues/1913))
* **Header:** Add responsive version of Amsterdam Logo, remove Heading level 1 ([#1880](https://github.com/Amsterdam/design-system/issues/1880))
* **Heading:** Remove ‘level’ from class name ([#1904](https://github.com/Amsterdam/design-system/issues/1904))
* **Icon:** Rename size classes ([#1890](https://github.com/Amsterdam/design-system/issues/1890))
* **Footer:** add FooterMenu component to replace PageMenu in Footer ([#1871](https://github.com/Amsterdam/design-system/issues/1871))
* **Avatar:** Use updated color names for azure, lime and green  ([#1867](https://github.com/Amsterdam/design-system/issues/1867))
* **Badge:** Use updated color names for azure and lime ([#1866](https://github.com/Amsterdam/design-system/issues/1866))
* **Spotlight:** Use updated color names for lime and green and remove purple as an explicit option ([#1865](https://github.com/Amsterdam/design-system/issues/1865))

### Features

* Add missing hyphenation behaviour to all text components ([#1864](https://github.com/Amsterdam/design-system/issues/1864)) ([6e933a6](https://github.com/Amsterdam/design-system/commit/6e933a6b9610ab76c187ae1d42c3e8817b9b7e66))
* **Aspect Ratio, Gap, Margin:** Use single dash in utility classes ([#1938](https://github.com/Amsterdam/design-system/issues/1938)) ([4762cdb](https://github.com/Amsterdam/design-system/commit/4762cdb05aa66b0afa89da264e84987e1d4b3e16))
* **Avatar:** Use updated color names for azure, lime and green  ([#1867](https://github.com/Amsterdam/design-system/issues/1867)) ([e8a2638](https://github.com/Amsterdam/design-system/commit/e8a2638882b95141c5e5e345bb7656f1f9968253))
* **Badge:** Use updated color names for azure and lime ([#1866](https://github.com/Amsterdam/design-system/issues/1866)) ([fd25778](https://github.com/Amsterdam/design-system/commit/fd25778db56eeeecf2e716a72d25b91c49193fa1))
* Consolidate Grid Space and Component Space into one set of spacing tokens ([#1910](https://github.com/Amsterdam/design-system/issues/1910)) ([f36e985](https://github.com/Amsterdam/design-system/commit/f36e9855c78f582df95fa0906f0849c2832c25a3))
* **Description List:** Rename values for terms column widths ([#1942](https://github.com/Amsterdam/design-system/issues/1942)) ([e1a9669](https://github.com/Amsterdam/design-system/commit/e1a9669925927f1608433a4ae68676b925ba8bd2))
* **Dialog:** Change background colour of backdrop and add token for it ([#1876](https://github.com/Amsterdam/design-system/issues/1876)) ([d071bb4](https://github.com/Amsterdam/design-system/commit/d071bb4149d2789d967abcdb84ccdfa4d5b7aecc))
* **Footer:** add FooterMenu component to replace PageMenu in Footer ([#1871](https://github.com/Amsterdam/design-system/issues/1871)) ([85e0f0f](https://github.com/Amsterdam/design-system/commit/85e0f0f8c7fd9c281ba68155999e835921e4443d))
* **Header:** Add responsive version of Amsterdam Logo, remove Heading level 1 ([#1880](https://github.com/Amsterdam/design-system/issues/1880)) ([7de8138](https://github.com/Amsterdam/design-system/commit/7de813861a565da89fee246731dc1525bc5d2643))
* **Icon:** Add invisble text content to simplify baseline alignment ([#1905](https://github.com/Amsterdam/design-system/issues/1905)) ([190b588](https://github.com/Amsterdam/design-system/commit/190b58865dee4552cf2c304cbc4d193cf7e14036))
* Remove action tokens, add and implement cursor tokens ([#1860](https://github.com/Amsterdam/design-system/issues/1860)) ([40a04a8](https://github.com/Amsterdam/design-system/commit/40a04a88e8c5829df54eb3a6ca338557249aec5d))
* Rename and document common tokens for links ([#1870](https://github.com/Amsterdam/design-system/issues/1870)) ([551743d](https://github.com/Amsterdam/design-system/commit/551743d11436ff2363f8dd1187afe166e6c4a02b))
* Shorten size labels in border tokens ([#1941](https://github.com/Amsterdam/design-system/issues/1941)) ([fa154a6](https://github.com/Amsterdam/design-system/commit/fa154a6c96a11a43623f959a51f782abae27449e))
* Shorten size labels in prop values for Row and Column, space tokens and utility classes ([#1940](https://github.com/Amsterdam/design-system/issues/1940)) ([694987c](https://github.com/Amsterdam/design-system/commit/694987c88773983e4cd12d518cc957d34ec29d7e))
* **Icon:** Rename size classes ([#1890](https://github.com/Amsterdam/design-system/issues/1890)) ([3126aa2](https://github.com/Amsterdam/design-system/commit/3126aa29d5aebccfca272892d55f140783a94d43))
* **Spotlight:** Use updated color names for lime and green and remove purple as an explicit option ([#1865](https://github.com/Amsterdam/design-system/issues/1865)) ([387ae45](https://github.com/Amsterdam/design-system/commit/387ae45ce263ae3b6a12fc9a3b22a37dc0aed997))
* Update and document focus tokens ([#1919](https://github.com/Amsterdam/design-system/issues/1919)) ([4c85170](https://github.com/Amsterdam/design-system/commit/4c85170f2b8eec5ce956cecdbb41430ce2c37639))
* Update aspect ratio tokens and CSS utility classes ([#1913](https://github.com/Amsterdam/design-system/issues/1913)) ([968ef2b](https://github.com/Amsterdam/design-system/commit/968ef2bf053803c356e36424836fd9934da123fd))
* Update hyphenation tokens ([#1914](https://github.com/Amsterdam/design-system/issues/1914)) ([0c7f359](https://github.com/Amsterdam/design-system/commit/0c7f359ff094e281022441d171bd617047c660b2))


### Bug Fixes

* **Action Group:** Align content to center instead of baseline ([#1931](https://github.com/Amsterdam/design-system/issues/1931)) ([2ad1739](https://github.com/Amsterdam/design-system/commit/2ad17397009438d0d39a03a6fda5271e12e65e28))
* **Card:** Prevent other links than the Card Link from stretching ([#1898](https://github.com/Amsterdam/design-system/issues/1898)) ([a6d79b0](https://github.com/Amsterdam/design-system/commit/a6d79b01e50792c0c8a38629d4b403c1c63e1757))
* **Column, Row:** Do not use utility classes ([#1951](https://github.com/Amsterdam/design-system/issues/1951)) ([a5a74f8](https://github.com/Amsterdam/design-system/commit/a5a74f8bbb55ab54c7b179be29d4a804b088044a))
* **Dialog:** Prevent a focus indicator from being cut off ([#1879](https://github.com/Amsterdam/design-system/issues/1879)) ([336ff55](https://github.com/Amsterdam/design-system/commit/336ff554d2a4a213c1f62bd32b02219ca41a802c))
* **Gap:** Make sure grid display is always set ([#1945](https://github.com/Amsterdam/design-system/issues/1945)) ([cec37ae](https://github.com/Amsterdam/design-system/commit/cec37ae5482a3bace3afb59e903285aeb587396a))
* **Heading:** Remove ‘level’ from class name ([#1904](https://github.com/Amsterdam/design-system/issues/1904)) ([71ef1db](https://github.com/Amsterdam/design-system/commit/71ef1db68405455087065e73dadf90581173398d))
* **Icon:** Restore square appearance ([#1933](https://github.com/Amsterdam/design-system/issues/1933)) ([3237e9d](https://github.com/Amsterdam/design-system/commit/3237e9dda1536756d4202fb1e95489a39683ab13))
* **Tabs:** Remove unnecessary token, reuse color value ([#1932](https://github.com/Amsterdam/design-system/issues/1932)) ([cabfd59](https://github.com/Amsterdam/design-system/commit/cabfd5967a9c0cb17ab0bac627f19261f29bcf2e))

## [0.14.1](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.14.0...design-system-css-v0.14.1) (2025-02-12)


### Features

* **Tabs:** Scroll wide content of a Tab Panel horizontally ([#1855](https://github.com/Amsterdam/design-system/issues/1855)) ([8ece501](https://github.com/Amsterdam/design-system/commit/8ece501ad592728ef853a432b427b8b3b037e13e))

## [0.14.0](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.13.1...design-system-css-v0.14.0) (2025-01-10)

### ⚠ BREAKING CHANGES

* Add collapsible menu to Header ([#1784](https://github.com/Amsterdam/design-system/issues/1784))
* Disallow blue Spotlight and make purple the default ([#1798](https://github.com/Amsterdam/design-system/issues/1798))
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
* Make active Tab look less like a primary Button ([#1773](https://github.com/Amsterdam/design-system/issues/1773)) ([2ec0102](https://github.com/Amsterdam/design-system/commit/2ec010286dd64ecebefa040a0ab18cf192542d0f))
* Make border of Radio thicker when hovering ([#1696](https://github.com/Amsterdam/design-system/issues/1696)) ([8839012](https://github.com/Amsterdam/design-system/commit/88390124aa5197f6c784dae4fc2a7c3e18d75ca6))
* Rename reset mixins to include element name ([#1738](https://github.com/Amsterdam/design-system/issues/1738)) ([92312fa](https://github.com/Amsterdam/design-system/commit/92312faf845fbb8d28494aa46a57bdc8f378f402))
* Replace Aspect Ratio component with utility classes and prop on Image ([#1593](https://github.com/Amsterdam/design-system/issues/1593)) ([766efba](https://github.com/Amsterdam/design-system/commit/766efbac45e8831a19f3e99bd9d0550028d8d4fd))
* Replace deprecated import statements in Sass with new API ([#1777](https://github.com/Amsterdam/design-system/issues/1777)) ([adcd819](https://github.com/Amsterdam/design-system/commit/adcd81962a757d5afd4864a5c79cfd99c141a065))
* Require an alt prop for every Image ([#1739](https://github.com/Amsterdam/design-system/issues/1739)) ([9145dff](https://github.com/Amsterdam/design-system/commit/9145dffd2a3767f5be19adc2683ba11c50dd9485))
* Stretch File Input to full width to match other inputs ([#1752](https://github.com/Amsterdam/design-system/issues/1752)) ([eeea7b6](https://github.com/Amsterdam/design-system/commit/eeea7b69df33d779ec9436113c3cba5aa11b7068))
* Use new Button features for SearchField ([#1695](https://github.com/Amsterdam/design-system/issues/1695)) ([7b275d0](https://github.com/Amsterdam/design-system/commit/7b275d0c803b309095ba7c425bb6bf04630775a9))

### Bug Fixes

* Correct layout of Description List if multiple terms share a description ([#1763](https://github.com/Amsterdam/design-system/issues/1763)) ([ca913af](https://github.com/Amsterdam/design-system/commit/ca913afd56aba3a8c2305479df9177bceea09804))
* Explicitly set row and column start and end in Overlap CSS ([#1776](https://github.com/Amsterdam/design-system/issues/1776)) ([efd2b99](https://github.com/Amsterdam/design-system/commit/efd2b99b353c92c2a95bae76d5f20802c144de50))

## [0.13.1](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.13.0...design-system-css-v0.13.1) (2024-11-04)

### Bug Fixes

* Broken link Dialog docs ([#1731](https://github.com/Amsterdam/design-system/issues/1731)) ([be0cf82](https://github.com/Amsterdam/design-system/commit/be0cf82a147ebdacc44903eb72a3840926f77886))

## [0.13.0](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.12.0...design-system-css-v0.13.0) (2024-10-28)

### ⚠ BREAKING CHANGES

* Rename Description List ‘details’ to ’description’ ([#1703](https://github.com/Amsterdam/design-system/issues/1703))

### Bug Fixes

* Rename Description List ‘details’ to ’description’ ([#1703](https://github.com/Amsterdam/design-system/issues/1703)) ([139d8cb](https://github.com/Amsterdam/design-system/commit/139d8cb5c8fc4ffc93a2283abeabda6b8364b7cc))

## [0.12.0](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.11.1...design-system-css-v0.12.0) (2024-10-25)

### ⚠ BREAKING CHANGES

* Add Action Group component, e.g. to wrap Dialog buttons in ([#1592](https://github.com/Amsterdam/design-system/issues/1592))
* Use inline SVG icon for Radio button ([#1460](https://github.com/Amsterdam/design-system/issues/1460))
* Remove unnecessary Dialog wrapper ([#1591](https://github.com/Amsterdam/design-system/issues/1591))
* Remove form from Dialog ([#1582](https://github.com/Amsterdam/design-system/issues/1582))
* Replace ‘on background’ props with ‘inverseColor’ and ‘contrastColor’ for Link, Link List Link, and Icon Button ([#1448](https://github.com/Amsterdam/design-system/issues/1448))

### Features

* Add Action Group component, e.g. to wrap Dialog buttons in ([#1592](https://github.com/Amsterdam/design-system/issues/1592)) ([d0ea054](https://github.com/Amsterdam/design-system/commit/d0ea054b98a7f2ee41bd9a8434b76a85e9b8c9f2))
* Add border to Avatar in forced colors mode ([#1578](https://github.com/Amsterdam/design-system/issues/1578)) ([1f29f35](https://github.com/Amsterdam/design-system/commit/1f29f358ab7b831c502e8fa2cbd284d1853ff6af))
* Add Breakout component that lets a figure stick out of a Spotlight ([#1397](https://github.com/Amsterdam/design-system/issues/1397)) ([715f4d6](https://github.com/Amsterdam/design-system/commit/715f4d6241353b9b9f1f68dad7b7773b9c618492))
* Add Hint as component and Label and FieldSet props ([#1499](https://github.com/Amsterdam/design-system/issues/1499)) ([3d86882](https://github.com/Amsterdam/design-system/commit/3d86882f22e4629a17a98cbbf96f03ad56620be9))
* Add initial Password Input component ([#1449](https://github.com/Amsterdam/design-system/issues/1449)) ([3cc863](https://github.com/Amsterdam/design-system/commit/3cc863ec8f1f2b50f79a426fd41676ab05838768))
* Add utility functions as methods to Dialog ([#1576](https://github.com/Amsterdam/design-system/issues/1576)) ([f25bc01](https://github.com/Amsterdam/design-system/commit/f25bc016f1cea8c81e4b341af515fcad2f00a416))
* Allow Button to display an icon without a label ([#1654](https://github.com/Amsterdam/design-system/issues/1654), [#1700](https://github.com/Amsterdam/design-system/issues/1700)) ([2d347b6](https://github.com/Amsterdam/design-system/commit/2d347b654b701cd6cce9182d5b6837960f41b551), [33c4c0e](https://github.com/Amsterdam/design-system/commit/33c4c0edefdf9c785bb828b0c61f0a120d697b02))
* Image slider ([#1595](https://github.com/Amsterdam/design-system/issues/1595)) ([58e7766](https://github.com/Amsterdam/design-system/commit/58e77661ad99acb5d3f6e10cbfca981345dc8704))
* Make terms bold instead of descriptions in Description List ([#1693](https://github.com/Amsterdam/design-system/issues/1693)) ([cc8f40e](https://github.com/Amsterdam/design-system/commit/cc8f40e631669a2f3423b7f55b8b129c025efcf9))
* Replace ‘on background’ props with ‘inverseColor’ and ‘contrastColor’ for Link, Link List Link, and Icon Button ([#1448](https://github.com/Amsterdam/design-system/issues/1448)) ([f5176b1](https://github.com/Amsterdam/design-system/commit/f5176b1e2c85c166fa2b6cb67d11ce0b1f9727a3))
* Remove form from Dialog ([#1582](https://github.com/Amsterdam/design-system/issues/1582)) ([4fb6e53](https://github.com/Amsterdam/design-system/commit/4fb6e53441f3bae914eb483da2f0537a65273fd2))
* Remove margin Safari sets on buttons ([#1529](https://github.com/Amsterdam/design-system/issues/1529)) ([2ccc1b](https://github.com/Amsterdam/design-system/commit/2ccc1bc4eba83a49c37213582fae5d9e7ee6fc98))
* Remove unnecessary Dialog wrapper ([#1591](https://github.com/Amsterdam/design-system/issues/1591)) ([450b0c3](https://github.com/Amsterdam/design-system/commit/450b0c3e9adf5bdd9fb868400e17aaaea4b2c545))
* Show selected and disabled Tabs in forced colors mode ([#1517](https://github.com/Amsterdam/design-system/issues/1517)) ([339bd1](https://github.com/Amsterdam/design-system/commit/339bd1eff89e095a96be048ea6f6311bbf3e7980))
* Show Switch in forced colors mode ([#1528](https://github.com/Amsterdam/design-system/issues/1528)) ([302ae7](https://github.com/Amsterdam/design-system/commit/302ae75ecc5de23cbb0f371d169daa9ed0a1a61c))
* Support various column widths for Description List ([#1697](https://github.com/Amsterdam/design-system/issues/1697)) ([5a98c07](https://github.com/Amsterdam/design-system/commit/5a98c07cad19eea38a2ff299378dc4dc5b80018c))
* Update spacing in Ordered and Unordered List ([#1632](https://github.com/Amsterdam/design-system/issues/1632)) ([986e023](https://github.com/Amsterdam/design-system/commit/986e023b83007560911724e819f54fb18c97f1dc))
* Use inline SVG icon for Radio button ([#1460](https://github.com/Amsterdam/design-system/issues/1460)) ([c19055b](https://github.com/Amsterdam/design-system/commit/c19055bd6453ce40ca43b31d599f14ec65d6037a))

## [0.11.1](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.11.0...design-system-css-v0.11.1) (2024-08-29)

### Bug Fixes

* Close Dialog without submit ([#1547](https://github.com/Amsterdam/design-system/issues/1547)) ([d9cc107](https://github.com/Amsterdam/design-system/commit/d9cc1079e2f784fd7002b7f785fcfdaa750cb240))

## [0.11.0](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.10.0...design-system-css-v0.11.0) (2024-07-25)

### ⚠ BREAKING CHANGES

* Apply default gap in Row and Column without extra class ([#1422](https://github.com/Amsterdam/design-system/issues/1422))
* Include ‘gap-’ in class names for Row and Column gap ([#1421](https://github.com/Amsterdam/design-system/issues/1421))
* Rename Form Field Character Counter to Character Count ([#1363](https://github.com/Amsterdam/design-system/issues/1363))
* Change CSS classes for Heading level for consistency with token names ([#1355](https://github.com/Amsterdam/design-system/issues/1355))

### Features

* Add documention for Gap and Margin utility classes ([#1427](https://github.com/Amsterdam/design-system/issues/1427)) ([6adbd13](https://github.com/Amsterdam/design-system/commit/6adbd13f2437c017e379caf315b0546d052ffd6d))
* Add focus on initial render to Form Error List ([#1328](https://github.com/Amsterdam/design-system/issues/1328)) ([09387b7](https://github.com/Amsterdam/design-system/commit/09387b7b7d5f03a7422910314de4ae4d0ccbb983))
* Add horizontal and vertical alignment options to Column ([#1428](https://github.com/Amsterdam/design-system/issues/1428)) ([d5a7766](https://github.com/Amsterdam/design-system/commit/d5a7766bfd60f62e4a9b69e369bfa08bbd425fa6))
* Add horizontal and vertical alignment options to Row ([#1330](https://github.com/Amsterdam/design-system/issues/1330)) ([1b9c269](https://github.com/Amsterdam/design-system/commit/1b9c269f10392d1ab6503e6b047849a586d56502))
* Allow a row to wrap its items onto multiple lines ([#1319](https://github.com/Amsterdam/design-system/issues/1319)) ([42424eb](https://github.com/Amsterdam/design-system/commit/42424ebb413b9976958883a7b03f5b0d31225c39))
* Apply default gap in Row and Column without extra class ([#1422](https://github.com/Amsterdam/design-system/issues/1422)) ([3af0b1f](https://github.com/Amsterdam/design-system/commit/3af0b1fb40ca941fd3966d08e6afe18995e6d02f))
* Improve sizing behaviour of Dialog ([#1329](https://github.com/Amsterdam/design-system/issues/1329)) ([a54d239](https://github.com/Amsterdam/design-system/commit/a54d239e2aff832bc15f8f90ea8880c02fa0d6ce))
* Let Form Error List add the error count to the document title ([#1309](https://github.com/Amsterdam/design-system/issues/1309)) ([f18f03b](https://github.com/Amsterdam/design-system/commit/f18f03bc3ce582099ec120176ea5c6abe265451e))
* Merge ‘stack’ and ‘inside’ space categories and update components ([#1267](https://github.com/Amsterdam/design-system/issues/1267)) ([a0de626](https://github.com/Amsterdam/design-system/commit/a0de626d4fbdc9e0eac71492d544d35ad4dc8769))
* Remove HeadingLevel type, group Heading sizes in story ([#1387](https://github.com/Amsterdam/design-system/issues/1387)) ([8d05017](https://github.com/Amsterdam/design-system/commit/8d050178d2a7991ae9bd620d096bfb956d14f9cf))
* Remove Visually Hidden component ([#1391](https://github.com/Amsterdam/design-system/issues/1391)) ([83a60ca](https://github.com/Amsterdam/design-system/commit/83a60ca5310704b3348440dd9f1ee8bc1f22811f))
* Rename Form Field Character Counter to Character Count ([#1363](https://github.com/Amsterdam/design-system/issues/1363)) ([a5299db](https://github.com/Amsterdam/design-system/commit/a5299dbfb3659bada5565893be63f615b511c0ee))
* Use flexbox and regular space in Column as we do in Row ([#1388](https://github.com/Amsterdam/design-system/issues/1388)) ([86d693c](https://github.com/Amsterdam/design-system/commit/86d693cf75be205cd096abe339cdd3f97e9b1a2f))

### Bug Fixes

* Change CSS classes for Heading level for consistency with token names ([#1355](https://github.com/Amsterdam/design-system/issues/1355)) ([7c34bbe](https://github.com/Amsterdam/design-system/commit/7c34bbea69b377b8e5efffd169374d383cddc54b))
* Include ‘gap-’ in class names for Row and Column gap ([#1421](https://github.com/Amsterdam/design-system/issues/1421)) ([21cfcbf](https://github.com/Amsterdam/design-system/commit/21cfcbfc80b8fd3dac797428ee42a52447a9b9de))

## [0.10.0](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.9.0...design-system-css-v0.10.0) (2024-06-28)

### ⚠ BREAKING CHANGES

* Allow additional background colours for Avatar and remove dark blue option ([#1257](https://github.com/Amsterdam/design-system/issues/1257))
* Rename title props for Alert, Header and Dialog and require it for Dialog ([#1251](https://github.com/Amsterdam/design-system/issues/1251))

### Features

* Add Form Error List ([#1252](https://github.com/Amsterdam/design-system/issues/1252)) ([e879942](https://github.com/Amsterdam/design-system/commit/e87994292f62434a1ebff704c909bea4a0feff25))
* Add Table of Contents component ([#1248](https://github.com/Amsterdam/design-system/issues/1248)) ([1f4c09a](https://github.com/Amsterdam/design-system/commit/1f4c09a08d2aa96d1c584eceb498d33c31aa52ad))
* Allow additional background colours for Avatar and remove dark blue option ([#1257](https://github.com/Amsterdam/design-system/issues/1257)) ([a1a3c8f](https://github.com/Amsterdam/design-system/commit/a1a3c8fc58f249f0cd9c7d8bd09cc46f3f48cb5c))
* Allow various types of text input ([#1259](https://github.com/Amsterdam/design-system/issues/1259)) ([dc1e5d5](https://github.com/Amsterdam/design-system/commit/dc1e5d5d0e1f7a1f9baa29581de11a3400d4d9da))
* Change values for tall, wide, and extra wide aspect ratios ([#1254](https://github.com/Amsterdam/design-system/issues/1254)) ([478508a](https://github.com/Amsterdam/design-system/commit/478508a758f311b89dfb8214813b25e50d875ff0))
* Rename title props for Alert, Header and Dialog and require it for Dialog ([#1251](https://github.com/Amsterdam/design-system/issues/1251)) ([bbec4de](https://github.com/Amsterdam/design-system/commit/bbec4de523bebb4d8187e713d4d79af228953674))

### Bug Fixes

* Fix FieldSet float issue ([#1268](https://github.com/Amsterdam/design-system/issues/1268)) ([5593916](https://github.com/Amsterdam/design-system/commit/5593916904db612f4dfa1c5d02c88add35d0103a))
* Start-align text in Accordion Button ([#1266](https://github.com/Amsterdam/design-system/issues/1266)) ([6eb474d](https://github.com/Amsterdam/design-system/commit/6eb474ddd50c344dd06da064689d5ed1a374d907))

## [0.9.0](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.8.0...design-system-css-v0.9.0) (2024-06-05)

### ⚠ BREAKING CHANGES

* Disallow directional style rules ([#1245](https://github.com/Amsterdam/design-system/issues/1245))
* Use invalid prop for most inputs ([#1240](https://github.com/Amsterdam/design-system/issues/1240))
* Add invalid prop to Field Set and update Field and Field Set docs ([#1237](https://github.com/Amsterdam/design-system/issues/1237))
* Allow additional background colours for Badge and remove dark blue option ([#1236](https://github.com/Amsterdam/design-system/issues/1236))
* Rename Breadcrumb Item to Link ([#1232](https://github.com/Amsterdam/design-system/issues/1232))
* Use logical properties for Search Field, Select, Text Area and Text Input ([#1226](https://github.com/Amsterdam/design-system/issues/1226))
* Flatten token names for default text size and line height ([#1221](https://github.com/Amsterdam/design-system/issues/1221))

### Features

* Add Error Message ([#1247](https://github.com/Amsterdam/design-system/issues/1247)) ([1dec2ea](https://github.com/Amsterdam/design-system/commit/1dec2ead41fba24e4128c2e1d60b72a7ccb29a92))
* Add Field component ([#1228](https://github.com/Amsterdam/design-system/issues/1228)) ([66832aa](https://github.com/Amsterdam/design-system/commit/66832aaf14a209915b60498acecf90cecff27c23))
* Add invalid prop to Field Set and update Field and Field Set docs ([#1237](https://github.com/Amsterdam/design-system/issues/1237)) ([d7316e8](https://github.com/Amsterdam/design-system/commit/d7316e81cd424f79f9bd655265d1c9b41296fecf))
* Allow additional background colours for Badge and remove dark blue option ([#1236](https://github.com/Amsterdam/design-system/issues/1236)) ([eec669a](https://github.com/Amsterdam/design-system/commit/eec669ad79353fc205e12a35aa7d0a8297c72e41))
* Allow installing only the React or CSS package ([#1206](https://github.com/Amsterdam/design-system/issues/1206)) ([963860d](https://github.com/Amsterdam/design-system/commit/963860d916d54ce3a0b191eb51a83cf3023ab88b))
* Allow small text for ordered lists ([#1219](https://github.com/Amsterdam/design-system/issues/1219)) ([0e77bd6](https://github.com/Amsterdam/design-system/commit/0e77bd60d8f395417c3c736d8e51a3ca3729ece5))
* Allow small text for unordered lists ([#1217](https://github.com/Amsterdam/design-system/issues/1217)) ([5012851](https://github.com/Amsterdam/design-system/commit/5012851492e50e50e2a651250622740e517fd22f))
* File Input ([#1218](https://github.com/Amsterdam/design-system/issues/1218)) ([7b6ba98](https://github.com/Amsterdam/design-system/commit/7b6ba98530caaefafedada5b89a175ef0b1a8784))
* Rename Breadcrumb Item to Link ([#1232](https://github.com/Amsterdam/design-system/issues/1232)) ([6cf2e5e](https://github.com/Amsterdam/design-system/commit/6cf2e5e51217900a24d739c4569c13237b9fb4ab))
* Start-align Dialog buttons and place the primary button first ([#1143](https://github.com/Amsterdam/design-system/issues/1143)) ([fd668c1](https://github.com/Amsterdam/design-system/commit/fd668c15c5fce9cf28b66b811d2463ada7165f7f))
* Use invalid prop for most inputs ([#1240](https://github.com/Amsterdam/design-system/issues/1240)) ([9477186](https://github.com/Amsterdam/design-system/commit/9477186b8432d6d20991e93d92c64a4357d6f391))
* Use logical properties for Search Field, Select, Text Area and Text Input ([#1226](https://github.com/Amsterdam/design-system/issues/1226)) ([4471c7a](https://github.com/Amsterdam/design-system/commit/4471c7a154e9f1f31dd92298f932f4bbc134dbf9))

### Bug Fixes

* Disallow directional style rules ([#1245](https://github.com/Amsterdam/design-system/issues/1245)) ([8ab6f81](https://github.com/Amsterdam/design-system/commit/8ab6f81d4cbcdb75b7acb986a145d49ccd1895c8))
* Fix issues with inputs on iOS ([#1241](https://github.com/Amsterdam/design-system/issues/1241)) ([dcd2f6e](https://github.com/Amsterdam/design-system/commit/dcd2f6e609699a5db6ee026d9d3024e13aff06c9))
* Flatten token names for default text size and line height ([#1221](https://github.com/Amsterdam/design-system/issues/1221)) ([6eeaeb4](https://github.com/Amsterdam/design-system/commit/6eeaeb41fae90a2d455b4e41da3ff3a4561dcbe4))
* Reset the lower placeholder opacity set by Firefox ([#1239](https://github.com/Amsterdam/design-system/issues/1239)) ([d2b371e](https://github.com/Amsterdam/design-system/commit/d2b371e02c385b2ee8371c9ca0c85ea5c0e706aa))

## [0.8.0](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.7.1...design-system-css-v0.8.0) (2024-04-22)

### ⚠ BREAKING CHANGES

* Rename Form Label to Label ([#1201](https://github.com/Amsterdam/design-system/issues/1201))
* Allow setting a background colour on Tabs List ([#1142](https://github.com/Amsterdam/design-system/issues/1142))

### Features

* Add background colour and full-height prop to Screen ([#1144](https://github.com/Amsterdam/design-system/issues/1144)) ([c4621e8](https://github.com/Amsterdam/design-system/commit/c4621e817cb0306fe109046d41847725d47b33a2))
* Add border tokens and use rems for widths ([#1147](https://github.com/Amsterdam/design-system/issues/1147)) ([d91d889](https://github.com/Amsterdam/design-system/commit/d91d889c3a529a90167bd9b9d0d9c3174b2b0e05))
* Add date input ([#1152](https://github.com/Amsterdam/design-system/issues/1152)) ([afbbef8](https://github.com/Amsterdam/design-system/commit/afbbef8bb1a3d13fa47638ce2856def0c028b13f))
* Add Description List component ([#1139](https://github.com/Amsterdam/design-system/issues/1139)) ([ee3428a](https://github.com/Amsterdam/design-system/commit/ee3428ab701ea3980f26a8562acbecc6e4eb031e))
* Add document-level classes and guidelines ([#1136](https://github.com/Amsterdam/design-system/issues/1136)) ([c13d91d](https://github.com/Amsterdam/design-system/commit/c13d91d418dd0a596de9e65e3c4f729e04e75bfd))
* Allow setting a background colour on Tabs List ([#1142](https://github.com/Amsterdam/design-system/issues/1142)) ([fedb1a1](https://github.com/Amsterdam/design-system/commit/fedb1a1d8f54decc81e5bd5081f8eb9a35dfb9b6))
* Remove border from accordion section and move chevron to the left ([#1116](https://github.com/Amsterdam/design-system/issues/1116)) ([3e23677](https://github.com/Amsterdam/design-system/commit/3e2367738664dcd0e4d3d4267c021c0992572da7))
* Rename Form Label to Label ([#1201](https://github.com/Amsterdam/design-system/issues/1201)) ([c5f82ab](https://github.com/Amsterdam/design-system/commit/c5f82abcc41ac4652af6c270325441d448d65525))
* Restore wrapping of items in Page Menu ([#1145](https://github.com/Amsterdam/design-system/issues/1145)) ([4068e52](https://github.com/Amsterdam/design-system/commit/4068e52bee9bba087ef9fd94bcf2a292c4affad9))
* Select component ([#1151](https://github.com/Amsterdam/design-system/issues/1151)) ([7679acc](https://github.com/Amsterdam/design-system/commit/7679acc7542c2e3d1279b9eaa364031092d16016))
* Set explicit white background on text fields ([#1200](https://github.com/Amsterdam/design-system/issues/1200)) ([e22d48e](https://github.com/Amsterdam/design-system/commit/e22d48eae8994eb370e3edef38a0ca1e015925bf))
* Time input component ([#1202](https://github.com/Amsterdam/design-system/issues/1202)) ([ccec68e](https://github.com/Amsterdam/design-system/commit/ccec68efafa02d5f9ac9bd4abea6c5e7cb72d556))

### Bug Fixes

* Fix SearchField styling on Safari on iOS ([#1203](https://github.com/Amsterdam/design-system/issues/1203)) ([eb05fff](https://github.com/Amsterdam/design-system/commit/eb05fff8295af3c59ef584700e3c1bc06da0c924))

## [0.7.1](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.7.0...design-system-css-v0.7.1) (2024-03-22)

### Features

* Add Avatar component ([#1134](https://github.com/Amsterdam/design-system/issues/1134)) ([8dec2cf](https://github.com/Amsterdam/design-system/commit/8dec2cff8f7885ccb163774c0dc979fb2c781256))
* Add Form Field Character Counter ([#1114](https://github.com/Amsterdam/design-system/issues/1114)) ([779ae8c](https://github.com/Amsterdam/design-system/commit/779ae8c9764b23508ffbfb38c6dc2f7a7c1cbd28))

### Bug Fixes

* Use semantic Heading for the title of a Dialog ([#1123](https://github.com/Amsterdam/design-system/issues/1123)) ([0493fd8](https://github.com/Amsterdam/design-system/commit/0493fd87587d36a83bb7aa9cbb69b8debf5d66f0))

## [0.7.0](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.6.1...design-system-css-v0.7.0) (2024-03-12)

### ⚠ BREAKING CHANGES

* Shorten namespaces in theme and tokens ([#1125](https://github.com/Amsterdam/design-system/issues/1125))

### Features

* Shorten namespaces in theme and tokens ([#1125](https://github.com/Amsterdam/design-system/issues/1125)) ([1c81f3b](https://github.com/Amsterdam/design-system/commit/1c81f3bd14c1f202eec2341aec1888fb74d956d5))

## [0.6.1](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.6.0...design-system-css-v0.6.1) (2024-03-11)

### Bug Fixes

* Button fixes ([#1122](https://github.com/Amsterdam/design-system/issues/1122)) ([b5a9504](https://github.com/Amsterdam/design-system/commit/b5a950491f46710d92526ce6012f7d76992a569f))

## [0.6.0](https://github.com/Amsterdam/design-system/compare/design-system-css-v0.5.0...design-system-css-v0.6.0) (2024-03-08)

### ⚠ BREAKING CHANGES

* Rename ‘header logo’ to ‘header logo link’ and add missing token for outline offset ([#1108](https://github.com/Amsterdam/design-system/issues/1108))
* Merge tokens for start and end padding ([#1112](https://github.com/Amsterdam/design-system/issues/1112))
* Use spacing tokens in Grid component ([#1089](https://github.com/Amsterdam/design-system/issues/1089))
* Remove whitespace at the right end of dialog content ([#1091](https://github.com/Amsterdam/design-system/issues/1091))

### Features

* Add and use tokens for inside space ([#1093](https://github.com/Amsterdam/design-system/issues/1093)) ([81c9f7a](https://github.com/Amsterdam/design-system/commit/81c9f7acece4f6747150416a3db9f1258c2f6b3d))
* Add Column component and Gap and Margin utilities for vertical spacing ([#1083](https://github.com/Amsterdam/design-system/issues/1083)) ([d092cb3](https://github.com/Amsterdam/design-system/commit/d092cb30e865f712b91b9b197803db7443e2c8cc))
* Add Fieldset component ([#1081](https://github.com/Amsterdam/design-system/issues/1081)) ([e9683c7](https://github.com/Amsterdam/design-system/commit/e9683c7a603fcfd031d6f24769789cc0d63b3c3d))
* Add Radio, update Checkbox and Switch ([#1100](https://github.com/Amsterdam/design-system/issues/1100)) ([79224e3](https://github.com/Amsterdam/design-system/commit/79224e3d97389ec1a5ae1a36fb4012de10109d66))
* Add Tabs component ([#1068](https://github.com/Amsterdam/design-system/issues/1068)) ([4eec887](https://github.com/Amsterdam/design-system/commit/4eec887c579f478b552126e684aba28d037bf9cb))
* Add TextArea Component ([#1095](https://github.com/Amsterdam/design-system/issues/1095)) ([2a50130](https://github.com/Amsterdam/design-system/commit/2a5013025823e32435ed6a7fe9bcbd138deaf511))
* Allow lists to appear in white on a dark background ([#1074](https://github.com/Amsterdam/design-system/issues/1074)) ([14132ed](https://github.com/Amsterdam/design-system/commit/14132edeb96f96c65f0f73cc17a8462afd32d108))
* Introduce tokens for stack spacing and Row component ([#1113](https://github.com/Amsterdam/design-system/issues/1113)) ([f5dba78](https://github.com/Amsterdam/design-system/commit/f5dba78a27610e717b3c10e5babd4ee7059f07f5))
* Logo Museum Weesp  ([#1088](https://github.com/Amsterdam/design-system/issues/1088)) ([da1b780](https://github.com/Amsterdam/design-system/commit/da1b7808b5bcf17acb93fe46531a9722814e9256))
* Merge tokens for start and end padding ([#1112](https://github.com/Amsterdam/design-system/issues/1112)) ([20f46ba](https://github.com/Amsterdam/design-system/commit/20f46babe51c087198bf58c7d3e506a3fd3c70a8))
* Refactor button component ([#1065](https://github.com/Amsterdam/design-system/issues/1065)) ([c9984e3](https://github.com/Amsterdam/design-system/commit/c9984e3a5a9492b25e7b40bd9cf67945f4cd0fa1))
* Remove storybook composition ([#1092](https://github.com/Amsterdam/design-system/issues/1092)) ([fe1ed69](https://github.com/Amsterdam/design-system/commit/fe1ed69634e41338be72c6633fb322d7f4507777))
* Rename ‘header logo’ to ‘header logo link’ and add missing token for outline offset ([#1108](https://github.com/Amsterdam/design-system/issues/1108)) ([f87e834](https://github.com/Amsterdam/design-system/commit/f87e8345ec900ab08941d5d7ab40f8abd16a569a))
* Use spacing tokens in Grid component ([#1089](https://github.com/Amsterdam/design-system/issues/1089)) ([b55f0a3](https://github.com/Amsterdam/design-system/commit/b55f0a3b64dcfb660a878ade75033a1dd835ac2d))

### Bug Fixes

* Remove whitespace at the right end of dialog content ([#1091](https://github.com/Amsterdam/design-system/issues/1091)) ([23e1253](https://github.com/Amsterdam/design-system/commit/23e1253e38bba8ac85ebbd696af37742d1c1a02d))

## [0.5.0](https://github.com/Amsterdam/design-system/compare/@aram-limpens/design-system-css@0.4.0...design-system-css-v0.5.0) (2024-02-09)

### ⚠ BREAKING CHANGES

* Add theme setup and compact theme ([#1067](https://github.com/Amsterdam/design-system/issues/1067))
* Rename `root.css` to `index.css` ([#1067](https://github.com/Amsterdam/design-system/issues/1067))
* Remove deprecated `inList` variant of Link ([#1064](https://github.com/Amsterdam/design-system/issues/1064))

### Features

* Add theme setup and compact theme ([#1067](https://github.com/Amsterdam/design-system/issues/1067)) ([e773434](https://github.com/Amsterdam/design-system/commit/e7734347a9e7205d510a16a543294bde69b9c6f0))
* Rename `root.css` to `index.css` ([#1067](https://github.com/Amsterdam/design-system/issues/1067)) ([e773434](https://github.com/Amsterdam/design-system/commit/e7734347a9e7205d510a16a543294bde69b9c6f0))
* Hyphenate headings and other large text components ([#1056](https://github.com/Amsterdam/design-system/issues/1056)) ([f875171](https://github.com/Amsterdam/design-system/commit/f8751716018d4ed269a086e1764741ad29714fa0))
* Remove deprecated `inList` variant of Link ([#1064](https://github.com/Amsterdam/design-system/issues/1064)) ([b30784b](https://github.com/Amsterdam/design-system/commit/b30784b352b4a057069ceb397951b79a6e2547f2))

## [0.4.0](https://github.com/Amsterdam/design-system/compare/@aram-limpens/design-system-css@0.3.0...@aram-limpens/design-system-css@0.4.0) (2024-01-31)

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

* Update alert appearance, make ‘warning’ the default and icon non-optional ([#993](https://github.com/Amsterdam/design-system/issues/993)) ([df15253](https://github.com/Amsterdam/design-system/commit/df152538278a73c4aceb094fece70025ff35dc5f))

## [0.3.0](https://github.com/Amsterdam/design-system/compare/@aram-limpens/design-system-css@0.2.0...@aram-limpens/design-system-css@0.3.0) (2023-12-22)

### ⚠ BREAKING CHANGES

* Replace `fullWidth` prop on `Grid.Cell` with an `"all"` value on `span` (#963)
* Rename ‘Highlight’ component to ‘Spotlight’ (#929)
* Update line heights and text levels (#898)

### Features

* Add Header Component ([#807](https://github.com/Amsterdam/design-system/issues/807)) ([34abcd0](https://github.com/Amsterdam/design-system/commit/34abcd07a849fda94fd46bf995b540e20928c2bf))
* Add Search Field component ([#892](https://github.com/Amsterdam/design-system/issues/892)) ([dd1a437](https://github.com/Amsterdam/design-system/commit/dd1a437d46c4ac7d43d64f7c1acadecc377e7928))
* Add Skip link component ([#988](https://github.com/Amsterdam/design-system/issues/988)) ([82323b5](https://github.com/Amsterdam/design-system/commit/82323b594c7fba99819cf6873227ca3dcd084315))
* Add text input component ([#912](https://github.com/Amsterdam/design-system/issues/912)) ([d4401cc](https://github.com/Amsterdam/design-system/commit/d4401ccf9d41d5c8a48ec32d63cdaabec549d5f2))
* Introduce ‘Mark’ component ([#933](https://github.com/Amsterdam/design-system/issues/933)) ([d399454](https://github.com/Amsterdam/design-system/commit/d399454ed729a595cab902c83e54d61e3c2aaf71))
* Introduce ‘Overlap’ component for hero image with search field ([#932](https://github.com/Amsterdam/design-system/issues/932)) ([1b2e87d](https://github.com/Amsterdam/design-system/commit/1b2e87db032d1500e301c2027596a5c908d59c8c))
* Rename ‘Highlight’ component to ‘Spotlight’ ([#929](https://github.com/Amsterdam/design-system/issues/929)) ([9993d8d](https://github.com/Amsterdam/design-system/commit/9993d8dd4ff17ec5e686295d711cc7688f7ce28c))
* Replace `fullWidth` prop on `Grid.Cell` with an `"all"` value on `span` ([#963](https://github.com/Amsterdam/design-system/issues/963)) ([b6a8b34](https://github.com/Amsterdam/design-system/commit/b6a8b3450af823f5c033f290783f013e6f20b205))
* Update line heights and text levels ([#898](https://github.com/Amsterdam/design-system/issues/898)) ([82356bb](https://github.com/Amsterdam/design-system/commit/82356bbf11c389c0f29146ca5f715d5b7459a634))

### Bug Fixes

* Adjust size of breadcrumb separator and allow natural text wrapping ([#913](https://github.com/Amsterdam/design-system/issues/913)) ([caba940](https://github.com/Amsterdam/design-system/commit/caba94024c5aedf9092a5afbbf625d921fd124b5))
* Improve examples and documentation for cards ([#936](https://github.com/Amsterdam/design-system/issues/936)) ([0f91370](https://github.com/Amsterdam/design-system/commit/0f913702de12cb7b9ca50e8f9da4899c3d934320))
* Merge grid cell files into grid files and directories ([#815](https://github.com/Amsterdam/design-system/issues/815)) ([f4b4ec5](https://github.com/Amsterdam/design-system/commit/f4b4ec5de92d283ee2ef083075297a64b3dfd1cb))
* Resolve malformed outline and remove excessive white space on dialog ([#937](https://github.com/Amsterdam/design-system/issues/937)) ([1fc264a](https://github.com/Amsterdam/design-system/commit/1fc264ac577edaa92e37d4c7e81427dd75b6dbe7))
* Use rems for checkbox underline ([#944](https://github.com/Amsterdam/design-system/issues/944)) ([8622326](https://github.com/Amsterdam/design-system/commit/8622326b8686856c44ad03856bac886ee4e5632b))

## [0.2.0](https://github.com/Amsterdam/design-system/compare/@aram-limpens/design-system-css@0.1.9...@aram-limpens/design-system-css@0.2.0) (2023-12-01)

### ⚠ BREAKING CHANGES

* Update typography system and values, implement compact theme (#803)

### Features

* Add common link tokens and use them in all link-like components ([#814](https://github.com/Amsterdam/design-system/issues/814)) ([9b5bd55](https://github.com/Amsterdam/design-system/commit/9b5bd55d0b118f246b828e023b75be1e84f98af4))
* Allow end-alignment on page menu ([#835](https://github.com/Amsterdam/design-system/issues/835)) ([035ca08](https://github.com/Amsterdam/design-system/commit/035ca08842ee8ad955b260fb26693fe739801df4))
* Allow small and large vertical white space on grids ([#821](https://github.com/Amsterdam/design-system/issues/821)) ([aa54eb9](https://github.com/Amsterdam/design-system/commit/aa54eb911bfed633856a74e0be4e11d4ad8f3ebc))
* Update typography system and values, implement compact theme ([#803](https://github.com/Amsterdam/design-system/issues/803)) ([9b087ec](https://github.com/Amsterdam/design-system/commit/9b087ec5c6e75dfafadcdcde710747ef63951917))

## [0.1.9](https://github.com/Amsterdam/design-system/compare/@aram-limpens/design-system-css@0.1.8...@aram-limpens/design-system-css@0.1.9) (2023-11-27)

**Note:** Version bump only for package @aram-limpens/design-system-css
