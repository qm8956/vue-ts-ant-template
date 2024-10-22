import { defineConfig, presetAttributify, presetIcons, presetUno, transformerVariantGroup } from 'unocss';

import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
			scale: 1,
			warn: true,
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle',
        width: '1em',
        height: '1em',
			},
			customizations: {
				transform(svg, collection, icon) {
					// cf-开发表示colorful，使用svg自己的颜色
					if (icon.startsWith('cf-')) {
						return svg;
					}
					return svg.replace(/(fill|stroke)(-rule)?="((?!none).*?)"/g, '$1$2="currentColor"');
				},
			},
			collections: {
				'si': FileSystemIconLoader('./src/assets/icons')
			},
		}),
  ],
  transformers: [transformerVariantGroup()],
  shortcuts: [
		['wh-full', 'w-full h-full'],
    ['f-cc', 'flex items-center justify-center'],
		['f-cb', 'flex items-center justify-between'],
		['col', 'flex-basis-0 flex-grow-1 max-w-100%'], // flex子块自适应，简单理解为flex: 1,但与其不同
	],
  rules: [
    [
			'p-c', // 使用时只需要写 p-c 即可应用该组样式
			{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: `translate(-50%, -50%)`,
			},
		],
  ],
  /**
	 * 注意这里之前使用import { readdirSync } from 'fs';中的readdirSync读取文件文件名，但是会导致vscode插件提示失效
	 * 所以改为静态配置，具体报错可以将上面注释代码icon1和icon2使用到这里，代开vscode Toggel Deleloper Tools就可以看到具体错误
	 */
  safelist: []
});
