import type { Meta, StoryObj } from '@storybook/html';
import { d20 } from '../assets/d20';
import { createAssetStory } from './createAssetStory';

const meta: Meta = {
  title: 'Assets/d20',
  parameters: {
    docs: {
      description: {
        component: `
# ${d20.name}

## Properties
- **Scale**: ${d20.scale.join(' × ')}
- **Faces**: ${d20.faces?.length || 'N/A'} faces
- **Format**: GLTF with textures
        `
      }
    }
  }
};

export default meta;

export const Default: StoryObj = createAssetStory(d20, 'd20');
