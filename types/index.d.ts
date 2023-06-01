declare namespace TWF {
  /**
   * Image component
   *
   * @param _props - Record<string, any>
   * @param _props.class - String of one or more CSS class names
   * @param _props.src - `<img src={src}>` - default: random placeholder image
   * @param _props.alt - `<img alt={alt}>` required for non-decorative images
   */
  export type Image = typeof import("~/Image.astro").default;
  export const Image: Image;
}
