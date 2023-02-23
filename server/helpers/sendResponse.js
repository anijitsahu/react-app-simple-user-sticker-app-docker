export function sendResponse(status, output, res) {
  res.status(Number(status)).json(output);
}
