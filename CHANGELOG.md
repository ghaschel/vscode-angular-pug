# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.3.3](https://github.com/ghaschel/vscode-angular-pug/compare/v0.3.2...v0.3.3) (2022-08-09)

### [0.3.2](https://github.com/ghaschel/vscode-angular-pug/compare/v0.3.0...v0.3.2) (2022-08-09)

### Features

- **template interpolation:** feature support and bugfix ([55a7ba1](https://github.com/ghaschel/vscode-angular-pug/commit/55a7ba167d517e5fbb9a610f3bc5352c8791c84f))

# 0.3.1 (19/06/2020)

- Fixed problems with multiline expressions with backquotes [#5](https://github.com/ghaschel/vscode-angular-pug/issues/5)
- Fixed problem with angular attributes without following equal [#5](https://github.com/ghaschel/vscode-angular-pug/issues/5)

# 0.3.0 (23/08/2019)

- Added support for attributes without equals
- Fixed case of single asterisk being not highlighted

# 0.2.11 (23/08/2019)

- Fixed `then` and `else` not being highlighted inside `*ngIf` directives

# 0.2.10 (15/08/2019)

- Fixed an issue with & in plaintext being showed as invalid

# 0.2.9 (14/08/2019)

- Fixed an issue with multiple directives/attributes at the sime line.

# 0.2.8 (24/05/2019)

- Fixed an issue with angular attributes with underlines

# 0.2.7 (05/02/2019)

- Added highlighting for uppercase characters inside attributes (they were white)

# 0.1.7 (_11/01/2019_)

- Fixed an issue with optional acessor `(?.)`
- Fixed an issue with async pipe [#1](https://github.com/ghaschel/vscode-angular-pug/issues/1)

# 0.1.6 (_28/12/2018_)

- Changed scope names
- Added a custom pattern for angular expression matching
- Improved html entities pattern match
- Improved highlighting for class pattern matching

# 0.0.2 (_16/11/2018_) - First release

- Support for angular interpolations
- Support for angular directives
- Regex support
- Better highlighting for attributes
- Better highlighting for ids
- DOM Events support see [complete list](DOM-EVENTS.md)
- Changed scope names for pug comments
- Changed highlighting for doctype

# 0.0.1 (_15/11/2018_)

- Init
