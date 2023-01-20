import {test} from "@playwright/test"

import {useB} from "./C"

test("foo", async () => {
    useB();
})

/*

david@inLeagueGS65:~/rmme/playwright-module-resolution-stack$ npx playwright test test

Running 0 tests using 0 workers

ReferenceError: document is not defined

   at A.ts:1

> 1 | import iziToast from "izitoast";
    | ^
  2 |
  3 | export function useIziToast() {
  4 |     console.log(iziToast);

    at /home/david/rmme/playwright-module-resolution-stack/node_modules/izitoast/dist/js/iziToast.js:23:10
    at /home/david/rmme/playwright-module-resolution-stack/node_modules/izitoast/dist/js/iziToast.js:10:20
    at Object.<anonymous> (/home/david/rmme/playwright-module-resolution-stack/node_modules/izitoast/dist/js/iziToast.js:14:3)
    at Object.<anonymous> (/home/david/rmme/playwright-module-resolution-stack/A.ts:1:1)
=================
 no tests found.
=================

*/

/*

in the above it would be nice to see a stack containing
    A.ts ->
    B.ts ->
    C.ts ->
    test.spec.ts

*/