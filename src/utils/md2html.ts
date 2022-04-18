import MarkdownIt from 'markdown-it';
import markdownItHignlightJs from 'markdown-it-highlightjs';
import markdownItAnchor from 'markdown-it-anchor'
import markdownItEmoji from "markdown-it-emoji"
import fs from 'fs';
import { escapeHtml, unescapeAll } from 'markdown-it/lib/common/utils';
const md = new MarkdownIt();
md.use(markdownItHignlightJs);
md.use(markdownItAnchor)
md.use(markdownItEmoji)



export function md2html(path: string) {
  return md.render(fs.readFileSync(path).toString());
}
