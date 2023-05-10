export default function getTemplateContent(templateHTML) {
  const template = document.createElement('template');
  template.innerHTML = templateHTML.trim();
  return {
    cssContent: template.content.firstChild,
    htmlContent: template.content.lastChild,
  };
}
