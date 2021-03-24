import { tokenize, ready } from './tokenize';
import { ScriptKind, Platform } from './host';

export { ScriptKind, Platform, ready };

// TODO: 还需要代码缓存缓存
export function renderTsCode(
  code: string,
  lang: ScriptKind = 'ts',
  platform: Platform = 'browser',
) {
  const linesTokens = tokenize(
    code,
    lang,
    platform === 'node' ? 'node' : 'browser',
  );

  debugger;
  return linesTokens.map((line) => {
    let code = '';

    for (const token of line) {
      code += '<span';

      if (token.class) {
        code += ` class="${token.class}"`
      }

      if (token.info) {
        code += ` ls-info="${token.info}"`;
      }

      code += `>${token.text}</span>`;
    }

    return code;
  });
}
