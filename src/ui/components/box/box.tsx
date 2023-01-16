import { rainbowSprinkles, Sprinkles } from "~/ui/theme/rainbow-sprinkles.css";
import { component$, Slot } from "@builder.io/qwik";

export type BoxProps = typeof rainbowSprinkles & Sprinkles & any;

export const Box = component$((props: BoxProps) => {
  const { className, style, otherProps } = rainbowSprinkles(props);
  const Component = props.as || 'div';
  return (
    <Component class={[className, props.class].join(' ')} style={style} {...otherProps}>
      <Slot />
    </Component>
  );
});
