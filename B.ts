import * as A from "./A";

export function wrapUseIziToast() {
    A.useIziToast();
}

export function seemsSafeToRunOnNode() {
    console.log("I could run on nodejs if not for the import of A")
}
