import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks';

import image from './assets/light-bulbs-5488573_1280.jpg';

export const model = [
    new TitleBlock('Easy site\'s counstructor', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new ColumnsBlock([
        'Easy app',
        'JS native application',
        'No library or framework'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new ImageBlock(image, {
        styles: {
            display: 'flex',
            'justify-content': 'center',
            'margin-top': '1rem',
            'margin-bottom': '1rem',
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'some image'
    }),
    new TextBlock('Working in native JS', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-size': '1.5rem',
            'font-weight': 'bold'
        }
    })
];