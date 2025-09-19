import appearance from './groups/appearance';
import boxModel from './groups/box-model';
import interaction from './groups/interaction';
import layout from './groups/layout';
import positioning from './groups/positioning';
import svgPresentation from './groups/svg-presentation';
import transition from './groups/transition';
import typography from './groups/typography';

const groupsProperty = [
	['composes'],
	['all'],
	interaction,
	positioning,
	layout,
	boxModel,
	typography,
	appearance,
	svgPresentation,
	transition,
];

export const propertiesOrder = groupsProperty.map((properties, groupName) => ({
	groupName,
	emptyLineBefore: 'never',
	noEmptyLineBetween: true,
	properties,
}));
