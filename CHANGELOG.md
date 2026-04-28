# Changelog

## 0.2.0 (2026-04-28)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/PierceLanternStudios/piercenew-typescript/compare/v0.1.0...v0.2.0)

### Features

* **mcp:** add an option to disable code tool ([b6c8253](https://github.com/PierceLanternStudios/piercenew-typescript/commit/b6c82536d5190f07e72a8cbc95672fb61f167e7b))
* **mcp:** add initial server instructions ([323d058](https://github.com/PierceLanternStudios/piercenew-typescript/commit/323d0586415dc93b3cfefecec954b49b168b84e1))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([7111d7e](https://github.com/PierceLanternStudios/piercenew-typescript/commit/7111d7eb9f4c36e5b5c617ffee6dc0c76f4a31f5))
* **client:** avoid removing abort listener too early ([3c5d04c](https://github.com/PierceLanternStudios/piercenew-typescript/commit/3c5d04cc53df471fdf7207b595c3909fbc26bee8))
* **client:** preserve URL params already embedded in path ([3604285](https://github.com/PierceLanternStudios/piercenew-typescript/commit/360428587912541a86b3e0230b56aafda1ddbec8))
* **docs/contributing:** correct pnpm link command ([cbd50ff](https://github.com/PierceLanternStudios/piercenew-typescript/commit/cbd50ffbda187f635306ee677ddcb0e845b476e4))
* **docs:** fix mcp installation instructions for remote servers ([4385e04](https://github.com/PierceLanternStudios/piercenew-typescript/commit/4385e04a2b30e5f91f7b6debb37798a7c816dfe4))
* **mcp:** allow falling back for required env variables ([43ca1f2](https://github.com/PierceLanternStudios/piercenew-typescript/commit/43ca1f21bff2fb3a17f943f9243d39d1441b0c9b))
* **mcp:** correct code tool api output types ([e769618](https://github.com/PierceLanternStudios/piercenew-typescript/commit/e76961899b86526ea898fd82fa52c9c22c7f4154))
* **mcp:** fix env parsing ([d77cdf4](https://github.com/PierceLanternStudios/piercenew-typescript/commit/d77cdf4fac4934070626ab354254535663440095))
* **mcp:** fix options parsing ([3624249](https://github.com/PierceLanternStudios/piercenew-typescript/commit/36242492896780cb6cd4e5d423750de6d0fe5706))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([2d1cffe](https://github.com/PierceLanternStudios/piercenew-typescript/commit/2d1cffe80fd6a44798bb3eab59542669245bb00f))
* **mcp:** update cloudflare worker host page ([69695e9](https://github.com/PierceLanternStudios/piercenew-typescript/commit/69695e9f36e35451a1bf50d65978e2e895c33bd4))
* **mcp:** update code tool prompt ([e09a9f7](https://github.com/PierceLanternStudios/piercenew-typescript/commit/e09a9f7d6704fdab254e5632d15d1389f6e117f7))


### Chores

* break long lines in snippets into multiline ([da53c52](https://github.com/PierceLanternStudios/piercenew-typescript/commit/da53c5288d0c3f3f2a816b9bd5869820b60a00e7))
* **ci:** skip uploading artifacts on stainless-internal branches ([d3350e8](https://github.com/PierceLanternStudios/piercenew-typescript/commit/d3350e8d42622eb9248867dff81d4cda5d7935f3))
* **ci:** upgrade `actions/github-script` ([4a65552](https://github.com/PierceLanternStudios/piercenew-typescript/commit/4a65552a4de1d2e122ef65c1df950cd2e1b1dda4))
* **client:** do not parse responses with empty content-length ([69a8e9f](https://github.com/PierceLanternStudios/piercenew-typescript/commit/69a8e9f3b68857880b3a9b6970a234ffd299de41))
* **client:** restructure abort controller binding ([9453ca5](https://github.com/PierceLanternStudios/piercenew-typescript/commit/9453ca564a927168e0bb138881a35a67e31ddd0e))
* configure new SDK language ([cd347e0](https://github.com/PierceLanternStudios/piercenew-typescript/commit/cd347e0787e41215777cb36d807ba3ce510409b5))
* configure new SDK language ([cb5f222](https://github.com/PierceLanternStudios/piercenew-typescript/commit/cb5f22269273fa2a9c266bc8ea60ab088510fcd0))
* configure new SDK language ([595f448](https://github.com/PierceLanternStudios/piercenew-typescript/commit/595f4484e1bd35e88a68bdb09babcd3c7bfcd3e2))
* **internal/client:** fix form-urlencoded requests ([c98fc7f](https://github.com/PierceLanternStudios/piercenew-typescript/commit/c98fc7f2a0ea3ccd646c0637b731851d58dca101))
* **internal:** add health check to MCP server when running in HTTP mode ([093ef73](https://github.com/PierceLanternStudios/piercenew-typescript/commit/093ef730aaa8350ab57290f4e6cf2a2523a33dfc))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([9fa31ea](https://github.com/PierceLanternStudios/piercenew-typescript/commit/9fa31eab57f2737061814d3f1e786c302802d12f))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([00c3dfe](https://github.com/PierceLanternStudios/piercenew-typescript/commit/00c3dfee99b6066aa3b4560a072cc6cba272a015))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([dd2c854](https://github.com/PierceLanternStudios/piercenew-typescript/commit/dd2c8540a3502975eebd2a407d8ce8a10883150a))
* **internal:** avoid type checking errors with ts-reset ([5d0fbc5](https://github.com/PierceLanternStudios/piercenew-typescript/commit/5d0fbc53a8347a93679127cee9b293e9e7cab4e4))
* **internal:** bump MCP dependencies ([685e1eb](https://github.com/PierceLanternStudios/piercenew-typescript/commit/685e1ebdf85c5c230ffd6f890313971af27ecc67))
* **internal:** cache fetch instruction calls in MCP server ([ed962b6](https://github.com/PierceLanternStudios/piercenew-typescript/commit/ed962b684a522155f04a5137a697e15352f1050b))
* **internal:** codegen related update ([505f2c1](https://github.com/PierceLanternStudios/piercenew-typescript/commit/505f2c1ff1fdcc613d5642cf950278239346afa0))
* **internal:** codegen related update ([bced1f9](https://github.com/PierceLanternStudios/piercenew-typescript/commit/bced1f96dbe0bb0279e7556235e0c62875733b81))
* **internal:** codegen related update ([7746202](https://github.com/PierceLanternStudios/piercenew-typescript/commit/77462021b438405ef977cbbbd4e79932ef0b88be))
* **internal:** codegen related update ([5f342a1](https://github.com/PierceLanternStudios/piercenew-typescript/commit/5f342a129117ca32287b786d427b510d4ff3a69e))
* **internal:** codegen related update ([6fe09b3](https://github.com/PierceLanternStudios/piercenew-typescript/commit/6fe09b38abe43f0b1c25db1749c3f59fbc7ccbd8))
* **internal:** codegen related update ([c75e3f1](https://github.com/PierceLanternStudios/piercenew-typescript/commit/c75e3f18745f1cc25e5dd853f1111669fb3d6bb8))
* **internal:** codegen related update ([669532a](https://github.com/PierceLanternStudios/piercenew-typescript/commit/669532a5870c3217f81d165c238f741d33440195))
* **internal:** codegen related update ([6989864](https://github.com/PierceLanternStudios/piercenew-typescript/commit/6989864258580ce2c3e69634e2968734d87013db))
* **internal:** codegen related update ([6e4f20b](https://github.com/PierceLanternStudios/piercenew-typescript/commit/6e4f20bc3534701941c31a1ff63fcc393278bbe7))
* **internal:** codegen related update ([580096e](https://github.com/PierceLanternStudios/piercenew-typescript/commit/580096ef2ba390c737f15d30eee8bfd9c900300e))
* **internal:** codegen related update ([da74783](https://github.com/PierceLanternStudios/piercenew-typescript/commit/da74783cd331890d1fa94f29f29e6f9c8126260a))
* **internal:** codegen related update ([9baea4e](https://github.com/PierceLanternStudios/piercenew-typescript/commit/9baea4e604ae04c12f97c2bd3e0dbad04da2abfe))
* **internal:** codegen related update ([c52a0a7](https://github.com/PierceLanternStudios/piercenew-typescript/commit/c52a0a75e564b8d9aa2ca4f3df975ec5521a3928))
* **internal:** codegen related update ([41636d4](https://github.com/PierceLanternStudios/piercenew-typescript/commit/41636d41407cfe7682dcc732bb5f827e6074d88c))
* **internal:** codegen related update ([24d54a6](https://github.com/PierceLanternStudios/piercenew-typescript/commit/24d54a671aed41251efac1d6b12ce8eeb3122792))
* **internal:** codegen related update ([fcc1e72](https://github.com/PierceLanternStudios/piercenew-typescript/commit/fcc1e725019c2d20c36fe43edd8047a6344bdfa3))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([84fd7a8](https://github.com/PierceLanternStudios/piercenew-typescript/commit/84fd7a81ab025408a82848a73c89f6d762ae1ff9))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([5c33886](https://github.com/PierceLanternStudios/piercenew-typescript/commit/5c338860690e7651c2e484c1eb77cdfa55993abb))
* **internal:** improve layout of generated MCP server files ([0ec0587](https://github.com/PierceLanternStudios/piercenew-typescript/commit/0ec05875a1147b7026b4dabc796f3e49ea0bc6a8))
* **internal:** improve reliability of MCP servers when using local code mode execution ([604370d](https://github.com/PierceLanternStudios/piercenew-typescript/commit/604370d6e57468038dad669549d12801e9a3f712))
* **internal:** make MCP code execution location configurable via a flag ([eeb2b03](https://github.com/PierceLanternStudios/piercenew-typescript/commit/eeb2b038eb976deb0ed9665d2fde4377c739fe59))
* **internal:** move stringifyQuery implementation to internal function ([d62c113](https://github.com/PierceLanternStudios/piercenew-typescript/commit/d62c11359f75202ec6e767cadc8f0f22d896c406))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([40b7c52](https://github.com/PierceLanternStudios/piercenew-typescript/commit/40b7c52a742d221729a23aa1f692b008d852cd3d))
* **internal:** remove mock server code ([c8155e4](https://github.com/PierceLanternStudios/piercenew-typescript/commit/c8155e40eefa8aa3e6591cd44c6b29bcdaebd8f6))
* **internal:** support oauth authorization code flow for MCP servers ([3808467](https://github.com/PierceLanternStudios/piercenew-typescript/commit/3808467ca7ee8a32ac1a37e80dcea46a9a3ea53d))
* **internal:** update `actions/checkout` version ([6bda165](https://github.com/PierceLanternStudios/piercenew-typescript/commit/6bda165d2a6f4cf8c22d31eb2094360d430a4179))
* **internal:** update lock file ([7d7c577](https://github.com/PierceLanternStudios/piercenew-typescript/commit/7d7c57719407f570a393d6c1ca7c0df3f7896b03))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([202f94e](https://github.com/PierceLanternStudios/piercenew-typescript/commit/202f94e08f7c1748b93f5ed99a32a805d47ac7f2))
* **internal:** upgrade babel, qs, js-yaml ([460dd15](https://github.com/PierceLanternStudios/piercenew-typescript/commit/460dd1548b734f1f66b2727db6ad33c4bb581d6b))
* **internal:** upgrade brace-expansion and @babel/helpers ([77bef6f](https://github.com/PierceLanternStudios/piercenew-typescript/commit/77bef6fd4ad2ba268f2128788fc9494d87b4c5c1))
* **internal:** upgrade pnpm ([77b2beb](https://github.com/PierceLanternStudios/piercenew-typescript/commit/77b2bebbcd659fd6c2b90a67f614b62fb1d4eff8))
* **internal:** upgrade pnpm version ([3a0835f](https://github.com/PierceLanternStudios/piercenew-typescript/commit/3a0835ff71dc36d5d7a856eebbd11953fdc30810))
* **internal:** upgrade wrangler version ([d27fc57](https://github.com/PierceLanternStudios/piercenew-typescript/commit/d27fc5703979e54e00ee4f45d1f2b36ec371b6b1))
* **mcp-server:** improve instructions ([493c16c](https://github.com/PierceLanternStudios/piercenew-typescript/commit/493c16cdc2ff715bde07146ea5f314cff3c8f6f9))
* **mcp-server:** return access instructions for 404 without API key ([f9d48f9](https://github.com/PierceLanternStudios/piercenew-typescript/commit/f9d48f9fa79790afdb7763b9e9ff3cc8acf91ecc))
* **mcp:** add intent param to execute tool ([ca23cb6](https://github.com/PierceLanternStudios/piercenew-typescript/commit/ca23cb64ca7a964b3cfc8b62a5e4f75860273ec7))
* **mcp:** correctly update version in sync with sdk ([5e6a740](https://github.com/PierceLanternStudios/piercenew-typescript/commit/5e6a74012c43242b73e2c69e66f9cb88064fb6da))
* **mcp:** disable stainless api code mode 0.0 ([fa9544d](https://github.com/PierceLanternStudios/piercenew-typescript/commit/fa9544d57e1d9400d84614b5676a4eb917949486))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([49635e5](https://github.com/PierceLanternStudios/piercenew-typescript/commit/49635e5bfcf5741625f60df2cb346db72cdad65d))
* **mcp:** pass intent param to execute handler ([75439d7](https://github.com/PierceLanternStudios/piercenew-typescript/commit/75439d754deacd4d670e6893669d1bce57e0103e))
* **mcp:** up tsconfig lib version to es2022 ([018c5e4](https://github.com/PierceLanternStudios/piercenew-typescript/commit/018c5e4369bd8bd4517e8712c3e424511c6e6b93))
* **mcp:** upgrade dependencies ([1a96257](https://github.com/PierceLanternStudios/piercenew-typescript/commit/1a962570690454031dca23c8af647aafed02aa56))
* update mock server docs ([d9c9196](https://github.com/PierceLanternStudios/piercenew-typescript/commit/d9c9196c833e2a4aa200f688e8841ffd4be98208))
* update placeholder string ([4f89a4f](https://github.com/PierceLanternStudios/piercenew-typescript/commit/4f89a4f082b0525c91ed89c51b2086692e94d7da))

## 0.1.0 (2026-01-05)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/PierceLanternStudios/piercenew-typescript/compare/v0.0.1...v0.1.0)

### Features

* **api:** manual updates ([bdd6cae](https://github.com/PierceLanternStudios/piercenew-typescript/commit/bdd6cae317067963b7aa645fe91f25bf99539986))


### Chores

* configure new SDK language ([b7e3d58](https://github.com/PierceLanternStudios/piercenew-typescript/commit/b7e3d5813089fdb6a5dc7bd078ead3a4abbbe1d1))
* update SDK settings ([d1d893c](https://github.com/PierceLanternStudios/piercenew-typescript/commit/d1d893cfcbdaeac7d7c777e5751dc9e1a9e38721))
* update SDK settings ([ef805a9](https://github.com/PierceLanternStudios/piercenew-typescript/commit/ef805a9163adfe84e8021ccb63ad940e41b5a3fa))
