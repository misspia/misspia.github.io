/**
 * This file is used to help resolve shader files
 * See https://stackoverflow.com/a/55427155
 */

declare module '*.glsl' {
  const value: string
  export default value
}

declare module '*.vert' {
  const value: string
  export default value
}

declare module '*.frag' {
  const value: string
  export default value
}
