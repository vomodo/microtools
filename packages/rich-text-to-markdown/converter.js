// HTML to Markdown converter (Microtools)
// Place this file in packages/rich-text-to-markdown/converter.js in the monorepo

function htmlToMarkdown(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    let markdown = '';
    function processNode(node) {
        if (node.nodeType === Node.TEXT_NODE) return node.textContent;
        if (node.nodeType !== Node.ELEMENT_NODE) return '';
        const tag = node.tagName.toLowerCase();
        let content = '';
        for (let child of node.childNodes) content += processNode(child);
        switch (tag) {
            case 'strong':
            case 'b': return `**${content}**`;
            case 'em':
            case 'i': return `*${content}*`;
            case 'u': return `<u>${content}</u>`;
            case 'h1': return `\n# ${content}\n`;
            case 'h2': return `\n## ${content}\n`;
            case 'h3': return `\n### ${content}\n`;
            case 'h4': return `\n#### ${content}\n`;
            case 'h5': return `\n##### ${content}\n`;
            case 'h6': return `\n###### ${content}\n`;
            case 'p': return `${content}\n\n`;
            case 'br': return '\n';
            case 'ul': return `\n${content}`;
            case 'ol': return `\n${content}`;
            case 'li':
                const parent = node.parentElement;
                const prefix = parent && parent.tagName.toLowerCase() === 'ol' ? '1. ' : '- ';
                return `${prefix}${content}\n`;
            case 'a':
                const href = node.getAttribute('href') || '';
                return `[${content}](${href})`;
            case 'code':
                return node.parentElement && node.parentElement.tagName.toLowerCase() === 'pre'
                    ? content
                    : `\`${content}\``;
            case 'pre': return `\n\`\`\`\n${content}\`\`\`\n`;
            case 'blockquote': return `\n> ${content.split('\n').join('\n> ')}\n`;
            case 'hr': return '\n---\n';
            case 'img':
                const src = node.getAttribute('src') || '';
                const alt = node.getAttribute('alt') || '';
                return `![${alt}](${src})`;
            default: return content;
        }
    }
    markdown = processNode(temp);
    markdown = markdown.replace(/\n{3,}/g, '\n\n').trim();
    return markdown;
}
