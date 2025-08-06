/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import { Icon } from '@amsterdam/design-system-react';
import MaleIcon from './Male';
import FemaleIcon from './Female';
import NeutralIcon from './Neutral';
const meta = {
    title: 'Components/GenderIcon',
    component: Icon,
};
export default meta;
export const Male = {
    args: {
        svg: MaleIcon,
    },
};
export const Female = {
    args: {
        svg: FemaleIcon,
    },
};
export const Neutral = {
    args: {
        svg: NeutralIcon,
    },
};
//# sourceMappingURL=GenderIcon.stories.js.map