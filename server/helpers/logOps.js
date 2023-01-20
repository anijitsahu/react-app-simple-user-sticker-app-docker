import { createLogger, transports, format } from "winston";
const { combine, timestamp, json } = format;

const logger = createLogger({
  // write log to a file debug.log as well as console
  transports: [
    new transports.File({
      filename: "./logs/debug.log",
      format: combine(timestamp(), json()),
    }),
    new transports.Console(),
  ],
});

export { logger };
