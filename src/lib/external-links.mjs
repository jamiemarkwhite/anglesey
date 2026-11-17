import { defineHastPlugin } from 'satteri';

const siteHost = 'www.theangleseyguide.com';

// Opens links to other sites in a new tab.
export const externalLinks = defineHastPlugin({
  name: 'external-links',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const href = String(node.properties?.href ?? '');
      if (!/^https?:\/\//.test(href) || new URL(href).host === siteHost) return;
      ctx.setProperty(node, 'target', '_blank');
      ctx.setProperty(node, 'rel', ['noopener']);
    },
  },
});
