import { Component, component$, Slot } from "@builder.io/qwik";
import {
  DefaultLayoutContentCss,
  DefaultLayoutCss,
  DefaultLayoutFooterCss,
  DefaultLayoutHeaderCss,
  DefaultLayoutMainCss,
  DefaultLayoutSidebarCss,
} from "./default.css";

export interface DefaultLayout {
  headerComponent?: Component<any>;
  sidebar?: Component<any>;
  footer?: Component<any>;
}

export const DefaultLayout = component$(
  ({ headerComponent, footer, sidebar }: DefaultLayout) => {
    const HeaderComponent = headerComponent || (() => <></>);

    return (
      <div class={DefaultLayoutCss}>
        <aside class={DefaultLayoutSidebarCss}>{sidebar}</aside>
        <main className={DefaultLayoutMainCss}>
          {headerComponent ? (
            <header class={DefaultLayoutHeaderCss}>
              <HeaderComponent />
            </header>
          ) : null}
          <article class={DefaultLayoutContentCss}>
            <Slot />
          </article>
          <footer class={DefaultLayoutFooterCss}>{footer}</footer>
        </main>
      </div>
    );
  }
);
