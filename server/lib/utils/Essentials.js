/**
 * Prints to the console with a timestamp in dev mode.
 * @param {*} bypass If it should ignore the node_env.
 */
export function debug(data, bypass = false) {
  if (process.env.NODE_ENV === 'development' || bypass) {
    console.log(timestamp(data)); // NOTE Keep
  }
}