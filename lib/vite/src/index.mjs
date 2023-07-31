export const env = (...vars) => Object.fromEntries(vars.map((v) => [`import.meta.env.${v}`, process.env[v] ? `\`${process.env[v]}\`` : process.env[v]]))
