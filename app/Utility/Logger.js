import Bugsnag from "@bugsnag/expo";

export const start = () => Bugsnag.start();

export const log = (error) => Bugsnag.notify(error);
